import TypeIndex from '../../indexing/type_index'
import HexParser from '../../parsing/hex_parser'
import ParsingBuffer from '../../parsing/parsing_buffer'
import ParsingConstants from '../../parsing/parsing_constants'
import {
  EncodedToken,
  EncodedUnicodeCharacter as EncodedAsciiCharacter,
  encodeToken,
} from '../../parsing/token_parsing'
import StepAttributeMap, { ATTRIBUTE_PARSE_TYPE } from './step_attribute_map'
import StepCommentParser from './step_comment_parser'
import StepEntityIdentifierParser from './step_entity_identifier_parser'
import StepEnumParser from './step_enum_parser'
import StepStringParser from './step_string_parser'
import StepVtableBuilder, { IndexMark } from './step_vtable_builder'


export interface StepIndexEntryBase< TypeIDType > {

    address: number;
    length: number;
    typeID?: TypeIDType;
    expressID?: number;
    inlineEntities?: StepInlineIndexEntry< TypeIDType > [];
}

export interface StepInlineIndexEntry< TypeIDType > extends StepIndexEntryBase< TypeIDType > {

    expressID?: undefined;
}

export interface StepIndexEntry< TypeIDType >  extends StepIndexEntryBase< TypeIDType > {

    expressID: number;
}

export interface StepIndex< TypeIDType > {

    elements: StepIndexEntry< TypeIDType >[];

}

// https://github.com/stepcode/stepcode/blob/develop/src/cleditor/STEPfile.cc (REFERENCE)

/**
 *
 */
/* eslint-disable no-shadow, no-unused-vars, no-magic-numbers */
// -- eslint doesn't understand enums properly.
export enum ParseResult {

    COMPLETE     = 0,
    INCOMPLETE   = 1,
    SYNTAX_ERROR = 2,
    MISSING_TYPE = 3,
    INVALID_STEP = 4,
}
/* eslint-enable no-shadow, no-unused-vars, no-magic-numbers */

const ISO_10303_21 = encodeToken( 'ISO-10303-21' )
const HEADER       = encodeToken( 'HEADER' )
const DATA         = encodeToken( 'DATA' )
const END_SECTION  = encodeToken( 'ENDSEC' )
const HASH         = ParsingConstants.HASH
const EQUALS       = ParsingConstants.EQUALS
const COMMA        = ParsingConstants.COMMA
const OPEN_PAREN   = ParsingConstants.OPEN_PAREN
const CLOSE_PAREN  = ParsingConstants.CLOSE_PAREN
const SEMICOLON    = ParsingConstants.SEMICOLON
const WHITESPACE   = ParsingConstants.WHITE_SPACE_SET
const QUOTE        = ParsingConstants.QUOTE

const enumParser       = StepEnumParser.Instance.match
const identifierParser = StepEntityIdentifierParser.Instance.match
const binaryParser     = HexParser.Instance.step
const attributeMap     = StepAttributeMap.Instance.get
const commentParser    = StepCommentParser.Instance.match
const stringParser     = StepStringParser.Instance.match

export type BlockParseResult< TypeIDType > = [StepIndex< TypeIDType >, ParseResult];

export interface StepHeader
{
    headers: Map< string, string >;
}

export type HeaderParseResult = [StepHeader, ParseResult];

const textDecoder = new TextDecoder()

/**
 * Parses out STEP files to allow indexing and deserialization.
 */
export default class StepParser< TypeIDType > {

  /* eslint-disable no-useless-constructor, no-empty-function */
  /**
   * Construct this with the type-index that will be used to map element types
   * to tokens.
   *
   * @param index_ The index.
   */
  constructor(private readonly index_: Readonly< TypeIndex< TypeIDType > >) {}
  /* eslint-enable no-useless-constructor, no-empty-function */

  /**
   * Will parse the input up to data block (including the DATA token).
   *
   * @param input The input buffer to parse the header from.
   * @return {HeaderParseResult} The parse result for the header, plus the header values.
   */
  public parseHeader( input: ParsingBuffer ): HeaderParseResult {
    const match          = input.match
    const comment        = () => match( commentParser )
    const whitespace     = () => {
      do {
        input.whitespace()
      } while ( comment() )
    }
    const char           = input.char
    const charws         = ( encoded: EncodedAsciiCharacter ) => {
      whitespace(); return char( encoded )
    }
    const token          = input.token
    const tokenws        = ( encoded: EncodedToken ) => {
      whitespace(); return token( encoded )
    }

    const stringMatch    = () => match( stringParser )
    const binaryHex      = () => match( binaryParser )
    const real           = input.real
    const unsigned       = input.unsigned
    const unsignedws     = () => {
      whitespace(); return unsigned()
    }
    const enumeration    = () => match( enumParser )
    const identifier     = () => match( identifierParser )

    const headers: StepHeader = { headers: new Map< string, string >() }

    const parseResult    = ( value: ParseResult ): HeaderParseResult => [headers, value]
    const syntaxError    = (): HeaderParseResult => [headers, ParseResult.SYNTAX_ERROR]

    if ( !tokenws( ISO_10303_21 ) ) {
      return parseResult( ParseResult.INVALID_STEP )
    }

    if ( !charws( SEMICOLON ) ) {
      return parseResult( ParseResult.SYNTAX_ERROR )
    }

    if ( !tokenws( HEADER ) ) {
      return parseResult( ParseResult.INVALID_STEP )
    }

    if ( !charws( SEMICOLON ) ) {
      return parseResult(  ParseResult.SYNTAX_ERROR )
    }

    while ( input.unfinished && !tokenws( END_SECTION ) ) {
      const startIdentifier = input.cursor

      whitespace()

      if ( !identifier() ) {
        return syntaxError()
      }

      const headerID = textDecoder.decode( input.buffer.subarray( startIdentifier, input.cursor ) )

      let firstAttribute = true

      whitespace()

      const startBlock = input.cursor

      if ( !char( OPEN_PAREN ) ) {
        return syntaxError()
      }

      let stackDepth = 1

      while ( stackDepth > 0 ) {
        if ( charws( CLOSE_PAREN ) ) {
          firstAttribute = false
          --stackDepth
          continue
        }

        if ( !firstAttribute ) {
          if ( !char( COMMA ) ) {
            return syntaxError()
          }
        }

        firstAttribute = false

        whitespace()

        const nextChar = input.peek()

        if ( nextChar === (void 0) ) {
          return syntaxError()
        }

        switch ( attributeMap( nextChar ) ) {
          case ATTRIBUTE_PARSE_TYPE.INVALID:

            return syntaxError()

          case ATTRIBUTE_PARSE_TYPE.NUMBER:

            if ( !real() ) {
              return syntaxError()
            }
            break

          case ATTRIBUTE_PARSE_TYPE.ENUM:

            if ( !enumeration() ) {
              return syntaxError()
            }
            break

          case ATTRIBUTE_PARSE_TYPE.STRING:

            if ( !stringMatch() ) {
              return syntaxError()
            }
            break

          case ATTRIBUTE_PARSE_TYPE.REFERENCE:

            input.step()

            if ( !unsignedws() ) {
              return syntaxError()
            }
            break

          case ATTRIBUTE_PARSE_TYPE.CONTAINER:

            firstAttribute = true
            input.step()
            ++stackDepth
            break

          case ATTRIBUTE_PARSE_TYPE.HEXBITS:

            if ( !binaryHex() ) {
              return syntaxError()
            }
            break

          case ATTRIBUTE_PARSE_TYPE.NULL:

            input.step()
            break

          case ATTRIBUTE_PARSE_TYPE.DERIVED:

            input.step()
            break

          default:

        }
      }

      whitespace()

      const headerBlock = textDecoder.decode( input.buffer.subarray( startBlock, input.cursor ) )

      headers.headers.set( headerID, headerBlock )

      if ( !charws( SEMICOLON ) ) {
        return syntaxError()
      }
    }

    if ( !charws( SEMICOLON ) ) {
      return syntaxError()
    }

    if ( !tokenws( DATA ) ) {
      return syntaxError()
    }

    if ( !charws( SEMICOLON ) ) {
      return syntaxError()
    }

    return parseResult( ParseResult.COMPLETE )
  }

  /**
   * This uses a much lighter non correctness verifying parse to extract the locations of
   * the fields for an entry, using the v-table builder to
   * append the top level entries.
   *
   * In this case, the cursor should represent the start of the
   *
   * @param input
   * @param cursor
   * @param endCursor
   * @param vtableBuilder
   * @return {[IndexMark, number] | undefined} The vtable slice or undefined if it's not
   * defined due to an error.
   */
  public extractDataEntry(
      input: Uint8Array,
      cursor: number,
      endCursor: number,
      vtableBuilder: StepVtableBuilder ): [IndexMark, number] | undefined {
    let stackDepth = 1

    while ( cursor < endCursor && stackDepth > 0 ) {
      // skip whitespace.
      while ( cursor < endCursor && WHITESPACE.has( input[ cursor ] ) ) {
        ++cursor
      }

      if ( cursor === endCursor ) {
        if ( stackDepth === 1 ) {
          return vtableBuilder.complete()
        } else {
          return
        }
      }

      if ( stackDepth === 1 ) {
        vtableBuilder.push( cursor )
      }

      // Eat characters until we get to a comma or close paren.
      while ( cursor < endCursor ) {
        const readChar = input[ cursor ]

        // String is a special case because it might contain control characters,
        // we will run the string parsing DFA to skip over it.
        if ( readChar === QUOTE ) {
          const parsedStringOffset = stringParser( input, cursor, endCursor )

          // Couldn't parse a string, something's wrong.
          if ( parsedStringOffset === void 0 ) {
            return
          }

          cursor = parsedStringOffset
          continue
        }

        ++cursor

        // Comma starts a new param entry
        if ( readChar === COMMA ) {
          break
        } else if ( readChar === SEMICOLON ) {
          return vtableBuilder.complete()

        // Will effectively terminate if this is the end of the entity,
        // or simply end the inline entity/container case otherwise.
        } else if ( readChar === CLOSE_PAREN ) {
          --stackDepth

        // Handles inline entity case and container cases.
        } else if ( readChar === OPEN_PAREN ) {
          ++stackDepth
          break
        }
      }
    }

    return vtableBuilder.complete()
  }

  /**
   * Parse the data block of a step file, indexing it.,
   *
   * @param input The input parsing buffer, in the data section.
   * @return {BlockParseResult} The parsing result, including the index and result enum.
   */
  public parseDataBlock( input: ParsingBuffer ): BlockParseResult< TypeIDType > {

    const indexResult: StepIndex< TypeIDType > = { elements: [] }

    const match          = input.match
    const comment        = () => match( commentParser )
    const whitespace     = () => {
      do {
        input.whitespace()
      } while ( comment() )
    }
    const char           = input.char
    const charws         = ( encoded: EncodedAsciiCharacter ) => {
      whitespace(); return char( encoded )
    }
    const token          = input.token
    const tokenws        = ( encoded: EncodedToken ) => {
      whitespace(); return token( encoded )
    }

    const stringMatch    = () => match( stringParser )
    const binaryHex      = () => match( binaryParser )
    const real           = input.real
    const unsigned       = input.unsigned
    const unsignedws     = () => {
      whitespace(); return unsigned()
    }
    const readUnsigned   = input.readUnsigned
    const readUnsignedws = () => {
      whitespace(); return readUnsigned()
    }
    const enumeration    = () => match( enumParser )
    const identifier     = () => match( identifierParser )
    const parseResult    = ( value: ParseResult ): BlockParseResult< TypeIDType > => {
      /* console.trace();*/ return [indexResult, value]
    }
    const syntaxError    = (): BlockParseResult< TypeIDType > => {
      /* console.trace();*/ return [indexResult, ParseResult.SYNTAX_ERROR]
    }

    let inlineElements: StepInlineIndexEntry< TypeIDType >[] | undefined

    const parseInlineElement = (): BlockParseResult< TypeIDType > | undefined => {

      whitespace()

      const startIdentifier = input.cursor

      if ( !identifier() ) {
        return syntaxError()
      }

      const foundItem = this.index_.get( input.buffer, startIdentifier, input.cursor )

      let firstAttribute = true

      if ( !charws( OPEN_PAREN ) ) {
        return syntaxError()
      }

      whitespace()

      const startElement = input.cursor
      let stackDepth   = 1

      const savedInlineElements = inlineElements

      inlineElements = void 0

      while ( stackDepth > 0 ) {
        if ( charws( CLOSE_PAREN ) ) {
          firstAttribute = false
          --stackDepth
          continue
        }

        if ( !firstAttribute ) {
          if ( !char( COMMA ) ) {
            return syntaxError()
          }
        }

        firstAttribute = false

        whitespace()

        const nextChar = input.peek()

        if ( nextChar === (void 0) ) {
          return syntaxError()
        }

        switch ( attributeMap( nextChar ) ) {
          case ATTRIBUTE_PARSE_TYPE.INVALID:

            return syntaxError()

          case  ATTRIBUTE_PARSE_TYPE.INLINE_INSTANCE: {

            // The semi-colon above is needed for an unambiguous
            // typescript parse.
            // eslint-disable-next-line semi
            const elementResult = parseInlineElement();

            <StepInlineIndexEntry< TypeIDType >[] | undefined>inlineElements

            if ( elementResult !== ( void 0 ) ) {
              return elementResult
            }
            break
          }

          case ATTRIBUTE_PARSE_TYPE.NUMBER:

            if ( !real() ) {
              return syntaxError()
            }
            break

          case ATTRIBUTE_PARSE_TYPE.ENUM:

            if ( !enumeration() ) {
              return syntaxError()
            }
            break

          case ATTRIBUTE_PARSE_TYPE.STRING:

            if ( !stringMatch() ) {
              return syntaxError()
            }
            break

          case ATTRIBUTE_PARSE_TYPE.REFERENCE:

            input.step()

            if ( !unsignedws() ) {
              return syntaxError()
            }
            break

          case ATTRIBUTE_PARSE_TYPE.CONTAINER:

            firstAttribute = true
            input.step()
            ++stackDepth
            break

          case ATTRIBUTE_PARSE_TYPE.HEXBITS:

            if ( !binaryHex() ) {
              return syntaxError()
            }
            break

          case ATTRIBUTE_PARSE_TYPE.NULL:

            input.step()
            break

          case ATTRIBUTE_PARSE_TYPE.DERIVED:

            input.step()
            break

          default:

        }
      }

      const nestedInlineElements = inlineElements

      inlineElements = savedInlineElements

      inlineElements ??= []

      inlineElements.push(
          {
            address: startElement,
            length: input.address,
            typeID: foundItem,
            inlineEntities: nestedInlineElements,
          } )

    }

    while ( input.unfinished ) {

      if ( !charws( HASH ) ) {
        if ( tokenws( END_SECTION ) ) {
          return parseResult( ParseResult.COMPLETE )

        } else {
          return parseResult( ParseResult.INCOMPLETE )
        }
      }

      // TODO! work out range check - CS
      const expressID = readUnsignedws()

      if ( expressID === undefined ) {
        return syntaxError()
      }

      if ( !charws( EQUALS ) ) {
        return syntaxError()
      }

      whitespace()

      const startIdentifier = input.cursor

      if ( !identifier() ) {
        return syntaxError()
      }

      const foundItem = this.index_.get( input.buffer, startIdentifier, input.cursor )

      let firstAttribute = true

      if ( !charws( OPEN_PAREN ) ) {
        return syntaxError()
      }

      whitespace()

      const startElement = input.cursor
      let stackDepth   = 1

      inlineElements = void 0

      while ( stackDepth > 0 ) {
        if ( charws( CLOSE_PAREN ) ) {
          firstAttribute = false
          --stackDepth
          continue
        }

        if ( !firstAttribute ) {
          if ( !char( COMMA ) ) {
            return syntaxError()
          }
        }

        firstAttribute = false

        whitespace()

        const nextChar = input.peek()

        if ( nextChar === (void 0) ) {
          return syntaxError()
        }

        switch ( attributeMap( nextChar ) ) {
          case ATTRIBUTE_PARSE_TYPE.INVALID:

            return syntaxError()

          case  ATTRIBUTE_PARSE_TYPE.INLINE_INSTANCE: {

            const elementResult = parseInlineElement()

            if ( elementResult !== ( void 0 ) ) {
              return elementResult
            }
            break
          }

          case ATTRIBUTE_PARSE_TYPE.NUMBER:

            if ( !real() ) {
              return syntaxError()
            }
            break

          case ATTRIBUTE_PARSE_TYPE.ENUM:

            if ( !enumeration() ) {
              return syntaxError()
            }
            break

          case ATTRIBUTE_PARSE_TYPE.STRING:

            if ( !stringMatch() ) {
              return syntaxError()
            }
            break

          case ATTRIBUTE_PARSE_TYPE.REFERENCE:

            input.step()

            if ( !unsignedws() ) {
              return syntaxError()
            }
            break

          case ATTRIBUTE_PARSE_TYPE.CONTAINER:

            firstAttribute = true
            input.step()
            ++stackDepth
            break

          case ATTRIBUTE_PARSE_TYPE.HEXBITS:

            if ( !binaryHex() ) {
              return syntaxError()
            }
            break

          case ATTRIBUTE_PARSE_TYPE.NULL:

            input.step()
            break

          case ATTRIBUTE_PARSE_TYPE.DERIVED:

            input.step()
            break

          default:

        }
      }

      if ( !charws( SEMICOLON ) ) {
        return syntaxError()
      }

      indexResult.elements.push(
          {
            address: startElement,
            length: input.address,
            typeID: foundItem,
            expressID: expressID,
            inlineEntities: inlineElements,
          } )
    }

    // Got here without finding an end of the section.
    return parseResult( ParseResult.INCOMPLETE )
  }

}

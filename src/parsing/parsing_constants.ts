import ByteBitSet from './char_bit_set'
import { encodeCharacter, encodeToken } from './token_parsing'


const whiteSpaceBuffer = encodeToken( ' \t\r\n' )
const whitespaceSet   = new ByteBitSet()

whitespaceSet.set( whiteSpaceBuffer )

/**
 * Constants to be used for parsing value or STEP.
 */
export default class ParsingConstants {
  public static readonly SPACE           = encodeCharacter( ' ' )
  public static readonly STAR            = encodeCharacter( '*' )
  public static readonly SLASH           = encodeCharacter( '/' )
  public static readonly TAB             = encodeCharacter( '\t' )
  public static readonly NEWLINE         = encodeCharacter( '\n' )
  public static readonly HASH            = encodeCharacter( '#' )
  public static readonly OPEN_PAREN      = encodeCharacter( '(' )
  public static readonly CLOSE_PAREN     = encodeCharacter( ')' )
  public static readonly COMMA           = encodeCharacter( ',' )
  public static readonly DOLLAR          = encodeCharacter( '$' )
  public static readonly COLON           = encodeCharacter( ';' )
  public static readonly SEMICOLON       = encodeCharacter( ';' )
  public static readonly BSLASH          = encodeCharacter( '\\' )
  public static readonly ZERO            = encodeCharacter( '0' )
  public static readonly NINE            = encodeCharacter( '9' )
  public static readonly SIGN            = encodeCharacter( '-' )
  public static readonly SIGN_NUM        = ParsingConstants.SIGN - ParsingConstants.ZERO
  public static readonly DOT             = encodeCharacter( '.' )
  public static readonly DOT_NUM         = ParsingConstants.DOT - ParsingConstants.ZERO
  public static readonly CAPITAL_X       = encodeCharacter( 'X' )
  public static readonly CAPITAL_S       = encodeCharacter( 'S' )
  public static readonly CAPITAL_P       = encodeCharacter( 'P' )
  public static readonly LOWER_CASE_X    = encodeCharacter( 'x' )
  public static readonly A               = encodeCharacter( 'A' )
  public static readonly a               = encodeCharacter( 'a' )
  public static readonly I               = encodeCharacter( 'I' )
  public static readonly Z               = encodeCharacter( 'Z' )
  public static readonly F               = encodeCharacter( 'F' )
  public static readonly LOWER_A         = encodeCharacter( 'a' )
  public static readonly LOWER_Z         = encodeCharacter( 'z' )
  public static readonly LOWER_F         = encodeCharacter( 'f' )
  public static readonly E               = encodeCharacter( 'E' )
  public static readonly LOWER_E         = encodeCharacter( 'e' )
  public static readonly UNDERSCORE      = encodeCharacter( '_' )
  public static readonly EQUALS          = encodeCharacter( '=' )
  public static readonly QUOTE           = encodeCharacter( '\'' )
  public static readonly DOUBLEQUOTE     = encodeCharacter( '"' )
  public static readonly WHITE_SPACE     = whiteSpaceBuffer
  public static readonly WHITE_SPACE_SET = whitespaceSet
}


import { external_identification_assignment } from "./index"
import { document_file } from "./index"
import { externally_defined_class } from "./index"
import { externally_defined_general_property } from "./index"
import { product_definition } from "./index"
import {
  stepExtractOptional,
  stepExtractArrayToken,
  stepExtractArrayBegin,
  skipValue,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/applied_external_identification_assignment.htm */
export  class applied_external_identification_assignment extends external_identification_assignment {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.APPLIED_EXTERNAL_IDENTIFICATION_ASSIGNMENT
  }
  private items_? : Array<document_file | externally_defined_class | externally_defined_general_property | product_definition>

  public get items() : Array<document_file | externally_defined_class | externally_defined_general_property | product_definition> {
    if ( this.items_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 3 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return []
      }

      const value : Array<document_file | externally_defined_class | externally_defined_general_property | product_definition> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1Untyped : StepEntityBase< EntityTypesIfc > | undefined =
          this.extractBufferReference( buffer, cursor, endCursor )

        if ( !( value1Untyped instanceof document_file ) && !( value1Untyped instanceof externally_defined_class ) && !( value1Untyped instanceof externally_defined_general_property ) && !( value1Untyped instanceof product_definition ) ) {
          throw new Error( 'Value in select must be populated' )
        }

        const value1 = value1Untyped as (document_file | externally_defined_class | externally_defined_general_property | product_definition)
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.items_ = value
    }

    return this.items_ as Array<document_file | externally_defined_class | externally_defined_general_property | product_definition>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.APPLIED_EXTERNAL_IDENTIFICATION_ASSIGNMENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.APPLIED_EXTERNAL_IDENTIFICATION_ASSIGNMENT
}

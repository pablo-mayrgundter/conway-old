
import { IfcMaterialProfile } from "./index"
import { IfcLengthMeasure } from "./index"
import {
  stepExtractNumber,
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcmaterialprofilewithoffsets.htm */
export  class IfcMaterialProfileWithOffsets extends IfcMaterialProfile {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCMATERIALPROFILEWITHOFFSETS
  }
  private OffsetValues_? : Array< number >

  public get OffsetValues() : Array< number > {
    if ( this.OffsetValues_ === void 0 ) {
      this.OffsetValues_ = this.extractLambda( 6, (buffer, cursor, endCursor) => {

      let value : Array<number> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          const value = stepExtractNumber( buffer, cursor, endCursor )
    
          if ( value === void 0 ) {
            throw new Error( 'Value needs to be defined in encapsulating context' )
          }
    
          return value 
        })() )
      }
      return value }, false )
    }

    return this.OffsetValues_ as Array< number >
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCMATERIALPROFILEWITHOFFSETS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCMATERIALPROFILEWITHOFFSETS
}

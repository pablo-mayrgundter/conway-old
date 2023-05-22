
import { IfcMaterialLayer } from "./index"
import { IfcLayerSetDirectionEnum, IfcLayerSetDirectionEnumDeserializeStep } from "./index"
import { IfcLengthMeasure } from "./index"
import {
  stepExtractNumber,
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcmateriallayerwithoffsets.htm */
export  class IfcMaterialLayerWithOffsets extends IfcMaterialLayer {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCMATERIALLAYERWITHOFFSETS
  }
  private OffsetDirection_? : IfcLayerSetDirectionEnum
  private OffsetValues_? : Array< number >

  public get OffsetDirection() : IfcLayerSetDirectionEnum {
    if ( this.OffsetDirection_ === void 0 ) {
      this.OffsetDirection_ = this.extractLambda( 7, IfcLayerSetDirectionEnumDeserializeStep, false )
    }

    return this.OffsetDirection_ as IfcLayerSetDirectionEnum
  }

  public get OffsetValues() : Array< number > {
    if ( this.OffsetValues_ === void 0 ) {
      this.OffsetValues_ = this.extractLambda( 8, (buffer, cursor, endCursor) => {

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
    [ EntityTypesIfc.IFCMATERIALLAYERWITHOFFSETS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCMATERIALLAYERWITHOFFSETS
}

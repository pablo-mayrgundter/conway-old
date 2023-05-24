
import { IfcTypeResource } from "./index"
import { IfcAppliedValue } from "./index"
import { IfcPhysicalQuantity } from "./index"
import {
  stepExtractOptional,
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcconstructionresourcetype.htm */
export abstract class IfcConstructionResourceType extends IfcTypeResource {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCONSTRUCTIONRESOURCETYPE
  }
  private BaseCosts_? : Array<IfcAppliedValue> | null
  private BaseQuantity_? : IfcPhysicalQuantity | null

  public get BaseCosts() : Array<IfcAppliedValue> | null {
    if ( this.BaseCosts_ === void 0 ) {
      this.BaseCosts_ = this.extractLambda( 9, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<IfcAppliedValue> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcAppliedValue ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, true )
    }

    return this.BaseCosts_ as Array<IfcAppliedValue> | null
  }

  public get BaseQuantity() : IfcPhysicalQuantity | null {
    if ( this.BaseQuantity_ === void 0 ) {
      this.BaseQuantity_ = this.extractElement( 10, true, IfcPhysicalQuantity )
    }

    return this.BaseQuantity_ as IfcPhysicalQuantity | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCONSTRUCTIONEQUIPMENTRESOURCETYPE, EntityTypesIfc.IFCCONSTRUCTIONMATERIALRESOURCETYPE, EntityTypesIfc.IFCCONSTRUCTIONPRODUCTRESOURCETYPE, EntityTypesIfc.IFCCREWRESOURCETYPE, EntityTypesIfc.IFCLABORRESOURCETYPE, EntityTypesIfc.IFCSUBCONTRACTRESOURCETYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCONSTRUCTIONRESOURCETYPE
}

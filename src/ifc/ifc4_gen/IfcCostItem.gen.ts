
import { IfcControl } from "./index"
import { IfcCostItemTypeEnum, IfcCostItemTypeEnumDeserializeStep } from "./index"
import { IfcCostValue } from "./index"
import { IfcPhysicalQuantity } from "./index"
import {
  stepExtractOptional,
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccostitem.htm */
export  class IfcCostItem extends IfcControl {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCOSTITEM
  }
  private PredefinedType_? : IfcCostItemTypeEnum | null
  private CostValues_? : Array<IfcCostValue> | null
  private CostQuantities_? : Array<IfcPhysicalQuantity> | null

  public get PredefinedType() : IfcCostItemTypeEnum | null {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 6, IfcCostItemTypeEnumDeserializeStep, true )
    }

    return this.PredefinedType_ as IfcCostItemTypeEnum | null
  }

  public get CostValues() : Array<IfcCostValue> | null {
    if ( this.CostValues_ === void 0 ) {
      this.CostValues_ = this.extractLambda( 7, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<IfcCostValue> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcCostValue ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, true )
    }

    return this.CostValues_ as Array<IfcCostValue> | null
  }

  public get CostQuantities() : Array<IfcPhysicalQuantity> | null {
    if ( this.CostQuantities_ === void 0 ) {
      this.CostQuantities_ = this.extractLambda( 8, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<IfcPhysicalQuantity> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcPhysicalQuantity ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, true )
    }

    return this.CostQuantities_ as Array<IfcPhysicalQuantity> | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCOSTITEM ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCOSTITEM
}

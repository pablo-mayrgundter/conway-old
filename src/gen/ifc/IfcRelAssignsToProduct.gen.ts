
import { IfcRelAssigns } from "./index"
import { IfcProduct } from "./index"
import { IfcTypeProduct } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelassignstoproduct.htm */
export  class IfcRelAssignsToProduct extends IfcRelAssigns {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCRELASSIGNSTOPRODUCT
  }
  private RelatingProduct_? : IfcProduct | IfcTypeProduct

  public get RelatingProduct() : IfcProduct | IfcTypeProduct {
    if ( this.RelatingProduct_ === void 0 ) {
      this.RelatingProduct_ = this.extractLambda( 6, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcProduct ) && !( value instanceof IfcTypeProduct ) ) {
        return ( void 0 )
      }
      return value as (IfcProduct | IfcTypeProduct)
}, false )
    }

    return this.RelatingProduct_ as IfcProduct | IfcTypeProduct
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCRELASSIGNSTOPRODUCT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCRELASSIGNSTOPRODUCT
}


import { IfcRelConnects } from "./index"
import { IfcElement } from "./index"
import { IfcStructuralItem } from "./index"
import { IfcStructuralActivity } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelconnectsstructuralactivity.htm */
export  class IfcRelConnectsStructuralActivity extends IfcRelConnects {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCRELCONNECTSSTRUCTURALACTIVITY
  }
  private RelatingElement_? : IfcElement | IfcStructuralItem
  private RelatedStructuralActivity_? : IfcStructuralActivity

  public get RelatingElement() : IfcElement | IfcStructuralItem {
    if ( this.RelatingElement_ === void 0 ) {
      this.RelatingElement_ = this.extractLambda( 4, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcElement ) && !( value instanceof IfcStructuralItem ) ) {
        return ( void 0 )
      }
      return value as (IfcElement | IfcStructuralItem)
}, false )
    }

    return this.RelatingElement_ as IfcElement | IfcStructuralItem
  }

  public get RelatedStructuralActivity() : IfcStructuralActivity {
    if ( this.RelatedStructuralActivity_ === void 0 ) {
      this.RelatedStructuralActivity_ = this.extractElement( 5, false, IfcStructuralActivity )
    }

    return this.RelatedStructuralActivity_ as IfcStructuralActivity
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCRELCONNECTSSTRUCTURALACTIVITY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCRELCONNECTSSTRUCTURALACTIVITY
}
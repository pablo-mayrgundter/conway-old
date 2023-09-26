
import { IfcObjectPlacement } from "./index"
import { IfcVirtualGridIntersection } from "./index"
import { IfcDirection } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcgridplacement.htm */
export  class IfcGridPlacement extends IfcObjectPlacement {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCGRIDPLACEMENT
  }
  private PlacementLocation_? : IfcVirtualGridIntersection
  private PlacementRefDirection_? : IfcDirection | IfcVirtualGridIntersection | null

  public get PlacementLocation() : IfcVirtualGridIntersection {
    if ( this.PlacementLocation_ === void 0 ) {
      this.PlacementLocation_ = this.extractElement( 0, false, IfcVirtualGridIntersection )
    }

    return this.PlacementLocation_ as IfcVirtualGridIntersection
  }

  public get PlacementRefDirection() : IfcDirection | IfcVirtualGridIntersection | null {
    if ( this.PlacementRefDirection_ === void 0 ) {
      this.PlacementRefDirection_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcDirection ) && !( value instanceof IfcVirtualGridIntersection ) ) {
        return ( void 0 )
      }
      return value as (IfcDirection | IfcVirtualGridIntersection)
}, true )
    }

    return this.PlacementRefDirection_ as IfcDirection | IfcVirtualGridIntersection | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCGRIDPLACEMENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCGRIDPLACEMENT
}

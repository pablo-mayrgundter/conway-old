
import { IfcObjectPlacement } from "./index"
import { IfcAxis2Placement2D } from "./index"
import { IfcAxis2Placement3D } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifclocalplacement.htm */
export  class IfcLocalPlacement extends IfcObjectPlacement {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCLOCALPLACEMENT
  }
  private PlacementRelTo_? : IfcObjectPlacement | null
  private RelativePlacement_? : IfcAxis2Placement2D | IfcAxis2Placement3D

  public get PlacementRelTo() : IfcObjectPlacement | null {
    if ( this.PlacementRelTo_ === void 0 ) {
      this.PlacementRelTo_ = this.extractElement( 0, true, IfcObjectPlacement )
    }

    return this.PlacementRelTo_ as IfcObjectPlacement | null
  }

  public get RelativePlacement() : IfcAxis2Placement2D | IfcAxis2Placement3D {
    if ( this.RelativePlacement_ === void 0 ) {
      this.RelativePlacement_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcAxis2Placement2D ) && !( value instanceof IfcAxis2Placement3D ) ) {
        return ( void 0 )
      }
      return value as (IfcAxis2Placement2D | IfcAxis2Placement3D)
}, false )
    }

    return this.RelativePlacement_ as IfcAxis2Placement2D | IfcAxis2Placement3D
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCLOCALPLACEMENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCLOCALPLACEMENT
}

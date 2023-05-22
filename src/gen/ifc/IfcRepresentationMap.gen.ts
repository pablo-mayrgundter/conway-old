
import { IfcAxis2Placement2D } from "./index"
import { IfcAxis2Placement3D } from "./index"
import { IfcRepresentation } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrepresentationmap.htm */
export  class IfcRepresentationMap extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCREPRESENTATIONMAP
  }
  private MappingOrigin_? : IfcAxis2Placement2D | IfcAxis2Placement3D
  private MappedRepresentation_? : IfcRepresentation

  public get MappingOrigin() : IfcAxis2Placement2D | IfcAxis2Placement3D {
    if ( this.MappingOrigin_ === void 0 ) {
      this.MappingOrigin_ = this.extractLambda( 0, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcAxis2Placement2D ) && !( value instanceof IfcAxis2Placement3D ) ) {
        return ( void 0 )
      }
      return value as (IfcAxis2Placement2D | IfcAxis2Placement3D)
}, false )
    }

    return this.MappingOrigin_ as IfcAxis2Placement2D | IfcAxis2Placement3D
  }

  public get MappedRepresentation() : IfcRepresentation {
    if ( this.MappedRepresentation_ === void 0 ) {
      this.MappedRepresentation_ = this.extractElement( 1, false, IfcRepresentation )
    }

    return this.MappedRepresentation_ as IfcRepresentation
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCREPRESENTATIONMAP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCREPRESENTATIONMAP
}

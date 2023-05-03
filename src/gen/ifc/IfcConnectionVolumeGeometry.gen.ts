
import { IfcConnectionGeometry } from "./index"
import { IfcClosedShell } from "./index"
import { IfcSolidModel } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcconnectionvolumegeometry.htm */
export  class IfcConnectionVolumeGeometry extends IfcConnectionGeometry {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCONNECTIONVOLUMEGEOMETRY
  }
  private VolumeOnRelatingElement_? : IfcClosedShell | IfcSolidModel
  private VolumeOnRelatedElement_? : IfcClosedShell | IfcSolidModel | null

  public get VolumeOnRelatingElement() : IfcClosedShell | IfcSolidModel {
    if ( this.VolumeOnRelatingElement_ === void 0 ) {
      this.VolumeOnRelatingElement_ = this.extractLambda( 0, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcClosedShell ) && !( value instanceof IfcSolidModel ) ) {
        return ( void 0 )
      }
      return value as (IfcClosedShell | IfcSolidModel)
}, false )
    }

    return this.VolumeOnRelatingElement_ as IfcClosedShell | IfcSolidModel
  }

  public get VolumeOnRelatedElement() : IfcClosedShell | IfcSolidModel | null {
    if ( this.VolumeOnRelatedElement_ === void 0 ) {
      this.VolumeOnRelatedElement_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcClosedShell ) && !( value instanceof IfcSolidModel ) ) {
        return ( void 0 )
      }
      return value as (IfcClosedShell | IfcSolidModel)
}, true )
    }

    return this.VolumeOnRelatedElement_ as IfcClosedShell | IfcSolidModel | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCONNECTIONVOLUMEGEOMETRY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCONNECTIONVOLUMEGEOMETRY
}

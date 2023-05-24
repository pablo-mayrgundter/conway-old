
import { IfcCurve } from "./index"
import { IfcPcurve } from "./index"
import { IfcPreferredSurfaceCurveRepresentation, IfcPreferredSurfaceCurveRepresentationDeserializeStep } from "./index"
import { IfcSurface } from "./index"
import {
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'
import {
  IfcGetBasisSurface,
} from '../../core/ifc/ifc_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsurfacecurve.htm */
export  class IfcSurfaceCurve extends IfcCurve {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCSURFACECURVE
  }
  private Curve3D_? : IfcCurve
  private AssociatedGeometry_? : Array<IfcPcurve>
  private MasterRepresentation_? : IfcPreferredSurfaceCurveRepresentation

  public get Curve3D() : IfcCurve {
    if ( this.Curve3D_ === void 0 ) {
      this.Curve3D_ = this.extractElement( 0, false, IfcCurve )
    }

    return this.Curve3D_ as IfcCurve
  }

  public get AssociatedGeometry() : Array<IfcPcurve> {
    if ( this.AssociatedGeometry_ === void 0 ) {
      this.AssociatedGeometry_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      let value : Array<IfcPcurve> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcPcurve ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.AssociatedGeometry_ as Array<IfcPcurve>
  }

  public get MasterRepresentation() : IfcPreferredSurfaceCurveRepresentation {
    if ( this.MasterRepresentation_ === void 0 ) {
      this.MasterRepresentation_ = this.extractLambda( 2, IfcPreferredSurfaceCurveRepresentationDeserializeStep, false )
    }

    return this.MasterRepresentation_ as IfcPreferredSurfaceCurveRepresentation
  }

  public get BasisSurface() : Array<IfcSurface> {
    return IfcGetBasisSurface(this);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCSURFACECURVE, EntityTypesIfc.IFCINTERSECTIONCURVE, EntityTypesIfc.IFCSEAMCURVE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCSURFACECURVE
}

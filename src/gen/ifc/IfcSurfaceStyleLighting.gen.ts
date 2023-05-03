
import { IfcPresentationItem } from "./index"
import { IfcColourRgb } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsurfacestylelighting.htm */
export  class IfcSurfaceStyleLighting extends IfcPresentationItem {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCSURFACESTYLELIGHTING
  }
  private DiffuseTransmissionColour_? : IfcColourRgb
  private DiffuseReflectionColour_? : IfcColourRgb
  private TransmissionColour_? : IfcColourRgb
  private ReflectanceColour_? : IfcColourRgb

  public get DiffuseTransmissionColour() : IfcColourRgb {
    if ( this.DiffuseTransmissionColour_ === void 0 ) {
      this.DiffuseTransmissionColour_ = this.extractElement( 0, false, IfcColourRgb )
    }

    return this.DiffuseTransmissionColour_ as IfcColourRgb
  }

  public get DiffuseReflectionColour() : IfcColourRgb {
    if ( this.DiffuseReflectionColour_ === void 0 ) {
      this.DiffuseReflectionColour_ = this.extractElement( 1, false, IfcColourRgb )
    }

    return this.DiffuseReflectionColour_ as IfcColourRgb
  }

  public get TransmissionColour() : IfcColourRgb {
    if ( this.TransmissionColour_ === void 0 ) {
      this.TransmissionColour_ = this.extractElement( 2, false, IfcColourRgb )
    }

    return this.TransmissionColour_ as IfcColourRgb
  }

  public get ReflectanceColour() : IfcColourRgb {
    if ( this.ReflectanceColour_ === void 0 ) {
      this.ReflectanceColour_ = this.extractElement( 3, false, IfcColourRgb )
    }

    return this.ReflectanceColour_ as IfcColourRgb
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCSURFACESTYLELIGHTING ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCSURFACESTYLELIGHTING
}

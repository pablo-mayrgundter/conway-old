
import { IfcPresentationItem } from "./index"
import { IfcColourSpecification } from "./index"
import { IfcPreDefinedColour } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctextstylefordefinedfont.htm */
export  class IfcTextStyleForDefinedFont extends IfcPresentationItem {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCTEXTSTYLEFORDEFINEDFONT
  }
  private Colour_? : IfcColourSpecification | IfcPreDefinedColour
  private BackgroundColour_? : IfcColourSpecification | IfcPreDefinedColour | null

  public get Colour() : IfcColourSpecification | IfcPreDefinedColour {
    if ( this.Colour_ === void 0 ) {
      this.Colour_ = this.extractLambda( 0, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcColourSpecification ) && !( value instanceof IfcPreDefinedColour ) ) {
        return ( void 0 )
      }
      return value as (IfcColourSpecification | IfcPreDefinedColour)
}, false )
    }

    return this.Colour_ as IfcColourSpecification | IfcPreDefinedColour
  }

  public get BackgroundColour() : IfcColourSpecification | IfcPreDefinedColour | null {
    if ( this.BackgroundColour_ === void 0 ) {
      this.BackgroundColour_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcColourSpecification ) && !( value instanceof IfcPreDefinedColour ) ) {
        return ( void 0 )
      }
      return value as (IfcColourSpecification | IfcPreDefinedColour)
}, true )
    }

    return this.BackgroundColour_ as IfcColourSpecification | IfcPreDefinedColour | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCTEXTSTYLEFORDEFINEDFONT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCTEXTSTYLEFORDEFINEDFONT
}

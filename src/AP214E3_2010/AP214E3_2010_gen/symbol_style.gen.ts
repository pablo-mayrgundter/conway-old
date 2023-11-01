
import { founded_item } from "./index"
import { label } from "./index"
import { symbol_colour } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/symbol_style.htm */
export  class symbol_style extends founded_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SYMBOL_STYLE
  }
  private name_? : string
  private style_of_symbol_? : symbol_colour

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }

  public get style_of_symbol() : symbol_colour {
    if ( this.style_of_symbol_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 1, false )

      if ( !( value instanceof symbol_colour ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.style_of_symbol_ = value as (symbol_colour)

    }

    return this.style_of_symbol_ as symbol_colour
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SYMBOL_STYLE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SYMBOL_STYLE
}

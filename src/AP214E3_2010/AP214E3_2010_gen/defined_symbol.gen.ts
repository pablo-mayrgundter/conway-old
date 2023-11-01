
import { geometric_representation_item } from "./index"
import { pre_defined_symbol } from "./index"
import { externally_defined_symbol } from "./index"
import { symbol_target } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/defined_symbol.htm */
export  class defined_symbol extends geometric_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DEFINED_SYMBOL
  }
  private definition_? : pre_defined_symbol | externally_defined_symbol
  private target_? : symbol_target

  public get definition() : pre_defined_symbol | externally_defined_symbol {
    if ( this.definition_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 1, false )

      if ( !( value instanceof pre_defined_symbol ) && !( value instanceof externally_defined_symbol ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.definition_ = value as (pre_defined_symbol | externally_defined_symbol)

    }

    return this.definition_ as pre_defined_symbol | externally_defined_symbol
  }

  public get target() : symbol_target {
    if ( this.target_ === void 0 ) {
      this.target_ = this.extractElement( 2, false, symbol_target )
    }

    return this.target_ as symbol_target
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DEFINED_SYMBOL ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DEFINED_SYMBOL
}

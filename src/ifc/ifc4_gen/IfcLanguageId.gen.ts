
/* This is generated code, don't alter */
import { IfcIdentifier } from "./index"

import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifclanguageid.htm */
export class IfcLanguageId extends StepEntityBase< EntityTypesIfc > {    
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCLANGUAGEID
  }

  private Value_? : string;

  public get Value() : string {
    if ( this.Value_ === void 0 ) {
      this.Value_ = this.extractString( 0, false )
    }

    return this.Value_ as string
  }

  constructor(
      localID: number,
      internalReference: StepEntityInternalReference< EntityTypesIfc >,
      model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
     super( localID, internalReference, model )
  }

  public static readonly query =
    [ EntityTypesIfc.IFCLANGUAGEID ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCLANGUAGEID
}

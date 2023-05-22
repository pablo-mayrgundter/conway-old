
/* This is generated code, don't alter */

import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcspecularroughness.htm */
export class IfcSpecularRoughness extends StepEntityBase< EntityTypesIfc > {    
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCSPECULARROUGHNESS
  }

  private Value_? : number;

  public get Value() : number {
    if ( this.Value_ === void 0 ) {
      this.Value_ = this.extractNumber( 0, false )
    }

    return this.Value_ as number
  }

  constructor(
      localID: number,
      internalReference: StepEntityInternalReference< EntityTypesIfc >,
      model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
     super( localID, internalReference, model )
  }

  public static readonly query =
    [ EntityTypesIfc.IFCSPECULARROUGHNESS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCSPECULARROUGHNESS
}

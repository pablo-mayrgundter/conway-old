
import { person } from "./index"
import { organization } from "./index"
import { label } from "./index"
import { text } from "./index"
import {
  get_name_value,
  get_description_value,
} from '../ap214_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/person_and_organization.htm */
export  class person_and_organization extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PERSON_AND_ORGANIZATION
  }
  private the_person_? : person
  private the_organization_? : organization

  public get the_person() : person {
    if ( this.the_person_ === void 0 ) {
      this.the_person_ = this.extractElement( 0, false, person )
    }

    return this.the_person_ as person
  }

  public get the_organization() : organization {
    if ( this.the_organization_ === void 0 ) {
      this.the_organization_ = this.extractElement( 1, false, organization )
    }

    return this.the_organization_ as organization
  }

  public get name() : string {
    return get_name_value(this);
  }

  public get description() : string {
    return get_description_value(this);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PERSON_AND_ORGANIZATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PERSON_AND_ORGANIZATION
}

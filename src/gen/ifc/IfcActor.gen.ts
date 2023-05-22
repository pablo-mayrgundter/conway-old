
import { IfcObject } from "./index"
import { IfcOrganization } from "./index"
import { IfcPerson } from "./index"
import { IfcPersonAndOrganization } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcactor.htm */
export  class IfcActor extends IfcObject {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCACTOR
  }
  private TheActor_? : IfcOrganization | IfcPerson | IfcPersonAndOrganization

  public get TheActor() : IfcOrganization | IfcPerson | IfcPersonAndOrganization {
    if ( this.TheActor_ === void 0 ) {
      this.TheActor_ = this.extractLambda( 5, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcOrganization ) && !( value instanceof IfcPerson ) && !( value instanceof IfcPersonAndOrganization ) ) {
        return ( void 0 )
      }
      return value as (IfcOrganization | IfcPerson | IfcPersonAndOrganization)
}, false )
    }

    return this.TheActor_ as IfcOrganization | IfcPerson | IfcPersonAndOrganization
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCACTOR, EntityTypesIfc.IFCOCCUPANT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCACTOR
}

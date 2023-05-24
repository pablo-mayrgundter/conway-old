
import { IfcRelAssociates } from "./index"
import { IfcLibraryInformation } from "./index"
import { IfcLibraryReference } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelassociateslibrary.htm */
export  class IfcRelAssociatesLibrary extends IfcRelAssociates {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCRELASSOCIATESLIBRARY
  }
  private RelatingLibrary_? : IfcLibraryInformation | IfcLibraryReference

  public get RelatingLibrary() : IfcLibraryInformation | IfcLibraryReference {
    if ( this.RelatingLibrary_ === void 0 ) {
      this.RelatingLibrary_ = this.extractLambda( 5, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcLibraryInformation ) && !( value instanceof IfcLibraryReference ) ) {
        return ( void 0 )
      }
      return value as (IfcLibraryInformation | IfcLibraryReference)
}, false )
    }

    return this.RelatingLibrary_ as IfcLibraryInformation | IfcLibraryReference
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCRELASSOCIATESLIBRARY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCRELASSOCIATESLIBRARY
}

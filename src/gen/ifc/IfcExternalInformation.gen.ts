

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcexternalinformation.htm */
export abstract class IfcExternalInformation extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCEXTERNALINFORMATION
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCLASSIFICATION, EntityTypesIfc.IFCDOCUMENTINFORMATION, EntityTypesIfc.IFCLIBRARYINFORMATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCEXTERNALINFORMATION
}

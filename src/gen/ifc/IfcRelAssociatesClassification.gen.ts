
import { IfcRelAssociates } from "./index"
import { IfcClassification } from "./index"
import { IfcClassificationReference } from "./index"
import {
  stepExtractReference,
  stepExtractInlineElemement,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelassociatesclassification.htm */
export  class IfcRelAssociatesClassification extends IfcRelAssociates {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCRELASSOCIATESCLASSIFICATION
  }
  private RelatingClassification_? : IfcClassification|IfcClassificationReference

  public get RelatingClassification() : IfcClassification|IfcClassificationReference {
    if ( this.RelatingClassification_ === void 0 ) {
      this.RelatingClassification_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 5 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 5

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let expressID = stepExtractReference( buffer, cursor, endCursor );
      let value : StepEntityBase< EntityTypesIfc > | undefined =
        expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
        (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )))

      if ( !( value instanceof IfcClassification ) && !( value instanceof IfcClassificationReference ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      return value as (IfcClassification | IfcClassificationReference) })()
    }

    return this.RelatingClassification_ as IfcClassification|IfcClassificationReference
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCRELASSOCIATESCLASSIFICATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCRELASSOCIATESCLASSIFICATION
}

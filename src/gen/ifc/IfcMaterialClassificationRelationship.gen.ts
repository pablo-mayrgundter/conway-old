
import { IfcClassification } from "./index"
import { IfcClassificationReference } from "./index"
import { IfcMaterial } from "./index"
import {
  stepExtractReference,
  stepExtractInlineElemement,
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcmaterialclassificationrelationship.htm */
export  class IfcMaterialClassificationRelationship extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCMATERIALCLASSIFICATIONRELATIONSHIP
  }
  private MaterialClassifications_? : Array<IfcClassification|IfcClassificationReference>
  private ClassifiedMaterial_? : IfcMaterial

  public get MaterialClassifications() : Array<IfcClassification|IfcClassificationReference> {
    if ( this.MaterialClassifications_ === void 0 ) {
      this.MaterialClassifications_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 0 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 0

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let value : Array<IfcClassification|IfcClassificationReference> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => { 
          let cursor = address
    
          let expressID = stepExtractReference( buffer, cursor, endCursor );
          let value : StepEntityBase< EntityTypesIfc > | undefined =
            expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
            (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )))
    
          if ( !( value instanceof IfcClassification ) && !( value instanceof IfcClassificationReference ) ) {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value as (IfcClassification | IfcClassificationReference)
        })() )
      }

return value })()
    }

    return this.MaterialClassifications_ as Array<IfcClassification|IfcClassificationReference>
  }

  public get ClassifiedMaterial() : IfcMaterial {
    if ( this.ClassifiedMaterial_ === void 0 ) {
      this.ClassifiedMaterial_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 1 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 1

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

       let expressID = stepExtractReference( buffer, cursor, endCursor );
       let value =
         expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
         this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) )

      if ( !( value instanceof IfcMaterial ) )  {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      return value })()
    }

    return this.ClassifiedMaterial_ as IfcMaterial
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCMATERIALCLASSIFICATIONRELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCMATERIALCLASSIFICATIONRELATIONSHIP
}

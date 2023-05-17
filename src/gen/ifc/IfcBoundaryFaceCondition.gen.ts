
import { IfcBoundaryCondition } from "./index"
import { IfcBoolean } from "./index"
import { IfcModulusOfSubgradeReactionMeasure } from "./index"
import {
  stepExtractOptional,
  stepExtractReference,
  stepExtractInlineElemement,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcboundaryfacecondition.htm */
export  class IfcBoundaryFaceCondition extends IfcBoundaryCondition {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCBOUNDARYFACECONDITION
  }
  private TranslationalStiffnessByAreaX_? : IfcBoolean|IfcModulusOfSubgradeReactionMeasure | null
  private TranslationalStiffnessByAreaY_? : IfcBoolean|IfcModulusOfSubgradeReactionMeasure | null
  private TranslationalStiffnessByAreaZ_? : IfcBoolean|IfcModulusOfSubgradeReactionMeasure | null

  public get TranslationalStiffnessByAreaX() : IfcBoolean|IfcModulusOfSubgradeReactionMeasure | null {
    if ( this.TranslationalStiffnessByAreaX_ === void 0 ) {
      this.TranslationalStiffnessByAreaX_ = (() => { 
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
      let value : StepEntityBase< EntityTypesIfc > | undefined =
        expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
        (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )))

      if ( !( value instanceof IfcBoolean ) && !( value instanceof IfcModulusOfSubgradeReactionMeasure ) ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed for field' )
        }

        return null
      } else {
        return value as (IfcBoolean | IfcModulusOfSubgradeReactionMeasure);
      } })()
    }

    return this.TranslationalStiffnessByAreaX_ as IfcBoolean|IfcModulusOfSubgradeReactionMeasure | null
  }

  public get TranslationalStiffnessByAreaY() : IfcBoolean|IfcModulusOfSubgradeReactionMeasure | null {
    if ( this.TranslationalStiffnessByAreaY_ === void 0 ) {
      this.TranslationalStiffnessByAreaY_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 2 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 2

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let expressID = stepExtractReference( buffer, cursor, endCursor );
      let value : StepEntityBase< EntityTypesIfc > | undefined =
        expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
        (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )))

      if ( !( value instanceof IfcBoolean ) && !( value instanceof IfcModulusOfSubgradeReactionMeasure ) ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed for field' )
        }

        return null
      } else {
        return value as (IfcBoolean | IfcModulusOfSubgradeReactionMeasure);
      } })()
    }

    return this.TranslationalStiffnessByAreaY_ as IfcBoolean|IfcModulusOfSubgradeReactionMeasure | null
  }

  public get TranslationalStiffnessByAreaZ() : IfcBoolean|IfcModulusOfSubgradeReactionMeasure | null {
    if ( this.TranslationalStiffnessByAreaZ_ === void 0 ) {
      this.TranslationalStiffnessByAreaZ_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 3 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 3

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let expressID = stepExtractReference( buffer, cursor, endCursor );
      let value : StepEntityBase< EntityTypesIfc > | undefined =
        expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
        (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )))

      if ( !( value instanceof IfcBoolean ) && !( value instanceof IfcModulusOfSubgradeReactionMeasure ) ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed for field' )
        }

        return null
      } else {
        return value as (IfcBoolean | IfcModulusOfSubgradeReactionMeasure);
      } })()
    }

    return this.TranslationalStiffnessByAreaZ_ as IfcBoolean|IfcModulusOfSubgradeReactionMeasure | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCBOUNDARYFACECONDITION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCBOUNDARYFACECONDITION
}

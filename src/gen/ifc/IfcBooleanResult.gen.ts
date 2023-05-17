
import { IfcGeometricRepresentationItem } from "./index"
import { IfcBooleanOperator, IfcBooleanOperatorDeserializeStep } from "./index"
import { IfcCsgPrimitive3D } from "./index"
import { IfcHalfSpaceSolid } from "./index"
import { IfcSolidModel } from "./index"
import { IfcTessellatedFaceSet } from "./index"
import { IfcDimensionCount } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcbooleanresult.htm */
export  class IfcBooleanResult extends IfcGeometricRepresentationItem {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCBOOLEANRESULT
  }
  private Operator_? : IfcBooleanOperator
  private FirstOperand_? : IfcBooleanResult|IfcCsgPrimitive3D|IfcHalfSpaceSolid|IfcSolidModel|IfcTessellatedFaceSet
  private SecondOperand_? : IfcBooleanResult|IfcCsgPrimitive3D|IfcHalfSpaceSolid|IfcSolidModel|IfcTessellatedFaceSet

  public get Operator() : IfcBooleanOperator {
    if ( this.Operator_ === void 0 ) {
      this.Operator_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 0 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 0

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let value = IfcBooleanOperatorDeserializeStep( buffer, cursor, endCursor )

      if ( value === void 0 )  {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      return value })()
    }

    return this.Operator_ as IfcBooleanOperator
  }

  public get FirstOperand() : IfcBooleanResult|IfcCsgPrimitive3D|IfcHalfSpaceSolid|IfcSolidModel|IfcTessellatedFaceSet {
    if ( this.FirstOperand_ === void 0 ) {
      this.FirstOperand_ = (() => { 
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

      if ( !( value instanceof IfcBooleanResult ) && !( value instanceof IfcCsgPrimitive3D ) && !( value instanceof IfcHalfSpaceSolid ) && !( value instanceof IfcSolidModel ) && !( value instanceof IfcTessellatedFaceSet ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      return value as (IfcBooleanResult | IfcCsgPrimitive3D | IfcHalfSpaceSolid | IfcSolidModel | IfcTessellatedFaceSet) })()
    }

    return this.FirstOperand_ as IfcBooleanResult|IfcCsgPrimitive3D|IfcHalfSpaceSolid|IfcSolidModel|IfcTessellatedFaceSet
  }

  public get SecondOperand() : IfcBooleanResult|IfcCsgPrimitive3D|IfcHalfSpaceSolid|IfcSolidModel|IfcTessellatedFaceSet {
    if ( this.SecondOperand_ === void 0 ) {
      this.SecondOperand_ = (() => { 
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

      if ( !( value instanceof IfcBooleanResult ) && !( value instanceof IfcCsgPrimitive3D ) && !( value instanceof IfcHalfSpaceSolid ) && !( value instanceof IfcSolidModel ) && !( value instanceof IfcTessellatedFaceSet ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      return value as (IfcBooleanResult | IfcCsgPrimitive3D | IfcHalfSpaceSolid | IfcSolidModel | IfcTessellatedFaceSet) })()
    }

    return this.SecondOperand_ as IfcBooleanResult|IfcCsgPrimitive3D|IfcHalfSpaceSolid|IfcSolidModel|IfcTessellatedFaceSet
  }

  public get Dim() : number {
    return this?.FirstOperand?.Dim;
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCBOOLEANRESULT, EntityTypesIfc.IFCBOOLEANCLIPPINGRESULT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCBOOLEANRESULT
}


import { IfcGeometricRepresentationItem } from "./index"
import { IfcBooleanOperator, IfcBooleanOperatorDeserializeStep } from "./index"
import { IfcCsgPrimitive3D } from "./index"
import { IfcHalfSpaceSolid } from "./index"
import { IfcSolidModel } from "./index"
import { IfcTessellatedFaceSet } from "./index"
import { IfcDimensionCount } from "./index"

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
  private FirstOperand_? : IfcBooleanResult | IfcCsgPrimitive3D | IfcHalfSpaceSolid | IfcSolidModel | IfcTessellatedFaceSet
  private SecondOperand_? : IfcBooleanResult | IfcCsgPrimitive3D | IfcHalfSpaceSolid | IfcSolidModel | IfcTessellatedFaceSet

  public get Operator() : IfcBooleanOperator {
    if ( this.Operator_ === void 0 ) {
      this.Operator_ = this.extractLambda( 0, IfcBooleanOperatorDeserializeStep, false )
    }

    return this.Operator_ as IfcBooleanOperator
  }

  public get FirstOperand() : IfcBooleanResult | IfcCsgPrimitive3D | IfcHalfSpaceSolid | IfcSolidModel | IfcTessellatedFaceSet {
    if ( this.FirstOperand_ === void 0 ) {
      this.FirstOperand_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcBooleanResult ) && !( value instanceof IfcCsgPrimitive3D ) && !( value instanceof IfcHalfSpaceSolid ) && !( value instanceof IfcSolidModel ) && !( value instanceof IfcTessellatedFaceSet ) ) {
        return ( void 0 )
      }
      return value as (IfcBooleanResult | IfcCsgPrimitive3D | IfcHalfSpaceSolid | IfcSolidModel | IfcTessellatedFaceSet)
}, false )
    }

    return this.FirstOperand_ as IfcBooleanResult | IfcCsgPrimitive3D | IfcHalfSpaceSolid | IfcSolidModel | IfcTessellatedFaceSet
  }

  public get SecondOperand() : IfcBooleanResult | IfcCsgPrimitive3D | IfcHalfSpaceSolid | IfcSolidModel | IfcTessellatedFaceSet {
    if ( this.SecondOperand_ === void 0 ) {
      this.SecondOperand_ = this.extractLambda( 2, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcBooleanResult ) && !( value instanceof IfcCsgPrimitive3D ) && !( value instanceof IfcHalfSpaceSolid ) && !( value instanceof IfcSolidModel ) && !( value instanceof IfcTessellatedFaceSet ) ) {
        return ( void 0 )
      }
      return value as (IfcBooleanResult | IfcCsgPrimitive3D | IfcHalfSpaceSolid | IfcSolidModel | IfcTessellatedFaceSet)
}, false )
    }

    return this.SecondOperand_ as IfcBooleanResult | IfcCsgPrimitive3D | IfcHalfSpaceSolid | IfcSolidModel | IfcTessellatedFaceSet
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

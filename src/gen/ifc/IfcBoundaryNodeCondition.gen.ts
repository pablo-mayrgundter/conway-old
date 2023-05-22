
import { IfcBoundaryCondition } from "./index"
import { IfcBoolean } from "./index"
import { IfcLinearStiffnessMeasure } from "./index"
import { IfcRotationalStiffnessMeasure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcboundarynodecondition.htm */
export  class IfcBoundaryNodeCondition extends IfcBoundaryCondition {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCBOUNDARYNODECONDITION
  }
  private TranslationalStiffnessX_? : IfcBoolean | IfcLinearStiffnessMeasure | null
  private TranslationalStiffnessY_? : IfcBoolean | IfcLinearStiffnessMeasure | null
  private TranslationalStiffnessZ_? : IfcBoolean | IfcLinearStiffnessMeasure | null
  private RotationalStiffnessX_? : IfcBoolean | IfcRotationalStiffnessMeasure | null
  private RotationalStiffnessY_? : IfcBoolean | IfcRotationalStiffnessMeasure | null
  private RotationalStiffnessZ_? : IfcBoolean | IfcRotationalStiffnessMeasure | null

  public get TranslationalStiffnessX() : IfcBoolean | IfcLinearStiffnessMeasure | null {
    if ( this.TranslationalStiffnessX_ === void 0 ) {
      this.TranslationalStiffnessX_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcBoolean ) && !( value instanceof IfcLinearStiffnessMeasure ) ) {
        return ( void 0 )
      }
      return value as (IfcBoolean | IfcLinearStiffnessMeasure)
}, true )
    }

    return this.TranslationalStiffnessX_ as IfcBoolean | IfcLinearStiffnessMeasure | null
  }

  public get TranslationalStiffnessY() : IfcBoolean | IfcLinearStiffnessMeasure | null {
    if ( this.TranslationalStiffnessY_ === void 0 ) {
      this.TranslationalStiffnessY_ = this.extractLambda( 2, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcBoolean ) && !( value instanceof IfcLinearStiffnessMeasure ) ) {
        return ( void 0 )
      }
      return value as (IfcBoolean | IfcLinearStiffnessMeasure)
}, true )
    }

    return this.TranslationalStiffnessY_ as IfcBoolean | IfcLinearStiffnessMeasure | null
  }

  public get TranslationalStiffnessZ() : IfcBoolean | IfcLinearStiffnessMeasure | null {
    if ( this.TranslationalStiffnessZ_ === void 0 ) {
      this.TranslationalStiffnessZ_ = this.extractLambda( 3, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcBoolean ) && !( value instanceof IfcLinearStiffnessMeasure ) ) {
        return ( void 0 )
      }
      return value as (IfcBoolean | IfcLinearStiffnessMeasure)
}, true )
    }

    return this.TranslationalStiffnessZ_ as IfcBoolean | IfcLinearStiffnessMeasure | null
  }

  public get RotationalStiffnessX() : IfcBoolean | IfcRotationalStiffnessMeasure | null {
    if ( this.RotationalStiffnessX_ === void 0 ) {
      this.RotationalStiffnessX_ = this.extractLambda( 4, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcBoolean ) && !( value instanceof IfcRotationalStiffnessMeasure ) ) {
        return ( void 0 )
      }
      return value as (IfcBoolean | IfcRotationalStiffnessMeasure)
}, true )
    }

    return this.RotationalStiffnessX_ as IfcBoolean | IfcRotationalStiffnessMeasure | null
  }

  public get RotationalStiffnessY() : IfcBoolean | IfcRotationalStiffnessMeasure | null {
    if ( this.RotationalStiffnessY_ === void 0 ) {
      this.RotationalStiffnessY_ = this.extractLambda( 5, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcBoolean ) && !( value instanceof IfcRotationalStiffnessMeasure ) ) {
        return ( void 0 )
      }
      return value as (IfcBoolean | IfcRotationalStiffnessMeasure)
}, true )
    }

    return this.RotationalStiffnessY_ as IfcBoolean | IfcRotationalStiffnessMeasure | null
  }

  public get RotationalStiffnessZ() : IfcBoolean | IfcRotationalStiffnessMeasure | null {
    if ( this.RotationalStiffnessZ_ === void 0 ) {
      this.RotationalStiffnessZ_ = this.extractLambda( 6, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcBoolean ) && !( value instanceof IfcRotationalStiffnessMeasure ) ) {
        return ( void 0 )
      }
      return value as (IfcBoolean | IfcRotationalStiffnessMeasure)
}, true )
    }

    return this.RotationalStiffnessZ_ as IfcBoolean | IfcRotationalStiffnessMeasure | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCBOUNDARYNODECONDITION, EntityTypesIfc.IFCBOUNDARYNODECONDITIONWARPING ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCBOUNDARYNODECONDITION
}

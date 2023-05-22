
import { IfcBoundaryCondition } from "./index"
import { IfcBoolean } from "./index"
import { IfcModulusOfLinearSubgradeReactionMeasure } from "./index"
import { IfcModulusOfRotationalSubgradeReactionMeasure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcboundaryedgecondition.htm */
export  class IfcBoundaryEdgeCondition extends IfcBoundaryCondition {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCBOUNDARYEDGECONDITION
  }
  private TranslationalStiffnessByLengthX_? : IfcBoolean | IfcModulusOfLinearSubgradeReactionMeasure | null
  private TranslationalStiffnessByLengthY_? : IfcBoolean | IfcModulusOfLinearSubgradeReactionMeasure | null
  private TranslationalStiffnessByLengthZ_? : IfcBoolean | IfcModulusOfLinearSubgradeReactionMeasure | null
  private RotationalStiffnessByLengthX_? : IfcBoolean | IfcModulusOfRotationalSubgradeReactionMeasure | null
  private RotationalStiffnessByLengthY_? : IfcBoolean | IfcModulusOfRotationalSubgradeReactionMeasure | null
  private RotationalStiffnessByLengthZ_? : IfcBoolean | IfcModulusOfRotationalSubgradeReactionMeasure | null

  public get TranslationalStiffnessByLengthX() : IfcBoolean | IfcModulusOfLinearSubgradeReactionMeasure | null {
    if ( this.TranslationalStiffnessByLengthX_ === void 0 ) {
      this.TranslationalStiffnessByLengthX_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcBoolean ) && !( value instanceof IfcModulusOfLinearSubgradeReactionMeasure ) ) {
        return ( void 0 )
      }
      return value as (IfcBoolean | IfcModulusOfLinearSubgradeReactionMeasure)
}, true )
    }

    return this.TranslationalStiffnessByLengthX_ as IfcBoolean | IfcModulusOfLinearSubgradeReactionMeasure | null
  }

  public get TranslationalStiffnessByLengthY() : IfcBoolean | IfcModulusOfLinearSubgradeReactionMeasure | null {
    if ( this.TranslationalStiffnessByLengthY_ === void 0 ) {
      this.TranslationalStiffnessByLengthY_ = this.extractLambda( 2, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcBoolean ) && !( value instanceof IfcModulusOfLinearSubgradeReactionMeasure ) ) {
        return ( void 0 )
      }
      return value as (IfcBoolean | IfcModulusOfLinearSubgradeReactionMeasure)
}, true )
    }

    return this.TranslationalStiffnessByLengthY_ as IfcBoolean | IfcModulusOfLinearSubgradeReactionMeasure | null
  }

  public get TranslationalStiffnessByLengthZ() : IfcBoolean | IfcModulusOfLinearSubgradeReactionMeasure | null {
    if ( this.TranslationalStiffnessByLengthZ_ === void 0 ) {
      this.TranslationalStiffnessByLengthZ_ = this.extractLambda( 3, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcBoolean ) && !( value instanceof IfcModulusOfLinearSubgradeReactionMeasure ) ) {
        return ( void 0 )
      }
      return value as (IfcBoolean | IfcModulusOfLinearSubgradeReactionMeasure)
}, true )
    }

    return this.TranslationalStiffnessByLengthZ_ as IfcBoolean | IfcModulusOfLinearSubgradeReactionMeasure | null
  }

  public get RotationalStiffnessByLengthX() : IfcBoolean | IfcModulusOfRotationalSubgradeReactionMeasure | null {
    if ( this.RotationalStiffnessByLengthX_ === void 0 ) {
      this.RotationalStiffnessByLengthX_ = this.extractLambda( 4, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcBoolean ) && !( value instanceof IfcModulusOfRotationalSubgradeReactionMeasure ) ) {
        return ( void 0 )
      }
      return value as (IfcBoolean | IfcModulusOfRotationalSubgradeReactionMeasure)
}, true )
    }

    return this.RotationalStiffnessByLengthX_ as IfcBoolean | IfcModulusOfRotationalSubgradeReactionMeasure | null
  }

  public get RotationalStiffnessByLengthY() : IfcBoolean | IfcModulusOfRotationalSubgradeReactionMeasure | null {
    if ( this.RotationalStiffnessByLengthY_ === void 0 ) {
      this.RotationalStiffnessByLengthY_ = this.extractLambda( 5, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcBoolean ) && !( value instanceof IfcModulusOfRotationalSubgradeReactionMeasure ) ) {
        return ( void 0 )
      }
      return value as (IfcBoolean | IfcModulusOfRotationalSubgradeReactionMeasure)
}, true )
    }

    return this.RotationalStiffnessByLengthY_ as IfcBoolean | IfcModulusOfRotationalSubgradeReactionMeasure | null
  }

  public get RotationalStiffnessByLengthZ() : IfcBoolean | IfcModulusOfRotationalSubgradeReactionMeasure | null {
    if ( this.RotationalStiffnessByLengthZ_ === void 0 ) {
      this.RotationalStiffnessByLengthZ_ = this.extractLambda( 6, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcBoolean ) && !( value instanceof IfcModulusOfRotationalSubgradeReactionMeasure ) ) {
        return ( void 0 )
      }
      return value as (IfcBoolean | IfcModulusOfRotationalSubgradeReactionMeasure)
}, true )
    }

    return this.RotationalStiffnessByLengthZ_ as IfcBoolean | IfcModulusOfRotationalSubgradeReactionMeasure | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCBOUNDARYEDGECONDITION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCBOUNDARYEDGECONDITION
}

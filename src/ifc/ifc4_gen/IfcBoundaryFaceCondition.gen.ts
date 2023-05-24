
import { IfcBoundaryCondition } from "./index"
import { IfcBoolean } from "./index"
import { IfcModulusOfSubgradeReactionMeasure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcboundaryfacecondition.htm */
export  class IfcBoundaryFaceCondition extends IfcBoundaryCondition {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCBOUNDARYFACECONDITION
  }
  private TranslationalStiffnessByAreaX_? : IfcBoolean | IfcModulusOfSubgradeReactionMeasure | null
  private TranslationalStiffnessByAreaY_? : IfcBoolean | IfcModulusOfSubgradeReactionMeasure | null
  private TranslationalStiffnessByAreaZ_? : IfcBoolean | IfcModulusOfSubgradeReactionMeasure | null

  public get TranslationalStiffnessByAreaX() : IfcBoolean | IfcModulusOfSubgradeReactionMeasure | null {
    if ( this.TranslationalStiffnessByAreaX_ === void 0 ) {
      this.TranslationalStiffnessByAreaX_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcBoolean ) && !( value instanceof IfcModulusOfSubgradeReactionMeasure ) ) {
        return ( void 0 )
      }
      return value as (IfcBoolean | IfcModulusOfSubgradeReactionMeasure)
}, true )
    }

    return this.TranslationalStiffnessByAreaX_ as IfcBoolean | IfcModulusOfSubgradeReactionMeasure | null
  }

  public get TranslationalStiffnessByAreaY() : IfcBoolean | IfcModulusOfSubgradeReactionMeasure | null {
    if ( this.TranslationalStiffnessByAreaY_ === void 0 ) {
      this.TranslationalStiffnessByAreaY_ = this.extractLambda( 2, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcBoolean ) && !( value instanceof IfcModulusOfSubgradeReactionMeasure ) ) {
        return ( void 0 )
      }
      return value as (IfcBoolean | IfcModulusOfSubgradeReactionMeasure)
}, true )
    }

    return this.TranslationalStiffnessByAreaY_ as IfcBoolean | IfcModulusOfSubgradeReactionMeasure | null
  }

  public get TranslationalStiffnessByAreaZ() : IfcBoolean | IfcModulusOfSubgradeReactionMeasure | null {
    if ( this.TranslationalStiffnessByAreaZ_ === void 0 ) {
      this.TranslationalStiffnessByAreaZ_ = this.extractLambda( 3, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcBoolean ) && !( value instanceof IfcModulusOfSubgradeReactionMeasure ) ) {
        return ( void 0 )
      }
      return value as (IfcBoolean | IfcModulusOfSubgradeReactionMeasure)
}, true )
    }

    return this.TranslationalStiffnessByAreaZ_ as IfcBoolean | IfcModulusOfSubgradeReactionMeasure | null
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

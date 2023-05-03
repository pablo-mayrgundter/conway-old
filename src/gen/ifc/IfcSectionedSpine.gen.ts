
import { IfcGeometricRepresentationItem } from "./index"
import { IfcCompositeCurve } from "./index"
import { IfcProfileDef } from "./index"
import { IfcAxis2Placement3D } from "./index"
import { IfcDimensionCount } from "./index"
import {
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsectionedspine.htm */
export  class IfcSectionedSpine extends IfcGeometricRepresentationItem {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCSECTIONEDSPINE
  }
  private SpineCurve_? : IfcCompositeCurve
  private CrossSections_? : Array<IfcProfileDef>
  private CrossSectionPositions_? : Array<IfcAxis2Placement3D>

  public get SpineCurve() : IfcCompositeCurve {
    if ( this.SpineCurve_ === void 0 ) {
      this.SpineCurve_ = this.extractElement( 0, false, IfcCompositeCurve )
    }

    return this.SpineCurve_ as IfcCompositeCurve
  }

  public get CrossSections() : Array<IfcProfileDef> {
    if ( this.CrossSections_ === void 0 ) {
      this.CrossSections_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      let value : Array<IfcProfileDef> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcProfileDef ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.CrossSections_ as Array<IfcProfileDef>
  }

  public get CrossSectionPositions() : Array<IfcAxis2Placement3D> {
    if ( this.CrossSectionPositions_ === void 0 ) {
      this.CrossSectionPositions_ = this.extractLambda( 2, (buffer, cursor, endCursor) => {

      let value : Array<IfcAxis2Placement3D> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcAxis2Placement3D ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.CrossSectionPositions_ as Array<IfcAxis2Placement3D>
  }

  public get Dim() : number {
    return 3;
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCSECTIONEDSPINE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCSECTIONEDSPINE
}

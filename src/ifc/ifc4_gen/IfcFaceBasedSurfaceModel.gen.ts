
import { IfcGeometricRepresentationItem } from "./index"
import { IfcConnectedFaceSet } from "./index"
import { IfcDimensionCount } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcfacebasedsurfacemodel.htm */
export  class IfcFaceBasedSurfaceModel extends IfcGeometricRepresentationItem {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCFACEBASEDSURFACEMODEL
  }
  private FbsmFaces_? : Array<IfcConnectedFaceSet>

  public get FbsmFaces() : Array<IfcConnectedFaceSet> {
    if ( this.FbsmFaces_ === void 0 ) {
      this.FbsmFaces_ = this.extractLambda( 0, (buffer, cursor, endCursor) => {

      let value : Array<IfcConnectedFaceSet> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcConnectedFaceSet ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.FbsmFaces_ as Array<IfcConnectedFaceSet>
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
    [ EntityTypesIfc.IFCFACEBASEDSURFACEMODEL ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCFACEBASEDSURFACEMODEL
}

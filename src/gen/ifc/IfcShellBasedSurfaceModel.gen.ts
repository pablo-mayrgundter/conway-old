
import { IfcGeometricRepresentationItem } from "./index"
import { IfcClosedShell } from "./index"
import { IfcOpenShell } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcshellbasedsurfacemodel.htm */
export  class IfcShellBasedSurfaceModel extends IfcGeometricRepresentationItem {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCSHELLBASEDSURFACEMODEL
  }
  private SbsmBoundary_? : Array<IfcClosedShell | IfcOpenShell>

  public get SbsmBoundary() : Array<IfcClosedShell | IfcOpenShell> {
    if ( this.SbsmBoundary_ === void 0 ) {
      this.SbsmBoundary_ = this.extractLambda( 0, (buffer, cursor, endCursor) => {

      let value : Array<IfcClosedShell | IfcOpenShell> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          const value : StepEntityBase< EntityTypesIfc > | undefined =
            this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcClosedShell ) && !( value instanceof IfcOpenShell ) ) {
            throw new Error( 'Value in select must be populated' )
          }
          return value as (IfcClosedShell | IfcOpenShell)})() )
      }
      return value }, false )
    }

    return this.SbsmBoundary_ as Array<IfcClosedShell | IfcOpenShell>
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
    [ EntityTypesIfc.IFCSHELLBASEDSURFACEMODEL ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCSHELLBASEDSURFACEMODEL
}


import { IfcRelConnects } from "./index"
import { IfcSystem } from "./index"
import { IfcSpatialElement } from "./index"
import {
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelservicesbuildings.htm */
export  class IfcRelServicesBuildings extends IfcRelConnects {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCRELSERVICESBUILDINGS
  }
  private RelatingSystem_? : IfcSystem
  private RelatedBuildings_? : Array<IfcSpatialElement>

  public get RelatingSystem() : IfcSystem {
    if ( this.RelatingSystem_ === void 0 ) {
      this.RelatingSystem_ = this.extractElement( 4, false, IfcSystem )
    }

    return this.RelatingSystem_ as IfcSystem
  }

  public get RelatedBuildings() : Array<IfcSpatialElement> {
    if ( this.RelatedBuildings_ === void 0 ) {
      this.RelatedBuildings_ = this.extractLambda( 5, (buffer, cursor, endCursor) => {

      let value : Array<IfcSpatialElement> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcSpatialElement ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.RelatedBuildings_ as Array<IfcSpatialElement>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCRELSERVICESBUILDINGS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCRELSERVICESBUILDINGS
}

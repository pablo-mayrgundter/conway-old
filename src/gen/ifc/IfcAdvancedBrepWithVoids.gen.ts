
import { IfcAdvancedBrep } from "./index"
import { IfcClosedShell } from "./index"
import {
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcadvancedbrepwithvoids.htm */
export  class IfcAdvancedBrepWithVoids extends IfcAdvancedBrep {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCADVANCEDBREPWITHVOIDS
  }
  private Voids_? : Array<IfcClosedShell>

  public get Voids() : Array<IfcClosedShell> {
    if ( this.Voids_ === void 0 ) {
      this.Voids_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      let value : Array<IfcClosedShell> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcClosedShell ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.Voids_ as Array<IfcClosedShell>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCADVANCEDBREPWITHVOIDS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCADVANCEDBREPWITHVOIDS
}

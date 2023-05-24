
import { IfcBSplineSurfaceWithKnots } from "./index"
import { IfcReal } from "./index"
import {
  stepExtractNumber,
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'
import {
  IfcMakeArrayOfArray,
} from '../../core/ifc/ifc_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrationalbsplinesurfacewithknots.htm */
export  class IfcRationalBSplineSurfaceWithKnots extends IfcBSplineSurfaceWithKnots {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCRATIONALBSPLINESURFACEWITHKNOTS
  }
  private WeightsData_? : Array< Array< number > >

  public get WeightsData() : Array< Array< number > > {
    if ( this.WeightsData_ === void 0 ) {
      this.WeightsData_ = this.extractLambda( 12, (buffer, cursor, endCursor) => {

      let value : Array<Array<number>> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          let value : Array<number> = [];
    
          for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
            value.push( (() => {
                  const cursor = address
                  const value = stepExtractNumber( buffer, cursor, endCursor )
            
                  if ( value === void 0 ) {
                    throw new Error( 'Value needs to be defined in encapsulating context' )
                  }
            
                  return value 
                })() )
          }
                if ( value === void 0 ) {
            throw new Error( 'Value needs to be defined in encapsulating context' )
          }
    
          return value 
        })() )
      }
      return value }, false )
    }

    return this.WeightsData_ as Array< Array< number > >
  }

  public get Weights() : Array< Array< number > > {
    return IfcMakeArrayOfArray(this?.WeightsData,0,this?.UUpper,0,this?.VUpper);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCRATIONALBSPLINESURFACEWITHKNOTS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCRATIONALBSPLINESURFACEWITHKNOTS
}


import { IfcLightDistributionCurveEnum, IfcLightDistributionCurveEnumDeserializeStep } from "./index"
import { IfcLightDistributionData } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifclightintensitydistribution.htm */
export  class IfcLightIntensityDistribution extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCLIGHTINTENSITYDISTRIBUTION
  }
  private LightDistributionCurve_? : IfcLightDistributionCurveEnum
  private DistributionData_? : Array<IfcLightDistributionData>

  public get LightDistributionCurve() : IfcLightDistributionCurveEnum {
    if ( this.LightDistributionCurve_ === void 0 ) {
      this.LightDistributionCurve_ = this.extractLambda( 0, IfcLightDistributionCurveEnumDeserializeStep, false )
    }

    return this.LightDistributionCurve_ as IfcLightDistributionCurveEnum
  }

  public get DistributionData() : Array<IfcLightDistributionData> {
    if ( this.DistributionData_ === void 0 ) {
      this.DistributionData_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      let value : Array<IfcLightDistributionData> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcLightDistributionData ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.DistributionData_ as Array<IfcLightDistributionData>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCLIGHTINTENSITYDISTRIBUTION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCLIGHTINTENSITYDISTRIBUTION
}

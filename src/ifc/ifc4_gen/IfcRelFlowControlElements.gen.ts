
import { IfcRelConnects } from "./index"
import { IfcDistributionControlElement } from "./index"
import { IfcDistributionFlowElement } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelflowcontrolelements.htm */
export  class IfcRelFlowControlElements extends IfcRelConnects {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCRELFLOWCONTROLELEMENTS
  }
  private RelatedControlElements_? : Array<IfcDistributionControlElement>
  private RelatingFlowElement_? : IfcDistributionFlowElement

  public get RelatedControlElements() : Array<IfcDistributionControlElement> {
    if ( this.RelatedControlElements_ === void 0 ) {
      this.RelatedControlElements_ = this.extractLambda( 4, (buffer, cursor, endCursor) => {

      let value : Array<IfcDistributionControlElement> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcDistributionControlElement ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.RelatedControlElements_ as Array<IfcDistributionControlElement>
  }

  public get RelatingFlowElement() : IfcDistributionFlowElement {
    if ( this.RelatingFlowElement_ === void 0 ) {
      this.RelatingFlowElement_ = this.extractElement( 5, false, IfcDistributionFlowElement )
    }

    return this.RelatingFlowElement_ as IfcDistributionFlowElement
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCRELFLOWCONTROLELEMENTS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCRELFLOWCONTROLELEMENTS
}

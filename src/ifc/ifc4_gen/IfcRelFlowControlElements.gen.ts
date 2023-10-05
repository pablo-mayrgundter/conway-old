
import { IfcRelConnects } from "./index"
import { IfcDistributionControlElement } from "./index"
import { IfcDistributionFlowElement } from "./index"
import {
  stepExtractArrayToken,
  stepExtractArrayBegin,
  skipValue,
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
      
      let   cursor    = this.getOffsetCursor( 4 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      const value : Array<IfcDistributionControlElement> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1 = this.extractBufferElement( buffer, cursor, endCursor, IfcDistributionControlElement )
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.RelatedControlElements_ = value
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

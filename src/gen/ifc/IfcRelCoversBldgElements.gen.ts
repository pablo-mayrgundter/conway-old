
import { IfcRelConnects } from "./index"
import { IfcElement } from "./index"
import { IfcCovering } from "./index"
import {
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelcoversbldgelements.htm */
export  class IfcRelCoversBldgElements extends IfcRelConnects {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCRELCOVERSBLDGELEMENTS
  }
  private RelatingBuildingElement_? : IfcElement
  private RelatedCoverings_? : Array<IfcCovering>

  public get RelatingBuildingElement() : IfcElement {
    if ( this.RelatingBuildingElement_ === void 0 ) {
      this.RelatingBuildingElement_ = this.extractElement( 4, false, IfcElement )
    }

    return this.RelatingBuildingElement_ as IfcElement
  }

  public get RelatedCoverings() : Array<IfcCovering> {
    if ( this.RelatedCoverings_ === void 0 ) {
      this.RelatedCoverings_ = this.extractLambda( 5, (buffer, cursor, endCursor) => {

      let value : Array<IfcCovering> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcCovering ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.RelatedCoverings_ as Array<IfcCovering>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCRELCOVERSBLDGELEMENTS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCRELCOVERSBLDGELEMENTS
}

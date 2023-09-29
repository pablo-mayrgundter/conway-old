
import { IfcRelConnects } from "./index"
import { IfcProduct } from "./index"
import { IfcSpatialElement } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelreferencedinspatialstructure.htm */
export  class IfcRelReferencedInSpatialStructure extends IfcRelConnects {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCRELREFERENCEDINSPATIALSTRUCTURE
  }
  private RelatedElements_? : Array<IfcProduct>
  private RelatingStructure_? : IfcSpatialElement

  public get RelatedElements() : Array<IfcProduct> {
    if ( this.RelatedElements_ === void 0 ) {
      this.RelatedElements_ = this.extractLambda( 4, (buffer, cursor, endCursor) => {

      let value : Array<IfcProduct> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcProduct ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.RelatedElements_ as Array<IfcProduct>
  }

  public get RelatingStructure() : IfcSpatialElement {
    if ( this.RelatingStructure_ === void 0 ) {
      this.RelatingStructure_ = this.extractElement( 5, false, IfcSpatialElement )
    }

    return this.RelatingStructure_ as IfcSpatialElement
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCRELREFERENCEDINSPATIALSTRUCTURE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCRELREFERENCEDINSPATIALSTRUCTURE
}

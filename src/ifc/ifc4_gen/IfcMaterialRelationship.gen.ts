
import { IfcResourceLevelRelationship } from "./index"
import { IfcMaterial } from "./index"
import { IfcLabel } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcmaterialrelationship.htm */
export  class IfcMaterialRelationship extends IfcResourceLevelRelationship {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCMATERIALRELATIONSHIP
  }
  private RelatingMaterial_? : IfcMaterial
  private RelatedMaterials_? : Array<IfcMaterial>
  private Expression_? : string | null

  public get RelatingMaterial() : IfcMaterial {
    if ( this.RelatingMaterial_ === void 0 ) {
      this.RelatingMaterial_ = this.extractElement( 2, false, IfcMaterial )
    }

    return this.RelatingMaterial_ as IfcMaterial
  }

  public get RelatedMaterials() : Array<IfcMaterial> {
    if ( this.RelatedMaterials_ === void 0 ) {
      this.RelatedMaterials_ = this.extractLambda( 3, (buffer, cursor, endCursor) => {

      let value : Array<IfcMaterial> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcMaterial ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.RelatedMaterials_ as Array<IfcMaterial>
  }

  public get Expression() : string | null {
    if ( this.Expression_ === void 0 ) {
      this.Expression_ = this.extractString( 4, true )
    }

    return this.Expression_ as string | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCMATERIALRELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCMATERIALRELATIONSHIP
}

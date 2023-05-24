
import { IfcMaterialDefinition } from "./index"
import { IfcMaterialLayer } from "./index"
import { IfcLabel } from "./index"
import { IfcText } from "./index"
import { IfcLengthMeasure } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'
import {
  IfcMlsTotalThickness,
} from '../ifc_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcmateriallayerset.htm */
export  class IfcMaterialLayerSet extends IfcMaterialDefinition {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCMATERIALLAYERSET
  }
  private MaterialLayers_? : Array<IfcMaterialLayer>
  private LayerSetName_? : string | null
  private Description_? : string | null

  public get MaterialLayers() : Array<IfcMaterialLayer> {
    if ( this.MaterialLayers_ === void 0 ) {
      this.MaterialLayers_ = this.extractLambda( 0, (buffer, cursor, endCursor) => {

      let value : Array<IfcMaterialLayer> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcMaterialLayer ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.MaterialLayers_ as Array<IfcMaterialLayer>
  }

  public get LayerSetName() : string | null {
    if ( this.LayerSetName_ === void 0 ) {
      this.LayerSetName_ = this.extractString( 1, true )
    }

    return this.LayerSetName_ as string | null
  }

  public get Description() : string | null {
    if ( this.Description_ === void 0 ) {
      this.Description_ = this.extractString( 2, true )
    }

    return this.Description_ as string | null
  }

  public get TotalThickness() : number {
    return IfcMlsTotalThickness(this);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCMATERIALLAYERSET ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCMATERIALLAYERSET
}

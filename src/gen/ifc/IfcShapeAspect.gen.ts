
import { IfcShapeModel } from "./index"
import { IfcLabel } from "./index"
import { IfcText } from "./index"
import { IfcLogical } from "./index"
import { IfcProductDefinitionShape } from "./index"
import { IfcRepresentationMap } from "./index"
import {
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcshapeaspect.htm */
export  class IfcShapeAspect extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCSHAPEASPECT
  }
  private ShapeRepresentations_? : Array<IfcShapeModel>
  private Name_? : string | null
  private Description_? : string | null
  private ProductDefinitional_? : boolean | null
  private PartOfProductDefinitionShape_? : IfcProductDefinitionShape | IfcRepresentationMap | null

  public get ShapeRepresentations() : Array<IfcShapeModel> {
    if ( this.ShapeRepresentations_ === void 0 ) {
      this.ShapeRepresentations_ = this.extractLambda( 0, (buffer, cursor, endCursor) => {

      let value : Array<IfcShapeModel> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcShapeModel ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.ShapeRepresentations_ as Array<IfcShapeModel>
  }

  public get Name() : string | null {
    if ( this.Name_ === void 0 ) {
      this.Name_ = this.extractString( 1, true )
    }

    return this.Name_ as string | null
  }

  public get Description() : string | null {
    if ( this.Description_ === void 0 ) {
      this.Description_ = this.extractString( 2, true )
    }

    return this.Description_ as string | null
  }

  public get ProductDefinitional() : boolean | null {
    if ( this.ProductDefinitional_ === void 0 ) {
      this.ProductDefinitional_ = this.extractLogical( 3, false )
    }

    return this.ProductDefinitional_ as boolean | null
  }

  public get PartOfProductDefinitionShape() : IfcProductDefinitionShape | IfcRepresentationMap | null {
    if ( this.PartOfProductDefinitionShape_ === void 0 ) {
      this.PartOfProductDefinitionShape_ = this.extractLambda( 4, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcProductDefinitionShape ) && !( value instanceof IfcRepresentationMap ) ) {
        return ( void 0 )
      }
      return value as (IfcProductDefinitionShape | IfcRepresentationMap)
}, true )
    }

    return this.PartOfProductDefinitionShape_ as IfcProductDefinitionShape | IfcRepresentationMap | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCSHAPEASPECT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCSHAPEASPECT
}

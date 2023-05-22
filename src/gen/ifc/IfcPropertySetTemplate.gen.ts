
import { IfcPropertyTemplateDefinition } from "./index"
import { IfcPropertySetTemplateTypeEnum, IfcPropertySetTemplateTypeEnumDeserializeStep } from "./index"
import { IfcIdentifier } from "./index"
import { IfcPropertyTemplate } from "./index"
import {
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpropertysettemplate.htm */
export  class IfcPropertySetTemplate extends IfcPropertyTemplateDefinition {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCPROPERTYSETTEMPLATE
  }
  private TemplateType_? : IfcPropertySetTemplateTypeEnum | null
  private ApplicableEntity_? : string | null
  private HasPropertyTemplates_? : Array<IfcPropertyTemplate>

  public get TemplateType() : IfcPropertySetTemplateTypeEnum | null {
    if ( this.TemplateType_ === void 0 ) {
      this.TemplateType_ = this.extractLambda( 4, IfcPropertySetTemplateTypeEnumDeserializeStep, true )
    }

    return this.TemplateType_ as IfcPropertySetTemplateTypeEnum | null
  }

  public get ApplicableEntity() : string | null {
    if ( this.ApplicableEntity_ === void 0 ) {
      this.ApplicableEntity_ = this.extractString( 5, true )
    }

    return this.ApplicableEntity_ as string | null
  }

  public get HasPropertyTemplates() : Array<IfcPropertyTemplate> {
    if ( this.HasPropertyTemplates_ === void 0 ) {
      this.HasPropertyTemplates_ = this.extractLambda( 6, (buffer, cursor, endCursor) => {

      let value : Array<IfcPropertyTemplate> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcPropertyTemplate ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.HasPropertyTemplates_ as Array<IfcPropertyTemplate>
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCPROPERTYSETTEMPLATE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCPROPERTYSETTEMPLATE
}

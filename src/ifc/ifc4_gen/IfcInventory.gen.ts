
import { IfcGroup } from "./index"
import { IfcInventoryTypeEnum, IfcInventoryTypeEnumDeserializeStep } from "./index"
import { IfcOrganization } from "./index"
import { IfcPerson } from "./index"
import { IfcPersonAndOrganization } from "./index"
import { IfcDate } from "./index"
import { IfcCostValue } from "./index"
import {
  stepExtractOptional,
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcinventory.htm */
export  class IfcInventory extends IfcGroup {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCINVENTORY
  }
  private PredefinedType_? : IfcInventoryTypeEnum | null
  private Jurisdiction_? : IfcOrganization | IfcPerson | IfcPersonAndOrganization | null
  private ResponsiblePersons_? : Array<IfcPerson> | null
  private LastUpdateDate_? : string | null
  private CurrentValue_? : IfcCostValue | null
  private OriginalValue_? : IfcCostValue | null

  public get PredefinedType() : IfcInventoryTypeEnum | null {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 5, IfcInventoryTypeEnumDeserializeStep, true )
    }

    return this.PredefinedType_ as IfcInventoryTypeEnum | null
  }

  public get Jurisdiction() : IfcOrganization | IfcPerson | IfcPersonAndOrganization | null {
    if ( this.Jurisdiction_ === void 0 ) {
      this.Jurisdiction_ = this.extractLambda( 6, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcOrganization ) && !( value instanceof IfcPerson ) && !( value instanceof IfcPersonAndOrganization ) ) {
        return ( void 0 )
      }
      return value as (IfcOrganization | IfcPerson | IfcPersonAndOrganization)
}, true )
    }

    return this.Jurisdiction_ as IfcOrganization | IfcPerson | IfcPersonAndOrganization | null
  }

  public get ResponsiblePersons() : Array<IfcPerson> | null {
    if ( this.ResponsiblePersons_ === void 0 ) {
      this.ResponsiblePersons_ = this.extractLambda( 7, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<IfcPerson> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcPerson ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, true )
    }

    return this.ResponsiblePersons_ as Array<IfcPerson> | null
  }

  public get LastUpdateDate() : string | null {
    if ( this.LastUpdateDate_ === void 0 ) {
      this.LastUpdateDate_ = this.extractString( 8, true )
    }

    return this.LastUpdateDate_ as string | null
  }

  public get CurrentValue() : IfcCostValue | null {
    if ( this.CurrentValue_ === void 0 ) {
      this.CurrentValue_ = this.extractElement( 9, true, IfcCostValue )
    }

    return this.CurrentValue_ as IfcCostValue | null
  }

  public get OriginalValue() : IfcCostValue | null {
    if ( this.OriginalValue_ === void 0 ) {
      this.OriginalValue_ = this.extractElement( 10, true, IfcCostValue )
    }

    return this.OriginalValue_ as IfcCostValue | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCINVENTORY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCINVENTORY
}

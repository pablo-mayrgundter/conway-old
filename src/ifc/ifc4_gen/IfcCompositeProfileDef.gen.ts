
import { IfcProfileDef } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccompositeprofiledef.htm */
export  class IfcCompositeProfileDef extends IfcProfileDef {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCOMPOSITEPROFILEDEF
  }
  private Profiles_? : Array<IfcProfileDef>
  private Label_? : string | null

  public get Profiles() : Array<IfcProfileDef> {
    if ( this.Profiles_ === void 0 ) {
      this.Profiles_ = this.extractLambda( 2, (buffer, cursor, endCursor) => {

      let value : Array<IfcProfileDef> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcProfileDef ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.Profiles_ as Array<IfcProfileDef>
  }

  public get Label() : string | null {
    if ( this.Label_ === void 0 ) {
      this.Label_ = this.extractString( 3, true )
    }

    return this.Label_ as string | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCOMPOSITEPROFILEDEF ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCOMPOSITEPROFILEDEF
}

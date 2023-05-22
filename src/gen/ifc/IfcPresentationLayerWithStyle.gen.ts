
import { IfcPresentationLayerAssignment } from "./index"
import { IfcLogical } from "./index"
import { IfcPresentationStyle } from "./index"
import {
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpresentationlayerwithstyle.htm */
export  class IfcPresentationLayerWithStyle extends IfcPresentationLayerAssignment {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCPRESENTATIONLAYERWITHSTYLE
  }
  private LayerOn_? : boolean | null
  private LayerFrozen_? : boolean | null
  private LayerBlocked_? : boolean | null
  private LayerStyles_? : Array<IfcPresentationStyle>

  public get LayerOn() : boolean | null {
    if ( this.LayerOn_ === void 0 ) {
      this.LayerOn_ = this.extractLogical( 4, false )
    }

    return this.LayerOn_ as boolean | null
  }

  public get LayerFrozen() : boolean | null {
    if ( this.LayerFrozen_ === void 0 ) {
      this.LayerFrozen_ = this.extractLogical( 5, false )
    }

    return this.LayerFrozen_ as boolean | null
  }

  public get LayerBlocked() : boolean | null {
    if ( this.LayerBlocked_ === void 0 ) {
      this.LayerBlocked_ = this.extractLogical( 6, false )
    }

    return this.LayerBlocked_ as boolean | null
  }

  public get LayerStyles() : Array<IfcPresentationStyle> {
    if ( this.LayerStyles_ === void 0 ) {
      this.LayerStyles_ = this.extractLambda( 7, (buffer, cursor, endCursor) => {

      let value : Array<IfcPresentationStyle> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcPresentationStyle ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.LayerStyles_ as Array<IfcPresentationStyle>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCPRESENTATIONLAYERWITHSTYLE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCPRESENTATIONLAYERWITHSTYLE
}

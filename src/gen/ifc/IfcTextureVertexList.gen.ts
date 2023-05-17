
import { IfcPresentationItem } from "./index"
import { IfcParameterValue } from "./index"
import {
  stepExtractNumber,
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctexturevertexlist.htm */
export  class IfcTextureVertexList extends IfcPresentationItem {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCTEXTUREVERTEXLIST
  }
  private TexCoordsList_? : Array< Array< number > >

  public get TexCoordsList() : Array< Array< number > > {
    if ( this.TexCoordsList_ === void 0 ) {
      this.TexCoordsList_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 0 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 0

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let value : Array<Array<number>> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => { 
          let cursor = address
    
          let value : Array<number> = [];
    
          for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
            value.push( (() => { 
              let cursor = address
            
                 let value = stepExtractNumber( buffer, cursor, endCursor )
            
                  if ( value === void 0 )  {
                    throw new Error( 'Value in STEP was incorrectly typed' )
                  }
            
                  return value
            })() )
          }
    
    return value
        })() )
      }

return value })()
    }

    return this.TexCoordsList_ as Array< Array< number > >
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCTEXTUREVERTEXLIST ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCTEXTUREVERTEXLIST
}

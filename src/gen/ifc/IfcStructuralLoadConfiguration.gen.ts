
import { IfcStructuralLoad } from "./index"
import { IfcStructuralLoadOrResult } from "./index"
import { IfcLengthMeasure } from "./index"
import {
  stepExtractOptional,
  stepExtractReference,
  stepExtractNumber,
  stepExtractInlineElemement,
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcstructuralloadconfiguration.htm */
export  class IfcStructuralLoadConfiguration extends IfcStructuralLoad {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCSTRUCTURALLOADCONFIGURATION
  }
  private Values_? : Array<IfcStructuralLoadOrResult>
  private Locations_? : Array< Array< number > > | null

  public get Values() : Array<IfcStructuralLoadOrResult> {
    if ( this.Values_ === void 0 ) {
      this.Values_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 1 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 1

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let value : Array<IfcStructuralLoadOrResult> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => { 
          let cursor = address
    
           let expressID = stepExtractReference( buffer, cursor, endCursor );
           let value =
             expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
             this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) )
    
          if ( !( value instanceof IfcStructuralLoadOrResult ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }

return value })()
    }

    return this.Values_ as Array<IfcStructuralLoadOrResult>
  }

  public get Locations() : Array< Array< number > > | null {
    if ( this.Locations_ === void 0 ) {
      this.Locations_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 2 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 2

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

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

    return this.Locations_ as Array< Array< number > > | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCSTRUCTURALLOADCONFIGURATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCSTRUCTURALLOADCONFIGURATION
}

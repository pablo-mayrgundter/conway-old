
import { IfcGeometricRepresentationItem } from "./index"
import { IfcReal } from "./index"
import { IfcDimensionCount } from "./index"
import {
  stepExtractNumber,
  stepExtractArray,
  HIINDEX,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcdirection.htm */
export  class IfcDirection extends IfcGeometricRepresentationItem {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCDIRECTION
  }
  private DirectionRatios_? : Array< number >

  public get DirectionRatios() : Array< number > {
    if ( this.DirectionRatios_ === void 0 ) {
      this.DirectionRatios_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 0 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 0

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

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

return value })()
    }

    return this.DirectionRatios_ as Array< number >
  }

  public get Dim() : number {
    return HIINDEX(this?.DirectionRatios);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCDIRECTION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCDIRECTION
}

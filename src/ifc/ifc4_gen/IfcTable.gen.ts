
import { IfcLabel } from "./index"
import { IfcTableRow } from "./index"
import { IfcTableColumn } from "./index"
import { IfcInteger } from "./index"
import {
  stepExtractOptional,
  stepExtractArray,
  HIINDEX,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctable.htm */
export  class IfcTable extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCTABLE
  }
  private Name_? : string | null
  private Rows_? : Array<IfcTableRow> | null
  private Columns_? : Array<IfcTableColumn> | null

  public get Name() : string | null {
    if ( this.Name_ === void 0 ) {
      this.Name_ = this.extractString( 0, true )
    }

    return this.Name_ as string | null
  }

  public get Rows() : Array<IfcTableRow> | null {
    if ( this.Rows_ === void 0 ) {
      this.Rows_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<IfcTableRow> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcTableRow ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, true )
    }

    return this.Rows_ as Array<IfcTableRow> | null
  }

  public get Columns() : Array<IfcTableColumn> | null {
    if ( this.Columns_ === void 0 ) {
      this.Columns_ = this.extractLambda( 2, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<IfcTableColumn> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcTableColumn ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, true )
    }

    return this.Columns_ as Array<IfcTableColumn> | null
  }

  public get NumberOfCellsInRow() : number {
    return HIINDEX(this?.Rows?.[1 - 1].RowCells);
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCTABLE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCTABLE
}

import EntityTypesIfc, {EntityTypesIfcCount} from './AP214E3_2010_gen/entity_types_ifc.gen'
import StepModelBase from '../step/step_model_base'
import SchemaIfc from './AP214E3_2010_gen/schema_ifc.gen'
import {StepIndexEntry} from '../step/parsing/step_parser'
import {StepTypeIndexer} from '../step/indexing/step_type_indexer'
import {MultiIndexSet} from '../indexing/multi_index_set'


const indexerInstance = new StepTypeIndexer< EntityTypesIfc >( EntityTypesIfcCount )

/**
 * Represents an IFC model deserialized from step.
 */
export default class AP214StepModel extends StepModelBase< EntityTypesIfc > {
  public readonly typeIndex: MultiIndexSet< EntityTypesIfc >

  /**
   * Construct this model given a buffer containing the data and the parsed data index on that,
   * adding the typeIndex on top of that.
   *
   * @param buffer The buffer to values from.
   * @param elementIndex The parsed index to elements in the STEP.
   */
  constructor( buffer: Uint8Array, elementIndex: StepIndexEntry< EntityTypesIfc >[] ) {
    super( SchemaIfc, buffer, elementIndex )

    this.typeIndex = indexerInstance.create( elementIndex )
  }
}

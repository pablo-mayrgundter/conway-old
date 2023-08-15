import EntityTypesIfc, {EntityTypesIfcCount} from './ifc4_gen/entity_types_ifc.gen'
import StepModelBase from '../step/step_model_base'
import SchemaIfc from './ifc4_gen/schema_ifc.gen'
import {StepIndexEntry} from '../step/parsing/step_parser'
import {StepTypeIndexer} from '../step/indexing/step_type_indexer'
import {MultiIndexSet} from '../indexing/multi_index_set'
import { IfcModelGeometry } from './ifc_model_geometry'
import { IfcModelProfile } from './ifc_model_profile'


const indexerInstance = new StepTypeIndexer< EntityTypesIfc >( EntityTypesIfcCount )

/**
 * Represents an IFC model deserialized from step.
 */
export default class IfcStepModel extends StepModelBase< EntityTypesIfc > {
  public readonly typeIndex: MultiIndexSet< EntityTypesIfc >

  public readonly geometry = new IfcModelGeometry()
  public readonly voidGeometry = new IfcModelGeometry()
  public readonly profiles = new IfcModelProfile()

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

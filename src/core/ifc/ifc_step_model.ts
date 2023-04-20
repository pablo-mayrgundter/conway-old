import EntityTypesIfc, {EntityTypesIfcCount} from '../../gen/ifc/entity_types_ifc.bldrs'
import StepModelBase from '../step_model_base'
import SchemaIfc from '../../gen/ifc/schema_ifc.bldrs'
import {StepIndexEntry} from '../../../dependencies/conway-ds/src/parsing/step/step_parser'
import {StepTypeIndexer} from '../../../dependencies/conway-ds/src/parsing/step/step_type_indexer'
import {MultiIndexSet} from '../../../dependencies/conway-ds/src/indexing/multi_index_set'


const indexerInstance = new StepTypeIndexer< EntityTypesIfc >( EntityTypesIfcCount )

export default class IfcStepModel extends StepModelBase< EntityTypesIfc > {
  public readonly typeIndex: MultiIndexSet< EntityTypesIfc >

  constructor( buffer: Uint8Array, elementIndex: StepIndexEntry< EntityTypesIfc >[] ) {
    super( SchemaIfc, buffer, elementIndex )

    this.typeIndex = indexerInstance.create( elementIndex )
  }
}

import ParsingBuffer from '../../../dependencies/conway-ds/src/parsing/parsing_buffer'
import StepParser, {ParseResult} from '../../../dependencies/conway-ds/src/parsing/step/step_parser'
import EntityTypesIfc from '../../gen/ifc/entity_types_ifc.bldrs'
import EntitTypesIfcSearch from '../../gen/ifc/entity_types_search.bldrs'
import IfcStepModel from './ifc_step_model'


export default class IfcStepParser extends StepParser< EntityTypesIfc > {
  constructor() {
    super( EntitTypesIfcSearch )
  }

  public static readonly Instance = new IfcStepParser()

  public parseDataToModel( input: ParsingBuffer ): [ParseResult, IfcStepModel | undefined] {
    const [itemIndex, parseResult] = this.parseDataBlock( input )

    return [parseResult, new IfcStepModel( input.buffer, itemIndex.elements )]
  }
}

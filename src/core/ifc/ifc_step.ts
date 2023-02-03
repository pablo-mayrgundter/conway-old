
// import Component from "../components"
// import ComponentSpecification from "../../core/component_specification"
// import AttributeSpecification from "../../core/attribute_specification"
// import SchemaSpecificationIFC from "../../gen/ifc/schema_ifc.bldrs"
// import { IFCSchema } from "../../gen/ifc/schema_ifc.bldrs"
// import ModelIfc from "../../gen/ifc/model_ifc.bldrs"

import StepParser from "../../../dependencies/conway-ds/src/parsing/step/step_parser";
import EntityTypesIfc from "../../gen/ifc/entity_types_ifc.bldrs";
import EntitTypesIfcSearch from "../../gen/ifc/entity_types_search.bldrs";

// export default class IFCStepSerialization
// {
//     public static *serialize( model: ModelIfc, parameters: IIFCSerializationParameters = new IFCSerializationParameters() ) : IterableIterator< string > 
//     {
//         yield `
// ISO-10303-21;
// HEADER;
// FILE_DESCRIPTION(
//     ('ViewDefinition [CoordinationView]'),
//     '2;1');
// FILE_NAME(
//     '${parameters.name}',
//     '${parameters.timestamp.toISOString()}',
//     ('${parameters.author}'),
//     ('${parameters.organisation}'),
//     'bldrs-ifc',
//     '{typeof(Model).Assembly.GetName().Version}',
//     'None');
// FILE_SCHEMA (('IFC2X3'));
// ENDSEC;
// DATA;`;

//         for ( let [key, entity] of model.entities )
//         {
            

//             if ( entity != null )
//             {
//                 entity.
//             }
//         }

//     }
// } 

// export interface IIFCSerializationParameters
// {
//     name: string;
//     author: string;
//     organisation: string;
//     timestamp: Date;
// }

// export class IFCSerializationParameters implements IIFCSerializationParameters
// {
//     constructor( public readonly name: string = '', public readonly author: string = '', public readonly organisation: string = '', public readonly timestamp: Date = new Date() ) {}
// }


export default class IfcStepParser extends StepParser< EntityTypesIfc >
{
    constructor()
    {
        super( EntitTypesIfcSearch );
    }

    public static readonly Instance = new IfcStepParser();
}

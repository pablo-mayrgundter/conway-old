
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfurniturestandard.htm
 */
export default class IfcFurnitureStandard implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFurnitureStandard';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcFurnitureStandardSpecification = IfcFurnitureStandardSpecification.instance;

    constructor(  ) {}
}

export class IfcFurnitureStandardSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFurnitureStandard';

    public readonly required: ReadonlyArray< string > = [ 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFurnitureStandardSpecification = new IfcFurnitureStandardSpecification();
}

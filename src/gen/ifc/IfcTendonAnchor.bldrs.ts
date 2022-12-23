
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctendonanchor.htm
 */
export default class IfcTendonAnchor implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTendonAnchor';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcTendonAnchorSpecification = IfcTendonAnchorSpecification.instance;

    constructor(  ) {}
}

export class IfcTendonAnchorSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTendonAnchor';

    public readonly required: ReadonlyArray< string > = [ 'IfcReinforcingElement', 'IfcBuildingElementComponent', 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTendonAnchorSpecification = new IfcTendonAnchorSpecification();
}

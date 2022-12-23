
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwall.htm
 */
export default class IfcWall implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcWall';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcWallSpecification = IfcWallSpecification.instance;

    constructor(  ) {}
}

export class IfcWallSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcWall';

    public readonly required: ReadonlyArray< string > = [ 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcWallSpecification = new IfcWallSpecification();
}

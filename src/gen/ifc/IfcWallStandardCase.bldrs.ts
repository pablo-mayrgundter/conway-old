
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwallstandardcase.htm
 */
export default class IfcWallStandardCase implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcWallStandardCase';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcWallStandardCaseSpecification = IfcWallStandardCaseSpecification.instance;

    constructor(  ) {}
}

export class IfcWallStandardCaseSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcWallStandardCase';

    public readonly required: ReadonlyArray< string > = [ 'IfcWall', 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcWallStandardCaseSpecification = new IfcWallStandardCaseSpecification();
}

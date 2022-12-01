
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcMaterial} from "./IfcMaterial.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmateriallist.htm
 */
export default class IfcMaterialList implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcMaterialList';

    public readonly __version__: number = 0;

	Materials : Array<IfcMaterial>;

}

export class IfcMaterialListSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMaterialList';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Materials',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcMaterial>'
		}
    ];
}

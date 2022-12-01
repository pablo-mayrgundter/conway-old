
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcBeamTypeEnum} from "./IfcBeamTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbeamtype.htm
 */
export default class IfcBeamType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBeamType';

    public readonly __version__: number = 0;

	PredefinedType : IfcBeamTypeEnum;

}

export class IfcBeamTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBeamType';

    public readonly required: string[] = [ 'IfcBuildingElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBeamTypeEnum'
		}
    ];
}

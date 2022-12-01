
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcVector} from "./IfcVector.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctwodirectionrepeatfactor.htm
 */
export default class IfcTwoDirectionRepeatFactor implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTwoDirectionRepeatFactor';

    public readonly __version__: number = 0;

	SecondRepeatFactor : IfcVector;

}

export class IfcTwoDirectionRepeatFactorSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTwoDirectionRepeatFactor';

    public readonly required: string[] = [ 'IfcOneDirectionRepeatFactor', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'SecondRepeatFactor',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVector'
		}
    ];
}

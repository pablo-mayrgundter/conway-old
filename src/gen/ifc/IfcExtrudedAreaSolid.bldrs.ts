
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcDirection} from "./IfcDirection.bldrs"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcextrudedareasolid.htm
 */
export default class IfcExtrudedAreaSolid implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcExtrudedAreaSolid';

    public readonly __version__: number = 0;

	ExtrudedDirection : IfcDirection;
	Depth : IfcPositiveLengthMeasure;

}

export class IfcExtrudedAreaSolidSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcExtrudedAreaSolid';

    public readonly required: string[] = [ 'IfcSweptAreaSolid', 'IfcSolidModel', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ExtrudedDirection',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirection'
		}, 
		{
			name: 'Depth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];
}

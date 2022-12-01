
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcForceMeasure} from "./IfcForceMeasure.bldrs"
import {IfcTorqueMeasure} from "./IfcTorqueMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadsingleforce.htm
 */
export default class IfcStructuralLoadSingleForce implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralLoadSingleForce';

    public readonly __version__: number = 0;

	ForceX? : IfcForceMeasure;
	ForceY? : IfcForceMeasure;
	ForceZ? : IfcForceMeasure;
	MomentX? : IfcTorqueMeasure;
	MomentY? : IfcTorqueMeasure;
	MomentZ? : IfcTorqueMeasure;

}

export class IfcStructuralLoadSingleForceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralLoadSingleForce';

    public readonly required: string[] = [ 'IfcStructuralLoadStatic', 'IfcStructuralLoad' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ForceX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcForceMeasure'
		}, 
		{
			name: 'ForceY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcForceMeasure'
		}, 
		{
			name: 'ForceZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcForceMeasure'
		}, 
		{
			name: 'MomentX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTorqueMeasure'
		}, 
		{
			name: 'MomentY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTorqueMeasure'
		}, 
		{
			name: 'MomentZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTorqueMeasure'
		}
    ];
}

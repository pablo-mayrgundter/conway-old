
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcLinearForceMeasure from "./IfcLinearForceMeasure.bldrs"
import IfcLinearMomentMeasure from "./IfcLinearMomentMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadlinearforce.htm
 */
export default class IfcStructuralLoadLinearForce implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralLoadLinearForce';

    public readonly __version__: number = 0;

    constructor( public readonly LinearForceX : IfcLinearForceMeasure  | undefined, public readonly LinearForceY : IfcLinearForceMeasure  | undefined, public readonly LinearForceZ : IfcLinearForceMeasure  | undefined, public readonly LinearMomentX : IfcLinearMomentMeasure  | undefined, public readonly LinearMomentY : IfcLinearMomentMeasure  | undefined, public readonly LinearMomentZ : IfcLinearMomentMeasure  | undefined ) {}
}

export class IfcStructuralLoadLinearForceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralLoadLinearForce';

    public readonly required: string[] = [ 'IfcStructuralLoadStatic', 'IfcStructuralLoad' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'LinearForceX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLinearForceMeasure'
		}, 
		{
			name: 'LinearForceY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLinearForceMeasure'
		}, 
		{
			name: 'LinearForceZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLinearForceMeasure'
		}, 
		{
			name: 'LinearMomentX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLinearMomentMeasure'
		}, 
		{
			name: 'LinearMomentY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLinearMomentMeasure'
		}, 
		{
			name: 'LinearMomentZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLinearMomentMeasure'
		}
    ];
}

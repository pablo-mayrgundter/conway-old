
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcForceMeasure from "./IfcForceMeasure.bldrs"
import IfcTorqueMeasure from "./IfcTorqueMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadsingleforce.htm
 */
export default class IfcStructuralLoadSingleForce implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralLoadSingleForce';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcStructuralLoadSingleForceSpecification = IfcStructuralLoadSingleForceSpecification.instance;

    constructor( public readonly ForceX : IfcForceMeasure  | undefined, public readonly ForceY : IfcForceMeasure  | undefined, public readonly ForceZ : IfcForceMeasure  | undefined, public readonly MomentX : IfcTorqueMeasure  | undefined, public readonly MomentY : IfcTorqueMeasure  | undefined, public readonly MomentZ : IfcTorqueMeasure  | undefined ) {}
}

export class IfcStructuralLoadSingleForceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralLoadSingleForce';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralLoadStatic', 'IfcStructuralLoad' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
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

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralLoadSingleForceSpecification = new IfcStructuralLoadSingleForceSpecification();
}

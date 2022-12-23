
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPlanarForceMeasure from "./IfcPlanarForceMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadplanarforce.htm
 */
export default class IfcStructuralLoadPlanarForce implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralLoadPlanarForce';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcStructuralLoadPlanarForceSpecification = IfcStructuralLoadPlanarForceSpecification.instance;

    constructor( public readonly PlanarForceX : IfcPlanarForceMeasure  | undefined, public readonly PlanarForceY : IfcPlanarForceMeasure  | undefined, public readonly PlanarForceZ : IfcPlanarForceMeasure  | undefined ) {}
}

export class IfcStructuralLoadPlanarForceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralLoadPlanarForce';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralLoadStatic', 'IfcStructuralLoad' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PlanarForceX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlanarForceMeasure'
		}, 
		{
			name: 'PlanarForceY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlanarForceMeasure'
		}, 
		{
			name: 'PlanarForceZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlanarForceMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralLoadPlanarForceSpecification = new IfcStructuralLoadPlanarForceSpecification();
}

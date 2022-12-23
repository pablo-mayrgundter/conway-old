
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcConnectionGeometry from "./IfcConnectionGeometry.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectswitheccentricity.htm
 */
export default class IfcRelConnectsWithEccentricity implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelConnectsWithEccentricity';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelConnectsWithEccentricitySpecification = IfcRelConnectsWithEccentricitySpecification.instance;

    constructor( public readonly ConnectionConstraint : IfcConnectionGeometry  ) {}
}

export class IfcRelConnectsWithEccentricitySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelConnectsWithEccentricity';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelConnectsStructuralMember', 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ConnectionConstraint',
			isCollection: false,
			rank: 0,
			baseType: 'IfcConnectionGeometry'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelConnectsWithEccentricitySpecification = new IfcRelConnectsWithEccentricitySpecification();
}

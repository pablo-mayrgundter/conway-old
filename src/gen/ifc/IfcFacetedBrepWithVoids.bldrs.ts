
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcClosedShell from "./IfcClosedShell.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacetedbrepwithvoids.htm
 */
export default class IfcFacetedBrepWithVoids implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFacetedBrepWithVoids';

    public readonly __version__: number = 0;

    constructor( public readonly Voids : Array<IfcClosedShell>  ) {}
}

export class IfcFacetedBrepWithVoidsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFacetedBrepWithVoids';

    public readonly required: string[] = [ 'IfcManifoldSolidBrep', 'IfcSolidModel', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Voids',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcClosedShell>'
		}
    ];
}

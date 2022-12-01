
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcClosedShell} from "./IfcClosedShell.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmanifoldsolidbrep.htm
 */
export default class IfcManifoldSolidBrep implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcManifoldSolidBrep';

    public readonly __version__: number = 0;

	Outer : IfcClosedShell;

}

export class IfcManifoldSolidBrepSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcManifoldSolidBrep';

    public readonly required: string[] = [ 'IfcSolidModel', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Outer',
			isCollection: false,
			rank: 0,
			baseType: 'IfcClosedShell'
		}
    ];
}

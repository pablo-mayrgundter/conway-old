
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcClosedShell from "./IfcClosedShell.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmanifoldsolidbrep.htm
 */
export default class IfcManifoldSolidBrep implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcManifoldSolidBrep';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcManifoldSolidBrepSpecification = IfcManifoldSolidBrepSpecification.instance;

    constructor( public readonly Outer : IfcClosedShell  ) {}
}

export class IfcManifoldSolidBrepSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcManifoldSolidBrep';

    public readonly required: ReadonlyArray< string > = [ 'IfcSolidModel', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Outer',
			isCollection: false,
			rank: 0,
			baseType: 'IfcClosedShell'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcManifoldSolidBrepSpecification = new IfcManifoldSolidBrepSpecification();
}

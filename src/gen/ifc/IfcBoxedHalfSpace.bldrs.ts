
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcBoundingBox from "./IfcBoundingBox.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboxedhalfspace.htm
 */
export default class IfcBoxedHalfSpace implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBoxedHalfSpace';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcBoxedHalfSpaceSpecification = IfcBoxedHalfSpaceSpecification.instance;

    constructor( public readonly Enclosure : IfcBoundingBox  ) {}
}

export class IfcBoxedHalfSpaceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBoxedHalfSpace';

    public readonly required: ReadonlyArray< string > = [ 'IfcHalfSpaceSolid', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Enclosure',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBoundingBox'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcBoxedHalfSpaceSpecification = new IfcBoxedHalfSpaceSpecification();
}


import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcplanarextent.htm
 */
export default class IfcPlanarExtent implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPlanarExtent';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcPlanarExtentSpecification = IfcPlanarExtentSpecification.instance;

    constructor( public readonly SizeInX : IfcLengthMeasure , public readonly SizeInY : IfcLengthMeasure  ) {}
}

export class IfcPlanarExtentSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPlanarExtent';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'SizeInX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'SizeInY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPlanarExtentSpecification = new IfcPlanarExtentSpecification();
}

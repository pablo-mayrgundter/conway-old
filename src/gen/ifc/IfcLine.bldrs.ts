
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"
import IfcVector from "./IfcVector.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcline.htm
 */
export default class IfcLine implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcLine';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcLineSpecification = IfcLineSpecification.instance;

    constructor( public readonly Pnt : IfcCartesianPoint , public readonly Dir : IfcVector  ) {}
}

export class IfcLineSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLine';

    public readonly required: ReadonlyArray< string > = [ 'IfcCurve', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Pnt',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCartesianPoint'
		}, 
		{
			name: 'Dir',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVector'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcLineSpecification = new IfcLineSpecification();
}

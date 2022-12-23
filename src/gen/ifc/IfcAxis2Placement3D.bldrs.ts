
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDirection from "./IfcDirection.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcaxis2placement3d.htm
 */
export default class IfcAxis2Placement3D implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcAxis2Placement3D';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcAxis2Placement3DSpecification = IfcAxis2Placement3DSpecification.instance;

    constructor( public readonly Axis : IfcDirection  | undefined, public readonly RefDirection : IfcDirection  | undefined ) {}
}

export class IfcAxis2Placement3DSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAxis2Placement3D';

    public readonly required: ReadonlyArray< string > = [ 'IfcPlacement', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Axis',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirection'
		}, 
		{
			name: 'RefDirection',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirection'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcAxis2Placement3DSpecification = new IfcAxis2Placement3DSpecification();
}

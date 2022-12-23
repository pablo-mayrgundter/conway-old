
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccsgprimitive3d.htm
 */
export default class IfcCsgPrimitive3D implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCsgPrimitive3D';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcCsgPrimitive3DSpecification = IfcCsgPrimitive3DSpecification.instance;

    constructor( public readonly Position : IfcAxis2Placement3D  ) {}
}

export class IfcCsgPrimitive3DSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCsgPrimitive3D';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Position',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement3D'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCsgPrimitive3DSpecification = new IfcCsgPrimitive3DSpecification();
}

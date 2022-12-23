
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcBooleanResult from "./IfcBooleanResult.bldrs"
import IfcCsgPrimitive3D from "./IfcCsgPrimitive3D.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccsgsolid.htm
 */
export default class IfcCsgSolid implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCsgSolid';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcCsgSolidSpecification = IfcCsgSolidSpecification.instance;

    constructor( public readonly TreeRootExpression : IfcBooleanResult|IfcCsgPrimitive3D  ) {}
}

export class IfcCsgSolidSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCsgSolid';

    public readonly required: ReadonlyArray< string > = [ 'IfcSolidModel', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'TreeRootExpression',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBooleanResult|IfcCsgPrimitive3D'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCsgSolidSpecification = new IfcCsgSolidSpecification();
}

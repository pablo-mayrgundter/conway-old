
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSurface from "./IfcSurface.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifchalfspacesolid.htm
 */
export default class IfcHalfSpaceSolid implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcHalfSpaceSolid';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcHalfSpaceSolidSpecification = IfcHalfSpaceSolidSpecification.instance;

    constructor( public readonly BaseSurface : IfcSurface , public readonly AgreementFlag : boolean  ) {}
}

export class IfcHalfSpaceSolidSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcHalfSpaceSolid';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'BaseSurface',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSurface'
		}, 
		{
			name: 'AgreementFlag',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcHalfSpaceSolidSpecification = new IfcHalfSpaceSolidSpecification();
}

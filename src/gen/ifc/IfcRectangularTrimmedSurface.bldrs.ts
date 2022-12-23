
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSurface from "./IfcSurface.bldrs"
import IfcParameterValue from "./IfcParameterValue.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrectangulartrimmedsurface.htm
 */
export default class IfcRectangularTrimmedSurface implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRectangularTrimmedSurface';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRectangularTrimmedSurfaceSpecification = IfcRectangularTrimmedSurfaceSpecification.instance;

    constructor( public readonly BasisSurface : IfcSurface , public readonly U1 : IfcParameterValue , public readonly V1 : IfcParameterValue , public readonly U2 : IfcParameterValue , public readonly V2 : IfcParameterValue , public readonly Usense : boolean , public readonly Vsense : boolean  ) {}
}

export class IfcRectangularTrimmedSurfaceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRectangularTrimmedSurface';

    public readonly required: ReadonlyArray< string > = [ 'IfcBoundedSurface', 'IfcSurface', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'BasisSurface',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSurface'
		}, 
		{
			name: 'U1',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue'
		}, 
		{
			name: 'V1',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue'
		}, 
		{
			name: 'U2',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue'
		}, 
		{
			name: 'V2',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue'
		}, 
		{
			name: 'Usense',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}, 
		{
			name: 'Vsense',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRectangularTrimmedSurfaceSpecification = new IfcRectangularTrimmedSurfaceSpecification();
}

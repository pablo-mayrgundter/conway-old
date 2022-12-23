
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"
import IfcAxis2Placement2D from "./IfcAxis2Placement2D.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcDirection from "./IfcDirection.bldrs"
import IfcGeometricRepresentationSubContext from "./IfcGeometricRepresentationSubContext.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometricrepresentationcontext.htm
 */
export default class IfcGeometricRepresentationContext implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcGeometricRepresentationContext';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcGeometricRepresentationContextSpecification = IfcGeometricRepresentationContextSpecification.instance;

    constructor( public readonly CoordinateSpaceDimension : IfcDimensionCount , public readonly Precision : number  | undefined, public readonly WorldCoordinateSystem : IfcAxis2Placement2D|IfcAxis2Placement3D , public readonly TrueNorth : IfcDirection  | undefined ) {}
}

export class IfcGeometricRepresentationContextSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcGeometricRepresentationContext';

    public readonly required: ReadonlyArray< string > = [ 'IfcRepresentationContext' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'CoordinateSpaceDimension',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDimensionCount'
		}, 
		{
			name: 'Precision',
			isCollection: false,
			rank: 0,
			baseType: 'number'
		}, 
		{
			name: 'WorldCoordinateSystem',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement2D|IfcAxis2Placement3D'
		}, 
		{
			name: 'TrueNorth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirection'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcGeometricRepresentationContextSpecification = new IfcGeometricRepresentationContextSpecification();
}

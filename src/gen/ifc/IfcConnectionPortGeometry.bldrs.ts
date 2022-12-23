
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAxis2Placement2D from "./IfcAxis2Placement2D.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcProfileDef from "./IfcProfileDef.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectionportgeometry.htm
 */
export default class IfcConnectionPortGeometry implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcConnectionPortGeometry';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcConnectionPortGeometrySpecification = IfcConnectionPortGeometrySpecification.instance;

    constructor( public readonly LocationAtRelatingElement : IfcAxis2Placement2D|IfcAxis2Placement3D , public readonly LocationAtRelatedElement : IfcAxis2Placement2D|IfcAxis2Placement3D  | undefined, public readonly ProfileOfPort : IfcProfileDef  ) {}
}

export class IfcConnectionPortGeometrySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConnectionPortGeometry';

    public readonly required: ReadonlyArray< string > = [ 'IfcConnectionGeometry' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'LocationAtRelatingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement2D|IfcAxis2Placement3D'
		}, 
		{
			name: 'LocationAtRelatedElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement2D|IfcAxis2Placement3D'
		}, 
		{
			name: 'ProfileOfPort',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProfileDef'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcConnectionPortGeometrySpecification = new IfcConnectionPortGeometrySpecification();
}

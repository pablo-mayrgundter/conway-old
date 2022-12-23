
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProfileDef from "./IfcProfileDef.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsweptareasolid.htm
 */
export default class IfcSweptAreaSolid implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSweptAreaSolid';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcSweptAreaSolidSpecification = IfcSweptAreaSolidSpecification.instance;

    constructor( public readonly SweptArea : IfcProfileDef , public readonly Position : IfcAxis2Placement3D  ) {}
}

export class IfcSweptAreaSolidSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSweptAreaSolid';

    public readonly required: ReadonlyArray< string > = [ 'IfcSolidModel', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'SweptArea',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProfileDef'
		}, 
		{
			name: 'Position',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement3D'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSweptAreaSolidSpecification = new IfcSweptAreaSolidSpecification();
}


import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCompositeCurve from "./IfcCompositeCurve.bldrs"
import IfcProfileDef from "./IfcProfileDef.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsectionedspine.htm
 */
export default class IfcSectionedSpine implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSectionedSpine';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcSectionedSpineSpecification = IfcSectionedSpineSpecification.instance;

    constructor( public readonly SpineCurve : IfcCompositeCurve , public readonly CrossSections : Array<IfcProfileDef> , public readonly CrossSectionPositions : Array<IfcAxis2Placement3D>  ) {}
}

export class IfcSectionedSpineSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSectionedSpine';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'SpineCurve',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCompositeCurve'
		}, 
		{
			name: 'CrossSections',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcProfileDef>'
		}, 
		{
			name: 'CrossSectionPositions',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcAxis2Placement3D>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSectionedSpineSpecification = new IfcSectionedSpineSpecification();
}


import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProfileDef from "./IfcProfileDef.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccompositeprofiledef.htm
 */
export default class IfcCompositeProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCompositeProfileDef';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcCompositeProfileDefSpecification = IfcCompositeProfileDefSpecification.instance;

    constructor( public readonly Profiles : Array<IfcProfileDef> , public readonly Label : IfcLabel  | undefined ) {}
}

export class IfcCompositeProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCompositeProfileDef';

    public readonly required: ReadonlyArray< string > = [ 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Profiles',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcProfileDef>'
		}, 
		{
			name: 'Label',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCompositeProfileDefSpecification = new IfcCompositeProfileDefSpecification();
}

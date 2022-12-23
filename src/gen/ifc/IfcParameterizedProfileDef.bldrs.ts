
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAxis2Placement2D from "./IfcAxis2Placement2D.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcparameterizedprofiledef.htm
 */
export default class IfcParameterizedProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcParameterizedProfileDef';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcParameterizedProfileDefSpecification = IfcParameterizedProfileDefSpecification.instance;

    constructor( public readonly Position : IfcAxis2Placement2D  ) {}
}

export class IfcParameterizedProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcParameterizedProfileDef';

    public readonly required: ReadonlyArray< string > = [ 'IfcProfileDef' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Position',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement2D'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcParameterizedProfileDefSpecification = new IfcParameterizedProfileDefSpecification();
}

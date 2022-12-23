
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcStructuralCurveTypeEnum from "./IfcStructuralCurveTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralcurvemember.htm
 */
export default class IfcStructuralCurveMember implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralCurveMember';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcStructuralCurveMemberSpecification = IfcStructuralCurveMemberSpecification.instance;

    constructor( public readonly PredefinedType : IfcStructuralCurveTypeEnum  ) {}
}

export class IfcStructuralCurveMemberSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralCurveMember';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralMember', 'IfcStructuralItem', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStructuralCurveTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralCurveMemberSpecification = new IfcStructuralCurveMemberSpecification();
}

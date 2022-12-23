
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcFootingTypeEnum from "./IfcFootingTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfooting.htm
 */
export default class IfcFooting implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFooting';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcFootingSpecification = IfcFootingSpecification.instance;

    constructor( public readonly PredefinedType : IfcFootingTypeEnum  ) {}
}

export class IfcFootingSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFooting';

    public readonly required: ReadonlyArray< string > = [ 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFootingTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFootingSpecification = new IfcFootingSpecification();
}

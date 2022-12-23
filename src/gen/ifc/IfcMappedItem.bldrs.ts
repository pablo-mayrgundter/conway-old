
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcRepresentationMap from "./IfcRepresentationMap.bldrs"
import IfcCartesianTransformationOperator from "./IfcCartesianTransformationOperator.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmappeditem.htm
 */
export default class IfcMappedItem implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcMappedItem';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcMappedItemSpecification = IfcMappedItemSpecification.instance;

    constructor( public readonly MappingSource : IfcRepresentationMap , public readonly MappingTarget : IfcCartesianTransformationOperator  ) {}
}

export class IfcMappedItemSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMappedItem';

    public readonly required: ReadonlyArray< string > = [ 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'MappingSource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRepresentationMap'
		}, 
		{
			name: 'MappingTarget',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCartesianTransformationOperator'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcMappedItemSpecification = new IfcMappedItemSpecification();
}


import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcClassificationNotationFacet from "./IfcClassificationNotationFacet.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclassificationnotation.htm
 */
export default class IfcClassificationNotation implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcClassificationNotation';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcClassificationNotationSpecification = IfcClassificationNotationSpecification.instance;

    constructor( public readonly NotationFacets : Array<IfcClassificationNotationFacet>  ) {}
}

export class IfcClassificationNotationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcClassificationNotation';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'NotationFacets',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcClassificationNotationFacet>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcClassificationNotationSpecification = new IfcClassificationNotationSpecification();
}

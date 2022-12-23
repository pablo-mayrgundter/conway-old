
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclassificationnotationfacet.htm
 */
export default class IfcClassificationNotationFacet implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcClassificationNotationFacet';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcClassificationNotationFacetSpecification = IfcClassificationNotationFacetSpecification.instance;

    constructor( public readonly NotationValue : IfcLabel  ) {}
}

export class IfcClassificationNotationFacetSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcClassificationNotationFacet';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'NotationValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcClassificationNotationFacetSpecification = new IfcClassificationNotationFacetSpecification();
}

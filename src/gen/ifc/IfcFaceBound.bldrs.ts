
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLoop from "./IfcLoop.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacebound.htm
 */
export default class IfcFaceBound implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFaceBound';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcFaceBoundSpecification = IfcFaceBoundSpecification.instance;

    constructor( public readonly Bound : IfcLoop , public readonly Orientation : boolean  ) {}
}

export class IfcFaceBoundSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFaceBound';

    public readonly required: ReadonlyArray< string > = [ 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Bound',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLoop'
		}, 
		{
			name: 'Orientation',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFaceBoundSpecification = new IfcFaceBoundSpecification();
}


import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSpace from "./IfcSpace.bldrs"
import IfcCovering from "./IfcCovering.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelcoversspaces.htm
 */
export default class IfcRelCoversSpaces implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelCoversSpaces';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelCoversSpacesSpecification = IfcRelCoversSpacesSpecification.instance;

    constructor( public readonly RelatedSpace : IfcSpace , public readonly RelatedCoverings : Array<IfcCovering>  ) {}
}

export class IfcRelCoversSpacesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelCoversSpaces';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatedSpace',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpace'
		}, 
		{
			name: 'RelatedCoverings',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCovering>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelCoversSpacesSpecification = new IfcRelCoversSpacesSpecification();
}

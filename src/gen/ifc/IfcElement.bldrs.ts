
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcRelFillsElement from "./IfcRelFillsElement.bldrs"
import IfcRelConnectsElements from "./IfcRelConnectsElements.bldrs"
import IfcRelCoversBldgElements from "./IfcRelCoversBldgElements.bldrs"
import IfcRelProjectsElement from "./IfcRelProjectsElement.bldrs"
import IfcRelConnectsStructuralElement from "./IfcRelConnectsStructuralElement.bldrs"
import IfcRelReferencedInSpatialStructure from "./IfcRelReferencedInSpatialStructure.bldrs"
import IfcRelConnectsPortToElement from "./IfcRelConnectsPortToElement.bldrs"
import IfcRelVoidsElement from "./IfcRelVoidsElement.bldrs"
import IfcRelConnectsWithRealizingElements from "./IfcRelConnectsWithRealizingElements.bldrs"
import IfcRelSpaceBoundary from "./IfcRelSpaceBoundary.bldrs"
import IfcRelContainedInSpatialStructure from "./IfcRelContainedInSpatialStructure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelement.htm
 */
export default class IfcElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcElement';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcElementSpecification = IfcElementSpecification.instance;

    constructor( public readonly Tag : IfcIdentifier  | undefined ) {}
}

export class IfcElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcElement';

    public readonly required: ReadonlyArray< string > = [ 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Tag',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcElementSpecification = new IfcElementSpecification();
}

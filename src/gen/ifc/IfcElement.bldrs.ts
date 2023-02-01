
import Component from "../../core/component"
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
export default abstract class IfcElement extends IfcProduct 
{    
    public readonly specification: IfcElementSpecification = IfcElementSpecification.instance;

private Tag_? : IfcIdentifier

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcElement';

    public readonly required: ReadonlyArray< string > = [ 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Tag',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcElementSpecification = new IfcElementSpecification();
}

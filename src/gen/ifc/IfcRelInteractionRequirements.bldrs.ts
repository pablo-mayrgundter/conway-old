
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCountMeasure from "./IfcCountMeasure.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"
import IfcSpatialStructureElement from "./IfcSpatialStructureElement.bldrs"
import IfcSpaceProgram from "./IfcSpaceProgram.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelinteractionrequirements.htm
 */
export default  class IfcRelInteractionRequirements extends IfcRelConnects 
{    
    public readonly specification: IfcRelInteractionRequirementsSpecification = IfcRelInteractionRequirementsSpecification.instance;

private DailyInteraction_? : IfcCountMeasure
    private ImportanceRating_? : IfcNormalisedRatioMeasure
    private LocationOfInteraction_? : IfcSpatialStructureElement
    private RelatedSpaceProgram_? : IfcSpaceProgram
    private RelatingSpaceProgram_? : IfcSpaceProgram

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelInteractionRequirementsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelInteractionRequirements';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelInteractionRequirements', 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'DailyInteraction',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCountMeasure',
			optional: true
		}, 
		{
			name: 'ImportanceRating',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure',
			optional: true
		}, 
		{
			name: 'LocationOfInteraction',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpatialStructureElement',
			optional: true
		}, 
		{
			name: 'RelatedSpaceProgram',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpaceProgram',
			optional: false
		}, 
		{
			name: 'RelatingSpaceProgram',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpaceProgram',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelInteractionRequirementsSpecification = new IfcRelInteractionRequirementsSpecification();
}


import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcAreaMeasure from "./IfcAreaMeasure.bldrs"
import IfcSpatialStructureElement from "./IfcSpatialStructureElement.bldrs"
import IfcRelInteractionRequirements from "./IfcRelInteractionRequirements.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcspaceprogram.htm
 */
export default  class IfcSpaceProgram extends IfcControl 
{    
    public readonly specification: IfcSpaceProgramSpecification = IfcSpaceProgramSpecification.instance;

private SpaceProgramIdentifier_? : IfcIdentifier
    private MaxRequiredArea_? : IfcAreaMeasure
    private MinRequiredArea_? : IfcAreaMeasure
    private RequestedLocation_? : IfcSpatialStructureElement
    private StandardRequiredArea_? : IfcAreaMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSpaceProgramSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSpaceProgram';

    public readonly required: ReadonlyArray< string > = [ 'IfcSpaceProgram', 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'SpaceProgramIdentifier',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier',
			optional: false
		}, 
		{
			name: 'MaxRequiredArea',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure',
			optional: true
		}, 
		{
			name: 'MinRequiredArea',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure',
			optional: true
		}, 
		{
			name: 'RequestedLocation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpatialStructureElement',
			optional: true
		}, 
		{
			name: 'StandardRequiredArea',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSpaceProgramSpecification = new IfcSpaceProgramSpecification();
}

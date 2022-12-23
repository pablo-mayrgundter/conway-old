
import Component from "../../core/components"
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
export default class IfcSpaceProgram implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSpaceProgram';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcSpaceProgramSpecification = IfcSpaceProgramSpecification.instance;

    constructor( public readonly SpaceProgramIdentifier : IfcIdentifier , public readonly MaxRequiredArea : IfcAreaMeasure  | undefined, public readonly MinRequiredArea : IfcAreaMeasure  | undefined, public readonly RequestedLocation : IfcSpatialStructureElement  | undefined, public readonly StandardRequiredArea : IfcAreaMeasure  ) {}
}

export class IfcSpaceProgramSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSpaceProgram';

    public readonly required: ReadonlyArray< string > = [ 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'SpaceProgramIdentifier',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier'
		}, 
		{
			name: 'MaxRequiredArea',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure'
		}, 
		{
			name: 'MinRequiredArea',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure'
		}, 
		{
			name: 'RequestedLocation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpatialStructureElement'
		}, 
		{
			name: 'StandardRequiredArea',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSpaceProgramSpecification = new IfcSpaceProgramSpecification();
}


import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcPostalAddress from "./IfcPostalAddress.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbuilding.htm
 */
export default class IfcBuilding implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBuilding';

    public readonly __version__: number = 0;

    constructor( public readonly ElevationOfRefHeight : IfcLengthMeasure  | undefined, public readonly ElevationOfTerrain : IfcLengthMeasure  | undefined, public readonly BuildingAddress : IfcPostalAddress  | undefined ) {}
}

export class IfcBuildingSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBuilding';

    public readonly required: string[] = [ 'IfcSpatialStructureElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ElevationOfRefHeight',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'ElevationOfTerrain',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'BuildingAddress',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPostalAddress'
		}
    ];
}

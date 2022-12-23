
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSystem from "./IfcSystem.bldrs"
import IfcSpatialStructureElement from "./IfcSpatialStructureElement.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelservicesbuildings.htm
 */
export default class IfcRelServicesBuildings implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelServicesBuildings';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelServicesBuildingsSpecification = IfcRelServicesBuildingsSpecification.instance;

    constructor( public readonly RelatingSystem : IfcSystem , public readonly RelatedBuildings : Array<IfcSpatialStructureElement>  ) {}
}

export class IfcRelServicesBuildingsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelServicesBuildings';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingSystem',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSystem'
		}, 
		{
			name: 'RelatedBuildings',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcSpatialStructureElement>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelServicesBuildingsSpecification = new IfcRelServicesBuildingsSpecification();
}

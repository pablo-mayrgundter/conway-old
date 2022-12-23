
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAssemblyPlaceEnum from "./IfcAssemblyPlaceEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfurnituretype.htm
 */
export default class IfcFurnitureType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFurnitureType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcFurnitureTypeSpecification = IfcFurnitureTypeSpecification.instance;

    constructor( public readonly AssemblyPlace : IfcAssemblyPlaceEnum  ) {}
}

export class IfcFurnitureTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFurnitureType';

    public readonly required: ReadonlyArray< string > = [ 'IfcFurnishingElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'AssemblyPlace',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAssemblyPlaceEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFurnitureTypeSpecification = new IfcFurnitureTypeSpecification();
}

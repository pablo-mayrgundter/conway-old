
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcMaterial from "./IfcMaterial.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialproperties.htm
 */
export default class IfcMaterialProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcMaterialProperties';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcMaterialPropertiesSpecification = IfcMaterialPropertiesSpecification.instance;

    constructor( public readonly Material : IfcMaterial  ) {}
}

export class IfcMaterialPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMaterialProperties';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Material',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMaterial'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcMaterialPropertiesSpecification = new IfcMaterialPropertiesSpecification();
}

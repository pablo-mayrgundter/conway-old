
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcColourRgb from "./IfcColourRgb.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestylelighting.htm
 */
export default class IfcSurfaceStyleLighting implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSurfaceStyleLighting';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcSurfaceStyleLightingSpecification = IfcSurfaceStyleLightingSpecification.instance;

    constructor( public readonly DiffuseTransmissionColour : IfcColourRgb , public readonly DiffuseReflectionColour : IfcColourRgb , public readonly TransmissionColour : IfcColourRgb , public readonly ReflectanceColour : IfcColourRgb  ) {}
}

export class IfcSurfaceStyleLightingSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSurfaceStyleLighting';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'DiffuseTransmissionColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourRgb'
		}, 
		{
			name: 'DiffuseReflectionColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourRgb'
		}, 
		{
			name: 'TransmissionColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourRgb'
		}, 
		{
			name: 'ReflectanceColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourRgb'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSurfaceStyleLightingSpecification = new IfcSurfaceStyleLightingSpecification();
}

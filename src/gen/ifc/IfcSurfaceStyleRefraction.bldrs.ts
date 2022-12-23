
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcReal from "./IfcReal.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestylerefraction.htm
 */
export default class IfcSurfaceStyleRefraction implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSurfaceStyleRefraction';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcSurfaceStyleRefractionSpecification = IfcSurfaceStyleRefractionSpecification.instance;

    constructor( public readonly RefractionIndex : IfcReal  | undefined, public readonly DispersionFactor : IfcReal  | undefined ) {}
}

export class IfcSurfaceStyleRefractionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSurfaceStyleRefraction';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RefractionIndex',
			isCollection: false,
			rank: 0,
			baseType: 'IfcReal'
		}, 
		{
			name: 'DispersionFactor',
			isCollection: false,
			rank: 0,
			baseType: 'IfcReal'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSurfaceStyleRefractionSpecification = new IfcSurfaceStyleRefractionSpecification();
}

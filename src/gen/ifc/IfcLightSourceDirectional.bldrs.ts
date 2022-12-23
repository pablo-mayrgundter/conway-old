
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDirection from "./IfcDirection.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourcedirectional.htm
 */
export default class IfcLightSourceDirectional implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcLightSourceDirectional';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcLightSourceDirectionalSpecification = IfcLightSourceDirectionalSpecification.instance;

    constructor( public readonly Orientation : IfcDirection  ) {}
}

export class IfcLightSourceDirectionalSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLightSourceDirectional';

    public readonly required: ReadonlyArray< string > = [ 'IfcLightSource', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Orientation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirection'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcLightSourceDirectionalSpecification = new IfcLightSourceDirectionalSpecification();
}

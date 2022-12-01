
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcReal} from "./IfcReal.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestylerefraction.htm
 */
export default class IfcSurfaceStyleRefraction implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSurfaceStyleRefraction';

    public readonly __version__: number = 0;

	RefractionIndex? : IfcReal;
	DispersionFactor? : IfcReal;

}

export class IfcSurfaceStyleRefractionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSurfaceStyleRefraction';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
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
}

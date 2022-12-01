
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcCurve} from "./IfcCurve.bldrs"
import {IfcParameterValue} from "./IfcParameterValue.bldrs"
import {IfcSurface} from "./IfcSurface.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacecurvesweptareasolid.htm
 */
export default class IfcSurfaceCurveSweptAreaSolid implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSurfaceCurveSweptAreaSolid';

    public readonly __version__: number = 0;

	Directrix : IfcCurve;
	StartParam : IfcParameterValue;
	EndParam : IfcParameterValue;
	ReferenceSurface : IfcSurface;

}

export class IfcSurfaceCurveSweptAreaSolidSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSurfaceCurveSweptAreaSolid';

    public readonly required: string[] = [ 'IfcSweptAreaSolid', 'IfcSolidModel', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Directrix',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurve'
		}, 
		{
			name: 'StartParam',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue'
		}, 
		{
			name: 'EndParam',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue'
		}, 
		{
			name: 'ReferenceSurface',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSurface'
		}
    ];
}


import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcCurvatureMeasure} from "./IfcCurvatureMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadsingledisplacementdistortion.htm
 */
export default class IfcStructuralLoadSingleDisplacementDistortion implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralLoadSingleDisplacementDistortion';

    public readonly __version__: number = 0;

	Distortion? : IfcCurvatureMeasure;

}

export class IfcStructuralLoadSingleDisplacementDistortionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralLoadSingleDisplacementDistortion';

    public readonly required: string[] = [ 'IfcStructuralLoadSingleDisplacement', 'IfcStructuralLoadStatic', 'IfcStructuralLoad' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Distortion',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurvatureMeasure'
		}
    ];
}

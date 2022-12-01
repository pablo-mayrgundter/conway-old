
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"
import {IfcInteger} from "./IfcInteger.bldrs"
import {IfcReal} from "./IfcReal.bldrs"
import {IfcBoolean} from "./IfcBoolean.bldrs"
import {IfcIdentifier} from "./IfcIdentifier.bldrs"
import {IfcText} from "./IfcText.bldrs"
import {IfcLogical} from "./IfcLogical.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexturecoordinategenerator.htm
 */
export default class IfcTextureCoordinateGenerator implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTextureCoordinateGenerator';

    public readonly __version__: number = 0;

	Mode : IfcLabel;
	Parameter : Array<IfcInteger|IfcReal|IfcBoolean|IfcIdentifier|IfcText|IfcLabel|IfcLogical>;

}

export class IfcTextureCoordinateGeneratorSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTextureCoordinateGenerator';

    public readonly required: string[] = [ 'IfcTextureCoordinate' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Mode',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Parameter',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcInteger|IfcReal|IfcBoolean|IfcIdentifier|IfcText|IfcLabel|IfcLogical>'
		}
    ];
}

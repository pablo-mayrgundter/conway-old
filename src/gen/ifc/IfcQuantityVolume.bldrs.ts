
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcVolumeMeasure} from "./IfcVolumeMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantityvolume.htm
 */
export default class IfcQuantityVolume implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcQuantityVolume';

    public readonly __version__: number = 0;

	VolumeValue : IfcVolumeMeasure;

}

export class IfcQuantityVolumeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcQuantityVolume';

    public readonly required: string[] = [ 'IfcPhysicalSimpleQuantity', 'IfcPhysicalQuantity' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'VolumeValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVolumeMeasure'
		}
    ];
}

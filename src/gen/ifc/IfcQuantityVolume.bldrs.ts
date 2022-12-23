
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcVolumeMeasure from "./IfcVolumeMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantityvolume.htm
 */
export default class IfcQuantityVolume implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcQuantityVolume';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcQuantityVolumeSpecification = IfcQuantityVolumeSpecification.instance;

    constructor( public readonly VolumeValue : IfcVolumeMeasure  ) {}
}

export class IfcQuantityVolumeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcQuantityVolume';

    public readonly required: ReadonlyArray< string > = [ 'IfcPhysicalSimpleQuantity', 'IfcPhysicalQuantity' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'VolumeValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVolumeMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcQuantityVolumeSpecification = new IfcQuantityVolumeSpecification();
}

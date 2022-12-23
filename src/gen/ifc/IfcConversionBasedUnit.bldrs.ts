
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcMeasureWithUnit from "./IfcMeasureWithUnit.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconversionbasedunit.htm
 */
export default class IfcConversionBasedUnit implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcConversionBasedUnit';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcConversionBasedUnitSpecification = IfcConversionBasedUnitSpecification.instance;

    constructor( public readonly Name : IfcLabel , public readonly ConversionFactor : IfcMeasureWithUnit  ) {}
}

export class IfcConversionBasedUnitSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConversionBasedUnit';

    public readonly required: ReadonlyArray< string > = [ 'IfcNamedUnit' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'ConversionFactor',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMeasureWithUnit'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcConversionBasedUnitSpecification = new IfcConversionBasedUnitSpecification();
}


import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProjectedOrTrueLengthEnum from "./IfcProjectedOrTrueLengthEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralplanaraction.htm
 */
export default class IfcStructuralPlanarAction implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralPlanarAction';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcStructuralPlanarActionSpecification = IfcStructuralPlanarActionSpecification.instance;

    constructor( public readonly ProjectedOrTrue : IfcProjectedOrTrueLengthEnum  ) {}
}

export class IfcStructuralPlanarActionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralPlanarAction';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralAction', 'IfcStructuralActivity', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ProjectedOrTrue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProjectedOrTrueLengthEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralPlanarActionSpecification = new IfcStructuralPlanarActionSpecification();
}

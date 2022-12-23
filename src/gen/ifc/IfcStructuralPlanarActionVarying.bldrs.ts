
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcShapeAspect from "./IfcShapeAspect.bldrs"
import IfcStructuralLoad from "./IfcStructuralLoad.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralplanaractionvarying.htm
 */
export default class IfcStructuralPlanarActionVarying implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralPlanarActionVarying';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcStructuralPlanarActionVaryingSpecification = IfcStructuralPlanarActionVaryingSpecification.instance;

    constructor( public readonly VaryingAppliedLoadLocation : IfcShapeAspect , public readonly SubsequentAppliedLoads : Array<IfcStructuralLoad>  ) {}
}

export class IfcStructuralPlanarActionVaryingSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralPlanarActionVarying';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralPlanarAction', 'IfcStructuralAction', 'IfcStructuralActivity', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'VaryingAppliedLoadLocation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcShapeAspect'
		}, 
		{
			name: 'SubsequentAppliedLoads',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcStructuralLoad>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralPlanarActionVaryingSpecification = new IfcStructuralPlanarActionVaryingSpecification();
}

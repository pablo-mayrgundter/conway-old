
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCurve from "./IfcCurve.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcarbitraryprofiledefwithvoids.htm
 */
export default class IfcArbitraryProfileDefWithVoids implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcArbitraryProfileDefWithVoids';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcArbitraryProfileDefWithVoidsSpecification = IfcArbitraryProfileDefWithVoidsSpecification.instance;

    constructor( public readonly InnerCurves : Array<IfcCurve>  ) {}
}

export class IfcArbitraryProfileDefWithVoidsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcArbitraryProfileDefWithVoids';

    public readonly required: ReadonlyArray< string > = [ 'IfcArbitraryClosedProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'InnerCurves',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCurve>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcArbitraryProfileDefWithVoidsSpecification = new IfcArbitraryProfileDefWithVoidsSpecification();
}

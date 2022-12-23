
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcVector from "./IfcVector.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifconedirectionrepeatfactor.htm
 */
export default class IfcOneDirectionRepeatFactor implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcOneDirectionRepeatFactor';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcOneDirectionRepeatFactorSpecification = IfcOneDirectionRepeatFactorSpecification.instance;

    constructor( public readonly RepeatFactor : IfcVector  ) {}
}

export class IfcOneDirectionRepeatFactorSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcOneDirectionRepeatFactor';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RepeatFactor',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVector'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcOneDirectionRepeatFactorSpecification = new IfcOneDirectionRepeatFactorSpecification();
}

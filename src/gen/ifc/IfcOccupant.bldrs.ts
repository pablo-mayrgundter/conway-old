
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcOccupantTypeEnum from "./IfcOccupantTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcoccupant.htm
 */
export default class IfcOccupant implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcOccupant';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcOccupantSpecification = IfcOccupantSpecification.instance;

    constructor( public readonly PredefinedType : IfcOccupantTypeEnum  ) {}
}

export class IfcOccupantSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcOccupant';

    public readonly required: ReadonlyArray< string > = [ 'IfcActor', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOccupantTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcOccupantSpecification = new IfcOccupantSpecification();
}


import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAppliedValue from "./IfcAppliedValue.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesappliedvalue.htm
 */
export default  class IfcRelAssociatesAppliedValue extends IfcRelAssociates 
{    
    public readonly specification: IfcRelAssociatesAppliedValueSpecification = IfcRelAssociatesAppliedValueSpecification.instance;

private RelatingAppliedValue_? : IfcAppliedValue

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelAssociatesAppliedValueSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssociatesAppliedValue';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssociatesAppliedValue', 'IfcRelAssociates', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingAppliedValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAppliedValue',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssociatesAppliedValueSpecification = new IfcRelAssociatesAppliedValueSpecification();
}

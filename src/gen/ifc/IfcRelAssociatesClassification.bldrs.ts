
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcClassificationNotation from "./IfcClassificationNotation.bldrs"
import IfcClassificationReference from "./IfcClassificationReference.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesclassification.htm
 */
export default  class IfcRelAssociatesClassification extends IfcRelAssociates 
{    
    public readonly specification: IfcRelAssociatesClassificationSpecification = IfcRelAssociatesClassificationSpecification.instance;

private RelatingClassification_? : IfcClassificationNotation|IfcClassificationReference

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelAssociatesClassificationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssociatesClassification';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssociatesClassification', 'IfcRelAssociates', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingClassification',
			isCollection: false,
			rank: 0,
			baseType: 'IfcClassificationNotation|IfcClassificationReference',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssociatesClassificationSpecification = new IfcRelAssociatesClassificationSpecification();
}

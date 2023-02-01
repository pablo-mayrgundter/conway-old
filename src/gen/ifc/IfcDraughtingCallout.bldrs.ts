
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAnnotationCurveOccurrence from "./IfcAnnotationCurveOccurrence.bldrs"
import IfcAnnotationTextOccurrence from "./IfcAnnotationTextOccurrence.bldrs"
import IfcAnnotationSymbolOccurrence from "./IfcAnnotationSymbolOccurrence.bldrs"
import IfcDraughtingCalloutRelationship from "./IfcDraughtingCalloutRelationship.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdraughtingcallout.htm
 */
export default  class IfcDraughtingCallout extends IfcGeometricRepresentationItem 
{    
    public readonly specification: IfcDraughtingCalloutSpecification = IfcDraughtingCalloutSpecification.instance;

private Contents_? : Array<IfcAnnotationCurveOccurrence|IfcAnnotationTextOccurrence|IfcAnnotationSymbolOccurrence>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcDraughtingCalloutSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDraughtingCallout';

    public readonly required: ReadonlyArray< string > = [ 'IfcDraughtingCallout', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Contents',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcAnnotationCurveOccurrence|IfcAnnotationTextOccurrence|IfcAnnotationSymbolOccurrence>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDraughtingCalloutSpecification = new IfcDraughtingCalloutSpecification();
}

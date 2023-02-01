
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAnnotationCurveOccurrence from "./IfcAnnotationCurveOccurrence.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcterminatorsymbol.htm
 */
export default  class IfcTerminatorSymbol extends IfcAnnotationSymbolOccurrence 
{    
    public readonly specification: IfcTerminatorSymbolSpecification = IfcTerminatorSymbolSpecification.instance;

private AnnotatedCurve_? : IfcAnnotationCurveOccurrence

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTerminatorSymbolSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTerminatorSymbol';

    public readonly required: ReadonlyArray< string > = [ 'IfcTerminatorSymbol', 'IfcAnnotationSymbolOccurrence', 'IfcAnnotationOccurrence', 'IfcStyledItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'AnnotatedCurve',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAnnotationCurveOccurrence',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTerminatorSymbolSpecification = new IfcTerminatorSymbolSpecification();
}

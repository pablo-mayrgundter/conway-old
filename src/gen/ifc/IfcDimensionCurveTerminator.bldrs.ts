
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDimensionExtentUsage from "./IfcDimensionExtentUsage.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdimensioncurveterminator.htm
 */
export default  class IfcDimensionCurveTerminator extends IfcTerminatorSymbol 
{    
    public readonly specification: IfcDimensionCurveTerminatorSpecification = IfcDimensionCurveTerminatorSpecification.instance;

private Role_? : IfcDimensionExtentUsage

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcDimensionCurveTerminatorSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDimensionCurveTerminator';

    public readonly required: ReadonlyArray< string > = [ 'IfcDimensionCurveTerminator', 'IfcTerminatorSymbol', 'IfcAnnotationSymbolOccurrence', 'IfcAnnotationOccurrence', 'IfcStyledItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Role',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDimensionExtentUsage',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDimensionCurveTerminatorSpecification = new IfcDimensionCurveTerminatorSpecification();
}

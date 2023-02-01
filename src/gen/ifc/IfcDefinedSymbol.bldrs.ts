
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPreDefinedSymbol from "./IfcPreDefinedSymbol.bldrs"
import IfcExternallyDefinedSymbol from "./IfcExternallyDefinedSymbol.bldrs"
import IfcCartesianTransformationOperator2D from "./IfcCartesianTransformationOperator2D.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdefinedsymbol.htm
 */
export default  class IfcDefinedSymbol extends IfcGeometricRepresentationItem 
{    
    public readonly specification: IfcDefinedSymbolSpecification = IfcDefinedSymbolSpecification.instance;

private Definition_? : IfcPreDefinedSymbol|IfcExternallyDefinedSymbol
    private Target_? : IfcCartesianTransformationOperator2D

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcDefinedSymbolSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDefinedSymbol';

    public readonly required: ReadonlyArray< string > = [ 'IfcDefinedSymbol', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Definition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPreDefinedSymbol|IfcExternallyDefinedSymbol',
			optional: false
		}, 
		{
			name: 'Target',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCartesianTransformationOperator2D',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDefinedSymbolSpecification = new IfcDefinedSymbolSpecification();
}

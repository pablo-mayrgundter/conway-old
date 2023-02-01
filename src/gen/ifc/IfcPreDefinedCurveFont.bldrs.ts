
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefinedcurvefont.htm
 */
export default abstract class IfcPreDefinedCurveFont extends IfcPreDefinedItem 
{    
    public readonly specification: IfcPreDefinedCurveFontSpecification = IfcPreDefinedCurveFontSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcPreDefinedCurveFontSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPreDefinedCurveFont';

    public readonly required: ReadonlyArray< string > = [ 'IfcPreDefinedCurveFont', 'IfcPreDefinedItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPreDefinedCurveFontSpecification = new IfcPreDefinedCurveFontSpecification();
}

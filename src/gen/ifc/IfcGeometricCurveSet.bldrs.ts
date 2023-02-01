
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometriccurveset.htm
 */
export default  class IfcGeometricCurveSet extends IfcGeometricSet 
{    
    public readonly specification: IfcGeometricCurveSetSpecification = IfcGeometricCurveSetSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcGeometricCurveSetSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcGeometricCurveSet';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeometricCurveSet', 'IfcGeometricSet', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcGeometricCurveSetSpecification = new IfcGeometricCurveSetSpecification();
}

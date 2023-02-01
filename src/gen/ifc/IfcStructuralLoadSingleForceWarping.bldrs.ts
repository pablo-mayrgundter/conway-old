
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcWarpingMomentMeasure from "./IfcWarpingMomentMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadsingleforcewarping.htm
 */
export default  class IfcStructuralLoadSingleForceWarping extends IfcStructuralLoadSingleForce 
{    
    public readonly specification: IfcStructuralLoadSingleForceWarpingSpecification = IfcStructuralLoadSingleForceWarpingSpecification.instance;

private WarpingMoment_? : IfcWarpingMomentMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcStructuralLoadSingleForceWarpingSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralLoadSingleForceWarping';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralLoadSingleForceWarping', 'IfcStructuralLoadSingleForce', 'IfcStructuralLoadStatic', 'IfcStructuralLoad' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'WarpingMoment',
			isCollection: false,
			rank: 0,
			baseType: 'IfcWarpingMomentMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralLoadSingleForceWarpingSpecification = new IfcStructuralLoadSingleForceWarpingSpecification();
}

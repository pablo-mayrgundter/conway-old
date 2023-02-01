
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcShapeAspect from "./IfcShapeAspect.bldrs"
import IfcStructuralLoad from "./IfcStructuralLoad.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralplanaractionvarying.htm
 */
export default  class IfcStructuralPlanarActionVarying extends IfcStructuralPlanarAction 
{    
    public readonly specification: IfcStructuralPlanarActionVaryingSpecification = IfcStructuralPlanarActionVaryingSpecification.instance;

private VaryingAppliedLoadLocation_? : IfcShapeAspect
    private SubsequentAppliedLoads_? : Array<IfcStructuralLoad>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcStructuralPlanarActionVaryingSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralPlanarActionVarying';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralPlanarActionVarying', 'IfcStructuralPlanarAction', 'IfcStructuralAction', 'IfcStructuralActivity', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'VaryingAppliedLoadLocation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcShapeAspect',
			optional: false
		}, 
		{
			name: 'SubsequentAppliedLoads',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcStructuralLoad>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralPlanarActionVaryingSpecification = new IfcStructuralPlanarActionVaryingSpecification();
}

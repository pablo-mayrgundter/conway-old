
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcGridAxis from "./IfcGridAxis.bldrs"
import IfcRelContainedInSpatialStructure from "./IfcRelContainedInSpatialStructure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgrid.htm
 */
export default  class IfcGrid extends IfcProduct 
{    
    public readonly specification: IfcGridSpecification = IfcGridSpecification.instance;

private UAxes_? : Array<IfcGridAxis>
    private VAxes_? : Array<IfcGridAxis>
    private WAxes_? : Array<IfcGridAxis>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcGridSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcGrid';

    public readonly required: ReadonlyArray< string > = [ 'IfcGrid', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'UAxes',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcGridAxis>',
			optional: false
		}, 
		{
			name: 'VAxes',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcGridAxis>',
			optional: false
		}, 
		{
			name: 'WAxes',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcGridAxis>',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcGridSpecification = new IfcGridSpecification();
}

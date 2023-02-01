
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcMaterialLayer from "./IfcMaterialLayer.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmateriallayerset.htm
 */
export default  class IfcMaterialLayerSet extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcMaterialLayerSetSpecification = IfcMaterialLayerSetSpecification.instance;

private MaterialLayers_? : Array<IfcMaterialLayer>
    private LayerSetName_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcMaterialLayerSetSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMaterialLayerSet';

    public readonly required: ReadonlyArray< string > = [ 'IfcMaterialLayerSet' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'MaterialLayers',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcMaterialLayer>',
			optional: false
		}, 
		{
			name: 'LayerSetName',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcMaterialLayerSetSpecification = new IfcMaterialLayerSetSpecification();
}

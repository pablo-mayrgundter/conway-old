
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcMaterial from "./IfcMaterial.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcLogical from "./IfcLogical.bldrs"
import IfcMaterialLayerSet from "./IfcMaterialLayerSet.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmateriallayer.htm
 */
export default  class IfcMaterialLayer extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcMaterialLayerSpecification = IfcMaterialLayerSpecification.instance;

private Material_? : IfcMaterial
    private LayerThickness_? : IfcPositiveLengthMeasure
    private IsVentilated_? : IfcLogical

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcMaterialLayerSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMaterialLayer';

    public readonly required: ReadonlyArray< string > = [ 'IfcMaterialLayer' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Material',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMaterial',
			optional: true
		}, 
		{
			name: 'LayerThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}, 
		{
			name: 'IsVentilated',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLogical',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcMaterialLayerSpecification = new IfcMaterialLayerSpecification();
}

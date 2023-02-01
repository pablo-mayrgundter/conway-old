
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcMaterial from "./IfcMaterial.bldrs"
import IfcMaterialList from "./IfcMaterialList.bldrs"
import IfcMaterialLayerSetUsage from "./IfcMaterialLayerSetUsage.bldrs"
import IfcMaterialLayerSet from "./IfcMaterialLayerSet.bldrs"
import IfcMaterialLayer from "./IfcMaterialLayer.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesmaterial.htm
 */
export default  class IfcRelAssociatesMaterial extends IfcRelAssociates 
{    
    public readonly specification: IfcRelAssociatesMaterialSpecification = IfcRelAssociatesMaterialSpecification.instance;

private RelatingMaterial_? : IfcMaterial|IfcMaterialList|IfcMaterialLayerSetUsage|IfcMaterialLayerSet|IfcMaterialLayer

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelAssociatesMaterialSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssociatesMaterial';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssociatesMaterial', 'IfcRelAssociates', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingMaterial',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMaterial|IfcMaterialList|IfcMaterialLayerSetUsage|IfcMaterialLayerSet|IfcMaterialLayer',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssociatesMaterialSpecification = new IfcRelAssociatesMaterialSpecification();
}


import Component from "../../core/components"
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
export default class IfcRelAssociatesMaterial implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelAssociatesMaterial';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelAssociatesMaterialSpecification = IfcRelAssociatesMaterialSpecification.instance;

    constructor( public readonly RelatingMaterial : IfcMaterial|IfcMaterialList|IfcMaterialLayerSetUsage|IfcMaterialLayerSet|IfcMaterialLayer  ) {}
}

export class IfcRelAssociatesMaterialSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssociatesMaterial';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssociates', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingMaterial',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMaterial|IfcMaterialList|IfcMaterialLayerSetUsage|IfcMaterialLayerSet|IfcMaterialLayer'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssociatesMaterialSpecification = new IfcRelAssociatesMaterialSpecification();
}

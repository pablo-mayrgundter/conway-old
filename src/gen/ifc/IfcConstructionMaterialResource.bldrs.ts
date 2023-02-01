
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"
import IfcRatioMeasure from "./IfcRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstructionmaterialresource.htm
 */
export default  class IfcConstructionMaterialResource extends IfcConstructionResource 
{    
    public readonly specification: IfcConstructionMaterialResourceSpecification = IfcConstructionMaterialResourceSpecification.instance;

private Suppliers_? : Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization>
    private UsageRatio_? : IfcRatioMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcConstructionMaterialResourceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConstructionMaterialResource';

    public readonly required: ReadonlyArray< string > = [ 'IfcConstructionMaterialResource', 'IfcConstructionResource', 'IfcResource', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Suppliers',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization>',
			optional: true
		}, 
		{
			name: 'UsageRatio',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRatioMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcConstructionMaterialResourceSpecification = new IfcConstructionMaterialResourceSpecification();
}

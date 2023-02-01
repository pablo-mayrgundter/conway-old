
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCompositeCurve from "./IfcCompositeCurve.bldrs"
import IfcProfileDef from "./IfcProfileDef.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsectionedspine.htm
 */
export default  class IfcSectionedSpine extends IfcGeometricRepresentationItem 
{    
    public readonly specification: IfcSectionedSpineSpecification = IfcSectionedSpineSpecification.instance;

private SpineCurve_? : IfcCompositeCurve
    private CrossSections_? : Array<IfcProfileDef>
    private CrossSectionPositions_? : Array<IfcAxis2Placement3D>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSectionedSpineSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSectionedSpine';

    public readonly required: ReadonlyArray< string > = [ 'IfcSectionedSpine', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'SpineCurve',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCompositeCurve',
			optional: false
		}, 
		{
			name: 'CrossSections',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcProfileDef>',
			optional: false
		}, 
		{
			name: 'CrossSectionPositions',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcAxis2Placement3D>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSectionedSpineSpecification = new IfcSectionedSpineSpecification();
}

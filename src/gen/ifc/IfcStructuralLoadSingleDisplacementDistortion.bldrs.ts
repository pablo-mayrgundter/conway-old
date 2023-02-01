
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCurvatureMeasure from "./IfcCurvatureMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadsingledisplacementdistortion.htm
 */
export default  class IfcStructuralLoadSingleDisplacementDistortion extends IfcStructuralLoadSingleDisplacement 
{    
    public readonly specification: IfcStructuralLoadSingleDisplacementDistortionSpecification = IfcStructuralLoadSingleDisplacementDistortionSpecification.instance;

private Distortion_? : IfcCurvatureMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcStructuralLoadSingleDisplacementDistortionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralLoadSingleDisplacementDistortion';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralLoadSingleDisplacementDistortion', 'IfcStructuralLoadSingleDisplacement', 'IfcStructuralLoadStatic', 'IfcStructuralLoad' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Distortion',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurvatureMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralLoadSingleDisplacementDistortionSpecification = new IfcStructuralLoadSingleDisplacementDistortionSpecification();
}

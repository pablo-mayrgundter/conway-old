
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcTextStyleForDefinedFont from "./IfcTextStyleForDefinedFont.bldrs"
import IfcTextStyleWithBoxCharacteristics from "./IfcTextStyleWithBoxCharacteristics.bldrs"
import IfcTextStyleTextModel from "./IfcTextStyleTextModel.bldrs"
import IfcPreDefinedTextFont from "./IfcPreDefinedTextFont.bldrs"
import IfcExternallyDefinedTextFont from "./IfcExternallyDefinedTextFont.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextstyle.htm
 */
export default  class IfcTextStyle extends IfcPresentationStyle 
{    
    public readonly specification: IfcTextStyleSpecification = IfcTextStyleSpecification.instance;

private TextCharacterAppearance_? : IfcTextStyleForDefinedFont
    private TextStyle_? : IfcTextStyleWithBoxCharacteristics|IfcTextStyleTextModel
    private TextFontStyle_? : IfcPreDefinedTextFont|IfcExternallyDefinedTextFont

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTextStyleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTextStyle';

    public readonly required: ReadonlyArray< string > = [ 'IfcTextStyle', 'IfcPresentationStyle' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'TextCharacterAppearance',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTextStyleForDefinedFont',
			optional: true
		}, 
		{
			name: 'TextStyle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTextStyleWithBoxCharacteristics|IfcTextStyleTextModel',
			optional: true
		}, 
		{
			name: 'TextFontStyle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPreDefinedTextFont|IfcExternallyDefinedTextFont',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTextStyleSpecification = new IfcTextStyleSpecification();
}

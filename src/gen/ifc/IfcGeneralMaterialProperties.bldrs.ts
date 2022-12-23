
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcMolecularWeightMeasure from "./IfcMolecularWeightMeasure.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"
import IfcMassDensityMeasure from "./IfcMassDensityMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeneralmaterialproperties.htm
 */
export default class IfcGeneralMaterialProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcGeneralMaterialProperties';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcGeneralMaterialPropertiesSpecification = IfcGeneralMaterialPropertiesSpecification.instance;

    constructor( public readonly MolecularWeight : IfcMolecularWeightMeasure  | undefined, public readonly Porosity : IfcNormalisedRatioMeasure  | undefined, public readonly MassDensity : IfcMassDensityMeasure  | undefined ) {}
}

export class IfcGeneralMaterialPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcGeneralMaterialProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcMaterialProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'MolecularWeight',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMolecularWeightMeasure'
		}, 
		{
			name: 'Porosity',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure'
		}, 
		{
			name: 'MassDensity',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMassDensityMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcGeneralMaterialPropertiesSpecification = new IfcGeneralMaterialPropertiesSpecification();
}

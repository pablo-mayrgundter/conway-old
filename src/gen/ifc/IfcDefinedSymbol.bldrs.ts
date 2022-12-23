
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPreDefinedSymbol from "./IfcPreDefinedSymbol.bldrs"
import IfcExternallyDefinedSymbol from "./IfcExternallyDefinedSymbol.bldrs"
import IfcCartesianTransformationOperator2D from "./IfcCartesianTransformationOperator2D.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdefinedsymbol.htm
 */
export default class IfcDefinedSymbol implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDefinedSymbol';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcDefinedSymbolSpecification = IfcDefinedSymbolSpecification.instance;

    constructor( public readonly Definition : IfcPreDefinedSymbol|IfcExternallyDefinedSymbol , public readonly Target : IfcCartesianTransformationOperator2D  ) {}
}

export class IfcDefinedSymbolSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDefinedSymbol';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Definition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPreDefinedSymbol|IfcExternallyDefinedSymbol'
		}, 
		{
			name: 'Target',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCartesianTransformationOperator2D'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDefinedSymbolSpecification = new IfcDefinedSymbolSpecification();
}

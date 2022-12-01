
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcOneDirectionRepeatFactor} from "./IfcOneDirectionRepeatFactor.bldrs"
import {IfcFillAreaStyleTileSymbolWithStyle} from "./IfcFillAreaStyleTileSymbolWithStyle.bldrs"
import {IfcPositiveRatioMeasure} from "./IfcPositiveRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfillareastyletiles.htm
 */
export default class IfcFillAreaStyleTiles implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFillAreaStyleTiles';

    public readonly __version__: number = 0;

	TilingPattern : IfcOneDirectionRepeatFactor;
	Tiles : Array<IfcFillAreaStyleTileSymbolWithStyle>;
	TilingScale : IfcPositiveRatioMeasure;

}

export class IfcFillAreaStyleTilesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFillAreaStyleTiles';

    public readonly required: string[] = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'TilingPattern',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOneDirectionRepeatFactor'
		}, 
		{
			name: 'Tiles',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcFillAreaStyleTileSymbolWithStyle>'
		}, 
		{
			name: 'TilingScale',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}
    ];
}

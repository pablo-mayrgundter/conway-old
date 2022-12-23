
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPoint from "./IfcPoint.bldrs"
import IfcCurve from "./IfcCurve.bldrs"
import IfcSurface from "./IfcSurface.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometricset.htm
 */
export default class IfcGeometricSet implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcGeometricSet';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcGeometricSetSpecification = IfcGeometricSetSpecification.instance;

    constructor( public readonly Elements : Array<IfcPoint|IfcCurve|IfcSurface>  ) {}
}

export class IfcGeometricSetSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcGeometricSet';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Elements',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcPoint|IfcCurve|IfcSurface>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcGeometricSetSpecification = new IfcGeometricSetSpecification();
}

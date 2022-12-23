
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometriccurveset.htm
 */
export default class IfcGeometricCurveSet implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcGeometricCurveSet';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcGeometricCurveSetSpecification = IfcGeometricCurveSetSpecification.instance;

    constructor(  ) {}
}

export class IfcGeometricCurveSetSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcGeometricCurveSet';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeometricSet', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcGeometricCurveSetSpecification = new IfcGeometricCurveSetSpecification();
}

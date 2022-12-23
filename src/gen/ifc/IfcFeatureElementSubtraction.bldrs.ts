
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcRelVoidsElement from "./IfcRelVoidsElement.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfeatureelementsubtraction.htm
 */
export default class IfcFeatureElementSubtraction implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFeatureElementSubtraction';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcFeatureElementSubtractionSpecification = IfcFeatureElementSubtractionSpecification.instance;

    constructor(  ) {}
}

export class IfcFeatureElementSubtractionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFeatureElementSubtraction';

    public readonly required: ReadonlyArray< string > = [ 'IfcFeatureElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFeatureElementSubtractionSpecification = new IfcFeatureElementSubtractionSpecification();
}

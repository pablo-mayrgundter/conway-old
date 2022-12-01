
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdimensionpair.htm
 */
export default class IfcDimensionPair implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDimensionPair';

    public readonly __version__: number = 0;


}

export class IfcDimensionPairSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDimensionPair';

    public readonly required: string[] = [ 'IfcDraughtingCalloutRelationship' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}

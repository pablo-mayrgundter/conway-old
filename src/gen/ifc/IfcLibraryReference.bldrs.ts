
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLibraryInformation from "./IfcLibraryInformation.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclibraryreference.htm
 */
export default class IfcLibraryReference implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcLibraryReference';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcLibraryReferenceSpecification = IfcLibraryReferenceSpecification.instance;

    constructor(  ) {}
}

export class IfcLibraryReferenceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLibraryReference';

    public readonly required: ReadonlyArray< string > = [ 'IfcExternalReference' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcLibraryReferenceSpecification = new IfcLibraryReferenceSpecification();
}

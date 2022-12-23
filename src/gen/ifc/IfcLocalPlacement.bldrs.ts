
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcObjectPlacement from "./IfcObjectPlacement.bldrs"
import IfcAxis2Placement2D from "./IfcAxis2Placement2D.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclocalplacement.htm
 */
export default class IfcLocalPlacement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcLocalPlacement';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcLocalPlacementSpecification = IfcLocalPlacementSpecification.instance;

    constructor( public readonly PlacementRelTo : IfcObjectPlacement  | undefined, public readonly RelativePlacement : IfcAxis2Placement2D|IfcAxis2Placement3D  ) {}
}

export class IfcLocalPlacementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLocalPlacement';

    public readonly required: ReadonlyArray< string > = [ 'IfcObjectPlacement' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PlacementRelTo',
			isCollection: false,
			rank: 0,
			baseType: 'IfcObjectPlacement'
		}, 
		{
			name: 'RelativePlacement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement2D|IfcAxis2Placement3D'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcLocalPlacementSpecification = new IfcLocalPlacementSpecification();
}

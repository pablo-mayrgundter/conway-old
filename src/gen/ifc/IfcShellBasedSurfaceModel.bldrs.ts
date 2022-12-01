
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcClosedShell} from "./IfcClosedShell.bldrs"
import {IfcOpenShell} from "./IfcOpenShell.bldrs"
import {IfcDimensionCount} from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcshellbasedsurfacemodel.htm
 */
export default class IfcShellBasedSurfaceModel implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcShellBasedSurfaceModel';

    public readonly __version__: number = 0;

	SbsmBoundary : Array<IfcClosedShell|IfcOpenShell>;

}

export class IfcShellBasedSurfaceModelSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcShellBasedSurfaceModel';

    public readonly required: string[] = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'SbsmBoundary',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcClosedShell|IfcOpenShell>'
		}
    ];
}

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPreDefinedSymbol from "./IfcPreDefinedSymbol.bldrs"
import IfcExternallyDefinedSymbol from "./IfcExternallyDefinedSymbol.bldrs"
import IfcCartesianTransformationOperator2D from "./IfcCartesianTransformationOperator2D.bldrs"
import IfcGeometricRepresentationItem from "./IfcGeometricRepresentationItem.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcdefinedsymbol.htm */
export default  class IfcDefinedSymbol extends IfcGeometricRepresentationItem 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCDEFINEDSYMBOL;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Definition_? : IfcPreDefinedSymbol|IfcExternallyDefinedSymbol;
    private Target_? : IfcCartesianTransformationOperator2D;


    public get Definition() : IfcPreDefinedSymbol|IfcExternallyDefinedSymbol
    {
        if ( this.Definition_ === void 0 )
        {
            
        }

        return this.Definition_ as IfcPreDefinedSymbol|IfcExternallyDefinedSymbol;
    }


    public get Target() : IfcCartesianTransformationOperator2D
    {
        if ( this.Target_ === void 0 )
        {
            
        }

        return this.Target_ as IfcCartesianTransformationOperator2D;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}

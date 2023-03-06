import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcConstraint from "./IfcConstraint.bldrs"
import IfcClassificationNotation from "./IfcClassificationNotation.bldrs"
import IfcClassificationReference from "./IfcClassificationReference.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcconstraintclassificationrelationship.htm */
export default  class IfcConstraintClassificationRelationship extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCCONSTRAINTCLASSIFICATIONRELATIONSHIP;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private ClassifiedConstraint_? : IfcConstraint;
    private RelatedClassifications_? : Array<IfcClassificationNotation|IfcClassificationReference>;


    public get ClassifiedConstraint() : IfcConstraint
    {
        if ( this.ClassifiedConstraint_ === void 0 )
        {
            
        }

        return this.ClassifiedConstraint_ as IfcConstraint;
    }


    public get RelatedClassifications() : Array<IfcClassificationNotation|IfcClassificationReference>
    {
        if ( this.RelatedClassifications_ === void 0 )
        {
            
        }

        return this.RelatedClassifications_ as Array<IfcClassificationNotation|IfcClassificationReference>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}

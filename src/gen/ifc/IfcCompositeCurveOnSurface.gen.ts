
import { IfcCompositeCurve } from "./index"
import { IfcSurface } from "./index"
import {
  IfcGetBasisSurface,
} from '../../core/ifc/ifc_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccompositecurveonsurface.htm */
export  class IfcCompositeCurveOnSurface extends IfcCompositeCurve {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCOMPOSITECURVEONSURFACE
  }


  public get BasisSurface() : Array<IfcSurface> {
    return IfcGetBasisSurface(this);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCOMPOSITECURVEONSURFACE, EntityTypesIfc.IFCBOUNDARYCURVE, EntityTypesIfc.IFCOUTERBOUNDARYCURVE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCOMPOSITECURVEONSURFACE
}

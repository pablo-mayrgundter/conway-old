
import { IfcGeometricRepresentationItem } from "./index"
import { IfcDimensionCount } from "./index"
import {
  IfcCurveDim,
} from '../../core/ifc/ifc_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccurve.htm */
export abstract class IfcCurve extends IfcGeometricRepresentationItem {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCURVE
  }


  public get Dim() : number {
    return IfcCurveDim(this);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCLINE, EntityTypesIfc.IFCOFFSETCURVE2D, EntityTypesIfc.IFCOFFSETCURVE3D, EntityTypesIfc.IFCPCURVE, EntityTypesIfc.IFCSURFACECURVE, EntityTypesIfc.IFCCOMPOSITECURVE, EntityTypesIfc.IFCINDEXEDPOLYCURVE, EntityTypesIfc.IFCPOLYLINE, EntityTypesIfc.IFCTRIMMEDCURVE, EntityTypesIfc.IFCBSPLINECURVEWITHKNOTS, EntityTypesIfc.IFCRATIONALBSPLINECURVEWITHKNOTS, EntityTypesIfc.IFCCOMPOSITECURVEONSURFACE, EntityTypesIfc.IFCBOUNDARYCURVE, EntityTypesIfc.IFCOUTERBOUNDARYCURVE, EntityTypesIfc.IFCCIRCLE, EntityTypesIfc.IFCELLIPSE, EntityTypesIfc.IFCINTERSECTIONCURVE, EntityTypesIfc.IFCSEAMCURVE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCURVE
}

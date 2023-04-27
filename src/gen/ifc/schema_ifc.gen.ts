/* This is generated code, don't alter */
import {
  FieldDescriptionKind,
  EntityEnumFieldDescription,
  EntityFieldDescription,
  EntityReferenceFieldDescription,
  EntitySelectFieldDescription,
} from '../../core/entity_field_description'
import { EntityDescription } from '../../core/entity_description'
import EntityTypesIfc from './entity_types_ifc.gen'
import EntityTypesIfcSearch from './entity_types_search.gen'
import StepEntityConstructor from '../../core/step_entity_constructor'
import StepEntityBase from '../../core/step_entity_base'
import StepEntitySchema from '../../core/step_entity_schema'
import StepParser from '../../../dependencies/conway-ds/src/parsing/step/step_parser'
import { IfcActionRequest } from './index'
import { IfcControl } from './index'
import { IfcActor } from './index'
import { IfcOccupant } from './index'
import { IfcObject } from './index'
import { IfcActorRole } from './index'
import { IfcActuator } from './index'
import { IfcDistributionControlElement } from './index'
import { IfcActuatorType } from './index'
import { IfcDistributionControlElementType } from './index'
import { IfcAddress } from './index'
import { IfcPostalAddress } from './index'
import { IfcTelecomAddress } from './index'
import { IfcAdvancedBrep } from './index'
import { IfcAdvancedBrepWithVoids } from './index'
import { IfcManifoldSolidBrep } from './index'
import { IfcAdvancedFace } from './index'
import { IfcFaceSurface } from './index'
import { IfcAirTerminal } from './index'
import { IfcFlowTerminal } from './index'
import { IfcAirTerminalBox } from './index'
import { IfcFlowController } from './index'
import { IfcAirTerminalBoxType } from './index'
import { IfcFlowControllerType } from './index'
import { IfcAirTerminalType } from './index'
import { IfcFlowTerminalType } from './index'
import { IfcAirToAirHeatRecovery } from './index'
import { IfcEnergyConversionDevice } from './index'
import { IfcAirToAirHeatRecoveryType } from './index'
import { IfcEnergyConversionDeviceType } from './index'
import { IfcAlarm } from './index'
import { IfcAlarmType } from './index'
import { IfcAnnotation } from './index'
import { IfcProduct } from './index'
import { IfcAnnotationFillArea } from './index'
import { IfcGeometricRepresentationItem } from './index'
import { IfcApplication } from './index'
import { IfcAppliedValue } from './index'
import { IfcCostValue } from './index'
import { IfcApproval } from './index'
import { IfcApprovalRelationship } from './index'
import { IfcResourceLevelRelationship } from './index'
import { IfcArbitraryClosedProfileDef } from './index'
import { IfcArbitraryProfileDefWithVoids } from './index'
import { IfcProfileDef } from './index'
import { IfcArbitraryOpenProfileDef } from './index'
import { IfcCenterLineProfileDef } from './index'
import { IfcAsset } from './index'
import { IfcGroup } from './index'
import { IfcAsymmetricIShapeProfileDef } from './index'
import { IfcParameterizedProfileDef } from './index'
import { IfcAudioVisualAppliance } from './index'
import { IfcAudioVisualApplianceType } from './index'
import { IfcAxis1Placement } from './index'
import { IfcPlacement } from './index'
import { IfcAxis2Placement2D } from './index'
import { IfcAxis2Placement3D } from './index'
import { IfcBSplineCurve } from './index'
import { IfcBSplineCurveWithKnots } from './index'
import { IfcBoundedCurve } from './index'
import { IfcRationalBSplineCurveWithKnots } from './index'
import { IfcBSplineSurface } from './index'
import { IfcBSplineSurfaceWithKnots } from './index'
import { IfcBoundedSurface } from './index'
import { IfcRationalBSplineSurfaceWithKnots } from './index'
import { IfcBeam } from './index'
import { IfcBeamStandardCase } from './index'
import { IfcBuildingElement } from './index'
import { IfcBeamType } from './index'
import { IfcBuildingElementType } from './index'
import { IfcBlobTexture } from './index'
import { IfcSurfaceTexture } from './index'
import { IfcBlock } from './index'
import { IfcCsgPrimitive3D } from './index'
import { IfcBoiler } from './index'
import { IfcBoilerType } from './index'
import { IfcBooleanClippingResult } from './index'
import { IfcBooleanResult } from './index'
import { IfcBoundaryCondition } from './index'
import { IfcBoundaryEdgeCondition } from './index'
import { IfcBoundaryFaceCondition } from './index'
import { IfcBoundaryNodeCondition } from './index'
import { IfcBoundaryCurve } from './index'
import { IfcOuterBoundaryCurve } from './index'
import { IfcCompositeCurveOnSurface } from './index'
import { IfcBoundaryNodeConditionWarping } from './index'
import { IfcCompositeCurve } from './index'
import { IfcIndexedPolyCurve } from './index'
import { IfcPolyline } from './index'
import { IfcTrimmedCurve } from './index'
import { IfcCurve } from './index'
import { IfcCurveBoundedPlane } from './index'
import { IfcCurveBoundedSurface } from './index'
import { IfcRectangularTrimmedSurface } from './index'
import { IfcSurface } from './index'
import { IfcBoundingBox } from './index'
import { IfcBoxedHalfSpace } from './index'
import { IfcHalfSpaceSolid } from './index'
import { IfcBuilding } from './index'
import { IfcSpatialStructureElement } from './index'
import { IfcBuildingElementProxy } from './index'
import { IfcChimney } from './index'
import { IfcColumn } from './index'
import { IfcCovering } from './index'
import { IfcCurtainWall } from './index'
import { IfcDoor } from './index'
import { IfcFooting } from './index'
import { IfcMember } from './index'
import { IfcPile } from './index'
import { IfcPlate } from './index'
import { IfcRailing } from './index'
import { IfcRamp } from './index'
import { IfcRampFlight } from './index'
import { IfcRoof } from './index'
import { IfcShadingDevice } from './index'
import { IfcSlab } from './index'
import { IfcStair } from './index'
import { IfcStairFlight } from './index'
import { IfcWall } from './index'
import { IfcWindow } from './index'
import { IfcElement } from './index'
import { IfcBuildingElementPart } from './index'
import { IfcElementComponent } from './index'
import { IfcBuildingElementPartType } from './index'
import { IfcElementComponentType } from './index'
import { IfcBuildingElementProxyType } from './index'
import { IfcChimneyType } from './index'
import { IfcColumnType } from './index'
import { IfcCoveringType } from './index'
import { IfcCurtainWallType } from './index'
import { IfcDoorType } from './index'
import { IfcFootingType } from './index'
import { IfcMemberType } from './index'
import { IfcPileType } from './index'
import { IfcPlateType } from './index'
import { IfcRailingType } from './index'
import { IfcRampFlightType } from './index'
import { IfcRampType } from './index'
import { IfcRoofType } from './index'
import { IfcShadingDeviceType } from './index'
import { IfcSlabType } from './index'
import { IfcStairFlightType } from './index'
import { IfcStairType } from './index'
import { IfcWallType } from './index'
import { IfcWindowType } from './index'
import { IfcElementType } from './index'
import { IfcBuildingStorey } from './index'
import { IfcBuildingSystem } from './index'
import { IfcSystem } from './index'
import { IfcBurner } from './index'
import { IfcBurnerType } from './index'
import { IfcCShapeProfileDef } from './index'
import { IfcCableCarrierFitting } from './index'
import { IfcFlowFitting } from './index'
import { IfcCableCarrierFittingType } from './index'
import { IfcFlowFittingType } from './index'
import { IfcCableCarrierSegment } from './index'
import { IfcFlowSegment } from './index'
import { IfcCableCarrierSegmentType } from './index'
import { IfcFlowSegmentType } from './index'
import { IfcCableFitting } from './index'
import { IfcCableFittingType } from './index'
import { IfcCableSegment } from './index'
import { IfcCableSegmentType } from './index'
import { IfcCartesianPoint } from './index'
import { IfcPoint } from './index'
import { IfcCartesianPointList } from './index'
import { IfcCartesianPointList2D } from './index'
import { IfcCartesianPointList3D } from './index'
import { IfcCartesianTransformationOperator } from './index'
import { IfcCartesianTransformationOperator2D } from './index'
import { IfcCartesianTransformationOperator3D } from './index'
import { IfcCartesianTransformationOperator2DnonUniform } from './index'
import { IfcCartesianTransformationOperator3DnonUniform } from './index'
import { IfcChiller } from './index'
import { IfcChillerType } from './index'
import { IfcCircle } from './index'
import { IfcConic } from './index'
import { IfcCircleHollowProfileDef } from './index'
import { IfcCircleProfileDef } from './index'
import { IfcCivilElement } from './index'
import { IfcCivilElementType } from './index'
import { IfcClassification } from './index'
import { IfcExternalInformation } from './index'
import { IfcClassificationReference } from './index'
import { IfcExternalReference } from './index'
import { IfcClosedShell } from './index'
import { IfcConnectedFaceSet } from './index'
import { IfcCoil } from './index'
import { IfcCoilType } from './index'
import { IfcColourRgb } from './index'
import { IfcColourSpecification } from './index'
import { IfcColourRgbList } from './index'
import { IfcPresentationItem } from './index'
import { IfcColumnStandardCase } from './index'
import { IfcCommunicationsAppliance } from './index'
import { IfcCommunicationsApplianceType } from './index'
import { IfcComplexProperty } from './index'
import { IfcProperty } from './index'
import { IfcComplexPropertyTemplate } from './index'
import { IfcPropertyTemplate } from './index'
import { IfcCompositeCurveSegment } from './index'
import { IfcReparametrisedCompositeCurveSegment } from './index'
import { IfcCompositeProfileDef } from './index'
import { IfcCompressor } from './index'
import { IfcFlowMovingDevice } from './index'
import { IfcCompressorType } from './index'
import { IfcFlowMovingDeviceType } from './index'
import { IfcCondenser } from './index'
import { IfcCondenserType } from './index'
import { IfcEllipse } from './index'
import { IfcOpenShell } from './index'
import { IfcTopologicalRepresentationItem } from './index'
import { IfcConnectionCurveGeometry } from './index'
import { IfcConnectionGeometry } from './index'
import { IfcConnectionPointGeometry } from './index'
import { IfcConnectionSurfaceGeometry } from './index'
import { IfcConnectionVolumeGeometry } from './index'
import { IfcConnectionPointEccentricity } from './index'
import { IfcConstraint } from './index'
import { IfcMetric } from './index'
import { IfcObjective } from './index'
import { IfcConstructionEquipmentResource } from './index'
import { IfcConstructionResource } from './index'
import { IfcConstructionEquipmentResourceType } from './index'
import { IfcConstructionResourceType } from './index'
import { IfcConstructionMaterialResource } from './index'
import { IfcConstructionMaterialResourceType } from './index'
import { IfcConstructionProductResource } from './index'
import { IfcConstructionProductResourceType } from './index'
import { IfcCrewResource } from './index'
import { IfcLaborResource } from './index'
import { IfcSubContractResource } from './index'
import { IfcResource } from './index'
import { IfcCrewResourceType } from './index'
import { IfcLaborResourceType } from './index'
import { IfcSubContractResourceType } from './index'
import { IfcTypeResource } from './index'
import { IfcContext } from './index'
import { IfcProject } from './index'
import { IfcProjectLibrary } from './index'
import { IfcObjectDefinition } from './index'
import { IfcContextDependentUnit } from './index'
import { IfcNamedUnit } from './index'
import { IfcCostItem } from './index'
import { IfcCostSchedule } from './index'
import { IfcPerformanceHistory } from './index'
import { IfcPermit } from './index'
import { IfcProjectOrder } from './index'
import { IfcWorkCalendar } from './index'
import { IfcWorkControl } from './index'
import { IfcController } from './index'
import { IfcControllerType } from './index'
import { IfcConversionBasedUnit } from './index'
import { IfcConversionBasedUnitWithOffset } from './index'
import { IfcCooledBeam } from './index'
import { IfcCooledBeamType } from './index'
import { IfcCoolingTower } from './index'
import { IfcCoolingTowerType } from './index'
import { IfcCoordinateOperation } from './index'
import { IfcMapConversion } from './index'
import { IfcCoordinateReferenceSystem } from './index'
import { IfcProjectedCRS } from './index'
import { IfcRectangularPyramid } from './index'
import { IfcRightCircularCone } from './index'
import { IfcRightCircularCylinder } from './index'
import { IfcSphere } from './index'
import { IfcCsgSolid } from './index'
import { IfcSolidModel } from './index'
import { IfcCurrencyRelationship } from './index'
import { IfcLine } from './index'
import { IfcOffsetCurve2D } from './index'
import { IfcOffsetCurve3D } from './index'
import { IfcPcurve } from './index'
import { IfcSurfaceCurve } from './index'
import { IfcCurveStyle } from './index'
import { IfcPresentationStyle } from './index'
import { IfcCurveStyleFont } from './index'
import { IfcCurveStyleFontAndScaling } from './index'
import { IfcCurveStyleFontPattern } from './index'
import { IfcCylindricalSurface } from './index'
import { IfcElementarySurface } from './index'
import { IfcDamper } from './index'
import { IfcDamperType } from './index'
import { IfcDerivedProfileDef } from './index'
import { IfcMirroredProfileDef } from './index'
import { IfcDerivedUnit } from './index'
import { IfcDerivedUnitElement } from './index'
import { IfcDimensionalExponents } from './index'
import { IfcDirection } from './index'
import { IfcDiscreteAccessory } from './index'
import { IfcDiscreteAccessoryType } from './index'
import { IfcDistributionChamberElement } from './index'
import { IfcDistributionFlowElement } from './index'
import { IfcDistributionChamberElementType } from './index'
import { IfcDistributionFlowElementType } from './index'
import { IfcDistributionCircuit } from './index'
import { IfcDistributionSystem } from './index'
import { IfcFlowInstrument } from './index'
import { IfcProtectiveDeviceTrippingUnit } from './index'
import { IfcSensor } from './index'
import { IfcUnitaryControlElement } from './index'
import { IfcDistributionElement } from './index'
import { IfcFlowInstrumentType } from './index'
import { IfcProtectiveDeviceTrippingUnitType } from './index'
import { IfcSensorType } from './index'
import { IfcUnitaryControlElementType } from './index'
import { IfcDistributionElementType } from './index'
import { IfcFlowStorageDevice } from './index'
import { IfcFlowTreatmentDevice } from './index'
import { IfcFlowStorageDeviceType } from './index'
import { IfcFlowTreatmentDeviceType } from './index'
import { IfcDistributionPort } from './index'
import { IfcPort } from './index'
import { IfcDocumentInformation } from './index'
import { IfcDocumentInformationRelationship } from './index'
import { IfcDocumentReference } from './index'
import { IfcDoorStandardCase } from './index'
import { IfcDoorLiningProperties } from './index'
import { IfcPreDefinedPropertySet } from './index'
import { IfcDoorPanelProperties } from './index'
import { IfcDoorStyle } from './index'
import { IfcTypeProduct } from './index'
import { IfcDraughtingPreDefinedColour } from './index'
import { IfcPreDefinedColour } from './index'
import { IfcDraughtingPreDefinedCurveFont } from './index'
import { IfcPreDefinedCurveFont } from './index'
import { IfcDuctFitting } from './index'
import { IfcDuctFittingType } from './index'
import { IfcDuctSegment } from './index'
import { IfcDuctSegmentType } from './index'
import { IfcDuctSilencer } from './index'
import { IfcDuctSilencerType } from './index'
import { IfcEdge } from './index'
import { IfcEdgeCurve } from './index'
import { IfcOrientedEdge } from './index'
import { IfcSubedge } from './index'
import { IfcEdgeLoop } from './index'
import { IfcLoop } from './index'
import { IfcElectricAppliance } from './index'
import { IfcElectricApplianceType } from './index'
import { IfcElectricDistributionBoard } from './index'
import { IfcElectricDistributionBoardType } from './index'
import { IfcElectricFlowStorageDevice } from './index'
import { IfcElectricFlowStorageDeviceType } from './index'
import { IfcElectricGenerator } from './index'
import { IfcElectricGeneratorType } from './index'
import { IfcElectricMotor } from './index'
import { IfcElectricMotorType } from './index'
import { IfcElectricTimeControl } from './index'
import { IfcElectricTimeControlType } from './index'
import { IfcElementAssembly } from './index'
import { IfcFeatureElement } from './index'
import { IfcFurnishingElement } from './index'
import { IfcGeographicElement } from './index'
import { IfcTransportElement } from './index'
import { IfcVirtualElement } from './index'
import { IfcElementAssemblyType } from './index'
import { IfcFastener } from './index'
import { IfcMechanicalFastener } from './index'
import { IfcReinforcingElement } from './index'
import { IfcVibrationIsolator } from './index'
import { IfcFastenerType } from './index'
import { IfcMechanicalFastenerType } from './index'
import { IfcReinforcingElementType } from './index'
import { IfcVibrationIsolatorType } from './index'
import { IfcElementQuantity } from './index'
import { IfcQuantitySet } from './index'
import { IfcFurnishingElementType } from './index'
import { IfcGeographicElementType } from './index'
import { IfcTransportElementType } from './index'
import { IfcPlane } from './index'
import { IfcSphericalSurface } from './index'
import { IfcToroidalSurface } from './index'
import { IfcEllipseProfileDef } from './index'
import { IfcEngine } from './index'
import { IfcEvaporativeCooler } from './index'
import { IfcEvaporator } from './index'
import { IfcHeatExchanger } from './index'
import { IfcHumidifier } from './index'
import { IfcMotorConnection } from './index'
import { IfcSolarDevice } from './index'
import { IfcTransformer } from './index'
import { IfcTubeBundle } from './index'
import { IfcUnitaryEquipment } from './index'
import { IfcEngineType } from './index'
import { IfcEvaporativeCoolerType } from './index'
import { IfcEvaporatorType } from './index'
import { IfcHeatExchangerType } from './index'
import { IfcHumidifierType } from './index'
import { IfcMotorConnectionType } from './index'
import { IfcSolarDeviceType } from './index'
import { IfcTransformerType } from './index'
import { IfcTubeBundleType } from './index'
import { IfcUnitaryEquipmentType } from './index'
import { IfcEvent } from './index'
import { IfcProcess } from './index'
import { IfcEventTime } from './index'
import { IfcSchedulingTime } from './index'
import { IfcEventType } from './index'
import { IfcTypeProcess } from './index'
import { IfcExtendedProperties } from './index'
import { IfcMaterialProperties } from './index'
import { IfcProfileProperties } from './index'
import { IfcPropertyAbstraction } from './index'
import { IfcLibraryInformation } from './index'
import { IfcExternallyDefinedHatchStyle } from './index'
import { IfcExternallyDefinedSurfaceStyle } from './index'
import { IfcExternallyDefinedTextFont } from './index'
import { IfcLibraryReference } from './index'
import { IfcExternalReferenceRelationship } from './index'
import { IfcExternalSpatialElement } from './index'
import { IfcExternalSpatialStructureElement } from './index'
import { IfcSpatialElement } from './index'
import { IfcExtrudedAreaSolid } from './index'
import { IfcExtrudedAreaSolidTapered } from './index'
import { IfcSweptAreaSolid } from './index'
import { IfcFace } from './index'
import { IfcFaceBasedSurfaceModel } from './index'
import { IfcFaceBound } from './index'
import { IfcFaceOuterBound } from './index'
import { IfcFacetedBrep } from './index'
import { IfcFacetedBrepWithVoids } from './index'
import { IfcFailureConnectionCondition } from './index'
import { IfcStructuralConnectionCondition } from './index'
import { IfcFan } from './index'
import { IfcFanType } from './index'
import { IfcFeatureElementAddition } from './index'
import { IfcFeatureElementSubtraction } from './index'
import { IfcSurfaceFeature } from './index'
import { IfcProjectionElement } from './index'
import { IfcOpeningElement } from './index'
import { IfcVoidingFeature } from './index'
import { IfcFillAreaStyle } from './index'
import { IfcFillAreaStyleHatching } from './index'
import { IfcFillAreaStyleTiles } from './index'
import { IfcFilter } from './index'
import { IfcFilterType } from './index'
import { IfcFireSuppressionTerminal } from './index'
import { IfcFireSuppressionTerminalType } from './index'
import { IfcFixedReferenceSweptAreaSolid } from './index'
import { IfcFlowMeter } from './index'
import { IfcProtectiveDevice } from './index'
import { IfcSwitchingDevice } from './index'
import { IfcValve } from './index'
import { IfcFlowMeterType } from './index'
import { IfcProtectiveDeviceType } from './index'
import { IfcSwitchingDeviceType } from './index'
import { IfcValveType } from './index'
import { IfcJunctionBox } from './index'
import { IfcPipeFitting } from './index'
import { IfcJunctionBoxType } from './index'
import { IfcPipeFittingType } from './index'
import { IfcPump } from './index'
import { IfcPumpType } from './index'
import { IfcPipeSegment } from './index'
import { IfcPipeSegmentType } from './index'
import { IfcTank } from './index'
import { IfcTankType } from './index'
import { IfcLamp } from './index'
import { IfcLightFixture } from './index'
import { IfcMedicalDevice } from './index'
import { IfcOutlet } from './index'
import { IfcSanitaryTerminal } from './index'
import { IfcSpaceHeater } from './index'
import { IfcStackTerminal } from './index'
import { IfcWasteTerminal } from './index'
import { IfcLampType } from './index'
import { IfcLightFixtureType } from './index'
import { IfcMedicalDeviceType } from './index'
import { IfcOutletType } from './index'
import { IfcSanitaryTerminalType } from './index'
import { IfcSpaceHeaterType } from './index'
import { IfcStackTerminalType } from './index'
import { IfcWasteTerminalType } from './index'
import { IfcInterceptor } from './index'
import { IfcInterceptorType } from './index'
import { IfcFurniture } from './index'
import { IfcSystemFurnitureElement } from './index'
import { IfcFurnitureType } from './index'
import { IfcSystemFurnitureElementType } from './index'
import { IfcGeometricCurveSet } from './index'
import { IfcGeometricSet } from './index'
import { IfcGeometricRepresentationContext } from './index'
import { IfcGeometricRepresentationSubContext } from './index'
import { IfcRepresentationContext } from './index'
import { IfcLightSource } from './index'
import { IfcPlanarExtent } from './index'
import { IfcSectionedSpine } from './index'
import { IfcShellBasedSurfaceModel } from './index'
import { IfcTessellatedItem } from './index'
import { IfcTextLiteral } from './index'
import { IfcVector } from './index'
import { IfcRepresentationItem } from './index'
import { IfcGrid } from './index'
import { IfcGridAxis } from './index'
import { IfcGridPlacement } from './index'
import { IfcObjectPlacement } from './index'
import { IfcInventory } from './index'
import { IfcStructuralLoadGroup } from './index'
import { IfcStructuralResultGroup } from './index'
import { IfcPolygonalBoundedHalfSpace } from './index'
import { IfcIShapeProfileDef } from './index'
import { IfcImageTexture } from './index'
import { IfcIndexedColourMap } from './index'
import { IfcIndexedPolygonalFace } from './index'
import { IfcIndexedPolygonalFaceWithVoids } from './index'
import { IfcIndexedTextureMap } from './index'
import { IfcIndexedTriangleTextureMap } from './index'
import { IfcTextureCoordinate } from './index'
import { IfcIntersectionCurve } from './index'
import { IfcIrregularTimeSeries } from './index'
import { IfcTimeSeries } from './index'
import { IfcIrregularTimeSeriesValue } from './index'
import { IfcLShapeProfileDef } from './index'
import { IfcLagTime } from './index'
import { IfcLightDistributionData } from './index'
import { IfcLightIntensityDistribution } from './index'
import { IfcLightSourceAmbient } from './index'
import { IfcLightSourceDirectional } from './index'
import { IfcLightSourceGoniometric } from './index'
import { IfcLightSourcePositional } from './index'
import { IfcLightSourceSpot } from './index'
import { IfcLocalPlacement } from './index'
import { IfcPolyLoop } from './index'
import { IfcVertexLoop } from './index'
import { IfcMappedItem } from './index'
import { IfcMaterial } from './index'
import { IfcMaterialDefinition } from './index'
import { IfcMaterialClassificationRelationship } from './index'
import { IfcMaterialConstituent } from './index'
import { IfcMaterialConstituentSet } from './index'
import { IfcMaterialLayer } from './index'
import { IfcMaterialLayerSet } from './index'
import { IfcMaterialProfile } from './index'
import { IfcMaterialProfileSet } from './index'
import { IfcMaterialDefinitionRepresentation } from './index'
import { IfcProductRepresentation } from './index'
import { IfcMaterialLayerWithOffsets } from './index'
import { IfcMaterialLayerSetUsage } from './index'
import { IfcMaterialUsageDefinition } from './index'
import { IfcMaterialList } from './index'
import { IfcMaterialProfileWithOffsets } from './index'
import { IfcMaterialProfileSetUsage } from './index'
import { IfcMaterialProfileSetUsageTapering } from './index'
import { IfcMaterialRelationship } from './index'
import { IfcMeasureWithUnit } from './index'
import { IfcMemberStandardCase } from './index'
import { IfcMonetaryUnit } from './index'
import { IfcSIUnit } from './index'
import { IfcTypeObject } from './index'
import { IfcRoot } from './index'
import { IfcOpeningStandardCase } from './index'
import { IfcOrganization } from './index'
import { IfcOrganizationRelationship } from './index'
import { IfcOwnerHistory } from './index'
import { IfcRectangleProfileDef } from './index'
import { IfcTShapeProfileDef } from './index'
import { IfcTrapeziumProfileDef } from './index'
import { IfcUShapeProfileDef } from './index'
import { IfcZShapeProfileDef } from './index'
import { IfcPath } from './index'
import { IfcPermeableCoveringProperties } from './index'
import { IfcPerson } from './index'
import { IfcPersonAndOrganization } from './index'
import { IfcPhysicalComplexQuantity } from './index'
import { IfcPhysicalQuantity } from './index'
import { IfcPhysicalSimpleQuantity } from './index'
import { IfcQuantityArea } from './index'
import { IfcQuantityCount } from './index'
import { IfcQuantityLength } from './index'
import { IfcQuantityTime } from './index'
import { IfcQuantityVolume } from './index'
import { IfcQuantityWeight } from './index'
import { IfcPixelTexture } from './index'
import { IfcPlanarBox } from './index'
import { IfcPlateStandardCase } from './index'
import { IfcPointOnCurve } from './index'
import { IfcPointOnSurface } from './index'
import { IfcPolygonalFaceSet } from './index'
import { IfcTessellatedFaceSet } from './index'
import { IfcPreDefinedItem } from './index'
import { IfcPreDefinedTextFont } from './index'
import { IfcPreDefinedProperties } from './index'
import { IfcReinforcementBarProperties } from './index'
import { IfcSectionProperties } from './index'
import { IfcSectionReinforcementProperties } from './index'
import { IfcReinforcementDefinitionProperties } from './index'
import { IfcWindowLiningProperties } from './index'
import { IfcWindowPanelProperties } from './index'
import { IfcPropertySetDefinition } from './index'
import { IfcTextStyleFontModel } from './index'
import { IfcSurfaceStyleLighting } from './index'
import { IfcSurfaceStyleRefraction } from './index'
import { IfcSurfaceStyleShading } from './index'
import { IfcSurfaceStyleWithTextures } from './index'
import { IfcTextStyleForDefinedFont } from './index'
import { IfcTextStyleTextModel } from './index'
import { IfcTextureVertex } from './index'
import { IfcTextureVertexList } from './index'
import { IfcPresentationLayerAssignment } from './index'
import { IfcPresentationLayerWithStyle } from './index'
import { IfcSurfaceStyle } from './index'
import { IfcTextStyle } from './index'
import { IfcPresentationStyleAssignment } from './index'
import { IfcProcedure } from './index'
import { IfcProcedureType } from './index'
import { IfcTask } from './index'
import { IfcProxy } from './index'
import { IfcStructuralActivity } from './index'
import { IfcStructuralItem } from './index'
import { IfcProductDefinitionShape } from './index'
import { IfcSimpleProperty } from './index'
import { IfcPropertyEnumeration } from './index'
import { IfcPropertyBoundedValue } from './index'
import { IfcPropertyDefinition } from './index'
import { IfcPropertyTemplateDefinition } from './index'
import { IfcPropertyDependencyRelationship } from './index'
import { IfcPropertyEnumeratedValue } from './index'
import { IfcPropertyListValue } from './index'
import { IfcPropertyReferenceValue } from './index'
import { IfcPropertySet } from './index'
import { IfcPropertySetTemplate } from './index'
import { IfcPropertySingleValue } from './index'
import { IfcPropertyTableValue } from './index'
import { IfcSimplePropertyTemplate } from './index'
import { IfcRectangleHollowProfileDef } from './index'
import { IfcRoundedRectangleProfileDef } from './index'
import { IfcRecurrencePattern } from './index'
import { IfcReference } from './index'
import { IfcRegularTimeSeries } from './index'
import { IfcReinforcingBar } from './index'
import { IfcReinforcingBarType } from './index'
import { IfcReinforcingMesh } from './index'
import { IfcTendon } from './index'
import { IfcTendonAnchor } from './index'
import { IfcReinforcingMeshType } from './index'
import { IfcTendonAnchorType } from './index'
import { IfcTendonType } from './index'
import { IfcRelAggregates } from './index'
import { IfcRelDecomposes } from './index'
import { IfcRelAssigns } from './index'
import { IfcRelAssignsToActor } from './index'
import { IfcRelAssignsToControl } from './index'
import { IfcRelAssignsToGroup } from './index'
import { IfcRelAssignsToProcess } from './index'
import { IfcRelAssignsToProduct } from './index'
import { IfcRelAssignsToResource } from './index'
import { IfcRelationship } from './index'
import { IfcRelAssignsToGroupByFactor } from './index'
import { IfcRelAssociates } from './index'
import { IfcRelAssociatesApproval } from './index'
import { IfcRelAssociatesClassification } from './index'
import { IfcRelAssociatesConstraint } from './index'
import { IfcRelAssociatesDocument } from './index'
import { IfcRelAssociatesLibrary } from './index'
import { IfcRelAssociatesMaterial } from './index'
import { IfcRelConnects } from './index'
import { IfcRelConnectsElements } from './index'
import { IfcRelConnectsPortToElement } from './index'
import { IfcRelConnectsPorts } from './index'
import { IfcRelConnectsStructuralActivity } from './index'
import { IfcRelConnectsStructuralMember } from './index'
import { IfcRelContainedInSpatialStructure } from './index'
import { IfcRelCoversBldgElements } from './index'
import { IfcRelCoversSpaces } from './index'
import { IfcRelFillsElement } from './index'
import { IfcRelFlowControlElements } from './index'
import { IfcRelInterferesElements } from './index'
import { IfcRelReferencedInSpatialStructure } from './index'
import { IfcRelSequence } from './index'
import { IfcRelServicesBuildings } from './index'
import { IfcRelSpaceBoundary } from './index'
import { IfcRelConnectsPathElements } from './index'
import { IfcRelConnectsWithRealizingElements } from './index'
import { IfcRelConnectsWithEccentricity } from './index'
import { IfcRelDeclares } from './index'
import { IfcRelNests } from './index'
import { IfcRelProjectsElement } from './index'
import { IfcRelVoidsElement } from './index'
import { IfcRelDefines } from './index'
import { IfcRelDefinesByObject } from './index'
import { IfcRelDefinesByProperties } from './index'
import { IfcRelDefinesByTemplate } from './index'
import { IfcRelDefinesByType } from './index'
import { IfcRelSpaceBoundary1stLevel } from './index'
import { IfcRelSpaceBoundary2ndLevel } from './index'
import { IfcRepresentation } from './index'
import { IfcShapeModel } from './index'
import { IfcStyleModel } from './index'
import { IfcStyledItem } from './index'
import { IfcRepresentationMap } from './index'
import { IfcResourceApprovalRelationship } from './index'
import { IfcResourceConstraintRelationship } from './index'
import { IfcResourceTime } from './index'
import { IfcRevolvedAreaSolid } from './index'
import { IfcRevolvedAreaSolidTapered } from './index'
import { IfcTaskTime } from './index'
import { IfcWorkTime } from './index'
import { IfcSeamCurve } from './index'
import { IfcShapeAspect } from './index'
import { IfcShapeRepresentation } from './index'
import { IfcTopologyRepresentation } from './index'
import { IfcSite } from './index'
import { IfcSlabElementedCase } from './index'
import { IfcSlabStandardCase } from './index'
import { IfcSlippageConnectionCondition } from './index'
import { IfcSweptDiskSolid } from './index'
import { IfcSpace } from './index'
import { IfcSpaceType } from './index'
import { IfcSpatialStructureElementType } from './index'
import { IfcSpatialZone } from './index'
import { IfcSpatialElementType } from './index'
import { IfcSpatialZoneType } from './index'
import { IfcStructuralAction } from './index'
import { IfcStructuralCurveAction } from './index'
import { IfcStructuralPointAction } from './index'
import { IfcStructuralSurfaceAction } from './index'
import { IfcStructuralReaction } from './index'
import { IfcStructuralAnalysisModel } from './index'
import { IfcStructuralConnection } from './index'
import { IfcStructuralCurveConnection } from './index'
import { IfcStructuralPointConnection } from './index'
import { IfcStructuralSurfaceConnection } from './index'
import { IfcStructuralLinearAction } from './index'
import { IfcStructuralCurveMember } from './index'
import { IfcStructuralCurveMemberVarying } from './index'
import { IfcStructuralMember } from './index'
import { IfcStructuralCurveReaction } from './index'
import { IfcStructuralLoad } from './index'
import { IfcStructuralLoadConfiguration } from './index'
import { IfcStructuralLoadOrResult } from './index'
import { IfcStructuralLoadCase } from './index'
import { IfcStructuralLoadLinearForce } from './index'
import { IfcStructuralLoadStatic } from './index'
import { IfcSurfaceReinforcementArea } from './index'
import { IfcStructuralLoadPlanarForce } from './index'
import { IfcStructuralLoadSingleDisplacement } from './index'
import { IfcStructuralLoadSingleDisplacementDistortion } from './index'
import { IfcStructuralLoadSingleForce } from './index'
import { IfcStructuralLoadSingleForceWarping } from './index'
import { IfcStructuralLoadTemperature } from './index'
import { IfcStructuralSurfaceMember } from './index'
import { IfcStructuralPlanarAction } from './index'
import { IfcStructuralPointReaction } from './index'
import { IfcStructuralSurfaceReaction } from './index'
import { IfcStructuralSurfaceMemberVarying } from './index'
import { IfcStyledRepresentation } from './index'
import { IfcSweptSurface } from './index'
import { IfcSurfaceCurveSweptAreaSolid } from './index'
import { IfcSurfaceOfLinearExtrusion } from './index'
import { IfcSurfaceOfRevolution } from './index'
import { IfcSurfaceStyleRendering } from './index'
import { IfcSweptDiskSolidPolygonal } from './index'
import { IfcZone } from './index'
import { IfcTable } from './index'
import { IfcTableColumn } from './index'
import { IfcTableRow } from './index'
import { IfcTaskTimeRecurring } from './index'
import { IfcTaskType } from './index'
import { IfcTriangulatedFaceSet } from './index'
import { IfcTextLiteralWithExtent } from './index'
import { IfcTextureCoordinateGenerator } from './index'
import { IfcTextureMap } from './index'
import { IfcTimePeriod } from './index'
import { IfcTimeSeriesValue } from './index'
import { IfcVertex } from './index'
import { IfcWindowStyle } from './index'
import { IfcUnitAssignment } from './index'
import { IfcVertexPoint } from './index'
import { IfcVirtualGridIntersection } from './index'
import { IfcWallElementedCase } from './index'
import { IfcWallStandardCase } from './index'
import { IfcWindowStandardCase } from './index'
import { IfcWorkPlan } from './index'
import { IfcWorkSchedule } from './index'
import { IfcStrippedOptional } from './index'
import { IfcAbsorbedDoseMeasure } from './index'
import { IfcAccelerationMeasure } from './index'
import { IfcAmountOfSubstanceMeasure } from './index'
import { IfcAngularVelocityMeasure } from './index'
import { IfcArcIndex } from './index'
import { IfcAreaDensityMeasure } from './index'
import { IfcAreaMeasure } from './index'
import { IfcBinary } from './index'
import { IfcBoolean } from './index'
import { IfcBoxAlignment } from './index'
import { IfcCardinalPointReference } from './index'
import { IfcComplexNumber } from './index'
import { IfcCompoundPlaneAngleMeasure } from './index'
import { IfcContextDependentMeasure } from './index'
import { IfcCountMeasure } from './index'
import { IfcCurvatureMeasure } from './index'
import { IfcDate } from './index'
import { IfcDateTime } from './index'
import { IfcDayInMonthNumber } from './index'
import { IfcDayInWeekNumber } from './index'
import { IfcDescriptiveMeasure } from './index'
import { IfcDimensionCount } from './index'
import { IfcDoseEquivalentMeasure } from './index'
import { IfcDuration } from './index'
import { IfcDynamicViscosityMeasure } from './index'
import { IfcElectricCapacitanceMeasure } from './index'
import { IfcElectricChargeMeasure } from './index'
import { IfcElectricConductanceMeasure } from './index'
import { IfcElectricCurrentMeasure } from './index'
import { IfcElectricResistanceMeasure } from './index'
import { IfcElectricVoltageMeasure } from './index'
import { IfcEnergyMeasure } from './index'
import { IfcFontStyle } from './index'
import { IfcFontVariant } from './index'
import { IfcFontWeight } from './index'
import { IfcForceMeasure } from './index'
import { IfcFrequencyMeasure } from './index'
import { IfcGloballyUniqueId } from './index'
import { IfcHeatFluxDensityMeasure } from './index'
import { IfcHeatingValueMeasure } from './index'
import { IfcIdentifier } from './index'
import { IfcIlluminanceMeasure } from './index'
import { IfcInductanceMeasure } from './index'
import { IfcInteger } from './index'
import { IfcIntegerCountRateMeasure } from './index'
import { IfcIonConcentrationMeasure } from './index'
import { IfcIsothermalMoistureCapacityMeasure } from './index'
import { IfcKinematicViscosityMeasure } from './index'
import { IfcLabel } from './index'
import { IfcLanguageId } from './index'
import { IfcLengthMeasure } from './index'
import { IfcLineIndex } from './index'
import { IfcLinearForceMeasure } from './index'
import { IfcLinearMomentMeasure } from './index'
import { IfcLinearStiffnessMeasure } from './index'
import { IfcLinearVelocityMeasure } from './index'
import { IfcLogical } from './index'
import { IfcLuminousFluxMeasure } from './index'
import { IfcLuminousIntensityDistributionMeasure } from './index'
import { IfcLuminousIntensityMeasure } from './index'
import { IfcMagneticFluxDensityMeasure } from './index'
import { IfcMagneticFluxMeasure } from './index'
import { IfcMassDensityMeasure } from './index'
import { IfcMassFlowRateMeasure } from './index'
import { IfcMassMeasure } from './index'
import { IfcMassPerLengthMeasure } from './index'
import { IfcModulusOfElasticityMeasure } from './index'
import { IfcModulusOfLinearSubgradeReactionMeasure } from './index'
import { IfcModulusOfRotationalSubgradeReactionMeasure } from './index'
import { IfcModulusOfSubgradeReactionMeasure } from './index'
import { IfcMoistureDiffusivityMeasure } from './index'
import { IfcMolecularWeightMeasure } from './index'
import { IfcMomentOfInertiaMeasure } from './index'
import { IfcMonetaryMeasure } from './index'
import { IfcMonthInYearNumber } from './index'
import { IfcNonNegativeLengthMeasure } from './index'
import { IfcNormalisedRatioMeasure } from './index'
import { IfcNumericMeasure } from './index'
import { IfcPHMeasure } from './index'
import { IfcParameterValue } from './index'
import { IfcPlanarForceMeasure } from './index'
import { IfcPlaneAngleMeasure } from './index'
import { IfcPositiveInteger } from './index'
import { IfcPositiveLengthMeasure } from './index'
import { IfcPositivePlaneAngleMeasure } from './index'
import { IfcPositiveRatioMeasure } from './index'
import { IfcPowerMeasure } from './index'
import { IfcPresentableText } from './index'
import { IfcPressureMeasure } from './index'
import { IfcPropertySetDefinitionSet } from './index'
import { IfcRadioActivityMeasure } from './index'
import { IfcRatioMeasure } from './index'
import { IfcReal } from './index'
import { IfcRotationalFrequencyMeasure } from './index'
import { IfcRotationalMassMeasure } from './index'
import { IfcRotationalStiffnessMeasure } from './index'
import { IfcSectionModulusMeasure } from './index'
import { IfcSectionalAreaIntegralMeasure } from './index'
import { IfcShearModulusMeasure } from './index'
import { IfcSolidAngleMeasure } from './index'
import { IfcSoundPowerLevelMeasure } from './index'
import { IfcSoundPowerMeasure } from './index'
import { IfcSoundPressureLevelMeasure } from './index'
import { IfcSoundPressureMeasure } from './index'
import { IfcSpecificHeatCapacityMeasure } from './index'
import { IfcSpecularExponent } from './index'
import { IfcSpecularRoughness } from './index'
import { IfcTemperatureGradientMeasure } from './index'
import { IfcTemperatureRateOfChangeMeasure } from './index'
import { IfcText } from './index'
import { IfcTextAlignment } from './index'
import { IfcTextDecoration } from './index'
import { IfcTextFontName } from './index'
import { IfcTextTransformation } from './index'
import { IfcThermalAdmittanceMeasure } from './index'
import { IfcThermalConductivityMeasure } from './index'
import { IfcThermalExpansionCoefficientMeasure } from './index'
import { IfcThermalResistanceMeasure } from './index'
import { IfcThermalTransmittanceMeasure } from './index'
import { IfcThermodynamicTemperatureMeasure } from './index'
import { IfcTime } from './index'
import { IfcTimeMeasure } from './index'
import { IfcTimeStamp } from './index'
import { IfcTorqueMeasure } from './index'
import { IfcURIReference } from './index'
import { IfcVaporPermeabilityMeasure } from './index'
import { IfcVolumeMeasure } from './index'
import { IfcVolumetricFlowRateMeasure } from './index'
import { IfcWarpingConstantMeasure } from './index'
import { IfcWarpingMomentMeasure } from './index'
import { IfcActionRequestTypeEnum } from './index'
import { IfcActionSourceTypeEnum } from './index'
import { IfcActionTypeEnum } from './index'
import { IfcActuatorTypeEnum } from './index'
import { IfcAddressTypeEnum } from './index'
import { IfcAirTerminalBoxTypeEnum } from './index'
import { IfcAirTerminalTypeEnum } from './index'
import { IfcAirToAirHeatRecoveryTypeEnum } from './index'
import { IfcAlarmTypeEnum } from './index'
import { IfcAnalysisModelTypeEnum } from './index'
import { IfcAnalysisTheoryTypeEnum } from './index'
import { IfcArithmeticOperatorEnum } from './index'
import { IfcAssemblyPlaceEnum } from './index'
import { IfcAudioVisualApplianceTypeEnum } from './index'
import { IfcBeamTypeEnum } from './index'
import { IfcBenchmarkEnum } from './index'
import { IfcBoilerTypeEnum } from './index'
import { IfcBooleanOperator } from './index'
import { IfcBSplineCurveForm } from './index'
import { IfcBSplineSurfaceForm } from './index'
import { IfcBuildingElementPartTypeEnum } from './index'
import { IfcBuildingElementProxyTypeEnum } from './index'
import { IfcBuildingSystemTypeEnum } from './index'
import { IfcBurnerTypeEnum } from './index'
import { IfcCableCarrierFittingTypeEnum } from './index'
import { IfcCableCarrierSegmentTypeEnum } from './index'
import { IfcCableFittingTypeEnum } from './index'
import { IfcCableSegmentTypeEnum } from './index'
import { IfcChangeActionEnum } from './index'
import { IfcChillerTypeEnum } from './index'
import { IfcChimneyTypeEnum } from './index'
import { IfcCoilTypeEnum } from './index'
import { IfcColumnTypeEnum } from './index'
import { IfcCommunicationsApplianceTypeEnum } from './index'
import { IfcComplexPropertyTemplateTypeEnum } from './index'
import { IfcCompressorTypeEnum } from './index'
import { IfcCondenserTypeEnum } from './index'
import { IfcConnectionTypeEnum } from './index'
import { IfcConstraintEnum } from './index'
import { IfcConstructionEquipmentResourceTypeEnum } from './index'
import { IfcConstructionMaterialResourceTypeEnum } from './index'
import { IfcConstructionProductResourceTypeEnum } from './index'
import { IfcControllerTypeEnum } from './index'
import { IfcCooledBeamTypeEnum } from './index'
import { IfcCoolingTowerTypeEnum } from './index'
import { IfcCostItemTypeEnum } from './index'
import { IfcCostScheduleTypeEnum } from './index'
import { IfcCoveringTypeEnum } from './index'
import { IfcCrewResourceTypeEnum } from './index'
import { IfcCurtainWallTypeEnum } from './index'
import { IfcCurveInterpolationEnum } from './index'
import { IfcDamperTypeEnum } from './index'
import { IfcDataOriginEnum } from './index'
import { IfcDerivedUnitEnum } from './index'
import { IfcDirectionSenseEnum } from './index'
import { IfcDiscreteAccessoryTypeEnum } from './index'
import { IfcDistributionChamberElementTypeEnum } from './index'
import { IfcDistributionPortTypeEnum } from './index'
import { IfcDistributionSystemEnum } from './index'
import { IfcDocumentConfidentialityEnum } from './index'
import { IfcDocumentStatusEnum } from './index'
import { IfcDoorPanelOperationEnum } from './index'
import { IfcDoorPanelPositionEnum } from './index'
import { IfcDoorStyleConstructionEnum } from './index'
import { IfcDoorStyleOperationEnum } from './index'
import { IfcDoorTypeEnum } from './index'
import { IfcDoorTypeOperationEnum } from './index'
import { IfcDuctFittingTypeEnum } from './index'
import { IfcDuctSegmentTypeEnum } from './index'
import { IfcDuctSilencerTypeEnum } from './index'
import { IfcElectricApplianceTypeEnum } from './index'
import { IfcElectricDistributionBoardTypeEnum } from './index'
import { IfcElectricFlowStorageDeviceTypeEnum } from './index'
import { IfcElectricGeneratorTypeEnum } from './index'
import { IfcElectricMotorTypeEnum } from './index'
import { IfcElectricTimeControlTypeEnum } from './index'
import { IfcElementAssemblyTypeEnum } from './index'
import { IfcElementCompositionEnum } from './index'
import { IfcEngineTypeEnum } from './index'
import { IfcEvaporativeCoolerTypeEnum } from './index'
import { IfcEvaporatorTypeEnum } from './index'
import { IfcEventTriggerTypeEnum } from './index'
import { IfcEventTypeEnum } from './index'
import { IfcExternalSpatialElementTypeEnum } from './index'
import { IfcFanTypeEnum } from './index'
import { IfcFastenerTypeEnum } from './index'
import { IfcFilterTypeEnum } from './index'
import { IfcFireSuppressionTerminalTypeEnum } from './index'
import { IfcFlowDirectionEnum } from './index'
import { IfcFlowInstrumentTypeEnum } from './index'
import { IfcFlowMeterTypeEnum } from './index'
import { IfcFootingTypeEnum } from './index'
import { IfcFurnitureTypeEnum } from './index'
import { IfcGeographicElementTypeEnum } from './index'
import { IfcGeometricProjectionEnum } from './index'
import { IfcGlobalOrLocalEnum } from './index'
import { IfcGridTypeEnum } from './index'
import { IfcHeatExchangerTypeEnum } from './index'
import { IfcHumidifierTypeEnum } from './index'
import { IfcInterceptorTypeEnum } from './index'
import { IfcInternalOrExternalEnum } from './index'
import { IfcInventoryTypeEnum } from './index'
import { IfcJunctionBoxTypeEnum } from './index'
import { IfcKnotType } from './index'
import { IfcLaborResourceTypeEnum } from './index'
import { IfcLampTypeEnum } from './index'
import { IfcLayerSetDirectionEnum } from './index'
import { IfcLightDistributionCurveEnum } from './index'
import { IfcLightEmissionSourceEnum } from './index'
import { IfcLightFixtureTypeEnum } from './index'
import { IfcLoadGroupTypeEnum } from './index'
import { IfcLogicalOperatorEnum } from './index'
import { IfcMechanicalFastenerTypeEnum } from './index'
import { IfcMedicalDeviceTypeEnum } from './index'
import { IfcMemberTypeEnum } from './index'
import { IfcMotorConnectionTypeEnum } from './index'
import { IfcNullStyle } from './index'
import { IfcObjectiveEnum } from './index'
import { IfcObjectTypeEnum } from './index'
import { IfcOccupantTypeEnum } from './index'
import { IfcOpeningElementTypeEnum } from './index'
import { IfcOutletTypeEnum } from './index'
import { IfcPerformanceHistoryTypeEnum } from './index'
import { IfcPermeableCoveringOperationEnum } from './index'
import { IfcPermitTypeEnum } from './index'
import { IfcPhysicalOrVirtualEnum } from './index'
import { IfcPileConstructionEnum } from './index'
import { IfcPileTypeEnum } from './index'
import { IfcPipeFittingTypeEnum } from './index'
import { IfcPipeSegmentTypeEnum } from './index'
import { IfcPlateTypeEnum } from './index'
import { IfcPreferredSurfaceCurveRepresentation } from './index'
import { IfcProcedureTypeEnum } from './index'
import { IfcProfileTypeEnum } from './index'
import { IfcProjectedOrTrueLengthEnum } from './index'
import { IfcProjectionElementTypeEnum } from './index'
import { IfcProjectOrderTypeEnum } from './index'
import { IfcPropertySetTemplateTypeEnum } from './index'
import { IfcProtectiveDeviceTrippingUnitTypeEnum } from './index'
import { IfcProtectiveDeviceTypeEnum } from './index'
import { IfcPumpTypeEnum } from './index'
import { IfcRailingTypeEnum } from './index'
import { IfcRampFlightTypeEnum } from './index'
import { IfcRampTypeEnum } from './index'
import { IfcRecurrenceTypeEnum } from './index'
import { IfcReflectanceMethodEnum } from './index'
import { IfcReinforcingBarRoleEnum } from './index'
import { IfcReinforcingBarSurfaceEnum } from './index'
import { IfcReinforcingBarTypeEnum } from './index'
import { IfcReinforcingMeshTypeEnum } from './index'
import { IfcRoleEnum } from './index'
import { IfcRoofTypeEnum } from './index'
import { IfcSanitaryTerminalTypeEnum } from './index'
import { IfcSectionTypeEnum } from './index'
import { IfcSensorTypeEnum } from './index'
import { IfcSequenceEnum } from './index'
import { IfcShadingDeviceTypeEnum } from './index'
import { IfcSimplePropertyTemplateTypeEnum } from './index'
import { IfcSIPrefix } from './index'
import { IfcSIUnitName } from './index'
import { IfcSlabTypeEnum } from './index'
import { IfcSolarDeviceTypeEnum } from './index'
import { IfcSpaceHeaterTypeEnum } from './index'
import { IfcSpaceTypeEnum } from './index'
import { IfcSpatialZoneTypeEnum } from './index'
import { IfcStackTerminalTypeEnum } from './index'
import { IfcStairFlightTypeEnum } from './index'
import { IfcStairTypeEnum } from './index'
import { IfcStateEnum } from './index'
import { IfcStructuralCurveActivityTypeEnum } from './index'
import { IfcStructuralCurveMemberTypeEnum } from './index'
import { IfcStructuralSurfaceActivityTypeEnum } from './index'
import { IfcStructuralSurfaceMemberTypeEnum } from './index'
import { IfcSubContractResourceTypeEnum } from './index'
import { IfcSurfaceFeatureTypeEnum } from './index'
import { IfcSurfaceSide } from './index'
import { IfcSwitchingDeviceTypeEnum } from './index'
import { IfcSystemFurnitureElementTypeEnum } from './index'
import { IfcTankTypeEnum } from './index'
import { IfcTaskDurationEnum } from './index'
import { IfcTaskTypeEnum } from './index'
import { IfcTendonAnchorTypeEnum } from './index'
import { IfcTendonTypeEnum } from './index'
import { IfcTextPath } from './index'
import { IfcTimeSeriesDataTypeEnum } from './index'
import { IfcTransformerTypeEnum } from './index'
import { IfcTransitionCode } from './index'
import { IfcTransportElementTypeEnum } from './index'
import { IfcTrimmingPreference } from './index'
import { IfcTubeBundleTypeEnum } from './index'
import { IfcUnitaryControlElementTypeEnum } from './index'
import { IfcUnitaryEquipmentTypeEnum } from './index'
import { IfcUnitEnum } from './index'
import { IfcValveTypeEnum } from './index'
import { IfcVibrationIsolatorTypeEnum } from './index'
import { IfcVoidingFeatureTypeEnum } from './index'
import { IfcWallTypeEnum } from './index'
import { IfcWasteTerminalTypeEnum } from './index'
import { IfcWindowPanelOperationEnum } from './index'
import { IfcWindowPanelPositionEnum } from './index'
import { IfcWindowStyleConstructionEnum } from './index'
import { IfcWindowStyleOperationEnum } from './index'
import { IfcWindowTypeEnum } from './index'
import { IfcWindowTypePartitioningEnum } from './index'
import { IfcWorkCalendarTypeEnum } from './index'
import { IfcWorkPlanTypeEnum } from './index'
import { IfcWorkScheduleTypeEnum } from './index'
let constructors : ( StepEntityConstructor< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > | undefined )[]  = [
  IfcActionRequest,
  void 0,
  IfcActor,
  IfcOccupant,
  void 0,
  IfcActorRole,
  IfcActuator,
  IfcDistributionControlElement,
  IfcActuatorType,
  void 0,
  void 0,
  IfcPostalAddress,
  IfcTelecomAddress,
  IfcAdvancedBrep,
  IfcAdvancedBrepWithVoids,
  void 0,
  IfcAdvancedFace,
  IfcFaceSurface,
  IfcAirTerminal,
  IfcFlowTerminal,
  IfcAirTerminalBox,
  IfcFlowController,
  IfcAirTerminalBoxType,
  void 0,
  IfcAirTerminalType,
  void 0,
  IfcAirToAirHeatRecovery,
  IfcEnergyConversionDevice,
  IfcAirToAirHeatRecoveryType,
  void 0,
  IfcAlarm,
  IfcAlarmType,
  IfcAnnotation,
  void 0,
  IfcAnnotationFillArea,
  void 0,
  IfcApplication,
  IfcAppliedValue,
  IfcCostValue,
  IfcApproval,
  IfcApprovalRelationship,
  void 0,
  IfcArbitraryClosedProfileDef,
  IfcArbitraryProfileDefWithVoids,
  IfcProfileDef,
  IfcArbitraryOpenProfileDef,
  IfcCenterLineProfileDef,
  IfcAsset,
  IfcGroup,
  IfcAsymmetricIShapeProfileDef,
  void 0,
  IfcAudioVisualAppliance,
  IfcAudioVisualApplianceType,
  IfcAxis1Placement,
  void 0,
  IfcAxis2Placement2D,
  IfcAxis2Placement3D,
  void 0,
  IfcBSplineCurveWithKnots,
  void 0,
  IfcRationalBSplineCurveWithKnots,
  void 0,
  IfcBSplineSurfaceWithKnots,
  void 0,
  IfcRationalBSplineSurfaceWithKnots,
  IfcBeam,
  IfcBeamStandardCase,
  void 0,
  IfcBeamType,
  void 0,
  IfcBlobTexture,
  void 0,
  IfcBlock,
  void 0,
  IfcBoiler,
  IfcBoilerType,
  IfcBooleanClippingResult,
  IfcBooleanResult,
  void 0,
  IfcBoundaryEdgeCondition,
  IfcBoundaryFaceCondition,
  IfcBoundaryNodeCondition,
  IfcBoundaryCurve,
  IfcOuterBoundaryCurve,
  IfcCompositeCurveOnSurface,
  IfcBoundaryNodeConditionWarping,
  IfcCompositeCurve,
  IfcIndexedPolyCurve,
  IfcPolyline,
  IfcTrimmedCurve,
  void 0,
  IfcCurveBoundedPlane,
  IfcCurveBoundedSurface,
  IfcRectangularTrimmedSurface,
  void 0,
  IfcBoundingBox,
  IfcBoxedHalfSpace,
  IfcHalfSpaceSolid,
  IfcBuilding,
  void 0,
  IfcBuildingElementProxy,
  IfcChimney,
  IfcColumn,
  IfcCovering,
  IfcCurtainWall,
  IfcDoor,
  IfcFooting,
  IfcMember,
  IfcPile,
  IfcPlate,
  IfcRailing,
  IfcRamp,
  IfcRampFlight,
  IfcRoof,
  IfcShadingDevice,
  IfcSlab,
  IfcStair,
  IfcStairFlight,
  IfcWall,
  IfcWindow,
  void 0,
  IfcBuildingElementPart,
  void 0,
  IfcBuildingElementPartType,
  void 0,
  IfcBuildingElementProxyType,
  IfcChimneyType,
  IfcColumnType,
  IfcCoveringType,
  IfcCurtainWallType,
  IfcDoorType,
  IfcFootingType,
  IfcMemberType,
  IfcPileType,
  IfcPlateType,
  IfcRailingType,
  IfcRampFlightType,
  IfcRampType,
  IfcRoofType,
  IfcShadingDeviceType,
  IfcSlabType,
  IfcStairFlightType,
  IfcStairType,
  IfcWallType,
  IfcWindowType,
  void 0,
  IfcBuildingStorey,
  IfcBuildingSystem,
  IfcSystem,
  IfcBurner,
  IfcBurnerType,
  IfcCShapeProfileDef,
  IfcCableCarrierFitting,
  IfcFlowFitting,
  IfcCableCarrierFittingType,
  void 0,
  IfcCableCarrierSegment,
  IfcFlowSegment,
  IfcCableCarrierSegmentType,
  void 0,
  IfcCableFitting,
  IfcCableFittingType,
  IfcCableSegment,
  IfcCableSegmentType,
  IfcCartesianPoint,
  void 0,
  void 0,
  IfcCartesianPointList2D,
  IfcCartesianPointList3D,
  void 0,
  IfcCartesianTransformationOperator2D,
  IfcCartesianTransformationOperator3D,
  IfcCartesianTransformationOperator2DnonUniform,
  IfcCartesianTransformationOperator3DnonUniform,
  IfcChiller,
  IfcChillerType,
  IfcCircle,
  void 0,
  IfcCircleHollowProfileDef,
  IfcCircleProfileDef,
  IfcCivilElement,
  IfcCivilElementType,
  IfcClassification,
  void 0,
  IfcClassificationReference,
  void 0,
  IfcClosedShell,
  IfcConnectedFaceSet,
  IfcCoil,
  IfcCoilType,
  IfcColourRgb,
  void 0,
  IfcColourRgbList,
  void 0,
  IfcColumnStandardCase,
  IfcCommunicationsAppliance,
  IfcCommunicationsApplianceType,
  IfcComplexProperty,
  void 0,
  IfcComplexPropertyTemplate,
  void 0,
  IfcCompositeCurveSegment,
  IfcReparametrisedCompositeCurveSegment,
  IfcCompositeProfileDef,
  IfcCompressor,
  IfcFlowMovingDevice,
  IfcCompressorType,
  void 0,
  IfcCondenser,
  IfcCondenserType,
  IfcEllipse,
  IfcOpenShell,
  void 0,
  IfcConnectionCurveGeometry,
  void 0,
  IfcConnectionPointGeometry,
  IfcConnectionSurfaceGeometry,
  IfcConnectionVolumeGeometry,
  IfcConnectionPointEccentricity,
  void 0,
  IfcMetric,
  IfcObjective,
  IfcConstructionEquipmentResource,
  void 0,
  IfcConstructionEquipmentResourceType,
  void 0,
  IfcConstructionMaterialResource,
  IfcConstructionMaterialResourceType,
  IfcConstructionProductResource,
  IfcConstructionProductResourceType,
  IfcCrewResource,
  IfcLaborResource,
  IfcSubContractResource,
  void 0,
  IfcCrewResourceType,
  IfcLaborResourceType,
  IfcSubContractResourceType,
  void 0,
  void 0,
  IfcProject,
  IfcProjectLibrary,
  void 0,
  IfcContextDependentUnit,
  void 0,
  IfcCostItem,
  IfcCostSchedule,
  IfcPerformanceHistory,
  IfcPermit,
  IfcProjectOrder,
  IfcWorkCalendar,
  void 0,
  IfcController,
  IfcControllerType,
  IfcConversionBasedUnit,
  IfcConversionBasedUnitWithOffset,
  IfcCooledBeam,
  IfcCooledBeamType,
  IfcCoolingTower,
  IfcCoolingTowerType,
  void 0,
  IfcMapConversion,
  void 0,
  IfcProjectedCRS,
  IfcRectangularPyramid,
  IfcRightCircularCone,
  IfcRightCircularCylinder,
  IfcSphere,
  IfcCsgSolid,
  void 0,
  IfcCurrencyRelationship,
  IfcLine,
  IfcOffsetCurve2D,
  IfcOffsetCurve3D,
  IfcPcurve,
  IfcSurfaceCurve,
  IfcCurveStyle,
  void 0,
  IfcCurveStyleFont,
  IfcCurveStyleFontAndScaling,
  IfcCurveStyleFontPattern,
  IfcCylindricalSurface,
  void 0,
  IfcDamper,
  IfcDamperType,
  IfcDerivedProfileDef,
  IfcMirroredProfileDef,
  IfcDerivedUnit,
  IfcDerivedUnitElement,
  IfcDimensionalExponents,
  IfcDirection,
  IfcDiscreteAccessory,
  IfcDiscreteAccessoryType,
  IfcDistributionChamberElement,
  IfcDistributionFlowElement,
  IfcDistributionChamberElementType,
  void 0,
  IfcDistributionCircuit,
  IfcDistributionSystem,
  IfcFlowInstrument,
  IfcProtectiveDeviceTrippingUnit,
  IfcSensor,
  IfcUnitaryControlElement,
  IfcDistributionElement,
  IfcFlowInstrumentType,
  IfcProtectiveDeviceTrippingUnitType,
  IfcSensorType,
  IfcUnitaryControlElementType,
  IfcDistributionElementType,
  IfcFlowStorageDevice,
  IfcFlowTreatmentDevice,
  void 0,
  void 0,
  IfcDistributionPort,
  void 0,
  IfcDocumentInformation,
  IfcDocumentInformationRelationship,
  IfcDocumentReference,
  IfcDoorStandardCase,
  IfcDoorLiningProperties,
  void 0,
  IfcDoorPanelProperties,
  IfcDoorStyle,
  IfcTypeProduct,
  IfcDraughtingPreDefinedColour,
  void 0,
  IfcDraughtingPreDefinedCurveFont,
  void 0,
  IfcDuctFitting,
  IfcDuctFittingType,
  IfcDuctSegment,
  IfcDuctSegmentType,
  IfcDuctSilencer,
  IfcDuctSilencerType,
  IfcEdge,
  IfcEdgeCurve,
  IfcOrientedEdge,
  IfcSubedge,
  IfcEdgeLoop,
  IfcLoop,
  IfcElectricAppliance,
  IfcElectricApplianceType,
  IfcElectricDistributionBoard,
  IfcElectricDistributionBoardType,
  IfcElectricFlowStorageDevice,
  IfcElectricFlowStorageDeviceType,
  IfcElectricGenerator,
  IfcElectricGeneratorType,
  IfcElectricMotor,
  IfcElectricMotorType,
  IfcElectricTimeControl,
  IfcElectricTimeControlType,
  IfcElementAssembly,
  void 0,
  IfcFurnishingElement,
  IfcGeographicElement,
  IfcTransportElement,
  IfcVirtualElement,
  IfcElementAssemblyType,
  IfcFastener,
  IfcMechanicalFastener,
  void 0,
  IfcVibrationIsolator,
  IfcFastenerType,
  IfcMechanicalFastenerType,
  void 0,
  IfcVibrationIsolatorType,
  IfcElementQuantity,
  void 0,
  IfcFurnishingElementType,
  IfcGeographicElementType,
  IfcTransportElementType,
  IfcPlane,
  IfcSphericalSurface,
  IfcToroidalSurface,
  IfcEllipseProfileDef,
  IfcEngine,
  IfcEvaporativeCooler,
  IfcEvaporator,
  IfcHeatExchanger,
  IfcHumidifier,
  IfcMotorConnection,
  IfcSolarDevice,
  IfcTransformer,
  IfcTubeBundle,
  IfcUnitaryEquipment,
  IfcEngineType,
  IfcEvaporativeCoolerType,
  IfcEvaporatorType,
  IfcHeatExchangerType,
  IfcHumidifierType,
  IfcMotorConnectionType,
  IfcSolarDeviceType,
  IfcTransformerType,
  IfcTubeBundleType,
  IfcUnitaryEquipmentType,
  IfcEvent,
  void 0,
  IfcEventTime,
  void 0,
  IfcEventType,
  void 0,
  void 0,
  IfcMaterialProperties,
  IfcProfileProperties,
  void 0,
  IfcLibraryInformation,
  IfcExternallyDefinedHatchStyle,
  IfcExternallyDefinedSurfaceStyle,
  IfcExternallyDefinedTextFont,
  IfcLibraryReference,
  IfcExternalReferenceRelationship,
  IfcExternalSpatialElement,
  void 0,
  void 0,
  IfcExtrudedAreaSolid,
  IfcExtrudedAreaSolidTapered,
  void 0,
  IfcFace,
  IfcFaceBasedSurfaceModel,
  IfcFaceBound,
  IfcFaceOuterBound,
  IfcFacetedBrep,
  IfcFacetedBrepWithVoids,
  IfcFailureConnectionCondition,
  void 0,
  IfcFan,
  IfcFanType,
  void 0,
  void 0,
  IfcSurfaceFeature,
  IfcProjectionElement,
  IfcOpeningElement,
  IfcVoidingFeature,
  IfcFillAreaStyle,
  IfcFillAreaStyleHatching,
  IfcFillAreaStyleTiles,
  IfcFilter,
  IfcFilterType,
  IfcFireSuppressionTerminal,
  IfcFireSuppressionTerminalType,
  IfcFixedReferenceSweptAreaSolid,
  IfcFlowMeter,
  IfcProtectiveDevice,
  IfcSwitchingDevice,
  IfcValve,
  IfcFlowMeterType,
  IfcProtectiveDeviceType,
  IfcSwitchingDeviceType,
  IfcValveType,
  IfcJunctionBox,
  IfcPipeFitting,
  IfcJunctionBoxType,
  IfcPipeFittingType,
  IfcPump,
  IfcPumpType,
  IfcPipeSegment,
  IfcPipeSegmentType,
  IfcTank,
  IfcTankType,
  IfcLamp,
  IfcLightFixture,
  IfcMedicalDevice,
  IfcOutlet,
  IfcSanitaryTerminal,
  IfcSpaceHeater,
  IfcStackTerminal,
  IfcWasteTerminal,
  IfcLampType,
  IfcLightFixtureType,
  IfcMedicalDeviceType,
  IfcOutletType,
  IfcSanitaryTerminalType,
  IfcSpaceHeaterType,
  IfcStackTerminalType,
  IfcWasteTerminalType,
  IfcInterceptor,
  IfcInterceptorType,
  IfcFurniture,
  IfcSystemFurnitureElement,
  IfcFurnitureType,
  IfcSystemFurnitureElementType,
  IfcGeometricCurveSet,
  IfcGeometricSet,
  IfcGeometricRepresentationContext,
  IfcGeometricRepresentationSubContext,
  void 0,
  void 0,
  IfcPlanarExtent,
  IfcSectionedSpine,
  IfcShellBasedSurfaceModel,
  void 0,
  IfcTextLiteral,
  IfcVector,
  void 0,
  IfcGrid,
  IfcGridAxis,
  IfcGridPlacement,
  void 0,
  IfcInventory,
  IfcStructuralLoadGroup,
  IfcStructuralResultGroup,
  IfcPolygonalBoundedHalfSpace,
  IfcIShapeProfileDef,
  IfcImageTexture,
  IfcIndexedColourMap,
  IfcIndexedPolygonalFace,
  IfcIndexedPolygonalFaceWithVoids,
  void 0,
  IfcIndexedTriangleTextureMap,
  void 0,
  IfcIntersectionCurve,
  IfcIrregularTimeSeries,
  void 0,
  IfcIrregularTimeSeriesValue,
  IfcLShapeProfileDef,
  IfcLagTime,
  IfcLightDistributionData,
  IfcLightIntensityDistribution,
  IfcLightSourceAmbient,
  IfcLightSourceDirectional,
  IfcLightSourceGoniometric,
  IfcLightSourcePositional,
  IfcLightSourceSpot,
  IfcLocalPlacement,
  IfcPolyLoop,
  IfcVertexLoop,
  IfcMappedItem,
  IfcMaterial,
  void 0,
  IfcMaterialClassificationRelationship,
  IfcMaterialConstituent,
  IfcMaterialConstituentSet,
  IfcMaterialLayer,
  IfcMaterialLayerSet,
  IfcMaterialProfile,
  IfcMaterialProfileSet,
  IfcMaterialDefinitionRepresentation,
  void 0,
  IfcMaterialLayerWithOffsets,
  IfcMaterialLayerSetUsage,
  void 0,
  IfcMaterialList,
  IfcMaterialProfileWithOffsets,
  IfcMaterialProfileSetUsage,
  IfcMaterialProfileSetUsageTapering,
  IfcMaterialRelationship,
  IfcMeasureWithUnit,
  IfcMemberStandardCase,
  IfcMonetaryUnit,
  IfcSIUnit,
  IfcTypeObject,
  void 0,
  IfcOpeningStandardCase,
  IfcOrganization,
  IfcOrganizationRelationship,
  IfcOwnerHistory,
  IfcRectangleProfileDef,
  IfcTShapeProfileDef,
  IfcTrapeziumProfileDef,
  IfcUShapeProfileDef,
  IfcZShapeProfileDef,
  IfcPath,
  IfcPermeableCoveringProperties,
  IfcPerson,
  IfcPersonAndOrganization,
  IfcPhysicalComplexQuantity,
  void 0,
  void 0,
  IfcQuantityArea,
  IfcQuantityCount,
  IfcQuantityLength,
  IfcQuantityTime,
  IfcQuantityVolume,
  IfcQuantityWeight,
  IfcPixelTexture,
  IfcPlanarBox,
  IfcPlateStandardCase,
  IfcPointOnCurve,
  IfcPointOnSurface,
  IfcPolygonalFaceSet,
  void 0,
  void 0,
  void 0,
  void 0,
  IfcReinforcementBarProperties,
  IfcSectionProperties,
  IfcSectionReinforcementProperties,
  IfcReinforcementDefinitionProperties,
  IfcWindowLiningProperties,
  IfcWindowPanelProperties,
  void 0,
  IfcTextStyleFontModel,
  IfcSurfaceStyleLighting,
  IfcSurfaceStyleRefraction,
  IfcSurfaceStyleShading,
  IfcSurfaceStyleWithTextures,
  IfcTextStyleForDefinedFont,
  IfcTextStyleTextModel,
  IfcTextureVertex,
  IfcTextureVertexList,
  IfcPresentationLayerAssignment,
  IfcPresentationLayerWithStyle,
  IfcSurfaceStyle,
  IfcTextStyle,
  IfcPresentationStyleAssignment,
  IfcProcedure,
  IfcProcedureType,
  IfcTask,
  IfcProxy,
  void 0,
  void 0,
  IfcProductDefinitionShape,
  void 0,
  IfcPropertyEnumeration,
  IfcPropertyBoundedValue,
  void 0,
  void 0,
  IfcPropertyDependencyRelationship,
  IfcPropertyEnumeratedValue,
  IfcPropertyListValue,
  IfcPropertyReferenceValue,
  IfcPropertySet,
  IfcPropertySetTemplate,
  IfcPropertySingleValue,
  IfcPropertyTableValue,
  IfcSimplePropertyTemplate,
  IfcRectangleHollowProfileDef,
  IfcRoundedRectangleProfileDef,
  IfcRecurrencePattern,
  IfcReference,
  IfcRegularTimeSeries,
  IfcReinforcingBar,
  IfcReinforcingBarType,
  IfcReinforcingMesh,
  IfcTendon,
  IfcTendonAnchor,
  IfcReinforcingMeshType,
  IfcTendonAnchorType,
  IfcTendonType,
  IfcRelAggregates,
  void 0,
  void 0,
  IfcRelAssignsToActor,
  IfcRelAssignsToControl,
  IfcRelAssignsToGroup,
  IfcRelAssignsToProcess,
  IfcRelAssignsToProduct,
  IfcRelAssignsToResource,
  void 0,
  IfcRelAssignsToGroupByFactor,
  void 0,
  IfcRelAssociatesApproval,
  IfcRelAssociatesClassification,
  IfcRelAssociatesConstraint,
  IfcRelAssociatesDocument,
  IfcRelAssociatesLibrary,
  IfcRelAssociatesMaterial,
  void 0,
  IfcRelConnectsElements,
  IfcRelConnectsPortToElement,
  IfcRelConnectsPorts,
  IfcRelConnectsStructuralActivity,
  IfcRelConnectsStructuralMember,
  IfcRelContainedInSpatialStructure,
  IfcRelCoversBldgElements,
  IfcRelCoversSpaces,
  IfcRelFillsElement,
  IfcRelFlowControlElements,
  IfcRelInterferesElements,
  IfcRelReferencedInSpatialStructure,
  IfcRelSequence,
  IfcRelServicesBuildings,
  IfcRelSpaceBoundary,
  IfcRelConnectsPathElements,
  IfcRelConnectsWithRealizingElements,
  IfcRelConnectsWithEccentricity,
  IfcRelDeclares,
  IfcRelNests,
  IfcRelProjectsElement,
  IfcRelVoidsElement,
  void 0,
  IfcRelDefinesByObject,
  IfcRelDefinesByProperties,
  IfcRelDefinesByTemplate,
  IfcRelDefinesByType,
  IfcRelSpaceBoundary1stLevel,
  IfcRelSpaceBoundary2ndLevel,
  void 0,
  void 0,
  void 0,
  IfcStyledItem,
  IfcRepresentationMap,
  IfcResourceApprovalRelationship,
  IfcResourceConstraintRelationship,
  IfcResourceTime,
  IfcRevolvedAreaSolid,
  IfcRevolvedAreaSolidTapered,
  IfcTaskTime,
  IfcWorkTime,
  IfcSeamCurve,
  IfcShapeAspect,
  IfcShapeRepresentation,
  IfcTopologyRepresentation,
  IfcSite,
  IfcSlabElementedCase,
  IfcSlabStandardCase,
  IfcSlippageConnectionCondition,
  IfcSweptDiskSolid,
  IfcSpace,
  IfcSpaceType,
  void 0,
  IfcSpatialZone,
  void 0,
  IfcSpatialZoneType,
  void 0,
  IfcStructuralCurveAction,
  IfcStructuralPointAction,
  IfcStructuralSurfaceAction,
  void 0,
  IfcStructuralAnalysisModel,
  void 0,
  IfcStructuralCurveConnection,
  IfcStructuralPointConnection,
  IfcStructuralSurfaceConnection,
  IfcStructuralLinearAction,
  IfcStructuralCurveMember,
  IfcStructuralCurveMemberVarying,
  void 0,
  IfcStructuralCurveReaction,
  void 0,
  IfcStructuralLoadConfiguration,
  void 0,
  IfcStructuralLoadCase,
  IfcStructuralLoadLinearForce,
  void 0,
  IfcSurfaceReinforcementArea,
  IfcStructuralLoadPlanarForce,
  IfcStructuralLoadSingleDisplacement,
  IfcStructuralLoadSingleDisplacementDistortion,
  IfcStructuralLoadSingleForce,
  IfcStructuralLoadSingleForceWarping,
  IfcStructuralLoadTemperature,
  IfcStructuralSurfaceMember,
  IfcStructuralPlanarAction,
  IfcStructuralPointReaction,
  IfcStructuralSurfaceReaction,
  IfcStructuralSurfaceMemberVarying,
  IfcStyledRepresentation,
  void 0,
  IfcSurfaceCurveSweptAreaSolid,
  IfcSurfaceOfLinearExtrusion,
  IfcSurfaceOfRevolution,
  IfcSurfaceStyleRendering,
  IfcSweptDiskSolidPolygonal,
  IfcZone,
  IfcTable,
  IfcTableColumn,
  IfcTableRow,
  IfcTaskTimeRecurring,
  IfcTaskType,
  IfcTriangulatedFaceSet,
  IfcTextLiteralWithExtent,
  IfcTextureCoordinateGenerator,
  IfcTextureMap,
  IfcTimePeriod,
  IfcTimeSeriesValue,
  IfcVertex,
  IfcWindowStyle,
  IfcUnitAssignment,
  IfcVertexPoint,
  IfcVirtualGridIntersection,
  IfcWallElementedCase,
  IfcWallStandardCase,
  IfcWindowStandardCase,
  IfcWorkPlan,
  IfcWorkSchedule,
  IfcStrippedOptional,
  IfcAbsorbedDoseMeasure,
  IfcAccelerationMeasure,
  IfcAmountOfSubstanceMeasure,
  IfcAngularVelocityMeasure,
  IfcArcIndex,
  IfcAreaDensityMeasure,
  IfcAreaMeasure,
  IfcBinary,
  IfcBoolean,
  IfcBoxAlignment,
  IfcCardinalPointReference,
  IfcComplexNumber,
  IfcCompoundPlaneAngleMeasure,
  IfcContextDependentMeasure,
  IfcCountMeasure,
  IfcCurvatureMeasure,
  IfcDate,
  IfcDateTime,
  IfcDayInMonthNumber,
  IfcDayInWeekNumber,
  IfcDescriptiveMeasure,
  IfcDimensionCount,
  IfcDoseEquivalentMeasure,
  IfcDuration,
  IfcDynamicViscosityMeasure,
  IfcElectricCapacitanceMeasure,
  IfcElectricChargeMeasure,
  IfcElectricConductanceMeasure,
  IfcElectricCurrentMeasure,
  IfcElectricResistanceMeasure,
  IfcElectricVoltageMeasure,
  IfcEnergyMeasure,
  IfcFontStyle,
  IfcFontVariant,
  IfcFontWeight,
  IfcForceMeasure,
  IfcFrequencyMeasure,
  IfcGloballyUniqueId,
  IfcHeatFluxDensityMeasure,
  IfcHeatingValueMeasure,
  IfcIdentifier,
  IfcIlluminanceMeasure,
  IfcInductanceMeasure,
  IfcInteger,
  IfcIntegerCountRateMeasure,
  IfcIonConcentrationMeasure,
  IfcIsothermalMoistureCapacityMeasure,
  IfcKinematicViscosityMeasure,
  IfcLabel,
  IfcLanguageId,
  IfcLengthMeasure,
  IfcLineIndex,
  IfcLinearForceMeasure,
  IfcLinearMomentMeasure,
  IfcLinearStiffnessMeasure,
  IfcLinearVelocityMeasure,
  IfcLogical,
  IfcLuminousFluxMeasure,
  IfcLuminousIntensityDistributionMeasure,
  IfcLuminousIntensityMeasure,
  IfcMagneticFluxDensityMeasure,
  IfcMagneticFluxMeasure,
  IfcMassDensityMeasure,
  IfcMassFlowRateMeasure,
  IfcMassMeasure,
  IfcMassPerLengthMeasure,
  IfcModulusOfElasticityMeasure,
  IfcModulusOfLinearSubgradeReactionMeasure,
  IfcModulusOfRotationalSubgradeReactionMeasure,
  IfcModulusOfSubgradeReactionMeasure,
  IfcMoistureDiffusivityMeasure,
  IfcMolecularWeightMeasure,
  IfcMomentOfInertiaMeasure,
  IfcMonetaryMeasure,
  IfcMonthInYearNumber,
  IfcNonNegativeLengthMeasure,
  IfcNormalisedRatioMeasure,
  IfcNumericMeasure,
  IfcPHMeasure,
  IfcParameterValue,
  IfcPlanarForceMeasure,
  IfcPlaneAngleMeasure,
  IfcPositiveInteger,
  IfcPositiveLengthMeasure,
  IfcPositivePlaneAngleMeasure,
  IfcPositiveRatioMeasure,
  IfcPowerMeasure,
  IfcPresentableText,
  IfcPressureMeasure,
  IfcPropertySetDefinitionSet,
  IfcRadioActivityMeasure,
  IfcRatioMeasure,
  IfcReal,
  IfcRotationalFrequencyMeasure,
  IfcRotationalMassMeasure,
  IfcRotationalStiffnessMeasure,
  IfcSectionModulusMeasure,
  IfcSectionalAreaIntegralMeasure,
  IfcShearModulusMeasure,
  IfcSolidAngleMeasure,
  IfcSoundPowerLevelMeasure,
  IfcSoundPowerMeasure,
  IfcSoundPressureLevelMeasure,
  IfcSoundPressureMeasure,
  IfcSpecificHeatCapacityMeasure,
  IfcSpecularExponent,
  IfcSpecularRoughness,
  IfcTemperatureGradientMeasure,
  IfcTemperatureRateOfChangeMeasure,
  IfcText,
  IfcTextAlignment,
  IfcTextDecoration,
  IfcTextFontName,
  IfcTextTransformation,
  IfcThermalAdmittanceMeasure,
  IfcThermalConductivityMeasure,
  IfcThermalExpansionCoefficientMeasure,
  IfcThermalResistanceMeasure,
  IfcThermalTransmittanceMeasure,
  IfcThermodynamicTemperatureMeasure,
  IfcTime,
  IfcTimeMeasure,
  IfcTimeStamp,
  IfcTorqueMeasure,
  IfcURIReference,
  IfcVaporPermeabilityMeasure,
  IfcVolumeMeasure,
  IfcVolumetricFlowRateMeasure,
  IfcWarpingConstantMeasure,
  IfcWarpingMomentMeasure,
]
let queries : EntityTypesIfc[][] = [
  IfcActionRequest.query,
  IfcControl.query,
  IfcActor.query,
  IfcOccupant.query,
  IfcObject.query,
  IfcActorRole.query,
  IfcActuator.query,
  IfcDistributionControlElement.query,
  IfcActuatorType.query,
  IfcDistributionControlElementType.query,
  IfcAddress.query,
  IfcPostalAddress.query,
  IfcTelecomAddress.query,
  IfcAdvancedBrep.query,
  IfcAdvancedBrepWithVoids.query,
  IfcManifoldSolidBrep.query,
  IfcAdvancedFace.query,
  IfcFaceSurface.query,
  IfcAirTerminal.query,
  IfcFlowTerminal.query,
  IfcAirTerminalBox.query,
  IfcFlowController.query,
  IfcAirTerminalBoxType.query,
  IfcFlowControllerType.query,
  IfcAirTerminalType.query,
  IfcFlowTerminalType.query,
  IfcAirToAirHeatRecovery.query,
  IfcEnergyConversionDevice.query,
  IfcAirToAirHeatRecoveryType.query,
  IfcEnergyConversionDeviceType.query,
  IfcAlarm.query,
  IfcAlarmType.query,
  IfcAnnotation.query,
  IfcProduct.query,
  IfcAnnotationFillArea.query,
  IfcGeometricRepresentationItem.query,
  IfcApplication.query,
  IfcAppliedValue.query,
  IfcCostValue.query,
  IfcApproval.query,
  IfcApprovalRelationship.query,
  IfcResourceLevelRelationship.query,
  IfcArbitraryClosedProfileDef.query,
  IfcArbitraryProfileDefWithVoids.query,
  IfcProfileDef.query,
  IfcArbitraryOpenProfileDef.query,
  IfcCenterLineProfileDef.query,
  IfcAsset.query,
  IfcGroup.query,
  IfcAsymmetricIShapeProfileDef.query,
  IfcParameterizedProfileDef.query,
  IfcAudioVisualAppliance.query,
  IfcAudioVisualApplianceType.query,
  IfcAxis1Placement.query,
  IfcPlacement.query,
  IfcAxis2Placement2D.query,
  IfcAxis2Placement3D.query,
  IfcBSplineCurve.query,
  IfcBSplineCurveWithKnots.query,
  IfcBoundedCurve.query,
  IfcRationalBSplineCurveWithKnots.query,
  IfcBSplineSurface.query,
  IfcBSplineSurfaceWithKnots.query,
  IfcBoundedSurface.query,
  IfcRationalBSplineSurfaceWithKnots.query,
  IfcBeam.query,
  IfcBeamStandardCase.query,
  IfcBuildingElement.query,
  IfcBeamType.query,
  IfcBuildingElementType.query,
  IfcBlobTexture.query,
  IfcSurfaceTexture.query,
  IfcBlock.query,
  IfcCsgPrimitive3D.query,
  IfcBoiler.query,
  IfcBoilerType.query,
  IfcBooleanClippingResult.query,
  IfcBooleanResult.query,
  IfcBoundaryCondition.query,
  IfcBoundaryEdgeCondition.query,
  IfcBoundaryFaceCondition.query,
  IfcBoundaryNodeCondition.query,
  IfcBoundaryCurve.query,
  IfcOuterBoundaryCurve.query,
  IfcCompositeCurveOnSurface.query,
  IfcBoundaryNodeConditionWarping.query,
  IfcCompositeCurve.query,
  IfcIndexedPolyCurve.query,
  IfcPolyline.query,
  IfcTrimmedCurve.query,
  IfcCurve.query,
  IfcCurveBoundedPlane.query,
  IfcCurveBoundedSurface.query,
  IfcRectangularTrimmedSurface.query,
  IfcSurface.query,
  IfcBoundingBox.query,
  IfcBoxedHalfSpace.query,
  IfcHalfSpaceSolid.query,
  IfcBuilding.query,
  IfcSpatialStructureElement.query,
  IfcBuildingElementProxy.query,
  IfcChimney.query,
  IfcColumn.query,
  IfcCovering.query,
  IfcCurtainWall.query,
  IfcDoor.query,
  IfcFooting.query,
  IfcMember.query,
  IfcPile.query,
  IfcPlate.query,
  IfcRailing.query,
  IfcRamp.query,
  IfcRampFlight.query,
  IfcRoof.query,
  IfcShadingDevice.query,
  IfcSlab.query,
  IfcStair.query,
  IfcStairFlight.query,
  IfcWall.query,
  IfcWindow.query,
  IfcElement.query,
  IfcBuildingElementPart.query,
  IfcElementComponent.query,
  IfcBuildingElementPartType.query,
  IfcElementComponentType.query,
  IfcBuildingElementProxyType.query,
  IfcChimneyType.query,
  IfcColumnType.query,
  IfcCoveringType.query,
  IfcCurtainWallType.query,
  IfcDoorType.query,
  IfcFootingType.query,
  IfcMemberType.query,
  IfcPileType.query,
  IfcPlateType.query,
  IfcRailingType.query,
  IfcRampFlightType.query,
  IfcRampType.query,
  IfcRoofType.query,
  IfcShadingDeviceType.query,
  IfcSlabType.query,
  IfcStairFlightType.query,
  IfcStairType.query,
  IfcWallType.query,
  IfcWindowType.query,
  IfcElementType.query,
  IfcBuildingStorey.query,
  IfcBuildingSystem.query,
  IfcSystem.query,
  IfcBurner.query,
  IfcBurnerType.query,
  IfcCShapeProfileDef.query,
  IfcCableCarrierFitting.query,
  IfcFlowFitting.query,
  IfcCableCarrierFittingType.query,
  IfcFlowFittingType.query,
  IfcCableCarrierSegment.query,
  IfcFlowSegment.query,
  IfcCableCarrierSegmentType.query,
  IfcFlowSegmentType.query,
  IfcCableFitting.query,
  IfcCableFittingType.query,
  IfcCableSegment.query,
  IfcCableSegmentType.query,
  IfcCartesianPoint.query,
  IfcPoint.query,
  IfcCartesianPointList.query,
  IfcCartesianPointList2D.query,
  IfcCartesianPointList3D.query,
  IfcCartesianTransformationOperator.query,
  IfcCartesianTransformationOperator2D.query,
  IfcCartesianTransformationOperator3D.query,
  IfcCartesianTransformationOperator2DnonUniform.query,
  IfcCartesianTransformationOperator3DnonUniform.query,
  IfcChiller.query,
  IfcChillerType.query,
  IfcCircle.query,
  IfcConic.query,
  IfcCircleHollowProfileDef.query,
  IfcCircleProfileDef.query,
  IfcCivilElement.query,
  IfcCivilElementType.query,
  IfcClassification.query,
  IfcExternalInformation.query,
  IfcClassificationReference.query,
  IfcExternalReference.query,
  IfcClosedShell.query,
  IfcConnectedFaceSet.query,
  IfcCoil.query,
  IfcCoilType.query,
  IfcColourRgb.query,
  IfcColourSpecification.query,
  IfcColourRgbList.query,
  IfcPresentationItem.query,
  IfcColumnStandardCase.query,
  IfcCommunicationsAppliance.query,
  IfcCommunicationsApplianceType.query,
  IfcComplexProperty.query,
  IfcProperty.query,
  IfcComplexPropertyTemplate.query,
  IfcPropertyTemplate.query,
  IfcCompositeCurveSegment.query,
  IfcReparametrisedCompositeCurveSegment.query,
  IfcCompositeProfileDef.query,
  IfcCompressor.query,
  IfcFlowMovingDevice.query,
  IfcCompressorType.query,
  IfcFlowMovingDeviceType.query,
  IfcCondenser.query,
  IfcCondenserType.query,
  IfcEllipse.query,
  IfcOpenShell.query,
  IfcTopologicalRepresentationItem.query,
  IfcConnectionCurveGeometry.query,
  IfcConnectionGeometry.query,
  IfcConnectionPointGeometry.query,
  IfcConnectionSurfaceGeometry.query,
  IfcConnectionVolumeGeometry.query,
  IfcConnectionPointEccentricity.query,
  IfcConstraint.query,
  IfcMetric.query,
  IfcObjective.query,
  IfcConstructionEquipmentResource.query,
  IfcConstructionResource.query,
  IfcConstructionEquipmentResourceType.query,
  IfcConstructionResourceType.query,
  IfcConstructionMaterialResource.query,
  IfcConstructionMaterialResourceType.query,
  IfcConstructionProductResource.query,
  IfcConstructionProductResourceType.query,
  IfcCrewResource.query,
  IfcLaborResource.query,
  IfcSubContractResource.query,
  IfcResource.query,
  IfcCrewResourceType.query,
  IfcLaborResourceType.query,
  IfcSubContractResourceType.query,
  IfcTypeResource.query,
  IfcContext.query,
  IfcProject.query,
  IfcProjectLibrary.query,
  IfcObjectDefinition.query,
  IfcContextDependentUnit.query,
  IfcNamedUnit.query,
  IfcCostItem.query,
  IfcCostSchedule.query,
  IfcPerformanceHistory.query,
  IfcPermit.query,
  IfcProjectOrder.query,
  IfcWorkCalendar.query,
  IfcWorkControl.query,
  IfcController.query,
  IfcControllerType.query,
  IfcConversionBasedUnit.query,
  IfcConversionBasedUnitWithOffset.query,
  IfcCooledBeam.query,
  IfcCooledBeamType.query,
  IfcCoolingTower.query,
  IfcCoolingTowerType.query,
  IfcCoordinateOperation.query,
  IfcMapConversion.query,
  IfcCoordinateReferenceSystem.query,
  IfcProjectedCRS.query,
  IfcRectangularPyramid.query,
  IfcRightCircularCone.query,
  IfcRightCircularCylinder.query,
  IfcSphere.query,
  IfcCsgSolid.query,
  IfcSolidModel.query,
  IfcCurrencyRelationship.query,
  IfcLine.query,
  IfcOffsetCurve2D.query,
  IfcOffsetCurve3D.query,
  IfcPcurve.query,
  IfcSurfaceCurve.query,
  IfcCurveStyle.query,
  IfcPresentationStyle.query,
  IfcCurveStyleFont.query,
  IfcCurveStyleFontAndScaling.query,
  IfcCurveStyleFontPattern.query,
  IfcCylindricalSurface.query,
  IfcElementarySurface.query,
  IfcDamper.query,
  IfcDamperType.query,
  IfcDerivedProfileDef.query,
  IfcMirroredProfileDef.query,
  IfcDerivedUnit.query,
  IfcDerivedUnitElement.query,
  IfcDimensionalExponents.query,
  IfcDirection.query,
  IfcDiscreteAccessory.query,
  IfcDiscreteAccessoryType.query,
  IfcDistributionChamberElement.query,
  IfcDistributionFlowElement.query,
  IfcDistributionChamberElementType.query,
  IfcDistributionFlowElementType.query,
  IfcDistributionCircuit.query,
  IfcDistributionSystem.query,
  IfcFlowInstrument.query,
  IfcProtectiveDeviceTrippingUnit.query,
  IfcSensor.query,
  IfcUnitaryControlElement.query,
  IfcDistributionElement.query,
  IfcFlowInstrumentType.query,
  IfcProtectiveDeviceTrippingUnitType.query,
  IfcSensorType.query,
  IfcUnitaryControlElementType.query,
  IfcDistributionElementType.query,
  IfcFlowStorageDevice.query,
  IfcFlowTreatmentDevice.query,
  IfcFlowStorageDeviceType.query,
  IfcFlowTreatmentDeviceType.query,
  IfcDistributionPort.query,
  IfcPort.query,
  IfcDocumentInformation.query,
  IfcDocumentInformationRelationship.query,
  IfcDocumentReference.query,
  IfcDoorStandardCase.query,
  IfcDoorLiningProperties.query,
  IfcPreDefinedPropertySet.query,
  IfcDoorPanelProperties.query,
  IfcDoorStyle.query,
  IfcTypeProduct.query,
  IfcDraughtingPreDefinedColour.query,
  IfcPreDefinedColour.query,
  IfcDraughtingPreDefinedCurveFont.query,
  IfcPreDefinedCurveFont.query,
  IfcDuctFitting.query,
  IfcDuctFittingType.query,
  IfcDuctSegment.query,
  IfcDuctSegmentType.query,
  IfcDuctSilencer.query,
  IfcDuctSilencerType.query,
  IfcEdge.query,
  IfcEdgeCurve.query,
  IfcOrientedEdge.query,
  IfcSubedge.query,
  IfcEdgeLoop.query,
  IfcLoop.query,
  IfcElectricAppliance.query,
  IfcElectricApplianceType.query,
  IfcElectricDistributionBoard.query,
  IfcElectricDistributionBoardType.query,
  IfcElectricFlowStorageDevice.query,
  IfcElectricFlowStorageDeviceType.query,
  IfcElectricGenerator.query,
  IfcElectricGeneratorType.query,
  IfcElectricMotor.query,
  IfcElectricMotorType.query,
  IfcElectricTimeControl.query,
  IfcElectricTimeControlType.query,
  IfcElementAssembly.query,
  IfcFeatureElement.query,
  IfcFurnishingElement.query,
  IfcGeographicElement.query,
  IfcTransportElement.query,
  IfcVirtualElement.query,
  IfcElementAssemblyType.query,
  IfcFastener.query,
  IfcMechanicalFastener.query,
  IfcReinforcingElement.query,
  IfcVibrationIsolator.query,
  IfcFastenerType.query,
  IfcMechanicalFastenerType.query,
  IfcReinforcingElementType.query,
  IfcVibrationIsolatorType.query,
  IfcElementQuantity.query,
  IfcQuantitySet.query,
  IfcFurnishingElementType.query,
  IfcGeographicElementType.query,
  IfcTransportElementType.query,
  IfcPlane.query,
  IfcSphericalSurface.query,
  IfcToroidalSurface.query,
  IfcEllipseProfileDef.query,
  IfcEngine.query,
  IfcEvaporativeCooler.query,
  IfcEvaporator.query,
  IfcHeatExchanger.query,
  IfcHumidifier.query,
  IfcMotorConnection.query,
  IfcSolarDevice.query,
  IfcTransformer.query,
  IfcTubeBundle.query,
  IfcUnitaryEquipment.query,
  IfcEngineType.query,
  IfcEvaporativeCoolerType.query,
  IfcEvaporatorType.query,
  IfcHeatExchangerType.query,
  IfcHumidifierType.query,
  IfcMotorConnectionType.query,
  IfcSolarDeviceType.query,
  IfcTransformerType.query,
  IfcTubeBundleType.query,
  IfcUnitaryEquipmentType.query,
  IfcEvent.query,
  IfcProcess.query,
  IfcEventTime.query,
  IfcSchedulingTime.query,
  IfcEventType.query,
  IfcTypeProcess.query,
  IfcExtendedProperties.query,
  IfcMaterialProperties.query,
  IfcProfileProperties.query,
  IfcPropertyAbstraction.query,
  IfcLibraryInformation.query,
  IfcExternallyDefinedHatchStyle.query,
  IfcExternallyDefinedSurfaceStyle.query,
  IfcExternallyDefinedTextFont.query,
  IfcLibraryReference.query,
  IfcExternalReferenceRelationship.query,
  IfcExternalSpatialElement.query,
  IfcExternalSpatialStructureElement.query,
  IfcSpatialElement.query,
  IfcExtrudedAreaSolid.query,
  IfcExtrudedAreaSolidTapered.query,
  IfcSweptAreaSolid.query,
  IfcFace.query,
  IfcFaceBasedSurfaceModel.query,
  IfcFaceBound.query,
  IfcFaceOuterBound.query,
  IfcFacetedBrep.query,
  IfcFacetedBrepWithVoids.query,
  IfcFailureConnectionCondition.query,
  IfcStructuralConnectionCondition.query,
  IfcFan.query,
  IfcFanType.query,
  IfcFeatureElementAddition.query,
  IfcFeatureElementSubtraction.query,
  IfcSurfaceFeature.query,
  IfcProjectionElement.query,
  IfcOpeningElement.query,
  IfcVoidingFeature.query,
  IfcFillAreaStyle.query,
  IfcFillAreaStyleHatching.query,
  IfcFillAreaStyleTiles.query,
  IfcFilter.query,
  IfcFilterType.query,
  IfcFireSuppressionTerminal.query,
  IfcFireSuppressionTerminalType.query,
  IfcFixedReferenceSweptAreaSolid.query,
  IfcFlowMeter.query,
  IfcProtectiveDevice.query,
  IfcSwitchingDevice.query,
  IfcValve.query,
  IfcFlowMeterType.query,
  IfcProtectiveDeviceType.query,
  IfcSwitchingDeviceType.query,
  IfcValveType.query,
  IfcJunctionBox.query,
  IfcPipeFitting.query,
  IfcJunctionBoxType.query,
  IfcPipeFittingType.query,
  IfcPump.query,
  IfcPumpType.query,
  IfcPipeSegment.query,
  IfcPipeSegmentType.query,
  IfcTank.query,
  IfcTankType.query,
  IfcLamp.query,
  IfcLightFixture.query,
  IfcMedicalDevice.query,
  IfcOutlet.query,
  IfcSanitaryTerminal.query,
  IfcSpaceHeater.query,
  IfcStackTerminal.query,
  IfcWasteTerminal.query,
  IfcLampType.query,
  IfcLightFixtureType.query,
  IfcMedicalDeviceType.query,
  IfcOutletType.query,
  IfcSanitaryTerminalType.query,
  IfcSpaceHeaterType.query,
  IfcStackTerminalType.query,
  IfcWasteTerminalType.query,
  IfcInterceptor.query,
  IfcInterceptorType.query,
  IfcFurniture.query,
  IfcSystemFurnitureElement.query,
  IfcFurnitureType.query,
  IfcSystemFurnitureElementType.query,
  IfcGeometricCurveSet.query,
  IfcGeometricSet.query,
  IfcGeometricRepresentationContext.query,
  IfcGeometricRepresentationSubContext.query,
  IfcRepresentationContext.query,
  IfcLightSource.query,
  IfcPlanarExtent.query,
  IfcSectionedSpine.query,
  IfcShellBasedSurfaceModel.query,
  IfcTessellatedItem.query,
  IfcTextLiteral.query,
  IfcVector.query,
  IfcRepresentationItem.query,
  IfcGrid.query,
  IfcGridAxis.query,
  IfcGridPlacement.query,
  IfcObjectPlacement.query,
  IfcInventory.query,
  IfcStructuralLoadGroup.query,
  IfcStructuralResultGroup.query,
  IfcPolygonalBoundedHalfSpace.query,
  IfcIShapeProfileDef.query,
  IfcImageTexture.query,
  IfcIndexedColourMap.query,
  IfcIndexedPolygonalFace.query,
  IfcIndexedPolygonalFaceWithVoids.query,
  IfcIndexedTextureMap.query,
  IfcIndexedTriangleTextureMap.query,
  IfcTextureCoordinate.query,
  IfcIntersectionCurve.query,
  IfcIrregularTimeSeries.query,
  IfcTimeSeries.query,
  IfcIrregularTimeSeriesValue.query,
  IfcLShapeProfileDef.query,
  IfcLagTime.query,
  IfcLightDistributionData.query,
  IfcLightIntensityDistribution.query,
  IfcLightSourceAmbient.query,
  IfcLightSourceDirectional.query,
  IfcLightSourceGoniometric.query,
  IfcLightSourcePositional.query,
  IfcLightSourceSpot.query,
  IfcLocalPlacement.query,
  IfcPolyLoop.query,
  IfcVertexLoop.query,
  IfcMappedItem.query,
  IfcMaterial.query,
  IfcMaterialDefinition.query,
  IfcMaterialClassificationRelationship.query,
  IfcMaterialConstituent.query,
  IfcMaterialConstituentSet.query,
  IfcMaterialLayer.query,
  IfcMaterialLayerSet.query,
  IfcMaterialProfile.query,
  IfcMaterialProfileSet.query,
  IfcMaterialDefinitionRepresentation.query,
  IfcProductRepresentation.query,
  IfcMaterialLayerWithOffsets.query,
  IfcMaterialLayerSetUsage.query,
  IfcMaterialUsageDefinition.query,
  IfcMaterialList.query,
  IfcMaterialProfileWithOffsets.query,
  IfcMaterialProfileSetUsage.query,
  IfcMaterialProfileSetUsageTapering.query,
  IfcMaterialRelationship.query,
  IfcMeasureWithUnit.query,
  IfcMemberStandardCase.query,
  IfcMonetaryUnit.query,
  IfcSIUnit.query,
  IfcTypeObject.query,
  IfcRoot.query,
  IfcOpeningStandardCase.query,
  IfcOrganization.query,
  IfcOrganizationRelationship.query,
  IfcOwnerHistory.query,
  IfcRectangleProfileDef.query,
  IfcTShapeProfileDef.query,
  IfcTrapeziumProfileDef.query,
  IfcUShapeProfileDef.query,
  IfcZShapeProfileDef.query,
  IfcPath.query,
  IfcPermeableCoveringProperties.query,
  IfcPerson.query,
  IfcPersonAndOrganization.query,
  IfcPhysicalComplexQuantity.query,
  IfcPhysicalQuantity.query,
  IfcPhysicalSimpleQuantity.query,
  IfcQuantityArea.query,
  IfcQuantityCount.query,
  IfcQuantityLength.query,
  IfcQuantityTime.query,
  IfcQuantityVolume.query,
  IfcQuantityWeight.query,
  IfcPixelTexture.query,
  IfcPlanarBox.query,
  IfcPlateStandardCase.query,
  IfcPointOnCurve.query,
  IfcPointOnSurface.query,
  IfcPolygonalFaceSet.query,
  IfcTessellatedFaceSet.query,
  IfcPreDefinedItem.query,
  IfcPreDefinedTextFont.query,
  IfcPreDefinedProperties.query,
  IfcReinforcementBarProperties.query,
  IfcSectionProperties.query,
  IfcSectionReinforcementProperties.query,
  IfcReinforcementDefinitionProperties.query,
  IfcWindowLiningProperties.query,
  IfcWindowPanelProperties.query,
  IfcPropertySetDefinition.query,
  IfcTextStyleFontModel.query,
  IfcSurfaceStyleLighting.query,
  IfcSurfaceStyleRefraction.query,
  IfcSurfaceStyleShading.query,
  IfcSurfaceStyleWithTextures.query,
  IfcTextStyleForDefinedFont.query,
  IfcTextStyleTextModel.query,
  IfcTextureVertex.query,
  IfcTextureVertexList.query,
  IfcPresentationLayerAssignment.query,
  IfcPresentationLayerWithStyle.query,
  IfcSurfaceStyle.query,
  IfcTextStyle.query,
  IfcPresentationStyleAssignment.query,
  IfcProcedure.query,
  IfcProcedureType.query,
  IfcTask.query,
  IfcProxy.query,
  IfcStructuralActivity.query,
  IfcStructuralItem.query,
  IfcProductDefinitionShape.query,
  IfcSimpleProperty.query,
  IfcPropertyEnumeration.query,
  IfcPropertyBoundedValue.query,
  IfcPropertyDefinition.query,
  IfcPropertyTemplateDefinition.query,
  IfcPropertyDependencyRelationship.query,
  IfcPropertyEnumeratedValue.query,
  IfcPropertyListValue.query,
  IfcPropertyReferenceValue.query,
  IfcPropertySet.query,
  IfcPropertySetTemplate.query,
  IfcPropertySingleValue.query,
  IfcPropertyTableValue.query,
  IfcSimplePropertyTemplate.query,
  IfcRectangleHollowProfileDef.query,
  IfcRoundedRectangleProfileDef.query,
  IfcRecurrencePattern.query,
  IfcReference.query,
  IfcRegularTimeSeries.query,
  IfcReinforcingBar.query,
  IfcReinforcingBarType.query,
  IfcReinforcingMesh.query,
  IfcTendon.query,
  IfcTendonAnchor.query,
  IfcReinforcingMeshType.query,
  IfcTendonAnchorType.query,
  IfcTendonType.query,
  IfcRelAggregates.query,
  IfcRelDecomposes.query,
  IfcRelAssigns.query,
  IfcRelAssignsToActor.query,
  IfcRelAssignsToControl.query,
  IfcRelAssignsToGroup.query,
  IfcRelAssignsToProcess.query,
  IfcRelAssignsToProduct.query,
  IfcRelAssignsToResource.query,
  IfcRelationship.query,
  IfcRelAssignsToGroupByFactor.query,
  IfcRelAssociates.query,
  IfcRelAssociatesApproval.query,
  IfcRelAssociatesClassification.query,
  IfcRelAssociatesConstraint.query,
  IfcRelAssociatesDocument.query,
  IfcRelAssociatesLibrary.query,
  IfcRelAssociatesMaterial.query,
  IfcRelConnects.query,
  IfcRelConnectsElements.query,
  IfcRelConnectsPortToElement.query,
  IfcRelConnectsPorts.query,
  IfcRelConnectsStructuralActivity.query,
  IfcRelConnectsStructuralMember.query,
  IfcRelContainedInSpatialStructure.query,
  IfcRelCoversBldgElements.query,
  IfcRelCoversSpaces.query,
  IfcRelFillsElement.query,
  IfcRelFlowControlElements.query,
  IfcRelInterferesElements.query,
  IfcRelReferencedInSpatialStructure.query,
  IfcRelSequence.query,
  IfcRelServicesBuildings.query,
  IfcRelSpaceBoundary.query,
  IfcRelConnectsPathElements.query,
  IfcRelConnectsWithRealizingElements.query,
  IfcRelConnectsWithEccentricity.query,
  IfcRelDeclares.query,
  IfcRelNests.query,
  IfcRelProjectsElement.query,
  IfcRelVoidsElement.query,
  IfcRelDefines.query,
  IfcRelDefinesByObject.query,
  IfcRelDefinesByProperties.query,
  IfcRelDefinesByTemplate.query,
  IfcRelDefinesByType.query,
  IfcRelSpaceBoundary1stLevel.query,
  IfcRelSpaceBoundary2ndLevel.query,
  IfcRepresentation.query,
  IfcShapeModel.query,
  IfcStyleModel.query,
  IfcStyledItem.query,
  IfcRepresentationMap.query,
  IfcResourceApprovalRelationship.query,
  IfcResourceConstraintRelationship.query,
  IfcResourceTime.query,
  IfcRevolvedAreaSolid.query,
  IfcRevolvedAreaSolidTapered.query,
  IfcTaskTime.query,
  IfcWorkTime.query,
  IfcSeamCurve.query,
  IfcShapeAspect.query,
  IfcShapeRepresentation.query,
  IfcTopologyRepresentation.query,
  IfcSite.query,
  IfcSlabElementedCase.query,
  IfcSlabStandardCase.query,
  IfcSlippageConnectionCondition.query,
  IfcSweptDiskSolid.query,
  IfcSpace.query,
  IfcSpaceType.query,
  IfcSpatialStructureElementType.query,
  IfcSpatialZone.query,
  IfcSpatialElementType.query,
  IfcSpatialZoneType.query,
  IfcStructuralAction.query,
  IfcStructuralCurveAction.query,
  IfcStructuralPointAction.query,
  IfcStructuralSurfaceAction.query,
  IfcStructuralReaction.query,
  IfcStructuralAnalysisModel.query,
  IfcStructuralConnection.query,
  IfcStructuralCurveConnection.query,
  IfcStructuralPointConnection.query,
  IfcStructuralSurfaceConnection.query,
  IfcStructuralLinearAction.query,
  IfcStructuralCurveMember.query,
  IfcStructuralCurveMemberVarying.query,
  IfcStructuralMember.query,
  IfcStructuralCurveReaction.query,
  IfcStructuralLoad.query,
  IfcStructuralLoadConfiguration.query,
  IfcStructuralLoadOrResult.query,
  IfcStructuralLoadCase.query,
  IfcStructuralLoadLinearForce.query,
  IfcStructuralLoadStatic.query,
  IfcSurfaceReinforcementArea.query,
  IfcStructuralLoadPlanarForce.query,
  IfcStructuralLoadSingleDisplacement.query,
  IfcStructuralLoadSingleDisplacementDistortion.query,
  IfcStructuralLoadSingleForce.query,
  IfcStructuralLoadSingleForceWarping.query,
  IfcStructuralLoadTemperature.query,
  IfcStructuralSurfaceMember.query,
  IfcStructuralPlanarAction.query,
  IfcStructuralPointReaction.query,
  IfcStructuralSurfaceReaction.query,
  IfcStructuralSurfaceMemberVarying.query,
  IfcStyledRepresentation.query,
  IfcSweptSurface.query,
  IfcSurfaceCurveSweptAreaSolid.query,
  IfcSurfaceOfLinearExtrusion.query,
  IfcSurfaceOfRevolution.query,
  IfcSurfaceStyleRendering.query,
  IfcSweptDiskSolidPolygonal.query,
  IfcZone.query,
  IfcTable.query,
  IfcTableColumn.query,
  IfcTableRow.query,
  IfcTaskTimeRecurring.query,
  IfcTaskType.query,
  IfcTriangulatedFaceSet.query,
  IfcTextLiteralWithExtent.query,
  IfcTextureCoordinateGenerator.query,
  IfcTextureMap.query,
  IfcTimePeriod.query,
  IfcTimeSeriesValue.query,
  IfcVertex.query,
  IfcWindowStyle.query,
  IfcUnitAssignment.query,
  IfcVertexPoint.query,
  IfcVirtualGridIntersection.query,
  IfcWallElementedCase.query,
  IfcWallStandardCase.query,
  IfcWindowStandardCase.query,
  IfcWorkPlan.query,
  IfcWorkSchedule.query,
  IfcStrippedOptional.query,
  IfcAbsorbedDoseMeasure.query,
  IfcAccelerationMeasure.query,
  IfcAmountOfSubstanceMeasure.query,
  IfcAngularVelocityMeasure.query,
  IfcArcIndex.query,
  IfcAreaDensityMeasure.query,
  IfcAreaMeasure.query,
  IfcBinary.query,
  IfcBoolean.query,
  IfcBoxAlignment.query,
  IfcCardinalPointReference.query,
  IfcComplexNumber.query,
  IfcCompoundPlaneAngleMeasure.query,
  IfcContextDependentMeasure.query,
  IfcCountMeasure.query,
  IfcCurvatureMeasure.query,
  IfcDate.query,
  IfcDateTime.query,
  IfcDayInMonthNumber.query,
  IfcDayInWeekNumber.query,
  IfcDescriptiveMeasure.query,
  IfcDimensionCount.query,
  IfcDoseEquivalentMeasure.query,
  IfcDuration.query,
  IfcDynamicViscosityMeasure.query,
  IfcElectricCapacitanceMeasure.query,
  IfcElectricChargeMeasure.query,
  IfcElectricConductanceMeasure.query,
  IfcElectricCurrentMeasure.query,
  IfcElectricResistanceMeasure.query,
  IfcElectricVoltageMeasure.query,
  IfcEnergyMeasure.query,
  IfcFontStyle.query,
  IfcFontVariant.query,
  IfcFontWeight.query,
  IfcForceMeasure.query,
  IfcFrequencyMeasure.query,
  IfcGloballyUniqueId.query,
  IfcHeatFluxDensityMeasure.query,
  IfcHeatingValueMeasure.query,
  IfcIdentifier.query,
  IfcIlluminanceMeasure.query,
  IfcInductanceMeasure.query,
  IfcInteger.query,
  IfcIntegerCountRateMeasure.query,
  IfcIonConcentrationMeasure.query,
  IfcIsothermalMoistureCapacityMeasure.query,
  IfcKinematicViscosityMeasure.query,
  IfcLabel.query,
  IfcLanguageId.query,
  IfcLengthMeasure.query,
  IfcLineIndex.query,
  IfcLinearForceMeasure.query,
  IfcLinearMomentMeasure.query,
  IfcLinearStiffnessMeasure.query,
  IfcLinearVelocityMeasure.query,
  IfcLogical.query,
  IfcLuminousFluxMeasure.query,
  IfcLuminousIntensityDistributionMeasure.query,
  IfcLuminousIntensityMeasure.query,
  IfcMagneticFluxDensityMeasure.query,
  IfcMagneticFluxMeasure.query,
  IfcMassDensityMeasure.query,
  IfcMassFlowRateMeasure.query,
  IfcMassMeasure.query,
  IfcMassPerLengthMeasure.query,
  IfcModulusOfElasticityMeasure.query,
  IfcModulusOfLinearSubgradeReactionMeasure.query,
  IfcModulusOfRotationalSubgradeReactionMeasure.query,
  IfcModulusOfSubgradeReactionMeasure.query,
  IfcMoistureDiffusivityMeasure.query,
  IfcMolecularWeightMeasure.query,
  IfcMomentOfInertiaMeasure.query,
  IfcMonetaryMeasure.query,
  IfcMonthInYearNumber.query,
  IfcNonNegativeLengthMeasure.query,
  IfcNormalisedRatioMeasure.query,
  IfcNumericMeasure.query,
  IfcPHMeasure.query,
  IfcParameterValue.query,
  IfcPlanarForceMeasure.query,
  IfcPlaneAngleMeasure.query,
  IfcPositiveInteger.query,
  IfcPositiveLengthMeasure.query,
  IfcPositivePlaneAngleMeasure.query,
  IfcPositiveRatioMeasure.query,
  IfcPowerMeasure.query,
  IfcPresentableText.query,
  IfcPressureMeasure.query,
  IfcPropertySetDefinitionSet.query,
  IfcRadioActivityMeasure.query,
  IfcRatioMeasure.query,
  IfcReal.query,
  IfcRotationalFrequencyMeasure.query,
  IfcRotationalMassMeasure.query,
  IfcRotationalStiffnessMeasure.query,
  IfcSectionModulusMeasure.query,
  IfcSectionalAreaIntegralMeasure.query,
  IfcShearModulusMeasure.query,
  IfcSolidAngleMeasure.query,
  IfcSoundPowerLevelMeasure.query,
  IfcSoundPowerMeasure.query,
  IfcSoundPressureLevelMeasure.query,
  IfcSoundPressureMeasure.query,
  IfcSpecificHeatCapacityMeasure.query,
  IfcSpecularExponent.query,
  IfcSpecularRoughness.query,
  IfcTemperatureGradientMeasure.query,
  IfcTemperatureRateOfChangeMeasure.query,
  IfcText.query,
  IfcTextAlignment.query,
  IfcTextDecoration.query,
  IfcTextFontName.query,
  IfcTextTransformation.query,
  IfcThermalAdmittanceMeasure.query,
  IfcThermalConductivityMeasure.query,
  IfcThermalExpansionCoefficientMeasure.query,
  IfcThermalResistanceMeasure.query,
  IfcThermalTransmittanceMeasure.query,
  IfcThermodynamicTemperatureMeasure.query,
  IfcTime.query,
  IfcTimeMeasure.query,
  IfcTimeStamp.query,
  IfcTorqueMeasure.query,
  IfcURIReference.query,
  IfcVaporPermeabilityMeasure.query,
  IfcVolumeMeasure.query,
  IfcVolumetricFlowRateMeasure.query,
  IfcWarpingConstantMeasure.query,
  IfcWarpingMomentMeasure.query,
]
let descriptions : EntityDescription< EntityTypesIfc >[] = [
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcActionRequestTypeEnum,
      },
      Status: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      LongDescription: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCACTIONREQUEST,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONTROL,
  },
  {
    fields: {
      Identification: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Controls: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELASSIGNSTOCONTROL,
      },
    },
    typeId: EntityTypesIfc.IFCCONTROL,
    isAbstract: true,
    superType: EntityTypesIfc.IFCOBJECT,
    subTypes: [
       EntityTypesIfc.IFCACTIONREQUEST,
       EntityTypesIfc.IFCCOSTITEM,
       EntityTypesIfc.IFCCOSTSCHEDULE,
       EntityTypesIfc.IFCPERFORMANCEHISTORY,
       EntityTypesIfc.IFCPERMIT,
       EntityTypesIfc.IFCPROJECTORDER,
       EntityTypesIfc.IFCWORKCALENDAR,
       EntityTypesIfc.IFCWORKCONTROL,
    ],
  },
  {
    fields: {
      TheActor: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCORGANIZATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSON,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSONANDORGANIZATION,
          },
        ],
      },
      IsActingUpon: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELASSIGNSTOACTOR,
      },
    },
    typeId: EntityTypesIfc.IFCACTOR,
    isAbstract: false,
    superType: EntityTypesIfc.IFCOBJECT,
    subTypes: [
       EntityTypesIfc.IFCOCCUPANT,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcOccupantTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCOCCUPANT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCACTOR,
  },
  {
    fields: {
      ObjectType: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      IsDeclaredBy: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELDEFINESBYOBJECT,
      },
      Declares: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELDEFINESBYOBJECT,
      },
      IsTypedBy: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELDEFINESBYTYPE,
      },
      IsDefinedBy: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELDEFINESBYPROPERTIES,
      },
    },
    typeId: EntityTypesIfc.IFCOBJECT,
    isAbstract: true,
    superType: EntityTypesIfc.IFCOBJECTDEFINITION,
    subTypes: [
       EntityTypesIfc.IFCACTOR,
       EntityTypesIfc.IFCCONTROL,
       EntityTypesIfc.IFCGROUP,
       EntityTypesIfc.IFCPROCESS,
       EntityTypesIfc.IFCPRODUCT,
       EntityTypesIfc.IFCRESOURCE,
    ],
  },
  {
    fields: {
      Role: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcRoleEnum,
      },
      UserDefinedRole: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      HasExternalReference: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCEXTERNALREFERENCERELATIONSHIP,
      },
    },
    typeId: EntityTypesIfc.IFCACTORROLE,
    isAbstract: false,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcActuatorTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCACTUATOR,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONCONTROLELEMENT,
  },
  {
    fields: {
      AssignedToFlowElement: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELFLOWCONTROLELEMENTS,
      },
    },
    typeId: EntityTypesIfc.IFCDISTRIBUTIONCONTROLELEMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONELEMENT,
    subTypes: [
       EntityTypesIfc.IFCACTUATOR,
       EntityTypesIfc.IFCALARM,
       EntityTypesIfc.IFCCONTROLLER,
       EntityTypesIfc.IFCFLOWINSTRUMENT,
       EntityTypesIfc.IFCPROTECTIVEDEVICETRIPPINGUNIT,
       EntityTypesIfc.IFCSENSOR,
       EntityTypesIfc.IFCUNITARYCONTROLELEMENT,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcActuatorTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCACTUATORTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONCONTROLELEMENTTYPE,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCDISTRIBUTIONCONTROLELEMENTTYPE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCDISTRIBUTIONELEMENTTYPE,
    subTypes: [
       EntityTypesIfc.IFCACTUATORTYPE,
       EntityTypesIfc.IFCALARMTYPE,
       EntityTypesIfc.IFCCONTROLLERTYPE,
       EntityTypesIfc.IFCFLOWINSTRUMENTTYPE,
       EntityTypesIfc.IFCPROTECTIVEDEVICETRIPPINGUNITTYPE,
       EntityTypesIfc.IFCSENSORTYPE,
       EntityTypesIfc.IFCUNITARYCONTROLELEMENTTYPE,
    ],
  },
  {
    fields: {
      Purpose: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcAddressTypeEnum,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      UserDefinedPurpose: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      OfPerson: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPERSON,
      },
      OfOrganization: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCORGANIZATION,
      },
    },
    typeId: EntityTypesIfc.IFCADDRESS,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCPOSTALADDRESS,
       EntityTypesIfc.IFCTELECOMADDRESS,
    ],
  },
  {
    fields: {
      InternalLocation: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      AddressLines: {
        kind: FieldDescriptionKind.STRING,
        rank: 1,
        optional: true,
        derived: false,
      },
      PostalBox: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Town: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Region: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      PostalCode: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Country: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCPOSTALADDRESS,
    isAbstract: false,
    superType: EntityTypesIfc.IFCADDRESS,
  },
  {
    fields: {
      TelephoneNumbers: {
        kind: FieldDescriptionKind.STRING,
        rank: 1,
        optional: true,
        derived: false,
      },
      FacsimileNumbers: {
        kind: FieldDescriptionKind.STRING,
        rank: 1,
        optional: true,
        derived: false,
      },
      PagerNumber: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ElectronicMailAddresses: {
        kind: FieldDescriptionKind.STRING,
        rank: 1,
        optional: true,
        derived: false,
      },
      WWWHomePageURL: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      MessagingIDs: {
        kind: FieldDescriptionKind.STRING,
        rank: 1,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCTELECOMADDRESS,
    isAbstract: false,
    superType: EntityTypesIfc.IFCADDRESS,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCADVANCEDBREP,
    isAbstract: false,
    superType: EntityTypesIfc.IFCMANIFOLDSOLIDBREP,
    subTypes: [
       EntityTypesIfc.IFCADVANCEDBREPWITHVOIDS,
    ],
  },
  {
    fields: {
      Voids: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCLOSEDSHELL,
      },
    },
    typeId: EntityTypesIfc.IFCADVANCEDBREPWITHVOIDS,
    isAbstract: false,
    superType: EntityTypesIfc.IFCADVANCEDBREP,
  },
  {
    fields: {
      Outer: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCLOSEDSHELL,
      },
    },
    typeId: EntityTypesIfc.IFCMANIFOLDSOLIDBREP,
    isAbstract: true,
    superType: EntityTypesIfc.IFCSOLIDMODEL,
    subTypes: [
       EntityTypesIfc.IFCADVANCEDBREP,
       EntityTypesIfc.IFCFACETEDBREP,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCADVANCEDFACE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFACESURFACE,
  },
  {
    fields: {
      FaceSurface: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSURFACE,
      },
      SameSense: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCFACESURFACE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFACE,
    subTypes: [
       EntityTypesIfc.IFCADVANCEDFACE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcAirTerminalTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCAIRTERMINAL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINAL,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCFLOWTERMINAL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONFLOWELEMENT,
    subTypes: [
       EntityTypesIfc.IFCAIRTERMINAL,
       EntityTypesIfc.IFCAUDIOVISUALAPPLIANCE,
       EntityTypesIfc.IFCCOMMUNICATIONSAPPLIANCE,
       EntityTypesIfc.IFCELECTRICAPPLIANCE,
       EntityTypesIfc.IFCFIRESUPPRESSIONTERMINAL,
       EntityTypesIfc.IFCLAMP,
       EntityTypesIfc.IFCLIGHTFIXTURE,
       EntityTypesIfc.IFCMEDICALDEVICE,
       EntityTypesIfc.IFCOUTLET,
       EntityTypesIfc.IFCSANITARYTERMINAL,
       EntityTypesIfc.IFCSPACEHEATER,
       EntityTypesIfc.IFCSTACKTERMINAL,
       EntityTypesIfc.IFCWASTETERMINAL,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcAirTerminalBoxTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCAIRTERMINALBOX,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWCONTROLLER,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCFLOWCONTROLLER,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONFLOWELEMENT,
    subTypes: [
       EntityTypesIfc.IFCAIRTERMINALBOX,
       EntityTypesIfc.IFCDAMPER,
       EntityTypesIfc.IFCELECTRICDISTRIBUTIONBOARD,
       EntityTypesIfc.IFCELECTRICTIMECONTROL,
       EntityTypesIfc.IFCFLOWMETER,
       EntityTypesIfc.IFCPROTECTIVEDEVICE,
       EntityTypesIfc.IFCSWITCHINGDEVICE,
       EntityTypesIfc.IFCVALVE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcAirTerminalBoxTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCAIRTERMINALBOXTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWCONTROLLERTYPE,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCFLOWCONTROLLERTYPE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCDISTRIBUTIONFLOWELEMENTTYPE,
    subTypes: [
       EntityTypesIfc.IFCAIRTERMINALBOXTYPE,
       EntityTypesIfc.IFCDAMPERTYPE,
       EntityTypesIfc.IFCELECTRICDISTRIBUTIONBOARDTYPE,
       EntityTypesIfc.IFCELECTRICTIMECONTROLTYPE,
       EntityTypesIfc.IFCFLOWMETERTYPE,
       EntityTypesIfc.IFCPROTECTIVEDEVICETYPE,
       EntityTypesIfc.IFCSWITCHINGDEVICETYPE,
       EntityTypesIfc.IFCVALVETYPE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcAirTerminalTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCAIRTERMINALTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCFLOWTERMINALTYPE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCDISTRIBUTIONFLOWELEMENTTYPE,
    subTypes: [
       EntityTypesIfc.IFCAIRTERMINALTYPE,
       EntityTypesIfc.IFCAUDIOVISUALAPPLIANCETYPE,
       EntityTypesIfc.IFCCOMMUNICATIONSAPPLIANCETYPE,
       EntityTypesIfc.IFCELECTRICAPPLIANCETYPE,
       EntityTypesIfc.IFCFIRESUPPRESSIONTERMINALTYPE,
       EntityTypesIfc.IFCLAMPTYPE,
       EntityTypesIfc.IFCLIGHTFIXTURETYPE,
       EntityTypesIfc.IFCMEDICALDEVICETYPE,
       EntityTypesIfc.IFCOUTLETTYPE,
       EntityTypesIfc.IFCSANITARYTERMINALTYPE,
       EntityTypesIfc.IFCSPACEHEATERTYPE,
       EntityTypesIfc.IFCSTACKTERMINALTYPE,
       EntityTypesIfc.IFCWASTETERMINALTYPE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcAirToAirHeatRecoveryTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCAIRTOAIRHEATRECOVERY,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCENERGYCONVERSIONDEVICE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONFLOWELEMENT,
    subTypes: [
       EntityTypesIfc.IFCAIRTOAIRHEATRECOVERY,
       EntityTypesIfc.IFCBOILER,
       EntityTypesIfc.IFCBURNER,
       EntityTypesIfc.IFCCHILLER,
       EntityTypesIfc.IFCCOIL,
       EntityTypesIfc.IFCCONDENSER,
       EntityTypesIfc.IFCCOOLEDBEAM,
       EntityTypesIfc.IFCCOOLINGTOWER,
       EntityTypesIfc.IFCELECTRICGENERATOR,
       EntityTypesIfc.IFCELECTRICMOTOR,
       EntityTypesIfc.IFCENGINE,
       EntityTypesIfc.IFCEVAPORATIVECOOLER,
       EntityTypesIfc.IFCEVAPORATOR,
       EntityTypesIfc.IFCHEATEXCHANGER,
       EntityTypesIfc.IFCHUMIDIFIER,
       EntityTypesIfc.IFCMOTORCONNECTION,
       EntityTypesIfc.IFCSOLARDEVICE,
       EntityTypesIfc.IFCTRANSFORMER,
       EntityTypesIfc.IFCTUBEBUNDLE,
       EntityTypesIfc.IFCUNITARYEQUIPMENT,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcAirToAirHeatRecoveryTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCAIRTOAIRHEATRECOVERYTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCENERGYCONVERSIONDEVICETYPE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCDISTRIBUTIONFLOWELEMENTTYPE,
    subTypes: [
       EntityTypesIfc.IFCAIRTOAIRHEATRECOVERYTYPE,
       EntityTypesIfc.IFCBOILERTYPE,
       EntityTypesIfc.IFCBURNERTYPE,
       EntityTypesIfc.IFCCHILLERTYPE,
       EntityTypesIfc.IFCCOILTYPE,
       EntityTypesIfc.IFCCONDENSERTYPE,
       EntityTypesIfc.IFCCOOLEDBEAMTYPE,
       EntityTypesIfc.IFCCOOLINGTOWERTYPE,
       EntityTypesIfc.IFCELECTRICGENERATORTYPE,
       EntityTypesIfc.IFCELECTRICMOTORTYPE,
       EntityTypesIfc.IFCENGINETYPE,
       EntityTypesIfc.IFCEVAPORATIVECOOLERTYPE,
       EntityTypesIfc.IFCEVAPORATORTYPE,
       EntityTypesIfc.IFCHEATEXCHANGERTYPE,
       EntityTypesIfc.IFCHUMIDIFIERTYPE,
       EntityTypesIfc.IFCMOTORCONNECTIONTYPE,
       EntityTypesIfc.IFCSOLARDEVICETYPE,
       EntityTypesIfc.IFCTRANSFORMERTYPE,
       EntityTypesIfc.IFCTUBEBUNDLETYPE,
       EntityTypesIfc.IFCUNITARYEQUIPMENTTYPE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcAlarmTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCALARM,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONCONTROLELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcAlarmTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCALARMTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONCONTROLELEMENTTYPE,
  },
  {
    fields: {
      ContainedInStructure: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELCONTAINEDINSPATIALSTRUCTURE,
      },
    },
    typeId: EntityTypesIfc.IFCANNOTATION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPRODUCT,
  },
  {
    fields: {
      ObjectPlacement: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCOBJECTPLACEMENT,
      },
      Representation: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCPRODUCTREPRESENTATION,
      },
      ReferencedBy: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELASSIGNSTOPRODUCT,
      },
    },
    typeId: EntityTypesIfc.IFCPRODUCT,
    isAbstract: true,
    superType: EntityTypesIfc.IFCOBJECT,
    subTypes: [
       EntityTypesIfc.IFCANNOTATION,
       EntityTypesIfc.IFCELEMENT,
       EntityTypesIfc.IFCGRID,
       EntityTypesIfc.IFCPORT,
       EntityTypesIfc.IFCPROXY,
       EntityTypesIfc.IFCSPATIALELEMENT,
       EntityTypesIfc.IFCSTRUCTURALACTIVITY,
       EntityTypesIfc.IFCSTRUCTURALITEM,
    ],
  },
  {
    fields: {
      OuterBoundary: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCURVE,
      },
      InnerBoundaries: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCCURVE,
      },
    },
    typeId: EntityTypesIfc.IFCANNOTATIONFILLAREA,
    isAbstract: false,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
    isAbstract: true,
    superType: EntityTypesIfc.IFCREPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCANNOTATIONFILLAREA,
       EntityTypesIfc.IFCBOOLEANRESULT,
       EntityTypesIfc.IFCBOUNDINGBOX,
       EntityTypesIfc.IFCCARTESIANPOINTLIST,
       EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR,
       EntityTypesIfc.IFCCOMPOSITECURVESEGMENT,
       EntityTypesIfc.IFCCSGPRIMITIVE3D,
       EntityTypesIfc.IFCCURVE,
       EntityTypesIfc.IFCDIRECTION,
       EntityTypesIfc.IFCFACEBASEDSURFACEMODEL,
       EntityTypesIfc.IFCFILLAREASTYLEHATCHING,
       EntityTypesIfc.IFCFILLAREASTYLETILES,
       EntityTypesIfc.IFCGEOMETRICSET,
       EntityTypesIfc.IFCHALFSPACESOLID,
       EntityTypesIfc.IFCLIGHTSOURCE,
       EntityTypesIfc.IFCPLACEMENT,
       EntityTypesIfc.IFCPLANAREXTENT,
       EntityTypesIfc.IFCPOINT,
       EntityTypesIfc.IFCSECTIONEDSPINE,
       EntityTypesIfc.IFCSHELLBASEDSURFACEMODEL,
       EntityTypesIfc.IFCSOLIDMODEL,
       EntityTypesIfc.IFCSURFACE,
       EntityTypesIfc.IFCTESSELLATEDITEM,
       EntityTypesIfc.IFCTEXTLITERAL,
       EntityTypesIfc.IFCVECTOR,
    ],
  },
  {
    fields: {
      ApplicationDeveloper: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCORGANIZATION,
      },
      Version: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      ApplicationFullName: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      ApplicationIdentifier: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCAPPLICATION,
    isAbstract: false,
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      AppliedValue: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMEASUREWITHUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCREFERENCE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCACCELERATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREADENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCURVATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCENERGYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCILLUMINANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTORQUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPLEXNUMBER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOUNTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNUMERICMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPARAMETERVALUE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBINARY,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATETIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDURATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIDENTIFIER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLABEL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLOGICAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCREAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEXT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMESTAMP,
          },
        ],
      },
      UnitBasis: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCMEASUREWITHUNIT,
      },
      ApplicableDate: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      FixedUntilDate: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Category: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Condition: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ArithmeticOperator: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcArithmeticOperatorEnum,
      },
      Components: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCAPPLIEDVALUE,
      },
      HasExternalReference: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCEXTERNALREFERENCERELATIONSHIP,
      },
    },
    typeId: EntityTypesIfc.IFCAPPLIEDVALUE,
    isAbstract: false,
    subTypes: [
       EntityTypesIfc.IFCCOSTVALUE,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCCOSTVALUE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCAPPLIEDVALUE,
  },
  {
    fields: {
      Identifier: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      TimeOfApproval: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Status: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Level: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Qualifier: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      RequestingApproval: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCORGANIZATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSON,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSONANDORGANIZATION,
          },
        ],
      },
      GivingApproval: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCORGANIZATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSON,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSONANDORGANIZATION,
          },
        ],
      },
      HasExternalReferences: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCEXTERNALREFERENCERELATIONSHIP,
      },
      ApprovedObjects: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELASSOCIATESAPPROVAL,
      },
      ApprovedResources: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRESOURCEAPPROVALRELATIONSHIP,
      },
      IsRelatedWith: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCAPPROVALRELATIONSHIP,
      },
      Relates: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCAPPROVALRELATIONSHIP,
      },
    },
    typeId: EntityTypesIfc.IFCAPPROVAL,
    isAbstract: false,
  },
  {
    fields: {
      RelatingApproval: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCAPPROVAL,
      },
      RelatedApprovals: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCAPPROVAL,
      },
    },
    typeId: EntityTypesIfc.IFCAPPROVALRELATIONSHIP,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRESOURCELEVELRELATIONSHIP,
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCRESOURCELEVELRELATIONSHIP,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCAPPROVALRELATIONSHIP,
       EntityTypesIfc.IFCCURRENCYRELATIONSHIP,
       EntityTypesIfc.IFCDOCUMENTINFORMATIONRELATIONSHIP,
       EntityTypesIfc.IFCEXTERNALREFERENCERELATIONSHIP,
       EntityTypesIfc.IFCMATERIALRELATIONSHIP,
       EntityTypesIfc.IFCORGANIZATIONRELATIONSHIP,
       EntityTypesIfc.IFCPROPERTYDEPENDENCYRELATIONSHIP,
       EntityTypesIfc.IFCRESOURCEAPPROVALRELATIONSHIP,
       EntityTypesIfc.IFCRESOURCECONSTRAINTRELATIONSHIP,
    ],
  },
  {
    fields: {
      OuterCurve: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCURVE,
      },
    },
    typeId: EntityTypesIfc.IFCARBITRARYCLOSEDPROFILEDEF,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPROFILEDEF,
    subTypes: [
       EntityTypesIfc.IFCARBITRARYPROFILEDEFWITHVOIDS,
    ],
  },
  {
    fields: {
      InnerCurves: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCURVE,
      },
    },
    typeId: EntityTypesIfc.IFCARBITRARYPROFILEDEFWITHVOIDS,
    isAbstract: false,
    superType: EntityTypesIfc.IFCARBITRARYCLOSEDPROFILEDEF,
  },
  {
    fields: {
      ProfileType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcProfileTypeEnum,
      },
      ProfileName: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      HasExternalReference: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCEXTERNALREFERENCERELATIONSHIP,
      },
      HasProperties: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPROFILEPROPERTIES,
      },
    },
    typeId: EntityTypesIfc.IFCPROFILEDEF,
    isAbstract: false,
    subTypes: [
       EntityTypesIfc.IFCARBITRARYCLOSEDPROFILEDEF,
       EntityTypesIfc.IFCARBITRARYOPENPROFILEDEF,
       EntityTypesIfc.IFCCOMPOSITEPROFILEDEF,
       EntityTypesIfc.IFCDERIVEDPROFILEDEF,
       EntityTypesIfc.IFCPARAMETERIZEDPROFILEDEF,
    ],
  },
  {
    fields: {
      Curve: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCBOUNDEDCURVE,
      },
    },
    typeId: EntityTypesIfc.IFCARBITRARYOPENPROFILEDEF,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPROFILEDEF,
    subTypes: [
       EntityTypesIfc.IFCCENTERLINEPROFILEDEF,
    ],
  },
  {
    fields: {
      Thickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCCENTERLINEPROFILEDEF,
    isAbstract: false,
    superType: EntityTypesIfc.IFCARBITRARYOPENPROFILEDEF,
  },
  {
    fields: {
      Identification: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      OriginalValue: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCCOSTVALUE,
      },
      CurrentValue: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCCOSTVALUE,
      },
      TotalReplacementCost: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCCOSTVALUE,
      },
      Owner: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCORGANIZATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSON,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSONANDORGANIZATION,
          },
        ],
      },
      User: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCORGANIZATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSON,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSONANDORGANIZATION,
          },
        ],
      },
      ResponsiblePerson: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCPERSON,
      },
      IncorporationDate: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      DepreciatedValue: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCCOSTVALUE,
      },
    },
    typeId: EntityTypesIfc.IFCASSET,
    isAbstract: false,
    superType: EntityTypesIfc.IFCGROUP,
  },
  {
    fields: {
      IsGroupedBy: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELASSIGNSTOGROUP,
      },
    },
    typeId: EntityTypesIfc.IFCGROUP,
    isAbstract: false,
    superType: EntityTypesIfc.IFCOBJECT,
    subTypes: [
       EntityTypesIfc.IFCASSET,
       EntityTypesIfc.IFCINVENTORY,
       EntityTypesIfc.IFCSTRUCTURALLOADGROUP,
       EntityTypesIfc.IFCSTRUCTURALRESULTGROUP,
       EntityTypesIfc.IFCSYSTEM,
    ],
  },
  {
    fields: {
      BottomFlangeWidth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      OverallDepth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      WebThickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      BottomFlangeThickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      BottomFlangeFilletRadius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      TopFlangeWidth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      TopFlangeThickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      TopFlangeFilletRadius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      BottomFlangeEdgeRadius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      BottomFlangeSlope: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      TopFlangeEdgeRadius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      TopFlangeSlope: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCASYMMETRICISHAPEPROFILEDEF,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPARAMETERIZEDPROFILEDEF,
  },
  {
    fields: {
      Position: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCAXIS2PLACEMENT2D,
      },
    },
    typeId: EntityTypesIfc.IFCPARAMETERIZEDPROFILEDEF,
    isAbstract: true,
    superType: EntityTypesIfc.IFCPROFILEDEF,
    subTypes: [
       EntityTypesIfc.IFCASYMMETRICISHAPEPROFILEDEF,
       EntityTypesIfc.IFCCSHAPEPROFILEDEF,
       EntityTypesIfc.IFCCIRCLEPROFILEDEF,
       EntityTypesIfc.IFCELLIPSEPROFILEDEF,
       EntityTypesIfc.IFCISHAPEPROFILEDEF,
       EntityTypesIfc.IFCLSHAPEPROFILEDEF,
       EntityTypesIfc.IFCRECTANGLEPROFILEDEF,
       EntityTypesIfc.IFCTSHAPEPROFILEDEF,
       EntityTypesIfc.IFCTRAPEZIUMPROFILEDEF,
       EntityTypesIfc.IFCUSHAPEPROFILEDEF,
       EntityTypesIfc.IFCZSHAPEPROFILEDEF,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcAudioVisualApplianceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCAUDIOVISUALAPPLIANCE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINAL,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcAudioVisualApplianceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCAUDIOVISUALAPPLIANCETYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
      Axis: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCDIRECTION,
      },
      Z: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: true,
        type: EntityTypesIfc.IFCDIRECTION,
      },
    },
    typeId: EntityTypesIfc.IFCAXIS1PLACEMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPLACEMENT,
  },
  {
    fields: {
      Location: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCARTESIANPOINT,
      },
      Dim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCPLACEMENT,
    isAbstract: true,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCAXIS1PLACEMENT,
       EntityTypesIfc.IFCAXIS2PLACEMENT2D,
       EntityTypesIfc.IFCAXIS2PLACEMENT3D,
    ],
  },
  {
    fields: {
      RefDirection: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCDIRECTION,
      },
      P: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: true,
        type: EntityTypesIfc.IFCDIRECTION,
      },
    },
    typeId: EntityTypesIfc.IFCAXIS2PLACEMENT2D,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPLACEMENT,
  },
  {
    fields: {
      Axis: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCDIRECTION,
      },
      RefDirection: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCDIRECTION,
      },
      P: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: true,
        type: EntityTypesIfc.IFCDIRECTION,
      },
    },
    typeId: EntityTypesIfc.IFCAXIS2PLACEMENT3D,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPLACEMENT,
  },
  {
    fields: {
      Degree: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      ControlPointsList: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCARTESIANPOINT,
      },
      CurveForm: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcBSplineCurveForm,
      },
      ClosedCurve: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: false,
      },
      SelfIntersect: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: false,
      },
      UpperIndexOnControlPoints: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
      ControlPoints: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: true,
        type: EntityTypesIfc.IFCCARTESIANPOINT,
      },
    },
    typeId: EntityTypesIfc.IFCBSPLINECURVE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCBOUNDEDCURVE,
    subTypes: [
       EntityTypesIfc.IFCBSPLINECURVEWITHKNOTS,
    ],
  },
  {
    fields: {
      KnotMultiplicities: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
      },
      Knots: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
      },
      KnotSpec: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcKnotType,
      },
      UpperIndexOnKnots: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCBSPLINECURVEWITHKNOTS,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBSPLINECURVE,
    subTypes: [
       EntityTypesIfc.IFCRATIONALBSPLINECURVEWITHKNOTS,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCBOUNDEDCURVE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCCURVE,
    subTypes: [
       EntityTypesIfc.IFCBSPLINECURVE,
       EntityTypesIfc.IFCCOMPOSITECURVE,
       EntityTypesIfc.IFCINDEXEDPOLYCURVE,
       EntityTypesIfc.IFCPOLYLINE,
       EntityTypesIfc.IFCTRIMMEDCURVE,
    ],
  },
  {
    fields: {
      WeightsData: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
      },
      Weights: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCRATIONALBSPLINECURVEWITHKNOTS,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBSPLINECURVEWITHKNOTS,
  },
  {
    fields: {
      UDegree: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      VDegree: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      ControlPointsList: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 2,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCARTESIANPOINT,
      },
      SurfaceForm: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcBSplineSurfaceForm,
      },
      UClosed: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: false,
      },
      VClosed: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: false,
      },
      SelfIntersect: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: false,
      },
      UUpper: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
      VUpper: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
      ControlPoints: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 2,
        optional: false,
        derived: true,
        type: EntityTypesIfc.IFCCARTESIANPOINT,
      },
    },
    typeId: EntityTypesIfc.IFCBSPLINESURFACE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCBOUNDEDSURFACE,
    subTypes: [
       EntityTypesIfc.IFCBSPLINESURFACEWITHKNOTS,
    ],
  },
  {
    fields: {
      UMultiplicities: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
      },
      VMultiplicities: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
      },
      UKnots: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
      },
      VKnots: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
      },
      KnotSpec: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcKnotType,
      },
      KnotVUpper: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
      KnotUUpper: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCBSPLINESURFACEWITHKNOTS,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBSPLINESURFACE,
    subTypes: [
       EntityTypesIfc.IFCRATIONALBSPLINESURFACEWITHKNOTS,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCBOUNDEDSURFACE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCSURFACE,
    subTypes: [
       EntityTypesIfc.IFCBSPLINESURFACE,
       EntityTypesIfc.IFCCURVEBOUNDEDPLANE,
       EntityTypesIfc.IFCCURVEBOUNDEDSURFACE,
       EntityTypesIfc.IFCRECTANGULARTRIMMEDSURFACE,
    ],
  },
  {
    fields: {
      WeightsData: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 2,
        optional: false,
        derived: false,
      },
      Weights: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 2,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCRATIONALBSPLINESURFACEWITHKNOTS,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBSPLINESURFACEWITHKNOTS,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcBeamTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCBEAM,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENT,
    subTypes: [
       EntityTypesIfc.IFCBEAMSTANDARDCASE,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCBEAMSTANDARDCASE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBEAM,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCBUILDINGELEMENT,
    isAbstract: true,
    superType: EntityTypesIfc.IFCELEMENT,
    subTypes: [
       EntityTypesIfc.IFCBEAM,
       EntityTypesIfc.IFCBUILDINGELEMENTPROXY,
       EntityTypesIfc.IFCCHIMNEY,
       EntityTypesIfc.IFCCOLUMN,
       EntityTypesIfc.IFCCOVERING,
       EntityTypesIfc.IFCCURTAINWALL,
       EntityTypesIfc.IFCDOOR,
       EntityTypesIfc.IFCFOOTING,
       EntityTypesIfc.IFCMEMBER,
       EntityTypesIfc.IFCPILE,
       EntityTypesIfc.IFCPLATE,
       EntityTypesIfc.IFCRAILING,
       EntityTypesIfc.IFCRAMP,
       EntityTypesIfc.IFCRAMPFLIGHT,
       EntityTypesIfc.IFCROOF,
       EntityTypesIfc.IFCSHADINGDEVICE,
       EntityTypesIfc.IFCSLAB,
       EntityTypesIfc.IFCSTAIR,
       EntityTypesIfc.IFCSTAIRFLIGHT,
       EntityTypesIfc.IFCWALL,
       EntityTypesIfc.IFCWINDOW,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcBeamTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCBEAMTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCBUILDINGELEMENTTYPE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCELEMENTTYPE,
    subTypes: [
       EntityTypesIfc.IFCBEAMTYPE,
       EntityTypesIfc.IFCBUILDINGELEMENTPROXYTYPE,
       EntityTypesIfc.IFCCHIMNEYTYPE,
       EntityTypesIfc.IFCCOLUMNTYPE,
       EntityTypesIfc.IFCCOVERINGTYPE,
       EntityTypesIfc.IFCCURTAINWALLTYPE,
       EntityTypesIfc.IFCDOORTYPE,
       EntityTypesIfc.IFCFOOTINGTYPE,
       EntityTypesIfc.IFCMEMBERTYPE,
       EntityTypesIfc.IFCPILETYPE,
       EntityTypesIfc.IFCPLATETYPE,
       EntityTypesIfc.IFCRAILINGTYPE,
       EntityTypesIfc.IFCRAMPFLIGHTTYPE,
       EntityTypesIfc.IFCRAMPTYPE,
       EntityTypesIfc.IFCROOFTYPE,
       EntityTypesIfc.IFCSHADINGDEVICETYPE,
       EntityTypesIfc.IFCSLABTYPE,
       EntityTypesIfc.IFCSTAIRFLIGHTTYPE,
       EntityTypesIfc.IFCSTAIRTYPE,
       EntityTypesIfc.IFCWALLTYPE,
       EntityTypesIfc.IFCWINDOWTYPE,
    ],
  },
  {
    fields: {
      RasterFormat: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      RasterCode: {
        kind: FieldDescriptionKind.BINARY_DATA,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCBLOBTEXTURE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSURFACETEXTURE,
  },
  {
    fields: {
      RepeatS: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: false,
        derived: false,
      },
      RepeatT: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: false,
        derived: false,
      },
      Mode: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      TextureTransform: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR2D,
      },
      Parameter: {
        kind: FieldDescriptionKind.STRING,
        rank: 1,
        optional: true,
        derived: false,
      },
      IsMappedBy: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCTEXTURECOORDINATE,
      },
      UsedInStyles: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSURFACESTYLEWITHTEXTURES,
      },
    },
    typeId: EntityTypesIfc.IFCSURFACETEXTURE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCBLOBTEXTURE,
       EntityTypesIfc.IFCIMAGETEXTURE,
       EntityTypesIfc.IFCPIXELTEXTURE,
    ],
  },
  {
    fields: {
      XLength: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      YLength: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      ZLength: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCBLOCK,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCSGPRIMITIVE3D,
  },
  {
    fields: {
      Position: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCAXIS2PLACEMENT3D,
      },
      Dim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCCSGPRIMITIVE3D,
    isAbstract: true,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCBLOCK,
       EntityTypesIfc.IFCRECTANGULARPYRAMID,
       EntityTypesIfc.IFCRIGHTCIRCULARCONE,
       EntityTypesIfc.IFCRIGHTCIRCULARCYLINDER,
       EntityTypesIfc.IFCSPHERE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcBoilerTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCBOILER,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcBoilerTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCBOILERTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCBOOLEANCLIPPINGRESULT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBOOLEANRESULT,
  },
  {
    fields: {
      Operator: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcBooleanOperator,
      },
      FirstOperand: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEANRESULT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCSGPRIMITIVE3D,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHALFSPACESOLID,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOLIDMODEL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTESSELLATEDFACESET,
          },
        ],
      },
      SecondOperand: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEANRESULT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCSGPRIMITIVE3D,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHALFSPACESOLID,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOLIDMODEL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTESSELLATEDFACESET,
          },
        ],
      },
      Dim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCBOOLEANRESULT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCBOOLEANCLIPPINGRESULT,
    ],
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCBOUNDARYCONDITION,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCBOUNDARYEDGECONDITION,
       EntityTypesIfc.IFCBOUNDARYFACECONDITION,
       EntityTypesIfc.IFCBOUNDARYNODECONDITION,
    ],
  },
  {
    fields: {
      TranslationalStiffnessByLengthX: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
        ],
      },
      TranslationalStiffnessByLengthY: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
        ],
      },
      TranslationalStiffnessByLengthZ: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
        ],
      },
      RotationalStiffnessByLengthX: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
        ],
      },
      RotationalStiffnessByLengthY: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
        ],
      },
      RotationalStiffnessByLengthZ: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCBOUNDARYEDGECONDITION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBOUNDARYCONDITION,
  },
  {
    fields: {
      TranslationalStiffnessByAreaX: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
        ],
      },
      TranslationalStiffnessByAreaY: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
        ],
      },
      TranslationalStiffnessByAreaZ: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCBOUNDARYFACECONDITION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBOUNDARYCONDITION,
  },
  {
    fields: {
      TranslationalStiffnessX: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARSTIFFNESSMEASURE,
          },
        ],
      },
      TranslationalStiffnessY: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARSTIFFNESSMEASURE,
          },
        ],
      },
      TranslationalStiffnessZ: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARSTIFFNESSMEASURE,
          },
        ],
      },
      RotationalStiffnessX: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALSTIFFNESSMEASURE,
          },
        ],
      },
      RotationalStiffnessY: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALSTIFFNESSMEASURE,
          },
        ],
      },
      RotationalStiffnessZ: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALSTIFFNESSMEASURE,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCBOUNDARYNODECONDITION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBOUNDARYCONDITION,
    subTypes: [
       EntityTypesIfc.IFCBOUNDARYNODECONDITIONWARPING,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCBOUNDARYCURVE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCOMPOSITECURVEONSURFACE,
    subTypes: [
       EntityTypesIfc.IFCOUTERBOUNDARYCURVE,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCOUTERBOUNDARYCURVE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBOUNDARYCURVE,
  },
  {
    fields: {
      BasisSurface: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: true,
        type: EntityTypesIfc.IFCSURFACE,
      },
    },
    typeId: EntityTypesIfc.IFCCOMPOSITECURVEONSURFACE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCOMPOSITECURVE,
    subTypes: [
       EntityTypesIfc.IFCBOUNDARYCURVE,
    ],
  },
  {
    fields: {
      WarpingStiffness: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGMOMENTMEASURE,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCBOUNDARYNODECONDITIONWARPING,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBOUNDARYNODECONDITION,
  },
  {
    fields: {
      Segments: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCOMPOSITECURVESEGMENT,
      },
      SelfIntersect: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: false,
      },
      NSegments: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
      ClosedCurve: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCCOMPOSITECURVE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBOUNDEDCURVE,
    subTypes: [
       EntityTypesIfc.IFCCOMPOSITECURVEONSURFACE,
    ],
  },
  {
    fields: {
      Points: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCARTESIANPOINTLIST,
      },
      Segments: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCARCINDEX,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEINDEX,
          },
        ],
      },
      SelfIntersect: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCINDEXEDPOLYCURVE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBOUNDEDCURVE,
  },
  {
    fields: {
      Points: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCARTESIANPOINT,
      },
    },
    typeId: EntityTypesIfc.IFCPOLYLINE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBOUNDEDCURVE,
  },
  {
    fields: {
      BasisCurve: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCURVE,
      },
      Trim1: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCARTESIANPOINT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPARAMETERVALUE,
          },
        ],
      },
      Trim2: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCARTESIANPOINT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPARAMETERVALUE,
          },
        ],
      },
      SenseAgreement: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: false,
        derived: false,
      },
      MasterRepresentation: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcTrimmingPreference,
      },
    },
    typeId: EntityTypesIfc.IFCTRIMMEDCURVE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBOUNDEDCURVE,
  },
  {
    fields: {
      Dim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCCURVE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCBOUNDEDCURVE,
       EntityTypesIfc.IFCCONIC,
       EntityTypesIfc.IFCLINE,
       EntityTypesIfc.IFCOFFSETCURVE2D,
       EntityTypesIfc.IFCOFFSETCURVE3D,
       EntityTypesIfc.IFCPCURVE,
       EntityTypesIfc.IFCSURFACECURVE,
    ],
  },
  {
    fields: {
      BasisSurface: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPLANE,
      },
      OuterBoundary: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCURVE,
      },
      InnerBoundaries: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCURVE,
      },
    },
    typeId: EntityTypesIfc.IFCCURVEBOUNDEDPLANE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBOUNDEDSURFACE,
  },
  {
    fields: {
      BasisSurface: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSURFACE,
      },
      Boundaries: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCBOUNDARYCURVE,
      },
      ImplicitOuter: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCCURVEBOUNDEDSURFACE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBOUNDEDSURFACE,
  },
  {
    fields: {
      BasisSurface: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSURFACE,
      },
      U1: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      V1: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      U2: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      V2: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      Usense: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: false,
        derived: false,
      },
      Vsense: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCRECTANGULARTRIMMEDSURFACE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBOUNDEDSURFACE,
  },
  {
    fields: {
      Dim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCSURFACE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCBOUNDEDSURFACE,
       EntityTypesIfc.IFCELEMENTARYSURFACE,
       EntityTypesIfc.IFCSWEPTSURFACE,
    ],
  },
  {
    fields: {
      Corner: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCARTESIANPOINT,
      },
      XDim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      YDim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      ZDim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      Dim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCBOUNDINGBOX,
    isAbstract: false,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
  },
  {
    fields: {
      Enclosure: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCBOUNDINGBOX,
      },
    },
    typeId: EntityTypesIfc.IFCBOXEDHALFSPACE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCHALFSPACESOLID,
  },
  {
    fields: {
      BaseSurface: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSURFACE,
      },
      AgreementFlag: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: false,
        derived: false,
      },
      Dim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCHALFSPACESOLID,
    isAbstract: false,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCBOXEDHALFSPACE,
       EntityTypesIfc.IFCPOLYGONALBOUNDEDHALFSPACE,
    ],
  },
  {
    fields: {
      ElevationOfRefHeight: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      ElevationOfTerrain: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      BuildingAddress: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCPOSTALADDRESS,
      },
    },
    typeId: EntityTypesIfc.IFCBUILDING,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSPATIALSTRUCTUREELEMENT,
  },
  {
    fields: {
      CompositionType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcElementCompositionEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSPATIALSTRUCTUREELEMENT,
    isAbstract: true,
    superType: EntityTypesIfc.IFCSPATIALELEMENT,
    subTypes: [
       EntityTypesIfc.IFCBUILDING,
       EntityTypesIfc.IFCBUILDINGSTOREY,
       EntityTypesIfc.IFCSITE,
       EntityTypesIfc.IFCSPACE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcBuildingElementProxyTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCBUILDINGELEMENTPROXY,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcChimneyTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCHIMNEY,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcColumnTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCOLUMN,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENT,
    subTypes: [
       EntityTypesIfc.IFCCOLUMNSTANDARDCASE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcCoveringTypeEnum,
      },
      CoversSpaces: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELCOVERSSPACES,
      },
      CoversElements: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELCOVERSBLDGELEMENTS,
      },
    },
    typeId: EntityTypesIfc.IFCCOVERING,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcCurtainWallTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCURTAINWALL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      OverallHeight: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      OverallWidth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcDoorTypeEnum,
      },
      OperationType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcDoorTypeOperationEnum,
      },
      UserDefinedOperationType: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCDOOR,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENT,
    subTypes: [
       EntityTypesIfc.IFCDOORSTANDARDCASE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcFootingTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCFOOTING,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcMemberTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCMEMBER,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENT,
    subTypes: [
       EntityTypesIfc.IFCMEMBERSTANDARDCASE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcPileTypeEnum,
      },
      ConstructionType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcPileConstructionEnum,
      },
    },
    typeId: EntityTypesIfc.IFCPILE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcPlateTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCPLATE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENT,
    subTypes: [
       EntityTypesIfc.IFCPLATESTANDARDCASE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcRailingTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCRAILING,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcRampTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCRAMP,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcRampFlightTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCRAMPFLIGHT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcRoofTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCROOF,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcShadingDeviceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSHADINGDEVICE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcSlabTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSLAB,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENT,
    subTypes: [
       EntityTypesIfc.IFCSLABELEMENTEDCASE,
       EntityTypesIfc.IFCSLABSTANDARDCASE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcStairTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSTAIR,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      NumberOfRisers: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      NumberOfTreads: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      RiserHeight: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      TreadLength: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcStairFlightTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSTAIRFLIGHT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcWallTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCWALL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENT,
    subTypes: [
       EntityTypesIfc.IFCWALLELEMENTEDCASE,
       EntityTypesIfc.IFCWALLSTANDARDCASE,
    ],
  },
  {
    fields: {
      OverallHeight: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      OverallWidth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcWindowTypeEnum,
      },
      PartitioningType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcWindowTypePartitioningEnum,
      },
      UserDefinedPartitioningType: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCWINDOW,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENT,
    subTypes: [
       EntityTypesIfc.IFCWINDOWSTANDARDCASE,
    ],
  },
  {
    fields: {
      Tag: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      FillsVoids: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELFILLSELEMENT,
      },
      ConnectedTo: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELCONNECTSELEMENTS,
      },
      IsInterferedByElements: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELINTERFERESELEMENTS,
      },
      InterferesElements: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELINTERFERESELEMENTS,
      },
      HasProjections: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELPROJECTSELEMENT,
      },
      ReferencedInStructures: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELREFERENCEDINSPATIALSTRUCTURE,
      },
      HasOpenings: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELVOIDSELEMENT,
      },
      IsConnectionRealization: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELCONNECTSWITHREALIZINGELEMENTS,
      },
      ProvidesBoundaries: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELSPACEBOUNDARY,
      },
      ConnectedFrom: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELCONNECTSELEMENTS,
      },
      ContainedInStructure: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELCONTAINEDINSPATIALSTRUCTURE,
      },
      HasCoverings: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELCOVERSBLDGELEMENTS,
      },
    },
    typeId: EntityTypesIfc.IFCELEMENT,
    isAbstract: true,
    superType: EntityTypesIfc.IFCPRODUCT,
    subTypes: [
       EntityTypesIfc.IFCBUILDINGELEMENT,
       EntityTypesIfc.IFCCIVILELEMENT,
       EntityTypesIfc.IFCDISTRIBUTIONELEMENT,
       EntityTypesIfc.IFCELEMENTASSEMBLY,
       EntityTypesIfc.IFCELEMENTCOMPONENT,
       EntityTypesIfc.IFCFEATUREELEMENT,
       EntityTypesIfc.IFCFURNISHINGELEMENT,
       EntityTypesIfc.IFCGEOGRAPHICELEMENT,
       EntityTypesIfc.IFCTRANSPORTELEMENT,
       EntityTypesIfc.IFCVIRTUALELEMENT,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcBuildingElementPartTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCBUILDINGELEMENTPART,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENTCOMPONENT,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCELEMENTCOMPONENT,
    isAbstract: true,
    superType: EntityTypesIfc.IFCELEMENT,
    subTypes: [
       EntityTypesIfc.IFCBUILDINGELEMENTPART,
       EntityTypesIfc.IFCDISCRETEACCESSORY,
       EntityTypesIfc.IFCFASTENER,
       EntityTypesIfc.IFCMECHANICALFASTENER,
       EntityTypesIfc.IFCREINFORCINGELEMENT,
       EntityTypesIfc.IFCVIBRATIONISOLATOR,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcBuildingElementPartTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCBUILDINGELEMENTPARTTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENTCOMPONENTTYPE,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCELEMENTCOMPONENTTYPE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCELEMENTTYPE,
    subTypes: [
       EntityTypesIfc.IFCBUILDINGELEMENTPARTTYPE,
       EntityTypesIfc.IFCDISCRETEACCESSORYTYPE,
       EntityTypesIfc.IFCFASTENERTYPE,
       EntityTypesIfc.IFCMECHANICALFASTENERTYPE,
       EntityTypesIfc.IFCREINFORCINGELEMENTTYPE,
       EntityTypesIfc.IFCVIBRATIONISOLATORTYPE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcBuildingElementProxyTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCBUILDINGELEMENTPROXYTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcChimneyTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCHIMNEYTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcColumnTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCOLUMNTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcCoveringTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCOVERINGTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcCurtainWallTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCURTAINWALLTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcDoorTypeEnum,
      },
      OperationType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcDoorTypeOperationEnum,
      },
      ParameterTakesPrecedence: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: false,
      },
      UserDefinedOperationType: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCDOORTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcFootingTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCFOOTINGTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcMemberTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCMEMBERTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcPileTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCPILETYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcPlateTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCPLATETYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcRailingTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCRAILINGTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcRampFlightTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCRAMPFLIGHTTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcRampTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCRAMPTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcRoofTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCROOFTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcShadingDeviceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSHADINGDEVICETYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcSlabTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSLABTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcStairFlightTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSTAIRFLIGHTTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcStairTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSTAIRTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcWallTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCWALLTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcWindowTypeEnum,
      },
      PartitioningType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcWindowTypePartitioningEnum,
      },
      ParameterTakesPrecedence: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: false,
      },
      UserDefinedPartitioningType: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCWINDOWTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      ElementType: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCELEMENTTYPE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCTYPEPRODUCT,
    subTypes: [
       EntityTypesIfc.IFCBUILDINGELEMENTTYPE,
       EntityTypesIfc.IFCCIVILELEMENTTYPE,
       EntityTypesIfc.IFCDISTRIBUTIONELEMENTTYPE,
       EntityTypesIfc.IFCELEMENTASSEMBLYTYPE,
       EntityTypesIfc.IFCELEMENTCOMPONENTTYPE,
       EntityTypesIfc.IFCFURNISHINGELEMENTTYPE,
       EntityTypesIfc.IFCGEOGRAPHICELEMENTTYPE,
       EntityTypesIfc.IFCTRANSPORTELEMENTTYPE,
    ],
  },
  {
    fields: {
      Elevation: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCBUILDINGSTOREY,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSPATIALSTRUCTUREELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcBuildingSystemTypeEnum,
      },
      LongName: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCBUILDINGSYSTEM,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSYSTEM,
  },
  {
    fields: {
      ServicesBuildings: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELSERVICESBUILDINGS,
      },
    },
    typeId: EntityTypesIfc.IFCSYSTEM,
    isAbstract: false,
    superType: EntityTypesIfc.IFCGROUP,
    subTypes: [
       EntityTypesIfc.IFCBUILDINGSYSTEM,
       EntityTypesIfc.IFCDISTRIBUTIONSYSTEM,
       EntityTypesIfc.IFCSTRUCTURALANALYSISMODEL,
       EntityTypesIfc.IFCZONE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcBurnerTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCBURNER,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcBurnerTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCBURNERTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      Depth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      Width: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      WallThickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      Girth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      InternalFilletRadius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCCSHAPEPROFILEDEF,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPARAMETERIZEDPROFILEDEF,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcCableCarrierFittingTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCABLECARRIERFITTING,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWFITTING,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCFLOWFITTING,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONFLOWELEMENT,
    subTypes: [
       EntityTypesIfc.IFCCABLECARRIERFITTING,
       EntityTypesIfc.IFCCABLEFITTING,
       EntityTypesIfc.IFCDUCTFITTING,
       EntityTypesIfc.IFCJUNCTIONBOX,
       EntityTypesIfc.IFCPIPEFITTING,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcCableCarrierFittingTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCABLECARRIERFITTINGTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWFITTINGTYPE,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCFLOWFITTINGTYPE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCDISTRIBUTIONFLOWELEMENTTYPE,
    subTypes: [
       EntityTypesIfc.IFCCABLECARRIERFITTINGTYPE,
       EntityTypesIfc.IFCCABLEFITTINGTYPE,
       EntityTypesIfc.IFCDUCTFITTINGTYPE,
       EntityTypesIfc.IFCJUNCTIONBOXTYPE,
       EntityTypesIfc.IFCPIPEFITTINGTYPE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcCableCarrierSegmentTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCABLECARRIERSEGMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWSEGMENT,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCFLOWSEGMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONFLOWELEMENT,
    subTypes: [
       EntityTypesIfc.IFCCABLECARRIERSEGMENT,
       EntityTypesIfc.IFCCABLESEGMENT,
       EntityTypesIfc.IFCDUCTSEGMENT,
       EntityTypesIfc.IFCPIPESEGMENT,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcCableCarrierSegmentTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCABLECARRIERSEGMENTTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWSEGMENTTYPE,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCFLOWSEGMENTTYPE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCDISTRIBUTIONFLOWELEMENTTYPE,
    subTypes: [
       EntityTypesIfc.IFCCABLECARRIERSEGMENTTYPE,
       EntityTypesIfc.IFCCABLESEGMENTTYPE,
       EntityTypesIfc.IFCDUCTSEGMENTTYPE,
       EntityTypesIfc.IFCPIPESEGMENTTYPE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcCableFittingTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCABLEFITTING,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWFITTING,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcCableFittingTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCABLEFITTINGTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWFITTINGTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcCableSegmentTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCABLESEGMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWSEGMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcCableSegmentTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCABLESEGMENTTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWSEGMENTTYPE,
  },
  {
    fields: {
      Coordinates: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
      },
      Dim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCCARTESIANPOINT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPOINT,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCPOINT,
    isAbstract: true,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCCARTESIANPOINT,
       EntityTypesIfc.IFCPOINTONCURVE,
       EntityTypesIfc.IFCPOINTONSURFACE,
    ],
  },
  {
    fields: {
      Dim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCCARTESIANPOINTLIST,
    isAbstract: true,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCCARTESIANPOINTLIST2D,
       EntityTypesIfc.IFCCARTESIANPOINTLIST3D,
    ],
  },
  {
    fields: {
      CoordList: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 2,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCCARTESIANPOINTLIST2D,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCARTESIANPOINTLIST,
  },
  {
    fields: {
      CoordList: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 2,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCCARTESIANPOINTLIST3D,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCARTESIANPOINTLIST,
  },
  {
    fields: {
      Axis1: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCDIRECTION,
      },
      Axis2: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCDIRECTION,
      },
      LocalOrigin: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCARTESIANPOINT,
      },
      Scale: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      Scl: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
      Dim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR,
    isAbstract: true,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR2D,
       EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR3D,
    ],
  },
  {
    fields: {
      U: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: true,
        type: EntityTypesIfc.IFCDIRECTION,
      },
    },
    typeId: EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR2D,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR,
    subTypes: [
       EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR2DNONUNIFORM,
    ],
  },
  {
    fields: {
      Axis3: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCDIRECTION,
      },
      U: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: true,
        type: EntityTypesIfc.IFCDIRECTION,
      },
    },
    typeId: EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR3D,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR,
    subTypes: [
       EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR3DNONUNIFORM,
    ],
  },
  {
    fields: {
      Scale2: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      Scl2: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR2DNONUNIFORM,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR2D,
  },
  {
    fields: {
      Scale2: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      Scale3: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      Scl2: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
      Scl3: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR3DNONUNIFORM,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR3D,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcChillerTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCHILLER,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcChillerTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCHILLERTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      Radius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCCIRCLE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONIC,
  },
  {
    fields: {
      Position: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAXIS2PLACEMENT2D,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAXIS2PLACEMENT3D,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCCONIC,
    isAbstract: true,
    superType: EntityTypesIfc.IFCCURVE,
    subTypes: [
       EntityTypesIfc.IFCCIRCLE,
       EntityTypesIfc.IFCELLIPSE,
    ],
  },
  {
    fields: {
      WallThickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCCIRCLEHOLLOWPROFILEDEF,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCIRCLEPROFILEDEF,
  },
  {
    fields: {
      Radius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCCIRCLEPROFILEDEF,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPARAMETERIZEDPROFILEDEF,
    subTypes: [
       EntityTypesIfc.IFCCIRCLEHOLLOWPROFILEDEF,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCCIVILELEMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENT,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCCIVILELEMENTTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENTTYPE,
  },
  {
    fields: {
      Source: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Edition: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      EditionDate: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Location: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ReferenceTokens: {
        kind: FieldDescriptionKind.STRING,
        rank: 1,
        optional: true,
        derived: false,
      },
      ClassificationForObjects: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELASSOCIATESCLASSIFICATION,
      },
      HasReferences: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCLASSIFICATIONREFERENCE,
      },
    },
    typeId: EntityTypesIfc.IFCCLASSIFICATION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCEXTERNALINFORMATION,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCEXTERNALINFORMATION,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCCLASSIFICATION,
       EntityTypesIfc.IFCDOCUMENTINFORMATION,
       EntityTypesIfc.IFCLIBRARYINFORMATION,
    ],
  },
  {
    fields: {
      ReferencedSource: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCLASSIFICATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCLASSIFICATIONREFERENCE,
          },
        ],
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Sort: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ClassificationRefForObjects: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELASSOCIATESCLASSIFICATION,
      },
      HasReferences: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCLASSIFICATIONREFERENCE,
      },
    },
    typeId: EntityTypesIfc.IFCCLASSIFICATIONREFERENCE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCEXTERNALREFERENCE,
  },
  {
    fields: {
      Location: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Identification: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ExternalReferenceForResources: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCEXTERNALREFERENCERELATIONSHIP,
      },
    },
    typeId: EntityTypesIfc.IFCEXTERNALREFERENCE,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCCLASSIFICATIONREFERENCE,
       EntityTypesIfc.IFCDOCUMENTREFERENCE,
       EntityTypesIfc.IFCEXTERNALLYDEFINEDHATCHSTYLE,
       EntityTypesIfc.IFCEXTERNALLYDEFINEDSURFACESTYLE,
       EntityTypesIfc.IFCEXTERNALLYDEFINEDTEXTFONT,
       EntityTypesIfc.IFCLIBRARYREFERENCE,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCCLOSEDSHELL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONNECTEDFACESET,
  },
  {
    fields: {
      CfsFaces: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCFACE,
      },
    },
    typeId: EntityTypesIfc.IFCCONNECTEDFACESET,
    isAbstract: false,
    superType: EntityTypesIfc.IFCTOPOLOGICALREPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCCLOSEDSHELL,
       EntityTypesIfc.IFCOPENSHELL,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcCoilTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCOIL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcCoilTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCOILTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      Red: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      Green: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      Blue: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCCOLOURRGB,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCOLOURSPECIFICATION,
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCCOLOURSPECIFICATION,
    isAbstract: true,
    superType: EntityTypesIfc.IFCPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCCOLOURRGB,
    ],
  },
  {
    fields: {
      ColourList: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 2,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCCOLOURRGBLIST,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPRESENTATIONITEM,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCPRESENTATIONITEM,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCCOLOURRGBLIST,
       EntityTypesIfc.IFCCOLOURSPECIFICATION,
       EntityTypesIfc.IFCCURVESTYLEFONT,
       EntityTypesIfc.IFCCURVESTYLEFONTANDSCALING,
       EntityTypesIfc.IFCCURVESTYLEFONTPATTERN,
       EntityTypesIfc.IFCINDEXEDCOLOURMAP,
       EntityTypesIfc.IFCPREDEFINEDITEM,
       EntityTypesIfc.IFCSURFACESTYLELIGHTING,
       EntityTypesIfc.IFCSURFACESTYLEREFRACTION,
       EntityTypesIfc.IFCSURFACESTYLESHADING,
       EntityTypesIfc.IFCSURFACESTYLEWITHTEXTURES,
       EntityTypesIfc.IFCSURFACETEXTURE,
       EntityTypesIfc.IFCTEXTSTYLEFORDEFINEDFONT,
       EntityTypesIfc.IFCTEXTSTYLETEXTMODEL,
       EntityTypesIfc.IFCTEXTURECOORDINATE,
       EntityTypesIfc.IFCTEXTUREVERTEX,
       EntityTypesIfc.IFCTEXTUREVERTEXLIST,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCCOLUMNSTANDARDCASE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCOLUMN,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcCommunicationsApplianceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCOMMUNICATIONSAPPLIANCE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINAL,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcCommunicationsApplianceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCOMMUNICATIONSAPPLIANCETYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
      UsageName: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      HasProperties: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPROPERTY,
      },
    },
    typeId: EntityTypesIfc.IFCCOMPLEXPROPERTY,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPROPERTY,
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      PartOfPset: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPROPERTYSET,
      },
      PropertyForDependance: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPROPERTYDEPENDENCYRELATIONSHIP,
      },
      PropertyDependsOn: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPROPERTYDEPENDENCYRELATIONSHIP,
      },
      PartOfComplex: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCOMPLEXPROPERTY,
      },
      HasConstraints: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRESOURCECONSTRAINTRELATIONSHIP,
      },
      HasApprovals: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRESOURCEAPPROVALRELATIONSHIP,
      },
    },
    typeId: EntityTypesIfc.IFCPROPERTY,
    isAbstract: true,
    superType: EntityTypesIfc.IFCPROPERTYABSTRACTION,
    subTypes: [
       EntityTypesIfc.IFCCOMPLEXPROPERTY,
       EntityTypesIfc.IFCSIMPLEPROPERTY,
    ],
  },
  {
    fields: {
      UsageName: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      TemplateType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcComplexPropertyTemplateTypeEnum,
      },
      HasPropertyTemplates: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCPROPERTYTEMPLATE,
      },
    },
    typeId: EntityTypesIfc.IFCCOMPLEXPROPERTYTEMPLATE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPROPERTYTEMPLATE,
  },
  {
    fields: {
      PartOfComplexTemplate: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCOMPLEXPROPERTYTEMPLATE,
      },
      PartOfPsetTemplate: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPROPERTYSETTEMPLATE,
      },
    },
    typeId: EntityTypesIfc.IFCPROPERTYTEMPLATE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCPROPERTYTEMPLATEDEFINITION,
    subTypes: [
       EntityTypesIfc.IFCCOMPLEXPROPERTYTEMPLATE,
       EntityTypesIfc.IFCSIMPLEPROPERTYTEMPLATE,
    ],
  },
  {
    fields: {
      Transition: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcTransitionCode,
      },
      SameSense: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: false,
        derived: false,
      },
      ParentCurve: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCURVE,
      },
      Dim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
      UsingCurves: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCOMPOSITECURVE,
      },
    },
    typeId: EntityTypesIfc.IFCCOMPOSITECURVESEGMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCREPARAMETRISEDCOMPOSITECURVESEGMENT,
    ],
  },
  {
    fields: {
      ParamLength: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCREPARAMETRISEDCOMPOSITECURVESEGMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCOMPOSITECURVESEGMENT,
  },
  {
    fields: {
      Profiles: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPROFILEDEF,
      },
      Label: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCCOMPOSITEPROFILEDEF,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPROFILEDEF,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcCompressorTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCOMPRESSOR,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWMOVINGDEVICE,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCFLOWMOVINGDEVICE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONFLOWELEMENT,
    subTypes: [
       EntityTypesIfc.IFCCOMPRESSOR,
       EntityTypesIfc.IFCFAN,
       EntityTypesIfc.IFCPUMP,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcCompressorTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCOMPRESSORTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWMOVINGDEVICETYPE,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCFLOWMOVINGDEVICETYPE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCDISTRIBUTIONFLOWELEMENTTYPE,
    subTypes: [
       EntityTypesIfc.IFCCOMPRESSORTYPE,
       EntityTypesIfc.IFCFANTYPE,
       EntityTypesIfc.IFCPUMPTYPE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcCondenserTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCONDENSER,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcCondenserTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCONDENSERTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      SemiAxis1: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      SemiAxis2: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCELLIPSE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONIC,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCOPENSHELL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONNECTEDFACESET,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCTOPOLOGICALREPRESENTATIONITEM,
    isAbstract: true,
    superType: EntityTypesIfc.IFCREPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCCONNECTEDFACESET,
       EntityTypesIfc.IFCEDGE,
       EntityTypesIfc.IFCFACE,
       EntityTypesIfc.IFCFACEBOUND,
       EntityTypesIfc.IFCLOOP,
       EntityTypesIfc.IFCPATH,
       EntityTypesIfc.IFCVERTEX,
    ],
  },
  {
    fields: {
      CurveOnRelatingElement: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOUNDEDCURVE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCEDGECURVE,
          },
        ],
      },
      CurveOnRelatedElement: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOUNDEDCURVE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCEDGECURVE,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCCONNECTIONCURVEGEOMETRY,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONNECTIONGEOMETRY,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCCONNECTIONGEOMETRY,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCCONNECTIONCURVEGEOMETRY,
       EntityTypesIfc.IFCCONNECTIONPOINTGEOMETRY,
       EntityTypesIfc.IFCCONNECTIONSURFACEGEOMETRY,
       EntityTypesIfc.IFCCONNECTIONVOLUMEGEOMETRY,
    ],
  },
  {
    fields: {
      PointOnRelatingElement: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOINT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVERTEXPOINT,
          },
        ],
      },
      PointOnRelatedElement: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOINT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVERTEXPOINT,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCCONNECTIONPOINTGEOMETRY,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONNECTIONGEOMETRY,
    subTypes: [
       EntityTypesIfc.IFCCONNECTIONPOINTECCENTRICITY,
    ],
  },
  {
    fields: {
      SurfaceOnRelatingElement: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFACEBASEDSURFACEMODEL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFACESURFACE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSURFACE,
          },
        ],
      },
      SurfaceOnRelatedElement: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFACEBASEDSURFACEMODEL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFACESURFACE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSURFACE,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCCONNECTIONSURFACEGEOMETRY,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONNECTIONGEOMETRY,
  },
  {
    fields: {
      VolumeOnRelatingElement: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCLOSEDSHELL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOLIDMODEL,
          },
        ],
      },
      VolumeOnRelatedElement: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCLOSEDSHELL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOLIDMODEL,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCCONNECTIONVOLUMEGEOMETRY,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONNECTIONGEOMETRY,
  },
  {
    fields: {
      EccentricityInX: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      EccentricityInY: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      EccentricityInZ: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCCONNECTIONPOINTECCENTRICITY,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONNECTIONPOINTGEOMETRY,
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ConstraintGrade: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcConstraintEnum,
      },
      ConstraintSource: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      CreatingActor: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCORGANIZATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSON,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSONANDORGANIZATION,
          },
        ],
      },
      CreationTime: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      UserDefinedGrade: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      HasExternalReferences: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCEXTERNALREFERENCERELATIONSHIP,
      },
      PropertiesForConstraint: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRESOURCECONSTRAINTRELATIONSHIP,
      },
    },
    typeId: EntityTypesIfc.IFCCONSTRAINT,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCMETRIC,
       EntityTypesIfc.IFCOBJECTIVE,
    ],
  },
  {
    fields: {
      Benchmark: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcBenchmarkEnum,
      },
      ValueSource: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      DataValue: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAPPLIEDVALUE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMEASUREWITHUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCREFERENCE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTABLE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMESERIES,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCACCELERATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREADENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCURVATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCENERGYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCILLUMINANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTORQUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPLEXNUMBER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOUNTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNUMERICMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPARAMETERVALUE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBINARY,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATETIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDURATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIDENTIFIER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLABEL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLOGICAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCREAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEXT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMESTAMP,
          },
        ],
      },
      ReferencePath: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCREFERENCE,
      },
    },
    typeId: EntityTypesIfc.IFCMETRIC,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONSTRAINT,
  },
  {
    fields: {
      BenchmarkValues: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCCONSTRAINT,
      },
      LogicalAggregator: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcLogicalOperatorEnum,
      },
      ObjectiveQualifier: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcObjectiveEnum,
      },
      UserDefinedQualifier: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCOBJECTIVE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONSTRAINT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcConstructionEquipmentResourceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCONSTRUCTIONEQUIPMENTRESOURCE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONSTRUCTIONRESOURCE,
  },
  {
    fields: {
      Usage: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCRESOURCETIME,
      },
      BaseCosts: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCAPPLIEDVALUE,
      },
      BaseQuantity: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCPHYSICALQUANTITY,
      },
    },
    typeId: EntityTypesIfc.IFCCONSTRUCTIONRESOURCE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCRESOURCE,
    subTypes: [
       EntityTypesIfc.IFCCONSTRUCTIONEQUIPMENTRESOURCE,
       EntityTypesIfc.IFCCONSTRUCTIONMATERIALRESOURCE,
       EntityTypesIfc.IFCCONSTRUCTIONPRODUCTRESOURCE,
       EntityTypesIfc.IFCCREWRESOURCE,
       EntityTypesIfc.IFCLABORRESOURCE,
       EntityTypesIfc.IFCSUBCONTRACTRESOURCE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcConstructionEquipmentResourceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCONSTRUCTIONEQUIPMENTRESOURCETYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONSTRUCTIONRESOURCETYPE,
  },
  {
    fields: {
      BaseCosts: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCAPPLIEDVALUE,
      },
      BaseQuantity: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCPHYSICALQUANTITY,
      },
    },
    typeId: EntityTypesIfc.IFCCONSTRUCTIONRESOURCETYPE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCTYPERESOURCE,
    subTypes: [
       EntityTypesIfc.IFCCONSTRUCTIONEQUIPMENTRESOURCETYPE,
       EntityTypesIfc.IFCCONSTRUCTIONMATERIALRESOURCETYPE,
       EntityTypesIfc.IFCCONSTRUCTIONPRODUCTRESOURCETYPE,
       EntityTypesIfc.IFCCREWRESOURCETYPE,
       EntityTypesIfc.IFCLABORRESOURCETYPE,
       EntityTypesIfc.IFCSUBCONTRACTRESOURCETYPE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcConstructionMaterialResourceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCONSTRUCTIONMATERIALRESOURCE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONSTRUCTIONRESOURCE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcConstructionMaterialResourceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCONSTRUCTIONMATERIALRESOURCETYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONSTRUCTIONRESOURCETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcConstructionProductResourceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCONSTRUCTIONPRODUCTRESOURCE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONSTRUCTIONRESOURCE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcConstructionProductResourceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCONSTRUCTIONPRODUCTRESOURCETYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONSTRUCTIONRESOURCETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcCrewResourceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCREWRESOURCE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONSTRUCTIONRESOURCE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcLaborResourceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCLABORRESOURCE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONSTRUCTIONRESOURCE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcSubContractResourceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSUBCONTRACTRESOURCE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONSTRUCTIONRESOURCE,
  },
  {
    fields: {
      Identification: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      LongDescription: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ResourceOf: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELASSIGNSTORESOURCE,
      },
    },
    typeId: EntityTypesIfc.IFCRESOURCE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCOBJECT,
    subTypes: [
       EntityTypesIfc.IFCCONSTRUCTIONRESOURCE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcCrewResourceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCREWRESOURCETYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONSTRUCTIONRESOURCETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcLaborResourceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCLABORRESOURCETYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONSTRUCTIONRESOURCETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcSubContractResourceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSUBCONTRACTRESOURCETYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONSTRUCTIONRESOURCETYPE,
  },
  {
    fields: {
      Identification: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      LongDescription: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ResourceType: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ResourceOf: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELASSIGNSTORESOURCE,
      },
    },
    typeId: EntityTypesIfc.IFCTYPERESOURCE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCTYPEOBJECT,
    subTypes: [
       EntityTypesIfc.IFCCONSTRUCTIONRESOURCETYPE,
    ],
  },
  {
    fields: {
      ObjectType: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      LongName: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Phase: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      RepresentationContexts: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCREPRESENTATIONCONTEXT,
      },
      UnitsInContext: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCUNITASSIGNMENT,
      },
      IsDefinedBy: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELDEFINESBYPROPERTIES,
      },
      Declares: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELDECLARES,
      },
    },
    typeId: EntityTypesIfc.IFCCONTEXT,
    isAbstract: true,
    superType: EntityTypesIfc.IFCOBJECTDEFINITION,
    subTypes: [
       EntityTypesIfc.IFCPROJECT,
       EntityTypesIfc.IFCPROJECTLIBRARY,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCPROJECT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONTEXT,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCPROJECTLIBRARY,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONTEXT,
  },
  {
    fields: {
      HasAssignments: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELASSIGNS,
      },
      Nests: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELNESTS,
      },
      IsNestedBy: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELNESTS,
      },
      HasContext: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELDECLARES,
      },
      IsDecomposedBy: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELAGGREGATES,
      },
      Decomposes: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELAGGREGATES,
      },
      HasAssociations: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELASSOCIATES,
      },
    },
    typeId: EntityTypesIfc.IFCOBJECTDEFINITION,
    isAbstract: true,
    superType: EntityTypesIfc.IFCROOT,
    subTypes: [
       EntityTypesIfc.IFCCONTEXT,
       EntityTypesIfc.IFCOBJECT,
       EntityTypesIfc.IFCTYPEOBJECT,
    ],
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      HasExternalReference: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCEXTERNALREFERENCERELATIONSHIP,
      },
    },
    typeId: EntityTypesIfc.IFCCONTEXTDEPENDENTUNIT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCNAMEDUNIT,
  },
  {
    fields: {
      Dimensions: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCDIMENSIONALEXPONENTS,
      },
      UnitType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcUnitEnum,
      },
    },
    typeId: EntityTypesIfc.IFCNAMEDUNIT,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCCONTEXTDEPENDENTUNIT,
       EntityTypesIfc.IFCCONVERSIONBASEDUNIT,
       EntityTypesIfc.IFCSIUNIT,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcCostItemTypeEnum,
      },
      CostValues: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCCOSTVALUE,
      },
      CostQuantities: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCPHYSICALQUANTITY,
      },
    },
    typeId: EntityTypesIfc.IFCCOSTITEM,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONTROL,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcCostScheduleTypeEnum,
      },
      Status: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      SubmittedOn: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      UpdateDate: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCCOSTSCHEDULE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONTROL,
  },
  {
    fields: {
      LifeCyclePhase: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcPerformanceHistoryTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCPERFORMANCEHISTORY,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONTROL,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcPermitTypeEnum,
      },
      Status: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      LongDescription: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCPERMIT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONTROL,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcProjectOrderTypeEnum,
      },
      Status: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      LongDescription: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCPROJECTORDER,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONTROL,
  },
  {
    fields: {
      WorkingTimes: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCWORKTIME,
      },
      ExceptionTimes: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCWORKTIME,
      },
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcWorkCalendarTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCWORKCALENDAR,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONTROL,
  },
  {
    fields: {
      CreationDate: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      Creators: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCPERSON,
      },
      Purpose: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Duration: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      TotalFloat: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      StartTime: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      FinishTime: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCWORKCONTROL,
    isAbstract: true,
    superType: EntityTypesIfc.IFCCONTROL,
    subTypes: [
       EntityTypesIfc.IFCWORKPLAN,
       EntityTypesIfc.IFCWORKSCHEDULE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcControllerTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCONTROLLER,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONCONTROLELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcControllerTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCONTROLLERTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONCONTROLELEMENTTYPE,
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      ConversionFactor: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCMEASUREWITHUNIT,
      },
      HasExternalReference: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCEXTERNALREFERENCERELATIONSHIP,
      },
    },
    typeId: EntityTypesIfc.IFCCONVERSIONBASEDUNIT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCNAMEDUNIT,
    subTypes: [
       EntityTypesIfc.IFCCONVERSIONBASEDUNITWITHOFFSET,
    ],
  },
  {
    fields: {
      ConversionOffset: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCCONVERSIONBASEDUNITWITHOFFSET,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCONVERSIONBASEDUNIT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcCooledBeamTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCOOLEDBEAM,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcCooledBeamTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCOOLEDBEAMTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcCoolingTowerTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCOOLINGTOWER,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcCoolingTowerTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCCOOLINGTOWERTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      SourceCRS: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOORDINATEREFERENCESYSTEM,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONCONTEXT,
          },
        ],
      },
      TargetCRS: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCOORDINATEREFERENCESYSTEM,
      },
    },
    typeId: EntityTypesIfc.IFCCOORDINATEOPERATION,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCMAPCONVERSION,
    ],
  },
  {
    fields: {
      Eastings: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      Northings: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      OrthogonalHeight: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      XAxisAbscissa: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      XAxisOrdinate: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      Scale: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCMAPCONVERSION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCOORDINATEOPERATION,
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      GeodeticDatum: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      VerticalDatum: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      HasCoordinateOperation: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCOORDINATEOPERATION,
      },
    },
    typeId: EntityTypesIfc.IFCCOORDINATEREFERENCESYSTEM,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCPROJECTEDCRS,
    ],
  },
  {
    fields: {
      MapProjection: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      MapZone: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      MapUnit: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCNAMEDUNIT,
      },
    },
    typeId: EntityTypesIfc.IFCPROJECTEDCRS,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCOORDINATEREFERENCESYSTEM,
  },
  {
    fields: {
      XLength: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      YLength: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      Height: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCRECTANGULARPYRAMID,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCSGPRIMITIVE3D,
  },
  {
    fields: {
      Height: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      BottomRadius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCRIGHTCIRCULARCONE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCSGPRIMITIVE3D,
  },
  {
    fields: {
      Height: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      Radius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCRIGHTCIRCULARCYLINDER,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCSGPRIMITIVE3D,
  },
  {
    fields: {
      Radius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSPHERE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCSGPRIMITIVE3D,
  },
  {
    fields: {
      TreeRootExpression: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEANRESULT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCSGPRIMITIVE3D,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCCSGSOLID,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSOLIDMODEL,
  },
  {
    fields: {
      Dim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCSOLIDMODEL,
    isAbstract: true,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCCSGSOLID,
       EntityTypesIfc.IFCMANIFOLDSOLIDBREP,
       EntityTypesIfc.IFCSWEPTAREASOLID,
       EntityTypesIfc.IFCSWEPTDISKSOLID,
    ],
  },
  {
    fields: {
      RelatingMonetaryUnit: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCMONETARYUNIT,
      },
      RelatedMonetaryUnit: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCMONETARYUNIT,
      },
      ExchangeRate: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      RateDateTime: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      RateSource: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCLIBRARYINFORMATION,
      },
    },
    typeId: EntityTypesIfc.IFCCURRENCYRELATIONSHIP,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRESOURCELEVELRELATIONSHIP,
  },
  {
    fields: {
      Pnt: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCARTESIANPOINT,
      },
      Dir: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCVECTOR,
      },
    },
    typeId: EntityTypesIfc.IFCLINE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCURVE,
  },
  {
    fields: {
      BasisCurve: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCURVE,
      },
      Distance: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      SelfIntersect: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCOFFSETCURVE2D,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCURVE,
  },
  {
    fields: {
      BasisCurve: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCURVE,
      },
      Distance: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      SelfIntersect: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: false,
      },
      RefDirection: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCDIRECTION,
      },
    },
    typeId: EntityTypesIfc.IFCOFFSETCURVE3D,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCURVE,
  },
  {
    fields: {
      BasisSurface: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSURFACE,
      },
      ReferenceCurve: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCURVE,
      },
    },
    typeId: EntityTypesIfc.IFCPCURVE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCURVE,
  },
  {
    fields: {
      Curve3D: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCURVE,
      },
      AssociatedGeometry: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPCURVE,
      },
      MasterRepresentation: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcPreferredSurfaceCurveRepresentation,
      },
      BasisSurface: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: true,
        type: EntityTypesIfc.IFCSURFACE,
      },
    },
    typeId: EntityTypesIfc.IFCSURFACECURVE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCCURVE,
    subTypes: [
       EntityTypesIfc.IFCINTERSECTIONCURVE,
       EntityTypesIfc.IFCSEAMCURVE,
    ],
  },
  {
    fields: {
      CurveFont: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCURVESTYLEFONTANDSCALING,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCURVESTYLEFONT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPREDEFINEDCURVEFONT,
          },
        ],
      },
      CurveWidth: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRATIOMEASURE,
          },
        ],
      },
      CurveColour: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOLOURSPECIFICATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPREDEFINEDCOLOUR,
          },
        ],
      },
      ModelOrDraughting: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCCURVESTYLE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPRESENTATIONSTYLE,
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCPRESENTATIONSTYLE,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCCURVESTYLE,
       EntityTypesIfc.IFCFILLAREASTYLE,
       EntityTypesIfc.IFCSURFACESTYLE,
       EntityTypesIfc.IFCTEXTSTYLE,
    ],
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      PatternList: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCURVESTYLEFONTPATTERN,
      },
    },
    typeId: EntityTypesIfc.IFCCURVESTYLEFONT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPRESENTATIONITEM,
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      CurveFont: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCURVESTYLEFONT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPREDEFINEDCURVEFONT,
          },
        ],
      },
      CurveFontScaling: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCCURVESTYLEFONTANDSCALING,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPRESENTATIONITEM,
  },
  {
    fields: {
      VisibleSegmentLength: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      InvisibleSegmentLength: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCCURVESTYLEFONTPATTERN,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPRESENTATIONITEM,
  },
  {
    fields: {
      Radius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCCYLINDRICALSURFACE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENTARYSURFACE,
  },
  {
    fields: {
      Position: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCAXIS2PLACEMENT3D,
      },
    },
    typeId: EntityTypesIfc.IFCELEMENTARYSURFACE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCSURFACE,
    subTypes: [
       EntityTypesIfc.IFCCYLINDRICALSURFACE,
       EntityTypesIfc.IFCPLANE,
       EntityTypesIfc.IFCSPHERICALSURFACE,
       EntityTypesIfc.IFCTOROIDALSURFACE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcDamperTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCDAMPER,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWCONTROLLER,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcDamperTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCDAMPERTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWCONTROLLERTYPE,
  },
  {
    fields: {
      ParentProfile: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPROFILEDEF,
      },
      Operator: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR2D,
      },
      Label: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCDERIVEDPROFILEDEF,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPROFILEDEF,
    subTypes: [
       EntityTypesIfc.IFCMIRROREDPROFILEDEF,
    ],
  },
  {
    fields: {
      Operator: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: true,
        type: EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR2D,
      },
    },
    typeId: EntityTypesIfc.IFCMIRROREDPROFILEDEF,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDERIVEDPROFILEDEF,
  },
  {
    fields: {
      Elements: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCDERIVEDUNITELEMENT,
      },
      UnitType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcDerivedUnitEnum,
      },
      UserDefinedType: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Dimensions: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: true,
        type: EntityTypesIfc.IFCDIMENSIONALEXPONENTS,
      },
    },
    typeId: EntityTypesIfc.IFCDERIVEDUNIT,
    isAbstract: false,
  },
  {
    fields: {
      Unit: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCNAMEDUNIT,
      },
      Exponent: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCDERIVEDUNITELEMENT,
    isAbstract: false,
  },
  {
    fields: {
      LengthExponent: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      MassExponent: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      TimeExponent: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      ElectricCurrentExponent: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      ThermodynamicTemperatureExponent: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      AmountOfSubstanceExponent: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      LuminousIntensityExponent: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCDIMENSIONALEXPONENTS,
    isAbstract: false,
  },
  {
    fields: {
      DirectionRatios: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
      },
      Dim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCDIRECTION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcDiscreteAccessoryTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCDISCRETEACCESSORY,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENTCOMPONENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcDiscreteAccessoryTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCDISCRETEACCESSORYTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENTCOMPONENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcDistributionChamberElementTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCDISTRIBUTIONCHAMBERELEMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONFLOWELEMENT,
  },
  {
    fields: {
      HasControlElements: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELFLOWCONTROLELEMENTS,
      },
    },
    typeId: EntityTypesIfc.IFCDISTRIBUTIONFLOWELEMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONELEMENT,
    subTypes: [
       EntityTypesIfc.IFCDISTRIBUTIONCHAMBERELEMENT,
       EntityTypesIfc.IFCENERGYCONVERSIONDEVICE,
       EntityTypesIfc.IFCFLOWCONTROLLER,
       EntityTypesIfc.IFCFLOWFITTING,
       EntityTypesIfc.IFCFLOWMOVINGDEVICE,
       EntityTypesIfc.IFCFLOWSEGMENT,
       EntityTypesIfc.IFCFLOWSTORAGEDEVICE,
       EntityTypesIfc.IFCFLOWTERMINAL,
       EntityTypesIfc.IFCFLOWTREATMENTDEVICE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcDistributionChamberElementTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCDISTRIBUTIONCHAMBERELEMENTTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONFLOWELEMENTTYPE,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCDISTRIBUTIONFLOWELEMENTTYPE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCDISTRIBUTIONELEMENTTYPE,
    subTypes: [
       EntityTypesIfc.IFCDISTRIBUTIONCHAMBERELEMENTTYPE,
       EntityTypesIfc.IFCENERGYCONVERSIONDEVICETYPE,
       EntityTypesIfc.IFCFLOWCONTROLLERTYPE,
       EntityTypesIfc.IFCFLOWFITTINGTYPE,
       EntityTypesIfc.IFCFLOWMOVINGDEVICETYPE,
       EntityTypesIfc.IFCFLOWSEGMENTTYPE,
       EntityTypesIfc.IFCFLOWSTORAGEDEVICETYPE,
       EntityTypesIfc.IFCFLOWTERMINALTYPE,
       EntityTypesIfc.IFCFLOWTREATMENTDEVICETYPE,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCDISTRIBUTIONCIRCUIT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONSYSTEM,
  },
  {
    fields: {
      LongName: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcDistributionSystemEnum,
      },
    },
    typeId: EntityTypesIfc.IFCDISTRIBUTIONSYSTEM,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSYSTEM,
    subTypes: [
       EntityTypesIfc.IFCDISTRIBUTIONCIRCUIT,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcFlowInstrumentTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCFLOWINSTRUMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONCONTROLELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcProtectiveDeviceTrippingUnitTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCPROTECTIVEDEVICETRIPPINGUNIT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONCONTROLELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcSensorTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSENSOR,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONCONTROLELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcUnitaryControlElementTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCUNITARYCONTROLELEMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONCONTROLELEMENT,
  },
  {
    fields: {
      HasPorts: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELCONNECTSPORTTOELEMENT,
      },
    },
    typeId: EntityTypesIfc.IFCDISTRIBUTIONELEMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENT,
    subTypes: [
       EntityTypesIfc.IFCDISTRIBUTIONCONTROLELEMENT,
       EntityTypesIfc.IFCDISTRIBUTIONFLOWELEMENT,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcFlowInstrumentTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCFLOWINSTRUMENTTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONCONTROLELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcProtectiveDeviceTrippingUnitTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCPROTECTIVEDEVICETRIPPINGUNITTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONCONTROLELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcSensorTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSENSORTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONCONTROLELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcUnitaryControlElementTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCUNITARYCONTROLELEMENTTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONCONTROLELEMENTTYPE,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCDISTRIBUTIONELEMENTTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENTTYPE,
    subTypes: [
       EntityTypesIfc.IFCDISTRIBUTIONCONTROLELEMENTTYPE,
       EntityTypesIfc.IFCDISTRIBUTIONFLOWELEMENTTYPE,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCFLOWSTORAGEDEVICE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONFLOWELEMENT,
    subTypes: [
       EntityTypesIfc.IFCELECTRICFLOWSTORAGEDEVICE,
       EntityTypesIfc.IFCTANK,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCFLOWTREATMENTDEVICE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDISTRIBUTIONFLOWELEMENT,
    subTypes: [
       EntityTypesIfc.IFCDUCTSILENCER,
       EntityTypesIfc.IFCFILTER,
       EntityTypesIfc.IFCINTERCEPTOR,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCFLOWSTORAGEDEVICETYPE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCDISTRIBUTIONFLOWELEMENTTYPE,
    subTypes: [
       EntityTypesIfc.IFCELECTRICFLOWSTORAGEDEVICETYPE,
       EntityTypesIfc.IFCTANKTYPE,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCFLOWTREATMENTDEVICETYPE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCDISTRIBUTIONFLOWELEMENTTYPE,
    subTypes: [
       EntityTypesIfc.IFCDUCTSILENCERTYPE,
       EntityTypesIfc.IFCFILTERTYPE,
       EntityTypesIfc.IFCINTERCEPTORTYPE,
    ],
  },
  {
    fields: {
      FlowDirection: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcFlowDirectionEnum,
      },
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcDistributionPortTypeEnum,
      },
      SystemType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcDistributionSystemEnum,
      },
    },
    typeId: EntityTypesIfc.IFCDISTRIBUTIONPORT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPORT,
  },
  {
    fields: {
      ContainedIn: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELCONNECTSPORTTOELEMENT,
      },
      ConnectedFrom: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELCONNECTSPORTS,
      },
      ConnectedTo: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELCONNECTSPORTS,
      },
    },
    typeId: EntityTypesIfc.IFCPORT,
    isAbstract: true,
    superType: EntityTypesIfc.IFCPRODUCT,
    subTypes: [
       EntityTypesIfc.IFCDISTRIBUTIONPORT,
    ],
  },
  {
    fields: {
      Identification: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Location: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Purpose: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      IntendedUse: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Scope: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Revision: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      DocumentOwner: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCORGANIZATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSON,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSONANDORGANIZATION,
          },
        ],
      },
      Editors: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCORGANIZATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSON,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSONANDORGANIZATION,
          },
        ],
      },
      CreationTime: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      LastRevisionTime: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ElectronicFormat: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ValidFrom: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ValidUntil: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Confidentiality: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcDocumentConfidentialityEnum,
      },
      Status: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcDocumentStatusEnum,
      },
      DocumentInfoForObjects: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELASSOCIATESDOCUMENT,
      },
      HasDocumentReferences: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCDOCUMENTREFERENCE,
      },
      IsPointedTo: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCDOCUMENTINFORMATIONRELATIONSHIP,
      },
      IsPointer: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCDOCUMENTINFORMATIONRELATIONSHIP,
      },
    },
    typeId: EntityTypesIfc.IFCDOCUMENTINFORMATION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCEXTERNALINFORMATION,
  },
  {
    fields: {
      RelatingDocument: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCDOCUMENTINFORMATION,
      },
      RelatedDocuments: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCDOCUMENTINFORMATION,
      },
      RelationshipType: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCDOCUMENTINFORMATIONRELATIONSHIP,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRESOURCELEVELRELATIONSHIP,
  },
  {
    fields: {
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ReferencedDocument: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCDOCUMENTINFORMATION,
      },
      DocumentRefForObjects: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELASSOCIATESDOCUMENT,
      },
    },
    typeId: EntityTypesIfc.IFCDOCUMENTREFERENCE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCEXTERNALREFERENCE,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCDOORSTANDARDCASE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCDOOR,
  },
  {
    fields: {
      LiningDepth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      LiningThickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      ThresholdDepth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      ThresholdThickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      TransomThickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      TransomOffset: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      LiningOffset: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      ThresholdOffset: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      CasingThickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      CasingDepth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      ShapeAspectStyle: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCSHAPEASPECT,
      },
      LiningToPanelOffsetX: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      LiningToPanelOffsetY: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCDOORLININGPROPERTIES,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPREDEFINEDPROPERTYSET,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCPREDEFINEDPROPERTYSET,
    isAbstract: true,
    superType: EntityTypesIfc.IFCPROPERTYSETDEFINITION,
    subTypes: [
       EntityTypesIfc.IFCDOORLININGPROPERTIES,
       EntityTypesIfc.IFCDOORPANELPROPERTIES,
       EntityTypesIfc.IFCPERMEABLECOVERINGPROPERTIES,
       EntityTypesIfc.IFCREINFORCEMENTDEFINITIONPROPERTIES,
       EntityTypesIfc.IFCWINDOWLININGPROPERTIES,
       EntityTypesIfc.IFCWINDOWPANELPROPERTIES,
    ],
  },
  {
    fields: {
      PanelDepth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      PanelOperation: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcDoorPanelOperationEnum,
      },
      PanelWidth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      PanelPosition: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcDoorPanelPositionEnum,
      },
      ShapeAspectStyle: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCSHAPEASPECT,
      },
    },
    typeId: EntityTypesIfc.IFCDOORPANELPROPERTIES,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPREDEFINEDPROPERTYSET,
  },
  {
    fields: {
      OperationType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcDoorStyleOperationEnum,
      },
      ConstructionType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcDoorStyleConstructionEnum,
      },
      ParameterTakesPrecedence: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: false,
        derived: false,
      },
      Sizeable: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCDOORSTYLE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCTYPEPRODUCT,
  },
  {
    fields: {
      RepresentationMaps: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCREPRESENTATIONMAP,
      },
      Tag: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ReferencedBy: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELASSIGNSTOPRODUCT,
      },
    },
    typeId: EntityTypesIfc.IFCTYPEPRODUCT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCTYPEOBJECT,
    subTypes: [
       EntityTypesIfc.IFCDOORSTYLE,
       EntityTypesIfc.IFCELEMENTTYPE,
       EntityTypesIfc.IFCSPATIALELEMENTTYPE,
       EntityTypesIfc.IFCWINDOWSTYLE,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCDRAUGHTINGPREDEFINEDCOLOUR,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPREDEFINEDCOLOUR,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCPREDEFINEDCOLOUR,
    isAbstract: true,
    superType: EntityTypesIfc.IFCPREDEFINEDITEM,
    subTypes: [
       EntityTypesIfc.IFCDRAUGHTINGPREDEFINEDCOLOUR,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCDRAUGHTINGPREDEFINEDCURVEFONT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPREDEFINEDCURVEFONT,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCPREDEFINEDCURVEFONT,
    isAbstract: true,
    superType: EntityTypesIfc.IFCPREDEFINEDITEM,
    subTypes: [
       EntityTypesIfc.IFCDRAUGHTINGPREDEFINEDCURVEFONT,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcDuctFittingTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCDUCTFITTING,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWFITTING,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcDuctFittingTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCDUCTFITTINGTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWFITTINGTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcDuctSegmentTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCDUCTSEGMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWSEGMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcDuctSegmentTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCDUCTSEGMENTTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWSEGMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcDuctSilencerTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCDUCTSILENCER,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTREATMENTDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcDuctSilencerTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCDUCTSILENCERTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTREATMENTDEVICETYPE,
  },
  {
    fields: {
      EdgeStart: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCVERTEX,
      },
      EdgeEnd: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCVERTEX,
      },
    },
    typeId: EntityTypesIfc.IFCEDGE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCTOPOLOGICALREPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCEDGECURVE,
       EntityTypesIfc.IFCORIENTEDEDGE,
       EntityTypesIfc.IFCSUBEDGE,
    ],
  },
  {
    fields: {
      EdgeGeometry: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCURVE,
      },
      SameSense: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCEDGECURVE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCEDGE,
  },
  {
    fields: {
      EdgeElement: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCEDGE,
      },
      Orientation: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: false,
        derived: false,
      },
      EdgeStart: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: true,
        type: EntityTypesIfc.IFCVERTEX,
      },
      EdgeEnd: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: true,
        type: EntityTypesIfc.IFCVERTEX,
      },
    },
    typeId: EntityTypesIfc.IFCORIENTEDEDGE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCEDGE,
  },
  {
    fields: {
      ParentEdge: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCEDGE,
      },
    },
    typeId: EntityTypesIfc.IFCSUBEDGE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCEDGE,
  },
  {
    fields: {
      EdgeList: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCORIENTEDEDGE,
      },
      Ne: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCEDGELOOP,
    isAbstract: false,
    superType: EntityTypesIfc.IFCLOOP,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCLOOP,
    isAbstract: false,
    superType: EntityTypesIfc.IFCTOPOLOGICALREPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCEDGELOOP,
       EntityTypesIfc.IFCPOLYLOOP,
       EntityTypesIfc.IFCVERTEXLOOP,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcElectricApplianceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCELECTRICAPPLIANCE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINAL,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcElectricApplianceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCELECTRICAPPLIANCETYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcElectricDistributionBoardTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCELECTRICDISTRIBUTIONBOARD,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWCONTROLLER,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcElectricDistributionBoardTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCELECTRICDISTRIBUTIONBOARDTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWCONTROLLERTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcElectricFlowStorageDeviceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCELECTRICFLOWSTORAGEDEVICE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWSTORAGEDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcElectricFlowStorageDeviceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCELECTRICFLOWSTORAGEDEVICETYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWSTORAGEDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcElectricGeneratorTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCELECTRICGENERATOR,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcElectricGeneratorTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCELECTRICGENERATORTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcElectricMotorTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCELECTRICMOTOR,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcElectricMotorTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCELECTRICMOTORTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcElectricTimeControlTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCELECTRICTIMECONTROL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWCONTROLLER,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcElectricTimeControlTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCELECTRICTIMECONTROLTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWCONTROLLERTYPE,
  },
  {
    fields: {
      AssemblyPlace: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcAssemblyPlaceEnum,
      },
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcElementAssemblyTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCELEMENTASSEMBLY,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENT,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCFEATUREELEMENT,
    isAbstract: true,
    superType: EntityTypesIfc.IFCELEMENT,
    subTypes: [
       EntityTypesIfc.IFCFEATUREELEMENTADDITION,
       EntityTypesIfc.IFCFEATUREELEMENTSUBTRACTION,
       EntityTypesIfc.IFCSURFACEFEATURE,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCFURNISHINGELEMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENT,
    subTypes: [
       EntityTypesIfc.IFCFURNITURE,
       EntityTypesIfc.IFCSYSTEMFURNITUREELEMENT,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcGeographicElementTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCGEOGRAPHICELEMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcTransportElementTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCTRANSPORTELEMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENT,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCVIRTUALELEMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcElementAssemblyTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCELEMENTASSEMBLYTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcFastenerTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCFASTENER,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENTCOMPONENT,
  },
  {
    fields: {
      NominalDiameter: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      NominalLength: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcMechanicalFastenerTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCMECHANICALFASTENER,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENTCOMPONENT,
  },
  {
    fields: {
      SteelGrade: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCREINFORCINGELEMENT,
    isAbstract: true,
    superType: EntityTypesIfc.IFCELEMENTCOMPONENT,
    subTypes: [
       EntityTypesIfc.IFCREINFORCINGBAR,
       EntityTypesIfc.IFCREINFORCINGMESH,
       EntityTypesIfc.IFCTENDON,
       EntityTypesIfc.IFCTENDONANCHOR,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcVibrationIsolatorTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCVIBRATIONISOLATOR,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENTCOMPONENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcFastenerTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCFASTENERTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENTCOMPONENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcMechanicalFastenerTypeEnum,
      },
      NominalDiameter: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      NominalLength: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCMECHANICALFASTENERTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENTCOMPONENTTYPE,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCREINFORCINGELEMENTTYPE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCELEMENTCOMPONENTTYPE,
    subTypes: [
       EntityTypesIfc.IFCREINFORCINGBARTYPE,
       EntityTypesIfc.IFCREINFORCINGMESHTYPE,
       EntityTypesIfc.IFCTENDONANCHORTYPE,
       EntityTypesIfc.IFCTENDONTYPE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcVibrationIsolatorTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCVIBRATIONISOLATORTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENTCOMPONENTTYPE,
  },
  {
    fields: {
      MethodOfMeasurement: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Quantities: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPHYSICALQUANTITY,
      },
    },
    typeId: EntityTypesIfc.IFCELEMENTQUANTITY,
    isAbstract: false,
    superType: EntityTypesIfc.IFCQUANTITYSET,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCQUANTITYSET,
    isAbstract: true,
    superType: EntityTypesIfc.IFCPROPERTYSETDEFINITION,
    subTypes: [
       EntityTypesIfc.IFCELEMENTQUANTITY,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCFURNISHINGELEMENTTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENTTYPE,
    subTypes: [
       EntityTypesIfc.IFCFURNITURETYPE,
       EntityTypesIfc.IFCSYSTEMFURNITUREELEMENTTYPE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcGeographicElementTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCGEOGRAPHICELEMENTTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcTransportElementTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCTRANSPORTELEMENTTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENTTYPE,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCPLANE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENTARYSURFACE,
  },
  {
    fields: {
      Radius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSPHERICALSURFACE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENTARYSURFACE,
  },
  {
    fields: {
      MajorRadius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      MinorRadius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCTOROIDALSURFACE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCELEMENTARYSURFACE,
  },
  {
    fields: {
      SemiAxis1: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      SemiAxis2: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCELLIPSEPROFILEDEF,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPARAMETERIZEDPROFILEDEF,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcEngineTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCENGINE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcEvaporativeCoolerTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCEVAPORATIVECOOLER,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcEvaporatorTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCEVAPORATOR,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcHeatExchangerTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCHEATEXCHANGER,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcHumidifierTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCHUMIDIFIER,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcMotorConnectionTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCMOTORCONNECTION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcSolarDeviceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSOLARDEVICE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcTransformerTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCTRANSFORMER,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcTubeBundleTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCTUBEBUNDLE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcUnitaryEquipmentTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCUNITARYEQUIPMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcEngineTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCENGINETYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcEvaporativeCoolerTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCEVAPORATIVECOOLERTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcEvaporatorTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCEVAPORATORTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcHeatExchangerTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCHEATEXCHANGERTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcHumidifierTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCHUMIDIFIERTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcMotorConnectionTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCMOTORCONNECTIONTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcSolarDeviceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSOLARDEVICETYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcTransformerTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCTRANSFORMERTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcTubeBundleTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCTUBEBUNDLETYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcUnitaryEquipmentTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCUNITARYEQUIPMENTTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcEventTypeEnum,
      },
      EventTriggerType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcEventTriggerTypeEnum,
      },
      UserDefinedEventTriggerType: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      EventOccurenceTime: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCEVENTTIME,
      },
    },
    typeId: EntityTypesIfc.IFCEVENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPROCESS,
  },
  {
    fields: {
      Identification: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      LongDescription: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      IsPredecessorTo: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELSEQUENCE,
      },
      IsSuccessorFrom: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELSEQUENCE,
      },
      OperatesOn: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELASSIGNSTOPROCESS,
      },
    },
    typeId: EntityTypesIfc.IFCPROCESS,
    isAbstract: true,
    superType: EntityTypesIfc.IFCOBJECT,
    subTypes: [
       EntityTypesIfc.IFCEVENT,
       EntityTypesIfc.IFCPROCEDURE,
       EntityTypesIfc.IFCTASK,
    ],
  },
  {
    fields: {
      ActualDate: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      EarlyDate: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      LateDate: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ScheduleDate: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCEVENTTIME,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSCHEDULINGTIME,
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      DataOrigin: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcDataOriginEnum,
      },
      UserDefinedDataOrigin: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSCHEDULINGTIME,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCEVENTTIME,
       EntityTypesIfc.IFCLAGTIME,
       EntityTypesIfc.IFCRESOURCETIME,
       EntityTypesIfc.IFCTASKTIME,
       EntityTypesIfc.IFCWORKTIME,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcEventTypeEnum,
      },
      EventTriggerType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcEventTriggerTypeEnum,
      },
      UserDefinedEventTriggerType: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCEVENTTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCTYPEPROCESS,
  },
  {
    fields: {
      Identification: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      LongDescription: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ProcessType: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      OperatesOn: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELASSIGNSTOPROCESS,
      },
    },
    typeId: EntityTypesIfc.IFCTYPEPROCESS,
    isAbstract: true,
    superType: EntityTypesIfc.IFCTYPEOBJECT,
    subTypes: [
       EntityTypesIfc.IFCEVENTTYPE,
       EntityTypesIfc.IFCPROCEDURETYPE,
       EntityTypesIfc.IFCTASKTYPE,
    ],
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Properties: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPROPERTY,
      },
    },
    typeId: EntityTypesIfc.IFCEXTENDEDPROPERTIES,
    isAbstract: true,
    superType: EntityTypesIfc.IFCPROPERTYABSTRACTION,
    subTypes: [
       EntityTypesIfc.IFCMATERIALPROPERTIES,
       EntityTypesIfc.IFCPROFILEPROPERTIES,
    ],
  },
  {
    fields: {
      Material: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCMATERIALDEFINITION,
      },
    },
    typeId: EntityTypesIfc.IFCMATERIALPROPERTIES,
    isAbstract: false,
    superType: EntityTypesIfc.IFCEXTENDEDPROPERTIES,
  },
  {
    fields: {
      ProfileDefinition: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPROFILEDEF,
      },
    },
    typeId: EntityTypesIfc.IFCPROFILEPROPERTIES,
    isAbstract: false,
    superType: EntityTypesIfc.IFCEXTENDEDPROPERTIES,
  },
  {
    fields: {
      HasExternalReferences: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCEXTERNALREFERENCERELATIONSHIP,
      },
    },
    typeId: EntityTypesIfc.IFCPROPERTYABSTRACTION,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCEXTENDEDPROPERTIES,
       EntityTypesIfc.IFCPREDEFINEDPROPERTIES,
       EntityTypesIfc.IFCPROPERTY,
       EntityTypesIfc.IFCPROPERTYENUMERATION,
    ],
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      Version: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Publisher: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCORGANIZATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSON,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSONANDORGANIZATION,
          },
        ],
      },
      VersionDate: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Location: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      LibraryInfoForObjects: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELASSOCIATESLIBRARY,
      },
      HasLibraryReferences: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCLIBRARYREFERENCE,
      },
    },
    typeId: EntityTypesIfc.IFCLIBRARYINFORMATION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCEXTERNALINFORMATION,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCEXTERNALLYDEFINEDHATCHSTYLE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCEXTERNALREFERENCE,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCEXTERNALLYDEFINEDSURFACESTYLE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCEXTERNALREFERENCE,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCEXTERNALLYDEFINEDTEXTFONT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCEXTERNALREFERENCE,
  },
  {
    fields: {
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Language: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ReferencedLibrary: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCLIBRARYINFORMATION,
      },
      LibraryRefForObjects: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELASSOCIATESLIBRARY,
      },
    },
    typeId: EntityTypesIfc.IFCLIBRARYREFERENCE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCEXTERNALREFERENCE,
  },
  {
    fields: {
      RelatingReference: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCEXTERNALREFERENCE,
      },
      RelatedResourceObjects: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCACTORROLE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAPPLIEDVALUE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAPPROVAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCONSTRAINT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCONTEXTDEPENDENTUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCONVERSIONBASEDUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCEXTERNALINFORMATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCEXTERNALREFERENCE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMATERIALDEFINITION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCORGANIZATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSON,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSONANDORGANIZATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPHYSICALQUANTITY,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPROFILEDEF,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPROPERTYABSTRACTION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMESERIES,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCEXTERNALREFERENCERELATIONSHIP,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRESOURCELEVELRELATIONSHIP,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcExternalSpatialElementTypeEnum,
      },
      BoundedBy: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELSPACEBOUNDARY,
      },
    },
    typeId: EntityTypesIfc.IFCEXTERNALSPATIALELEMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCEXTERNALSPATIALSTRUCTUREELEMENT,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCEXTERNALSPATIALSTRUCTUREELEMENT,
    isAbstract: true,
    superType: EntityTypesIfc.IFCSPATIALELEMENT,
    subTypes: [
       EntityTypesIfc.IFCEXTERNALSPATIALELEMENT,
    ],
  },
  {
    fields: {
      LongName: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ContainsElements: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELCONTAINEDINSPATIALSTRUCTURE,
      },
      ServicedBySystems: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELSERVICESBUILDINGS,
      },
      ReferencesElements: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELREFERENCEDINSPATIALSTRUCTURE,
      },
    },
    typeId: EntityTypesIfc.IFCSPATIALELEMENT,
    isAbstract: true,
    superType: EntityTypesIfc.IFCPRODUCT,
    subTypes: [
       EntityTypesIfc.IFCEXTERNALSPATIALSTRUCTUREELEMENT,
       EntityTypesIfc.IFCSPATIALSTRUCTUREELEMENT,
       EntityTypesIfc.IFCSPATIALZONE,
    ],
  },
  {
    fields: {
      ExtrudedDirection: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCDIRECTION,
      },
      Depth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCEXTRUDEDAREASOLID,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSWEPTAREASOLID,
    subTypes: [
       EntityTypesIfc.IFCEXTRUDEDAREASOLIDTAPERED,
    ],
  },
  {
    fields: {
      EndSweptArea: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPROFILEDEF,
      },
    },
    typeId: EntityTypesIfc.IFCEXTRUDEDAREASOLIDTAPERED,
    isAbstract: false,
    superType: EntityTypesIfc.IFCEXTRUDEDAREASOLID,
  },
  {
    fields: {
      SweptArea: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPROFILEDEF,
      },
      Position: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCAXIS2PLACEMENT3D,
      },
    },
    typeId: EntityTypesIfc.IFCSWEPTAREASOLID,
    isAbstract: true,
    superType: EntityTypesIfc.IFCSOLIDMODEL,
    subTypes: [
       EntityTypesIfc.IFCEXTRUDEDAREASOLID,
       EntityTypesIfc.IFCFIXEDREFERENCESWEPTAREASOLID,
       EntityTypesIfc.IFCREVOLVEDAREASOLID,
       EntityTypesIfc.IFCSURFACECURVESWEPTAREASOLID,
    ],
  },
  {
    fields: {
      Bounds: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCFACEBOUND,
      },
      HasTextureMaps: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCTEXTUREMAP,
      },
    },
    typeId: EntityTypesIfc.IFCFACE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCTOPOLOGICALREPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCFACESURFACE,
    ],
  },
  {
    fields: {
      FbsmFaces: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCONNECTEDFACESET,
      },
      Dim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCFACEBASEDSURFACEMODEL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
  },
  {
    fields: {
      Bound: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCLOOP,
      },
      Orientation: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCFACEBOUND,
    isAbstract: false,
    superType: EntityTypesIfc.IFCTOPOLOGICALREPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCFACEOUTERBOUND,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCFACEOUTERBOUND,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFACEBOUND,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCFACETEDBREP,
    isAbstract: false,
    superType: EntityTypesIfc.IFCMANIFOLDSOLIDBREP,
    subTypes: [
       EntityTypesIfc.IFCFACETEDBREPWITHVOIDS,
    ],
  },
  {
    fields: {
      Voids: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCLOSEDSHELL,
      },
    },
    typeId: EntityTypesIfc.IFCFACETEDBREPWITHVOIDS,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFACETEDBREP,
  },
  {
    fields: {
      TensionFailureX: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      TensionFailureY: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      TensionFailureZ: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      CompressionFailureX: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      CompressionFailureY: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      CompressionFailureZ: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCFAILURECONNECTIONCONDITION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALCONNECTIONCONDITION,
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALCONNECTIONCONDITION,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCFAILURECONNECTIONCONDITION,
       EntityTypesIfc.IFCSLIPPAGECONNECTIONCONDITION,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcFanTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCFAN,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWMOVINGDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcFanTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCFANTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWMOVINGDEVICETYPE,
  },
  {
    fields: {
      ProjectsElements: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELPROJECTSELEMENT,
      },
    },
    typeId: EntityTypesIfc.IFCFEATUREELEMENTADDITION,
    isAbstract: true,
    superType: EntityTypesIfc.IFCFEATUREELEMENT,
    subTypes: [
       EntityTypesIfc.IFCPROJECTIONELEMENT,
    ],
  },
  {
    fields: {
      VoidsElements: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELVOIDSELEMENT,
      },
    },
    typeId: EntityTypesIfc.IFCFEATUREELEMENTSUBTRACTION,
    isAbstract: true,
    superType: EntityTypesIfc.IFCFEATUREELEMENT,
    subTypes: [
       EntityTypesIfc.IFCOPENINGELEMENT,
       EntityTypesIfc.IFCVOIDINGFEATURE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcSurfaceFeatureTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSURFACEFEATURE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFEATUREELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcProjectionElementTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCPROJECTIONELEMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFEATUREELEMENTADDITION,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcOpeningElementTypeEnum,
      },
      HasFillings: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELFILLSELEMENT,
      },
    },
    typeId: EntityTypesIfc.IFCOPENINGELEMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFEATUREELEMENTSUBTRACTION,
    subTypes: [
       EntityTypesIfc.IFCOPENINGSTANDARDCASE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcVoidingFeatureTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCVOIDINGFEATURE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFEATUREELEMENTSUBTRACTION,
  },
  {
    fields: {
      FillStyles: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOLOURSPECIFICATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPREDEFINEDCOLOUR,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCEXTERNALLYDEFINEDHATCHSTYLE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFILLAREASTYLEHATCHING,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFILLAREASTYLETILES,
          },
        ],
      },
      ModelorDraughting: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCFILLAREASTYLE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPRESENTATIONSTYLE,
  },
  {
    fields: {
      HatchLineAppearance: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCURVESTYLE,
      },
      StartOfNextHatchLine: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVECTOR,
          },
        ],
      },
      PointOfReferenceHatchLine: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCCARTESIANPOINT,
      },
      PatternStart: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCCARTESIANPOINT,
      },
      HatchLineAngle: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCFILLAREASTYLEHATCHING,
    isAbstract: false,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
  },
  {
    fields: {
      TilingPattern: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCVECTOR,
      },
      Tiles: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSTYLEDITEM,
      },
      TilingScale: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCFILLAREASTYLETILES,
    isAbstract: false,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcFilterTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCFILTER,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTREATMENTDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcFilterTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCFILTERTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTREATMENTDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcFireSuppressionTerminalTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCFIRESUPPRESSIONTERMINAL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINAL,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcFireSuppressionTerminalTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCFIRESUPPRESSIONTERMINALTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
      Directrix: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCURVE,
      },
      StartParam: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      EndParam: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      FixedReference: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCDIRECTION,
      },
    },
    typeId: EntityTypesIfc.IFCFIXEDREFERENCESWEPTAREASOLID,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSWEPTAREASOLID,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcFlowMeterTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCFLOWMETER,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWCONTROLLER,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcProtectiveDeviceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCPROTECTIVEDEVICE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWCONTROLLER,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcSwitchingDeviceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSWITCHINGDEVICE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWCONTROLLER,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcValveTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCVALVE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWCONTROLLER,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcFlowMeterTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCFLOWMETERTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWCONTROLLERTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcProtectiveDeviceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCPROTECTIVEDEVICETYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWCONTROLLERTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcSwitchingDeviceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSWITCHINGDEVICETYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWCONTROLLERTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcValveTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCVALVETYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWCONTROLLERTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcJunctionBoxTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCJUNCTIONBOX,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWFITTING,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcPipeFittingTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCPIPEFITTING,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWFITTING,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcJunctionBoxTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCJUNCTIONBOXTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWFITTINGTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcPipeFittingTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCPIPEFITTINGTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWFITTINGTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcPumpTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCPUMP,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWMOVINGDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcPumpTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCPUMPTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWMOVINGDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcPipeSegmentTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCPIPESEGMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWSEGMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcPipeSegmentTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCPIPESEGMENTTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWSEGMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcTankTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCTANK,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWSTORAGEDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcTankTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCTANKTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWSTORAGEDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcLampTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCLAMP,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINAL,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcLightFixtureTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCLIGHTFIXTURE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINAL,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcMedicalDeviceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCMEDICALDEVICE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINAL,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcOutletTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCOUTLET,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINAL,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcSanitaryTerminalTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSANITARYTERMINAL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINAL,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcSpaceHeaterTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSPACEHEATER,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINAL,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcStackTerminalTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSTACKTERMINAL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINAL,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcWasteTerminalTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCWASTETERMINAL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINAL,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcLampTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCLAMPTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcLightFixtureTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCLIGHTFIXTURETYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcMedicalDeviceTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCMEDICALDEVICETYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcOutletTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCOUTLETTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcSanitaryTerminalTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSANITARYTERMINALTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcSpaceHeaterTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSPACEHEATERTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcStackTerminalTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSTACKTERMINALTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcWasteTerminalTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCWASTETERMINALTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcInterceptorTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCINTERCEPTOR,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTREATMENTDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcInterceptorTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCINTERCEPTORTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFLOWTREATMENTDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcFurnitureTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCFURNITURE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFURNISHINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcSystemFurnitureElementTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSYSTEMFURNITUREELEMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFURNISHINGELEMENT,
  },
  {
    fields: {
      AssemblyPlace: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcAssemblyPlaceEnum,
      },
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcFurnitureTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCFURNITURETYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFURNISHINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcSystemFurnitureElementTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSYSTEMFURNITUREELEMENTTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCFURNISHINGELEMENTTYPE,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCGEOMETRICCURVESET,
    isAbstract: false,
    superType: EntityTypesIfc.IFCGEOMETRICSET,
  },
  {
    fields: {
      Elements: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCURVE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOINT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSURFACE,
          },
        ],
      },
      Dim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCGEOMETRICSET,
    isAbstract: false,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCGEOMETRICCURVESET,
    ],
  },
  {
    fields: {
      CoordinateSpaceDimension: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      Precision: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      WorldCoordinateSystem: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAXIS2PLACEMENT2D,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAXIS2PLACEMENT3D,
          },
        ],
      },
      TrueNorth: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCDIRECTION,
      },
      HasSubContexts: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONSUBCONTEXT,
      },
      HasCoordinateOperation: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCOORDINATEOPERATION,
      },
    },
    typeId: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONCONTEXT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCREPRESENTATIONCONTEXT,
    subTypes: [
       EntityTypesIfc.IFCGEOMETRICREPRESENTATIONSUBCONTEXT,
    ],
  },
  {
    fields: {
      ParentContext: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONCONTEXT,
      },
      TargetScale: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      TargetView: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcGeometricProjectionEnum,
      },
      UserDefinedTargetView: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      WorldCoordinateSystem: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: true,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAXIS2PLACEMENT2D,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAXIS2PLACEMENT3D,
          },
        ],
      },
      CoordinateSpaceDimension: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
      TrueNorth: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: true,
        type: EntityTypesIfc.IFCDIRECTION,
      },
      Precision: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONSUBCONTEXT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONCONTEXT,
  },
  {
    fields: {
      ContextIdentifier: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ContextType: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      RepresentationsInContext: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCREPRESENTATION,
      },
    },
    typeId: EntityTypesIfc.IFCREPRESENTATIONCONTEXT,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCGEOMETRICREPRESENTATIONCONTEXT,
    ],
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      LightColour: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCOLOURRGB,
      },
      AmbientIntensity: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      Intensity: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCLIGHTSOURCE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCLIGHTSOURCEAMBIENT,
       EntityTypesIfc.IFCLIGHTSOURCEDIRECTIONAL,
       EntityTypesIfc.IFCLIGHTSOURCEGONIOMETRIC,
       EntityTypesIfc.IFCLIGHTSOURCEPOSITIONAL,
    ],
  },
  {
    fields: {
      SizeInX: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      SizeInY: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCPLANAREXTENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCPLANARBOX,
    ],
  },
  {
    fields: {
      SpineCurve: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCOMPOSITECURVE,
      },
      CrossSections: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPROFILEDEF,
      },
      CrossSectionPositions: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCAXIS2PLACEMENT3D,
      },
      Dim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCSECTIONEDSPINE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
  },
  {
    fields: {
      SbsmBoundary: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCLOSEDSHELL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCOPENSHELL,
          },
        ],
      },
      Dim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCSHELLBASEDSURFACEMODEL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCTESSELLATEDITEM,
    isAbstract: true,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCINDEXEDPOLYGONALFACE,
       EntityTypesIfc.IFCTESSELLATEDFACESET,
    ],
  },
  {
    fields: {
      Literal: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      Placement: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAXIS2PLACEMENT2D,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAXIS2PLACEMENT3D,
          },
        ],
      },
      Path: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcTextPath,
      },
    },
    typeId: EntityTypesIfc.IFCTEXTLITERAL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCTEXTLITERALWITHEXTENT,
    ],
  },
  {
    fields: {
      Orientation: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCDIRECTION,
      },
      Magnitude: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      Dim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCVECTOR,
    isAbstract: false,
    superType: EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
  },
  {
    fields: {
      LayerAssignment: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPRESENTATIONLAYERASSIGNMENT,
      },
      StyledByItem: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSTYLEDITEM,
      },
    },
    typeId: EntityTypesIfc.IFCREPRESENTATIONITEM,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM,
       EntityTypesIfc.IFCMAPPEDITEM,
       EntityTypesIfc.IFCSTYLEDITEM,
       EntityTypesIfc.IFCTOPOLOGICALREPRESENTATIONITEM,
    ],
  },
  {
    fields: {
      UAxes: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCGRIDAXIS,
      },
      VAxes: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCGRIDAXIS,
      },
      WAxes: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCGRIDAXIS,
      },
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcGridTypeEnum,
      },
      ContainedInStructure: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELCONTAINEDINSPATIALSTRUCTURE,
      },
    },
    typeId: EntityTypesIfc.IFCGRID,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPRODUCT,
  },
  {
    fields: {
      AxisTag: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      AxisCurve: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCURVE,
      },
      SameSense: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: false,
        derived: false,
      },
      PartOfW: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCGRID,
      },
      PartOfV: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCGRID,
      },
      PartOfU: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCGRID,
      },
      HasIntersections: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCVIRTUALGRIDINTERSECTION,
      },
    },
    typeId: EntityTypesIfc.IFCGRIDAXIS,
    isAbstract: false,
  },
  {
    fields: {
      PlacementLocation: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCVIRTUALGRIDINTERSECTION,
      },
      PlacementRefDirection: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDIRECTION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVIRTUALGRIDINTERSECTION,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCGRIDPLACEMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCOBJECTPLACEMENT,
  },
  {
    fields: {
      PlacesObject: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPRODUCT,
      },
      ReferencedByPlacements: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCLOCALPLACEMENT,
      },
    },
    typeId: EntityTypesIfc.IFCOBJECTPLACEMENT,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCGRIDPLACEMENT,
       EntityTypesIfc.IFCLOCALPLACEMENT,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcInventoryTypeEnum,
      },
      Jurisdiction: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCORGANIZATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSON,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSONANDORGANIZATION,
          },
        ],
      },
      ResponsiblePersons: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCPERSON,
      },
      LastUpdateDate: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      CurrentValue: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCCOSTVALUE,
      },
      OriginalValue: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCCOSTVALUE,
      },
    },
    typeId: EntityTypesIfc.IFCINVENTORY,
    isAbstract: false,
    superType: EntityTypesIfc.IFCGROUP,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcLoadGroupTypeEnum,
      },
      ActionType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcActionTypeEnum,
      },
      ActionSource: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcActionSourceTypeEnum,
      },
      Coefficient: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      Purpose: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      SourceOfResultGroup: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSTRUCTURALRESULTGROUP,
      },
      LoadGroupFor: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSTRUCTURALANALYSISMODEL,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALLOADGROUP,
    isAbstract: false,
    superType: EntityTypesIfc.IFCGROUP,
    subTypes: [
       EntityTypesIfc.IFCSTRUCTURALLOADCASE,
    ],
  },
  {
    fields: {
      TheoryType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcAnalysisTheoryTypeEnum,
      },
      ResultForLoadGroup: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCSTRUCTURALLOADGROUP,
      },
      IsLinear: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: false,
        derived: false,
      },
      ResultGroupFor: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSTRUCTURALANALYSISMODEL,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALRESULTGROUP,
    isAbstract: false,
    superType: EntityTypesIfc.IFCGROUP,
  },
  {
    fields: {
      Position: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCAXIS2PLACEMENT3D,
      },
      PolygonalBoundary: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCBOUNDEDCURVE,
      },
    },
    typeId: EntityTypesIfc.IFCPOLYGONALBOUNDEDHALFSPACE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCHALFSPACESOLID,
  },
  {
    fields: {
      OverallWidth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      OverallDepth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      WebThickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      FlangeThickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      FilletRadius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      FlangeEdgeRadius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      FlangeSlope: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCISHAPEPROFILEDEF,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPARAMETERIZEDPROFILEDEF,
  },
  {
    fields: {
      URLReference: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCIMAGETEXTURE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSURFACETEXTURE,
  },
  {
    fields: {
      MappedTo: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCTESSELLATEDFACESET,
      },
      Opacity: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      Colours: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCOLOURRGBLIST,
      },
      ColourIndex: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCINDEXEDCOLOURMAP,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPRESENTATIONITEM,
  },
  {
    fields: {
      CoordIndex: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
      },
      ToFaceSet: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPOLYGONALFACESET,
      },
    },
    typeId: EntityTypesIfc.IFCINDEXEDPOLYGONALFACE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCTESSELLATEDITEM,
    subTypes: [
       EntityTypesIfc.IFCINDEXEDPOLYGONALFACEWITHVOIDS,
    ],
  },
  {
    fields: {
      InnerCoordIndices: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 2,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCINDEXEDPOLYGONALFACEWITHVOIDS,
    isAbstract: false,
    superType: EntityTypesIfc.IFCINDEXEDPOLYGONALFACE,
  },
  {
    fields: {
      MappedTo: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCTESSELLATEDFACESET,
      },
      TexCoords: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCTEXTUREVERTEXLIST,
      },
    },
    typeId: EntityTypesIfc.IFCINDEXEDTEXTUREMAP,
    isAbstract: true,
    superType: EntityTypesIfc.IFCTEXTURECOORDINATE,
    subTypes: [
       EntityTypesIfc.IFCINDEXEDTRIANGLETEXTUREMAP,
    ],
  },
  {
    fields: {
      TexCoordIndex: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 2,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCINDEXEDTRIANGLETEXTUREMAP,
    isAbstract: false,
    superType: EntityTypesIfc.IFCINDEXEDTEXTUREMAP,
  },
  {
    fields: {
      Maps: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSURFACETEXTURE,
      },
    },
    typeId: EntityTypesIfc.IFCTEXTURECOORDINATE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCINDEXEDTEXTUREMAP,
       EntityTypesIfc.IFCTEXTURECOORDINATEGENERATOR,
       EntityTypesIfc.IFCTEXTUREMAP,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCINTERSECTIONCURVE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSURFACECURVE,
  },
  {
    fields: {
      Values: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCIRREGULARTIMESERIESVALUE,
      },
    },
    typeId: EntityTypesIfc.IFCIRREGULARTIMESERIES,
    isAbstract: false,
    superType: EntityTypesIfc.IFCTIMESERIES,
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      StartTime: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      EndTime: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      TimeSeriesDataType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcTimeSeriesDataTypeEnum,
      },
      DataOrigin: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcDataOriginEnum,
      },
      UserDefinedDataOrigin: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Unit: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDERIVEDUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNAMEDUNIT,
          },
        ],
      },
      HasExternalReference: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCEXTERNALREFERENCERELATIONSHIP,
      },
    },
    typeId: EntityTypesIfc.IFCTIMESERIES,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCIRREGULARTIMESERIES,
       EntityTypesIfc.IFCREGULARTIMESERIES,
    ],
  },
  {
    fields: {
      TimeStamp: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      ListValues: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCACCELERATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREADENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCURVATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCENERGYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCILLUMINANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTORQUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPLEXNUMBER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOUNTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNUMERICMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPARAMETERVALUE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBINARY,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATETIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDURATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIDENTIFIER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLABEL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLOGICAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCREAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEXT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMESTAMP,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCIRREGULARTIMESERIESVALUE,
    isAbstract: false,
  },
  {
    fields: {
      Depth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      Width: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      Thickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      FilletRadius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      EdgeRadius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      LegSlope: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCLSHAPEPROFILEDEF,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPARAMETERIZEDPROFILEDEF,
  },
  {
    fields: {
      LagValue: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDURATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRATIOMEASURE,
          },
        ],
      },
      DurationType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcTaskDurationEnum,
      },
    },
    typeId: EntityTypesIfc.IFCLAGTIME,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSCHEDULINGTIME,
  },
  {
    fields: {
      MainPlaneAngle: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      SecondaryPlaneAngle: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
      },
      LuminousIntensity: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCLIGHTDISTRIBUTIONDATA,
    isAbstract: false,
  },
  {
    fields: {
      LightDistributionCurve: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcLightDistributionCurveEnum,
      },
      DistributionData: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCLIGHTDISTRIBUTIONDATA,
      },
    },
    typeId: EntityTypesIfc.IFCLIGHTINTENSITYDISTRIBUTION,
    isAbstract: false,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCLIGHTSOURCEAMBIENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCLIGHTSOURCE,
  },
  {
    fields: {
      Orientation: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCDIRECTION,
      },
    },
    typeId: EntityTypesIfc.IFCLIGHTSOURCEDIRECTIONAL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCLIGHTSOURCE,
  },
  {
    fields: {
      Position: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCAXIS2PLACEMENT3D,
      },
      ColourAppearance: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCCOLOURRGB,
      },
      ColourTemperature: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      LuminousFlux: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      LightEmissionSource: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcLightEmissionSourceEnum,
      },
      LightDistributionDataSource: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCEXTERNALREFERENCE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLIGHTINTENSITYDISTRIBUTION,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCLIGHTSOURCEGONIOMETRIC,
    isAbstract: false,
    superType: EntityTypesIfc.IFCLIGHTSOURCE,
  },
  {
    fields: {
      Position: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCARTESIANPOINT,
      },
      Radius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      ConstantAttenuation: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      DistanceAttenuation: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      QuadricAttenuation: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCLIGHTSOURCEPOSITIONAL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCLIGHTSOURCE,
    subTypes: [
       EntityTypesIfc.IFCLIGHTSOURCESPOT,
    ],
  },
  {
    fields: {
      Orientation: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCDIRECTION,
      },
      ConcentrationExponent: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      SpreadAngle: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      BeamWidthAngle: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCLIGHTSOURCESPOT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCLIGHTSOURCEPOSITIONAL,
  },
  {
    fields: {
      PlacementRelTo: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCOBJECTPLACEMENT,
      },
      RelativePlacement: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAXIS2PLACEMENT2D,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAXIS2PLACEMENT3D,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCLOCALPLACEMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCOBJECTPLACEMENT,
  },
  {
    fields: {
      Polygon: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCARTESIANPOINT,
      },
    },
    typeId: EntityTypesIfc.IFCPOLYLOOP,
    isAbstract: false,
    superType: EntityTypesIfc.IFCLOOP,
  },
  {
    fields: {
      LoopVertex: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCVERTEX,
      },
    },
    typeId: EntityTypesIfc.IFCVERTEXLOOP,
    isAbstract: false,
    superType: EntityTypesIfc.IFCLOOP,
  },
  {
    fields: {
      MappingSource: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCREPRESENTATIONMAP,
      },
      MappingTarget: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR,
      },
    },
    typeId: EntityTypesIfc.IFCMAPPEDITEM,
    isAbstract: false,
    superType: EntityTypesIfc.IFCREPRESENTATIONITEM,
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Category: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      HasRepresentation: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCMATERIALDEFINITIONREPRESENTATION,
      },
      IsRelatedWith: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCMATERIALRELATIONSHIP,
      },
      RelatesTo: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCMATERIALRELATIONSHIP,
      },
    },
    typeId: EntityTypesIfc.IFCMATERIAL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCMATERIALDEFINITION,
  },
  {
    fields: {
      AssociatedTo: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELASSOCIATESMATERIAL,
      },
      HasExternalReferences: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCEXTERNALREFERENCERELATIONSHIP,
      },
      HasProperties: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCMATERIALPROPERTIES,
      },
    },
    typeId: EntityTypesIfc.IFCMATERIALDEFINITION,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCMATERIAL,
       EntityTypesIfc.IFCMATERIALCONSTITUENT,
       EntityTypesIfc.IFCMATERIALCONSTITUENTSET,
       EntityTypesIfc.IFCMATERIALLAYER,
       EntityTypesIfc.IFCMATERIALLAYERSET,
       EntityTypesIfc.IFCMATERIALPROFILE,
       EntityTypesIfc.IFCMATERIALPROFILESET,
    ],
  },
  {
    fields: {
      MaterialClassifications: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCLASSIFICATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCLASSIFICATIONREFERENCE,
          },
        ],
      },
      ClassifiedMaterial: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCMATERIAL,
      },
    },
    typeId: EntityTypesIfc.IFCMATERIALCLASSIFICATIONRELATIONSHIP,
    isAbstract: false,
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Material: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCMATERIAL,
      },
      Fraction: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      Category: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ToMaterialConstituentSet: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCMATERIALCONSTITUENTSET,
      },
    },
    typeId: EntityTypesIfc.IFCMATERIALCONSTITUENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCMATERIALDEFINITION,
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      MaterialConstituents: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCMATERIALCONSTITUENT,
      },
    },
    typeId: EntityTypesIfc.IFCMATERIALCONSTITUENTSET,
    isAbstract: false,
    superType: EntityTypesIfc.IFCMATERIALDEFINITION,
  },
  {
    fields: {
      Material: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCMATERIAL,
      },
      LayerThickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      IsVentilated: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: false,
      },
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Category: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Priority: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      ToMaterialLayerSet: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCMATERIALLAYERSET,
      },
    },
    typeId: EntityTypesIfc.IFCMATERIALLAYER,
    isAbstract: false,
    superType: EntityTypesIfc.IFCMATERIALDEFINITION,
    subTypes: [
       EntityTypesIfc.IFCMATERIALLAYERWITHOFFSETS,
    ],
  },
  {
    fields: {
      MaterialLayers: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCMATERIALLAYER,
      },
      LayerSetName: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      TotalThickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCMATERIALLAYERSET,
    isAbstract: false,
    superType: EntityTypesIfc.IFCMATERIALDEFINITION,
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Material: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCMATERIAL,
      },
      Profile: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPROFILEDEF,
      },
      Priority: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      Category: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ToMaterialProfileSet: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCMATERIALPROFILESET,
      },
    },
    typeId: EntityTypesIfc.IFCMATERIALPROFILE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCMATERIALDEFINITION,
    subTypes: [
       EntityTypesIfc.IFCMATERIALPROFILEWITHOFFSETS,
    ],
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      MaterialProfiles: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCMATERIALPROFILE,
      },
      CompositeProfile: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCCOMPOSITEPROFILEDEF,
      },
    },
    typeId: EntityTypesIfc.IFCMATERIALPROFILESET,
    isAbstract: false,
    superType: EntityTypesIfc.IFCMATERIALDEFINITION,
  },
  {
    fields: {
      RepresentedMaterial: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCMATERIAL,
      },
    },
    typeId: EntityTypesIfc.IFCMATERIALDEFINITIONREPRESENTATION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPRODUCTREPRESENTATION,
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Representations: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCREPRESENTATION,
      },
    },
    typeId: EntityTypesIfc.IFCPRODUCTREPRESENTATION,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCMATERIALDEFINITIONREPRESENTATION,
       EntityTypesIfc.IFCPRODUCTDEFINITIONSHAPE,
    ],
  },
  {
    fields: {
      OffsetDirection: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcLayerSetDirectionEnum,
      },
      OffsetValues: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCMATERIALLAYERWITHOFFSETS,
    isAbstract: false,
    superType: EntityTypesIfc.IFCMATERIALLAYER,
  },
  {
    fields: {
      ForLayerSet: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCMATERIALLAYERSET,
      },
      LayerSetDirection: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcLayerSetDirectionEnum,
      },
      DirectionSense: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcDirectionSenseEnum,
      },
      OffsetFromReferenceLine: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      ReferenceExtent: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCMATERIALLAYERSETUSAGE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCMATERIALUSAGEDEFINITION,
  },
  {
    fields: {
      AssociatedTo: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELASSOCIATESMATERIAL,
      },
    },
    typeId: EntityTypesIfc.IFCMATERIALUSAGEDEFINITION,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCMATERIALLAYERSETUSAGE,
       EntityTypesIfc.IFCMATERIALPROFILESETUSAGE,
    ],
  },
  {
    fields: {
      Materials: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCMATERIAL,
      },
    },
    typeId: EntityTypesIfc.IFCMATERIALLIST,
    isAbstract: false,
  },
  {
    fields: {
      OffsetValues: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCMATERIALPROFILEWITHOFFSETS,
    isAbstract: false,
    superType: EntityTypesIfc.IFCMATERIALPROFILE,
  },
  {
    fields: {
      ForProfileSet: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCMATERIALPROFILESET,
      },
      CardinalPoint: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      ReferenceExtent: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCMATERIALPROFILESETUSAGE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCMATERIALUSAGEDEFINITION,
    subTypes: [
       EntityTypesIfc.IFCMATERIALPROFILESETUSAGETAPERING,
    ],
  },
  {
    fields: {
      ForProfileEndSet: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCMATERIALPROFILESET,
      },
      CardinalEndPoint: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCMATERIALPROFILESETUSAGETAPERING,
    isAbstract: false,
    superType: EntityTypesIfc.IFCMATERIALPROFILESETUSAGE,
  },
  {
    fields: {
      RelatingMaterial: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCMATERIAL,
      },
      RelatedMaterials: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCMATERIAL,
      },
      Expression: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCMATERIALRELATIONSHIP,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRESOURCELEVELRELATIONSHIP,
  },
  {
    fields: {
      ValueComponent: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCACCELERATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREADENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCURVATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCENERGYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCILLUMINANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTORQUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPLEXNUMBER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOUNTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNUMERICMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPARAMETERVALUE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBINARY,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATETIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDURATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIDENTIFIER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLABEL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLOGICAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCREAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEXT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMESTAMP,
          },
        ],
      },
      UnitComponent: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDERIVEDUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNAMEDUNIT,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCMEASUREWITHUNIT,
    isAbstract: false,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCMEMBERSTANDARDCASE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCMEMBER,
  },
  {
    fields: {
      Currency: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCMONETARYUNIT,
    isAbstract: false,
  },
  {
    fields: {
      Prefix: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcSIPrefix,
      },
      Name: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcSIUnitName,
      },
      Dimensions: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: true,
        type: EntityTypesIfc.IFCDIMENSIONALEXPONENTS,
      },
    },
    typeId: EntityTypesIfc.IFCSIUNIT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCNAMEDUNIT,
  },
  {
    fields: {
      ApplicableOccurrence: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      HasPropertySets: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCPROPERTYSETDEFINITION,
      },
      Types: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELDEFINESBYTYPE,
      },
    },
    typeId: EntityTypesIfc.IFCTYPEOBJECT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCOBJECTDEFINITION,
    subTypes: [
       EntityTypesIfc.IFCTYPEPROCESS,
       EntityTypesIfc.IFCTYPEPRODUCT,
       EntityTypesIfc.IFCTYPERESOURCE,
    ],
  },
  {
    fields: {
      GlobalId: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      OwnerHistory: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCOWNERHISTORY,
      },
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCROOT,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCOBJECTDEFINITION,
       EntityTypesIfc.IFCPROPERTYDEFINITION,
       EntityTypesIfc.IFCRELATIONSHIP,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCOPENINGSTANDARDCASE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCOPENINGELEMENT,
  },
  {
    fields: {
      Identification: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Roles: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCACTORROLE,
      },
      Addresses: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCADDRESS,
      },
      IsRelatedBy: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCORGANIZATIONRELATIONSHIP,
      },
      Relates: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCORGANIZATIONRELATIONSHIP,
      },
      Engages: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPERSONANDORGANIZATION,
      },
    },
    typeId: EntityTypesIfc.IFCORGANIZATION,
    isAbstract: false,
  },
  {
    fields: {
      RelatingOrganization: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCORGANIZATION,
      },
      RelatedOrganizations: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCORGANIZATION,
      },
    },
    typeId: EntityTypesIfc.IFCORGANIZATIONRELATIONSHIP,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRESOURCELEVELRELATIONSHIP,
  },
  {
    fields: {
      OwningUser: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPERSONANDORGANIZATION,
      },
      OwningApplication: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCAPPLICATION,
      },
      State: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcStateEnum,
      },
      ChangeAction: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcChangeActionEnum,
      },
      LastModifiedDate: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      LastModifyingUser: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCPERSONANDORGANIZATION,
      },
      LastModifyingApplication: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCAPPLICATION,
      },
      CreationDate: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCOWNERHISTORY,
    isAbstract: false,
  },
  {
    fields: {
      XDim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      YDim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCRECTANGLEPROFILEDEF,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPARAMETERIZEDPROFILEDEF,
    subTypes: [
       EntityTypesIfc.IFCRECTANGLEHOLLOWPROFILEDEF,
       EntityTypesIfc.IFCROUNDEDRECTANGLEPROFILEDEF,
    ],
  },
  {
    fields: {
      Depth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      FlangeWidth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      WebThickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      FlangeThickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      FilletRadius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      FlangeEdgeRadius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      WebEdgeRadius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      WebSlope: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      FlangeSlope: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCTSHAPEPROFILEDEF,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPARAMETERIZEDPROFILEDEF,
  },
  {
    fields: {
      BottomXDim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      TopXDim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      YDim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      TopXOffset: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCTRAPEZIUMPROFILEDEF,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPARAMETERIZEDPROFILEDEF,
  },
  {
    fields: {
      Depth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      FlangeWidth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      WebThickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      FlangeThickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      FilletRadius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      EdgeRadius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      FlangeSlope: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCUSHAPEPROFILEDEF,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPARAMETERIZEDPROFILEDEF,
  },
  {
    fields: {
      Depth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      FlangeWidth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      WebThickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      FlangeThickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      FilletRadius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      EdgeRadius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCZSHAPEPROFILEDEF,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPARAMETERIZEDPROFILEDEF,
  },
  {
    fields: {
      EdgeList: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCORIENTEDEDGE,
      },
    },
    typeId: EntityTypesIfc.IFCPATH,
    isAbstract: false,
    superType: EntityTypesIfc.IFCTOPOLOGICALREPRESENTATIONITEM,
  },
  {
    fields: {
      OperationType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcPermeableCoveringOperationEnum,
      },
      PanelPosition: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcWindowPanelPositionEnum,
      },
      FrameDepth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      FrameThickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      ShapeAspectStyle: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCSHAPEASPECT,
      },
    },
    typeId: EntityTypesIfc.IFCPERMEABLECOVERINGPROPERTIES,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPREDEFINEDPROPERTYSET,
  },
  {
    fields: {
      Identification: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      FamilyName: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      GivenName: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      MiddleNames: {
        kind: FieldDescriptionKind.STRING,
        rank: 1,
        optional: true,
        derived: false,
      },
      PrefixTitles: {
        kind: FieldDescriptionKind.STRING,
        rank: 1,
        optional: true,
        derived: false,
      },
      SuffixTitles: {
        kind: FieldDescriptionKind.STRING,
        rank: 1,
        optional: true,
        derived: false,
      },
      Roles: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCACTORROLE,
      },
      Addresses: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCADDRESS,
      },
      EngagedIn: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPERSONANDORGANIZATION,
      },
    },
    typeId: EntityTypesIfc.IFCPERSON,
    isAbstract: false,
  },
  {
    fields: {
      ThePerson: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPERSON,
      },
      TheOrganization: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCORGANIZATION,
      },
      Roles: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCACTORROLE,
      },
    },
    typeId: EntityTypesIfc.IFCPERSONANDORGANIZATION,
    isAbstract: false,
  },
  {
    fields: {
      HasQuantities: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPHYSICALQUANTITY,
      },
      Discrimination: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      Quality: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Usage: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCPHYSICALCOMPLEXQUANTITY,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPHYSICALQUANTITY,
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      HasExternalReferences: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCEXTERNALREFERENCERELATIONSHIP,
      },
      PartOfComplex: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPHYSICALCOMPLEXQUANTITY,
      },
    },
    typeId: EntityTypesIfc.IFCPHYSICALQUANTITY,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCPHYSICALCOMPLEXQUANTITY,
       EntityTypesIfc.IFCPHYSICALSIMPLEQUANTITY,
    ],
  },
  {
    fields: {
      Unit: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCNAMEDUNIT,
      },
    },
    typeId: EntityTypesIfc.IFCPHYSICALSIMPLEQUANTITY,
    isAbstract: true,
    superType: EntityTypesIfc.IFCPHYSICALQUANTITY,
    subTypes: [
       EntityTypesIfc.IFCQUANTITYAREA,
       EntityTypesIfc.IFCQUANTITYCOUNT,
       EntityTypesIfc.IFCQUANTITYLENGTH,
       EntityTypesIfc.IFCQUANTITYTIME,
       EntityTypesIfc.IFCQUANTITYVOLUME,
       EntityTypesIfc.IFCQUANTITYWEIGHT,
    ],
  },
  {
    fields: {
      AreaValue: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      Formula: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCQUANTITYAREA,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPHYSICALSIMPLEQUANTITY,
  },
  {
    fields: {
      CountValue: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      Formula: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCQUANTITYCOUNT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPHYSICALSIMPLEQUANTITY,
  },
  {
    fields: {
      LengthValue: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      Formula: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCQUANTITYLENGTH,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPHYSICALSIMPLEQUANTITY,
  },
  {
    fields: {
      TimeValue: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      Formula: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCQUANTITYTIME,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPHYSICALSIMPLEQUANTITY,
  },
  {
    fields: {
      VolumeValue: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      Formula: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCQUANTITYVOLUME,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPHYSICALSIMPLEQUANTITY,
  },
  {
    fields: {
      WeightValue: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      Formula: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCQUANTITYWEIGHT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPHYSICALSIMPLEQUANTITY,
  },
  {
    fields: {
      Width: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      Height: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      ColourComponents: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      Pixel: {
        kind: FieldDescriptionKind.BINARY_DATA,
        rank: 1,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCPIXELTEXTURE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSURFACETEXTURE,
  },
  {
    fields: {
      Placement: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAXIS2PLACEMENT2D,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAXIS2PLACEMENT3D,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCPLANARBOX,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPLANAREXTENT,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCPLATESTANDARDCASE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPLATE,
  },
  {
    fields: {
      BasisCurve: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCURVE,
      },
      PointParameter: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      Dim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCPOINTONCURVE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPOINT,
  },
  {
    fields: {
      BasisSurface: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSURFACE,
      },
      PointParameterU: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      PointParameterV: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      Dim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCPOINTONSURFACE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPOINT,
  },
  {
    fields: {
      Closed: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: false,
      },
      Faces: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCINDEXEDPOLYGONALFACE,
      },
      PnIndex: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCPOLYGONALFACESET,
    isAbstract: false,
    superType: EntityTypesIfc.IFCTESSELLATEDFACESET,
  },
  {
    fields: {
      Coordinates: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCARTESIANPOINTLIST3D,
      },
      Dim: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
      HasColours: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCINDEXEDCOLOURMAP,
      },
      HasTextures: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCINDEXEDTEXTUREMAP,
      },
    },
    typeId: EntityTypesIfc.IFCTESSELLATEDFACESET,
    isAbstract: true,
    superType: EntityTypesIfc.IFCTESSELLATEDITEM,
    subTypes: [
       EntityTypesIfc.IFCPOLYGONALFACESET,
       EntityTypesIfc.IFCTRIANGULATEDFACESET,
    ],
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCPREDEFINEDITEM,
    isAbstract: true,
    superType: EntityTypesIfc.IFCPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCPREDEFINEDCOLOUR,
       EntityTypesIfc.IFCPREDEFINEDCURVEFONT,
       EntityTypesIfc.IFCPREDEFINEDTEXTFONT,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCPREDEFINEDTEXTFONT,
    isAbstract: true,
    superType: EntityTypesIfc.IFCPREDEFINEDITEM,
    subTypes: [
       EntityTypesIfc.IFCTEXTSTYLEFONTMODEL,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCPREDEFINEDPROPERTIES,
    isAbstract: true,
    superType: EntityTypesIfc.IFCPROPERTYABSTRACTION,
    subTypes: [
       EntityTypesIfc.IFCREINFORCEMENTBARPROPERTIES,
       EntityTypesIfc.IFCSECTIONPROPERTIES,
       EntityTypesIfc.IFCSECTIONREINFORCEMENTPROPERTIES,
    ],
  },
  {
    fields: {
      TotalCrossSectionArea: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      SteelGrade: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      BarSurface: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcReinforcingBarSurfaceEnum,
      },
      EffectiveDepth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      NominalBarDiameter: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      BarCount: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCREINFORCEMENTBARPROPERTIES,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPREDEFINEDPROPERTIES,
  },
  {
    fields: {
      SectionType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcSectionTypeEnum,
      },
      StartProfile: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPROFILEDEF,
      },
      EndProfile: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCPROFILEDEF,
      },
    },
    typeId: EntityTypesIfc.IFCSECTIONPROPERTIES,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPREDEFINEDPROPERTIES,
  },
  {
    fields: {
      LongitudinalStartPosition: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      LongitudinalEndPosition: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      TransversePosition: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      ReinforcementRole: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcReinforcingBarRoleEnum,
      },
      SectionDefinition: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSECTIONPROPERTIES,
      },
      CrossSectionReinforcementDefinitions: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCREINFORCEMENTBARPROPERTIES,
      },
    },
    typeId: EntityTypesIfc.IFCSECTIONREINFORCEMENTPROPERTIES,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPREDEFINEDPROPERTIES,
  },
  {
    fields: {
      DefinitionType: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ReinforcementSectionDefinitions: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSECTIONREINFORCEMENTPROPERTIES,
      },
    },
    typeId: EntityTypesIfc.IFCREINFORCEMENTDEFINITIONPROPERTIES,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPREDEFINEDPROPERTYSET,
  },
  {
    fields: {
      LiningDepth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      LiningThickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      TransomThickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      MullionThickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      FirstTransomOffset: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      SecondTransomOffset: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      FirstMullionOffset: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      SecondMullionOffset: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      ShapeAspectStyle: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCSHAPEASPECT,
      },
      LiningOffset: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      LiningToPanelOffsetX: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      LiningToPanelOffsetY: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCWINDOWLININGPROPERTIES,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPREDEFINEDPROPERTYSET,
  },
  {
    fields: {
      OperationType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcWindowPanelOperationEnum,
      },
      PanelPosition: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcWindowPanelPositionEnum,
      },
      FrameDepth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      FrameThickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      ShapeAspectStyle: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCSHAPEASPECT,
      },
    },
    typeId: EntityTypesIfc.IFCWINDOWPANELPROPERTIES,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPREDEFINEDPROPERTYSET,
  },
  {
    fields: {
      DefinesType: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCTYPEOBJECT,
      },
      IsDefinedBy: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELDEFINESBYTEMPLATE,
      },
      DefinesOccurrence: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELDEFINESBYPROPERTIES,
      },
    },
    typeId: EntityTypesIfc.IFCPROPERTYSETDEFINITION,
    isAbstract: true,
    superType: EntityTypesIfc.IFCPROPERTYDEFINITION,
    subTypes: [
       EntityTypesIfc.IFCPREDEFINEDPROPERTYSET,
       EntityTypesIfc.IFCPROPERTYSET,
       EntityTypesIfc.IFCQUANTITYSET,
    ],
  },
  {
    fields: {
      FontFamily: {
        kind: FieldDescriptionKind.STRING,
        rank: 1,
        optional: false,
        derived: false,
      },
      FontStyle: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      FontVariant: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      FontWeight: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      FontSize: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRATIOMEASURE,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCTEXTSTYLEFONTMODEL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPREDEFINEDTEXTFONT,
  },
  {
    fields: {
      DiffuseTransmissionColour: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCOLOURRGB,
      },
      DiffuseReflectionColour: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCOLOURRGB,
      },
      TransmissionColour: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCOLOURRGB,
      },
      ReflectanceColour: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCOLOURRGB,
      },
    },
    typeId: EntityTypesIfc.IFCSURFACESTYLELIGHTING,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPRESENTATIONITEM,
  },
  {
    fields: {
      RefractionIndex: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      DispersionFactor: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSURFACESTYLEREFRACTION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPRESENTATIONITEM,
  },
  {
    fields: {
      SurfaceColour: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCOLOURRGB,
      },
      Transparency: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSURFACESTYLESHADING,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCSURFACESTYLERENDERING,
    ],
  },
  {
    fields: {
      Textures: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSURFACETEXTURE,
      },
    },
    typeId: EntityTypesIfc.IFCSURFACESTYLEWITHTEXTURES,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPRESENTATIONITEM,
  },
  {
    fields: {
      Colour: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOLOURSPECIFICATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPREDEFINEDCOLOUR,
          },
        ],
      },
      BackgroundColour: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOLOURSPECIFICATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPREDEFINEDCOLOUR,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCTEXTSTYLEFORDEFINEDFONT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPRESENTATIONITEM,
  },
  {
    fields: {
      TextIndent: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRATIOMEASURE,
          },
        ],
      },
      TextAlign: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      TextDecoration: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      LetterSpacing: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRATIOMEASURE,
          },
        ],
      },
      WordSpacing: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRATIOMEASURE,
          },
        ],
      },
      TextTransform: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      LineHeight: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRATIOMEASURE,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCTEXTSTYLETEXTMODEL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPRESENTATIONITEM,
  },
  {
    fields: {
      Coordinates: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCTEXTUREVERTEX,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPRESENTATIONITEM,
  },
  {
    fields: {
      TexCoordsList: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 2,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCTEXTUREVERTEXLIST,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPRESENTATIONITEM,
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      AssignedItems: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCREPRESENTATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCREPRESENTATIONITEM,
          },
        ],
      },
      Identifier: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCPRESENTATIONLAYERASSIGNMENT,
    isAbstract: false,
    subTypes: [
       EntityTypesIfc.IFCPRESENTATIONLAYERWITHSTYLE,
    ],
  },
  {
    fields: {
      LayerOn: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: false,
      },
      LayerFrozen: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: false,
      },
      LayerBlocked: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: false,
      },
      LayerStyles: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPRESENTATIONSTYLE,
      },
    },
    typeId: EntityTypesIfc.IFCPRESENTATIONLAYERWITHSTYLE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPRESENTATIONLAYERASSIGNMENT,
  },
  {
    fields: {
      Side: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcSurfaceSide,
      },
      Styles: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCEXTERNALLYDEFINEDSURFACESTYLE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSURFACESTYLELIGHTING,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSURFACESTYLEREFRACTION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSURFACESTYLESHADING,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSURFACESTYLEWITHTEXTURES,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCSURFACESTYLE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPRESENTATIONSTYLE,
  },
  {
    fields: {
      TextCharacterAppearance: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCTEXTSTYLEFORDEFINEDFONT,
      },
      TextStyle: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCTEXTSTYLETEXTMODEL,
      },
      TextFontStyle: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCEXTERNALLYDEFINEDTEXTFONT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPREDEFINEDTEXTFONT,
          },
        ],
      },
      ModelOrDraughting: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCTEXTSTYLE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPRESENTATIONSTYLE,
  },
  {
    fields: {
      Styles: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCURVESTYLE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFILLAREASTYLE,
          },
          {
            kind: FieldDescriptionKind.ENUM,
            optional: false,
            derived: false,
            type: IfcNullStyle,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSURFACESTYLE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEXTSTYLE,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCPRESENTATIONSTYLEASSIGNMENT,
    isAbstract: false,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcProcedureTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCPROCEDURE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPROCESS,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcProcedureTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCPROCEDURETYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCTYPEPROCESS,
  },
  {
    fields: {
      Status: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      WorkMethod: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      IsMilestone: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: false,
        derived: false,
      },
      Priority: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      TaskTime: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCTASKTIME,
      },
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcTaskTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCTASK,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPROCESS,
  },
  {
    fields: {
      ProxyType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcObjectTypeEnum,
      },
      Tag: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCPROXY,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPRODUCT,
  },
  {
    fields: {
      AppliedLoad: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSTRUCTURALLOAD,
      },
      GlobalOrLocal: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcGlobalOrLocalEnum,
      },
      AssignedToStructuralItem: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELCONNECTSSTRUCTURALACTIVITY,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALACTIVITY,
    isAbstract: true,
    superType: EntityTypesIfc.IFCPRODUCT,
    subTypes: [
       EntityTypesIfc.IFCSTRUCTURALACTION,
       EntityTypesIfc.IFCSTRUCTURALREACTION,
    ],
  },
  {
    fields: {
      AssignedStructuralActivity: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELCONNECTSSTRUCTURALACTIVITY,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALITEM,
    isAbstract: true,
    superType: EntityTypesIfc.IFCPRODUCT,
    subTypes: [
       EntityTypesIfc.IFCSTRUCTURALCONNECTION,
       EntityTypesIfc.IFCSTRUCTURALMEMBER,
    ],
  },
  {
    fields: {
      ShapeOfProduct: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPRODUCT,
      },
      HasShapeAspects: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSHAPEASPECT,
      },
    },
    typeId: EntityTypesIfc.IFCPRODUCTDEFINITIONSHAPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPRODUCTREPRESENTATION,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCSIMPLEPROPERTY,
    isAbstract: true,
    superType: EntityTypesIfc.IFCPROPERTY,
    subTypes: [
       EntityTypesIfc.IFCPROPERTYBOUNDEDVALUE,
       EntityTypesIfc.IFCPROPERTYENUMERATEDVALUE,
       EntityTypesIfc.IFCPROPERTYLISTVALUE,
       EntityTypesIfc.IFCPROPERTYREFERENCEVALUE,
       EntityTypesIfc.IFCPROPERTYSINGLEVALUE,
       EntityTypesIfc.IFCPROPERTYTABLEVALUE,
    ],
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      EnumerationValues: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCACCELERATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREADENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCURVATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCENERGYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCILLUMINANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTORQUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPLEXNUMBER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOUNTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNUMERICMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPARAMETERVALUE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBINARY,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATETIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDURATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIDENTIFIER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLABEL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLOGICAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCREAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEXT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMESTAMP,
          },
        ],
      },
      Unit: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDERIVEDUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNAMEDUNIT,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCPROPERTYENUMERATION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPROPERTYABSTRACTION,
  },
  {
    fields: {
      UpperBoundValue: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCACCELERATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREADENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCURVATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCENERGYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCILLUMINANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTORQUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPLEXNUMBER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOUNTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNUMERICMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPARAMETERVALUE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBINARY,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATETIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDURATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIDENTIFIER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLABEL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLOGICAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCREAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEXT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMESTAMP,
          },
        ],
      },
      LowerBoundValue: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCACCELERATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREADENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCURVATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCENERGYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCILLUMINANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTORQUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPLEXNUMBER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOUNTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNUMERICMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPARAMETERVALUE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBINARY,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATETIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDURATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIDENTIFIER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLABEL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLOGICAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCREAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEXT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMESTAMP,
          },
        ],
      },
      Unit: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDERIVEDUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNAMEDUNIT,
          },
        ],
      },
      SetPointValue: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCACCELERATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREADENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCURVATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCENERGYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCILLUMINANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTORQUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPLEXNUMBER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOUNTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNUMERICMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPARAMETERVALUE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBINARY,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATETIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDURATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIDENTIFIER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLABEL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLOGICAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCREAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEXT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMESTAMP,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCPROPERTYBOUNDEDVALUE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSIMPLEPROPERTY,
  },
  {
    fields: {
      HasContext: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELDECLARES,
      },
      HasAssociations: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELASSOCIATES,
      },
    },
    typeId: EntityTypesIfc.IFCPROPERTYDEFINITION,
    isAbstract: true,
    superType: EntityTypesIfc.IFCROOT,
    subTypes: [
       EntityTypesIfc.IFCPROPERTYSETDEFINITION,
       EntityTypesIfc.IFCPROPERTYTEMPLATEDEFINITION,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCPROPERTYTEMPLATEDEFINITION,
    isAbstract: true,
    superType: EntityTypesIfc.IFCPROPERTYDEFINITION,
    subTypes: [
       EntityTypesIfc.IFCPROPERTYSETTEMPLATE,
       EntityTypesIfc.IFCPROPERTYTEMPLATE,
    ],
  },
  {
    fields: {
      DependingProperty: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPROPERTY,
      },
      DependantProperty: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPROPERTY,
      },
      Expression: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCPROPERTYDEPENDENCYRELATIONSHIP,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRESOURCELEVELRELATIONSHIP,
  },
  {
    fields: {
      EnumerationValues: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCACCELERATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREADENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCURVATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCENERGYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCILLUMINANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTORQUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPLEXNUMBER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOUNTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNUMERICMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPARAMETERVALUE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBINARY,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATETIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDURATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIDENTIFIER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLABEL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLOGICAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCREAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEXT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMESTAMP,
          },
        ],
      },
      EnumerationReference: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCPROPERTYENUMERATION,
      },
    },
    typeId: EntityTypesIfc.IFCPROPERTYENUMERATEDVALUE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSIMPLEPROPERTY,
  },
  {
    fields: {
      ListValues: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCACCELERATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREADENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCURVATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCENERGYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCILLUMINANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTORQUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPLEXNUMBER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOUNTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNUMERICMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPARAMETERVALUE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBINARY,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATETIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDURATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIDENTIFIER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLABEL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLOGICAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCREAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEXT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMESTAMP,
          },
        ],
      },
      Unit: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDERIVEDUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNAMEDUNIT,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCPROPERTYLISTVALUE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSIMPLEPROPERTY,
  },
  {
    fields: {
      UsageName: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      PropertyReference: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCADDRESS,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAPPLIEDVALUE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCEXTERNALREFERENCE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMATERIALDEFINITION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCORGANIZATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSON,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSONANDORGANIZATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTABLE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMESERIES,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCPROPERTYREFERENCEVALUE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSIMPLEPROPERTY,
  },
  {
    fields: {
      HasProperties: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPROPERTY,
      },
    },
    typeId: EntityTypesIfc.IFCPROPERTYSET,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPROPERTYSETDEFINITION,
  },
  {
    fields: {
      TemplateType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcPropertySetTemplateTypeEnum,
      },
      ApplicableEntity: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      HasPropertyTemplates: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPROPERTYTEMPLATE,
      },
      Defines: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELDEFINESBYTEMPLATE,
      },
    },
    typeId: EntityTypesIfc.IFCPROPERTYSETTEMPLATE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPROPERTYTEMPLATEDEFINITION,
  },
  {
    fields: {
      NominalValue: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCACCELERATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREADENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCURVATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCENERGYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCILLUMINANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTORQUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPLEXNUMBER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOUNTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNUMERICMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPARAMETERVALUE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBINARY,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATETIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDURATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIDENTIFIER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLABEL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLOGICAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCREAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEXT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMESTAMP,
          },
        ],
      },
      Unit: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDERIVEDUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNAMEDUNIT,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCPROPERTYSINGLEVALUE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSIMPLEPROPERTY,
  },
  {
    fields: {
      DefiningValues: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCACCELERATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREADENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCURVATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCENERGYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCILLUMINANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTORQUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPLEXNUMBER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOUNTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNUMERICMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPARAMETERVALUE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBINARY,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATETIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDURATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIDENTIFIER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLABEL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLOGICAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCREAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEXT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMESTAMP,
          },
        ],
      },
      DefinedValues: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCACCELERATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREADENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCURVATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCENERGYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCILLUMINANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTORQUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPLEXNUMBER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOUNTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNUMERICMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPARAMETERVALUE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBINARY,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATETIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDURATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIDENTIFIER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLABEL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLOGICAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCREAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEXT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMESTAMP,
          },
        ],
      },
      Expression: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      DefiningUnit: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDERIVEDUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNAMEDUNIT,
          },
        ],
      },
      DefinedUnit: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDERIVEDUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNAMEDUNIT,
          },
        ],
      },
      CurveInterpolation: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcCurveInterpolationEnum,
      },
    },
    typeId: EntityTypesIfc.IFCPROPERTYTABLEVALUE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSIMPLEPROPERTY,
  },
  {
    fields: {
      TemplateType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcSimplePropertyTemplateTypeEnum,
      },
      PrimaryMeasureType: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      SecondaryMeasureType: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Enumerators: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCPROPERTYENUMERATION,
      },
      PrimaryUnit: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDERIVEDUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNAMEDUNIT,
          },
        ],
      },
      SecondaryUnit: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDERIVEDUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNAMEDUNIT,
          },
        ],
      },
      Expression: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      AccessState: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcStateEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSIMPLEPROPERTYTEMPLATE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCPROPERTYTEMPLATE,
  },
  {
    fields: {
      WallThickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      InnerFilletRadius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      OuterFilletRadius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCRECTANGLEHOLLOWPROFILEDEF,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRECTANGLEPROFILEDEF,
  },
  {
    fields: {
      RoundingRadius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCROUNDEDRECTANGLEPROFILEDEF,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRECTANGLEPROFILEDEF,
  },
  {
    fields: {
      RecurrenceType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcRecurrenceTypeEnum,
      },
      DayComponent: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: true,
        derived: false,
      },
      WeekdayComponent: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: true,
        derived: false,
      },
      MonthComponent: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: true,
        derived: false,
      },
      Position: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      Interval: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      Occurrences: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      TimePeriods: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCTIMEPERIOD,
      },
    },
    typeId: EntityTypesIfc.IFCRECURRENCEPATTERN,
    isAbstract: false,
  },
  {
    fields: {
      TypeIdentifier: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      AttributeIdentifier: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      InstanceName: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ListPositions: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: true,
        derived: false,
      },
      InnerReference: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCREFERENCE,
      },
    },
    typeId: EntityTypesIfc.IFCREFERENCE,
    isAbstract: false,
  },
  {
    fields: {
      TimeStep: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      Values: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCTIMESERIESVALUE,
      },
    },
    typeId: EntityTypesIfc.IFCREGULARTIMESERIES,
    isAbstract: false,
    superType: EntityTypesIfc.IFCTIMESERIES,
  },
  {
    fields: {
      NominalDiameter: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      CrossSectionArea: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      BarLength: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcReinforcingBarTypeEnum,
      },
      BarSurface: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcReinforcingBarSurfaceEnum,
      },
    },
    typeId: EntityTypesIfc.IFCREINFORCINGBAR,
    isAbstract: false,
    superType: EntityTypesIfc.IFCREINFORCINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcReinforcingBarTypeEnum,
      },
      NominalDiameter: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      CrossSectionArea: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      BarLength: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      BarSurface: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcReinforcingBarSurfaceEnum,
      },
      BendingShapeCode: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      BendingParameters: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANEANGLEMEASURE,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCREINFORCINGBARTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCREINFORCINGELEMENTTYPE,
  },
  {
    fields: {
      MeshLength: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      MeshWidth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      LongitudinalBarNominalDiameter: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      TransverseBarNominalDiameter: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      LongitudinalBarCrossSectionArea: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      TransverseBarCrossSectionArea: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      LongitudinalBarSpacing: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      TransverseBarSpacing: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcReinforcingMeshTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCREINFORCINGMESH,
    isAbstract: false,
    superType: EntityTypesIfc.IFCREINFORCINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcTendonTypeEnum,
      },
      NominalDiameter: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      CrossSectionArea: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      TensionForce: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      PreStress: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      FrictionCoefficient: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      AnchorageSlip: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      MinCurvatureRadius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCTENDON,
    isAbstract: false,
    superType: EntityTypesIfc.IFCREINFORCINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcTendonAnchorTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCTENDONANCHOR,
    isAbstract: false,
    superType: EntityTypesIfc.IFCREINFORCINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcReinforcingMeshTypeEnum,
      },
      MeshLength: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      MeshWidth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      LongitudinalBarNominalDiameter: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      TransverseBarNominalDiameter: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      LongitudinalBarCrossSectionArea: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      TransverseBarCrossSectionArea: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      LongitudinalBarSpacing: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      TransverseBarSpacing: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      BendingShapeCode: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      BendingParameters: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANEANGLEMEASURE,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCREINFORCINGMESHTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCREINFORCINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcTendonAnchorTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCTENDONANCHORTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCREINFORCINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcTendonTypeEnum,
      },
      NominalDiameter: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      CrossSectionArea: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      SheathDiameter: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCTENDONTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCREINFORCINGELEMENTTYPE,
  },
  {
    fields: {
      RelatingObject: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCOBJECTDEFINITION,
      },
      RelatedObjects: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCOBJECTDEFINITION,
      },
    },
    typeId: EntityTypesIfc.IFCRELAGGREGATES,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELDECOMPOSES,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCRELDECOMPOSES,
    isAbstract: true,
    superType: EntityTypesIfc.IFCRELATIONSHIP,
    subTypes: [
       EntityTypesIfc.IFCRELAGGREGATES,
       EntityTypesIfc.IFCRELNESTS,
       EntityTypesIfc.IFCRELPROJECTSELEMENT,
       EntityTypesIfc.IFCRELVOIDSELEMENT,
    ],
  },
  {
    fields: {
      RelatedObjects: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCOBJECTDEFINITION,
      },
      RelatedObjectsType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcObjectTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCRELASSIGNS,
    isAbstract: true,
    superType: EntityTypesIfc.IFCRELATIONSHIP,
    subTypes: [
       EntityTypesIfc.IFCRELASSIGNSTOACTOR,
       EntityTypesIfc.IFCRELASSIGNSTOCONTROL,
       EntityTypesIfc.IFCRELASSIGNSTOGROUP,
       EntityTypesIfc.IFCRELASSIGNSTOPROCESS,
       EntityTypesIfc.IFCRELASSIGNSTOPRODUCT,
       EntityTypesIfc.IFCRELASSIGNSTORESOURCE,
    ],
  },
  {
    fields: {
      RelatingActor: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCACTOR,
      },
      ActingRole: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCACTORROLE,
      },
    },
    typeId: EntityTypesIfc.IFCRELASSIGNSTOACTOR,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELASSIGNS,
  },
  {
    fields: {
      RelatingControl: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCONTROL,
      },
    },
    typeId: EntityTypesIfc.IFCRELASSIGNSTOCONTROL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELASSIGNS,
  },
  {
    fields: {
      RelatingGroup: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCGROUP,
      },
    },
    typeId: EntityTypesIfc.IFCRELASSIGNSTOGROUP,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELASSIGNS,
    subTypes: [
       EntityTypesIfc.IFCRELASSIGNSTOGROUPBYFACTOR,
    ],
  },
  {
    fields: {
      RelatingProcess: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPROCESS,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTYPEPROCESS,
          },
        ],
      },
      QuantityInProcess: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCMEASUREWITHUNIT,
      },
    },
    typeId: EntityTypesIfc.IFCRELASSIGNSTOPROCESS,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELASSIGNS,
  },
  {
    fields: {
      RelatingProduct: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPRODUCT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTYPEPRODUCT,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCRELASSIGNSTOPRODUCT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELASSIGNS,
  },
  {
    fields: {
      RelatingResource: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRESOURCE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTYPERESOURCE,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCRELASSIGNSTORESOURCE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELASSIGNS,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCRELATIONSHIP,
    isAbstract: true,
    superType: EntityTypesIfc.IFCROOT,
    subTypes: [
       EntityTypesIfc.IFCRELASSIGNS,
       EntityTypesIfc.IFCRELASSOCIATES,
       EntityTypesIfc.IFCRELCONNECTS,
       EntityTypesIfc.IFCRELDECLARES,
       EntityTypesIfc.IFCRELDECOMPOSES,
       EntityTypesIfc.IFCRELDEFINES,
    ],
  },
  {
    fields: {
      Factor: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCRELASSIGNSTOGROUPBYFACTOR,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELASSIGNSTOGROUP,
  },
  {
    fields: {
      RelatedObjects: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCOBJECTDEFINITION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPROPERTYDEFINITION,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCRELASSOCIATES,
    isAbstract: true,
    superType: EntityTypesIfc.IFCRELATIONSHIP,
    subTypes: [
       EntityTypesIfc.IFCRELASSOCIATESAPPROVAL,
       EntityTypesIfc.IFCRELASSOCIATESCLASSIFICATION,
       EntityTypesIfc.IFCRELASSOCIATESCONSTRAINT,
       EntityTypesIfc.IFCRELASSOCIATESDOCUMENT,
       EntityTypesIfc.IFCRELASSOCIATESLIBRARY,
       EntityTypesIfc.IFCRELASSOCIATESMATERIAL,
    ],
  },
  {
    fields: {
      RelatingApproval: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCAPPROVAL,
      },
    },
    typeId: EntityTypesIfc.IFCRELASSOCIATESAPPROVAL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELASSOCIATES,
  },
  {
    fields: {
      RelatingClassification: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCLASSIFICATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCLASSIFICATIONREFERENCE,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCRELASSOCIATESCLASSIFICATION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELASSOCIATES,
  },
  {
    fields: {
      Intent: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      RelatingConstraint: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCONSTRAINT,
      },
    },
    typeId: EntityTypesIfc.IFCRELASSOCIATESCONSTRAINT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELASSOCIATES,
  },
  {
    fields: {
      RelatingDocument: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDOCUMENTINFORMATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDOCUMENTREFERENCE,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCRELASSOCIATESDOCUMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELASSOCIATES,
  },
  {
    fields: {
      RelatingLibrary: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLIBRARYINFORMATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLIBRARYREFERENCE,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCRELASSOCIATESLIBRARY,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELASSOCIATES,
  },
  {
    fields: {
      RelatingMaterial: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMATERIALDEFINITION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMATERIALLIST,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMATERIALUSAGEDEFINITION,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCRELASSOCIATESMATERIAL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELASSOCIATES,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCRELCONNECTS,
    isAbstract: true,
    superType: EntityTypesIfc.IFCRELATIONSHIP,
    subTypes: [
       EntityTypesIfc.IFCRELCONNECTSELEMENTS,
       EntityTypesIfc.IFCRELCONNECTSPORTTOELEMENT,
       EntityTypesIfc.IFCRELCONNECTSPORTS,
       EntityTypesIfc.IFCRELCONNECTSSTRUCTURALACTIVITY,
       EntityTypesIfc.IFCRELCONNECTSSTRUCTURALMEMBER,
       EntityTypesIfc.IFCRELCONTAINEDINSPATIALSTRUCTURE,
       EntityTypesIfc.IFCRELCOVERSBLDGELEMENTS,
       EntityTypesIfc.IFCRELCOVERSSPACES,
       EntityTypesIfc.IFCRELFILLSELEMENT,
       EntityTypesIfc.IFCRELFLOWCONTROLELEMENTS,
       EntityTypesIfc.IFCRELINTERFERESELEMENTS,
       EntityTypesIfc.IFCRELREFERENCEDINSPATIALSTRUCTURE,
       EntityTypesIfc.IFCRELSEQUENCE,
       EntityTypesIfc.IFCRELSERVICESBUILDINGS,
       EntityTypesIfc.IFCRELSPACEBOUNDARY,
    ],
  },
  {
    fields: {
      ConnectionGeometry: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCCONNECTIONGEOMETRY,
      },
      RelatingElement: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCELEMENT,
      },
      RelatedElement: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCELEMENT,
      },
    },
    typeId: EntityTypesIfc.IFCRELCONNECTSELEMENTS,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELCONNECTS,
    subTypes: [
       EntityTypesIfc.IFCRELCONNECTSPATHELEMENTS,
       EntityTypesIfc.IFCRELCONNECTSWITHREALIZINGELEMENTS,
    ],
  },
  {
    fields: {
      RelatingPort: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPORT,
      },
      RelatedElement: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCDISTRIBUTIONELEMENT,
      },
    },
    typeId: EntityTypesIfc.IFCRELCONNECTSPORTTOELEMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELCONNECTS,
  },
  {
    fields: {
      RelatingPort: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPORT,
      },
      RelatedPort: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPORT,
      },
      RealizingElement: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCELEMENT,
      },
    },
    typeId: EntityTypesIfc.IFCRELCONNECTSPORTS,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELCONNECTS,
  },
  {
    fields: {
      RelatingElement: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELEMENT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSTRUCTURALITEM,
          },
        ],
      },
      RelatedStructuralActivity: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSTRUCTURALACTIVITY,
      },
    },
    typeId: EntityTypesIfc.IFCRELCONNECTSSTRUCTURALACTIVITY,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELCONNECTS,
  },
  {
    fields: {
      RelatingStructuralMember: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSTRUCTURALMEMBER,
      },
      RelatedStructuralConnection: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSTRUCTURALCONNECTION,
      },
      AppliedCondition: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCBOUNDARYCONDITION,
      },
      AdditionalConditions: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCSTRUCTURALCONNECTIONCONDITION,
      },
      SupportedLength: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      ConditionCoordinateSystem: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCAXIS2PLACEMENT3D,
      },
    },
    typeId: EntityTypesIfc.IFCRELCONNECTSSTRUCTURALMEMBER,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELCONNECTS,
    subTypes: [
       EntityTypesIfc.IFCRELCONNECTSWITHECCENTRICITY,
    ],
  },
  {
    fields: {
      RelatedElements: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPRODUCT,
      },
      RelatingStructure: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSPATIALELEMENT,
      },
    },
    typeId: EntityTypesIfc.IFCRELCONTAINEDINSPATIALSTRUCTURE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELCONNECTS,
  },
  {
    fields: {
      RelatingBuildingElement: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCELEMENT,
      },
      RelatedCoverings: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCOVERING,
      },
    },
    typeId: EntityTypesIfc.IFCRELCOVERSBLDGELEMENTS,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELCONNECTS,
  },
  {
    fields: {
      RelatingSpace: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSPACE,
      },
      RelatedCoverings: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCOVERING,
      },
    },
    typeId: EntityTypesIfc.IFCRELCOVERSSPACES,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELCONNECTS,
  },
  {
    fields: {
      RelatingOpeningElement: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCOPENINGELEMENT,
      },
      RelatedBuildingElement: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCELEMENT,
      },
    },
    typeId: EntityTypesIfc.IFCRELFILLSELEMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELCONNECTS,
  },
  {
    fields: {
      RelatedControlElements: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCDISTRIBUTIONCONTROLELEMENT,
      },
      RelatingFlowElement: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCDISTRIBUTIONFLOWELEMENT,
      },
    },
    typeId: EntityTypesIfc.IFCRELFLOWCONTROLELEMENTS,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELCONNECTS,
  },
  {
    fields: {
      RelatingElement: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCELEMENT,
      },
      RelatedElement: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCELEMENT,
      },
      InterferenceGeometry: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCCONNECTIONGEOMETRY,
      },
      InterferenceType: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ImpliedOrder: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCRELINTERFERESELEMENTS,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELCONNECTS,
  },
  {
    fields: {
      RelatedElements: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPRODUCT,
      },
      RelatingStructure: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSPATIALELEMENT,
      },
    },
    typeId: EntityTypesIfc.IFCRELREFERENCEDINSPATIALSTRUCTURE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELCONNECTS,
  },
  {
    fields: {
      RelatingProcess: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPROCESS,
      },
      RelatedProcess: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPROCESS,
      },
      TimeLag: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCLAGTIME,
      },
      SequenceType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcSequenceEnum,
      },
      UserDefinedSequenceType: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCRELSEQUENCE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELCONNECTS,
  },
  {
    fields: {
      RelatingSystem: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSYSTEM,
      },
      RelatedBuildings: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSPATIALELEMENT,
      },
    },
    typeId: EntityTypesIfc.IFCRELSERVICESBUILDINGS,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELCONNECTS,
  },
  {
    fields: {
      RelatingSpace: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCEXTERNALSPATIALELEMENT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSPACE,
          },
        ],
      },
      RelatedBuildingElement: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCELEMENT,
      },
      ConnectionGeometry: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCCONNECTIONGEOMETRY,
      },
      PhysicalOrVirtualBoundary: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcPhysicalOrVirtualEnum,
      },
      InternalOrExternalBoundary: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcInternalOrExternalEnum,
      },
    },
    typeId: EntityTypesIfc.IFCRELSPACEBOUNDARY,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELCONNECTS,
    subTypes: [
       EntityTypesIfc.IFCRELSPACEBOUNDARY1STLEVEL,
    ],
  },
  {
    fields: {
      RelatingPriorities: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
      },
      RelatedPriorities: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
      },
      RelatedConnectionType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcConnectionTypeEnum,
      },
      RelatingConnectionType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcConnectionTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCRELCONNECTSPATHELEMENTS,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELCONNECTSELEMENTS,
  },
  {
    fields: {
      RealizingElements: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCELEMENT,
      },
      ConnectionType: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCRELCONNECTSWITHREALIZINGELEMENTS,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELCONNECTSELEMENTS,
  },
  {
    fields: {
      ConnectionConstraint: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCONNECTIONGEOMETRY,
      },
    },
    typeId: EntityTypesIfc.IFCRELCONNECTSWITHECCENTRICITY,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELCONNECTSSTRUCTURALMEMBER,
  },
  {
    fields: {
      RelatingContext: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCONTEXT,
      },
      RelatedDefinitions: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCOBJECTDEFINITION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPROPERTYDEFINITION,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCRELDECLARES,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELATIONSHIP,
  },
  {
    fields: {
      RelatingObject: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCOBJECTDEFINITION,
      },
      RelatedObjects: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCOBJECTDEFINITION,
      },
    },
    typeId: EntityTypesIfc.IFCRELNESTS,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELDECOMPOSES,
  },
  {
    fields: {
      RelatingElement: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCELEMENT,
      },
      RelatedFeatureElement: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCFEATUREELEMENTADDITION,
      },
    },
    typeId: EntityTypesIfc.IFCRELPROJECTSELEMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELDECOMPOSES,
  },
  {
    fields: {
      RelatingBuildingElement: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCELEMENT,
      },
      RelatedOpeningElement: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCFEATUREELEMENTSUBTRACTION,
      },
    },
    typeId: EntityTypesIfc.IFCRELVOIDSELEMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELDECOMPOSES,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCRELDEFINES,
    isAbstract: true,
    superType: EntityTypesIfc.IFCRELATIONSHIP,
    subTypes: [
       EntityTypesIfc.IFCRELDEFINESBYOBJECT,
       EntityTypesIfc.IFCRELDEFINESBYPROPERTIES,
       EntityTypesIfc.IFCRELDEFINESBYTEMPLATE,
       EntityTypesIfc.IFCRELDEFINESBYTYPE,
    ],
  },
  {
    fields: {
      RelatedObjects: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCOBJECT,
      },
      RelatingObject: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCOBJECT,
      },
    },
    typeId: EntityTypesIfc.IFCRELDEFINESBYOBJECT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELDEFINES,
  },
  {
    fields: {
      RelatedObjects: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCOBJECTDEFINITION,
      },
      RelatingPropertyDefinition: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPROPERTYSETDEFINITION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPROPERTYSETDEFINITIONSET,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCRELDEFINESBYPROPERTIES,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELDEFINES,
  },
  {
    fields: {
      RelatedPropertySets: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPROPERTYSETDEFINITION,
      },
      RelatingTemplate: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPROPERTYSETTEMPLATE,
      },
    },
    typeId: EntityTypesIfc.IFCRELDEFINESBYTEMPLATE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELDEFINES,
  },
  {
    fields: {
      RelatedObjects: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCOBJECT,
      },
      RelatingType: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCTYPEOBJECT,
      },
    },
    typeId: EntityTypesIfc.IFCRELDEFINESBYTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELDEFINES,
  },
  {
    fields: {
      ParentBoundary: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCRELSPACEBOUNDARY1STLEVEL,
      },
      InnerBoundaries: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELSPACEBOUNDARY1STLEVEL,
      },
    },
    typeId: EntityTypesIfc.IFCRELSPACEBOUNDARY1STLEVEL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELSPACEBOUNDARY,
    subTypes: [
       EntityTypesIfc.IFCRELSPACEBOUNDARY2NDLEVEL,
    ],
  },
  {
    fields: {
      CorrespondingBoundary: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCRELSPACEBOUNDARY2NDLEVEL,
      },
      Corresponds: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELSPACEBOUNDARY2NDLEVEL,
      },
    },
    typeId: EntityTypesIfc.IFCRELSPACEBOUNDARY2NDLEVEL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRELSPACEBOUNDARY1STLEVEL,
  },
  {
    fields: {
      ContextOfItems: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCREPRESENTATIONCONTEXT,
      },
      RepresentationIdentifier: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      RepresentationType: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Items: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCREPRESENTATIONITEM,
      },
      RepresentationMap: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCREPRESENTATIONMAP,
      },
      LayerAssignments: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPRESENTATIONLAYERASSIGNMENT,
      },
      OfProductRepresentation: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPRODUCTREPRESENTATION,
      },
    },
    typeId: EntityTypesIfc.IFCREPRESENTATION,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCSHAPEMODEL,
       EntityTypesIfc.IFCSTYLEMODEL,
    ],
  },
  {
    fields: {
      OfShapeAspect: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSHAPEASPECT,
      },
    },
    typeId: EntityTypesIfc.IFCSHAPEMODEL,
    isAbstract: true,
    superType: EntityTypesIfc.IFCREPRESENTATION,
    subTypes: [
       EntityTypesIfc.IFCSHAPEREPRESENTATION,
       EntityTypesIfc.IFCTOPOLOGYREPRESENTATION,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCSTYLEMODEL,
    isAbstract: true,
    superType: EntityTypesIfc.IFCREPRESENTATION,
    subTypes: [
       EntityTypesIfc.IFCSTYLEDREPRESENTATION,
    ],
  },
  {
    fields: {
      Item: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCREPRESENTATIONITEM,
      },
      Styles: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPRESENTATIONSTYLE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPRESENTATIONSTYLEASSIGNMENT,
          },
        ],
      },
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSTYLEDITEM,
    isAbstract: false,
    superType: EntityTypesIfc.IFCREPRESENTATIONITEM,
  },
  {
    fields: {
      MappingOrigin: {
        kind: FieldDescriptionKind.SELECT,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAXIS2PLACEMENT2D,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAXIS2PLACEMENT3D,
          },
        ],
      },
      MappedRepresentation: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCREPRESENTATION,
      },
      HasShapeAspects: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSHAPEASPECT,
      },
      MapUsage: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCMAPPEDITEM,
      },
    },
    typeId: EntityTypesIfc.IFCREPRESENTATIONMAP,
    isAbstract: false,
  },
  {
    fields: {
      RelatedResourceObjects: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCACTORROLE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAPPLIEDVALUE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAPPROVAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCONSTRAINT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCONTEXTDEPENDENTUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCONVERSIONBASEDUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCEXTERNALINFORMATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCEXTERNALREFERENCE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMATERIALDEFINITION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCORGANIZATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSON,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSONANDORGANIZATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPHYSICALQUANTITY,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPROFILEDEF,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPROPERTYABSTRACTION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMESERIES,
          },
        ],
      },
      RelatingApproval: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCAPPROVAL,
      },
    },
    typeId: EntityTypesIfc.IFCRESOURCEAPPROVALRELATIONSHIP,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRESOURCELEVELRELATIONSHIP,
  },
  {
    fields: {
      RelatingConstraint: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCONSTRAINT,
      },
      RelatedResourceObjects: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCACTORROLE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAPPLIEDVALUE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAPPROVAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCONSTRAINT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCONTEXTDEPENDENTUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCONVERSIONBASEDUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCEXTERNALINFORMATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCEXTERNALREFERENCE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMATERIALDEFINITION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCORGANIZATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSON,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPERSONANDORGANIZATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPHYSICALQUANTITY,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPROFILEDEF,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPROPERTYABSTRACTION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMESERIES,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCRESOURCECONSTRAINTRELATIONSHIP,
    isAbstract: false,
    superType: EntityTypesIfc.IFCRESOURCELEVELRELATIONSHIP,
  },
  {
    fields: {
      ScheduleWork: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ScheduleUsage: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      ScheduleStart: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ScheduleFinish: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ScheduleContour: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      LevelingDelay: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      IsOverAllocated: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: false,
      },
      StatusTime: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ActualWork: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ActualUsage: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      ActualStart: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ActualFinish: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      RemainingWork: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      RemainingUsage: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      Completion: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCRESOURCETIME,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSCHEDULINGTIME,
  },
  {
    fields: {
      Axis: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCAXIS1PLACEMENT,
      },
      Angle: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      AxisLine: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: true,
        type: EntityTypesIfc.IFCLINE,
      },
    },
    typeId: EntityTypesIfc.IFCREVOLVEDAREASOLID,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSWEPTAREASOLID,
    subTypes: [
       EntityTypesIfc.IFCREVOLVEDAREASOLIDTAPERED,
    ],
  },
  {
    fields: {
      EndSweptArea: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPROFILEDEF,
      },
    },
    typeId: EntityTypesIfc.IFCREVOLVEDAREASOLIDTAPERED,
    isAbstract: false,
    superType: EntityTypesIfc.IFCREVOLVEDAREASOLID,
  },
  {
    fields: {
      DurationType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcTaskDurationEnum,
      },
      ScheduleDuration: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ScheduleStart: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ScheduleFinish: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      EarlyStart: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      EarlyFinish: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      LateStart: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      LateFinish: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      FreeFloat: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      TotalFloat: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      IsCritical: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: false,
      },
      StatusTime: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ActualDuration: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ActualStart: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ActualFinish: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      RemainingTime: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Completion: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCTASKTIME,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSCHEDULINGTIME,
    subTypes: [
       EntityTypesIfc.IFCTASKTIMERECURRING,
    ],
  },
  {
    fields: {
      RecurrencePattern: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCRECURRENCEPATTERN,
      },
      Start: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Finish: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCWORKTIME,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSCHEDULINGTIME,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCSEAMCURVE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSURFACECURVE,
  },
  {
    fields: {
      ShapeRepresentations: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSHAPEMODEL,
      },
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      ProductDefinitional: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: false,
      },
      PartOfProductDefinitionShape: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPRODUCTDEFINITIONSHAPE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCREPRESENTATIONMAP,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCSHAPEASPECT,
    isAbstract: false,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCSHAPEREPRESENTATION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSHAPEMODEL,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCTOPOLOGYREPRESENTATION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSHAPEMODEL,
  },
  {
    fields: {
      RefLatitude: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      RefLongitude: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      RefElevation: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      LandTitleNumber: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      SiteAddress: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCPOSTALADDRESS,
      },
    },
    typeId: EntityTypesIfc.IFCSITE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSPATIALSTRUCTUREELEMENT,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCSLABELEMENTEDCASE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSLAB,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCSLABSTANDARDCASE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSLAB,
  },
  {
    fields: {
      SlippageX: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      SlippageY: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      SlippageZ: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSLIPPAGECONNECTIONCONDITION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALCONNECTIONCONDITION,
  },
  {
    fields: {
      Directrix: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCURVE,
      },
      Radius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      InnerRadius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      StartParam: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      EndParam: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSWEPTDISKSOLID,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSOLIDMODEL,
    subTypes: [
       EntityTypesIfc.IFCSWEPTDISKSOLIDPOLYGONAL,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcSpaceTypeEnum,
      },
      ElevationWithFlooring: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      HasCoverings: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELCOVERSSPACES,
      },
      BoundedBy: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELSPACEBOUNDARY,
      },
    },
    typeId: EntityTypesIfc.IFCSPACE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSPATIALSTRUCTUREELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcSpaceTypeEnum,
      },
      LongName: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSPACETYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSPATIALSTRUCTUREELEMENTTYPE,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCSPATIALSTRUCTUREELEMENTTYPE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCSPATIALELEMENTTYPE,
    subTypes: [
       EntityTypesIfc.IFCSPACETYPE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcSpatialZoneTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSPATIALZONE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSPATIALELEMENT,
  },
  {
    fields: {
      ElementType: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSPATIALELEMENTTYPE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCTYPEPRODUCT,
    subTypes: [
       EntityTypesIfc.IFCSPATIALSTRUCTUREELEMENTTYPE,
       EntityTypesIfc.IFCSPATIALZONETYPE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcSpatialZoneTypeEnum,
      },
      LongName: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSPATIALZONETYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSPATIALELEMENTTYPE,
  },
  {
    fields: {
      DestabilizingLoad: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALACTION,
    isAbstract: true,
    superType: EntityTypesIfc.IFCSTRUCTURALACTIVITY,
    subTypes: [
       EntityTypesIfc.IFCSTRUCTURALCURVEACTION,
       EntityTypesIfc.IFCSTRUCTURALPOINTACTION,
       EntityTypesIfc.IFCSTRUCTURALSURFACEACTION,
    ],
  },
  {
    fields: {
      ProjectedOrTrue: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcProjectedOrTrueLengthEnum,
      },
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcStructuralCurveActivityTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALCURVEACTION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALACTION,
    subTypes: [
       EntityTypesIfc.IFCSTRUCTURALLINEARACTION,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALPOINTACTION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALACTION,
  },
  {
    fields: {
      ProjectedOrTrue: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcProjectedOrTrueLengthEnum,
      },
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcStructuralSurfaceActivityTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALSURFACEACTION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALACTION,
    subTypes: [
       EntityTypesIfc.IFCSTRUCTURALPLANARACTION,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALREACTION,
    isAbstract: true,
    superType: EntityTypesIfc.IFCSTRUCTURALACTIVITY,
    subTypes: [
       EntityTypesIfc.IFCSTRUCTURALCURVEREACTION,
       EntityTypesIfc.IFCSTRUCTURALPOINTREACTION,
       EntityTypesIfc.IFCSTRUCTURALSURFACEREACTION,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcAnalysisModelTypeEnum,
      },
      OrientationOf2DPlane: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCAXIS2PLACEMENT3D,
      },
      LoadedBy: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCSTRUCTURALLOADGROUP,
      },
      HasResults: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCSTRUCTURALRESULTGROUP,
      },
      SharedPlacement: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCOBJECTPLACEMENT,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALANALYSISMODEL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSYSTEM,
  },
  {
    fields: {
      AppliedCondition: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCBOUNDARYCONDITION,
      },
      ConnectsStructuralMembers: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELCONNECTSSTRUCTURALMEMBER,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALCONNECTION,
    isAbstract: true,
    superType: EntityTypesIfc.IFCSTRUCTURALITEM,
    subTypes: [
       EntityTypesIfc.IFCSTRUCTURALCURVECONNECTION,
       EntityTypesIfc.IFCSTRUCTURALPOINTCONNECTION,
       EntityTypesIfc.IFCSTRUCTURALSURFACECONNECTION,
    ],
  },
  {
    fields: {
      Axis: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCDIRECTION,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALCURVECONNECTION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALCONNECTION,
  },
  {
    fields: {
      ConditionCoordinateSystem: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCAXIS2PLACEMENT3D,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALPOINTCONNECTION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALCONNECTION,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALSURFACECONNECTION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALCONNECTION,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALLINEARACTION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALCURVEACTION,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcStructuralCurveMemberTypeEnum,
      },
      Axis: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCDIRECTION,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALCURVEMEMBER,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALMEMBER,
    subTypes: [
       EntityTypesIfc.IFCSTRUCTURALCURVEMEMBERVARYING,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALCURVEMEMBERVARYING,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALCURVEMEMBER,
  },
  {
    fields: {
      ConnectedBy: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRELCONNECTSSTRUCTURALMEMBER,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALMEMBER,
    isAbstract: true,
    superType: EntityTypesIfc.IFCSTRUCTURALITEM,
    subTypes: [
       EntityTypesIfc.IFCSTRUCTURALCURVEMEMBER,
       EntityTypesIfc.IFCSTRUCTURALSURFACEMEMBER,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcStructuralCurveActivityTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALCURVEREACTION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALREACTION,
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALLOAD,
    isAbstract: true,
    subTypes: [
       EntityTypesIfc.IFCSTRUCTURALLOADCONFIGURATION,
       EntityTypesIfc.IFCSTRUCTURALLOADORRESULT,
    ],
  },
  {
    fields: {
      Values: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSTRUCTURALLOADORRESULT,
      },
      Locations: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 2,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALLOADCONFIGURATION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALLOAD,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALLOADORRESULT,
    isAbstract: true,
    superType: EntityTypesIfc.IFCSTRUCTURALLOAD,
    subTypes: [
       EntityTypesIfc.IFCSTRUCTURALLOADSTATIC,
       EntityTypesIfc.IFCSURFACEREINFORCEMENTAREA,
    ],
  },
  {
    fields: {
      SelfWeightCoefficients: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALLOADCASE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALLOADGROUP,
  },
  {
    fields: {
      LinearForceX: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      LinearForceY: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      LinearForceZ: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      LinearMomentX: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      LinearMomentY: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      LinearMomentZ: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALLOADLINEARFORCE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALLOADSTATIC,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALLOADSTATIC,
    isAbstract: true,
    superType: EntityTypesIfc.IFCSTRUCTURALLOADORRESULT,
    subTypes: [
       EntityTypesIfc.IFCSTRUCTURALLOADLINEARFORCE,
       EntityTypesIfc.IFCSTRUCTURALLOADPLANARFORCE,
       EntityTypesIfc.IFCSTRUCTURALLOADSINGLEDISPLACEMENT,
       EntityTypesIfc.IFCSTRUCTURALLOADSINGLEFORCE,
       EntityTypesIfc.IFCSTRUCTURALLOADTEMPERATURE,
    ],
  },
  {
    fields: {
      SurfaceReinforcement1: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: true,
        derived: false,
      },
      SurfaceReinforcement2: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: true,
        derived: false,
      },
      ShearReinforcement: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSURFACEREINFORCEMENTAREA,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALLOADORRESULT,
  },
  {
    fields: {
      PlanarForceX: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      PlanarForceY: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      PlanarForceZ: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALLOADPLANARFORCE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALLOADSTATIC,
  },
  {
    fields: {
      DisplacementX: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      DisplacementY: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      DisplacementZ: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      RotationalDisplacementRX: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      RotationalDisplacementRY: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      RotationalDisplacementRZ: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALLOADSINGLEDISPLACEMENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALLOADSTATIC,
    subTypes: [
       EntityTypesIfc.IFCSTRUCTURALLOADSINGLEDISPLACEMENTDISTORTION,
    ],
  },
  {
    fields: {
      Distortion: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALLOADSINGLEDISPLACEMENTDISTORTION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALLOADSINGLEDISPLACEMENT,
  },
  {
    fields: {
      ForceX: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      ForceY: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      ForceZ: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      MomentX: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      MomentY: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      MomentZ: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALLOADSINGLEFORCE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALLOADSTATIC,
    subTypes: [
       EntityTypesIfc.IFCSTRUCTURALLOADSINGLEFORCEWARPING,
    ],
  },
  {
    fields: {
      WarpingMoment: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALLOADSINGLEFORCEWARPING,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALLOADSINGLEFORCE,
  },
  {
    fields: {
      DeltaTConstant: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      DeltaTY: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      DeltaTZ: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALLOADTEMPERATURE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALLOADSTATIC,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcStructuralSurfaceMemberTypeEnum,
      },
      Thickness: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALSURFACEMEMBER,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALMEMBER,
    subTypes: [
       EntityTypesIfc.IFCSTRUCTURALSURFACEMEMBERVARYING,
    ],
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALPLANARACTION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALSURFACEACTION,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALPOINTREACTION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALREACTION,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcStructuralSurfaceActivityTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALSURFACEREACTION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALREACTION,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCSTRUCTURALSURFACEMEMBERVARYING,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTRUCTURALSURFACEMEMBER,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCSTYLEDREPRESENTATION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSTYLEMODEL,
  },
  {
    fields: {
      SweptCurve: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPROFILEDEF,
      },
      Position: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCAXIS2PLACEMENT3D,
      },
    },
    typeId: EntityTypesIfc.IFCSWEPTSURFACE,
    isAbstract: true,
    superType: EntityTypesIfc.IFCSURFACE,
    subTypes: [
       EntityTypesIfc.IFCSURFACEOFLINEAREXTRUSION,
       EntityTypesIfc.IFCSURFACEOFREVOLUTION,
    ],
  },
  {
    fields: {
      Directrix: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCCURVE,
      },
      StartParam: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      EndParam: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
      ReferenceSurface: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCSURFACE,
      },
    },
    typeId: EntityTypesIfc.IFCSURFACECURVESWEPTAREASOLID,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSWEPTAREASOLID,
  },
  {
    fields: {
      ExtrudedDirection: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCDIRECTION,
      },
      Depth: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: false,
      },
      ExtrusionAxis: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: true,
        type: EntityTypesIfc.IFCVECTOR,
      },
    },
    typeId: EntityTypesIfc.IFCSURFACEOFLINEAREXTRUSION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSWEPTSURFACE,
  },
  {
    fields: {
      AxisPosition: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCAXIS1PLACEMENT,
      },
      AxisLine: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: true,
        type: EntityTypesIfc.IFCLINE,
      },
    },
    typeId: EntityTypesIfc.IFCSURFACEOFREVOLUTION,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSWEPTSURFACE,
  },
  {
    fields: {
      DiffuseColour: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOLOURRGB,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
        ],
      },
      TransmissionColour: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOLOURRGB,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
        ],
      },
      DiffuseTransmissionColour: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOLOURRGB,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
        ],
      },
      ReflectionColour: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOLOURRGB,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
        ],
      },
      SpecularColour: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOLOURRGB,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
        ],
      },
      SpecularHighlight: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSPECULAREXPONENT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSPECULARROUGHNESS,
          },
        ],
      },
      ReflectanceMethod: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcReflectanceMethodEnum,
      },
    },
    typeId: EntityTypesIfc.IFCSURFACESTYLERENDERING,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSURFACESTYLESHADING,
  },
  {
    fields: {
      FilletRadius: {
        kind: FieldDescriptionKind.NUMBER,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCSWEPTDISKSOLIDPOLYGONAL,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSWEPTDISKSOLID,
  },
  {
    fields: {
      LongName: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCZONE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCSYSTEM,
  },
  {
    fields: {
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Rows: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCTABLEROW,
      },
      Columns: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCTABLECOLUMN,
      },
      NumberOfCellsInRow: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
      NumberOfHeadings: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
      NumberOfDataRows: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCTABLE,
    isAbstract: false,
  },
  {
    fields: {
      Identifier: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Name: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Description: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
      Unit: {
        kind: FieldDescriptionKind.SELECT,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDERIVEDUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNAMEDUNIT,
          },
        ],
      },
      ReferencePath: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: true,
        derived: false,
        type: EntityTypesIfc.IFCREFERENCE,
      },
    },
    typeId: EntityTypesIfc.IFCTABLECOLUMN,
    isAbstract: false,
  },
  {
    fields: {
      RowCells: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: true,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCACCELERATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREADENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCURVATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCENERGYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCILLUMINANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTORQUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPLEXNUMBER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOUNTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNUMERICMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPARAMETERVALUE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBINARY,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATETIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDURATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIDENTIFIER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLABEL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLOGICAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCREAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEXT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMESTAMP,
          },
        ],
      },
      IsHeading: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCTABLEROW,
    isAbstract: false,
  },
  {
    fields: {
      Recurrence: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCRECURRENCEPATTERN,
      },
    },
    typeId: EntityTypesIfc.IFCTASKTIMERECURRING,
    isAbstract: false,
    superType: EntityTypesIfc.IFCTASKTIME,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcTaskTypeEnum,
      },
      WorkMethod: {
        kind: FieldDescriptionKind.STRING,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCTASKTYPE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCTYPEPROCESS,
  },
  {
    fields: {
      Normals: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 2,
        optional: true,
        derived: false,
      },
      Closed: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: true,
        derived: false,
      },
      CoordIndex: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 2,
        optional: false,
        derived: false,
      },
      PnIndex: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: true,
        derived: false,
      },
      NumberOfTriangles: {
        kind: FieldDescriptionKind.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: EntityTypesIfc.IFCTRIANGULATEDFACESET,
    isAbstract: false,
    superType: EntityTypesIfc.IFCTESSELLATEDFACESET,
  },
  {
    fields: {
      Extent: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPLANAREXTENT,
      },
      BoxAlignment: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCTEXTLITERALWITHEXTENT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCTEXTLITERAL,
  },
  {
    fields: {
      Mode: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      Parameter: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: true,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCTEXTURECOORDINATEGENERATOR,
    isAbstract: false,
    superType: EntityTypesIfc.IFCTEXTURECOORDINATE,
  },
  {
    fields: {
      Vertices: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCTEXTUREVERTEX,
      },
      MappedTo: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCFACE,
      },
    },
    typeId: EntityTypesIfc.IFCTEXTUREMAP,
    isAbstract: false,
    superType: EntityTypesIfc.IFCTEXTURECOORDINATE,
  },
  {
    fields: {
      StartTime: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
      EndTime: {
        kind: FieldDescriptionKind.STRING,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCTIMEPERIOD,
    isAbstract: false,
  },
  {
    fields: {
      ListValues: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCACCELERATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREADENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCURVATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCENERGYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCILLUMINANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINDUCTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSDENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANARFORCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTORQUEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCAREAMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOMPLEXNUMBER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCCOUNTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMASSMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNUMERICMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPARAMETERVALUE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCRATIOMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCVOLUMEMEASURE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBINARY,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCBOOLEAN,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATE,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDATETIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDURATION,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCIDENTIFIER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLABEL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCLOGICAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCPOSITIVEINTEGER,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCREAL,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTEXT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIME,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCTIMESTAMP,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCTIMESERIESVALUE,
    isAbstract: false,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCVERTEX,
    isAbstract: false,
    superType: EntityTypesIfc.IFCTOPOLOGICALREPRESENTATIONITEM,
    subTypes: [
       EntityTypesIfc.IFCVERTEXPOINT,
    ],
  },
  {
    fields: {
      ConstructionType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcWindowStyleConstructionEnum,
      },
      OperationType: {
        kind: FieldDescriptionKind.ENUM,
        optional: false,
        derived: false,
        type: IfcWindowStyleOperationEnum,
      },
      ParameterTakesPrecedence: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: false,
        derived: false,
      },
      Sizeable: {
        kind: FieldDescriptionKind.BOOLEAN,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCWINDOWSTYLE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCTYPEPRODUCT,
  },
  {
    fields: {
      Units: {
        kind: FieldDescriptionKind.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        options: [
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCDERIVEDUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCMONETARYUNIT,
          },
          {
            kind: FieldDescriptionKind.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: EntityTypesIfc.IFCNAMEDUNIT,
          },
        ],
      },
    },
    typeId: EntityTypesIfc.IFCUNITASSIGNMENT,
    isAbstract: false,
  },
  {
    fields: {
      VertexGeometry: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCPOINT,
      },
    },
    typeId: EntityTypesIfc.IFCVERTEXPOINT,
    isAbstract: false,
    superType: EntityTypesIfc.IFCVERTEX,
  },
  {
    fields: {
      IntersectingAxes: {
        kind: FieldDescriptionKind.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        type: EntityTypesIfc.IFCGRIDAXIS,
      },
      OffsetDistances: {
        kind: FieldDescriptionKind.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
      },
    },
    typeId: EntityTypesIfc.IFCVIRTUALGRIDINTERSECTION,
    isAbstract: false,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCWALLELEMENTEDCASE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCWALL,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCWALLSTANDARDCASE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCWALL,
  },
  {
    fields: {
    },
    typeId: EntityTypesIfc.IFCWINDOWSTANDARDCASE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCWINDOW,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcWorkPlanTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCWORKPLAN,
    isAbstract: false,
    superType: EntityTypesIfc.IFCWORKCONTROL,
  },
  {
    fields: {
      PredefinedType: {
        kind: FieldDescriptionKind.ENUM,
        optional: true,
        derived: false,
        type: IfcWorkScheduleTypeEnum,
      },
    },
    typeId: EntityTypesIfc.IFCWORKSCHEDULE,
    isAbstract: false,
    superType: EntityTypesIfc.IFCWORKCONTROL,
  },
]
let parser =
  new StepParser< EntityTypesIfc >( EntityTypesIfcSearch )

let SchemaIfc =
  new StepEntitySchema< EntityTypesIfc >( constructors, parser, queries, descriptions )

export default SchemaIfc

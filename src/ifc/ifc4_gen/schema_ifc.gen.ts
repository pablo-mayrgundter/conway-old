/* This is generated code, don't alter */
import {
  FieldDescriptionKind,
} from '../../core/entity_field_description'
import { EntityDescription } from '../../core/entity_description'
import EntityTypesIfc from './entity_types_ifc.gen'
import EntityTypesIfcSearch from './entity_types_search.gen'
import StepEntityConstructor from '../../step/step_entity_constructor'
import StepEntityBase from '../../step/step_entity_base'
import StepEntitySchema from '../../step/step_entity_schema'
import StepParser from '../../step/parsing/step_parser'
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
const f = FieldDescriptionKind
const e = EntityTypesIfc
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
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 7,
        type: IfcActionRequestTypeEnum,
      },
      Status: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 8,
      },
      LongDescription: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 9,
      },
    },
    typeId: e.IFCACTIONREQUEST,
    isAbstract: false,
    superType: e.IFCCONTROL,
  },
  {
    fields: {
      Identification: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      Controls: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 7,
        type: e.IFCRELASSIGNSTOCONTROL,
      },
    },
    typeId: e.IFCCONTROL,
    isAbstract: true,
    superType: e.IFCOBJECT,
    subTypes: [
       e.IFCACTIONREQUEST,
       e.IFCCOSTITEM,
       e.IFCCOSTSCHEDULE,
       e.IFCPERFORMANCEHISTORY,
       e.IFCPERMIT,
       e.IFCPROJECTORDER,
       e.IFCWORKCALENDAR,
       e.IFCWORKCONTROL,
    ],
  },
  {
    fields: {
      TheActor: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 6,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCORGANIZATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSON,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSONANDORGANIZATION,
          },
        ],
      },
      IsActingUpon: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 7,
        type: e.IFCRELASSIGNSTOACTOR,
      },
    },
    typeId: e.IFCACTOR,
    isAbstract: false,
    superType: e.IFCOBJECT,
    subTypes: [
       e.IFCOCCUPANT,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 7,
        type: IfcOccupantTypeEnum,
      },
    },
    typeId: e.IFCOCCUPANT,
    isAbstract: false,
    superType: e.IFCACTOR,
  },
  {
    fields: {
      ObjectType: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
      IsDeclaredBy: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCRELDEFINESBYOBJECT,
      },
      Declares: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 7,
        type: e.IFCRELDEFINESBYOBJECT,
      },
      IsTypedBy: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 8,
        type: e.IFCRELDEFINESBYTYPE,
      },
      IsDefinedBy: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 9,
        type: e.IFCRELDEFINESBYPROPERTIES,
      },
    },
    typeId: e.IFCOBJECT,
    isAbstract: true,
    superType: e.IFCOBJECTDEFINITION,
    subTypes: [
       e.IFCACTOR,
       e.IFCCONTROL,
       e.IFCGROUP,
       e.IFCPROCESS,
       e.IFCPRODUCT,
       e.IFCRESOURCE,
    ],
  },
  {
    fields: {
      Role: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 1,
        type: IfcRoleEnum,
      },
      UserDefinedRole: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 3,
      },
      HasExternalReference: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCEXTERNALREFERENCERELATIONSHIP,
      },
    },
    typeId: e.IFCACTORROLE,
    isAbstract: false,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcActuatorTypeEnum,
      },
    },
    typeId: e.IFCACTUATOR,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONCONTROLELEMENT,
  },
  {
    fields: {
      AssignedToFlowElement: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 9,
        type: e.IFCRELFLOWCONTROLELEMENTS,
      },
    },
    typeId: e.IFCDISTRIBUTIONCONTROLELEMENT,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONELEMENT,
    subTypes: [
       e.IFCACTUATOR,
       e.IFCALARM,
       e.IFCCONTROLLER,
       e.IFCFLOWINSTRUMENT,
       e.IFCPROTECTIVEDEVICETRIPPINGUNIT,
       e.IFCSENSOR,
       e.IFCUNITARYCONTROLELEMENT,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcActuatorTypeEnum,
      },
    },
    typeId: e.IFCACTUATORTYPE,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONCONTROLELEMENTTYPE,
  },
  {
    fields: {
    },
    typeId: e.IFCDISTRIBUTIONCONTROLELEMENTTYPE,
    isAbstract: true,
    superType: e.IFCDISTRIBUTIONELEMENTTYPE,
    subTypes: [
       e.IFCACTUATORTYPE,
       e.IFCALARMTYPE,
       e.IFCCONTROLLERTYPE,
       e.IFCFLOWINSTRUMENTTYPE,
       e.IFCPROTECTIVEDEVICETRIPPINGUNITTYPE,
       e.IFCSENSORTYPE,
       e.IFCUNITARYCONTROLELEMENTTYPE,
    ],
  },
  {
    fields: {
      Purpose: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 1,
        type: IfcAddressTypeEnum,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      UserDefinedPurpose: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 3,
      },
      OfPerson: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCPERSON,
      },
      OfOrganization: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCORGANIZATION,
      },
    },
    typeId: e.IFCADDRESS,
    isAbstract: true,
    subTypes: [
       e.IFCPOSTALADDRESS,
       e.IFCTELECOMADDRESS,
    ],
  },
  {
    fields: {
      InternalLocation: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 4,
      },
      AddressLines: {
        kind: f.STRING,
        rank: 1,
        optional: true,
        derived: false,
        offset: 5,
      },
      PostalBox: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      Town: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 7,
      },
      Region: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 8,
      },
      PostalCode: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 9,
      },
      Country: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 10,
      },
    },
    typeId: e.IFCPOSTALADDRESS,
    isAbstract: false,
    superType: e.IFCADDRESS,
  },
  {
    fields: {
      TelephoneNumbers: {
        kind: f.STRING,
        rank: 1,
        optional: true,
        derived: false,
        offset: 4,
      },
      FacsimileNumbers: {
        kind: f.STRING,
        rank: 1,
        optional: true,
        derived: false,
        offset: 5,
      },
      PagerNumber: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      ElectronicMailAddresses: {
        kind: f.STRING,
        rank: 1,
        optional: true,
        derived: false,
        offset: 7,
      },
      WWWHomePageURL: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 8,
      },
      MessagingIDs: {
        kind: f.STRING,
        rank: 1,
        optional: true,
        derived: false,
        offset: 9,
      },
    },
    typeId: e.IFCTELECOMADDRESS,
    isAbstract: false,
    superType: e.IFCADDRESS,
  },
  {
    fields: {
    },
    typeId: e.IFCADVANCEDBREP,
    isAbstract: false,
    superType: e.IFCMANIFOLDSOLIDBREP,
    subTypes: [
       e.IFCADVANCEDBREPWITHVOIDS,
    ],
  },
  {
    fields: {
      Voids: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCCLOSEDSHELL,
      },
    },
    typeId: e.IFCADVANCEDBREPWITHVOIDS,
    isAbstract: false,
    superType: e.IFCADVANCEDBREP,
  },
  {
    fields: {
      Outer: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCCLOSEDSHELL,
      },
    },
    typeId: e.IFCMANIFOLDSOLIDBREP,
    isAbstract: true,
    superType: e.IFCSOLIDMODEL,
    subTypes: [
       e.IFCADVANCEDBREP,
       e.IFCFACETEDBREP,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCADVANCEDFACE,
    isAbstract: false,
    superType: e.IFCFACESURFACE,
  },
  {
    fields: {
      FaceSurface: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCSURFACE,
      },
      SameSense: {
        kind: f.BOOLEAN,
        optional: false,
        derived: false,
        offset: 3,
      },
    },
    typeId: e.IFCFACESURFACE,
    isAbstract: false,
    superType: e.IFCFACE,
    subTypes: [
       e.IFCADVANCEDFACE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcAirTerminalTypeEnum,
      },
    },
    typeId: e.IFCAIRTERMINAL,
    isAbstract: false,
    superType: e.IFCFLOWTERMINAL,
  },
  {
    fields: {
    },
    typeId: e.IFCFLOWTERMINAL,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONFLOWELEMENT,
    subTypes: [
       e.IFCAIRTERMINAL,
       e.IFCAUDIOVISUALAPPLIANCE,
       e.IFCCOMMUNICATIONSAPPLIANCE,
       e.IFCELECTRICAPPLIANCE,
       e.IFCFIRESUPPRESSIONTERMINAL,
       e.IFCLAMP,
       e.IFCLIGHTFIXTURE,
       e.IFCMEDICALDEVICE,
       e.IFCOUTLET,
       e.IFCSANITARYTERMINAL,
       e.IFCSPACEHEATER,
       e.IFCSTACKTERMINAL,
       e.IFCWASTETERMINAL,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcAirTerminalBoxTypeEnum,
      },
    },
    typeId: e.IFCAIRTERMINALBOX,
    isAbstract: false,
    superType: e.IFCFLOWCONTROLLER,
  },
  {
    fields: {
    },
    typeId: e.IFCFLOWCONTROLLER,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONFLOWELEMENT,
    subTypes: [
       e.IFCAIRTERMINALBOX,
       e.IFCDAMPER,
       e.IFCELECTRICDISTRIBUTIONBOARD,
       e.IFCELECTRICTIMECONTROL,
       e.IFCFLOWMETER,
       e.IFCPROTECTIVEDEVICE,
       e.IFCSWITCHINGDEVICE,
       e.IFCVALVE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcAirTerminalBoxTypeEnum,
      },
    },
    typeId: e.IFCAIRTERMINALBOXTYPE,
    isAbstract: false,
    superType: e.IFCFLOWCONTROLLERTYPE,
  },
  {
    fields: {
    },
    typeId: e.IFCFLOWCONTROLLERTYPE,
    isAbstract: true,
    superType: e.IFCDISTRIBUTIONFLOWELEMENTTYPE,
    subTypes: [
       e.IFCAIRTERMINALBOXTYPE,
       e.IFCDAMPERTYPE,
       e.IFCELECTRICDISTRIBUTIONBOARDTYPE,
       e.IFCELECTRICTIMECONTROLTYPE,
       e.IFCFLOWMETERTYPE,
       e.IFCPROTECTIVEDEVICETYPE,
       e.IFCSWITCHINGDEVICETYPE,
       e.IFCVALVETYPE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcAirTerminalTypeEnum,
      },
    },
    typeId: e.IFCAIRTERMINALTYPE,
    isAbstract: false,
    superType: e.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
    },
    typeId: e.IFCFLOWTERMINALTYPE,
    isAbstract: true,
    superType: e.IFCDISTRIBUTIONFLOWELEMENTTYPE,
    subTypes: [
       e.IFCAIRTERMINALTYPE,
       e.IFCAUDIOVISUALAPPLIANCETYPE,
       e.IFCCOMMUNICATIONSAPPLIANCETYPE,
       e.IFCELECTRICAPPLIANCETYPE,
       e.IFCFIRESUPPRESSIONTERMINALTYPE,
       e.IFCLAMPTYPE,
       e.IFCLIGHTFIXTURETYPE,
       e.IFCMEDICALDEVICETYPE,
       e.IFCOUTLETTYPE,
       e.IFCSANITARYTERMINALTYPE,
       e.IFCSPACEHEATERTYPE,
       e.IFCSTACKTERMINALTYPE,
       e.IFCWASTETERMINALTYPE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcAirToAirHeatRecoveryTypeEnum,
      },
    },
    typeId: e.IFCAIRTOAIRHEATRECOVERY,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
    },
    typeId: e.IFCENERGYCONVERSIONDEVICE,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONFLOWELEMENT,
    subTypes: [
       e.IFCAIRTOAIRHEATRECOVERY,
       e.IFCBOILER,
       e.IFCBURNER,
       e.IFCCHILLER,
       e.IFCCOIL,
       e.IFCCONDENSER,
       e.IFCCOOLEDBEAM,
       e.IFCCOOLINGTOWER,
       e.IFCELECTRICGENERATOR,
       e.IFCELECTRICMOTOR,
       e.IFCENGINE,
       e.IFCEVAPORATIVECOOLER,
       e.IFCEVAPORATOR,
       e.IFCHEATEXCHANGER,
       e.IFCHUMIDIFIER,
       e.IFCMOTORCONNECTION,
       e.IFCSOLARDEVICE,
       e.IFCTRANSFORMER,
       e.IFCTUBEBUNDLE,
       e.IFCUNITARYEQUIPMENT,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcAirToAirHeatRecoveryTypeEnum,
      },
    },
    typeId: e.IFCAIRTOAIRHEATRECOVERYTYPE,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
    },
    typeId: e.IFCENERGYCONVERSIONDEVICETYPE,
    isAbstract: true,
    superType: e.IFCDISTRIBUTIONFLOWELEMENTTYPE,
    subTypes: [
       e.IFCAIRTOAIRHEATRECOVERYTYPE,
       e.IFCBOILERTYPE,
       e.IFCBURNERTYPE,
       e.IFCCHILLERTYPE,
       e.IFCCOILTYPE,
       e.IFCCONDENSERTYPE,
       e.IFCCOOLEDBEAMTYPE,
       e.IFCCOOLINGTOWERTYPE,
       e.IFCELECTRICGENERATORTYPE,
       e.IFCELECTRICMOTORTYPE,
       e.IFCENGINETYPE,
       e.IFCEVAPORATIVECOOLERTYPE,
       e.IFCEVAPORATORTYPE,
       e.IFCHEATEXCHANGERTYPE,
       e.IFCHUMIDIFIERTYPE,
       e.IFCMOTORCONNECTIONTYPE,
       e.IFCSOLARDEVICETYPE,
       e.IFCTRANSFORMERTYPE,
       e.IFCTUBEBUNDLETYPE,
       e.IFCUNITARYEQUIPMENTTYPE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcAlarmTypeEnum,
      },
    },
    typeId: e.IFCALARM,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONCONTROLELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcAlarmTypeEnum,
      },
    },
    typeId: e.IFCALARMTYPE,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONCONTROLELEMENTTYPE,
  },
  {
    fields: {
      ContainedInStructure: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 8,
        type: e.IFCRELCONTAINEDINSPATIALSTRUCTURE,
      },
    },
    typeId: e.IFCANNOTATION,
    isAbstract: false,
    superType: e.IFCPRODUCT,
  },
  {
    fields: {
      ObjectPlacement: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 6,
        type: e.IFCOBJECTPLACEMENT,
      },
      Representation: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 7,
        type: e.IFCPRODUCTREPRESENTATION,
      },
      ReferencedBy: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 8,
        type: e.IFCRELASSIGNSTOPRODUCT,
      },
    },
    typeId: e.IFCPRODUCT,
    isAbstract: true,
    superType: e.IFCOBJECT,
    subTypes: [
       e.IFCANNOTATION,
       e.IFCELEMENT,
       e.IFCGRID,
       e.IFCPORT,
       e.IFCPROXY,
       e.IFCSPATIALELEMENT,
       e.IFCSTRUCTURALACTIVITY,
       e.IFCSTRUCTURALITEM,
    ],
  },
  {
    fields: {
      OuterBoundary: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCCURVE,
      },
      InnerBoundaries: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 2,
        type: e.IFCCURVE,
      },
    },
    typeId: e.IFCANNOTATIONFILLAREA,
    isAbstract: false,
    superType: e.IFCGEOMETRICREPRESENTATIONITEM,
  },
  {
    fields: {
    },
    typeId: e.IFCGEOMETRICREPRESENTATIONITEM,
    isAbstract: true,
    superType: e.IFCREPRESENTATIONITEM,
    subTypes: [
       e.IFCANNOTATIONFILLAREA,
       e.IFCBOOLEANRESULT,
       e.IFCBOUNDINGBOX,
       e.IFCCARTESIANPOINTLIST,
       e.IFCCARTESIANTRANSFORMATIONOPERATOR,
       e.IFCCOMPOSITECURVESEGMENT,
       e.IFCCSGPRIMITIVE3D,
       e.IFCCURVE,
       e.IFCDIRECTION,
       e.IFCFACEBASEDSURFACEMODEL,
       e.IFCFILLAREASTYLEHATCHING,
       e.IFCFILLAREASTYLETILES,
       e.IFCGEOMETRICSET,
       e.IFCHALFSPACESOLID,
       e.IFCLIGHTSOURCE,
       e.IFCPLACEMENT,
       e.IFCPLANAREXTENT,
       e.IFCPOINT,
       e.IFCSECTIONEDSPINE,
       e.IFCSHELLBASEDSURFACEMODEL,
       e.IFCSOLIDMODEL,
       e.IFCSURFACE,
       e.IFCTESSELLATEDITEM,
       e.IFCTEXTLITERAL,
       e.IFCVECTOR,
    ],
  },
  {
    fields: {
      ApplicationDeveloper: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCORGANIZATION,
      },
      Version: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 2,
      },
      ApplicationFullName: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 3,
      },
      ApplicationIdentifier: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 4,
      },
    },
    typeId: e.IFCAPPLICATION,
    isAbstract: false,
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      AppliedValue: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 3,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMEASUREWITHUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCREFERENCE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCACCELERATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREADENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCURVATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCENERGYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCILLUMINANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTORQUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPLEXNUMBER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOUNTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNUMERICMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPARAMETERVALUE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBINARY,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATETIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDURATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIDENTIFIER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLABEL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLOGICAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCREAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEXT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMESTAMP,
          },
        ],
      },
      UnitBasis: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 4,
        type: e.IFCMEASUREWITHUNIT,
      },
      ApplicableDate: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
      FixedUntilDate: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      Category: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 7,
      },
      Condition: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 8,
      },
      ArithmeticOperator: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcArithmeticOperatorEnum,
      },
      Components: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 10,
        type: e.IFCAPPLIEDVALUE,
      },
      HasExternalReference: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 11,
        type: e.IFCEXTERNALREFERENCERELATIONSHIP,
      },
    },
    typeId: e.IFCAPPLIEDVALUE,
    isAbstract: false,
    subTypes: [
       e.IFCCOSTVALUE,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCCOSTVALUE,
    isAbstract: false,
    superType: e.IFCAPPLIEDVALUE,
  },
  {
    fields: {
      Identifier: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
      Name: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 3,
      },
      TimeOfApproval: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 4,
      },
      Status: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
      Level: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      Qualifier: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 7,
      },
      RequestingApproval: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 8,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCORGANIZATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSON,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSONANDORGANIZATION,
          },
        ],
      },
      GivingApproval: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 9,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCORGANIZATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSON,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSONANDORGANIZATION,
          },
        ],
      },
      HasExternalReferences: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 10,
        type: e.IFCEXTERNALREFERENCERELATIONSHIP,
      },
      ApprovedObjects: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 11,
        type: e.IFCRELASSOCIATESAPPROVAL,
      },
      ApprovedResources: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 12,
        type: e.IFCRESOURCEAPPROVALRELATIONSHIP,
      },
      IsRelatedWith: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 13,
        type: e.IFCAPPROVALRELATIONSHIP,
      },
      Relates: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 14,
        type: e.IFCAPPROVALRELATIONSHIP,
      },
    },
    typeId: e.IFCAPPROVAL,
    isAbstract: false,
  },
  {
    fields: {
      RelatingApproval: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCAPPROVAL,
      },
      RelatedApprovals: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCAPPROVAL,
      },
    },
    typeId: e.IFCAPPROVALRELATIONSHIP,
    isAbstract: false,
    superType: e.IFCRESOURCELEVELRELATIONSHIP,
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
    },
    typeId: e.IFCRESOURCELEVELRELATIONSHIP,
    isAbstract: true,
    subTypes: [
       e.IFCAPPROVALRELATIONSHIP,
       e.IFCCURRENCYRELATIONSHIP,
       e.IFCDOCUMENTINFORMATIONRELATIONSHIP,
       e.IFCEXTERNALREFERENCERELATIONSHIP,
       e.IFCMATERIALRELATIONSHIP,
       e.IFCORGANIZATIONRELATIONSHIP,
       e.IFCPROPERTYDEPENDENCYRELATIONSHIP,
       e.IFCRESOURCEAPPROVALRELATIONSHIP,
       e.IFCRESOURCECONSTRAINTRELATIONSHIP,
    ],
  },
  {
    fields: {
      OuterCurve: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCCURVE,
      },
    },
    typeId: e.IFCARBITRARYCLOSEDPROFILEDEF,
    isAbstract: false,
    superType: e.IFCPROFILEDEF,
    subTypes: [
       e.IFCARBITRARYPROFILEDEFWITHVOIDS,
    ],
  },
  {
    fields: {
      InnerCurves: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCCURVE,
      },
    },
    typeId: e.IFCARBITRARYPROFILEDEFWITHVOIDS,
    isAbstract: false,
    superType: e.IFCARBITRARYCLOSEDPROFILEDEF,
  },
  {
    fields: {
      ProfileType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 1,
        type: IfcProfileTypeEnum,
      },
      ProfileName: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      HasExternalReference: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCEXTERNALREFERENCERELATIONSHIP,
      },
      HasProperties: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCPROFILEPROPERTIES,
      },
    },
    typeId: e.IFCPROFILEDEF,
    isAbstract: false,
    subTypes: [
       e.IFCARBITRARYCLOSEDPROFILEDEF,
       e.IFCARBITRARYOPENPROFILEDEF,
       e.IFCCOMPOSITEPROFILEDEF,
       e.IFCDERIVEDPROFILEDEF,
       e.IFCPARAMETERIZEDPROFILEDEF,
    ],
  },
  {
    fields: {
      Curve: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCBOUNDEDCURVE,
      },
    },
    typeId: e.IFCARBITRARYOPENPROFILEDEF,
    isAbstract: false,
    superType: e.IFCPROFILEDEF,
    subTypes: [
       e.IFCCENTERLINEPROFILEDEF,
    ],
  },
  {
    fields: {
      Thickness: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
    },
    typeId: e.IFCCENTERLINEPROFILEDEF,
    isAbstract: false,
    superType: e.IFCARBITRARYOPENPROFILEDEF,
  },
  {
    fields: {
      Identification: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      OriginalValue: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 7,
        type: e.IFCCOSTVALUE,
      },
      CurrentValue: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 8,
        type: e.IFCCOSTVALUE,
      },
      TotalReplacementCost: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 9,
        type: e.IFCCOSTVALUE,
      },
      Owner: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 10,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCORGANIZATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSON,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSONANDORGANIZATION,
          },
        ],
      },
      User: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 11,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCORGANIZATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSON,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSONANDORGANIZATION,
          },
        ],
      },
      ResponsiblePerson: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 12,
        type: e.IFCPERSON,
      },
      IncorporationDate: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 13,
      },
      DepreciatedValue: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 14,
        type: e.IFCCOSTVALUE,
      },
    },
    typeId: e.IFCASSET,
    isAbstract: false,
    superType: e.IFCGROUP,
  },
  {
    fields: {
      IsGroupedBy: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCRELASSIGNSTOGROUP,
      },
    },
    typeId: e.IFCGROUP,
    isAbstract: false,
    superType: e.IFCOBJECT,
    subTypes: [
       e.IFCASSET,
       e.IFCINVENTORY,
       e.IFCSTRUCTURALLOADGROUP,
       e.IFCSTRUCTURALRESULTGROUP,
       e.IFCSYSTEM,
    ],
  },
  {
    fields: {
      BottomFlangeWidth: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
      OverallDepth: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 5,
      },
      WebThickness: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 6,
      },
      BottomFlangeThickness: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 7,
      },
      BottomFlangeFilletRadius: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 8,
      },
      TopFlangeWidth: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 9,
      },
      TopFlangeThickness: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 10,
      },
      TopFlangeFilletRadius: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 11,
      },
      BottomFlangeEdgeRadius: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 12,
      },
      BottomFlangeSlope: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 13,
      },
      TopFlangeEdgeRadius: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 14,
      },
      TopFlangeSlope: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 15,
      },
    },
    typeId: e.IFCASYMMETRICISHAPEPROFILEDEF,
    isAbstract: false,
    superType: e.IFCPARAMETERIZEDPROFILEDEF,
  },
  {
    fields: {
      Position: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 3,
        type: e.IFCAXIS2PLACEMENT2D,
      },
    },
    typeId: e.IFCPARAMETERIZEDPROFILEDEF,
    isAbstract: true,
    superType: e.IFCPROFILEDEF,
    subTypes: [
       e.IFCASYMMETRICISHAPEPROFILEDEF,
       e.IFCCSHAPEPROFILEDEF,
       e.IFCCIRCLEPROFILEDEF,
       e.IFCELLIPSEPROFILEDEF,
       e.IFCISHAPEPROFILEDEF,
       e.IFCLSHAPEPROFILEDEF,
       e.IFCRECTANGLEPROFILEDEF,
       e.IFCTSHAPEPROFILEDEF,
       e.IFCTRAPEZIUMPROFILEDEF,
       e.IFCUSHAPEPROFILEDEF,
       e.IFCZSHAPEPROFILEDEF,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcAudioVisualApplianceTypeEnum,
      },
    },
    typeId: e.IFCAUDIOVISUALAPPLIANCE,
    isAbstract: false,
    superType: e.IFCFLOWTERMINAL,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcAudioVisualApplianceTypeEnum,
      },
    },
    typeId: e.IFCAUDIOVISUALAPPLIANCETYPE,
    isAbstract: false,
    superType: e.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
      Axis: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 2,
        type: e.IFCDIRECTION,
      },
      Z: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: true,
        type: e.IFCDIRECTION,
      },
    },
    typeId: e.IFCAXIS1PLACEMENT,
    isAbstract: false,
    superType: e.IFCPLACEMENT,
  },
  {
    fields: {
      Location: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCCARTESIANPOINT,
      },
      Dim: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCPLACEMENT,
    isAbstract: true,
    superType: e.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       e.IFCAXIS1PLACEMENT,
       e.IFCAXIS2PLACEMENT2D,
       e.IFCAXIS2PLACEMENT3D,
    ],
  },
  {
    fields: {
      RefDirection: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 2,
        type: e.IFCDIRECTION,
      },
      P: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: true,
        type: e.IFCDIRECTION,
      },
    },
    typeId: e.IFCAXIS2PLACEMENT2D,
    isAbstract: false,
    superType: e.IFCPLACEMENT,
  },
  {
    fields: {
      Axis: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 2,
        type: e.IFCDIRECTION,
      },
      RefDirection: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 3,
        type: e.IFCDIRECTION,
      },
      P: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: true,
        type: e.IFCDIRECTION,
      },
    },
    typeId: e.IFCAXIS2PLACEMENT3D,
    isAbstract: false,
    superType: e.IFCPLACEMENT,
  },
  {
    fields: {
      Degree: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 1,
      },
      ControlPointsList: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCCARTESIANPOINT,
      },
      CurveForm: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 3,
        type: IfcBSplineCurveForm,
      },
      ClosedCurve: {
        kind: f.BOOLEAN,
        optional: true,
        derived: false,
        offset: 4,
      },
      SelfIntersect: {
        kind: f.BOOLEAN,
        optional: true,
        derived: false,
        offset: 5,
      },
      UpperIndexOnControlPoints: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
      ControlPoints: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: true,
        type: e.IFCCARTESIANPOINT,
      },
    },
    typeId: e.IFCBSPLINECURVE,
    isAbstract: true,
    superType: e.IFCBOUNDEDCURVE,
    subTypes: [
       e.IFCBSPLINECURVEWITHKNOTS,
    ],
  },
  {
    fields: {
      KnotMultiplicities: {
        kind: f.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
        offset: 6,
      },
      Knots: {
        kind: f.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
        offset: 7,
      },
      KnotSpec: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 8,
        type: IfcKnotType,
      },
      UpperIndexOnKnots: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCBSPLINECURVEWITHKNOTS,
    isAbstract: false,
    superType: e.IFCBSPLINECURVE,
    subTypes: [
       e.IFCRATIONALBSPLINECURVEWITHKNOTS,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCBOUNDEDCURVE,
    isAbstract: true,
    superType: e.IFCCURVE,
    subTypes: [
       e.IFCBSPLINECURVE,
       e.IFCCOMPOSITECURVE,
       e.IFCINDEXEDPOLYCURVE,
       e.IFCPOLYLINE,
       e.IFCTRIMMEDCURVE,
    ],
  },
  {
    fields: {
      WeightsData: {
        kind: f.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
        offset: 9,
      },
      Weights: {
        kind: f.NUMBER,
        rank: 1,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCRATIONALBSPLINECURVEWITHKNOTS,
    isAbstract: false,
    superType: e.IFCBSPLINECURVEWITHKNOTS,
  },
  {
    fields: {
      UDegree: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 1,
      },
      VDegree: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
      ControlPointsList: {
        kind: f.STEP_REFERENCE,
        rank: 2,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCCARTESIANPOINT,
      },
      SurfaceForm: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 4,
        type: IfcBSplineSurfaceForm,
      },
      UClosed: {
        kind: f.BOOLEAN,
        optional: true,
        derived: false,
        offset: 5,
      },
      VClosed: {
        kind: f.BOOLEAN,
        optional: true,
        derived: false,
        offset: 6,
      },
      SelfIntersect: {
        kind: f.BOOLEAN,
        optional: true,
        derived: false,
        offset: 7,
      },
      UUpper: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
      VUpper: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
      ControlPoints: {
        kind: f.STEP_REFERENCE,
        rank: 2,
        optional: false,
        derived: true,
        type: e.IFCCARTESIANPOINT,
      },
    },
    typeId: e.IFCBSPLINESURFACE,
    isAbstract: true,
    superType: e.IFCBOUNDEDSURFACE,
    subTypes: [
       e.IFCBSPLINESURFACEWITHKNOTS,
    ],
  },
  {
    fields: {
      UMultiplicities: {
        kind: f.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
        offset: 8,
      },
      VMultiplicities: {
        kind: f.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
        offset: 9,
      },
      UKnots: {
        kind: f.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
        offset: 10,
      },
      VKnots: {
        kind: f.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
        offset: 11,
      },
      KnotSpec: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 12,
        type: IfcKnotType,
      },
      KnotVUpper: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
      KnotUUpper: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCBSPLINESURFACEWITHKNOTS,
    isAbstract: false,
    superType: e.IFCBSPLINESURFACE,
    subTypes: [
       e.IFCRATIONALBSPLINESURFACEWITHKNOTS,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCBOUNDEDSURFACE,
    isAbstract: true,
    superType: e.IFCSURFACE,
    subTypes: [
       e.IFCBSPLINESURFACE,
       e.IFCCURVEBOUNDEDPLANE,
       e.IFCCURVEBOUNDEDSURFACE,
       e.IFCRECTANGULARTRIMMEDSURFACE,
    ],
  },
  {
    fields: {
      WeightsData: {
        kind: f.NUMBER,
        rank: 2,
        optional: false,
        derived: false,
        offset: 13,
      },
      Weights: {
        kind: f.NUMBER,
        rank: 2,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCRATIONALBSPLINESURFACEWITHKNOTS,
    isAbstract: false,
    superType: e.IFCBSPLINESURFACEWITHKNOTS,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcBeamTypeEnum,
      },
    },
    typeId: e.IFCBEAM,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENT,
    subTypes: [
       e.IFCBEAMSTANDARDCASE,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCBEAMSTANDARDCASE,
    isAbstract: false,
    superType: e.IFCBEAM,
  },
  {
    fields: {
    },
    typeId: e.IFCBUILDINGELEMENT,
    isAbstract: true,
    superType: e.IFCELEMENT,
    subTypes: [
       e.IFCBEAM,
       e.IFCBUILDINGELEMENTPROXY,
       e.IFCCHIMNEY,
       e.IFCCOLUMN,
       e.IFCCOVERING,
       e.IFCCURTAINWALL,
       e.IFCDOOR,
       e.IFCFOOTING,
       e.IFCMEMBER,
       e.IFCPILE,
       e.IFCPLATE,
       e.IFCRAILING,
       e.IFCRAMP,
       e.IFCRAMPFLIGHT,
       e.IFCROOF,
       e.IFCSHADINGDEVICE,
       e.IFCSLAB,
       e.IFCSTAIR,
       e.IFCSTAIRFLIGHT,
       e.IFCWALL,
       e.IFCWINDOW,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcBeamTypeEnum,
      },
    },
    typeId: e.IFCBEAMTYPE,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
    },
    typeId: e.IFCBUILDINGELEMENTTYPE,
    isAbstract: true,
    superType: e.IFCELEMENTTYPE,
    subTypes: [
       e.IFCBEAMTYPE,
       e.IFCBUILDINGELEMENTPROXYTYPE,
       e.IFCCHIMNEYTYPE,
       e.IFCCOLUMNTYPE,
       e.IFCCOVERINGTYPE,
       e.IFCCURTAINWALLTYPE,
       e.IFCDOORTYPE,
       e.IFCFOOTINGTYPE,
       e.IFCMEMBERTYPE,
       e.IFCPILETYPE,
       e.IFCPLATETYPE,
       e.IFCRAILINGTYPE,
       e.IFCRAMPFLIGHTTYPE,
       e.IFCRAMPTYPE,
       e.IFCROOFTYPE,
       e.IFCSHADINGDEVICETYPE,
       e.IFCSLABTYPE,
       e.IFCSTAIRFLIGHTTYPE,
       e.IFCSTAIRTYPE,
       e.IFCWALLTYPE,
       e.IFCWINDOWTYPE,
    ],
  },
  {
    fields: {
      RasterFormat: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 6,
      },
      RasterCode: {
        kind: f.BINARY_DATA,
        optional: false,
        derived: false,
        offset: 7,
      },
    },
    typeId: e.IFCBLOBTEXTURE,
    isAbstract: false,
    superType: e.IFCSURFACETEXTURE,
  },
  {
    fields: {
      RepeatS: {
        kind: f.BOOLEAN,
        optional: false,
        derived: false,
        offset: 1,
      },
      RepeatT: {
        kind: f.BOOLEAN,
        optional: false,
        derived: false,
        offset: 2,
      },
      Mode: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 3,
      },
      TextureTransform: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 4,
        type: e.IFCCARTESIANTRANSFORMATIONOPERATOR2D,
      },
      Parameter: {
        kind: f.STRING,
        rank: 1,
        optional: true,
        derived: false,
        offset: 5,
      },
      IsMappedBy: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCTEXTURECOORDINATE,
      },
      UsedInStyles: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 7,
        type: e.IFCSURFACESTYLEWITHTEXTURES,
      },
    },
    typeId: e.IFCSURFACETEXTURE,
    isAbstract: true,
    superType: e.IFCPRESENTATIONITEM,
    subTypes: [
       e.IFCBLOBTEXTURE,
       e.IFCIMAGETEXTURE,
       e.IFCPIXELTEXTURE,
    ],
  },
  {
    fields: {
      XLength: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
      YLength: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 3,
      },
      ZLength: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
    },
    typeId: e.IFCBLOCK,
    isAbstract: false,
    superType: e.IFCCSGPRIMITIVE3D,
  },
  {
    fields: {
      Position: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCAXIS2PLACEMENT3D,
      },
      Dim: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCCSGPRIMITIVE3D,
    isAbstract: true,
    superType: e.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       e.IFCBLOCK,
       e.IFCRECTANGULARPYRAMID,
       e.IFCRIGHTCIRCULARCONE,
       e.IFCRIGHTCIRCULARCYLINDER,
       e.IFCSPHERE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcBoilerTypeEnum,
      },
    },
    typeId: e.IFCBOILER,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcBoilerTypeEnum,
      },
    },
    typeId: e.IFCBOILERTYPE,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
    },
    typeId: e.IFCBOOLEANCLIPPINGRESULT,
    isAbstract: false,
    superType: e.IFCBOOLEANRESULT,
  },
  {
    fields: {
      Operator: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 1,
        type: IfcBooleanOperator,
      },
      FirstOperand: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 2,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEANRESULT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCSGPRIMITIVE3D,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHALFSPACESOLID,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOLIDMODEL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTESSELLATEDFACESET,
          },
        ],
      },
      SecondOperand: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 3,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEANRESULT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCSGPRIMITIVE3D,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHALFSPACESOLID,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOLIDMODEL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTESSELLATEDFACESET,
          },
        ],
      },
      Dim: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCBOOLEANRESULT,
    isAbstract: false,
    superType: e.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       e.IFCBOOLEANCLIPPINGRESULT,
    ],
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
    },
    typeId: e.IFCBOUNDARYCONDITION,
    isAbstract: true,
    subTypes: [
       e.IFCBOUNDARYEDGECONDITION,
       e.IFCBOUNDARYFACECONDITION,
       e.IFCBOUNDARYNODECONDITION,
    ],
  },
  {
    fields: {
      TranslationalStiffnessByLengthX: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 2,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
        ],
      },
      TranslationalStiffnessByLengthY: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 3,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
        ],
      },
      TranslationalStiffnessByLengthZ: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 4,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
        ],
      },
      RotationalStiffnessByLengthX: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 5,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
        ],
      },
      RotationalStiffnessByLengthY: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 6,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
        ],
      },
      RotationalStiffnessByLengthZ: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 7,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
        ],
      },
    },
    typeId: e.IFCBOUNDARYEDGECONDITION,
    isAbstract: false,
    superType: e.IFCBOUNDARYCONDITION,
  },
  {
    fields: {
      TranslationalStiffnessByAreaX: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 2,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
        ],
      },
      TranslationalStiffnessByAreaY: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 3,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
        ],
      },
      TranslationalStiffnessByAreaZ: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 4,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
        ],
      },
    },
    typeId: e.IFCBOUNDARYFACECONDITION,
    isAbstract: false,
    superType: e.IFCBOUNDARYCONDITION,
  },
  {
    fields: {
      TranslationalStiffnessX: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 2,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARSTIFFNESSMEASURE,
          },
        ],
      },
      TranslationalStiffnessY: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 3,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARSTIFFNESSMEASURE,
          },
        ],
      },
      TranslationalStiffnessZ: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 4,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARSTIFFNESSMEASURE,
          },
        ],
      },
      RotationalStiffnessX: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 5,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALSTIFFNESSMEASURE,
          },
        ],
      },
      RotationalStiffnessY: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 6,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALSTIFFNESSMEASURE,
          },
        ],
      },
      RotationalStiffnessZ: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 7,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALSTIFFNESSMEASURE,
          },
        ],
      },
    },
    typeId: e.IFCBOUNDARYNODECONDITION,
    isAbstract: false,
    superType: e.IFCBOUNDARYCONDITION,
    subTypes: [
       e.IFCBOUNDARYNODECONDITIONWARPING,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCBOUNDARYCURVE,
    isAbstract: false,
    superType: e.IFCCOMPOSITECURVEONSURFACE,
    subTypes: [
       e.IFCOUTERBOUNDARYCURVE,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCOUTERBOUNDARYCURVE,
    isAbstract: false,
    superType: e.IFCBOUNDARYCURVE,
  },
  {
    fields: {
      BasisSurface: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: true,
        type: e.IFCSURFACE,
      },
    },
    typeId: e.IFCCOMPOSITECURVEONSURFACE,
    isAbstract: false,
    superType: e.IFCCOMPOSITECURVE,
    subTypes: [
       e.IFCBOUNDARYCURVE,
    ],
  },
  {
    fields: {
      WarpingStiffness: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 8,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGMOMENTMEASURE,
          },
        ],
      },
    },
    typeId: e.IFCBOUNDARYNODECONDITIONWARPING,
    isAbstract: false,
    superType: e.IFCBOUNDARYNODECONDITION,
  },
  {
    fields: {
      Segments: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCCOMPOSITECURVESEGMENT,
      },
      SelfIntersect: {
        kind: f.BOOLEAN,
        optional: true,
        derived: false,
        offset: 2,
      },
      NSegments: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
      ClosedCurve: {
        kind: f.BOOLEAN,
        optional: true,
        derived: true,
      },
    },
    typeId: e.IFCCOMPOSITECURVE,
    isAbstract: false,
    superType: e.IFCBOUNDEDCURVE,
    subTypes: [
       e.IFCCOMPOSITECURVEONSURFACE,
    ],
  },
  {
    fields: {
      Points: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCCARTESIANPOINTLIST,
      },
      Segments: {
        kind: f.SELECT,
        rank: 1,
        optional: true,
        derived: false,
        offset: 2,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCARCINDEX,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEINDEX,
          },
        ],
      },
      SelfIntersect: {
        kind: f.BOOLEAN,
        optional: true,
        derived: false,
        offset: 3,
      },
    },
    typeId: e.IFCINDEXEDPOLYCURVE,
    isAbstract: false,
    superType: e.IFCBOUNDEDCURVE,
  },
  {
    fields: {
      Points: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCCARTESIANPOINT,
      },
    },
    typeId: e.IFCPOLYLINE,
    isAbstract: false,
    superType: e.IFCBOUNDEDCURVE,
  },
  {
    fields: {
      BasisCurve: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCCURVE,
      },
      Trim1: {
        kind: f.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        offset: 2,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCARTESIANPOINT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPARAMETERVALUE,
          },
        ],
      },
      Trim2: {
        kind: f.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        offset: 3,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCARTESIANPOINT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPARAMETERVALUE,
          },
        ],
      },
      SenseAgreement: {
        kind: f.BOOLEAN,
        optional: false,
        derived: false,
        offset: 4,
      },
      MasterRepresentation: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 5,
        type: IfcTrimmingPreference,
      },
    },
    typeId: e.IFCTRIMMEDCURVE,
    isAbstract: false,
    superType: e.IFCBOUNDEDCURVE,
  },
  {
    fields: {
      Dim: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCCURVE,
    isAbstract: true,
    superType: e.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       e.IFCBOUNDEDCURVE,
       e.IFCCONIC,
       e.IFCLINE,
       e.IFCOFFSETCURVE2D,
       e.IFCOFFSETCURVE3D,
       e.IFCPCURVE,
       e.IFCSURFACECURVE,
    ],
  },
  {
    fields: {
      BasisSurface: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCPLANE,
      },
      OuterBoundary: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCCURVE,
      },
      InnerBoundaries: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCCURVE,
      },
    },
    typeId: e.IFCCURVEBOUNDEDPLANE,
    isAbstract: false,
    superType: e.IFCBOUNDEDSURFACE,
  },
  {
    fields: {
      BasisSurface: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCSURFACE,
      },
      Boundaries: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCBOUNDARYCURVE,
      },
      ImplicitOuter: {
        kind: f.BOOLEAN,
        optional: false,
        derived: false,
        offset: 3,
      },
    },
    typeId: e.IFCCURVEBOUNDEDSURFACE,
    isAbstract: false,
    superType: e.IFCBOUNDEDSURFACE,
  },
  {
    fields: {
      BasisSurface: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCSURFACE,
      },
      U1: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
      V1: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 3,
      },
      U2: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
      V2: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 5,
      },
      Usense: {
        kind: f.BOOLEAN,
        optional: false,
        derived: false,
        offset: 6,
      },
      Vsense: {
        kind: f.BOOLEAN,
        optional: false,
        derived: false,
        offset: 7,
      },
    },
    typeId: e.IFCRECTANGULARTRIMMEDSURFACE,
    isAbstract: false,
    superType: e.IFCBOUNDEDSURFACE,
  },
  {
    fields: {
      Dim: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCSURFACE,
    isAbstract: true,
    superType: e.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       e.IFCBOUNDEDSURFACE,
       e.IFCELEMENTARYSURFACE,
       e.IFCSWEPTSURFACE,
    ],
  },
  {
    fields: {
      Corner: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCCARTESIANPOINT,
      },
      XDim: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
      YDim: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 3,
      },
      ZDim: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
      Dim: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCBOUNDINGBOX,
    isAbstract: false,
    superType: e.IFCGEOMETRICREPRESENTATIONITEM,
  },
  {
    fields: {
      Enclosure: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCBOUNDINGBOX,
      },
    },
    typeId: e.IFCBOXEDHALFSPACE,
    isAbstract: false,
    superType: e.IFCHALFSPACESOLID,
  },
  {
    fields: {
      BaseSurface: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCSURFACE,
      },
      AgreementFlag: {
        kind: f.BOOLEAN,
        optional: false,
        derived: false,
        offset: 2,
      },
      Dim: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCHALFSPACESOLID,
    isAbstract: false,
    superType: e.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       e.IFCBOXEDHALFSPACE,
       e.IFCPOLYGONALBOUNDEDHALFSPACE,
    ],
  },
  {
    fields: {
      ElevationOfRefHeight: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 10,
      },
      ElevationOfTerrain: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 11,
      },
      BuildingAddress: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 12,
        type: e.IFCPOSTALADDRESS,
      },
    },
    typeId: e.IFCBUILDING,
    isAbstract: false,
    superType: e.IFCSPATIALSTRUCTUREELEMENT,
  },
  {
    fields: {
      CompositionType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcElementCompositionEnum,
      },
    },
    typeId: e.IFCSPATIALSTRUCTUREELEMENT,
    isAbstract: true,
    superType: e.IFCSPATIALELEMENT,
    subTypes: [
       e.IFCBUILDING,
       e.IFCBUILDINGSTOREY,
       e.IFCSITE,
       e.IFCSPACE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcBuildingElementProxyTypeEnum,
      },
    },
    typeId: e.IFCBUILDINGELEMENTPROXY,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcChimneyTypeEnum,
      },
    },
    typeId: e.IFCCHIMNEY,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcColumnTypeEnum,
      },
    },
    typeId: e.IFCCOLUMN,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENT,
    subTypes: [
       e.IFCCOLUMNSTANDARDCASE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcCoveringTypeEnum,
      },
      CoversSpaces: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 10,
        type: e.IFCRELCOVERSSPACES,
      },
      CoversElements: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 11,
        type: e.IFCRELCOVERSBLDGELEMENTS,
      },
    },
    typeId: e.IFCCOVERING,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcCurtainWallTypeEnum,
      },
    },
    typeId: e.IFCCURTAINWALL,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      OverallHeight: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 9,
      },
      OverallWidth: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 10,
      },
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 11,
        type: IfcDoorTypeEnum,
      },
      OperationType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 12,
        type: IfcDoorTypeOperationEnum,
      },
      UserDefinedOperationType: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 13,
      },
    },
    typeId: e.IFCDOOR,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENT,
    subTypes: [
       e.IFCDOORSTANDARDCASE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcFootingTypeEnum,
      },
    },
    typeId: e.IFCFOOTING,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcMemberTypeEnum,
      },
    },
    typeId: e.IFCMEMBER,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENT,
    subTypes: [
       e.IFCMEMBERSTANDARDCASE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcPileTypeEnum,
      },
      ConstructionType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 10,
        type: IfcPileConstructionEnum,
      },
    },
    typeId: e.IFCPILE,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcPlateTypeEnum,
      },
    },
    typeId: e.IFCPLATE,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENT,
    subTypes: [
       e.IFCPLATESTANDARDCASE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcRailingTypeEnum,
      },
    },
    typeId: e.IFCRAILING,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcRampTypeEnum,
      },
    },
    typeId: e.IFCRAMP,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcRampFlightTypeEnum,
      },
    },
    typeId: e.IFCRAMPFLIGHT,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcRoofTypeEnum,
      },
    },
    typeId: e.IFCROOF,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcShadingDeviceTypeEnum,
      },
    },
    typeId: e.IFCSHADINGDEVICE,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcSlabTypeEnum,
      },
    },
    typeId: e.IFCSLAB,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENT,
    subTypes: [
       e.IFCSLABELEMENTEDCASE,
       e.IFCSLABSTANDARDCASE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcStairTypeEnum,
      },
    },
    typeId: e.IFCSTAIR,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      NumberOfRisers: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 9,
      },
      NumberOfTreads: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 10,
      },
      RiserHeight: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 11,
      },
      TreadLength: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 12,
      },
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 13,
        type: IfcStairFlightTypeEnum,
      },
    },
    typeId: e.IFCSTAIRFLIGHT,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcWallTypeEnum,
      },
    },
    typeId: e.IFCWALL,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENT,
    subTypes: [
       e.IFCWALLELEMENTEDCASE,
       e.IFCWALLSTANDARDCASE,
    ],
  },
  {
    fields: {
      OverallHeight: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 9,
      },
      OverallWidth: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 10,
      },
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 11,
        type: IfcWindowTypeEnum,
      },
      PartitioningType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 12,
        type: IfcWindowTypePartitioningEnum,
      },
      UserDefinedPartitioningType: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 13,
      },
    },
    typeId: e.IFCWINDOW,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENT,
    subTypes: [
       e.IFCWINDOWSTANDARDCASE,
    ],
  },
  {
    fields: {
      Tag: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 8,
      },
      FillsVoids: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 9,
        type: e.IFCRELFILLSELEMENT,
      },
      ConnectedTo: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 10,
        type: e.IFCRELCONNECTSELEMENTS,
      },
      IsInterferedByElements: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 11,
        type: e.IFCRELINTERFERESELEMENTS,
      },
      InterferesElements: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 12,
        type: e.IFCRELINTERFERESELEMENTS,
      },
      HasProjections: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 13,
        type: e.IFCRELPROJECTSELEMENT,
      },
      ReferencedInStructures: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 14,
        type: e.IFCRELREFERENCEDINSPATIALSTRUCTURE,
      },
      HasOpenings: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 15,
        type: e.IFCRELVOIDSELEMENT,
      },
      IsConnectionRealization: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 16,
        type: e.IFCRELCONNECTSWITHREALIZINGELEMENTS,
      },
      ProvidesBoundaries: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 17,
        type: e.IFCRELSPACEBOUNDARY,
      },
      ConnectedFrom: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 18,
        type: e.IFCRELCONNECTSELEMENTS,
      },
      ContainedInStructure: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 19,
        type: e.IFCRELCONTAINEDINSPATIALSTRUCTURE,
      },
      HasCoverings: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 20,
        type: e.IFCRELCOVERSBLDGELEMENTS,
      },
    },
    typeId: e.IFCELEMENT,
    isAbstract: true,
    superType: e.IFCPRODUCT,
    subTypes: [
       e.IFCBUILDINGELEMENT,
       e.IFCCIVILELEMENT,
       e.IFCDISTRIBUTIONELEMENT,
       e.IFCELEMENTASSEMBLY,
       e.IFCELEMENTCOMPONENT,
       e.IFCFEATUREELEMENT,
       e.IFCFURNISHINGELEMENT,
       e.IFCGEOGRAPHICELEMENT,
       e.IFCTRANSPORTELEMENT,
       e.IFCVIRTUALELEMENT,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcBuildingElementPartTypeEnum,
      },
    },
    typeId: e.IFCBUILDINGELEMENTPART,
    isAbstract: false,
    superType: e.IFCELEMENTCOMPONENT,
  },
  {
    fields: {
    },
    typeId: e.IFCELEMENTCOMPONENT,
    isAbstract: true,
    superType: e.IFCELEMENT,
    subTypes: [
       e.IFCBUILDINGELEMENTPART,
       e.IFCDISCRETEACCESSORY,
       e.IFCFASTENER,
       e.IFCMECHANICALFASTENER,
       e.IFCREINFORCINGELEMENT,
       e.IFCVIBRATIONISOLATOR,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcBuildingElementPartTypeEnum,
      },
    },
    typeId: e.IFCBUILDINGELEMENTPARTTYPE,
    isAbstract: false,
    superType: e.IFCELEMENTCOMPONENTTYPE,
  },
  {
    fields: {
    },
    typeId: e.IFCELEMENTCOMPONENTTYPE,
    isAbstract: true,
    superType: e.IFCELEMENTTYPE,
    subTypes: [
       e.IFCBUILDINGELEMENTPARTTYPE,
       e.IFCDISCRETEACCESSORYTYPE,
       e.IFCFASTENERTYPE,
       e.IFCMECHANICALFASTENERTYPE,
       e.IFCREINFORCINGELEMENTTYPE,
       e.IFCVIBRATIONISOLATORTYPE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcBuildingElementProxyTypeEnum,
      },
    },
    typeId: e.IFCBUILDINGELEMENTPROXYTYPE,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcChimneyTypeEnum,
      },
    },
    typeId: e.IFCCHIMNEYTYPE,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcColumnTypeEnum,
      },
    },
    typeId: e.IFCCOLUMNTYPE,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcCoveringTypeEnum,
      },
    },
    typeId: e.IFCCOVERINGTYPE,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcCurtainWallTypeEnum,
      },
    },
    typeId: e.IFCCURTAINWALLTYPE,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcDoorTypeEnum,
      },
      OperationType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 11,
        type: IfcDoorTypeOperationEnum,
      },
      ParameterTakesPrecedence: {
        kind: f.BOOLEAN,
        optional: true,
        derived: false,
        offset: 12,
      },
      UserDefinedOperationType: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 13,
      },
    },
    typeId: e.IFCDOORTYPE,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcFootingTypeEnum,
      },
    },
    typeId: e.IFCFOOTINGTYPE,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcMemberTypeEnum,
      },
    },
    typeId: e.IFCMEMBERTYPE,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcPileTypeEnum,
      },
    },
    typeId: e.IFCPILETYPE,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcPlateTypeEnum,
      },
    },
    typeId: e.IFCPLATETYPE,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcRailingTypeEnum,
      },
    },
    typeId: e.IFCRAILINGTYPE,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcRampFlightTypeEnum,
      },
    },
    typeId: e.IFCRAMPFLIGHTTYPE,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcRampTypeEnum,
      },
    },
    typeId: e.IFCRAMPTYPE,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcRoofTypeEnum,
      },
    },
    typeId: e.IFCROOFTYPE,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcShadingDeviceTypeEnum,
      },
    },
    typeId: e.IFCSHADINGDEVICETYPE,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcSlabTypeEnum,
      },
    },
    typeId: e.IFCSLABTYPE,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcStairFlightTypeEnum,
      },
    },
    typeId: e.IFCSTAIRFLIGHTTYPE,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcStairTypeEnum,
      },
    },
    typeId: e.IFCSTAIRTYPE,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcWallTypeEnum,
      },
    },
    typeId: e.IFCWALLTYPE,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcWindowTypeEnum,
      },
      PartitioningType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 11,
        type: IfcWindowTypePartitioningEnum,
      },
      ParameterTakesPrecedence: {
        kind: f.BOOLEAN,
        optional: true,
        derived: false,
        offset: 12,
      },
      UserDefinedPartitioningType: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 13,
      },
    },
    typeId: e.IFCWINDOWTYPE,
    isAbstract: false,
    superType: e.IFCBUILDINGELEMENTTYPE,
  },
  {
    fields: {
      ElementType: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 9,
      },
    },
    typeId: e.IFCELEMENTTYPE,
    isAbstract: true,
    superType: e.IFCTYPEPRODUCT,
    subTypes: [
       e.IFCBUILDINGELEMENTTYPE,
       e.IFCCIVILELEMENTTYPE,
       e.IFCDISTRIBUTIONELEMENTTYPE,
       e.IFCELEMENTASSEMBLYTYPE,
       e.IFCELEMENTCOMPONENTTYPE,
       e.IFCFURNISHINGELEMENTTYPE,
       e.IFCGEOGRAPHICELEMENTTYPE,
       e.IFCTRANSPORTELEMENTTYPE,
    ],
  },
  {
    fields: {
      Elevation: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 10,
      },
    },
    typeId: e.IFCBUILDINGSTOREY,
    isAbstract: false,
    superType: e.IFCSPATIALSTRUCTUREELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 6,
        type: IfcBuildingSystemTypeEnum,
      },
      LongName: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 7,
      },
    },
    typeId: e.IFCBUILDINGSYSTEM,
    isAbstract: false,
    superType: e.IFCSYSTEM,
  },
  {
    fields: {
      ServicesBuildings: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCRELSERVICESBUILDINGS,
      },
    },
    typeId: e.IFCSYSTEM,
    isAbstract: false,
    superType: e.IFCGROUP,
    subTypes: [
       e.IFCBUILDINGSYSTEM,
       e.IFCDISTRIBUTIONSYSTEM,
       e.IFCSTRUCTURALANALYSISMODEL,
       e.IFCZONE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcBurnerTypeEnum,
      },
    },
    typeId: e.IFCBURNER,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcBurnerTypeEnum,
      },
    },
    typeId: e.IFCBURNERTYPE,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      Depth: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
      Width: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 5,
      },
      WallThickness: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 6,
      },
      Girth: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 7,
      },
      InternalFilletRadius: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 8,
      },
    },
    typeId: e.IFCCSHAPEPROFILEDEF,
    isAbstract: false,
    superType: e.IFCPARAMETERIZEDPROFILEDEF,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcCableCarrierFittingTypeEnum,
      },
    },
    typeId: e.IFCCABLECARRIERFITTING,
    isAbstract: false,
    superType: e.IFCFLOWFITTING,
  },
  {
    fields: {
    },
    typeId: e.IFCFLOWFITTING,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONFLOWELEMENT,
    subTypes: [
       e.IFCCABLECARRIERFITTING,
       e.IFCCABLEFITTING,
       e.IFCDUCTFITTING,
       e.IFCJUNCTIONBOX,
       e.IFCPIPEFITTING,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcCableCarrierFittingTypeEnum,
      },
    },
    typeId: e.IFCCABLECARRIERFITTINGTYPE,
    isAbstract: false,
    superType: e.IFCFLOWFITTINGTYPE,
  },
  {
    fields: {
    },
    typeId: e.IFCFLOWFITTINGTYPE,
    isAbstract: true,
    superType: e.IFCDISTRIBUTIONFLOWELEMENTTYPE,
    subTypes: [
       e.IFCCABLECARRIERFITTINGTYPE,
       e.IFCCABLEFITTINGTYPE,
       e.IFCDUCTFITTINGTYPE,
       e.IFCJUNCTIONBOXTYPE,
       e.IFCPIPEFITTINGTYPE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcCableCarrierSegmentTypeEnum,
      },
    },
    typeId: e.IFCCABLECARRIERSEGMENT,
    isAbstract: false,
    superType: e.IFCFLOWSEGMENT,
  },
  {
    fields: {
    },
    typeId: e.IFCFLOWSEGMENT,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONFLOWELEMENT,
    subTypes: [
       e.IFCCABLECARRIERSEGMENT,
       e.IFCCABLESEGMENT,
       e.IFCDUCTSEGMENT,
       e.IFCPIPESEGMENT,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcCableCarrierSegmentTypeEnum,
      },
    },
    typeId: e.IFCCABLECARRIERSEGMENTTYPE,
    isAbstract: false,
    superType: e.IFCFLOWSEGMENTTYPE,
  },
  {
    fields: {
    },
    typeId: e.IFCFLOWSEGMENTTYPE,
    isAbstract: true,
    superType: e.IFCDISTRIBUTIONFLOWELEMENTTYPE,
    subTypes: [
       e.IFCCABLECARRIERSEGMENTTYPE,
       e.IFCCABLESEGMENTTYPE,
       e.IFCDUCTSEGMENTTYPE,
       e.IFCPIPESEGMENTTYPE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcCableFittingTypeEnum,
      },
    },
    typeId: e.IFCCABLEFITTING,
    isAbstract: false,
    superType: e.IFCFLOWFITTING,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcCableFittingTypeEnum,
      },
    },
    typeId: e.IFCCABLEFITTINGTYPE,
    isAbstract: false,
    superType: e.IFCFLOWFITTINGTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcCableSegmentTypeEnum,
      },
    },
    typeId: e.IFCCABLESEGMENT,
    isAbstract: false,
    superType: e.IFCFLOWSEGMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcCableSegmentTypeEnum,
      },
    },
    typeId: e.IFCCABLESEGMENTTYPE,
    isAbstract: false,
    superType: e.IFCFLOWSEGMENTTYPE,
  },
  {
    fields: {
      Coordinates: {
        kind: f.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
      },
      Dim: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCCARTESIANPOINT,
    isAbstract: false,
    superType: e.IFCPOINT,
  },
  {
    fields: {
    },
    typeId: e.IFCPOINT,
    isAbstract: true,
    superType: e.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       e.IFCCARTESIANPOINT,
       e.IFCPOINTONCURVE,
       e.IFCPOINTONSURFACE,
    ],
  },
  {
    fields: {
      Dim: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCCARTESIANPOINTLIST,
    isAbstract: true,
    superType: e.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       e.IFCCARTESIANPOINTLIST2D,
       e.IFCCARTESIANPOINTLIST3D,
    ],
  },
  {
    fields: {
      CoordList: {
        kind: f.NUMBER,
        rank: 2,
        optional: false,
        derived: false,
        offset: 1,
      },
    },
    typeId: e.IFCCARTESIANPOINTLIST2D,
    isAbstract: false,
    superType: e.IFCCARTESIANPOINTLIST,
  },
  {
    fields: {
      CoordList: {
        kind: f.NUMBER,
        rank: 2,
        optional: false,
        derived: false,
        offset: 1,
      },
    },
    typeId: e.IFCCARTESIANPOINTLIST3D,
    isAbstract: false,
    superType: e.IFCCARTESIANPOINTLIST,
  },
  {
    fields: {
      Axis1: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 1,
        type: e.IFCDIRECTION,
      },
      Axis2: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 2,
        type: e.IFCDIRECTION,
      },
      LocalOrigin: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCCARTESIANPOINT,
      },
      Scale: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 4,
      },
      Scl: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
      Dim: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCCARTESIANTRANSFORMATIONOPERATOR,
    isAbstract: true,
    superType: e.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       e.IFCCARTESIANTRANSFORMATIONOPERATOR2D,
       e.IFCCARTESIANTRANSFORMATIONOPERATOR3D,
    ],
  },
  {
    fields: {
      U: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: true,
        type: e.IFCDIRECTION,
      },
    },
    typeId: e.IFCCARTESIANTRANSFORMATIONOPERATOR2D,
    isAbstract: false,
    superType: e.IFCCARTESIANTRANSFORMATIONOPERATOR,
    subTypes: [
       e.IFCCARTESIANTRANSFORMATIONOPERATOR2DNONUNIFORM,
    ],
  },
  {
    fields: {
      Axis3: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 5,
        type: e.IFCDIRECTION,
      },
      U: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: true,
        type: e.IFCDIRECTION,
      },
    },
    typeId: e.IFCCARTESIANTRANSFORMATIONOPERATOR3D,
    isAbstract: false,
    superType: e.IFCCARTESIANTRANSFORMATIONOPERATOR,
    subTypes: [
       e.IFCCARTESIANTRANSFORMATIONOPERATOR3DNONUNIFORM,
    ],
  },
  {
    fields: {
      Scale2: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 5,
      },
      Scl2: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCCARTESIANTRANSFORMATIONOPERATOR2DNONUNIFORM,
    isAbstract: false,
    superType: e.IFCCARTESIANTRANSFORMATIONOPERATOR2D,
  },
  {
    fields: {
      Scale2: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 6,
      },
      Scale3: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 7,
      },
      Scl2: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
      Scl3: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCCARTESIANTRANSFORMATIONOPERATOR3DNONUNIFORM,
    isAbstract: false,
    superType: e.IFCCARTESIANTRANSFORMATIONOPERATOR3D,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcChillerTypeEnum,
      },
    },
    typeId: e.IFCCHILLER,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcChillerTypeEnum,
      },
    },
    typeId: e.IFCCHILLERTYPE,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      Radius: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
    },
    typeId: e.IFCCIRCLE,
    isAbstract: false,
    superType: e.IFCCONIC,
  },
  {
    fields: {
      Position: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 1,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAXIS2PLACEMENT2D,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAXIS2PLACEMENT3D,
          },
        ],
      },
    },
    typeId: e.IFCCONIC,
    isAbstract: true,
    superType: e.IFCCURVE,
    subTypes: [
       e.IFCCIRCLE,
       e.IFCELLIPSE,
    ],
  },
  {
    fields: {
      WallThickness: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 5,
      },
    },
    typeId: e.IFCCIRCLEHOLLOWPROFILEDEF,
    isAbstract: false,
    superType: e.IFCCIRCLEPROFILEDEF,
  },
  {
    fields: {
      Radius: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
    },
    typeId: e.IFCCIRCLEPROFILEDEF,
    isAbstract: false,
    superType: e.IFCPARAMETERIZEDPROFILEDEF,
    subTypes: [
       e.IFCCIRCLEHOLLOWPROFILEDEF,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCCIVILELEMENT,
    isAbstract: false,
    superType: e.IFCELEMENT,
  },
  {
    fields: {
    },
    typeId: e.IFCCIVILELEMENTTYPE,
    isAbstract: false,
    superType: e.IFCELEMENTTYPE,
  },
  {
    fields: {
      Source: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
      Edition: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      EditionDate: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 3,
      },
      Name: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 4,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
      Location: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      ReferenceTokens: {
        kind: f.STRING,
        rank: 1,
        optional: true,
        derived: false,
        offset: 7,
      },
      ClassificationForObjects: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 8,
        type: e.IFCRELASSOCIATESCLASSIFICATION,
      },
      HasReferences: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 9,
        type: e.IFCCLASSIFICATIONREFERENCE,
      },
    },
    typeId: e.IFCCLASSIFICATION,
    isAbstract: false,
    superType: e.IFCEXTERNALINFORMATION,
  },
  {
    fields: {
    },
    typeId: e.IFCEXTERNALINFORMATION,
    isAbstract: true,
    subTypes: [
       e.IFCCLASSIFICATION,
       e.IFCDOCUMENTINFORMATION,
       e.IFCLIBRARYINFORMATION,
    ],
  },
  {
    fields: {
      ReferencedSource: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 4,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCLASSIFICATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCLASSIFICATIONREFERENCE,
          },
        ],
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
      Sort: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      ClassificationRefForObjects: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 7,
        type: e.IFCRELASSOCIATESCLASSIFICATION,
      },
      HasReferences: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 8,
        type: e.IFCCLASSIFICATIONREFERENCE,
      },
    },
    typeId: e.IFCCLASSIFICATIONREFERENCE,
    isAbstract: false,
    superType: e.IFCEXTERNALREFERENCE,
  },
  {
    fields: {
      Location: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
      Identification: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      Name: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 3,
      },
      ExternalReferenceForResources: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCEXTERNALREFERENCERELATIONSHIP,
      },
    },
    typeId: e.IFCEXTERNALREFERENCE,
    isAbstract: true,
    subTypes: [
       e.IFCCLASSIFICATIONREFERENCE,
       e.IFCDOCUMENTREFERENCE,
       e.IFCEXTERNALLYDEFINEDHATCHSTYLE,
       e.IFCEXTERNALLYDEFINEDSURFACESTYLE,
       e.IFCEXTERNALLYDEFINEDTEXTFONT,
       e.IFCLIBRARYREFERENCE,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCCLOSEDSHELL,
    isAbstract: false,
    superType: e.IFCCONNECTEDFACESET,
  },
  {
    fields: {
      CfsFaces: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCFACE,
      },
    },
    typeId: e.IFCCONNECTEDFACESET,
    isAbstract: false,
    superType: e.IFCTOPOLOGICALREPRESENTATIONITEM,
    subTypes: [
       e.IFCCLOSEDSHELL,
       e.IFCOPENSHELL,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcCoilTypeEnum,
      },
    },
    typeId: e.IFCCOIL,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcCoilTypeEnum,
      },
    },
    typeId: e.IFCCOILTYPE,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      Red: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
      Green: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 3,
      },
      Blue: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
    },
    typeId: e.IFCCOLOURRGB,
    isAbstract: false,
    superType: e.IFCCOLOURSPECIFICATION,
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
    },
    typeId: e.IFCCOLOURSPECIFICATION,
    isAbstract: true,
    superType: e.IFCPRESENTATIONITEM,
    subTypes: [
       e.IFCCOLOURRGB,
    ],
  },
  {
    fields: {
      ColourList: {
        kind: f.NUMBER,
        rank: 2,
        optional: false,
        derived: false,
        offset: 1,
      },
    },
    typeId: e.IFCCOLOURRGBLIST,
    isAbstract: false,
    superType: e.IFCPRESENTATIONITEM,
  },
  {
    fields: {
    },
    typeId: e.IFCPRESENTATIONITEM,
    isAbstract: true,
    subTypes: [
       e.IFCCOLOURRGBLIST,
       e.IFCCOLOURSPECIFICATION,
       e.IFCCURVESTYLEFONT,
       e.IFCCURVESTYLEFONTANDSCALING,
       e.IFCCURVESTYLEFONTPATTERN,
       e.IFCINDEXEDCOLOURMAP,
       e.IFCPREDEFINEDITEM,
       e.IFCSURFACESTYLELIGHTING,
       e.IFCSURFACESTYLEREFRACTION,
       e.IFCSURFACESTYLESHADING,
       e.IFCSURFACESTYLEWITHTEXTURES,
       e.IFCSURFACETEXTURE,
       e.IFCTEXTSTYLEFORDEFINEDFONT,
       e.IFCTEXTSTYLETEXTMODEL,
       e.IFCTEXTURECOORDINATE,
       e.IFCTEXTUREVERTEX,
       e.IFCTEXTUREVERTEXLIST,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCCOLUMNSTANDARDCASE,
    isAbstract: false,
    superType: e.IFCCOLUMN,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcCommunicationsApplianceTypeEnum,
      },
    },
    typeId: e.IFCCOMMUNICATIONSAPPLIANCE,
    isAbstract: false,
    superType: e.IFCFLOWTERMINAL,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcCommunicationsApplianceTypeEnum,
      },
    },
    typeId: e.IFCCOMMUNICATIONSAPPLIANCETYPE,
    isAbstract: false,
    superType: e.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
      UsageName: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 3,
      },
      HasProperties: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCPROPERTY,
      },
    },
    typeId: e.IFCCOMPLEXPROPERTY,
    isAbstract: false,
    superType: e.IFCPROPERTY,
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 1,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      PartOfPset: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCPROPERTYSET,
      },
      PropertyForDependance: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCPROPERTYDEPENDENCYRELATIONSHIP,
      },
      PropertyDependsOn: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCPROPERTYDEPENDENCYRELATIONSHIP,
      },
      PartOfComplex: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCCOMPLEXPROPERTY,
      },
      HasConstraints: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 7,
        type: e.IFCRESOURCECONSTRAINTRELATIONSHIP,
      },
      HasApprovals: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 8,
        type: e.IFCRESOURCEAPPROVALRELATIONSHIP,
      },
    },
    typeId: e.IFCPROPERTY,
    isAbstract: true,
    superType: e.IFCPROPERTYABSTRACTION,
    subTypes: [
       e.IFCCOMPLEXPROPERTY,
       e.IFCSIMPLEPROPERTY,
    ],
  },
  {
    fields: {
      UsageName: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
      TemplateType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 6,
        type: IfcComplexPropertyTemplateTypeEnum,
      },
      HasPropertyTemplates: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 7,
        type: e.IFCPROPERTYTEMPLATE,
      },
    },
    typeId: e.IFCCOMPLEXPROPERTYTEMPLATE,
    isAbstract: false,
    superType: e.IFCPROPERTYTEMPLATE,
  },
  {
    fields: {
      PartOfComplexTemplate: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCCOMPLEXPROPERTYTEMPLATE,
      },
      PartOfPsetTemplate: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCPROPERTYSETTEMPLATE,
      },
    },
    typeId: e.IFCPROPERTYTEMPLATE,
    isAbstract: true,
    superType: e.IFCPROPERTYTEMPLATEDEFINITION,
    subTypes: [
       e.IFCCOMPLEXPROPERTYTEMPLATE,
       e.IFCSIMPLEPROPERTYTEMPLATE,
    ],
  },
  {
    fields: {
      Transition: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 1,
        type: IfcTransitionCode,
      },
      SameSense: {
        kind: f.BOOLEAN,
        optional: false,
        derived: false,
        offset: 2,
      },
      ParentCurve: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCCURVE,
      },
      Dim: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
      UsingCurves: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCCOMPOSITECURVE,
      },
    },
    typeId: e.IFCCOMPOSITECURVESEGMENT,
    isAbstract: false,
    superType: e.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       e.IFCREPARAMETRISEDCOMPOSITECURVESEGMENT,
    ],
  },
  {
    fields: {
      ParamLength: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
    },
    typeId: e.IFCREPARAMETRISEDCOMPOSITECURVESEGMENT,
    isAbstract: false,
    superType: e.IFCCOMPOSITECURVESEGMENT,
  },
  {
    fields: {
      Profiles: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCPROFILEDEF,
      },
      Label: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 4,
      },
    },
    typeId: e.IFCCOMPOSITEPROFILEDEF,
    isAbstract: false,
    superType: e.IFCPROFILEDEF,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcCompressorTypeEnum,
      },
    },
    typeId: e.IFCCOMPRESSOR,
    isAbstract: false,
    superType: e.IFCFLOWMOVINGDEVICE,
  },
  {
    fields: {
    },
    typeId: e.IFCFLOWMOVINGDEVICE,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONFLOWELEMENT,
    subTypes: [
       e.IFCCOMPRESSOR,
       e.IFCFAN,
       e.IFCPUMP,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcCompressorTypeEnum,
      },
    },
    typeId: e.IFCCOMPRESSORTYPE,
    isAbstract: false,
    superType: e.IFCFLOWMOVINGDEVICETYPE,
  },
  {
    fields: {
    },
    typeId: e.IFCFLOWMOVINGDEVICETYPE,
    isAbstract: true,
    superType: e.IFCDISTRIBUTIONFLOWELEMENTTYPE,
    subTypes: [
       e.IFCCOMPRESSORTYPE,
       e.IFCFANTYPE,
       e.IFCPUMPTYPE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcCondenserTypeEnum,
      },
    },
    typeId: e.IFCCONDENSER,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcCondenserTypeEnum,
      },
    },
    typeId: e.IFCCONDENSERTYPE,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      SemiAxis1: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
      SemiAxis2: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 3,
      },
    },
    typeId: e.IFCELLIPSE,
    isAbstract: false,
    superType: e.IFCCONIC,
  },
  {
    fields: {
    },
    typeId: e.IFCOPENSHELL,
    isAbstract: false,
    superType: e.IFCCONNECTEDFACESET,
  },
  {
    fields: {
    },
    typeId: e.IFCTOPOLOGICALREPRESENTATIONITEM,
    isAbstract: true,
    superType: e.IFCREPRESENTATIONITEM,
    subTypes: [
       e.IFCCONNECTEDFACESET,
       e.IFCEDGE,
       e.IFCFACE,
       e.IFCFACEBOUND,
       e.IFCLOOP,
       e.IFCPATH,
       e.IFCVERTEX,
    ],
  },
  {
    fields: {
      CurveOnRelatingElement: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 1,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOUNDEDCURVE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCEDGECURVE,
          },
        ],
      },
      CurveOnRelatedElement: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 2,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOUNDEDCURVE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCEDGECURVE,
          },
        ],
      },
    },
    typeId: e.IFCCONNECTIONCURVEGEOMETRY,
    isAbstract: false,
    superType: e.IFCCONNECTIONGEOMETRY,
  },
  {
    fields: {
    },
    typeId: e.IFCCONNECTIONGEOMETRY,
    isAbstract: true,
    subTypes: [
       e.IFCCONNECTIONCURVEGEOMETRY,
       e.IFCCONNECTIONPOINTGEOMETRY,
       e.IFCCONNECTIONSURFACEGEOMETRY,
       e.IFCCONNECTIONVOLUMEGEOMETRY,
    ],
  },
  {
    fields: {
      PointOnRelatingElement: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 1,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOINT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVERTEXPOINT,
          },
        ],
      },
      PointOnRelatedElement: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 2,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOINT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVERTEXPOINT,
          },
        ],
      },
    },
    typeId: e.IFCCONNECTIONPOINTGEOMETRY,
    isAbstract: false,
    superType: e.IFCCONNECTIONGEOMETRY,
    subTypes: [
       e.IFCCONNECTIONPOINTECCENTRICITY,
    ],
  },
  {
    fields: {
      SurfaceOnRelatingElement: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 1,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFACEBASEDSURFACEMODEL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFACESURFACE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSURFACE,
          },
        ],
      },
      SurfaceOnRelatedElement: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 2,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFACEBASEDSURFACEMODEL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFACESURFACE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSURFACE,
          },
        ],
      },
    },
    typeId: e.IFCCONNECTIONSURFACEGEOMETRY,
    isAbstract: false,
    superType: e.IFCCONNECTIONGEOMETRY,
  },
  {
    fields: {
      VolumeOnRelatingElement: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 1,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCLOSEDSHELL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOLIDMODEL,
          },
        ],
      },
      VolumeOnRelatedElement: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 2,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCLOSEDSHELL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOLIDMODEL,
          },
        ],
      },
    },
    typeId: e.IFCCONNECTIONVOLUMEGEOMETRY,
    isAbstract: false,
    superType: e.IFCCONNECTIONGEOMETRY,
  },
  {
    fields: {
      EccentricityInX: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 3,
      },
      EccentricityInY: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 4,
      },
      EccentricityInZ: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 5,
      },
    },
    typeId: e.IFCCONNECTIONPOINTECCENTRICITY,
    isAbstract: false,
    superType: e.IFCCONNECTIONPOINTGEOMETRY,
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 1,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      ConstraintGrade: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 3,
        type: IfcConstraintEnum,
      },
      ConstraintSource: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 4,
      },
      CreatingActor: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 5,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCORGANIZATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSON,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSONANDORGANIZATION,
          },
        ],
      },
      CreationTime: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      UserDefinedGrade: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 7,
      },
      HasExternalReferences: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 8,
        type: e.IFCEXTERNALREFERENCERELATIONSHIP,
      },
      PropertiesForConstraint: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 9,
        type: e.IFCRESOURCECONSTRAINTRELATIONSHIP,
      },
    },
    typeId: e.IFCCONSTRAINT,
    isAbstract: true,
    subTypes: [
       e.IFCMETRIC,
       e.IFCOBJECTIVE,
    ],
  },
  {
    fields: {
      Benchmark: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 8,
        type: IfcBenchmarkEnum,
      },
      ValueSource: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 9,
      },
      DataValue: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 10,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAPPLIEDVALUE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMEASUREWITHUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCREFERENCE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTABLE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMESERIES,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCACCELERATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREADENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCURVATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCENERGYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCILLUMINANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTORQUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPLEXNUMBER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOUNTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNUMERICMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPARAMETERVALUE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBINARY,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATETIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDURATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIDENTIFIER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLABEL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLOGICAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCREAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEXT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMESTAMP,
          },
        ],
      },
      ReferencePath: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 11,
        type: e.IFCREFERENCE,
      },
    },
    typeId: e.IFCMETRIC,
    isAbstract: false,
    superType: e.IFCCONSTRAINT,
  },
  {
    fields: {
      BenchmarkValues: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 8,
        type: e.IFCCONSTRAINT,
      },
      LogicalAggregator: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcLogicalOperatorEnum,
      },
      ObjectiveQualifier: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcObjectiveEnum,
      },
      UserDefinedQualifier: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 11,
      },
    },
    typeId: e.IFCOBJECTIVE,
    isAbstract: false,
    superType: e.IFCCONSTRAINT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 11,
        type: IfcConstructionEquipmentResourceTypeEnum,
      },
    },
    typeId: e.IFCCONSTRUCTIONEQUIPMENTRESOURCE,
    isAbstract: false,
    superType: e.IFCCONSTRUCTIONRESOURCE,
  },
  {
    fields: {
      Usage: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 8,
        type: e.IFCRESOURCETIME,
      },
      BaseCosts: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 9,
        type: e.IFCAPPLIEDVALUE,
      },
      BaseQuantity: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 10,
        type: e.IFCPHYSICALQUANTITY,
      },
    },
    typeId: e.IFCCONSTRUCTIONRESOURCE,
    isAbstract: true,
    superType: e.IFCRESOURCE,
    subTypes: [
       e.IFCCONSTRUCTIONEQUIPMENTRESOURCE,
       e.IFCCONSTRUCTIONMATERIALRESOURCE,
       e.IFCCONSTRUCTIONPRODUCTRESOURCE,
       e.IFCCREWRESOURCE,
       e.IFCLABORRESOURCE,
       e.IFCSUBCONTRACTRESOURCE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 12,
        type: IfcConstructionEquipmentResourceTypeEnum,
      },
    },
    typeId: e.IFCCONSTRUCTIONEQUIPMENTRESOURCETYPE,
    isAbstract: false,
    superType: e.IFCCONSTRUCTIONRESOURCETYPE,
  },
  {
    fields: {
      BaseCosts: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 10,
        type: e.IFCAPPLIEDVALUE,
      },
      BaseQuantity: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 11,
        type: e.IFCPHYSICALQUANTITY,
      },
    },
    typeId: e.IFCCONSTRUCTIONRESOURCETYPE,
    isAbstract: true,
    superType: e.IFCTYPERESOURCE,
    subTypes: [
       e.IFCCONSTRUCTIONEQUIPMENTRESOURCETYPE,
       e.IFCCONSTRUCTIONMATERIALRESOURCETYPE,
       e.IFCCONSTRUCTIONPRODUCTRESOURCETYPE,
       e.IFCCREWRESOURCETYPE,
       e.IFCLABORRESOURCETYPE,
       e.IFCSUBCONTRACTRESOURCETYPE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 11,
        type: IfcConstructionMaterialResourceTypeEnum,
      },
    },
    typeId: e.IFCCONSTRUCTIONMATERIALRESOURCE,
    isAbstract: false,
    superType: e.IFCCONSTRUCTIONRESOURCE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 12,
        type: IfcConstructionMaterialResourceTypeEnum,
      },
    },
    typeId: e.IFCCONSTRUCTIONMATERIALRESOURCETYPE,
    isAbstract: false,
    superType: e.IFCCONSTRUCTIONRESOURCETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 11,
        type: IfcConstructionProductResourceTypeEnum,
      },
    },
    typeId: e.IFCCONSTRUCTIONPRODUCTRESOURCE,
    isAbstract: false,
    superType: e.IFCCONSTRUCTIONRESOURCE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 12,
        type: IfcConstructionProductResourceTypeEnum,
      },
    },
    typeId: e.IFCCONSTRUCTIONPRODUCTRESOURCETYPE,
    isAbstract: false,
    superType: e.IFCCONSTRUCTIONRESOURCETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 11,
        type: IfcCrewResourceTypeEnum,
      },
    },
    typeId: e.IFCCREWRESOURCE,
    isAbstract: false,
    superType: e.IFCCONSTRUCTIONRESOURCE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 11,
        type: IfcLaborResourceTypeEnum,
      },
    },
    typeId: e.IFCLABORRESOURCE,
    isAbstract: false,
    superType: e.IFCCONSTRUCTIONRESOURCE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 11,
        type: IfcSubContractResourceTypeEnum,
      },
    },
    typeId: e.IFCSUBCONTRACTRESOURCE,
    isAbstract: false,
    superType: e.IFCCONSTRUCTIONRESOURCE,
  },
  {
    fields: {
      Identification: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      LongDescription: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 7,
      },
      ResourceOf: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 8,
        type: e.IFCRELASSIGNSTORESOURCE,
      },
    },
    typeId: e.IFCRESOURCE,
    isAbstract: true,
    superType: e.IFCOBJECT,
    subTypes: [
       e.IFCCONSTRUCTIONRESOURCE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 12,
        type: IfcCrewResourceTypeEnum,
      },
    },
    typeId: e.IFCCREWRESOURCETYPE,
    isAbstract: false,
    superType: e.IFCCONSTRUCTIONRESOURCETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 12,
        type: IfcLaborResourceTypeEnum,
      },
    },
    typeId: e.IFCLABORRESOURCETYPE,
    isAbstract: false,
    superType: e.IFCCONSTRUCTIONRESOURCETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 12,
        type: IfcSubContractResourceTypeEnum,
      },
    },
    typeId: e.IFCSUBCONTRACTRESOURCETYPE,
    isAbstract: false,
    superType: e.IFCCONSTRUCTIONRESOURCETYPE,
  },
  {
    fields: {
      Identification: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 7,
      },
      LongDescription: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 8,
      },
      ResourceType: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 9,
      },
      ResourceOf: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 10,
        type: e.IFCRELASSIGNSTORESOURCE,
      },
    },
    typeId: e.IFCTYPERESOURCE,
    isAbstract: true,
    superType: e.IFCTYPEOBJECT,
    subTypes: [
       e.IFCCONSTRUCTIONRESOURCETYPE,
    ],
  },
  {
    fields: {
      ObjectType: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
      LongName: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      Phase: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 7,
      },
      RepresentationContexts: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 8,
        type: e.IFCREPRESENTATIONCONTEXT,
      },
      UnitsInContext: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 9,
        type: e.IFCUNITASSIGNMENT,
      },
      IsDefinedBy: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 10,
        type: e.IFCRELDEFINESBYPROPERTIES,
      },
      Declares: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 11,
        type: e.IFCRELDECLARES,
      },
    },
    typeId: e.IFCCONTEXT,
    isAbstract: true,
    superType: e.IFCOBJECTDEFINITION,
    subTypes: [
       e.IFCPROJECT,
       e.IFCPROJECTLIBRARY,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCPROJECT,
    isAbstract: false,
    superType: e.IFCCONTEXT,
  },
  {
    fields: {
    },
    typeId: e.IFCPROJECTLIBRARY,
    isAbstract: false,
    superType: e.IFCCONTEXT,
  },
  {
    fields: {
      HasAssignments: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCRELASSIGNS,
      },
      Nests: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCRELNESTS,
      },
      IsNestedBy: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 7,
        type: e.IFCRELNESTS,
      },
      HasContext: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 8,
        type: e.IFCRELDECLARES,
      },
      IsDecomposedBy: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 9,
        type: e.IFCRELAGGREGATES,
      },
      Decomposes: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 10,
        type: e.IFCRELAGGREGATES,
      },
      HasAssociations: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 11,
        type: e.IFCRELASSOCIATES,
      },
    },
    typeId: e.IFCOBJECTDEFINITION,
    isAbstract: true,
    superType: e.IFCROOT,
    subTypes: [
       e.IFCCONTEXT,
       e.IFCOBJECT,
       e.IFCTYPEOBJECT,
    ],
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 3,
      },
      HasExternalReference: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCEXTERNALREFERENCERELATIONSHIP,
      },
    },
    typeId: e.IFCCONTEXTDEPENDENTUNIT,
    isAbstract: false,
    superType: e.IFCNAMEDUNIT,
  },
  {
    fields: {
      Dimensions: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCDIMENSIONALEXPONENTS,
      },
      UnitType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 2,
        type: IfcUnitEnum,
      },
    },
    typeId: e.IFCNAMEDUNIT,
    isAbstract: true,
    subTypes: [
       e.IFCCONTEXTDEPENDENTUNIT,
       e.IFCCONVERSIONBASEDUNIT,
       e.IFCSIUNIT,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 7,
        type: IfcCostItemTypeEnum,
      },
      CostValues: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 8,
        type: e.IFCCOSTVALUE,
      },
      CostQuantities: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 9,
        type: e.IFCPHYSICALQUANTITY,
      },
    },
    typeId: e.IFCCOSTITEM,
    isAbstract: false,
    superType: e.IFCCONTROL,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 7,
        type: IfcCostScheduleTypeEnum,
      },
      Status: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 8,
      },
      SubmittedOn: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 9,
      },
      UpdateDate: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 10,
      },
    },
    typeId: e.IFCCOSTSCHEDULE,
    isAbstract: false,
    superType: e.IFCCONTROL,
  },
  {
    fields: {
      LifeCyclePhase: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 7,
      },
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 8,
        type: IfcPerformanceHistoryTypeEnum,
      },
    },
    typeId: e.IFCPERFORMANCEHISTORY,
    isAbstract: false,
    superType: e.IFCCONTROL,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 7,
        type: IfcPermitTypeEnum,
      },
      Status: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 8,
      },
      LongDescription: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 9,
      },
    },
    typeId: e.IFCPERMIT,
    isAbstract: false,
    superType: e.IFCCONTROL,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 7,
        type: IfcProjectOrderTypeEnum,
      },
      Status: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 8,
      },
      LongDescription: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 9,
      },
    },
    typeId: e.IFCPROJECTORDER,
    isAbstract: false,
    superType: e.IFCCONTROL,
  },
  {
    fields: {
      WorkingTimes: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 7,
        type: e.IFCWORKTIME,
      },
      ExceptionTimes: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 8,
        type: e.IFCWORKTIME,
      },
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcWorkCalendarTypeEnum,
      },
    },
    typeId: e.IFCWORKCALENDAR,
    isAbstract: false,
    superType: e.IFCCONTROL,
  },
  {
    fields: {
      CreationDate: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 7,
      },
      Creators: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 8,
        type: e.IFCPERSON,
      },
      Purpose: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 9,
      },
      Duration: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 10,
      },
      TotalFloat: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 11,
      },
      StartTime: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 12,
      },
      FinishTime: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 13,
      },
    },
    typeId: e.IFCWORKCONTROL,
    isAbstract: true,
    superType: e.IFCCONTROL,
    subTypes: [
       e.IFCWORKPLAN,
       e.IFCWORKSCHEDULE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcControllerTypeEnum,
      },
    },
    typeId: e.IFCCONTROLLER,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONCONTROLELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcControllerTypeEnum,
      },
    },
    typeId: e.IFCCONTROLLERTYPE,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONCONTROLELEMENTTYPE,
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 3,
      },
      ConversionFactor: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCMEASUREWITHUNIT,
      },
      HasExternalReference: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCEXTERNALREFERENCERELATIONSHIP,
      },
    },
    typeId: e.IFCCONVERSIONBASEDUNIT,
    isAbstract: false,
    superType: e.IFCNAMEDUNIT,
    subTypes: [
       e.IFCCONVERSIONBASEDUNITWITHOFFSET,
    ],
  },
  {
    fields: {
      ConversionOffset: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 5,
      },
    },
    typeId: e.IFCCONVERSIONBASEDUNITWITHOFFSET,
    isAbstract: false,
    superType: e.IFCCONVERSIONBASEDUNIT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcCooledBeamTypeEnum,
      },
    },
    typeId: e.IFCCOOLEDBEAM,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcCooledBeamTypeEnum,
      },
    },
    typeId: e.IFCCOOLEDBEAMTYPE,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcCoolingTowerTypeEnum,
      },
    },
    typeId: e.IFCCOOLINGTOWER,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcCoolingTowerTypeEnum,
      },
    },
    typeId: e.IFCCOOLINGTOWERTYPE,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      SourceCRS: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 1,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOORDINATEREFERENCESYSTEM,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCGEOMETRICREPRESENTATIONCONTEXT,
          },
        ],
      },
      TargetCRS: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCCOORDINATEREFERENCESYSTEM,
      },
    },
    typeId: e.IFCCOORDINATEOPERATION,
    isAbstract: true,
    subTypes: [
       e.IFCMAPCONVERSION,
    ],
  },
  {
    fields: {
      Eastings: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 3,
      },
      Northings: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
      OrthogonalHeight: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 5,
      },
      XAxisAbscissa: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 6,
      },
      XAxisOrdinate: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 7,
      },
      Scale: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 8,
      },
    },
    typeId: e.IFCMAPCONVERSION,
    isAbstract: false,
    superType: e.IFCCOORDINATEOPERATION,
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 1,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      GeodeticDatum: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 3,
      },
      VerticalDatum: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 4,
      },
      HasCoordinateOperation: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCCOORDINATEOPERATION,
      },
    },
    typeId: e.IFCCOORDINATEREFERENCESYSTEM,
    isAbstract: true,
    subTypes: [
       e.IFCPROJECTEDCRS,
    ],
  },
  {
    fields: {
      MapProjection: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
      MapZone: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      MapUnit: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 7,
        type: e.IFCNAMEDUNIT,
      },
    },
    typeId: e.IFCPROJECTEDCRS,
    isAbstract: false,
    superType: e.IFCCOORDINATEREFERENCESYSTEM,
  },
  {
    fields: {
      XLength: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
      YLength: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 3,
      },
      Height: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
    },
    typeId: e.IFCRECTANGULARPYRAMID,
    isAbstract: false,
    superType: e.IFCCSGPRIMITIVE3D,
  },
  {
    fields: {
      Height: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
      BottomRadius: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 3,
      },
    },
    typeId: e.IFCRIGHTCIRCULARCONE,
    isAbstract: false,
    superType: e.IFCCSGPRIMITIVE3D,
  },
  {
    fields: {
      Height: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
      Radius: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 3,
      },
    },
    typeId: e.IFCRIGHTCIRCULARCYLINDER,
    isAbstract: false,
    superType: e.IFCCSGPRIMITIVE3D,
  },
  {
    fields: {
      Radius: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
    },
    typeId: e.IFCSPHERE,
    isAbstract: false,
    superType: e.IFCCSGPRIMITIVE3D,
  },
  {
    fields: {
      TreeRootExpression: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 1,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEANRESULT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCSGPRIMITIVE3D,
          },
        ],
      },
    },
    typeId: e.IFCCSGSOLID,
    isAbstract: false,
    superType: e.IFCSOLIDMODEL,
  },
  {
    fields: {
      Dim: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCSOLIDMODEL,
    isAbstract: true,
    superType: e.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       e.IFCCSGSOLID,
       e.IFCMANIFOLDSOLIDBREP,
       e.IFCSWEPTAREASOLID,
       e.IFCSWEPTDISKSOLID,
    ],
  },
  {
    fields: {
      RelatingMonetaryUnit: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCMONETARYUNIT,
      },
      RelatedMonetaryUnit: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCMONETARYUNIT,
      },
      ExchangeRate: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 5,
      },
      RateDateTime: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      RateSource: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 7,
        type: e.IFCLIBRARYINFORMATION,
      },
    },
    typeId: e.IFCCURRENCYRELATIONSHIP,
    isAbstract: false,
    superType: e.IFCRESOURCELEVELRELATIONSHIP,
  },
  {
    fields: {
      Pnt: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCCARTESIANPOINT,
      },
      Dir: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCVECTOR,
      },
    },
    typeId: e.IFCLINE,
    isAbstract: false,
    superType: e.IFCCURVE,
  },
  {
    fields: {
      BasisCurve: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCCURVE,
      },
      Distance: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
      SelfIntersect: {
        kind: f.BOOLEAN,
        optional: true,
        derived: false,
        offset: 3,
      },
    },
    typeId: e.IFCOFFSETCURVE2D,
    isAbstract: false,
    superType: e.IFCCURVE,
  },
  {
    fields: {
      BasisCurve: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCCURVE,
      },
      Distance: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
      SelfIntersect: {
        kind: f.BOOLEAN,
        optional: true,
        derived: false,
        offset: 3,
      },
      RefDirection: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCDIRECTION,
      },
    },
    typeId: e.IFCOFFSETCURVE3D,
    isAbstract: false,
    superType: e.IFCCURVE,
  },
  {
    fields: {
      BasisSurface: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCSURFACE,
      },
      ReferenceCurve: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCCURVE,
      },
    },
    typeId: e.IFCPCURVE,
    isAbstract: false,
    superType: e.IFCCURVE,
  },
  {
    fields: {
      Curve3D: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCCURVE,
      },
      AssociatedGeometry: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCPCURVE,
      },
      MasterRepresentation: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 3,
        type: IfcPreferredSurfaceCurveRepresentation,
      },
      BasisSurface: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: true,
        type: e.IFCSURFACE,
      },
    },
    typeId: e.IFCSURFACECURVE,
    isAbstract: false,
    superType: e.IFCCURVE,
    subTypes: [
       e.IFCINTERSECTIONCURVE,
       e.IFCSEAMCURVE,
    ],
  },
  {
    fields: {
      CurveFont: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 2,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCURVESTYLEFONTANDSCALING,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCURVESTYLEFONT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPREDEFINEDCURVEFONT,
          },
        ],
      },
      CurveWidth: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 3,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRATIOMEASURE,
          },
        ],
      },
      CurveColour: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 4,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOLOURSPECIFICATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPREDEFINEDCOLOUR,
          },
        ],
      },
      ModelOrDraughting: {
        kind: f.BOOLEAN,
        optional: true,
        derived: false,
        offset: 5,
      },
    },
    typeId: e.IFCCURVESTYLE,
    isAbstract: false,
    superType: e.IFCPRESENTATIONSTYLE,
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
    },
    typeId: e.IFCPRESENTATIONSTYLE,
    isAbstract: true,
    subTypes: [
       e.IFCCURVESTYLE,
       e.IFCFILLAREASTYLE,
       e.IFCSURFACESTYLE,
       e.IFCTEXTSTYLE,
    ],
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
      PatternList: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCCURVESTYLEFONTPATTERN,
      },
    },
    typeId: e.IFCCURVESTYLEFONT,
    isAbstract: false,
    superType: e.IFCPRESENTATIONITEM,
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
      CurveFont: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 2,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCURVESTYLEFONT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPREDEFINEDCURVEFONT,
          },
        ],
      },
      CurveFontScaling: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 3,
      },
    },
    typeId: e.IFCCURVESTYLEFONTANDSCALING,
    isAbstract: false,
    superType: e.IFCPRESENTATIONITEM,
  },
  {
    fields: {
      VisibleSegmentLength: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 1,
      },
      InvisibleSegmentLength: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
    },
    typeId: e.IFCCURVESTYLEFONTPATTERN,
    isAbstract: false,
    superType: e.IFCPRESENTATIONITEM,
  },
  {
    fields: {
      Radius: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
    },
    typeId: e.IFCCYLINDRICALSURFACE,
    isAbstract: false,
    superType: e.IFCELEMENTARYSURFACE,
  },
  {
    fields: {
      Position: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCAXIS2PLACEMENT3D,
      },
    },
    typeId: e.IFCELEMENTARYSURFACE,
    isAbstract: true,
    superType: e.IFCSURFACE,
    subTypes: [
       e.IFCCYLINDRICALSURFACE,
       e.IFCPLANE,
       e.IFCSPHERICALSURFACE,
       e.IFCTOROIDALSURFACE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcDamperTypeEnum,
      },
    },
    typeId: e.IFCDAMPER,
    isAbstract: false,
    superType: e.IFCFLOWCONTROLLER,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcDamperTypeEnum,
      },
    },
    typeId: e.IFCDAMPERTYPE,
    isAbstract: false,
    superType: e.IFCFLOWCONTROLLERTYPE,
  },
  {
    fields: {
      ParentProfile: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCPROFILEDEF,
      },
      Operator: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCCARTESIANTRANSFORMATIONOPERATOR2D,
      },
      Label: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
    },
    typeId: e.IFCDERIVEDPROFILEDEF,
    isAbstract: false,
    superType: e.IFCPROFILEDEF,
    subTypes: [
       e.IFCMIRROREDPROFILEDEF,
    ],
  },
  {
    fields: {
      Operator: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: true,
        type: e.IFCCARTESIANTRANSFORMATIONOPERATOR2D,
      },
    },
    typeId: e.IFCMIRROREDPROFILEDEF,
    isAbstract: false,
    superType: e.IFCDERIVEDPROFILEDEF,
  },
  {
    fields: {
      Elements: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCDERIVEDUNITELEMENT,
      },
      UnitType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 2,
        type: IfcDerivedUnitEnum,
      },
      UserDefinedType: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 3,
      },
      Dimensions: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: true,
        type: e.IFCDIMENSIONALEXPONENTS,
      },
    },
    typeId: e.IFCDERIVEDUNIT,
    isAbstract: false,
  },
  {
    fields: {
      Unit: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCNAMEDUNIT,
      },
      Exponent: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
    },
    typeId: e.IFCDERIVEDUNITELEMENT,
    isAbstract: false,
  },
  {
    fields: {
      LengthExponent: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 1,
      },
      MassExponent: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
      TimeExponent: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 3,
      },
      ElectricCurrentExponent: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
      ThermodynamicTemperatureExponent: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 5,
      },
      AmountOfSubstanceExponent: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 6,
      },
      LuminousIntensityExponent: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 7,
      },
    },
    typeId: e.IFCDIMENSIONALEXPONENTS,
    isAbstract: false,
  },
  {
    fields: {
      DirectionRatios: {
        kind: f.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
      },
      Dim: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCDIRECTION,
    isAbstract: false,
    superType: e.IFCGEOMETRICREPRESENTATIONITEM,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcDiscreteAccessoryTypeEnum,
      },
    },
    typeId: e.IFCDISCRETEACCESSORY,
    isAbstract: false,
    superType: e.IFCELEMENTCOMPONENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcDiscreteAccessoryTypeEnum,
      },
    },
    typeId: e.IFCDISCRETEACCESSORYTYPE,
    isAbstract: false,
    superType: e.IFCELEMENTCOMPONENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcDistributionChamberElementTypeEnum,
      },
    },
    typeId: e.IFCDISTRIBUTIONCHAMBERELEMENT,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONFLOWELEMENT,
  },
  {
    fields: {
      HasControlElements: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 9,
        type: e.IFCRELFLOWCONTROLELEMENTS,
      },
    },
    typeId: e.IFCDISTRIBUTIONFLOWELEMENT,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONELEMENT,
    subTypes: [
       e.IFCDISTRIBUTIONCHAMBERELEMENT,
       e.IFCENERGYCONVERSIONDEVICE,
       e.IFCFLOWCONTROLLER,
       e.IFCFLOWFITTING,
       e.IFCFLOWMOVINGDEVICE,
       e.IFCFLOWSEGMENT,
       e.IFCFLOWSTORAGEDEVICE,
       e.IFCFLOWTERMINAL,
       e.IFCFLOWTREATMENTDEVICE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcDistributionChamberElementTypeEnum,
      },
    },
    typeId: e.IFCDISTRIBUTIONCHAMBERELEMENTTYPE,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONFLOWELEMENTTYPE,
  },
  {
    fields: {
    },
    typeId: e.IFCDISTRIBUTIONFLOWELEMENTTYPE,
    isAbstract: true,
    superType: e.IFCDISTRIBUTIONELEMENTTYPE,
    subTypes: [
       e.IFCDISTRIBUTIONCHAMBERELEMENTTYPE,
       e.IFCENERGYCONVERSIONDEVICETYPE,
       e.IFCFLOWCONTROLLERTYPE,
       e.IFCFLOWFITTINGTYPE,
       e.IFCFLOWMOVINGDEVICETYPE,
       e.IFCFLOWSEGMENTTYPE,
       e.IFCFLOWSTORAGEDEVICETYPE,
       e.IFCFLOWTERMINALTYPE,
       e.IFCFLOWTREATMENTDEVICETYPE,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCDISTRIBUTIONCIRCUIT,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONSYSTEM,
  },
  {
    fields: {
      LongName: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 7,
        type: IfcDistributionSystemEnum,
      },
    },
    typeId: e.IFCDISTRIBUTIONSYSTEM,
    isAbstract: false,
    superType: e.IFCSYSTEM,
    subTypes: [
       e.IFCDISTRIBUTIONCIRCUIT,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcFlowInstrumentTypeEnum,
      },
    },
    typeId: e.IFCFLOWINSTRUMENT,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONCONTROLELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcProtectiveDeviceTrippingUnitTypeEnum,
      },
    },
    typeId: e.IFCPROTECTIVEDEVICETRIPPINGUNIT,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONCONTROLELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcSensorTypeEnum,
      },
    },
    typeId: e.IFCSENSOR,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONCONTROLELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcUnitaryControlElementTypeEnum,
      },
    },
    typeId: e.IFCUNITARYCONTROLELEMENT,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONCONTROLELEMENT,
  },
  {
    fields: {
      HasPorts: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 9,
        type: e.IFCRELCONNECTSPORTTOELEMENT,
      },
    },
    typeId: e.IFCDISTRIBUTIONELEMENT,
    isAbstract: false,
    superType: e.IFCELEMENT,
    subTypes: [
       e.IFCDISTRIBUTIONCONTROLELEMENT,
       e.IFCDISTRIBUTIONFLOWELEMENT,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcFlowInstrumentTypeEnum,
      },
    },
    typeId: e.IFCFLOWINSTRUMENTTYPE,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONCONTROLELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcProtectiveDeviceTrippingUnitTypeEnum,
      },
    },
    typeId: e.IFCPROTECTIVEDEVICETRIPPINGUNITTYPE,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONCONTROLELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcSensorTypeEnum,
      },
    },
    typeId: e.IFCSENSORTYPE,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONCONTROLELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcUnitaryControlElementTypeEnum,
      },
    },
    typeId: e.IFCUNITARYCONTROLELEMENTTYPE,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONCONTROLELEMENTTYPE,
  },
  {
    fields: {
    },
    typeId: e.IFCDISTRIBUTIONELEMENTTYPE,
    isAbstract: false,
    superType: e.IFCELEMENTTYPE,
    subTypes: [
       e.IFCDISTRIBUTIONCONTROLELEMENTTYPE,
       e.IFCDISTRIBUTIONFLOWELEMENTTYPE,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCFLOWSTORAGEDEVICE,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONFLOWELEMENT,
    subTypes: [
       e.IFCELECTRICFLOWSTORAGEDEVICE,
       e.IFCTANK,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCFLOWTREATMENTDEVICE,
    isAbstract: false,
    superType: e.IFCDISTRIBUTIONFLOWELEMENT,
    subTypes: [
       e.IFCDUCTSILENCER,
       e.IFCFILTER,
       e.IFCINTERCEPTOR,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCFLOWSTORAGEDEVICETYPE,
    isAbstract: true,
    superType: e.IFCDISTRIBUTIONFLOWELEMENTTYPE,
    subTypes: [
       e.IFCELECTRICFLOWSTORAGEDEVICETYPE,
       e.IFCTANKTYPE,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCFLOWTREATMENTDEVICETYPE,
    isAbstract: true,
    superType: e.IFCDISTRIBUTIONFLOWELEMENTTYPE,
    subTypes: [
       e.IFCDUCTSILENCERTYPE,
       e.IFCFILTERTYPE,
       e.IFCINTERCEPTORTYPE,
    ],
  },
  {
    fields: {
      FlowDirection: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 8,
        type: IfcFlowDirectionEnum,
      },
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcDistributionPortTypeEnum,
      },
      SystemType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 10,
        type: IfcDistributionSystemEnum,
      },
    },
    typeId: e.IFCDISTRIBUTIONPORT,
    isAbstract: false,
    superType: e.IFCPORT,
  },
  {
    fields: {
      ContainedIn: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 8,
        type: e.IFCRELCONNECTSPORTTOELEMENT,
      },
      ConnectedFrom: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 9,
        type: e.IFCRELCONNECTSPORTS,
      },
      ConnectedTo: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 10,
        type: e.IFCRELCONNECTSPORTS,
      },
    },
    typeId: e.IFCPORT,
    isAbstract: true,
    superType: e.IFCPRODUCT,
    subTypes: [
       e.IFCDISTRIBUTIONPORT,
    ],
  },
  {
    fields: {
      Identification: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 1,
      },
      Name: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 2,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 3,
      },
      Location: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 4,
      },
      Purpose: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
      IntendedUse: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      Scope: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 7,
      },
      Revision: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 8,
      },
      DocumentOwner: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 9,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCORGANIZATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSON,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSONANDORGANIZATION,
          },
        ],
      },
      Editors: {
        kind: f.SELECT,
        rank: 1,
        optional: true,
        derived: false,
        offset: 10,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCORGANIZATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSON,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSONANDORGANIZATION,
          },
        ],
      },
      CreationTime: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 11,
      },
      LastRevisionTime: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 12,
      },
      ElectronicFormat: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 13,
      },
      ValidFrom: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 14,
      },
      ValidUntil: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 15,
      },
      Confidentiality: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 16,
        type: IfcDocumentConfidentialityEnum,
      },
      Status: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 17,
        type: IfcDocumentStatusEnum,
      },
      DocumentInfoForObjects: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 18,
        type: e.IFCRELASSOCIATESDOCUMENT,
      },
      HasDocumentReferences: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 19,
        type: e.IFCDOCUMENTREFERENCE,
      },
      IsPointedTo: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 20,
        type: e.IFCDOCUMENTINFORMATIONRELATIONSHIP,
      },
      IsPointer: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 21,
        type: e.IFCDOCUMENTINFORMATIONRELATIONSHIP,
      },
    },
    typeId: e.IFCDOCUMENTINFORMATION,
    isAbstract: false,
    superType: e.IFCEXTERNALINFORMATION,
  },
  {
    fields: {
      RelatingDocument: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCDOCUMENTINFORMATION,
      },
      RelatedDocuments: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCDOCUMENTINFORMATION,
      },
      RelationshipType: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
    },
    typeId: e.IFCDOCUMENTINFORMATIONRELATIONSHIP,
    isAbstract: false,
    superType: e.IFCRESOURCELEVELRELATIONSHIP,
  },
  {
    fields: {
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 4,
      },
      ReferencedDocument: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 5,
        type: e.IFCDOCUMENTINFORMATION,
      },
      DocumentRefForObjects: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCRELASSOCIATESDOCUMENT,
      },
    },
    typeId: e.IFCDOCUMENTREFERENCE,
    isAbstract: false,
    superType: e.IFCEXTERNALREFERENCE,
  },
  {
    fields: {
    },
    typeId: e.IFCDOORSTANDARDCASE,
    isAbstract: false,
    superType: e.IFCDOOR,
  },
  {
    fields: {
      LiningDepth: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 5,
      },
      LiningThickness: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 6,
      },
      ThresholdDepth: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 7,
      },
      ThresholdThickness: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 8,
      },
      TransomThickness: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 9,
      },
      TransomOffset: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 10,
      },
      LiningOffset: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 11,
      },
      ThresholdOffset: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 12,
      },
      CasingThickness: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 13,
      },
      CasingDepth: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 14,
      },
      ShapeAspectStyle: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 15,
        type: e.IFCSHAPEASPECT,
      },
      LiningToPanelOffsetX: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 16,
      },
      LiningToPanelOffsetY: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 17,
      },
    },
    typeId: e.IFCDOORLININGPROPERTIES,
    isAbstract: false,
    superType: e.IFCPREDEFINEDPROPERTYSET,
  },
  {
    fields: {
    },
    typeId: e.IFCPREDEFINEDPROPERTYSET,
    isAbstract: true,
    superType: e.IFCPROPERTYSETDEFINITION,
    subTypes: [
       e.IFCDOORLININGPROPERTIES,
       e.IFCDOORPANELPROPERTIES,
       e.IFCPERMEABLECOVERINGPROPERTIES,
       e.IFCREINFORCEMENTDEFINITIONPROPERTIES,
       e.IFCWINDOWLININGPROPERTIES,
       e.IFCWINDOWPANELPROPERTIES,
    ],
  },
  {
    fields: {
      PanelDepth: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 5,
      },
      PanelOperation: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 6,
        type: IfcDoorPanelOperationEnum,
      },
      PanelWidth: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 7,
      },
      PanelPosition: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 8,
        type: IfcDoorPanelPositionEnum,
      },
      ShapeAspectStyle: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 9,
        type: e.IFCSHAPEASPECT,
      },
    },
    typeId: e.IFCDOORPANELPROPERTIES,
    isAbstract: false,
    superType: e.IFCPREDEFINEDPROPERTYSET,
  },
  {
    fields: {
      OperationType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 9,
        type: IfcDoorStyleOperationEnum,
      },
      ConstructionType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcDoorStyleConstructionEnum,
      },
      ParameterTakesPrecedence: {
        kind: f.BOOLEAN,
        optional: false,
        derived: false,
        offset: 11,
      },
      Sizeable: {
        kind: f.BOOLEAN,
        optional: false,
        derived: false,
        offset: 12,
      },
    },
    typeId: e.IFCDOORSTYLE,
    isAbstract: false,
    superType: e.IFCTYPEPRODUCT,
  },
  {
    fields: {
      RepresentationMaps: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 7,
        type: e.IFCREPRESENTATIONMAP,
      },
      Tag: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 8,
      },
      ReferencedBy: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 9,
        type: e.IFCRELASSIGNSTOPRODUCT,
      },
    },
    typeId: e.IFCTYPEPRODUCT,
    isAbstract: false,
    superType: e.IFCTYPEOBJECT,
    subTypes: [
       e.IFCDOORSTYLE,
       e.IFCELEMENTTYPE,
       e.IFCSPATIALELEMENTTYPE,
       e.IFCWINDOWSTYLE,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCDRAUGHTINGPREDEFINEDCOLOUR,
    isAbstract: false,
    superType: e.IFCPREDEFINEDCOLOUR,
  },
  {
    fields: {
    },
    typeId: e.IFCPREDEFINEDCOLOUR,
    isAbstract: true,
    superType: e.IFCPREDEFINEDITEM,
    subTypes: [
       e.IFCDRAUGHTINGPREDEFINEDCOLOUR,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCDRAUGHTINGPREDEFINEDCURVEFONT,
    isAbstract: false,
    superType: e.IFCPREDEFINEDCURVEFONT,
  },
  {
    fields: {
    },
    typeId: e.IFCPREDEFINEDCURVEFONT,
    isAbstract: true,
    superType: e.IFCPREDEFINEDITEM,
    subTypes: [
       e.IFCDRAUGHTINGPREDEFINEDCURVEFONT,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcDuctFittingTypeEnum,
      },
    },
    typeId: e.IFCDUCTFITTING,
    isAbstract: false,
    superType: e.IFCFLOWFITTING,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcDuctFittingTypeEnum,
      },
    },
    typeId: e.IFCDUCTFITTINGTYPE,
    isAbstract: false,
    superType: e.IFCFLOWFITTINGTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcDuctSegmentTypeEnum,
      },
    },
    typeId: e.IFCDUCTSEGMENT,
    isAbstract: false,
    superType: e.IFCFLOWSEGMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcDuctSegmentTypeEnum,
      },
    },
    typeId: e.IFCDUCTSEGMENTTYPE,
    isAbstract: false,
    superType: e.IFCFLOWSEGMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcDuctSilencerTypeEnum,
      },
    },
    typeId: e.IFCDUCTSILENCER,
    isAbstract: false,
    superType: e.IFCFLOWTREATMENTDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcDuctSilencerTypeEnum,
      },
    },
    typeId: e.IFCDUCTSILENCERTYPE,
    isAbstract: false,
    superType: e.IFCFLOWTREATMENTDEVICETYPE,
  },
  {
    fields: {
      EdgeStart: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCVERTEX,
      },
      EdgeEnd: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCVERTEX,
      },
    },
    typeId: e.IFCEDGE,
    isAbstract: false,
    superType: e.IFCTOPOLOGICALREPRESENTATIONITEM,
    subTypes: [
       e.IFCEDGECURVE,
       e.IFCORIENTEDEDGE,
       e.IFCSUBEDGE,
    ],
  },
  {
    fields: {
      EdgeGeometry: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCCURVE,
      },
      SameSense: {
        kind: f.BOOLEAN,
        optional: false,
        derived: false,
        offset: 4,
      },
    },
    typeId: e.IFCEDGECURVE,
    isAbstract: false,
    superType: e.IFCEDGE,
  },
  {
    fields: {
      EdgeElement: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCEDGE,
      },
      Orientation: {
        kind: f.BOOLEAN,
        optional: false,
        derived: false,
        offset: 4,
      },
      EdgeStart: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: true,
        type: e.IFCVERTEX,
      },
      EdgeEnd: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: true,
        type: e.IFCVERTEX,
      },
    },
    typeId: e.IFCORIENTEDEDGE,
    isAbstract: false,
    superType: e.IFCEDGE,
  },
  {
    fields: {
      ParentEdge: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCEDGE,
      },
    },
    typeId: e.IFCSUBEDGE,
    isAbstract: false,
    superType: e.IFCEDGE,
  },
  {
    fields: {
      EdgeList: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCORIENTEDEDGE,
      },
      Ne: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCEDGELOOP,
    isAbstract: false,
    superType: e.IFCLOOP,
  },
  {
    fields: {
    },
    typeId: e.IFCLOOP,
    isAbstract: false,
    superType: e.IFCTOPOLOGICALREPRESENTATIONITEM,
    subTypes: [
       e.IFCEDGELOOP,
       e.IFCPOLYLOOP,
       e.IFCVERTEXLOOP,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcElectricApplianceTypeEnum,
      },
    },
    typeId: e.IFCELECTRICAPPLIANCE,
    isAbstract: false,
    superType: e.IFCFLOWTERMINAL,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcElectricApplianceTypeEnum,
      },
    },
    typeId: e.IFCELECTRICAPPLIANCETYPE,
    isAbstract: false,
    superType: e.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcElectricDistributionBoardTypeEnum,
      },
    },
    typeId: e.IFCELECTRICDISTRIBUTIONBOARD,
    isAbstract: false,
    superType: e.IFCFLOWCONTROLLER,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcElectricDistributionBoardTypeEnum,
      },
    },
    typeId: e.IFCELECTRICDISTRIBUTIONBOARDTYPE,
    isAbstract: false,
    superType: e.IFCFLOWCONTROLLERTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcElectricFlowStorageDeviceTypeEnum,
      },
    },
    typeId: e.IFCELECTRICFLOWSTORAGEDEVICE,
    isAbstract: false,
    superType: e.IFCFLOWSTORAGEDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcElectricFlowStorageDeviceTypeEnum,
      },
    },
    typeId: e.IFCELECTRICFLOWSTORAGEDEVICETYPE,
    isAbstract: false,
    superType: e.IFCFLOWSTORAGEDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcElectricGeneratorTypeEnum,
      },
    },
    typeId: e.IFCELECTRICGENERATOR,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcElectricGeneratorTypeEnum,
      },
    },
    typeId: e.IFCELECTRICGENERATORTYPE,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcElectricMotorTypeEnum,
      },
    },
    typeId: e.IFCELECTRICMOTOR,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcElectricMotorTypeEnum,
      },
    },
    typeId: e.IFCELECTRICMOTORTYPE,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcElectricTimeControlTypeEnum,
      },
    },
    typeId: e.IFCELECTRICTIMECONTROL,
    isAbstract: false,
    superType: e.IFCFLOWCONTROLLER,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcElectricTimeControlTypeEnum,
      },
    },
    typeId: e.IFCELECTRICTIMECONTROLTYPE,
    isAbstract: false,
    superType: e.IFCFLOWCONTROLLERTYPE,
  },
  {
    fields: {
      AssemblyPlace: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcAssemblyPlaceEnum,
      },
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 10,
        type: IfcElementAssemblyTypeEnum,
      },
    },
    typeId: e.IFCELEMENTASSEMBLY,
    isAbstract: false,
    superType: e.IFCELEMENT,
  },
  {
    fields: {
    },
    typeId: e.IFCFEATUREELEMENT,
    isAbstract: true,
    superType: e.IFCELEMENT,
    subTypes: [
       e.IFCFEATUREELEMENTADDITION,
       e.IFCFEATUREELEMENTSUBTRACTION,
       e.IFCSURFACEFEATURE,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCFURNISHINGELEMENT,
    isAbstract: false,
    superType: e.IFCELEMENT,
    subTypes: [
       e.IFCFURNITURE,
       e.IFCSYSTEMFURNITUREELEMENT,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcGeographicElementTypeEnum,
      },
    },
    typeId: e.IFCGEOGRAPHICELEMENT,
    isAbstract: false,
    superType: e.IFCELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcTransportElementTypeEnum,
      },
    },
    typeId: e.IFCTRANSPORTELEMENT,
    isAbstract: false,
    superType: e.IFCELEMENT,
  },
  {
    fields: {
    },
    typeId: e.IFCVIRTUALELEMENT,
    isAbstract: false,
    superType: e.IFCELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcElementAssemblyTypeEnum,
      },
    },
    typeId: e.IFCELEMENTASSEMBLYTYPE,
    isAbstract: false,
    superType: e.IFCELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcFastenerTypeEnum,
      },
    },
    typeId: e.IFCFASTENER,
    isAbstract: false,
    superType: e.IFCELEMENTCOMPONENT,
  },
  {
    fields: {
      NominalDiameter: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 9,
      },
      NominalLength: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 10,
      },
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 11,
        type: IfcMechanicalFastenerTypeEnum,
      },
    },
    typeId: e.IFCMECHANICALFASTENER,
    isAbstract: false,
    superType: e.IFCELEMENTCOMPONENT,
  },
  {
    fields: {
      SteelGrade: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 9,
      },
    },
    typeId: e.IFCREINFORCINGELEMENT,
    isAbstract: true,
    superType: e.IFCELEMENTCOMPONENT,
    subTypes: [
       e.IFCREINFORCINGBAR,
       e.IFCREINFORCINGMESH,
       e.IFCTENDON,
       e.IFCTENDONANCHOR,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcVibrationIsolatorTypeEnum,
      },
    },
    typeId: e.IFCVIBRATIONISOLATOR,
    isAbstract: false,
    superType: e.IFCELEMENTCOMPONENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcFastenerTypeEnum,
      },
    },
    typeId: e.IFCFASTENERTYPE,
    isAbstract: false,
    superType: e.IFCELEMENTCOMPONENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcMechanicalFastenerTypeEnum,
      },
      NominalDiameter: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 11,
      },
      NominalLength: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 12,
      },
    },
    typeId: e.IFCMECHANICALFASTENERTYPE,
    isAbstract: false,
    superType: e.IFCELEMENTCOMPONENTTYPE,
  },
  {
    fields: {
    },
    typeId: e.IFCREINFORCINGELEMENTTYPE,
    isAbstract: true,
    superType: e.IFCELEMENTCOMPONENTTYPE,
    subTypes: [
       e.IFCREINFORCINGBARTYPE,
       e.IFCREINFORCINGMESHTYPE,
       e.IFCTENDONANCHORTYPE,
       e.IFCTENDONTYPE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcVibrationIsolatorTypeEnum,
      },
    },
    typeId: e.IFCVIBRATIONISOLATORTYPE,
    isAbstract: false,
    superType: e.IFCELEMENTCOMPONENTTYPE,
  },
  {
    fields: {
      MethodOfMeasurement: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
      Quantities: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCPHYSICALQUANTITY,
      },
    },
    typeId: e.IFCELEMENTQUANTITY,
    isAbstract: false,
    superType: e.IFCQUANTITYSET,
  },
  {
    fields: {
    },
    typeId: e.IFCQUANTITYSET,
    isAbstract: true,
    superType: e.IFCPROPERTYSETDEFINITION,
    subTypes: [
       e.IFCELEMENTQUANTITY,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCFURNISHINGELEMENTTYPE,
    isAbstract: false,
    superType: e.IFCELEMENTTYPE,
    subTypes: [
       e.IFCFURNITURETYPE,
       e.IFCSYSTEMFURNITUREELEMENTTYPE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcGeographicElementTypeEnum,
      },
    },
    typeId: e.IFCGEOGRAPHICELEMENTTYPE,
    isAbstract: false,
    superType: e.IFCELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcTransportElementTypeEnum,
      },
    },
    typeId: e.IFCTRANSPORTELEMENTTYPE,
    isAbstract: false,
    superType: e.IFCELEMENTTYPE,
  },
  {
    fields: {
    },
    typeId: e.IFCPLANE,
    isAbstract: false,
    superType: e.IFCELEMENTARYSURFACE,
  },
  {
    fields: {
      Radius: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
    },
    typeId: e.IFCSPHERICALSURFACE,
    isAbstract: false,
    superType: e.IFCELEMENTARYSURFACE,
  },
  {
    fields: {
      MajorRadius: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
      MinorRadius: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 3,
      },
    },
    typeId: e.IFCTOROIDALSURFACE,
    isAbstract: false,
    superType: e.IFCELEMENTARYSURFACE,
  },
  {
    fields: {
      SemiAxis1: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
      SemiAxis2: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 5,
      },
    },
    typeId: e.IFCELLIPSEPROFILEDEF,
    isAbstract: false,
    superType: e.IFCPARAMETERIZEDPROFILEDEF,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcEngineTypeEnum,
      },
    },
    typeId: e.IFCENGINE,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcEvaporativeCoolerTypeEnum,
      },
    },
    typeId: e.IFCEVAPORATIVECOOLER,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcEvaporatorTypeEnum,
      },
    },
    typeId: e.IFCEVAPORATOR,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcHeatExchangerTypeEnum,
      },
    },
    typeId: e.IFCHEATEXCHANGER,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcHumidifierTypeEnum,
      },
    },
    typeId: e.IFCHUMIDIFIER,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcMotorConnectionTypeEnum,
      },
    },
    typeId: e.IFCMOTORCONNECTION,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcSolarDeviceTypeEnum,
      },
    },
    typeId: e.IFCSOLARDEVICE,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcTransformerTypeEnum,
      },
    },
    typeId: e.IFCTRANSFORMER,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcTubeBundleTypeEnum,
      },
    },
    typeId: e.IFCTUBEBUNDLE,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcUnitaryEquipmentTypeEnum,
      },
    },
    typeId: e.IFCUNITARYEQUIPMENT,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcEngineTypeEnum,
      },
    },
    typeId: e.IFCENGINETYPE,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcEvaporativeCoolerTypeEnum,
      },
    },
    typeId: e.IFCEVAPORATIVECOOLERTYPE,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcEvaporatorTypeEnum,
      },
    },
    typeId: e.IFCEVAPORATORTYPE,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcHeatExchangerTypeEnum,
      },
    },
    typeId: e.IFCHEATEXCHANGERTYPE,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcHumidifierTypeEnum,
      },
    },
    typeId: e.IFCHUMIDIFIERTYPE,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcMotorConnectionTypeEnum,
      },
    },
    typeId: e.IFCMOTORCONNECTIONTYPE,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcSolarDeviceTypeEnum,
      },
    },
    typeId: e.IFCSOLARDEVICETYPE,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcTransformerTypeEnum,
      },
    },
    typeId: e.IFCTRANSFORMERTYPE,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcTubeBundleTypeEnum,
      },
    },
    typeId: e.IFCTUBEBUNDLETYPE,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcUnitaryEquipmentTypeEnum,
      },
    },
    typeId: e.IFCUNITARYEQUIPMENTTYPE,
    isAbstract: false,
    superType: e.IFCENERGYCONVERSIONDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 8,
        type: IfcEventTypeEnum,
      },
      EventTriggerType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcEventTriggerTypeEnum,
      },
      UserDefinedEventTriggerType: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 10,
      },
      EventOccurenceTime: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 11,
        type: e.IFCEVENTTIME,
      },
    },
    typeId: e.IFCEVENT,
    isAbstract: false,
    superType: e.IFCPROCESS,
  },
  {
    fields: {
      Identification: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      LongDescription: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 7,
      },
      IsPredecessorTo: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 8,
        type: e.IFCRELSEQUENCE,
      },
      IsSuccessorFrom: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 9,
        type: e.IFCRELSEQUENCE,
      },
      OperatesOn: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 10,
        type: e.IFCRELASSIGNSTOPROCESS,
      },
    },
    typeId: e.IFCPROCESS,
    isAbstract: true,
    superType: e.IFCOBJECT,
    subTypes: [
       e.IFCEVENT,
       e.IFCPROCEDURE,
       e.IFCTASK,
    ],
  },
  {
    fields: {
      ActualDate: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 4,
      },
      EarlyDate: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
      LateDate: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      ScheduleDate: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 7,
      },
    },
    typeId: e.IFCEVENTTIME,
    isAbstract: false,
    superType: e.IFCSCHEDULINGTIME,
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
      DataOrigin: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 2,
        type: IfcDataOriginEnum,
      },
      UserDefinedDataOrigin: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 3,
      },
    },
    typeId: e.IFCSCHEDULINGTIME,
    isAbstract: true,
    subTypes: [
       e.IFCEVENTTIME,
       e.IFCLAGTIME,
       e.IFCRESOURCETIME,
       e.IFCTASKTIME,
       e.IFCWORKTIME,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcEventTypeEnum,
      },
      EventTriggerType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 11,
        type: IfcEventTriggerTypeEnum,
      },
      UserDefinedEventTriggerType: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 12,
      },
    },
    typeId: e.IFCEVENTTYPE,
    isAbstract: false,
    superType: e.IFCTYPEPROCESS,
  },
  {
    fields: {
      Identification: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 7,
      },
      LongDescription: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 8,
      },
      ProcessType: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 9,
      },
      OperatesOn: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 10,
        type: e.IFCRELASSIGNSTOPROCESS,
      },
    },
    typeId: e.IFCTYPEPROCESS,
    isAbstract: true,
    superType: e.IFCTYPEOBJECT,
    subTypes: [
       e.IFCEVENTTYPE,
       e.IFCPROCEDURETYPE,
       e.IFCTASKTYPE,
    ],
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      Properties: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCPROPERTY,
      },
    },
    typeId: e.IFCEXTENDEDPROPERTIES,
    isAbstract: true,
    superType: e.IFCPROPERTYABSTRACTION,
    subTypes: [
       e.IFCMATERIALPROPERTIES,
       e.IFCPROFILEPROPERTIES,
    ],
  },
  {
    fields: {
      Material: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCMATERIALDEFINITION,
      },
    },
    typeId: e.IFCMATERIALPROPERTIES,
    isAbstract: false,
    superType: e.IFCEXTENDEDPROPERTIES,
  },
  {
    fields: {
      ProfileDefinition: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCPROFILEDEF,
      },
    },
    typeId: e.IFCPROFILEPROPERTIES,
    isAbstract: false,
    superType: e.IFCEXTENDEDPROPERTIES,
  },
  {
    fields: {
      HasExternalReferences: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCEXTERNALREFERENCERELATIONSHIP,
      },
    },
    typeId: e.IFCPROPERTYABSTRACTION,
    isAbstract: true,
    subTypes: [
       e.IFCEXTENDEDPROPERTIES,
       e.IFCPREDEFINEDPROPERTIES,
       e.IFCPROPERTY,
       e.IFCPROPERTYENUMERATION,
    ],
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 1,
      },
      Version: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      Publisher: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 3,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCORGANIZATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSON,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSONANDORGANIZATION,
          },
        ],
      },
      VersionDate: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 4,
      },
      Location: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      LibraryInfoForObjects: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 7,
        type: e.IFCRELASSOCIATESLIBRARY,
      },
      HasLibraryReferences: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 8,
        type: e.IFCLIBRARYREFERENCE,
      },
    },
    typeId: e.IFCLIBRARYINFORMATION,
    isAbstract: false,
    superType: e.IFCEXTERNALINFORMATION,
  },
  {
    fields: {
    },
    typeId: e.IFCEXTERNALLYDEFINEDHATCHSTYLE,
    isAbstract: false,
    superType: e.IFCEXTERNALREFERENCE,
  },
  {
    fields: {
    },
    typeId: e.IFCEXTERNALLYDEFINEDSURFACESTYLE,
    isAbstract: false,
    superType: e.IFCEXTERNALREFERENCE,
  },
  {
    fields: {
    },
    typeId: e.IFCEXTERNALLYDEFINEDTEXTFONT,
    isAbstract: false,
    superType: e.IFCEXTERNALREFERENCE,
  },
  {
    fields: {
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 4,
      },
      Language: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
      ReferencedLibrary: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 6,
        type: e.IFCLIBRARYINFORMATION,
      },
      LibraryRefForObjects: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 7,
        type: e.IFCRELASSOCIATESLIBRARY,
      },
    },
    typeId: e.IFCLIBRARYREFERENCE,
    isAbstract: false,
    superType: e.IFCEXTERNALREFERENCE,
  },
  {
    fields: {
      RelatingReference: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCEXTERNALREFERENCE,
      },
      RelatedResourceObjects: {
        kind: f.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        offset: 4,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCACTORROLE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAPPLIEDVALUE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAPPROVAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCONSTRAINT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCONTEXTDEPENDENTUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCONVERSIONBASEDUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCEXTERNALINFORMATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCEXTERNALREFERENCE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMATERIALDEFINITION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCORGANIZATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSON,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSONANDORGANIZATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPHYSICALQUANTITY,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPROFILEDEF,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPROPERTYABSTRACTION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMESERIES,
          },
        ],
      },
    },
    typeId: e.IFCEXTERNALREFERENCERELATIONSHIP,
    isAbstract: false,
    superType: e.IFCRESOURCELEVELRELATIONSHIP,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcExternalSpatialElementTypeEnum,
      },
      BoundedBy: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 10,
        type: e.IFCRELSPACEBOUNDARY,
      },
    },
    typeId: e.IFCEXTERNALSPATIALELEMENT,
    isAbstract: false,
    superType: e.IFCEXTERNALSPATIALSTRUCTUREELEMENT,
  },
  {
    fields: {
    },
    typeId: e.IFCEXTERNALSPATIALSTRUCTUREELEMENT,
    isAbstract: true,
    superType: e.IFCSPATIALELEMENT,
    subTypes: [
       e.IFCEXTERNALSPATIALELEMENT,
    ],
  },
  {
    fields: {
      LongName: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 8,
      },
      ContainsElements: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 9,
        type: e.IFCRELCONTAINEDINSPATIALSTRUCTURE,
      },
      ServicedBySystems: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 10,
        type: e.IFCRELSERVICESBUILDINGS,
      },
      ReferencesElements: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 11,
        type: e.IFCRELREFERENCEDINSPATIALSTRUCTURE,
      },
    },
    typeId: e.IFCSPATIALELEMENT,
    isAbstract: true,
    superType: e.IFCPRODUCT,
    subTypes: [
       e.IFCEXTERNALSPATIALSTRUCTUREELEMENT,
       e.IFCSPATIALSTRUCTUREELEMENT,
       e.IFCSPATIALZONE,
    ],
  },
  {
    fields: {
      ExtrudedDirection: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCDIRECTION,
      },
      Depth: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
    },
    typeId: e.IFCEXTRUDEDAREASOLID,
    isAbstract: false,
    superType: e.IFCSWEPTAREASOLID,
    subTypes: [
       e.IFCEXTRUDEDAREASOLIDTAPERED,
    ],
  },
  {
    fields: {
      EndSweptArea: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCPROFILEDEF,
      },
    },
    typeId: e.IFCEXTRUDEDAREASOLIDTAPERED,
    isAbstract: false,
    superType: e.IFCEXTRUDEDAREASOLID,
  },
  {
    fields: {
      SweptArea: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCPROFILEDEF,
      },
      Position: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 2,
        type: e.IFCAXIS2PLACEMENT3D,
      },
    },
    typeId: e.IFCSWEPTAREASOLID,
    isAbstract: true,
    superType: e.IFCSOLIDMODEL,
    subTypes: [
       e.IFCEXTRUDEDAREASOLID,
       e.IFCFIXEDREFERENCESWEPTAREASOLID,
       e.IFCREVOLVEDAREASOLID,
       e.IFCSURFACECURVESWEPTAREASOLID,
    ],
  },
  {
    fields: {
      Bounds: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCFACEBOUND,
      },
      HasTextureMaps: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCTEXTUREMAP,
      },
    },
    typeId: e.IFCFACE,
    isAbstract: false,
    superType: e.IFCTOPOLOGICALREPRESENTATIONITEM,
    subTypes: [
       e.IFCFACESURFACE,
    ],
  },
  {
    fields: {
      FbsmFaces: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCCONNECTEDFACESET,
      },
      Dim: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCFACEBASEDSURFACEMODEL,
    isAbstract: false,
    superType: e.IFCGEOMETRICREPRESENTATIONITEM,
  },
  {
    fields: {
      Bound: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCLOOP,
      },
      Orientation: {
        kind: f.BOOLEAN,
        optional: false,
        derived: false,
        offset: 2,
      },
    },
    typeId: e.IFCFACEBOUND,
    isAbstract: false,
    superType: e.IFCTOPOLOGICALREPRESENTATIONITEM,
    subTypes: [
       e.IFCFACEOUTERBOUND,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCFACEOUTERBOUND,
    isAbstract: false,
    superType: e.IFCFACEBOUND,
  },
  {
    fields: {
    },
    typeId: e.IFCFACETEDBREP,
    isAbstract: false,
    superType: e.IFCMANIFOLDSOLIDBREP,
    subTypes: [
       e.IFCFACETEDBREPWITHVOIDS,
    ],
  },
  {
    fields: {
      Voids: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCCLOSEDSHELL,
      },
    },
    typeId: e.IFCFACETEDBREPWITHVOIDS,
    isAbstract: false,
    superType: e.IFCFACETEDBREP,
  },
  {
    fields: {
      TensionFailureX: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 2,
      },
      TensionFailureY: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 3,
      },
      TensionFailureZ: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 4,
      },
      CompressionFailureX: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 5,
      },
      CompressionFailureY: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 6,
      },
      CompressionFailureZ: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 7,
      },
    },
    typeId: e.IFCFAILURECONNECTIONCONDITION,
    isAbstract: false,
    superType: e.IFCSTRUCTURALCONNECTIONCONDITION,
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
    },
    typeId: e.IFCSTRUCTURALCONNECTIONCONDITION,
    isAbstract: true,
    subTypes: [
       e.IFCFAILURECONNECTIONCONDITION,
       e.IFCSLIPPAGECONNECTIONCONDITION,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcFanTypeEnum,
      },
    },
    typeId: e.IFCFAN,
    isAbstract: false,
    superType: e.IFCFLOWMOVINGDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcFanTypeEnum,
      },
    },
    typeId: e.IFCFANTYPE,
    isAbstract: false,
    superType: e.IFCFLOWMOVINGDEVICETYPE,
  },
  {
    fields: {
      ProjectsElements: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 9,
        type: e.IFCRELPROJECTSELEMENT,
      },
    },
    typeId: e.IFCFEATUREELEMENTADDITION,
    isAbstract: true,
    superType: e.IFCFEATUREELEMENT,
    subTypes: [
       e.IFCPROJECTIONELEMENT,
    ],
  },
  {
    fields: {
      VoidsElements: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 9,
        type: e.IFCRELVOIDSELEMENT,
      },
    },
    typeId: e.IFCFEATUREELEMENTSUBTRACTION,
    isAbstract: true,
    superType: e.IFCFEATUREELEMENT,
    subTypes: [
       e.IFCOPENINGELEMENT,
       e.IFCVOIDINGFEATURE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcSurfaceFeatureTypeEnum,
      },
    },
    typeId: e.IFCSURFACEFEATURE,
    isAbstract: false,
    superType: e.IFCFEATUREELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcProjectionElementTypeEnum,
      },
    },
    typeId: e.IFCPROJECTIONELEMENT,
    isAbstract: false,
    superType: e.IFCFEATUREELEMENTADDITION,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcOpeningElementTypeEnum,
      },
      HasFillings: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 10,
        type: e.IFCRELFILLSELEMENT,
      },
    },
    typeId: e.IFCOPENINGELEMENT,
    isAbstract: false,
    superType: e.IFCFEATUREELEMENTSUBTRACTION,
    subTypes: [
       e.IFCOPENINGSTANDARDCASE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcVoidingFeatureTypeEnum,
      },
    },
    typeId: e.IFCVOIDINGFEATURE,
    isAbstract: false,
    superType: e.IFCFEATUREELEMENTSUBTRACTION,
  },
  {
    fields: {
      FillStyles: {
        kind: f.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        offset: 2,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOLOURSPECIFICATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPREDEFINEDCOLOUR,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCEXTERNALLYDEFINEDHATCHSTYLE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFILLAREASTYLEHATCHING,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFILLAREASTYLETILES,
          },
        ],
      },
      ModelorDraughting: {
        kind: f.BOOLEAN,
        optional: true,
        derived: false,
        offset: 3,
      },
    },
    typeId: e.IFCFILLAREASTYLE,
    isAbstract: false,
    superType: e.IFCPRESENTATIONSTYLE,
  },
  {
    fields: {
      HatchLineAppearance: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCCURVESTYLE,
      },
      StartOfNextHatchLine: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 2,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVECTOR,
          },
        ],
      },
      PointOfReferenceHatchLine: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 3,
        type: e.IFCCARTESIANPOINT,
      },
      PatternStart: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 4,
        type: e.IFCCARTESIANPOINT,
      },
      HatchLineAngle: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 5,
      },
    },
    typeId: e.IFCFILLAREASTYLEHATCHING,
    isAbstract: false,
    superType: e.IFCGEOMETRICREPRESENTATIONITEM,
  },
  {
    fields: {
      TilingPattern: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCVECTOR,
      },
      Tiles: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCSTYLEDITEM,
      },
      TilingScale: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 3,
      },
    },
    typeId: e.IFCFILLAREASTYLETILES,
    isAbstract: false,
    superType: e.IFCGEOMETRICREPRESENTATIONITEM,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcFilterTypeEnum,
      },
    },
    typeId: e.IFCFILTER,
    isAbstract: false,
    superType: e.IFCFLOWTREATMENTDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcFilterTypeEnum,
      },
    },
    typeId: e.IFCFILTERTYPE,
    isAbstract: false,
    superType: e.IFCFLOWTREATMENTDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcFireSuppressionTerminalTypeEnum,
      },
    },
    typeId: e.IFCFIRESUPPRESSIONTERMINAL,
    isAbstract: false,
    superType: e.IFCFLOWTERMINAL,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcFireSuppressionTerminalTypeEnum,
      },
    },
    typeId: e.IFCFIRESUPPRESSIONTERMINALTYPE,
    isAbstract: false,
    superType: e.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
      Directrix: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCCURVE,
      },
      StartParam: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 4,
      },
      EndParam: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 5,
      },
      FixedReference: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCDIRECTION,
      },
    },
    typeId: e.IFCFIXEDREFERENCESWEPTAREASOLID,
    isAbstract: false,
    superType: e.IFCSWEPTAREASOLID,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcFlowMeterTypeEnum,
      },
    },
    typeId: e.IFCFLOWMETER,
    isAbstract: false,
    superType: e.IFCFLOWCONTROLLER,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcProtectiveDeviceTypeEnum,
      },
    },
    typeId: e.IFCPROTECTIVEDEVICE,
    isAbstract: false,
    superType: e.IFCFLOWCONTROLLER,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcSwitchingDeviceTypeEnum,
      },
    },
    typeId: e.IFCSWITCHINGDEVICE,
    isAbstract: false,
    superType: e.IFCFLOWCONTROLLER,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcValveTypeEnum,
      },
    },
    typeId: e.IFCVALVE,
    isAbstract: false,
    superType: e.IFCFLOWCONTROLLER,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcFlowMeterTypeEnum,
      },
    },
    typeId: e.IFCFLOWMETERTYPE,
    isAbstract: false,
    superType: e.IFCFLOWCONTROLLERTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcProtectiveDeviceTypeEnum,
      },
    },
    typeId: e.IFCPROTECTIVEDEVICETYPE,
    isAbstract: false,
    superType: e.IFCFLOWCONTROLLERTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcSwitchingDeviceTypeEnum,
      },
    },
    typeId: e.IFCSWITCHINGDEVICETYPE,
    isAbstract: false,
    superType: e.IFCFLOWCONTROLLERTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcValveTypeEnum,
      },
    },
    typeId: e.IFCVALVETYPE,
    isAbstract: false,
    superType: e.IFCFLOWCONTROLLERTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcJunctionBoxTypeEnum,
      },
    },
    typeId: e.IFCJUNCTIONBOX,
    isAbstract: false,
    superType: e.IFCFLOWFITTING,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcPipeFittingTypeEnum,
      },
    },
    typeId: e.IFCPIPEFITTING,
    isAbstract: false,
    superType: e.IFCFLOWFITTING,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcJunctionBoxTypeEnum,
      },
    },
    typeId: e.IFCJUNCTIONBOXTYPE,
    isAbstract: false,
    superType: e.IFCFLOWFITTINGTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcPipeFittingTypeEnum,
      },
    },
    typeId: e.IFCPIPEFITTINGTYPE,
    isAbstract: false,
    superType: e.IFCFLOWFITTINGTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcPumpTypeEnum,
      },
    },
    typeId: e.IFCPUMP,
    isAbstract: false,
    superType: e.IFCFLOWMOVINGDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcPumpTypeEnum,
      },
    },
    typeId: e.IFCPUMPTYPE,
    isAbstract: false,
    superType: e.IFCFLOWMOVINGDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcPipeSegmentTypeEnum,
      },
    },
    typeId: e.IFCPIPESEGMENT,
    isAbstract: false,
    superType: e.IFCFLOWSEGMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcPipeSegmentTypeEnum,
      },
    },
    typeId: e.IFCPIPESEGMENTTYPE,
    isAbstract: false,
    superType: e.IFCFLOWSEGMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcTankTypeEnum,
      },
    },
    typeId: e.IFCTANK,
    isAbstract: false,
    superType: e.IFCFLOWSTORAGEDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcTankTypeEnum,
      },
    },
    typeId: e.IFCTANKTYPE,
    isAbstract: false,
    superType: e.IFCFLOWSTORAGEDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcLampTypeEnum,
      },
    },
    typeId: e.IFCLAMP,
    isAbstract: false,
    superType: e.IFCFLOWTERMINAL,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcLightFixtureTypeEnum,
      },
    },
    typeId: e.IFCLIGHTFIXTURE,
    isAbstract: false,
    superType: e.IFCFLOWTERMINAL,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcMedicalDeviceTypeEnum,
      },
    },
    typeId: e.IFCMEDICALDEVICE,
    isAbstract: false,
    superType: e.IFCFLOWTERMINAL,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcOutletTypeEnum,
      },
    },
    typeId: e.IFCOUTLET,
    isAbstract: false,
    superType: e.IFCFLOWTERMINAL,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcSanitaryTerminalTypeEnum,
      },
    },
    typeId: e.IFCSANITARYTERMINAL,
    isAbstract: false,
    superType: e.IFCFLOWTERMINAL,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcSpaceHeaterTypeEnum,
      },
    },
    typeId: e.IFCSPACEHEATER,
    isAbstract: false,
    superType: e.IFCFLOWTERMINAL,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcStackTerminalTypeEnum,
      },
    },
    typeId: e.IFCSTACKTERMINAL,
    isAbstract: false,
    superType: e.IFCFLOWTERMINAL,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcWasteTerminalTypeEnum,
      },
    },
    typeId: e.IFCWASTETERMINAL,
    isAbstract: false,
    superType: e.IFCFLOWTERMINAL,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcLampTypeEnum,
      },
    },
    typeId: e.IFCLAMPTYPE,
    isAbstract: false,
    superType: e.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcLightFixtureTypeEnum,
      },
    },
    typeId: e.IFCLIGHTFIXTURETYPE,
    isAbstract: false,
    superType: e.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcMedicalDeviceTypeEnum,
      },
    },
    typeId: e.IFCMEDICALDEVICETYPE,
    isAbstract: false,
    superType: e.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcOutletTypeEnum,
      },
    },
    typeId: e.IFCOUTLETTYPE,
    isAbstract: false,
    superType: e.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcSanitaryTerminalTypeEnum,
      },
    },
    typeId: e.IFCSANITARYTERMINALTYPE,
    isAbstract: false,
    superType: e.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcSpaceHeaterTypeEnum,
      },
    },
    typeId: e.IFCSPACEHEATERTYPE,
    isAbstract: false,
    superType: e.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcStackTerminalTypeEnum,
      },
    },
    typeId: e.IFCSTACKTERMINALTYPE,
    isAbstract: false,
    superType: e.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcWasteTerminalTypeEnum,
      },
    },
    typeId: e.IFCWASTETERMINALTYPE,
    isAbstract: false,
    superType: e.IFCFLOWTERMINALTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcInterceptorTypeEnum,
      },
    },
    typeId: e.IFCINTERCEPTOR,
    isAbstract: false,
    superType: e.IFCFLOWTREATMENTDEVICE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcInterceptorTypeEnum,
      },
    },
    typeId: e.IFCINTERCEPTORTYPE,
    isAbstract: false,
    superType: e.IFCFLOWTREATMENTDEVICETYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcFurnitureTypeEnum,
      },
    },
    typeId: e.IFCFURNITURE,
    isAbstract: false,
    superType: e.IFCFURNISHINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcSystemFurnitureElementTypeEnum,
      },
    },
    typeId: e.IFCSYSTEMFURNITUREELEMENT,
    isAbstract: false,
    superType: e.IFCFURNISHINGELEMENT,
  },
  {
    fields: {
      AssemblyPlace: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcAssemblyPlaceEnum,
      },
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 11,
        type: IfcFurnitureTypeEnum,
      },
    },
    typeId: e.IFCFURNITURETYPE,
    isAbstract: false,
    superType: e.IFCFURNISHINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 10,
        type: IfcSystemFurnitureElementTypeEnum,
      },
    },
    typeId: e.IFCSYSTEMFURNITUREELEMENTTYPE,
    isAbstract: false,
    superType: e.IFCFURNISHINGELEMENTTYPE,
  },
  {
    fields: {
    },
    typeId: e.IFCGEOMETRICCURVESET,
    isAbstract: false,
    superType: e.IFCGEOMETRICSET,
  },
  {
    fields: {
      Elements: {
        kind: f.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCURVE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOINT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSURFACE,
          },
        ],
      },
      Dim: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCGEOMETRICSET,
    isAbstract: false,
    superType: e.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       e.IFCGEOMETRICCURVESET,
    ],
  },
  {
    fields: {
      CoordinateSpaceDimension: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 3,
      },
      Precision: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 4,
      },
      WorldCoordinateSystem: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 5,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAXIS2PLACEMENT2D,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAXIS2PLACEMENT3D,
          },
        ],
      },
      TrueNorth: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 6,
        type: e.IFCDIRECTION,
      },
      HasSubContexts: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 7,
        type: e.IFCGEOMETRICREPRESENTATIONSUBCONTEXT,
      },
      HasCoordinateOperation: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 8,
        type: e.IFCCOORDINATEOPERATION,
      },
    },
    typeId: e.IFCGEOMETRICREPRESENTATIONCONTEXT,
    isAbstract: false,
    superType: e.IFCREPRESENTATIONCONTEXT,
    subTypes: [
       e.IFCGEOMETRICREPRESENTATIONSUBCONTEXT,
    ],
  },
  {
    fields: {
      ParentContext: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 7,
        type: e.IFCGEOMETRICREPRESENTATIONCONTEXT,
      },
      TargetScale: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 8,
      },
      TargetView: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 9,
        type: IfcGeometricProjectionEnum,
      },
      UserDefinedTargetView: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 10,
      },
      WorldCoordinateSystem: {
        kind: f.SELECT,
        optional: false,
        derived: true,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAXIS2PLACEMENT2D,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAXIS2PLACEMENT3D,
          },
        ],
      },
      CoordinateSpaceDimension: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
      TrueNorth: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: true,
        type: e.IFCDIRECTION,
      },
      Precision: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCGEOMETRICREPRESENTATIONSUBCONTEXT,
    isAbstract: false,
    superType: e.IFCGEOMETRICREPRESENTATIONCONTEXT,
  },
  {
    fields: {
      ContextIdentifier: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
      ContextType: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      RepresentationsInContext: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCREPRESENTATION,
      },
    },
    typeId: e.IFCREPRESENTATIONCONTEXT,
    isAbstract: true,
    subTypes: [
       e.IFCGEOMETRICREPRESENTATIONCONTEXT,
    ],
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
      LightColour: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCCOLOURRGB,
      },
      AmbientIntensity: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 3,
      },
      Intensity: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 4,
      },
    },
    typeId: e.IFCLIGHTSOURCE,
    isAbstract: true,
    superType: e.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       e.IFCLIGHTSOURCEAMBIENT,
       e.IFCLIGHTSOURCEDIRECTIONAL,
       e.IFCLIGHTSOURCEGONIOMETRIC,
       e.IFCLIGHTSOURCEPOSITIONAL,
    ],
  },
  {
    fields: {
      SizeInX: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 1,
      },
      SizeInY: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
    },
    typeId: e.IFCPLANAREXTENT,
    isAbstract: false,
    superType: e.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       e.IFCPLANARBOX,
    ],
  },
  {
    fields: {
      SpineCurve: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCCOMPOSITECURVE,
      },
      CrossSections: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCPROFILEDEF,
      },
      CrossSectionPositions: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCAXIS2PLACEMENT3D,
      },
      Dim: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCSECTIONEDSPINE,
    isAbstract: false,
    superType: e.IFCGEOMETRICREPRESENTATIONITEM,
  },
  {
    fields: {
      SbsmBoundary: {
        kind: f.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCLOSEDSHELL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCOPENSHELL,
          },
        ],
      },
      Dim: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCSHELLBASEDSURFACEMODEL,
    isAbstract: false,
    superType: e.IFCGEOMETRICREPRESENTATIONITEM,
  },
  {
    fields: {
    },
    typeId: e.IFCTESSELLATEDITEM,
    isAbstract: true,
    superType: e.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       e.IFCINDEXEDPOLYGONALFACE,
       e.IFCTESSELLATEDFACESET,
    ],
  },
  {
    fields: {
      Literal: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 1,
      },
      Placement: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 2,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAXIS2PLACEMENT2D,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAXIS2PLACEMENT3D,
          },
        ],
      },
      Path: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 3,
        type: IfcTextPath,
      },
    },
    typeId: e.IFCTEXTLITERAL,
    isAbstract: false,
    superType: e.IFCGEOMETRICREPRESENTATIONITEM,
    subTypes: [
       e.IFCTEXTLITERALWITHEXTENT,
    ],
  },
  {
    fields: {
      Orientation: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCDIRECTION,
      },
      Magnitude: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
      Dim: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCVECTOR,
    isAbstract: false,
    superType: e.IFCGEOMETRICREPRESENTATIONITEM,
  },
  {
    fields: {
      LayerAssignment: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCPRESENTATIONLAYERASSIGNMENT,
      },
      StyledByItem: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCSTYLEDITEM,
      },
    },
    typeId: e.IFCREPRESENTATIONITEM,
    isAbstract: true,
    subTypes: [
       e.IFCGEOMETRICREPRESENTATIONITEM,
       e.IFCMAPPEDITEM,
       e.IFCSTYLEDITEM,
       e.IFCTOPOLOGICALREPRESENTATIONITEM,
    ],
  },
  {
    fields: {
      UAxes: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 8,
        type: e.IFCGRIDAXIS,
      },
      VAxes: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 9,
        type: e.IFCGRIDAXIS,
      },
      WAxes: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 10,
        type: e.IFCGRIDAXIS,
      },
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 11,
        type: IfcGridTypeEnum,
      },
      ContainedInStructure: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 12,
        type: e.IFCRELCONTAINEDINSPATIALSTRUCTURE,
      },
    },
    typeId: e.IFCGRID,
    isAbstract: false,
    superType: e.IFCPRODUCT,
  },
  {
    fields: {
      AxisTag: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
      AxisCurve: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCCURVE,
      },
      SameSense: {
        kind: f.BOOLEAN,
        optional: false,
        derived: false,
        offset: 3,
      },
      PartOfW: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCGRID,
      },
      PartOfV: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCGRID,
      },
      PartOfU: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCGRID,
      },
      HasIntersections: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 7,
        type: e.IFCVIRTUALGRIDINTERSECTION,
      },
    },
    typeId: e.IFCGRIDAXIS,
    isAbstract: false,
  },
  {
    fields: {
      PlacementLocation: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCVIRTUALGRIDINTERSECTION,
      },
      PlacementRefDirection: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 2,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDIRECTION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVIRTUALGRIDINTERSECTION,
          },
        ],
      },
    },
    typeId: e.IFCGRIDPLACEMENT,
    isAbstract: false,
    superType: e.IFCOBJECTPLACEMENT,
  },
  {
    fields: {
      PlacesObject: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCPRODUCT,
      },
      ReferencedByPlacements: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCLOCALPLACEMENT,
      },
    },
    typeId: e.IFCOBJECTPLACEMENT,
    isAbstract: true,
    subTypes: [
       e.IFCGRIDPLACEMENT,
       e.IFCLOCALPLACEMENT,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 6,
        type: IfcInventoryTypeEnum,
      },
      Jurisdiction: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 7,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCORGANIZATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSON,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSONANDORGANIZATION,
          },
        ],
      },
      ResponsiblePersons: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 8,
        type: e.IFCPERSON,
      },
      LastUpdateDate: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 9,
      },
      CurrentValue: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 10,
        type: e.IFCCOSTVALUE,
      },
      OriginalValue: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 11,
        type: e.IFCCOSTVALUE,
      },
    },
    typeId: e.IFCINVENTORY,
    isAbstract: false,
    superType: e.IFCGROUP,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 6,
        type: IfcLoadGroupTypeEnum,
      },
      ActionType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 7,
        type: IfcActionTypeEnum,
      },
      ActionSource: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 8,
        type: IfcActionSourceTypeEnum,
      },
      Coefficient: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 9,
      },
      Purpose: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 10,
      },
      SourceOfResultGroup: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 11,
        type: e.IFCSTRUCTURALRESULTGROUP,
      },
      LoadGroupFor: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 12,
        type: e.IFCSTRUCTURALANALYSISMODEL,
      },
    },
    typeId: e.IFCSTRUCTURALLOADGROUP,
    isAbstract: false,
    superType: e.IFCGROUP,
    subTypes: [
       e.IFCSTRUCTURALLOADCASE,
    ],
  },
  {
    fields: {
      TheoryType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 6,
        type: IfcAnalysisTheoryTypeEnum,
      },
      ResultForLoadGroup: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 7,
        type: e.IFCSTRUCTURALLOADGROUP,
      },
      IsLinear: {
        kind: f.BOOLEAN,
        optional: false,
        derived: false,
        offset: 8,
      },
      ResultGroupFor: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 9,
        type: e.IFCSTRUCTURALANALYSISMODEL,
      },
    },
    typeId: e.IFCSTRUCTURALRESULTGROUP,
    isAbstract: false,
    superType: e.IFCGROUP,
  },
  {
    fields: {
      Position: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCAXIS2PLACEMENT3D,
      },
      PolygonalBoundary: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCBOUNDEDCURVE,
      },
    },
    typeId: e.IFCPOLYGONALBOUNDEDHALFSPACE,
    isAbstract: false,
    superType: e.IFCHALFSPACESOLID,
  },
  {
    fields: {
      OverallWidth: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
      OverallDepth: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 5,
      },
      WebThickness: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 6,
      },
      FlangeThickness: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 7,
      },
      FilletRadius: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 8,
      },
      FlangeEdgeRadius: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 9,
      },
      FlangeSlope: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 10,
      },
    },
    typeId: e.IFCISHAPEPROFILEDEF,
    isAbstract: false,
    superType: e.IFCPARAMETERIZEDPROFILEDEF,
  },
  {
    fields: {
      URLReference: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 6,
      },
    },
    typeId: e.IFCIMAGETEXTURE,
    isAbstract: false,
    superType: e.IFCSURFACETEXTURE,
  },
  {
    fields: {
      MappedTo: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCTESSELLATEDFACESET,
      },
      Opacity: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 2,
      },
      Colours: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCCOLOURRGBLIST,
      },
      ColourIndex: {
        kind: f.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
        offset: 4,
      },
    },
    typeId: e.IFCINDEXEDCOLOURMAP,
    isAbstract: false,
    superType: e.IFCPRESENTATIONITEM,
  },
  {
    fields: {
      CoordIndex: {
        kind: f.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
      },
      ToFaceSet: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCPOLYGONALFACESET,
      },
    },
    typeId: e.IFCINDEXEDPOLYGONALFACE,
    isAbstract: false,
    superType: e.IFCTESSELLATEDITEM,
    subTypes: [
       e.IFCINDEXEDPOLYGONALFACEWITHVOIDS,
    ],
  },
  {
    fields: {
      InnerCoordIndices: {
        kind: f.NUMBER,
        rank: 2,
        optional: false,
        derived: false,
        offset: 2,
      },
    },
    typeId: e.IFCINDEXEDPOLYGONALFACEWITHVOIDS,
    isAbstract: false,
    superType: e.IFCINDEXEDPOLYGONALFACE,
  },
  {
    fields: {
      MappedTo: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCTESSELLATEDFACESET,
      },
      TexCoords: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCTEXTUREVERTEXLIST,
      },
    },
    typeId: e.IFCINDEXEDTEXTUREMAP,
    isAbstract: true,
    superType: e.IFCTEXTURECOORDINATE,
    subTypes: [
       e.IFCINDEXEDTRIANGLETEXTUREMAP,
    ],
  },
  {
    fields: {
      TexCoordIndex: {
        kind: f.NUMBER,
        rank: 2,
        optional: true,
        derived: false,
        offset: 4,
      },
    },
    typeId: e.IFCINDEXEDTRIANGLETEXTUREMAP,
    isAbstract: false,
    superType: e.IFCINDEXEDTEXTUREMAP,
  },
  {
    fields: {
      Maps: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCSURFACETEXTURE,
      },
    },
    typeId: e.IFCTEXTURECOORDINATE,
    isAbstract: true,
    superType: e.IFCPRESENTATIONITEM,
    subTypes: [
       e.IFCINDEXEDTEXTUREMAP,
       e.IFCTEXTURECOORDINATEGENERATOR,
       e.IFCTEXTUREMAP,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCINTERSECTIONCURVE,
    isAbstract: false,
    superType: e.IFCSURFACECURVE,
  },
  {
    fields: {
      Values: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 9,
        type: e.IFCIRREGULARTIMESERIESVALUE,
      },
    },
    typeId: e.IFCIRREGULARTIMESERIES,
    isAbstract: false,
    superType: e.IFCTIMESERIES,
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 1,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      StartTime: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 3,
      },
      EndTime: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 4,
      },
      TimeSeriesDataType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 5,
        type: IfcTimeSeriesDataTypeEnum,
      },
      DataOrigin: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 6,
        type: IfcDataOriginEnum,
      },
      UserDefinedDataOrigin: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 7,
      },
      Unit: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 8,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDERIVEDUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNAMEDUNIT,
          },
        ],
      },
      HasExternalReference: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 9,
        type: e.IFCEXTERNALREFERENCERELATIONSHIP,
      },
    },
    typeId: e.IFCTIMESERIES,
    isAbstract: true,
    subTypes: [
       e.IFCIRREGULARTIMESERIES,
       e.IFCREGULARTIMESERIES,
    ],
  },
  {
    fields: {
      TimeStamp: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 1,
      },
      ListValues: {
        kind: f.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        offset: 2,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCACCELERATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREADENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCURVATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCENERGYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCILLUMINANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTORQUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPLEXNUMBER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOUNTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNUMERICMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPARAMETERVALUE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBINARY,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATETIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDURATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIDENTIFIER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLABEL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLOGICAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCREAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEXT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMESTAMP,
          },
        ],
      },
    },
    typeId: e.IFCIRREGULARTIMESERIESVALUE,
    isAbstract: false,
  },
  {
    fields: {
      Depth: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
      Width: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 5,
      },
      Thickness: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 6,
      },
      FilletRadius: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 7,
      },
      EdgeRadius: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 8,
      },
      LegSlope: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 9,
      },
    },
    typeId: e.IFCLSHAPEPROFILEDEF,
    isAbstract: false,
    superType: e.IFCPARAMETERIZEDPROFILEDEF,
  },
  {
    fields: {
      LagValue: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 4,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDURATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRATIOMEASURE,
          },
        ],
      },
      DurationType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 5,
        type: IfcTaskDurationEnum,
      },
    },
    typeId: e.IFCLAGTIME,
    isAbstract: false,
    superType: e.IFCSCHEDULINGTIME,
  },
  {
    fields: {
      MainPlaneAngle: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 1,
      },
      SecondaryPlaneAngle: {
        kind: f.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
        offset: 2,
      },
      LuminousIntensity: {
        kind: f.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
        offset: 3,
      },
    },
    typeId: e.IFCLIGHTDISTRIBUTIONDATA,
    isAbstract: false,
  },
  {
    fields: {
      LightDistributionCurve: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 1,
        type: IfcLightDistributionCurveEnum,
      },
      DistributionData: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCLIGHTDISTRIBUTIONDATA,
      },
    },
    typeId: e.IFCLIGHTINTENSITYDISTRIBUTION,
    isAbstract: false,
  },
  {
    fields: {
    },
    typeId: e.IFCLIGHTSOURCEAMBIENT,
    isAbstract: false,
    superType: e.IFCLIGHTSOURCE,
  },
  {
    fields: {
      Orientation: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCDIRECTION,
      },
    },
    typeId: e.IFCLIGHTSOURCEDIRECTIONAL,
    isAbstract: false,
    superType: e.IFCLIGHTSOURCE,
  },
  {
    fields: {
      Position: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCAXIS2PLACEMENT3D,
      },
      ColourAppearance: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 6,
        type: e.IFCCOLOURRGB,
      },
      ColourTemperature: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 7,
      },
      LuminousFlux: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 8,
      },
      LightEmissionSource: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 9,
        type: IfcLightEmissionSourceEnum,
      },
      LightDistributionDataSource: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 10,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCEXTERNALREFERENCE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLIGHTINTENSITYDISTRIBUTION,
          },
        ],
      },
    },
    typeId: e.IFCLIGHTSOURCEGONIOMETRIC,
    isAbstract: false,
    superType: e.IFCLIGHTSOURCE,
  },
  {
    fields: {
      Position: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCCARTESIANPOINT,
      },
      Radius: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 6,
      },
      ConstantAttenuation: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 7,
      },
      DistanceAttenuation: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 8,
      },
      QuadricAttenuation: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 9,
      },
    },
    typeId: e.IFCLIGHTSOURCEPOSITIONAL,
    isAbstract: false,
    superType: e.IFCLIGHTSOURCE,
    subTypes: [
       e.IFCLIGHTSOURCESPOT,
    ],
  },
  {
    fields: {
      Orientation: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 10,
        type: e.IFCDIRECTION,
      },
      ConcentrationExponent: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 11,
      },
      SpreadAngle: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 12,
      },
      BeamWidthAngle: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 13,
      },
    },
    typeId: e.IFCLIGHTSOURCESPOT,
    isAbstract: false,
    superType: e.IFCLIGHTSOURCEPOSITIONAL,
  },
  {
    fields: {
      PlacementRelTo: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 1,
        type: e.IFCOBJECTPLACEMENT,
      },
      RelativePlacement: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 2,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAXIS2PLACEMENT2D,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAXIS2PLACEMENT3D,
          },
        ],
      },
    },
    typeId: e.IFCLOCALPLACEMENT,
    isAbstract: false,
    superType: e.IFCOBJECTPLACEMENT,
  },
  {
    fields: {
      Polygon: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCCARTESIANPOINT,
      },
    },
    typeId: e.IFCPOLYLOOP,
    isAbstract: false,
    superType: e.IFCLOOP,
  },
  {
    fields: {
      LoopVertex: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCVERTEX,
      },
    },
    typeId: e.IFCVERTEXLOOP,
    isAbstract: false,
    superType: e.IFCLOOP,
  },
  {
    fields: {
      MappingSource: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCREPRESENTATIONMAP,
      },
      MappingTarget: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCCARTESIANTRANSFORMATIONOPERATOR,
      },
    },
    typeId: e.IFCMAPPEDITEM,
    isAbstract: false,
    superType: e.IFCREPRESENTATIONITEM,
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 1,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      Category: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 3,
      },
      HasRepresentation: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCMATERIALDEFINITIONREPRESENTATION,
      },
      IsRelatedWith: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCMATERIALRELATIONSHIP,
      },
      RelatesTo: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCMATERIALRELATIONSHIP,
      },
    },
    typeId: e.IFCMATERIAL,
    isAbstract: false,
    superType: e.IFCMATERIALDEFINITION,
  },
  {
    fields: {
      AssociatedTo: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCRELASSOCIATESMATERIAL,
      },
      HasExternalReferences: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCEXTERNALREFERENCERELATIONSHIP,
      },
      HasProperties: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCMATERIALPROPERTIES,
      },
    },
    typeId: e.IFCMATERIALDEFINITION,
    isAbstract: true,
    subTypes: [
       e.IFCMATERIAL,
       e.IFCMATERIALCONSTITUENT,
       e.IFCMATERIALCONSTITUENTSET,
       e.IFCMATERIALLAYER,
       e.IFCMATERIALLAYERSET,
       e.IFCMATERIALPROFILE,
       e.IFCMATERIALPROFILESET,
    ],
  },
  {
    fields: {
      MaterialClassifications: {
        kind: f.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCLASSIFICATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCLASSIFICATIONREFERENCE,
          },
        ],
      },
      ClassifiedMaterial: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCMATERIAL,
      },
    },
    typeId: e.IFCMATERIALCLASSIFICATIONRELATIONSHIP,
    isAbstract: false,
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      Material: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCMATERIAL,
      },
      Fraction: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 4,
      },
      Category: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
      ToMaterialConstituentSet: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCMATERIALCONSTITUENTSET,
      },
    },
    typeId: e.IFCMATERIALCONSTITUENT,
    isAbstract: false,
    superType: e.IFCMATERIALDEFINITION,
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      MaterialConstituents: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 3,
        type: e.IFCMATERIALCONSTITUENT,
      },
    },
    typeId: e.IFCMATERIALCONSTITUENTSET,
    isAbstract: false,
    superType: e.IFCMATERIALDEFINITION,
  },
  {
    fields: {
      Material: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 1,
        type: e.IFCMATERIAL,
      },
      LayerThickness: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
      IsVentilated: {
        kind: f.BOOLEAN,
        optional: true,
        derived: false,
        offset: 3,
      },
      Name: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 4,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
      Category: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      Priority: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 7,
      },
      ToMaterialLayerSet: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 8,
        type: e.IFCMATERIALLAYERSET,
      },
    },
    typeId: e.IFCMATERIALLAYER,
    isAbstract: false,
    superType: e.IFCMATERIALDEFINITION,
    subTypes: [
       e.IFCMATERIALLAYERWITHOFFSETS,
    ],
  },
  {
    fields: {
      MaterialLayers: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCMATERIALLAYER,
      },
      LayerSetName: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 3,
      },
      TotalThickness: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCMATERIALLAYERSET,
    isAbstract: false,
    superType: e.IFCMATERIALDEFINITION,
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      Material: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 3,
        type: e.IFCMATERIAL,
      },
      Profile: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCPROFILEDEF,
      },
      Priority: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 5,
      },
      Category: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      ToMaterialProfileSet: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 7,
        type: e.IFCMATERIALPROFILESET,
      },
    },
    typeId: e.IFCMATERIALPROFILE,
    isAbstract: false,
    superType: e.IFCMATERIALDEFINITION,
    subTypes: [
       e.IFCMATERIALPROFILEWITHOFFSETS,
    ],
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      MaterialProfiles: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCMATERIALPROFILE,
      },
      CompositeProfile: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 4,
        type: e.IFCCOMPOSITEPROFILEDEF,
      },
    },
    typeId: e.IFCMATERIALPROFILESET,
    isAbstract: false,
    superType: e.IFCMATERIALDEFINITION,
  },
  {
    fields: {
      RepresentedMaterial: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCMATERIAL,
      },
    },
    typeId: e.IFCMATERIALDEFINITIONREPRESENTATION,
    isAbstract: false,
    superType: e.IFCPRODUCTREPRESENTATION,
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      Representations: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCREPRESENTATION,
      },
    },
    typeId: e.IFCPRODUCTREPRESENTATION,
    isAbstract: true,
    subTypes: [
       e.IFCMATERIALDEFINITIONREPRESENTATION,
       e.IFCPRODUCTDEFINITIONSHAPE,
    ],
  },
  {
    fields: {
      OffsetDirection: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 8,
        type: IfcLayerSetDirectionEnum,
      },
      OffsetValues: {
        kind: f.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
        offset: 9,
      },
    },
    typeId: e.IFCMATERIALLAYERWITHOFFSETS,
    isAbstract: false,
    superType: e.IFCMATERIALLAYER,
  },
  {
    fields: {
      ForLayerSet: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCMATERIALLAYERSET,
      },
      LayerSetDirection: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 2,
        type: IfcLayerSetDirectionEnum,
      },
      DirectionSense: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 3,
        type: IfcDirectionSenseEnum,
      },
      OffsetFromReferenceLine: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
      ReferenceExtent: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 5,
      },
    },
    typeId: e.IFCMATERIALLAYERSETUSAGE,
    isAbstract: false,
    superType: e.IFCMATERIALUSAGEDEFINITION,
  },
  {
    fields: {
      AssociatedTo: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCRELASSOCIATESMATERIAL,
      },
    },
    typeId: e.IFCMATERIALUSAGEDEFINITION,
    isAbstract: true,
    subTypes: [
       e.IFCMATERIALLAYERSETUSAGE,
       e.IFCMATERIALPROFILESETUSAGE,
    ],
  },
  {
    fields: {
      Materials: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCMATERIAL,
      },
    },
    typeId: e.IFCMATERIALLIST,
    isAbstract: false,
  },
  {
    fields: {
      OffsetValues: {
        kind: f.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
        offset: 7,
      },
    },
    typeId: e.IFCMATERIALPROFILEWITHOFFSETS,
    isAbstract: false,
    superType: e.IFCMATERIALPROFILE,
  },
  {
    fields: {
      ForProfileSet: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCMATERIALPROFILESET,
      },
      CardinalPoint: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 2,
      },
      ReferenceExtent: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 3,
      },
    },
    typeId: e.IFCMATERIALPROFILESETUSAGE,
    isAbstract: false,
    superType: e.IFCMATERIALUSAGEDEFINITION,
    subTypes: [
       e.IFCMATERIALPROFILESETUSAGETAPERING,
    ],
  },
  {
    fields: {
      ForProfileEndSet: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCMATERIALPROFILESET,
      },
      CardinalEndPoint: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 5,
      },
    },
    typeId: e.IFCMATERIALPROFILESETUSAGETAPERING,
    isAbstract: false,
    superType: e.IFCMATERIALPROFILESETUSAGE,
  },
  {
    fields: {
      RelatingMaterial: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCMATERIAL,
      },
      RelatedMaterials: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCMATERIAL,
      },
      Expression: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
    },
    typeId: e.IFCMATERIALRELATIONSHIP,
    isAbstract: false,
    superType: e.IFCRESOURCELEVELRELATIONSHIP,
  },
  {
    fields: {
      ValueComponent: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 1,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCACCELERATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREADENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCURVATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCENERGYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCILLUMINANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTORQUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPLEXNUMBER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOUNTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNUMERICMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPARAMETERVALUE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBINARY,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATETIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDURATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIDENTIFIER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLABEL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLOGICAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCREAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEXT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMESTAMP,
          },
        ],
      },
      UnitComponent: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 2,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDERIVEDUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNAMEDUNIT,
          },
        ],
      },
    },
    typeId: e.IFCMEASUREWITHUNIT,
    isAbstract: false,
  },
  {
    fields: {
    },
    typeId: e.IFCMEMBERSTANDARDCASE,
    isAbstract: false,
    superType: e.IFCMEMBER,
  },
  {
    fields: {
      Currency: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 1,
      },
    },
    typeId: e.IFCMONETARYUNIT,
    isAbstract: false,
  },
  {
    fields: {
      Prefix: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 3,
        type: IfcSIPrefix,
      },
      Name: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 4,
        type: IfcSIUnitName,
      },
      Dimensions: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: true,
        type: e.IFCDIMENSIONALEXPONENTS,
      },
    },
    typeId: e.IFCSIUNIT,
    isAbstract: false,
    superType: e.IFCNAMEDUNIT,
  },
  {
    fields: {
      ApplicableOccurrence: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
      HasPropertySets: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 6,
        type: e.IFCPROPERTYSETDEFINITION,
      },
      Types: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 7,
        type: e.IFCRELDEFINESBYTYPE,
      },
    },
    typeId: e.IFCTYPEOBJECT,
    isAbstract: false,
    superType: e.IFCOBJECTDEFINITION,
    subTypes: [
       e.IFCTYPEPROCESS,
       e.IFCTYPEPRODUCT,
       e.IFCTYPERESOURCE,
    ],
  },
  {
    fields: {
      GlobalId: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 1,
      },
      OwnerHistory: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 2,
        type: e.IFCOWNERHISTORY,
      },
      Name: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 3,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 4,
      },
    },
    typeId: e.IFCROOT,
    isAbstract: true,
    subTypes: [
       e.IFCOBJECTDEFINITION,
       e.IFCPROPERTYDEFINITION,
       e.IFCRELATIONSHIP,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCOPENINGSTANDARDCASE,
    isAbstract: false,
    superType: e.IFCOPENINGELEMENT,
  },
  {
    fields: {
      Identification: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
      Name: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 2,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 3,
      },
      Roles: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 4,
        type: e.IFCACTORROLE,
      },
      Addresses: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 5,
        type: e.IFCADDRESS,
      },
      IsRelatedBy: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCORGANIZATIONRELATIONSHIP,
      },
      Relates: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 7,
        type: e.IFCORGANIZATIONRELATIONSHIP,
      },
      Engages: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 8,
        type: e.IFCPERSONANDORGANIZATION,
      },
    },
    typeId: e.IFCORGANIZATION,
    isAbstract: false,
  },
  {
    fields: {
      RelatingOrganization: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCORGANIZATION,
      },
      RelatedOrganizations: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCORGANIZATION,
      },
    },
    typeId: e.IFCORGANIZATIONRELATIONSHIP,
    isAbstract: false,
    superType: e.IFCRESOURCELEVELRELATIONSHIP,
  },
  {
    fields: {
      OwningUser: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCPERSONANDORGANIZATION,
      },
      OwningApplication: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCAPPLICATION,
      },
      State: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 3,
        type: IfcStateEnum,
      },
      ChangeAction: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 4,
        type: IfcChangeActionEnum,
      },
      LastModifiedDate: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 5,
      },
      LastModifyingUser: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 6,
        type: e.IFCPERSONANDORGANIZATION,
      },
      LastModifyingApplication: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 7,
        type: e.IFCAPPLICATION,
      },
      CreationDate: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 8,
      },
    },
    typeId: e.IFCOWNERHISTORY,
    isAbstract: false,
  },
  {
    fields: {
      XDim: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
      YDim: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 5,
      },
    },
    typeId: e.IFCRECTANGLEPROFILEDEF,
    isAbstract: false,
    superType: e.IFCPARAMETERIZEDPROFILEDEF,
    subTypes: [
       e.IFCRECTANGLEHOLLOWPROFILEDEF,
       e.IFCROUNDEDRECTANGLEPROFILEDEF,
    ],
  },
  {
    fields: {
      Depth: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
      FlangeWidth: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 5,
      },
      WebThickness: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 6,
      },
      FlangeThickness: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 7,
      },
      FilletRadius: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 8,
      },
      FlangeEdgeRadius: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 9,
      },
      WebEdgeRadius: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 10,
      },
      WebSlope: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 11,
      },
      FlangeSlope: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 12,
      },
    },
    typeId: e.IFCTSHAPEPROFILEDEF,
    isAbstract: false,
    superType: e.IFCPARAMETERIZEDPROFILEDEF,
  },
  {
    fields: {
      BottomXDim: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
      TopXDim: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 5,
      },
      YDim: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 6,
      },
      TopXOffset: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 7,
      },
    },
    typeId: e.IFCTRAPEZIUMPROFILEDEF,
    isAbstract: false,
    superType: e.IFCPARAMETERIZEDPROFILEDEF,
  },
  {
    fields: {
      Depth: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
      FlangeWidth: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 5,
      },
      WebThickness: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 6,
      },
      FlangeThickness: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 7,
      },
      FilletRadius: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 8,
      },
      EdgeRadius: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 9,
      },
      FlangeSlope: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 10,
      },
    },
    typeId: e.IFCUSHAPEPROFILEDEF,
    isAbstract: false,
    superType: e.IFCPARAMETERIZEDPROFILEDEF,
  },
  {
    fields: {
      Depth: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
      FlangeWidth: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 5,
      },
      WebThickness: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 6,
      },
      FlangeThickness: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 7,
      },
      FilletRadius: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 8,
      },
      EdgeRadius: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 9,
      },
    },
    typeId: e.IFCZSHAPEPROFILEDEF,
    isAbstract: false,
    superType: e.IFCPARAMETERIZEDPROFILEDEF,
  },
  {
    fields: {
      EdgeList: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCORIENTEDEDGE,
      },
    },
    typeId: e.IFCPATH,
    isAbstract: false,
    superType: e.IFCTOPOLOGICALREPRESENTATIONITEM,
  },
  {
    fields: {
      OperationType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 5,
        type: IfcPermeableCoveringOperationEnum,
      },
      PanelPosition: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 6,
        type: IfcWindowPanelPositionEnum,
      },
      FrameDepth: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 7,
      },
      FrameThickness: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 8,
      },
      ShapeAspectStyle: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 9,
        type: e.IFCSHAPEASPECT,
      },
    },
    typeId: e.IFCPERMEABLECOVERINGPROPERTIES,
    isAbstract: false,
    superType: e.IFCPREDEFINEDPROPERTYSET,
  },
  {
    fields: {
      Identification: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
      FamilyName: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      GivenName: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 3,
      },
      MiddleNames: {
        kind: f.STRING,
        rank: 1,
        optional: true,
        derived: false,
        offset: 4,
      },
      PrefixTitles: {
        kind: f.STRING,
        rank: 1,
        optional: true,
        derived: false,
        offset: 5,
      },
      SuffixTitles: {
        kind: f.STRING,
        rank: 1,
        optional: true,
        derived: false,
        offset: 6,
      },
      Roles: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 7,
        type: e.IFCACTORROLE,
      },
      Addresses: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 8,
        type: e.IFCADDRESS,
      },
      EngagedIn: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 9,
        type: e.IFCPERSONANDORGANIZATION,
      },
    },
    typeId: e.IFCPERSON,
    isAbstract: false,
  },
  {
    fields: {
      ThePerson: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCPERSON,
      },
      TheOrganization: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCORGANIZATION,
      },
      Roles: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 3,
        type: e.IFCACTORROLE,
      },
    },
    typeId: e.IFCPERSONANDORGANIZATION,
    isAbstract: false,
  },
  {
    fields: {
      HasQuantities: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCPHYSICALQUANTITY,
      },
      Discrimination: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 4,
      },
      Quality: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
      Usage: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
    },
    typeId: e.IFCPHYSICALCOMPLEXQUANTITY,
    isAbstract: false,
    superType: e.IFCPHYSICALQUANTITY,
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 1,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      HasExternalReferences: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCEXTERNALREFERENCERELATIONSHIP,
      },
      PartOfComplex: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCPHYSICALCOMPLEXQUANTITY,
      },
    },
    typeId: e.IFCPHYSICALQUANTITY,
    isAbstract: true,
    subTypes: [
       e.IFCPHYSICALCOMPLEXQUANTITY,
       e.IFCPHYSICALSIMPLEQUANTITY,
    ],
  },
  {
    fields: {
      Unit: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 3,
        type: e.IFCNAMEDUNIT,
      },
    },
    typeId: e.IFCPHYSICALSIMPLEQUANTITY,
    isAbstract: true,
    superType: e.IFCPHYSICALQUANTITY,
    subTypes: [
       e.IFCQUANTITYAREA,
       e.IFCQUANTITYCOUNT,
       e.IFCQUANTITYLENGTH,
       e.IFCQUANTITYTIME,
       e.IFCQUANTITYVOLUME,
       e.IFCQUANTITYWEIGHT,
    ],
  },
  {
    fields: {
      AreaValue: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
      Formula: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
    },
    typeId: e.IFCQUANTITYAREA,
    isAbstract: false,
    superType: e.IFCPHYSICALSIMPLEQUANTITY,
  },
  {
    fields: {
      CountValue: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
      Formula: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
    },
    typeId: e.IFCQUANTITYCOUNT,
    isAbstract: false,
    superType: e.IFCPHYSICALSIMPLEQUANTITY,
  },
  {
    fields: {
      LengthValue: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
      Formula: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
    },
    typeId: e.IFCQUANTITYLENGTH,
    isAbstract: false,
    superType: e.IFCPHYSICALSIMPLEQUANTITY,
  },
  {
    fields: {
      TimeValue: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
      Formula: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
    },
    typeId: e.IFCQUANTITYTIME,
    isAbstract: false,
    superType: e.IFCPHYSICALSIMPLEQUANTITY,
  },
  {
    fields: {
      VolumeValue: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
      Formula: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
    },
    typeId: e.IFCQUANTITYVOLUME,
    isAbstract: false,
    superType: e.IFCPHYSICALSIMPLEQUANTITY,
  },
  {
    fields: {
      WeightValue: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
      Formula: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
    },
    typeId: e.IFCQUANTITYWEIGHT,
    isAbstract: false,
    superType: e.IFCPHYSICALSIMPLEQUANTITY,
  },
  {
    fields: {
      Width: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 6,
      },
      Height: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 7,
      },
      ColourComponents: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 8,
      },
      Pixel: {
        kind: f.BINARY_DATA,
        rank: 1,
        optional: false,
        derived: false,
        offset: 9,
      },
    },
    typeId: e.IFCPIXELTEXTURE,
    isAbstract: false,
    superType: e.IFCSURFACETEXTURE,
  },
  {
    fields: {
      Placement: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 3,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAXIS2PLACEMENT2D,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAXIS2PLACEMENT3D,
          },
        ],
      },
    },
    typeId: e.IFCPLANARBOX,
    isAbstract: false,
    superType: e.IFCPLANAREXTENT,
  },
  {
    fields: {
    },
    typeId: e.IFCPLATESTANDARDCASE,
    isAbstract: false,
    superType: e.IFCPLATE,
  },
  {
    fields: {
      BasisCurve: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCCURVE,
      },
      PointParameter: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
      Dim: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCPOINTONCURVE,
    isAbstract: false,
    superType: e.IFCPOINT,
  },
  {
    fields: {
      BasisSurface: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCSURFACE,
      },
      PointParameterU: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
      PointParameterV: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 3,
      },
      Dim: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCPOINTONSURFACE,
    isAbstract: false,
    superType: e.IFCPOINT,
  },
  {
    fields: {
      Closed: {
        kind: f.BOOLEAN,
        optional: true,
        derived: false,
        offset: 2,
      },
      Faces: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCINDEXEDPOLYGONALFACE,
      },
      PnIndex: {
        kind: f.NUMBER,
        rank: 1,
        optional: true,
        derived: false,
        offset: 4,
      },
    },
    typeId: e.IFCPOLYGONALFACESET,
    isAbstract: false,
    superType: e.IFCTESSELLATEDFACESET,
  },
  {
    fields: {
      Coordinates: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCCARTESIANPOINTLIST3D,
      },
      Dim: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
      HasColours: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCINDEXEDCOLOURMAP,
      },
      HasTextures: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCINDEXEDTEXTUREMAP,
      },
    },
    typeId: e.IFCTESSELLATEDFACESET,
    isAbstract: true,
    superType: e.IFCTESSELLATEDITEM,
    subTypes: [
       e.IFCPOLYGONALFACESET,
       e.IFCTRIANGULATEDFACESET,
    ],
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 1,
      },
    },
    typeId: e.IFCPREDEFINEDITEM,
    isAbstract: true,
    superType: e.IFCPRESENTATIONITEM,
    subTypes: [
       e.IFCPREDEFINEDCOLOUR,
       e.IFCPREDEFINEDCURVEFONT,
       e.IFCPREDEFINEDTEXTFONT,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCPREDEFINEDTEXTFONT,
    isAbstract: true,
    superType: e.IFCPREDEFINEDITEM,
    subTypes: [
       e.IFCTEXTSTYLEFONTMODEL,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCPREDEFINEDPROPERTIES,
    isAbstract: true,
    superType: e.IFCPROPERTYABSTRACTION,
    subTypes: [
       e.IFCREINFORCEMENTBARPROPERTIES,
       e.IFCSECTIONPROPERTIES,
       e.IFCSECTIONREINFORCEMENTPROPERTIES,
    ],
  },
  {
    fields: {
      TotalCrossSectionArea: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 1,
      },
      SteelGrade: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 2,
      },
      BarSurface: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 3,
        type: IfcReinforcingBarSurfaceEnum,
      },
      EffectiveDepth: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 4,
      },
      NominalBarDiameter: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 5,
      },
      BarCount: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 6,
      },
    },
    typeId: e.IFCREINFORCEMENTBARPROPERTIES,
    isAbstract: false,
    superType: e.IFCPREDEFINEDPROPERTIES,
  },
  {
    fields: {
      SectionType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 1,
        type: IfcSectionTypeEnum,
      },
      StartProfile: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCPROFILEDEF,
      },
      EndProfile: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 3,
        type: e.IFCPROFILEDEF,
      },
    },
    typeId: e.IFCSECTIONPROPERTIES,
    isAbstract: false,
    superType: e.IFCPREDEFINEDPROPERTIES,
  },
  {
    fields: {
      LongitudinalStartPosition: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 1,
      },
      LongitudinalEndPosition: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
      TransversePosition: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 3,
      },
      ReinforcementRole: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 4,
        type: IfcReinforcingBarRoleEnum,
      },
      SectionDefinition: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCSECTIONPROPERTIES,
      },
      CrossSectionReinforcementDefinitions: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCREINFORCEMENTBARPROPERTIES,
      },
    },
    typeId: e.IFCSECTIONREINFORCEMENTPROPERTIES,
    isAbstract: false,
    superType: e.IFCPREDEFINEDPROPERTIES,
  },
  {
    fields: {
      DefinitionType: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
      ReinforcementSectionDefinitions: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCSECTIONREINFORCEMENTPROPERTIES,
      },
    },
    typeId: e.IFCREINFORCEMENTDEFINITIONPROPERTIES,
    isAbstract: false,
    superType: e.IFCPREDEFINEDPROPERTYSET,
  },
  {
    fields: {
      LiningDepth: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 5,
      },
      LiningThickness: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 6,
      },
      TransomThickness: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 7,
      },
      MullionThickness: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 8,
      },
      FirstTransomOffset: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 9,
      },
      SecondTransomOffset: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 10,
      },
      FirstMullionOffset: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 11,
      },
      SecondMullionOffset: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 12,
      },
      ShapeAspectStyle: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 13,
        type: e.IFCSHAPEASPECT,
      },
      LiningOffset: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 14,
      },
      LiningToPanelOffsetX: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 15,
      },
      LiningToPanelOffsetY: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 16,
      },
    },
    typeId: e.IFCWINDOWLININGPROPERTIES,
    isAbstract: false,
    superType: e.IFCPREDEFINEDPROPERTYSET,
  },
  {
    fields: {
      OperationType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 5,
        type: IfcWindowPanelOperationEnum,
      },
      PanelPosition: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 6,
        type: IfcWindowPanelPositionEnum,
      },
      FrameDepth: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 7,
      },
      FrameThickness: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 8,
      },
      ShapeAspectStyle: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 9,
        type: e.IFCSHAPEASPECT,
      },
    },
    typeId: e.IFCWINDOWPANELPROPERTIES,
    isAbstract: false,
    superType: e.IFCPREDEFINEDPROPERTYSET,
  },
  {
    fields: {
      DefinesType: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCTYPEOBJECT,
      },
      IsDefinedBy: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCRELDEFINESBYTEMPLATE,
      },
      DefinesOccurrence: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 7,
        type: e.IFCRELDEFINESBYPROPERTIES,
      },
    },
    typeId: e.IFCPROPERTYSETDEFINITION,
    isAbstract: true,
    superType: e.IFCPROPERTYDEFINITION,
    subTypes: [
       e.IFCPREDEFINEDPROPERTYSET,
       e.IFCPROPERTYSET,
       e.IFCQUANTITYSET,
    ],
  },
  {
    fields: {
      FontFamily: {
        kind: f.STRING,
        rank: 1,
        optional: false,
        derived: false,
        offset: 2,
      },
      FontStyle: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 3,
      },
      FontVariant: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 4,
      },
      FontWeight: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
      FontSize: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 6,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRATIOMEASURE,
          },
        ],
      },
    },
    typeId: e.IFCTEXTSTYLEFONTMODEL,
    isAbstract: false,
    superType: e.IFCPREDEFINEDTEXTFONT,
  },
  {
    fields: {
      DiffuseTransmissionColour: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCCOLOURRGB,
      },
      DiffuseReflectionColour: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCCOLOURRGB,
      },
      TransmissionColour: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCCOLOURRGB,
      },
      ReflectanceColour: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCCOLOURRGB,
      },
    },
    typeId: e.IFCSURFACESTYLELIGHTING,
    isAbstract: false,
    superType: e.IFCPRESENTATIONITEM,
  },
  {
    fields: {
      RefractionIndex: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 1,
      },
      DispersionFactor: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 2,
      },
    },
    typeId: e.IFCSURFACESTYLEREFRACTION,
    isAbstract: false,
    superType: e.IFCPRESENTATIONITEM,
  },
  {
    fields: {
      SurfaceColour: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCCOLOURRGB,
      },
      Transparency: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 2,
      },
    },
    typeId: e.IFCSURFACESTYLESHADING,
    isAbstract: false,
    superType: e.IFCPRESENTATIONITEM,
    subTypes: [
       e.IFCSURFACESTYLERENDERING,
    ],
  },
  {
    fields: {
      Textures: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCSURFACETEXTURE,
      },
    },
    typeId: e.IFCSURFACESTYLEWITHTEXTURES,
    isAbstract: false,
    superType: e.IFCPRESENTATIONITEM,
  },
  {
    fields: {
      Colour: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 1,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOLOURSPECIFICATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPREDEFINEDCOLOUR,
          },
        ],
      },
      BackgroundColour: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 2,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOLOURSPECIFICATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPREDEFINEDCOLOUR,
          },
        ],
      },
    },
    typeId: e.IFCTEXTSTYLEFORDEFINEDFONT,
    isAbstract: false,
    superType: e.IFCPRESENTATIONITEM,
  },
  {
    fields: {
      TextIndent: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 1,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRATIOMEASURE,
          },
        ],
      },
      TextAlign: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      TextDecoration: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 3,
      },
      LetterSpacing: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 4,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRATIOMEASURE,
          },
        ],
      },
      WordSpacing: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 5,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRATIOMEASURE,
          },
        ],
      },
      TextTransform: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      LineHeight: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 7,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRATIOMEASURE,
          },
        ],
      },
    },
    typeId: e.IFCTEXTSTYLETEXTMODEL,
    isAbstract: false,
    superType: e.IFCPRESENTATIONITEM,
  },
  {
    fields: {
      Coordinates: {
        kind: f.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
      },
    },
    typeId: e.IFCTEXTUREVERTEX,
    isAbstract: false,
    superType: e.IFCPRESENTATIONITEM,
  },
  {
    fields: {
      TexCoordsList: {
        kind: f.NUMBER,
        rank: 2,
        optional: false,
        derived: false,
        offset: 1,
      },
    },
    typeId: e.IFCTEXTUREVERTEXLIST,
    isAbstract: false,
    superType: e.IFCPRESENTATIONITEM,
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 1,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      AssignedItems: {
        kind: f.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        offset: 3,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCREPRESENTATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCREPRESENTATIONITEM,
          },
        ],
      },
      Identifier: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 4,
      },
    },
    typeId: e.IFCPRESENTATIONLAYERASSIGNMENT,
    isAbstract: false,
    subTypes: [
       e.IFCPRESENTATIONLAYERWITHSTYLE,
    ],
  },
  {
    fields: {
      LayerOn: {
        kind: f.BOOLEAN,
        optional: true,
        derived: false,
        offset: 5,
      },
      LayerFrozen: {
        kind: f.BOOLEAN,
        optional: true,
        derived: false,
        offset: 6,
      },
      LayerBlocked: {
        kind: f.BOOLEAN,
        optional: true,
        derived: false,
        offset: 7,
      },
      LayerStyles: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 8,
        type: e.IFCPRESENTATIONSTYLE,
      },
    },
    typeId: e.IFCPRESENTATIONLAYERWITHSTYLE,
    isAbstract: false,
    superType: e.IFCPRESENTATIONLAYERASSIGNMENT,
  },
  {
    fields: {
      Side: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 2,
        type: IfcSurfaceSide,
      },
      Styles: {
        kind: f.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        offset: 3,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCEXTERNALLYDEFINEDSURFACESTYLE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSURFACESTYLELIGHTING,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSURFACESTYLEREFRACTION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSURFACESTYLESHADING,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSURFACESTYLEWITHTEXTURES,
          },
        ],
      },
    },
    typeId: e.IFCSURFACESTYLE,
    isAbstract: false,
    superType: e.IFCPRESENTATIONSTYLE,
  },
  {
    fields: {
      TextCharacterAppearance: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 2,
        type: e.IFCTEXTSTYLEFORDEFINEDFONT,
      },
      TextStyle: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 3,
        type: e.IFCTEXTSTYLETEXTMODEL,
      },
      TextFontStyle: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 4,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCEXTERNALLYDEFINEDTEXTFONT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPREDEFINEDTEXTFONT,
          },
        ],
      },
      ModelOrDraughting: {
        kind: f.BOOLEAN,
        optional: true,
        derived: false,
        offset: 5,
      },
    },
    typeId: e.IFCTEXTSTYLE,
    isAbstract: false,
    superType: e.IFCPRESENTATIONSTYLE,
  },
  {
    fields: {
      Styles: {
        kind: f.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCURVESTYLE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFILLAREASTYLE,
          },
          {
            kind: f.ENUM,
            optional: false,
            derived: false,
            type: IfcNullStyle,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSURFACESTYLE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEXTSTYLE,
          },
        ],
      },
    },
    typeId: e.IFCPRESENTATIONSTYLEASSIGNMENT,
    isAbstract: false,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 8,
        type: IfcProcedureTypeEnum,
      },
    },
    typeId: e.IFCPROCEDURE,
    isAbstract: false,
    superType: e.IFCPROCESS,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcProcedureTypeEnum,
      },
    },
    typeId: e.IFCPROCEDURETYPE,
    isAbstract: false,
    superType: e.IFCTYPEPROCESS,
  },
  {
    fields: {
      Status: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 8,
      },
      WorkMethod: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 9,
      },
      IsMilestone: {
        kind: f.BOOLEAN,
        optional: false,
        derived: false,
        offset: 10,
      },
      Priority: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 11,
      },
      TaskTime: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 12,
        type: e.IFCTASKTIME,
      },
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 13,
        type: IfcTaskTypeEnum,
      },
    },
    typeId: e.IFCTASK,
    isAbstract: false,
    superType: e.IFCPROCESS,
  },
  {
    fields: {
      ProxyType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 8,
        type: IfcObjectTypeEnum,
      },
      Tag: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 9,
      },
    },
    typeId: e.IFCPROXY,
    isAbstract: false,
    superType: e.IFCPRODUCT,
  },
  {
    fields: {
      AppliedLoad: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 8,
        type: e.IFCSTRUCTURALLOAD,
      },
      GlobalOrLocal: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 9,
        type: IfcGlobalOrLocalEnum,
      },
      AssignedToStructuralItem: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 10,
        type: e.IFCRELCONNECTSSTRUCTURALACTIVITY,
      },
    },
    typeId: e.IFCSTRUCTURALACTIVITY,
    isAbstract: true,
    superType: e.IFCPRODUCT,
    subTypes: [
       e.IFCSTRUCTURALACTION,
       e.IFCSTRUCTURALREACTION,
    ],
  },
  {
    fields: {
      AssignedStructuralActivity: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 8,
        type: e.IFCRELCONNECTSSTRUCTURALACTIVITY,
      },
    },
    typeId: e.IFCSTRUCTURALITEM,
    isAbstract: true,
    superType: e.IFCPRODUCT,
    subTypes: [
       e.IFCSTRUCTURALCONNECTION,
       e.IFCSTRUCTURALMEMBER,
    ],
  },
  {
    fields: {
      ShapeOfProduct: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCPRODUCT,
      },
      HasShapeAspects: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCSHAPEASPECT,
      },
    },
    typeId: e.IFCPRODUCTDEFINITIONSHAPE,
    isAbstract: false,
    superType: e.IFCPRODUCTREPRESENTATION,
  },
  {
    fields: {
    },
    typeId: e.IFCSIMPLEPROPERTY,
    isAbstract: true,
    superType: e.IFCPROPERTY,
    subTypes: [
       e.IFCPROPERTYBOUNDEDVALUE,
       e.IFCPROPERTYENUMERATEDVALUE,
       e.IFCPROPERTYLISTVALUE,
       e.IFCPROPERTYREFERENCEVALUE,
       e.IFCPROPERTYSINGLEVALUE,
       e.IFCPROPERTYTABLEVALUE,
    ],
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 1,
      },
      EnumerationValues: {
        kind: f.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        offset: 2,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCACCELERATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREADENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCURVATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCENERGYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCILLUMINANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTORQUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPLEXNUMBER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOUNTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNUMERICMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPARAMETERVALUE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBINARY,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATETIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDURATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIDENTIFIER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLABEL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLOGICAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCREAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEXT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMESTAMP,
          },
        ],
      },
      Unit: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 3,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDERIVEDUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNAMEDUNIT,
          },
        ],
      },
    },
    typeId: e.IFCPROPERTYENUMERATION,
    isAbstract: false,
    superType: e.IFCPROPERTYABSTRACTION,
  },
  {
    fields: {
      UpperBoundValue: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 3,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCACCELERATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREADENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCURVATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCENERGYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCILLUMINANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTORQUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPLEXNUMBER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOUNTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNUMERICMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPARAMETERVALUE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBINARY,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATETIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDURATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIDENTIFIER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLABEL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLOGICAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCREAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEXT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMESTAMP,
          },
        ],
      },
      LowerBoundValue: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 4,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCACCELERATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREADENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCURVATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCENERGYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCILLUMINANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTORQUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPLEXNUMBER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOUNTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNUMERICMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPARAMETERVALUE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBINARY,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATETIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDURATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIDENTIFIER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLABEL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLOGICAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCREAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEXT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMESTAMP,
          },
        ],
      },
      Unit: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 5,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDERIVEDUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNAMEDUNIT,
          },
        ],
      },
      SetPointValue: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 6,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCACCELERATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREADENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCURVATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCENERGYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCILLUMINANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTORQUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPLEXNUMBER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOUNTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNUMERICMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPARAMETERVALUE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBINARY,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATETIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDURATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIDENTIFIER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLABEL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLOGICAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCREAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEXT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMESTAMP,
          },
        ],
      },
    },
    typeId: e.IFCPROPERTYBOUNDEDVALUE,
    isAbstract: false,
    superType: e.IFCSIMPLEPROPERTY,
  },
  {
    fields: {
      HasContext: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCRELDECLARES,
      },
      HasAssociations: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCRELASSOCIATES,
      },
    },
    typeId: e.IFCPROPERTYDEFINITION,
    isAbstract: true,
    superType: e.IFCROOT,
    subTypes: [
       e.IFCPROPERTYSETDEFINITION,
       e.IFCPROPERTYTEMPLATEDEFINITION,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCPROPERTYTEMPLATEDEFINITION,
    isAbstract: true,
    superType: e.IFCPROPERTYDEFINITION,
    subTypes: [
       e.IFCPROPERTYSETTEMPLATE,
       e.IFCPROPERTYTEMPLATE,
    ],
  },
  {
    fields: {
      DependingProperty: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCPROPERTY,
      },
      DependantProperty: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCPROPERTY,
      },
      Expression: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
    },
    typeId: e.IFCPROPERTYDEPENDENCYRELATIONSHIP,
    isAbstract: false,
    superType: e.IFCRESOURCELEVELRELATIONSHIP,
  },
  {
    fields: {
      EnumerationValues: {
        kind: f.SELECT,
        rank: 1,
        optional: true,
        derived: false,
        offset: 3,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCACCELERATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREADENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCURVATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCENERGYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCILLUMINANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTORQUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPLEXNUMBER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOUNTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNUMERICMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPARAMETERVALUE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBINARY,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATETIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDURATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIDENTIFIER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLABEL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLOGICAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCREAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEXT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMESTAMP,
          },
        ],
      },
      EnumerationReference: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 4,
        type: e.IFCPROPERTYENUMERATION,
      },
    },
    typeId: e.IFCPROPERTYENUMERATEDVALUE,
    isAbstract: false,
    superType: e.IFCSIMPLEPROPERTY,
  },
  {
    fields: {
      ListValues: {
        kind: f.SELECT,
        rank: 1,
        optional: true,
        derived: false,
        offset: 3,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCACCELERATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREADENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCURVATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCENERGYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCILLUMINANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTORQUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPLEXNUMBER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOUNTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNUMERICMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPARAMETERVALUE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBINARY,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATETIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDURATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIDENTIFIER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLABEL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLOGICAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCREAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEXT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMESTAMP,
          },
        ],
      },
      Unit: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 4,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDERIVEDUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNAMEDUNIT,
          },
        ],
      },
    },
    typeId: e.IFCPROPERTYLISTVALUE,
    isAbstract: false,
    superType: e.IFCSIMPLEPROPERTY,
  },
  {
    fields: {
      UsageName: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 3,
      },
      PropertyReference: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 4,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCADDRESS,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAPPLIEDVALUE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCEXTERNALREFERENCE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMATERIALDEFINITION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCORGANIZATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSON,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSONANDORGANIZATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTABLE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMESERIES,
          },
        ],
      },
    },
    typeId: e.IFCPROPERTYREFERENCEVALUE,
    isAbstract: false,
    superType: e.IFCSIMPLEPROPERTY,
  },
  {
    fields: {
      HasProperties: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCPROPERTY,
      },
    },
    typeId: e.IFCPROPERTYSET,
    isAbstract: false,
    superType: e.IFCPROPERTYSETDEFINITION,
  },
  {
    fields: {
      TemplateType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 5,
        type: IfcPropertySetTemplateTypeEnum,
      },
      ApplicableEntity: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      HasPropertyTemplates: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 7,
        type: e.IFCPROPERTYTEMPLATE,
      },
      Defines: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 8,
        type: e.IFCRELDEFINESBYTEMPLATE,
      },
    },
    typeId: e.IFCPROPERTYSETTEMPLATE,
    isAbstract: false,
    superType: e.IFCPROPERTYTEMPLATEDEFINITION,
  },
  {
    fields: {
      NominalValue: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 3,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCACCELERATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREADENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCURVATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCENERGYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCILLUMINANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTORQUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPLEXNUMBER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOUNTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNUMERICMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPARAMETERVALUE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBINARY,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATETIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDURATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIDENTIFIER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLABEL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLOGICAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCREAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEXT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMESTAMP,
          },
        ],
      },
      Unit: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 4,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDERIVEDUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNAMEDUNIT,
          },
        ],
      },
    },
    typeId: e.IFCPROPERTYSINGLEVALUE,
    isAbstract: false,
    superType: e.IFCSIMPLEPROPERTY,
  },
  {
    fields: {
      DefiningValues: {
        kind: f.SELECT,
        rank: 1,
        optional: true,
        derived: false,
        offset: 3,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCACCELERATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREADENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCURVATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCENERGYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCILLUMINANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTORQUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPLEXNUMBER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOUNTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNUMERICMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPARAMETERVALUE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBINARY,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATETIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDURATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIDENTIFIER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLABEL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLOGICAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCREAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEXT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMESTAMP,
          },
        ],
      },
      DefinedValues: {
        kind: f.SELECT,
        rank: 1,
        optional: true,
        derived: false,
        offset: 4,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCACCELERATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREADENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCURVATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCENERGYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCILLUMINANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTORQUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPLEXNUMBER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOUNTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNUMERICMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPARAMETERVALUE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBINARY,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATETIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDURATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIDENTIFIER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLABEL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLOGICAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCREAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEXT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMESTAMP,
          },
        ],
      },
      Expression: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
      DefiningUnit: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 6,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDERIVEDUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNAMEDUNIT,
          },
        ],
      },
      DefinedUnit: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 7,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDERIVEDUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNAMEDUNIT,
          },
        ],
      },
      CurveInterpolation: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 8,
        type: IfcCurveInterpolationEnum,
      },
    },
    typeId: e.IFCPROPERTYTABLEVALUE,
    isAbstract: false,
    superType: e.IFCSIMPLEPROPERTY,
  },
  {
    fields: {
      TemplateType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 5,
        type: IfcSimplePropertyTemplateTypeEnum,
      },
      PrimaryMeasureType: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      SecondaryMeasureType: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 7,
      },
      Enumerators: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 8,
        type: e.IFCPROPERTYENUMERATION,
      },
      PrimaryUnit: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 9,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDERIVEDUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNAMEDUNIT,
          },
        ],
      },
      SecondaryUnit: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 10,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDERIVEDUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNAMEDUNIT,
          },
        ],
      },
      Expression: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 11,
      },
      AccessState: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 12,
        type: IfcStateEnum,
      },
    },
    typeId: e.IFCSIMPLEPROPERTYTEMPLATE,
    isAbstract: false,
    superType: e.IFCPROPERTYTEMPLATE,
  },
  {
    fields: {
      WallThickness: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 6,
      },
      InnerFilletRadius: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 7,
      },
      OuterFilletRadius: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 8,
      },
    },
    typeId: e.IFCRECTANGLEHOLLOWPROFILEDEF,
    isAbstract: false,
    superType: e.IFCRECTANGLEPROFILEDEF,
  },
  {
    fields: {
      RoundingRadius: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 6,
      },
    },
    typeId: e.IFCROUNDEDRECTANGLEPROFILEDEF,
    isAbstract: false,
    superType: e.IFCRECTANGLEPROFILEDEF,
  },
  {
    fields: {
      RecurrenceType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 1,
        type: IfcRecurrenceTypeEnum,
      },
      DayComponent: {
        kind: f.NUMBER,
        rank: 1,
        optional: true,
        derived: false,
        offset: 2,
      },
      WeekdayComponent: {
        kind: f.NUMBER,
        rank: 1,
        optional: true,
        derived: false,
        offset: 3,
      },
      MonthComponent: {
        kind: f.NUMBER,
        rank: 1,
        optional: true,
        derived: false,
        offset: 4,
      },
      Position: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 5,
      },
      Interval: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 6,
      },
      Occurrences: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 7,
      },
      TimePeriods: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 8,
        type: e.IFCTIMEPERIOD,
      },
    },
    typeId: e.IFCRECURRENCEPATTERN,
    isAbstract: false,
  },
  {
    fields: {
      TypeIdentifier: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
      AttributeIdentifier: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      InstanceName: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 3,
      },
      ListPositions: {
        kind: f.NUMBER,
        rank: 1,
        optional: true,
        derived: false,
        offset: 4,
      },
      InnerReference: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 5,
        type: e.IFCREFERENCE,
      },
    },
    typeId: e.IFCREFERENCE,
    isAbstract: false,
  },
  {
    fields: {
      TimeStep: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 9,
      },
      Values: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 10,
        type: e.IFCTIMESERIESVALUE,
      },
    },
    typeId: e.IFCREGULARTIMESERIES,
    isAbstract: false,
    superType: e.IFCTIMESERIES,
  },
  {
    fields: {
      NominalDiameter: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 10,
      },
      CrossSectionArea: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 11,
      },
      BarLength: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 12,
      },
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 13,
        type: IfcReinforcingBarTypeEnum,
      },
      BarSurface: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 14,
        type: IfcReinforcingBarSurfaceEnum,
      },
    },
    typeId: e.IFCREINFORCINGBAR,
    isAbstract: false,
    superType: e.IFCREINFORCINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcReinforcingBarTypeEnum,
      },
      NominalDiameter: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 11,
      },
      CrossSectionArea: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 12,
      },
      BarLength: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 13,
      },
      BarSurface: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 14,
        type: IfcReinforcingBarSurfaceEnum,
      },
      BendingShapeCode: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 15,
      },
      BendingParameters: {
        kind: f.SELECT,
        rank: 1,
        optional: true,
        derived: false,
        offset: 16,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANEANGLEMEASURE,
          },
        ],
      },
    },
    typeId: e.IFCREINFORCINGBARTYPE,
    isAbstract: false,
    superType: e.IFCREINFORCINGELEMENTTYPE,
  },
  {
    fields: {
      MeshLength: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 10,
      },
      MeshWidth: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 11,
      },
      LongitudinalBarNominalDiameter: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 12,
      },
      TransverseBarNominalDiameter: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 13,
      },
      LongitudinalBarCrossSectionArea: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 14,
      },
      TransverseBarCrossSectionArea: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 15,
      },
      LongitudinalBarSpacing: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 16,
      },
      TransverseBarSpacing: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 17,
      },
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 18,
        type: IfcReinforcingMeshTypeEnum,
      },
    },
    typeId: e.IFCREINFORCINGMESH,
    isAbstract: false,
    superType: e.IFCREINFORCINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 10,
        type: IfcTendonTypeEnum,
      },
      NominalDiameter: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 11,
      },
      CrossSectionArea: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 12,
      },
      TensionForce: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 13,
      },
      PreStress: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 14,
      },
      FrictionCoefficient: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 15,
      },
      AnchorageSlip: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 16,
      },
      MinCurvatureRadius: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 17,
      },
    },
    typeId: e.IFCTENDON,
    isAbstract: false,
    superType: e.IFCREINFORCINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 10,
        type: IfcTendonAnchorTypeEnum,
      },
    },
    typeId: e.IFCTENDONANCHOR,
    isAbstract: false,
    superType: e.IFCREINFORCINGELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcReinforcingMeshTypeEnum,
      },
      MeshLength: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 11,
      },
      MeshWidth: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 12,
      },
      LongitudinalBarNominalDiameter: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 13,
      },
      TransverseBarNominalDiameter: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 14,
      },
      LongitudinalBarCrossSectionArea: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 15,
      },
      TransverseBarCrossSectionArea: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 16,
      },
      LongitudinalBarSpacing: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 17,
      },
      TransverseBarSpacing: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 18,
      },
      BendingShapeCode: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 19,
      },
      BendingParameters: {
        kind: f.SELECT,
        rank: 1,
        optional: true,
        derived: false,
        offset: 20,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANEANGLEMEASURE,
          },
        ],
      },
    },
    typeId: e.IFCREINFORCINGMESHTYPE,
    isAbstract: false,
    superType: e.IFCREINFORCINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcTendonAnchorTypeEnum,
      },
    },
    typeId: e.IFCTENDONANCHORTYPE,
    isAbstract: false,
    superType: e.IFCREINFORCINGELEMENTTYPE,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcTendonTypeEnum,
      },
      NominalDiameter: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 11,
      },
      CrossSectionArea: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 12,
      },
      SheathDiameter: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 13,
      },
    },
    typeId: e.IFCTENDONTYPE,
    isAbstract: false,
    superType: e.IFCREINFORCINGELEMENTTYPE,
  },
  {
    fields: {
      RelatingObject: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCOBJECTDEFINITION,
      },
      RelatedObjects: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCOBJECTDEFINITION,
      },
    },
    typeId: e.IFCRELAGGREGATES,
    isAbstract: false,
    superType: e.IFCRELDECOMPOSES,
  },
  {
    fields: {
    },
    typeId: e.IFCRELDECOMPOSES,
    isAbstract: true,
    superType: e.IFCRELATIONSHIP,
    subTypes: [
       e.IFCRELAGGREGATES,
       e.IFCRELNESTS,
       e.IFCRELPROJECTSELEMENT,
       e.IFCRELVOIDSELEMENT,
    ],
  },
  {
    fields: {
      RelatedObjects: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCOBJECTDEFINITION,
      },
      RelatedObjectsType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 6,
        type: IfcObjectTypeEnum,
      },
    },
    typeId: e.IFCRELASSIGNS,
    isAbstract: true,
    superType: e.IFCRELATIONSHIP,
    subTypes: [
       e.IFCRELASSIGNSTOACTOR,
       e.IFCRELASSIGNSTOCONTROL,
       e.IFCRELASSIGNSTOGROUP,
       e.IFCRELASSIGNSTOPROCESS,
       e.IFCRELASSIGNSTOPRODUCT,
       e.IFCRELASSIGNSTORESOURCE,
    ],
  },
  {
    fields: {
      RelatingActor: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 7,
        type: e.IFCACTOR,
      },
      ActingRole: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 8,
        type: e.IFCACTORROLE,
      },
    },
    typeId: e.IFCRELASSIGNSTOACTOR,
    isAbstract: false,
    superType: e.IFCRELASSIGNS,
  },
  {
    fields: {
      RelatingControl: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 7,
        type: e.IFCCONTROL,
      },
    },
    typeId: e.IFCRELASSIGNSTOCONTROL,
    isAbstract: false,
    superType: e.IFCRELASSIGNS,
  },
  {
    fields: {
      RelatingGroup: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 7,
        type: e.IFCGROUP,
      },
    },
    typeId: e.IFCRELASSIGNSTOGROUP,
    isAbstract: false,
    superType: e.IFCRELASSIGNS,
    subTypes: [
       e.IFCRELASSIGNSTOGROUPBYFACTOR,
    ],
  },
  {
    fields: {
      RelatingProcess: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 7,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPROCESS,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTYPEPROCESS,
          },
        ],
      },
      QuantityInProcess: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 8,
        type: e.IFCMEASUREWITHUNIT,
      },
    },
    typeId: e.IFCRELASSIGNSTOPROCESS,
    isAbstract: false,
    superType: e.IFCRELASSIGNS,
  },
  {
    fields: {
      RelatingProduct: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 7,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPRODUCT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTYPEPRODUCT,
          },
        ],
      },
    },
    typeId: e.IFCRELASSIGNSTOPRODUCT,
    isAbstract: false,
    superType: e.IFCRELASSIGNS,
  },
  {
    fields: {
      RelatingResource: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 7,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRESOURCE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTYPERESOURCE,
          },
        ],
      },
    },
    typeId: e.IFCRELASSIGNSTORESOURCE,
    isAbstract: false,
    superType: e.IFCRELASSIGNS,
  },
  {
    fields: {
    },
    typeId: e.IFCRELATIONSHIP,
    isAbstract: true,
    superType: e.IFCROOT,
    subTypes: [
       e.IFCRELASSIGNS,
       e.IFCRELASSOCIATES,
       e.IFCRELCONNECTS,
       e.IFCRELDECLARES,
       e.IFCRELDECOMPOSES,
       e.IFCRELDEFINES,
    ],
  },
  {
    fields: {
      Factor: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 8,
      },
    },
    typeId: e.IFCRELASSIGNSTOGROUPBYFACTOR,
    isAbstract: false,
    superType: e.IFCRELASSIGNSTOGROUP,
  },
  {
    fields: {
      RelatedObjects: {
        kind: f.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        offset: 5,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCOBJECTDEFINITION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPROPERTYDEFINITION,
          },
        ],
      },
    },
    typeId: e.IFCRELASSOCIATES,
    isAbstract: true,
    superType: e.IFCRELATIONSHIP,
    subTypes: [
       e.IFCRELASSOCIATESAPPROVAL,
       e.IFCRELASSOCIATESCLASSIFICATION,
       e.IFCRELASSOCIATESCONSTRAINT,
       e.IFCRELASSOCIATESDOCUMENT,
       e.IFCRELASSOCIATESLIBRARY,
       e.IFCRELASSOCIATESMATERIAL,
    ],
  },
  {
    fields: {
      RelatingApproval: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCAPPROVAL,
      },
    },
    typeId: e.IFCRELASSOCIATESAPPROVAL,
    isAbstract: false,
    superType: e.IFCRELASSOCIATES,
  },
  {
    fields: {
      RelatingClassification: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 6,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCLASSIFICATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCLASSIFICATIONREFERENCE,
          },
        ],
      },
    },
    typeId: e.IFCRELASSOCIATESCLASSIFICATION,
    isAbstract: false,
    superType: e.IFCRELASSOCIATES,
  },
  {
    fields: {
      Intent: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      RelatingConstraint: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 7,
        type: e.IFCCONSTRAINT,
      },
    },
    typeId: e.IFCRELASSOCIATESCONSTRAINT,
    isAbstract: false,
    superType: e.IFCRELASSOCIATES,
  },
  {
    fields: {
      RelatingDocument: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 6,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDOCUMENTINFORMATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDOCUMENTREFERENCE,
          },
        ],
      },
    },
    typeId: e.IFCRELASSOCIATESDOCUMENT,
    isAbstract: false,
    superType: e.IFCRELASSOCIATES,
  },
  {
    fields: {
      RelatingLibrary: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 6,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLIBRARYINFORMATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLIBRARYREFERENCE,
          },
        ],
      },
    },
    typeId: e.IFCRELASSOCIATESLIBRARY,
    isAbstract: false,
    superType: e.IFCRELASSOCIATES,
  },
  {
    fields: {
      RelatingMaterial: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 6,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMATERIALDEFINITION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMATERIALLIST,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMATERIALUSAGEDEFINITION,
          },
        ],
      },
    },
    typeId: e.IFCRELASSOCIATESMATERIAL,
    isAbstract: false,
    superType: e.IFCRELASSOCIATES,
  },
  {
    fields: {
    },
    typeId: e.IFCRELCONNECTS,
    isAbstract: true,
    superType: e.IFCRELATIONSHIP,
    subTypes: [
       e.IFCRELCONNECTSELEMENTS,
       e.IFCRELCONNECTSPORTTOELEMENT,
       e.IFCRELCONNECTSPORTS,
       e.IFCRELCONNECTSSTRUCTURALACTIVITY,
       e.IFCRELCONNECTSSTRUCTURALMEMBER,
       e.IFCRELCONTAINEDINSPATIALSTRUCTURE,
       e.IFCRELCOVERSBLDGELEMENTS,
       e.IFCRELCOVERSSPACES,
       e.IFCRELFILLSELEMENT,
       e.IFCRELFLOWCONTROLELEMENTS,
       e.IFCRELINTERFERESELEMENTS,
       e.IFCRELREFERENCEDINSPATIALSTRUCTURE,
       e.IFCRELSEQUENCE,
       e.IFCRELSERVICESBUILDINGS,
       e.IFCRELSPACEBOUNDARY,
    ],
  },
  {
    fields: {
      ConnectionGeometry: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 5,
        type: e.IFCCONNECTIONGEOMETRY,
      },
      RelatingElement: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCELEMENT,
      },
      RelatedElement: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 7,
        type: e.IFCELEMENT,
      },
    },
    typeId: e.IFCRELCONNECTSELEMENTS,
    isAbstract: false,
    superType: e.IFCRELCONNECTS,
    subTypes: [
       e.IFCRELCONNECTSPATHELEMENTS,
       e.IFCRELCONNECTSWITHREALIZINGELEMENTS,
    ],
  },
  {
    fields: {
      RelatingPort: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCPORT,
      },
      RelatedElement: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCDISTRIBUTIONELEMENT,
      },
    },
    typeId: e.IFCRELCONNECTSPORTTOELEMENT,
    isAbstract: false,
    superType: e.IFCRELCONNECTS,
  },
  {
    fields: {
      RelatingPort: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCPORT,
      },
      RelatedPort: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCPORT,
      },
      RealizingElement: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 7,
        type: e.IFCELEMENT,
      },
    },
    typeId: e.IFCRELCONNECTSPORTS,
    isAbstract: false,
    superType: e.IFCRELCONNECTS,
  },
  {
    fields: {
      RelatingElement: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 5,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELEMENT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSTRUCTURALITEM,
          },
        ],
      },
      RelatedStructuralActivity: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCSTRUCTURALACTIVITY,
      },
    },
    typeId: e.IFCRELCONNECTSSTRUCTURALACTIVITY,
    isAbstract: false,
    superType: e.IFCRELCONNECTS,
  },
  {
    fields: {
      RelatingStructuralMember: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCSTRUCTURALMEMBER,
      },
      RelatedStructuralConnection: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCSTRUCTURALCONNECTION,
      },
      AppliedCondition: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 7,
        type: e.IFCBOUNDARYCONDITION,
      },
      AdditionalConditions: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 8,
        type: e.IFCSTRUCTURALCONNECTIONCONDITION,
      },
      SupportedLength: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 9,
      },
      ConditionCoordinateSystem: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 10,
        type: e.IFCAXIS2PLACEMENT3D,
      },
    },
    typeId: e.IFCRELCONNECTSSTRUCTURALMEMBER,
    isAbstract: false,
    superType: e.IFCRELCONNECTS,
    subTypes: [
       e.IFCRELCONNECTSWITHECCENTRICITY,
    ],
  },
  {
    fields: {
      RelatedElements: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCPRODUCT,
      },
      RelatingStructure: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCSPATIALELEMENT,
      },
    },
    typeId: e.IFCRELCONTAINEDINSPATIALSTRUCTURE,
    isAbstract: false,
    superType: e.IFCRELCONNECTS,
  },
  {
    fields: {
      RelatingBuildingElement: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCELEMENT,
      },
      RelatedCoverings: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCCOVERING,
      },
    },
    typeId: e.IFCRELCOVERSBLDGELEMENTS,
    isAbstract: false,
    superType: e.IFCRELCONNECTS,
  },
  {
    fields: {
      RelatingSpace: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCSPACE,
      },
      RelatedCoverings: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCCOVERING,
      },
    },
    typeId: e.IFCRELCOVERSSPACES,
    isAbstract: false,
    superType: e.IFCRELCONNECTS,
  },
  {
    fields: {
      RelatingOpeningElement: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCOPENINGELEMENT,
      },
      RelatedBuildingElement: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCELEMENT,
      },
    },
    typeId: e.IFCRELFILLSELEMENT,
    isAbstract: false,
    superType: e.IFCRELCONNECTS,
  },
  {
    fields: {
      RelatedControlElements: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCDISTRIBUTIONCONTROLELEMENT,
      },
      RelatingFlowElement: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCDISTRIBUTIONFLOWELEMENT,
      },
    },
    typeId: e.IFCRELFLOWCONTROLELEMENTS,
    isAbstract: false,
    superType: e.IFCRELCONNECTS,
  },
  {
    fields: {
      RelatingElement: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCELEMENT,
      },
      RelatedElement: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCELEMENT,
      },
      InterferenceGeometry: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 7,
        type: e.IFCCONNECTIONGEOMETRY,
      },
      InterferenceType: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 8,
      },
      ImpliedOrder: {
        kind: f.BOOLEAN,
        optional: false,
        derived: false,
        offset: 9,
      },
    },
    typeId: e.IFCRELINTERFERESELEMENTS,
    isAbstract: false,
    superType: e.IFCRELCONNECTS,
  },
  {
    fields: {
      RelatedElements: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCPRODUCT,
      },
      RelatingStructure: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCSPATIALELEMENT,
      },
    },
    typeId: e.IFCRELREFERENCEDINSPATIALSTRUCTURE,
    isAbstract: false,
    superType: e.IFCRELCONNECTS,
  },
  {
    fields: {
      RelatingProcess: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCPROCESS,
      },
      RelatedProcess: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCPROCESS,
      },
      TimeLag: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 7,
        type: e.IFCLAGTIME,
      },
      SequenceType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 8,
        type: IfcSequenceEnum,
      },
      UserDefinedSequenceType: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 9,
      },
    },
    typeId: e.IFCRELSEQUENCE,
    isAbstract: false,
    superType: e.IFCRELCONNECTS,
  },
  {
    fields: {
      RelatingSystem: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCSYSTEM,
      },
      RelatedBuildings: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCSPATIALELEMENT,
      },
    },
    typeId: e.IFCRELSERVICESBUILDINGS,
    isAbstract: false,
    superType: e.IFCRELCONNECTS,
  },
  {
    fields: {
      RelatingSpace: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 5,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCEXTERNALSPATIALELEMENT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSPACE,
          },
        ],
      },
      RelatedBuildingElement: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCELEMENT,
      },
      ConnectionGeometry: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 7,
        type: e.IFCCONNECTIONGEOMETRY,
      },
      PhysicalOrVirtualBoundary: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 8,
        type: IfcPhysicalOrVirtualEnum,
      },
      InternalOrExternalBoundary: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 9,
        type: IfcInternalOrExternalEnum,
      },
    },
    typeId: e.IFCRELSPACEBOUNDARY,
    isAbstract: false,
    superType: e.IFCRELCONNECTS,
    subTypes: [
       e.IFCRELSPACEBOUNDARY1STLEVEL,
    ],
  },
  {
    fields: {
      RelatingPriorities: {
        kind: f.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
        offset: 8,
      },
      RelatedPriorities: {
        kind: f.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
        offset: 9,
      },
      RelatedConnectionType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcConnectionTypeEnum,
      },
      RelatingConnectionType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 11,
        type: IfcConnectionTypeEnum,
      },
    },
    typeId: e.IFCRELCONNECTSPATHELEMENTS,
    isAbstract: false,
    superType: e.IFCRELCONNECTSELEMENTS,
  },
  {
    fields: {
      RealizingElements: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 8,
        type: e.IFCELEMENT,
      },
      ConnectionType: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 9,
      },
    },
    typeId: e.IFCRELCONNECTSWITHREALIZINGELEMENTS,
    isAbstract: false,
    superType: e.IFCRELCONNECTSELEMENTS,
  },
  {
    fields: {
      ConnectionConstraint: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 11,
        type: e.IFCCONNECTIONGEOMETRY,
      },
    },
    typeId: e.IFCRELCONNECTSWITHECCENTRICITY,
    isAbstract: false,
    superType: e.IFCRELCONNECTSSTRUCTURALMEMBER,
  },
  {
    fields: {
      RelatingContext: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCCONTEXT,
      },
      RelatedDefinitions: {
        kind: f.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        offset: 6,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCOBJECTDEFINITION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPROPERTYDEFINITION,
          },
        ],
      },
    },
    typeId: e.IFCRELDECLARES,
    isAbstract: false,
    superType: e.IFCRELATIONSHIP,
  },
  {
    fields: {
      RelatingObject: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCOBJECTDEFINITION,
      },
      RelatedObjects: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCOBJECTDEFINITION,
      },
    },
    typeId: e.IFCRELNESTS,
    isAbstract: false,
    superType: e.IFCRELDECOMPOSES,
  },
  {
    fields: {
      RelatingElement: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCELEMENT,
      },
      RelatedFeatureElement: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCFEATUREELEMENTADDITION,
      },
    },
    typeId: e.IFCRELPROJECTSELEMENT,
    isAbstract: false,
    superType: e.IFCRELDECOMPOSES,
  },
  {
    fields: {
      RelatingBuildingElement: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCELEMENT,
      },
      RelatedOpeningElement: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCFEATUREELEMENTSUBTRACTION,
      },
    },
    typeId: e.IFCRELVOIDSELEMENT,
    isAbstract: false,
    superType: e.IFCRELDECOMPOSES,
  },
  {
    fields: {
    },
    typeId: e.IFCRELDEFINES,
    isAbstract: true,
    superType: e.IFCRELATIONSHIP,
    subTypes: [
       e.IFCRELDEFINESBYOBJECT,
       e.IFCRELDEFINESBYPROPERTIES,
       e.IFCRELDEFINESBYTEMPLATE,
       e.IFCRELDEFINESBYTYPE,
    ],
  },
  {
    fields: {
      RelatedObjects: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCOBJECT,
      },
      RelatingObject: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCOBJECT,
      },
    },
    typeId: e.IFCRELDEFINESBYOBJECT,
    isAbstract: false,
    superType: e.IFCRELDEFINES,
  },
  {
    fields: {
      RelatedObjects: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCOBJECTDEFINITION,
      },
      RelatingPropertyDefinition: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 6,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPROPERTYSETDEFINITION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPROPERTYSETDEFINITIONSET,
          },
        ],
      },
    },
    typeId: e.IFCRELDEFINESBYPROPERTIES,
    isAbstract: false,
    superType: e.IFCRELDEFINES,
  },
  {
    fields: {
      RelatedPropertySets: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCPROPERTYSETDEFINITION,
      },
      RelatingTemplate: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCPROPERTYSETTEMPLATE,
      },
    },
    typeId: e.IFCRELDEFINESBYTEMPLATE,
    isAbstract: false,
    superType: e.IFCRELDEFINES,
  },
  {
    fields: {
      RelatedObjects: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCOBJECT,
      },
      RelatingType: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCTYPEOBJECT,
      },
    },
    typeId: e.IFCRELDEFINESBYTYPE,
    isAbstract: false,
    superType: e.IFCRELDEFINES,
  },
  {
    fields: {
      ParentBoundary: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 10,
        type: e.IFCRELSPACEBOUNDARY1STLEVEL,
      },
      InnerBoundaries: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 11,
        type: e.IFCRELSPACEBOUNDARY1STLEVEL,
      },
    },
    typeId: e.IFCRELSPACEBOUNDARY1STLEVEL,
    isAbstract: false,
    superType: e.IFCRELSPACEBOUNDARY,
    subTypes: [
       e.IFCRELSPACEBOUNDARY2NDLEVEL,
    ],
  },
  {
    fields: {
      CorrespondingBoundary: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 11,
        type: e.IFCRELSPACEBOUNDARY2NDLEVEL,
      },
      Corresponds: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 12,
        type: e.IFCRELSPACEBOUNDARY2NDLEVEL,
      },
    },
    typeId: e.IFCRELSPACEBOUNDARY2NDLEVEL,
    isAbstract: false,
    superType: e.IFCRELSPACEBOUNDARY1STLEVEL,
  },
  {
    fields: {
      ContextOfItems: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCREPRESENTATIONCONTEXT,
      },
      RepresentationIdentifier: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      RepresentationType: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 3,
      },
      Items: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCREPRESENTATIONITEM,
      },
      RepresentationMap: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCREPRESENTATIONMAP,
      },
      LayerAssignments: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCPRESENTATIONLAYERASSIGNMENT,
      },
      OfProductRepresentation: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 7,
        type: e.IFCPRODUCTREPRESENTATION,
      },
    },
    typeId: e.IFCREPRESENTATION,
    isAbstract: true,
    subTypes: [
       e.IFCSHAPEMODEL,
       e.IFCSTYLEMODEL,
    ],
  },
  {
    fields: {
      OfShapeAspect: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCSHAPEASPECT,
      },
    },
    typeId: e.IFCSHAPEMODEL,
    isAbstract: true,
    superType: e.IFCREPRESENTATION,
    subTypes: [
       e.IFCSHAPEREPRESENTATION,
       e.IFCTOPOLOGYREPRESENTATION,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCSTYLEMODEL,
    isAbstract: true,
    superType: e.IFCREPRESENTATION,
    subTypes: [
       e.IFCSTYLEDREPRESENTATION,
    ],
  },
  {
    fields: {
      Item: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 1,
        type: e.IFCREPRESENTATIONITEM,
      },
      Styles: {
        kind: f.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        offset: 2,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPRESENTATIONSTYLE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPRESENTATIONSTYLEASSIGNMENT,
          },
        ],
      },
      Name: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 3,
      },
    },
    typeId: e.IFCSTYLEDITEM,
    isAbstract: false,
    superType: e.IFCREPRESENTATIONITEM,
  },
  {
    fields: {
      MappingOrigin: {
        kind: f.SELECT,
        optional: false,
        derived: false,
        offset: 1,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAXIS2PLACEMENT2D,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAXIS2PLACEMENT3D,
          },
        ],
      },
      MappedRepresentation: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCREPRESENTATION,
      },
      HasShapeAspects: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCSHAPEASPECT,
      },
      MapUsage: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCMAPPEDITEM,
      },
    },
    typeId: e.IFCREPRESENTATIONMAP,
    isAbstract: false,
  },
  {
    fields: {
      RelatedResourceObjects: {
        kind: f.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        offset: 3,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCACTORROLE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAPPLIEDVALUE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAPPROVAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCONSTRAINT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCONTEXTDEPENDENTUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCONVERSIONBASEDUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCEXTERNALINFORMATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCEXTERNALREFERENCE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMATERIALDEFINITION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCORGANIZATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSON,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSONANDORGANIZATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPHYSICALQUANTITY,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPROFILEDEF,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPROPERTYABSTRACTION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMESERIES,
          },
        ],
      },
      RelatingApproval: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCAPPROVAL,
      },
    },
    typeId: e.IFCRESOURCEAPPROVALRELATIONSHIP,
    isAbstract: false,
    superType: e.IFCRESOURCELEVELRELATIONSHIP,
  },
  {
    fields: {
      RelatingConstraint: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCCONSTRAINT,
      },
      RelatedResourceObjects: {
        kind: f.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        offset: 4,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCACTORROLE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAPPLIEDVALUE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAPPROVAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCONSTRAINT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCONTEXTDEPENDENTUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCONVERSIONBASEDUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCEXTERNALINFORMATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCEXTERNALREFERENCE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMATERIALDEFINITION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCORGANIZATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSON,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPERSONANDORGANIZATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPHYSICALQUANTITY,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPROFILEDEF,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPROPERTYABSTRACTION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMESERIES,
          },
        ],
      },
    },
    typeId: e.IFCRESOURCECONSTRAINTRELATIONSHIP,
    isAbstract: false,
    superType: e.IFCRESOURCELEVELRELATIONSHIP,
  },
  {
    fields: {
      ScheduleWork: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 4,
      },
      ScheduleUsage: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 5,
      },
      ScheduleStart: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      ScheduleFinish: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 7,
      },
      ScheduleContour: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 8,
      },
      LevelingDelay: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 9,
      },
      IsOverAllocated: {
        kind: f.BOOLEAN,
        optional: true,
        derived: false,
        offset: 10,
      },
      StatusTime: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 11,
      },
      ActualWork: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 12,
      },
      ActualUsage: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 13,
      },
      ActualStart: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 14,
      },
      ActualFinish: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 15,
      },
      RemainingWork: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 16,
      },
      RemainingUsage: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 17,
      },
      Completion: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 18,
      },
    },
    typeId: e.IFCRESOURCETIME,
    isAbstract: false,
    superType: e.IFCSCHEDULINGTIME,
  },
  {
    fields: {
      Axis: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCAXIS1PLACEMENT,
      },
      Angle: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
      AxisLine: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: true,
        type: e.IFCLINE,
      },
    },
    typeId: e.IFCREVOLVEDAREASOLID,
    isAbstract: false,
    superType: e.IFCSWEPTAREASOLID,
    subTypes: [
       e.IFCREVOLVEDAREASOLIDTAPERED,
    ],
  },
  {
    fields: {
      EndSweptArea: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 5,
        type: e.IFCPROFILEDEF,
      },
    },
    typeId: e.IFCREVOLVEDAREASOLIDTAPERED,
    isAbstract: false,
    superType: e.IFCREVOLVEDAREASOLID,
  },
  {
    fields: {
      DurationType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 4,
        type: IfcTaskDurationEnum,
      },
      ScheduleDuration: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
      ScheduleStart: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
      ScheduleFinish: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 7,
      },
      EarlyStart: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 8,
      },
      EarlyFinish: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 9,
      },
      LateStart: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 10,
      },
      LateFinish: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 11,
      },
      FreeFloat: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 12,
      },
      TotalFloat: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 13,
      },
      IsCritical: {
        kind: f.BOOLEAN,
        optional: true,
        derived: false,
        offset: 14,
      },
      StatusTime: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 15,
      },
      ActualDuration: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 16,
      },
      ActualStart: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 17,
      },
      ActualFinish: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 18,
      },
      RemainingTime: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 19,
      },
      Completion: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 20,
      },
    },
    typeId: e.IFCTASKTIME,
    isAbstract: false,
    superType: e.IFCSCHEDULINGTIME,
    subTypes: [
       e.IFCTASKTIMERECURRING,
    ],
  },
  {
    fields: {
      RecurrencePattern: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 4,
        type: e.IFCRECURRENCEPATTERN,
      },
      Start: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 5,
      },
      Finish: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
    },
    typeId: e.IFCWORKTIME,
    isAbstract: false,
    superType: e.IFCSCHEDULINGTIME,
  },
  {
    fields: {
    },
    typeId: e.IFCSEAMCURVE,
    isAbstract: false,
    superType: e.IFCSURFACECURVE,
  },
  {
    fields: {
      ShapeRepresentations: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCSHAPEMODEL,
      },
      Name: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 3,
      },
      ProductDefinitional: {
        kind: f.BOOLEAN,
        optional: true,
        derived: false,
        offset: 4,
      },
      PartOfProductDefinitionShape: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 5,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPRODUCTDEFINITIONSHAPE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCREPRESENTATIONMAP,
          },
        ],
      },
    },
    typeId: e.IFCSHAPEASPECT,
    isAbstract: false,
  },
  {
    fields: {
    },
    typeId: e.IFCSHAPEREPRESENTATION,
    isAbstract: false,
    superType: e.IFCSHAPEMODEL,
  },
  {
    fields: {
    },
    typeId: e.IFCTOPOLOGYREPRESENTATION,
    isAbstract: false,
    superType: e.IFCSHAPEMODEL,
  },
  {
    fields: {
      RefLatitude: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 10,
      },
      RefLongitude: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 11,
      },
      RefElevation: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 12,
      },
      LandTitleNumber: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 13,
      },
      SiteAddress: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 14,
        type: e.IFCPOSTALADDRESS,
      },
    },
    typeId: e.IFCSITE,
    isAbstract: false,
    superType: e.IFCSPATIALSTRUCTUREELEMENT,
  },
  {
    fields: {
    },
    typeId: e.IFCSLABELEMENTEDCASE,
    isAbstract: false,
    superType: e.IFCSLAB,
  },
  {
    fields: {
    },
    typeId: e.IFCSLABSTANDARDCASE,
    isAbstract: false,
    superType: e.IFCSLAB,
  },
  {
    fields: {
      SlippageX: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 2,
      },
      SlippageY: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 3,
      },
      SlippageZ: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 4,
      },
    },
    typeId: e.IFCSLIPPAGECONNECTIONCONDITION,
    isAbstract: false,
    superType: e.IFCSTRUCTURALCONNECTIONCONDITION,
  },
  {
    fields: {
      Directrix: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCCURVE,
      },
      Radius: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 2,
      },
      InnerRadius: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 3,
      },
      StartParam: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 4,
      },
      EndParam: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 5,
      },
    },
    typeId: e.IFCSWEPTDISKSOLID,
    isAbstract: false,
    superType: e.IFCSOLIDMODEL,
    subTypes: [
       e.IFCSWEPTDISKSOLIDPOLYGONAL,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 10,
        type: IfcSpaceTypeEnum,
      },
      ElevationWithFlooring: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 11,
      },
      HasCoverings: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 12,
        type: e.IFCRELCOVERSSPACES,
      },
      BoundedBy: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 13,
        type: e.IFCRELSPACEBOUNDARY,
      },
    },
    typeId: e.IFCSPACE,
    isAbstract: false,
    superType: e.IFCSPATIALSTRUCTUREELEMENT,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcSpaceTypeEnum,
      },
      LongName: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 11,
      },
    },
    typeId: e.IFCSPACETYPE,
    isAbstract: false,
    superType: e.IFCSPATIALSTRUCTUREELEMENTTYPE,
  },
  {
    fields: {
    },
    typeId: e.IFCSPATIALSTRUCTUREELEMENTTYPE,
    isAbstract: true,
    superType: e.IFCSPATIALELEMENTTYPE,
    subTypes: [
       e.IFCSPACETYPE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 9,
        type: IfcSpatialZoneTypeEnum,
      },
    },
    typeId: e.IFCSPATIALZONE,
    isAbstract: false,
    superType: e.IFCSPATIALELEMENT,
  },
  {
    fields: {
      ElementType: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 9,
      },
    },
    typeId: e.IFCSPATIALELEMENTTYPE,
    isAbstract: true,
    superType: e.IFCTYPEPRODUCT,
    subTypes: [
       e.IFCSPATIALSTRUCTUREELEMENTTYPE,
       e.IFCSPATIALZONETYPE,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcSpatialZoneTypeEnum,
      },
      LongName: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 11,
      },
    },
    typeId: e.IFCSPATIALZONETYPE,
    isAbstract: false,
    superType: e.IFCSPATIALELEMENTTYPE,
  },
  {
    fields: {
      DestabilizingLoad: {
        kind: f.BOOLEAN,
        optional: true,
        derived: false,
        offset: 10,
      },
    },
    typeId: e.IFCSTRUCTURALACTION,
    isAbstract: true,
    superType: e.IFCSTRUCTURALACTIVITY,
    subTypes: [
       e.IFCSTRUCTURALCURVEACTION,
       e.IFCSTRUCTURALPOINTACTION,
       e.IFCSTRUCTURALSURFACEACTION,
    ],
  },
  {
    fields: {
      ProjectedOrTrue: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 11,
        type: IfcProjectedOrTrueLengthEnum,
      },
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 12,
        type: IfcStructuralCurveActivityTypeEnum,
      },
    },
    typeId: e.IFCSTRUCTURALCURVEACTION,
    isAbstract: false,
    superType: e.IFCSTRUCTURALACTION,
    subTypes: [
       e.IFCSTRUCTURALLINEARACTION,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCSTRUCTURALPOINTACTION,
    isAbstract: false,
    superType: e.IFCSTRUCTURALACTION,
  },
  {
    fields: {
      ProjectedOrTrue: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 11,
        type: IfcProjectedOrTrueLengthEnum,
      },
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 12,
        type: IfcStructuralSurfaceActivityTypeEnum,
      },
    },
    typeId: e.IFCSTRUCTURALSURFACEACTION,
    isAbstract: false,
    superType: e.IFCSTRUCTURALACTION,
    subTypes: [
       e.IFCSTRUCTURALPLANARACTION,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCSTRUCTURALREACTION,
    isAbstract: true,
    superType: e.IFCSTRUCTURALACTIVITY,
    subTypes: [
       e.IFCSTRUCTURALCURVEREACTION,
       e.IFCSTRUCTURALPOINTREACTION,
       e.IFCSTRUCTURALSURFACEREACTION,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 6,
        type: IfcAnalysisModelTypeEnum,
      },
      OrientationOf2DPlane: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 7,
        type: e.IFCAXIS2PLACEMENT3D,
      },
      LoadedBy: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 8,
        type: e.IFCSTRUCTURALLOADGROUP,
      },
      HasResults: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 9,
        type: e.IFCSTRUCTURALRESULTGROUP,
      },
      SharedPlacement: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 10,
        type: e.IFCOBJECTPLACEMENT,
      },
    },
    typeId: e.IFCSTRUCTURALANALYSISMODEL,
    isAbstract: false,
    superType: e.IFCSYSTEM,
  },
  {
    fields: {
      AppliedCondition: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 8,
        type: e.IFCBOUNDARYCONDITION,
      },
      ConnectsStructuralMembers: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 9,
        type: e.IFCRELCONNECTSSTRUCTURALMEMBER,
      },
    },
    typeId: e.IFCSTRUCTURALCONNECTION,
    isAbstract: true,
    superType: e.IFCSTRUCTURALITEM,
    subTypes: [
       e.IFCSTRUCTURALCURVECONNECTION,
       e.IFCSTRUCTURALPOINTCONNECTION,
       e.IFCSTRUCTURALSURFACECONNECTION,
    ],
  },
  {
    fields: {
      Axis: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 9,
        type: e.IFCDIRECTION,
      },
    },
    typeId: e.IFCSTRUCTURALCURVECONNECTION,
    isAbstract: false,
    superType: e.IFCSTRUCTURALCONNECTION,
  },
  {
    fields: {
      ConditionCoordinateSystem: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 9,
        type: e.IFCAXIS2PLACEMENT3D,
      },
    },
    typeId: e.IFCSTRUCTURALPOINTCONNECTION,
    isAbstract: false,
    superType: e.IFCSTRUCTURALCONNECTION,
  },
  {
    fields: {
    },
    typeId: e.IFCSTRUCTURALSURFACECONNECTION,
    isAbstract: false,
    superType: e.IFCSTRUCTURALCONNECTION,
  },
  {
    fields: {
    },
    typeId: e.IFCSTRUCTURALLINEARACTION,
    isAbstract: false,
    superType: e.IFCSTRUCTURALCURVEACTION,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 8,
        type: IfcStructuralCurveMemberTypeEnum,
      },
      Axis: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 9,
        type: e.IFCDIRECTION,
      },
    },
    typeId: e.IFCSTRUCTURALCURVEMEMBER,
    isAbstract: false,
    superType: e.IFCSTRUCTURALMEMBER,
    subTypes: [
       e.IFCSTRUCTURALCURVEMEMBERVARYING,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCSTRUCTURALCURVEMEMBERVARYING,
    isAbstract: false,
    superType: e.IFCSTRUCTURALCURVEMEMBER,
  },
  {
    fields: {
      ConnectedBy: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 8,
        type: e.IFCRELCONNECTSSTRUCTURALMEMBER,
      },
    },
    typeId: e.IFCSTRUCTURALMEMBER,
    isAbstract: true,
    superType: e.IFCSTRUCTURALITEM,
    subTypes: [
       e.IFCSTRUCTURALCURVEMEMBER,
       e.IFCSTRUCTURALSURFACEMEMBER,
    ],
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcStructuralCurveActivityTypeEnum,
      },
    },
    typeId: e.IFCSTRUCTURALCURVEREACTION,
    isAbstract: false,
    superType: e.IFCSTRUCTURALREACTION,
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
    },
    typeId: e.IFCSTRUCTURALLOAD,
    isAbstract: true,
    subTypes: [
       e.IFCSTRUCTURALLOADCONFIGURATION,
       e.IFCSTRUCTURALLOADORRESULT,
    ],
  },
  {
    fields: {
      Values: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCSTRUCTURALLOADORRESULT,
      },
      Locations: {
        kind: f.NUMBER,
        rank: 2,
        optional: true,
        derived: false,
        offset: 3,
      },
    },
    typeId: e.IFCSTRUCTURALLOADCONFIGURATION,
    isAbstract: false,
    superType: e.IFCSTRUCTURALLOAD,
  },
  {
    fields: {
    },
    typeId: e.IFCSTRUCTURALLOADORRESULT,
    isAbstract: true,
    superType: e.IFCSTRUCTURALLOAD,
    subTypes: [
       e.IFCSTRUCTURALLOADSTATIC,
       e.IFCSURFACEREINFORCEMENTAREA,
    ],
  },
  {
    fields: {
      SelfWeightCoefficients: {
        kind: f.NUMBER,
        rank: 1,
        optional: true,
        derived: false,
        offset: 11,
      },
    },
    typeId: e.IFCSTRUCTURALLOADCASE,
    isAbstract: false,
    superType: e.IFCSTRUCTURALLOADGROUP,
  },
  {
    fields: {
      LinearForceX: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 2,
      },
      LinearForceY: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 3,
      },
      LinearForceZ: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 4,
      },
      LinearMomentX: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 5,
      },
      LinearMomentY: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 6,
      },
      LinearMomentZ: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 7,
      },
    },
    typeId: e.IFCSTRUCTURALLOADLINEARFORCE,
    isAbstract: false,
    superType: e.IFCSTRUCTURALLOADSTATIC,
  },
  {
    fields: {
    },
    typeId: e.IFCSTRUCTURALLOADSTATIC,
    isAbstract: true,
    superType: e.IFCSTRUCTURALLOADORRESULT,
    subTypes: [
       e.IFCSTRUCTURALLOADLINEARFORCE,
       e.IFCSTRUCTURALLOADPLANARFORCE,
       e.IFCSTRUCTURALLOADSINGLEDISPLACEMENT,
       e.IFCSTRUCTURALLOADSINGLEFORCE,
       e.IFCSTRUCTURALLOADTEMPERATURE,
    ],
  },
  {
    fields: {
      SurfaceReinforcement1: {
        kind: f.NUMBER,
        rank: 1,
        optional: true,
        derived: false,
        offset: 2,
      },
      SurfaceReinforcement2: {
        kind: f.NUMBER,
        rank: 1,
        optional: true,
        derived: false,
        offset: 3,
      },
      ShearReinforcement: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 4,
      },
    },
    typeId: e.IFCSURFACEREINFORCEMENTAREA,
    isAbstract: false,
    superType: e.IFCSTRUCTURALLOADORRESULT,
  },
  {
    fields: {
      PlanarForceX: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 2,
      },
      PlanarForceY: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 3,
      },
      PlanarForceZ: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 4,
      },
    },
    typeId: e.IFCSTRUCTURALLOADPLANARFORCE,
    isAbstract: false,
    superType: e.IFCSTRUCTURALLOADSTATIC,
  },
  {
    fields: {
      DisplacementX: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 2,
      },
      DisplacementY: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 3,
      },
      DisplacementZ: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 4,
      },
      RotationalDisplacementRX: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 5,
      },
      RotationalDisplacementRY: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 6,
      },
      RotationalDisplacementRZ: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 7,
      },
    },
    typeId: e.IFCSTRUCTURALLOADSINGLEDISPLACEMENT,
    isAbstract: false,
    superType: e.IFCSTRUCTURALLOADSTATIC,
    subTypes: [
       e.IFCSTRUCTURALLOADSINGLEDISPLACEMENTDISTORTION,
    ],
  },
  {
    fields: {
      Distortion: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 8,
      },
    },
    typeId: e.IFCSTRUCTURALLOADSINGLEDISPLACEMENTDISTORTION,
    isAbstract: false,
    superType: e.IFCSTRUCTURALLOADSINGLEDISPLACEMENT,
  },
  {
    fields: {
      ForceX: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 2,
      },
      ForceY: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 3,
      },
      ForceZ: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 4,
      },
      MomentX: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 5,
      },
      MomentY: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 6,
      },
      MomentZ: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 7,
      },
    },
    typeId: e.IFCSTRUCTURALLOADSINGLEFORCE,
    isAbstract: false,
    superType: e.IFCSTRUCTURALLOADSTATIC,
    subTypes: [
       e.IFCSTRUCTURALLOADSINGLEFORCEWARPING,
    ],
  },
  {
    fields: {
      WarpingMoment: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 8,
      },
    },
    typeId: e.IFCSTRUCTURALLOADSINGLEFORCEWARPING,
    isAbstract: false,
    superType: e.IFCSTRUCTURALLOADSINGLEFORCE,
  },
  {
    fields: {
      DeltaTConstant: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 2,
      },
      DeltaTY: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 3,
      },
      DeltaTZ: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 4,
      },
    },
    typeId: e.IFCSTRUCTURALLOADTEMPERATURE,
    isAbstract: false,
    superType: e.IFCSTRUCTURALLOADSTATIC,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 8,
        type: IfcStructuralSurfaceMemberTypeEnum,
      },
      Thickness: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 9,
      },
    },
    typeId: e.IFCSTRUCTURALSURFACEMEMBER,
    isAbstract: false,
    superType: e.IFCSTRUCTURALMEMBER,
    subTypes: [
       e.IFCSTRUCTURALSURFACEMEMBERVARYING,
    ],
  },
  {
    fields: {
    },
    typeId: e.IFCSTRUCTURALPLANARACTION,
    isAbstract: false,
    superType: e.IFCSTRUCTURALSURFACEACTION,
  },
  {
    fields: {
    },
    typeId: e.IFCSTRUCTURALPOINTREACTION,
    isAbstract: false,
    superType: e.IFCSTRUCTURALREACTION,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcStructuralSurfaceActivityTypeEnum,
      },
    },
    typeId: e.IFCSTRUCTURALSURFACEREACTION,
    isAbstract: false,
    superType: e.IFCSTRUCTURALREACTION,
  },
  {
    fields: {
    },
    typeId: e.IFCSTRUCTURALSURFACEMEMBERVARYING,
    isAbstract: false,
    superType: e.IFCSTRUCTURALSURFACEMEMBER,
  },
  {
    fields: {
    },
    typeId: e.IFCSTYLEDREPRESENTATION,
    isAbstract: false,
    superType: e.IFCSTYLEMODEL,
  },
  {
    fields: {
      SweptCurve: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCPROFILEDEF,
      },
      Position: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 2,
        type: e.IFCAXIS2PLACEMENT3D,
      },
    },
    typeId: e.IFCSWEPTSURFACE,
    isAbstract: true,
    superType: e.IFCSURFACE,
    subTypes: [
       e.IFCSURFACEOFLINEAREXTRUSION,
       e.IFCSURFACEOFREVOLUTION,
    ],
  },
  {
    fields: {
      Directrix: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCCURVE,
      },
      StartParam: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 4,
      },
      EndParam: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 5,
      },
      ReferenceSurface: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 6,
        type: e.IFCSURFACE,
      },
    },
    typeId: e.IFCSURFACECURVESWEPTAREASOLID,
    isAbstract: false,
    superType: e.IFCSWEPTAREASOLID,
  },
  {
    fields: {
      ExtrudedDirection: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCDIRECTION,
      },
      Depth: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 4,
      },
      ExtrusionAxis: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: true,
        type: e.IFCVECTOR,
      },
    },
    typeId: e.IFCSURFACEOFLINEAREXTRUSION,
    isAbstract: false,
    superType: e.IFCSWEPTSURFACE,
  },
  {
    fields: {
      AxisPosition: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCAXIS1PLACEMENT,
      },
      AxisLine: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: true,
        type: e.IFCLINE,
      },
    },
    typeId: e.IFCSURFACEOFREVOLUTION,
    isAbstract: false,
    superType: e.IFCSWEPTSURFACE,
  },
  {
    fields: {
      DiffuseColour: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 3,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOLOURRGB,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
        ],
      },
      TransmissionColour: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 4,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOLOURRGB,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
        ],
      },
      DiffuseTransmissionColour: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 5,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOLOURRGB,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
        ],
      },
      ReflectionColour: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 6,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOLOURRGB,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
        ],
      },
      SpecularColour: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 7,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOLOURRGB,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
        ],
      },
      SpecularHighlight: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 8,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSPECULAREXPONENT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSPECULARROUGHNESS,
          },
        ],
      },
      ReflectanceMethod: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 9,
        type: IfcReflectanceMethodEnum,
      },
    },
    typeId: e.IFCSURFACESTYLERENDERING,
    isAbstract: false,
    superType: e.IFCSURFACESTYLESHADING,
  },
  {
    fields: {
      FilletRadius: {
        kind: f.NUMBER,
        optional: true,
        derived: false,
        offset: 6,
      },
    },
    typeId: e.IFCSWEPTDISKSOLIDPOLYGONAL,
    isAbstract: false,
    superType: e.IFCSWEPTDISKSOLID,
  },
  {
    fields: {
      LongName: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 6,
      },
    },
    typeId: e.IFCZONE,
    isAbstract: false,
    superType: e.IFCSYSTEM,
  },
  {
    fields: {
      Name: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
      Rows: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 2,
        type: e.IFCTABLEROW,
      },
      Columns: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: true,
        derived: false,
        offset: 3,
        type: e.IFCTABLECOLUMN,
      },
      NumberOfCellsInRow: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
      NumberOfHeadings: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
      NumberOfDataRows: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCTABLE,
    isAbstract: false,
  },
  {
    fields: {
      Identifier: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 1,
      },
      Name: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 2,
      },
      Description: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 3,
      },
      Unit: {
        kind: f.SELECT,
        optional: true,
        derived: false,
        offset: 4,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDERIVEDUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNAMEDUNIT,
          },
        ],
      },
      ReferencePath: {
        kind: f.STEP_REFERENCE,
        optional: true,
        derived: false,
        offset: 5,
        type: e.IFCREFERENCE,
      },
    },
    typeId: e.IFCTABLECOLUMN,
    isAbstract: false,
  },
  {
    fields: {
      RowCells: {
        kind: f.SELECT,
        rank: 1,
        optional: true,
        derived: false,
        offset: 1,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCACCELERATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREADENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCURVATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCENERGYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCILLUMINANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTORQUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPLEXNUMBER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOUNTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNUMERICMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPARAMETERVALUE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBINARY,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATETIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDURATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIDENTIFIER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLABEL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLOGICAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCREAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEXT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMESTAMP,
          },
        ],
      },
      IsHeading: {
        kind: f.BOOLEAN,
        optional: true,
        derived: false,
        offset: 2,
      },
    },
    typeId: e.IFCTABLEROW,
    isAbstract: false,
  },
  {
    fields: {
      Recurrence: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 21,
        type: e.IFCRECURRENCEPATTERN,
      },
    },
    typeId: e.IFCTASKTIMERECURRING,
    isAbstract: false,
    superType: e.IFCTASKTIME,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcTaskTypeEnum,
      },
      WorkMethod: {
        kind: f.STRING,
        optional: true,
        derived: false,
        offset: 11,
      },
    },
    typeId: e.IFCTASKTYPE,
    isAbstract: false,
    superType: e.IFCTYPEPROCESS,
  },
  {
    fields: {
      Normals: {
        kind: f.NUMBER,
        rank: 2,
        optional: true,
        derived: false,
        offset: 2,
      },
      Closed: {
        kind: f.BOOLEAN,
        optional: true,
        derived: false,
        offset: 3,
      },
      CoordIndex: {
        kind: f.NUMBER,
        rank: 2,
        optional: false,
        derived: false,
        offset: 4,
      },
      PnIndex: {
        kind: f.NUMBER,
        rank: 1,
        optional: true,
        derived: false,
        offset: 5,
      },
      NumberOfTriangles: {
        kind: f.NUMBER,
        optional: false,
        derived: true,
      },
    },
    typeId: e.IFCTRIANGULATEDFACESET,
    isAbstract: false,
    superType: e.IFCTESSELLATEDFACESET,
  },
  {
    fields: {
      Extent: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 4,
        type: e.IFCPLANAREXTENT,
      },
      BoxAlignment: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 5,
      },
    },
    typeId: e.IFCTEXTLITERALWITHEXTENT,
    isAbstract: false,
    superType: e.IFCTEXTLITERAL,
  },
  {
    fields: {
      Mode: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 2,
      },
      Parameter: {
        kind: f.NUMBER,
        rank: 1,
        optional: true,
        derived: false,
        offset: 3,
      },
    },
    typeId: e.IFCTEXTURECOORDINATEGENERATOR,
    isAbstract: false,
    superType: e.IFCTEXTURECOORDINATE,
  },
  {
    fields: {
      Vertices: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 2,
        type: e.IFCTEXTUREVERTEX,
      },
      MappedTo: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 3,
        type: e.IFCFACE,
      },
    },
    typeId: e.IFCTEXTUREMAP,
    isAbstract: false,
    superType: e.IFCTEXTURECOORDINATE,
  },
  {
    fields: {
      StartTime: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 1,
      },
      EndTime: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 2,
      },
    },
    typeId: e.IFCTIMEPERIOD,
    isAbstract: false,
  },
  {
    fields: {
      ListValues: {
        kind: f.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCABSORBEDDOSEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCACCELERATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCANGULARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREADENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPOUNDPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCURVATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDOSEEQUIVALENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDYNAMICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCAPACITANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCHARGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCONDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICVOLTAGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCENERGYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCHEATINGVALUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCILLUMINANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINDUCTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGERCOUNTRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIONCONCENTRATIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCISOTHERMALMOISTURECAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCKINEMATICVISCOSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLINEARVELOCITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMAGNETICFLUXMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSDENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSPERLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFELASTICITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOISTUREDIFFUSIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOLECULARWEIGHTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMOMENTOFINERTIAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANARFORCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRADIOACTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALFREQUENCYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCROTATIONALSTIFFNESSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSECTIONALAREAINTEGRALMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSHEARMODULUSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERLEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPOWERMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSURELEVELMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOUNDPRESSUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSPECIFICHEATCAPACITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATUREGRADIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEMPERATURERATEOFCHANGEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALADMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALCONDUCTIVITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALRESISTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMALTRANSMITTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTORQUEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVAPORPERMEABILITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMETRICFLOWRATEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGCONSTANTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCWARPINGMOMENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAMOUNTOFSUBSTANCEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCAREAMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOMPLEXNUMBER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCONTEXTDEPENDENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCCOUNTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDESCRIPTIVEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCELECTRICCURRENTMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLUMINOUSINTENSITYMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMASSMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNONNEGATIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNORMALISEDRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNUMERICMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPARAMETERVALUE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVELENGTHMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEPLANEANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVERATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCRATIOMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCSOLIDANGLEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTHERMODYNAMICTEMPERATUREMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCVOLUMEMEASURE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBINARY,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCBOOLEAN,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATE,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDATETIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDURATION,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCIDENTIFIER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLABEL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCLOGICAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCPOSITIVEINTEGER,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCREAL,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTEXT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIME,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCTIMESTAMP,
          },
        ],
      },
    },
    typeId: e.IFCTIMESERIESVALUE,
    isAbstract: false,
  },
  {
    fields: {
    },
    typeId: e.IFCVERTEX,
    isAbstract: false,
    superType: e.IFCTOPOLOGICALREPRESENTATIONITEM,
    subTypes: [
       e.IFCVERTEXPOINT,
    ],
  },
  {
    fields: {
      ConstructionType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 9,
        type: IfcWindowStyleConstructionEnum,
      },
      OperationType: {
        kind: f.ENUM,
        optional: false,
        derived: false,
        offset: 10,
        type: IfcWindowStyleOperationEnum,
      },
      ParameterTakesPrecedence: {
        kind: f.BOOLEAN,
        optional: false,
        derived: false,
        offset: 11,
      },
      Sizeable: {
        kind: f.BOOLEAN,
        optional: false,
        derived: false,
        offset: 12,
      },
    },
    typeId: e.IFCWINDOWSTYLE,
    isAbstract: false,
    superType: e.IFCTYPEPRODUCT,
  },
  {
    fields: {
      Units: {
        kind: f.SELECT,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        options: [
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCDERIVEDUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCMONETARYUNIT,
          },
          {
            kind: f.STEP_REFERENCE,
            optional: false,
            derived: false,
            type: e.IFCNAMEDUNIT,
          },
        ],
      },
    },
    typeId: e.IFCUNITASSIGNMENT,
    isAbstract: false,
  },
  {
    fields: {
      VertexGeometry: {
        kind: f.STEP_REFERENCE,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCPOINT,
      },
    },
    typeId: e.IFCVERTEXPOINT,
    isAbstract: false,
    superType: e.IFCVERTEX,
  },
  {
    fields: {
      IntersectingAxes: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 1,
        type: e.IFCGRIDAXIS,
      },
      OffsetDistances: {
        kind: f.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
        offset: 2,
      },
    },
    typeId: e.IFCVIRTUALGRIDINTERSECTION,
    isAbstract: false,
  },
  {
    fields: {
    },
    typeId: e.IFCWALLELEMENTEDCASE,
    isAbstract: false,
    superType: e.IFCWALL,
  },
  {
    fields: {
    },
    typeId: e.IFCWALLSTANDARDCASE,
    isAbstract: false,
    superType: e.IFCWALL,
  },
  {
    fields: {
    },
    typeId: e.IFCWINDOWSTANDARDCASE,
    isAbstract: false,
    superType: e.IFCWINDOW,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 14,
        type: IfcWorkPlanTypeEnum,
      },
    },
    typeId: e.IFCWORKPLAN,
    isAbstract: false,
    superType: e.IFCWORKCONTROL,
  },
  {
    fields: {
      PredefinedType: {
        kind: f.ENUM,
        optional: true,
        derived: false,
        offset: 14,
        type: IfcWorkScheduleTypeEnum,
      },
    },
    typeId: e.IFCWORKSCHEDULE,
    isAbstract: false,
    superType: e.IFCWORKCONTROL,
  },
  {
    fields: {
      Value: {
        kind: f.BOOLEAN,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCSTRIPPEDOPTIONAL,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCABSORBEDDOSEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCACCELERATIONMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCAMOUNTOFSUBSTANCEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCANGULARVELOCITYMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCARCINDEX,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCAREADENSITYMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCAREAMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.BINARY_DATA,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCBINARY,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.BOOLEAN,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCBOOLEAN,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCBOXALIGNMENT,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCCARDINALPOINTREFERENCE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCCOMPLEXNUMBER,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCCOMPOUNDPLANEANGLEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCCONTEXTDEPENDENTMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCCOUNTMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCCURVATUREMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCDATE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCDATETIME,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCDAYINMONTHNUMBER,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCDAYINWEEKNUMBER,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCDESCRIPTIVEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCDIMENSIONCOUNT,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCDOSEEQUIVALENTMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCDURATION,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCDYNAMICVISCOSITYMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCELECTRICCAPACITANCEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCELECTRICCHARGEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCELECTRICCONDUCTANCEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCELECTRICCURRENTMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCELECTRICRESISTANCEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCELECTRICVOLTAGEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCENERGYMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCFONTSTYLE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCFONTVARIANT,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCFONTWEIGHT,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCFORCEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCFREQUENCYMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCGLOBALLYUNIQUEID,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCHEATFLUXDENSITYMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCHEATINGVALUEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCIDENTIFIER,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCILLUMINANCEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCINDUCTANCEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCINTEGER,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCINTEGERCOUNTRATEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCIONCONCENTRATIONMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCISOTHERMALMOISTURECAPACITYMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCKINEMATICVISCOSITYMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCLABEL,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCLANGUAGEID,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCLENGTHMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        rank: 1,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCLINEINDEX,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCLINEARFORCEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCLINEARMOMENTMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCLINEARSTIFFNESSMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCLINEARVELOCITYMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.BOOLEAN,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCLOGICAL,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCLUMINOUSFLUXMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCLUMINOUSINTENSITYMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCMAGNETICFLUXDENSITYMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCMAGNETICFLUXMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCMASSDENSITYMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCMASSFLOWRATEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCMASSMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCMASSPERLENGTHMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCMODULUSOFELASTICITYMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCMODULUSOFSUBGRADEREACTIONMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCMOISTUREDIFFUSIVITYMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCMOLECULARWEIGHTMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCMOMENTOFINERTIAMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCMONETARYMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCMONTHINYEARNUMBER,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCNONNEGATIVELENGTHMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCNORMALISEDRATIOMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCNUMERICMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCPHMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCPARAMETERVALUE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCPLANARFORCEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCPLANEANGLEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCPOSITIVEINTEGER,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCPOSITIVELENGTHMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCPOSITIVEPLANEANGLEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCPOSITIVERATIOMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCPOWERMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCPRESENTABLETEXT,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCPRESSUREMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.STEP_REFERENCE,
        rank: 1,
        optional: false,
        derived: false,
        offset: 0,
        type: e.IFCPROPERTYSETDEFINITION,
      },
    },
    typeId: e.IFCPROPERTYSETDEFINITIONSET,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCRADIOACTIVITYMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCRATIOMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCREAL,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCROTATIONALFREQUENCYMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCROTATIONALMASSMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCROTATIONALSTIFFNESSMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCSECTIONMODULUSMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCSECTIONALAREAINTEGRALMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCSHEARMODULUSMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCSOLIDANGLEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCSOUNDPOWERLEVELMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCSOUNDPOWERMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCSOUNDPRESSURELEVELMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCSOUNDPRESSUREMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCSPECIFICHEATCAPACITYMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCSPECULAREXPONENT,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCSPECULARROUGHNESS,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCTEMPERATUREGRADIENTMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCTEMPERATURERATEOFCHANGEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCTEXT,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCTEXTALIGNMENT,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCTEXTDECORATION,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCTEXTFONTNAME,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCTEXTTRANSFORMATION,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCTHERMALADMITTANCEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCTHERMALCONDUCTIVITYMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCTHERMALRESISTANCEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCTHERMALTRANSMITTANCEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCTHERMODYNAMICTEMPERATUREMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCTIME,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCTIMEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCTIMESTAMP,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCTORQUEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.STRING,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCURIREFERENCE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCVAPORPERMEABILITYMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCVOLUMEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCVOLUMETRICFLOWRATEMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCWARPINGCONSTANTMEASURE,
    isAbstract: false,
  },
  {
    fields: {
      Value: {
        kind: f.NUMBER,
        optional: false,
        derived: false,
        offset: 0,
      },
    },
    typeId: e.IFCWARPINGMOMENTMEASURE,
    isAbstract: false,
  },
]
let parser =
  new StepParser< EntityTypesIfc >( EntityTypesIfcSearch )

let SchemaIfc =
  new StepEntitySchema< EntityTypesIfc >( constructors, parser, queries, descriptions )

export default SchemaIfc

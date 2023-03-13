import EntityTypesIfc from './entity_types_ifc.bldrs';
import EntityTypesIfcSearch from './entity_types_search.bldrs';
import StepEntityConstructor from '../../core/step_entity_constructor';
import StepEntityBase from '../../core/step_entity_base';
import StepEntitySchema from '../../core/step_entity_schema';
import StepParser from '../../../dependencies/conway-ds/src/parsing/step/step_parser';
import { Ifc2DCompositeCurve } from './index';
import { IfcCompositeCurve } from './index';
import { IfcActionRequest } from './index';
import { IfcActor } from './index';
import { IfcOccupant } from './index';
import { IfcActorRole } from './index';
import { IfcActuatorType } from './index';
import { IfcPostalAddress } from './index';
import { IfcTelecomAddress } from './index';
import { IfcAirTerminalBoxType } from './index';
import { IfcAirTerminalType } from './index';
import { IfcAirToAirHeatRecoveryType } from './index';
import { IfcAlarmType } from './index';
import { IfcAngularDimension } from './index';
import { IfcDimensionCurveDirectedCallout } from './index';
import { IfcAnnotation } from './index';
import { IfcAnnotationCurveOccurrence } from './index';
import { IfcDimensionCurve } from './index';
import { IfcProjectionCurve } from './index';
import { IfcAnnotationFillArea } from './index';
import { IfcAnnotationFillAreaOccurrence } from './index';
import { IfcAnnotationSurfaceOccurrence } from './index';
import { IfcAnnotationSymbolOccurrence } from './index';
import { IfcAnnotationTextOccurrence } from './index';
import { IfcStyledItem } from './index';
import { IfcAnnotationSurface } from './index';
import { IfcTerminatorSymbol } from './index';
import { IfcApplication } from './index';
import { IfcCostValue } from './index';
import { IfcEnvironmentalImpactValue } from './index';
import { IfcAppliedValueRelationship } from './index';
import { IfcApproval } from './index';
import { IfcApprovalActorRelationship } from './index';
import { IfcApprovalPropertyRelationship } from './index';
import { IfcApprovalRelationship } from './index';
import { IfcArbitraryClosedProfileDef } from './index';
import { IfcArbitraryProfileDefWithVoids } from './index';
import { IfcArbitraryOpenProfileDef } from './index';
import { IfcCenterLineProfileDef } from './index';
import { IfcAsset } from './index';
import { IfcGroup } from './index';
import { IfcAsymmetricIShapeProfileDef } from './index';
import { IfcIShapeProfileDef } from './index';
import { IfcAxis1Placement } from './index';
import { IfcAxis2Placement2D } from './index';
import { IfcAxis2Placement3D } from './index';
import { IfcBezierCurve } from './index';
import { IfcBeam } from './index';
import { IfcBeamType } from './index';
import { IfcRationalBezierCurve } from './index';
import { IfcBlobTexture } from './index';
import { IfcBlock } from './index';
import { IfcBoilerType } from './index';
import { IfcBooleanClippingResult } from './index';
import { IfcBooleanResult } from './index';
import { IfcBoundaryEdgeCondition } from './index';
import { IfcBoundaryFaceCondition } from './index';
import { IfcBoundaryNodeCondition } from './index';
import { IfcBoundaryNodeConditionWarping } from './index';
import { IfcPolyline } from './index';
import { IfcTrimmedCurve } from './index';
import { IfcBoundedSurface } from './index';
import { IfcCurveBoundedPlane } from './index';
import { IfcRectangularTrimmedSurface } from './index';
import { IfcBoundingBox } from './index';
import { IfcBoxedHalfSpace } from './index';
import { IfcHalfSpaceSolid } from './index';
import { IfcBuilding } from './index';
import { IfcBuildingElementProxy } from './index';
import { IfcColumn } from './index';
import { IfcCovering } from './index';
import { IfcCurtainWall } from './index';
import { IfcDoor } from './index';
import { IfcFooting } from './index';
import { IfcMember } from './index';
import { IfcPile } from './index';
import { IfcPlate } from './index';
import { IfcRailing } from './index';
import { IfcRamp } from './index';
import { IfcRampFlight } from './index';
import { IfcRoof } from './index';
import { IfcSlab } from './index';
import { IfcStair } from './index';
import { IfcStairFlight } from './index';
import { IfcWall } from './index';
import { IfcWindow } from './index';
import { IfcBuildingElementPart } from './index';
import { IfcBuildingElementProxyType } from './index';
import { IfcColumnType } from './index';
import { IfcCoveringType } from './index';
import { IfcCurtainWallType } from './index';
import { IfcMemberType } from './index';
import { IfcPlateType } from './index';
import { IfcRailingType } from './index';
import { IfcRampFlightType } from './index';
import { IfcSlabType } from './index';
import { IfcStairFlightType } from './index';
import { IfcWallType } from './index';
import { IfcBuildingStorey } from './index';
import { IfcCShapeProfileDef } from './index';
import { IfcCableCarrierFittingType } from './index';
import { IfcCableCarrierSegmentType } from './index';
import { IfcCableSegmentType } from './index';
import { IfcCalendarDate } from './index';
import { IfcCartesianPoint } from './index';
import { IfcCartesianTransformationOperator2D } from './index';
import { IfcCartesianTransformationOperator3D } from './index';
import { IfcCartesianTransformationOperator2DnonUniform } from './index';
import { IfcCartesianTransformationOperator3DnonUniform } from './index';
import { IfcChamferEdgeFeature } from './index';
import { IfcChillerType } from './index';
import { IfcCircle } from './index';
import { IfcCircleHollowProfileDef } from './index';
import { IfcCircleProfileDef } from './index';
import { IfcClassification } from './index';
import { IfcClassificationItem } from './index';
import { IfcClassificationItemRelationship } from './index';
import { IfcClassificationNotation } from './index';
import { IfcClassificationNotationFacet } from './index';
import { IfcClassificationReference } from './index';
import { IfcClosedShell } from './index';
import { IfcConnectedFaceSet } from './index';
import { IfcCoilType } from './index';
import { IfcColourRgb } from './index';
import { IfcComplexProperty } from './index';
import { IfcCompositeCurveSegment } from './index';
import { IfcCompositeProfileDef } from './index';
import { IfcCompressorType } from './index';
import { IfcCondenserType } from './index';
import { IfcCondition } from './index';
import { IfcConditionCriterion } from './index';
import { IfcEllipse } from './index';
import { IfcOpenShell } from './index';
import { IfcConnectionCurveGeometry } from './index';
import { IfcConnectionPointGeometry } from './index';
import { IfcConnectionPortGeometry } from './index';
import { IfcConnectionSurfaceGeometry } from './index';
import { IfcConnectionPointEccentricity } from './index';
import { IfcMetric } from './index';
import { IfcObjective } from './index';
import { IfcConstraintAggregationRelationship } from './index';
import { IfcConstraintClassificationRelationship } from './index';
import { IfcConstraintRelationship } from './index';
import { IfcConstructionEquipmentResource } from './index';
import { IfcConstructionMaterialResource } from './index';
import { IfcConstructionProductResource } from './index';
import { IfcCrewResource } from './index';
import { IfcLaborResource } from './index';
import { IfcSubContractResource } from './index';
import { IfcContextDependentUnit } from './index';
import { IfcCostItem } from './index';
import { IfcCostSchedule } from './index';
import { IfcEquipmentStandard } from './index';
import { IfcFurnitureStandard } from './index';
import { IfcPerformanceHistory } from './index';
import { IfcPermit } from './index';
import { IfcProjectOrder } from './index';
import { IfcProjectOrderRecord } from './index';
import { IfcScheduleTimeControl } from './index';
import { IfcServiceLife } from './index';
import { IfcSpaceProgram } from './index';
import { IfcTimeSeriesSchedule } from './index';
import { IfcControllerType } from './index';
import { IfcConversionBasedUnit } from './index';
import { IfcCooledBeamType } from './index';
import { IfcCoolingTowerType } from './index';
import { IfcCoordinatedUniversalTimeOffset } from './index';
import { IfcCraneRailAShapeProfileDef } from './index';
import { IfcCraneRailFShapeProfileDef } from './index';
import { IfcRectangularPyramid } from './index';
import { IfcRightCircularCone } from './index';
import { IfcRightCircularCylinder } from './index';
import { IfcSphere } from './index';
import { IfcCsgSolid } from './index';
import { IfcCurrencyRelationship } from './index';
import { IfcLine } from './index';
import { IfcOffsetCurve2D } from './index';
import { IfcOffsetCurve3D } from './index';
import { IfcCurveStyle } from './index';
import { IfcCurveStyleFont } from './index';
import { IfcCurveStyleFontAndScaling } from './index';
import { IfcCurveStyleFontPattern } from './index';
import { IfcDamperType } from './index';
import { IfcDateAndTime } from './index';
import { IfcDefinedSymbol } from './index';
import { IfcDerivedProfileDef } from './index';
import { IfcDerivedUnit } from './index';
import { IfcDerivedUnitElement } from './index';
import { IfcDiameterDimension } from './index';
import { IfcDimensionCalloutRelationship } from './index';
import { IfcDraughtingCalloutRelationship } from './index';
import { IfcLinearDimension } from './index';
import { IfcRadiusDimension } from './index';
import { IfcDraughtingCallout } from './index';
import { IfcDimensionCurveTerminator } from './index';
import { IfcDimensionPair } from './index';
import { IfcDimensionalExponents } from './index';
import { IfcDirection } from './index';
import { IfcDiscreteAccessory } from './index';
import { IfcDiscreteAccessoryType } from './index';
import { IfcVibrationIsolatorType } from './index';
import { IfcDistributionChamberElement } from './index';
import { IfcDistributionFlowElement } from './index';
import { IfcDistributionChamberElementType } from './index';
import { IfcDistributionControlElement } from './index';
import { IfcDistributionElement } from './index';
import { IfcFlowInstrumentType } from './index';
import { IfcSensorType } from './index';
import { IfcDistributionElementType } from './index';
import { IfcEnergyConversionDevice } from './index';
import { IfcFlowController } from './index';
import { IfcFlowFitting } from './index';
import { IfcFlowMovingDevice } from './index';
import { IfcFlowSegment } from './index';
import { IfcFlowStorageDevice } from './index';
import { IfcFlowTerminal } from './index';
import { IfcFlowTreatmentDevice } from './index';
import { IfcDistributionPort } from './index';
import { IfcDocumentElectronicFormat } from './index';
import { IfcDocumentInformation } from './index';
import { IfcDocumentInformationRelationship } from './index';
import { IfcDocumentReference } from './index';
import { IfcDoorLiningProperties } from './index';
import { IfcDoorPanelProperties } from './index';
import { IfcDoorStyle } from './index';
import { IfcTypeProduct } from './index';
import { IfcStructuredDimensionCallout } from './index';
import { IfcDraughtingPreDefinedColour } from './index';
import { IfcDraughtingPreDefinedCurveFont } from './index';
import { IfcDraughtingPreDefinedTextFont } from './index';
import { IfcDuctFittingType } from './index';
import { IfcDuctSegmentType } from './index';
import { IfcDuctSilencerType } from './index';
import { IfcEdge } from './index';
import { IfcEdgeCurve } from './index';
import { IfcOrientedEdge } from './index';
import { IfcSubedge } from './index';
import { IfcRoundedEdgeFeature } from './index';
import { IfcEdgeLoop } from './index';
import { IfcLoop } from './index';
import { IfcElectricApplianceType } from './index';
import { IfcElectricDistributionPoint } from './index';
import { IfcElectricFlowStorageDeviceType } from './index';
import { IfcElectricGeneratorType } from './index';
import { IfcElectricHeaterType } from './index';
import { IfcElectricMotorType } from './index';
import { IfcElectricTimeControlType } from './index';
import { IfcElectricalBaseProperties } from './index';
import { IfcEnergyProperties } from './index';
import { IfcElectricalCircuit } from './index';
import { IfcSystem } from './index';
import { IfcElectricalElement } from './index';
import { IfcElementAssembly } from './index';
import { IfcEquipmentElement } from './index';
import { IfcFurnishingElement } from './index';
import { IfcTransportElement } from './index';
import { IfcVirtualElement } from './index';
import { IfcFastener } from './index';
import { IfcFastenerType } from './index';
import { IfcElementQuantity } from './index';
import { IfcFurnishingElementType } from './index';
import { IfcTransportElementType } from './index';
import { IfcPlane } from './index';
import { IfcEllipseProfileDef } from './index';
import { IfcEvaporativeCoolerType } from './index';
import { IfcEvaporatorType } from './index';
import { IfcHeatExchangerType } from './index';
import { IfcHumidifierType } from './index';
import { IfcMotorConnectionType } from './index';
import { IfcSpaceHeaterType } from './index';
import { IfcTransformerType } from './index';
import { IfcTubeBundleType } from './index';
import { IfcUnitaryEquipmentType } from './index';
import { IfcExtendedMaterialProperties } from './index';
import { IfcExternallyDefinedHatchStyle } from './index';
import { IfcExternallyDefinedSurfaceStyle } from './index';
import { IfcExternallyDefinedSymbol } from './index';
import { IfcExternallyDefinedTextFont } from './index';
import { IfcLibraryReference } from './index';
import { IfcExtrudedAreaSolid } from './index';
import { IfcFace } from './index';
import { IfcFaceSurface } from './index';
import { IfcFaceBasedSurfaceModel } from './index';
import { IfcFaceBound } from './index';
import { IfcFaceOuterBound } from './index';
import { IfcFacetedBrep } from './index';
import { IfcFacetedBrepWithVoids } from './index';
import { IfcFailureConnectionCondition } from './index';
import { IfcFanType } from './index';
import { IfcMechanicalFastener } from './index';
import { IfcMechanicalFastenerType } from './index';
import { IfcProjectionElement } from './index';
import { IfcOpeningElement } from './index';
import { IfcFillAreaStyle } from './index';
import { IfcFillAreaStyleHatching } from './index';
import { IfcFillAreaStyleTileSymbolWithStyle } from './index';
import { IfcFillAreaStyleTiles } from './index';
import { IfcFilterType } from './index';
import { IfcFireSuppressionTerminalType } from './index';
import { IfcFlowMeterType } from './index';
import { IfcProtectiveDeviceType } from './index';
import { IfcSwitchingDeviceType } from './index';
import { IfcValveType } from './index';
import { IfcJunctionBoxType } from './index';
import { IfcPipeFittingType } from './index';
import { IfcPumpType } from './index';
import { IfcPipeSegmentType } from './index';
import { IfcTankType } from './index';
import { IfcGasTerminalType } from './index';
import { IfcLampType } from './index';
import { IfcLightFixtureType } from './index';
import { IfcOutletType } from './index';
import { IfcSanitaryTerminalType } from './index';
import { IfcStackTerminalType } from './index';
import { IfcWasteTerminalType } from './index';
import { IfcFluidFlowProperties } from './index';
import { IfcFuelProperties } from './index';
import { IfcFurnitureType } from './index';
import { IfcSystemFurnitureElementType } from './index';
import { IfcGeneralMaterialProperties } from './index';
import { IfcGeneralProfileProperties } from './index';
import { IfcStructuralProfileProperties } from './index';
import { IfcGeometricCurveSet } from './index';
import { IfcGeometricSet } from './index';
import { IfcGeometricRepresentationContext } from './index';
import { IfcGeometricRepresentationSubContext } from './index';
import { IfcRepresentationContext } from './index';
import { IfcOneDirectionRepeatFactor } from './index';
import { IfcPlanarExtent } from './index';
import { IfcSectionedSpine } from './index';
import { IfcShellBasedSurfaceModel } from './index';
import { IfcTextLiteral } from './index';
import { IfcVector } from './index';
import { IfcGrid } from './index';
import { IfcGridAxis } from './index';
import { IfcGridPlacement } from './index';
import { IfcInventory } from './index';
import { IfcStructuralLoadGroup } from './index';
import { IfcStructuralResultGroup } from './index';
import { IfcZone } from './index';
import { IfcPolygonalBoundedHalfSpace } from './index';
import { IfcHygroscopicMaterialProperties } from './index';
import { IfcImageTexture } from './index';
import { IfcIrregularTimeSeries } from './index';
import { IfcIrregularTimeSeriesValue } from './index';
import { IfcLShapeProfileDef } from './index';
import { IfcLibraryInformation } from './index';
import { IfcLightDistributionData } from './index';
import { IfcLightIntensityDistribution } from './index';
import { IfcLightSourceAmbient } from './index';
import { IfcLightSourceDirectional } from './index';
import { IfcLightSourceGoniometric } from './index';
import { IfcLightSourcePositional } from './index';
import { IfcLightSourceSpot } from './index';
import { IfcLocalPlacement } from './index';
import { IfcLocalTime } from './index';
import { IfcPolyLoop } from './index';
import { IfcVertexLoop } from './index';
import { IfcMappedItem } from './index';
import { IfcMaterial } from './index';
import { IfcMaterialClassificationRelationship } from './index';
import { IfcMaterialDefinitionRepresentation } from './index';
import { IfcProductRepresentation } from './index';
import { IfcMaterialLayer } from './index';
import { IfcMaterialLayerSet } from './index';
import { IfcMaterialLayerSetUsage } from './index';
import { IfcMaterialList } from './index';
import { IfcMechanicalMaterialProperties } from './index';
import { IfcOpticalMaterialProperties } from './index';
import { IfcProductsOfCombustionProperties } from './index';
import { IfcThermalMaterialProperties } from './index';
import { IfcWaterProperties } from './index';
import { IfcMeasureWithUnit } from './index';
import { IfcMechanicalConcreteMaterialProperties } from './index';
import { IfcMechanicalSteelMaterialProperties } from './index';
import { IfcMonetaryUnit } from './index';
import { IfcMove } from './index';
import { IfcTask } from './index';
import { IfcSIUnit } from './index';
import { IfcProject } from './index';
import { IfcTypeObject } from './index';
import { IfcTwoDirectionRepeatFactor } from './index';
import { IfcOrderAction } from './index';
import { IfcOrganization } from './index';
import { IfcOrganizationRelationship } from './index';
import { IfcOwnerHistory } from './index';
import { IfcRectangleProfileDef } from './index';
import { IfcTShapeProfileDef } from './index';
import { IfcTrapeziumProfileDef } from './index';
import { IfcUShapeProfileDef } from './index';
import { IfcZShapeProfileDef } from './index';
import { IfcPath } from './index';
import { IfcPermeableCoveringProperties } from './index';
import { IfcPerson } from './index';
import { IfcPersonAndOrganization } from './index';
import { IfcPhysicalComplexQuantity } from './index';
import { IfcQuantityArea } from './index';
import { IfcQuantityCount } from './index';
import { IfcQuantityLength } from './index';
import { IfcQuantityTime } from './index';
import { IfcQuantityVolume } from './index';
import { IfcQuantityWeight } from './index';
import { IfcPixelTexture } from './index';
import { IfcPlanarBox } from './index';
import { IfcPointOnCurve } from './index';
import { IfcPointOnSurface } from './index';
import { IfcPreDefinedDimensionSymbol } from './index';
import { IfcPreDefinedPointMarkerSymbol } from './index';
import { IfcPreDefinedTerminatorSymbol } from './index';
import { IfcTextStyleFontModel } from './index';
import { IfcPresentationLayerAssignment } from './index';
import { IfcPresentationLayerWithStyle } from './index';
import { IfcSurfaceStyle } from './index';
import { IfcSymbolStyle } from './index';
import { IfcTextStyle } from './index';
import { IfcPresentationStyleAssignment } from './index';
import { IfcProcedure } from './index';
import { IfcProxy } from './index';
import { IfcProductDefinitionShape } from './index';
import { IfcRibPlateProfileProperties } from './index';
import { IfcPropertyBoundedValue } from './index';
import { IfcPropertyConstraintRelationship } from './index';
import { IfcPropertyDependencyRelationship } from './index';
import { IfcPropertyEnumeratedValue } from './index';
import { IfcPropertyEnumeration } from './index';
import { IfcPropertyListValue } from './index';
import { IfcPropertyReferenceValue } from './index';
import { IfcPropertySet } from './index';
import { IfcReinforcementDefinitionProperties } from './index';
import { IfcServiceLifeFactor } from './index';
import { IfcSoundProperties } from './index';
import { IfcSoundValue } from './index';
import { IfcSpaceThermalLoadProperties } from './index';
import { IfcWindowLiningProperties } from './index';
import { IfcWindowPanelProperties } from './index';
import { IfcPropertySingleValue } from './index';
import { IfcPropertyTableValue } from './index';
import { IfcRectangleHollowProfileDef } from './index';
import { IfcRoundedRectangleProfileDef } from './index';
import { IfcReferencesValueDocument } from './index';
import { IfcRegularTimeSeries } from './index';
import { IfcReinforcementBarProperties } from './index';
import { IfcReinforcingBar } from './index';
import { IfcReinforcingMesh } from './index';
import { IfcTendon } from './index';
import { IfcTendonAnchor } from './index';
import { IfcRelAggregates } from './index';
import { IfcRelAssignsToActor } from './index';
import { IfcRelAssignsToControl } from './index';
import { IfcRelAssignsToGroup } from './index';
import { IfcRelAssignsToProcess } from './index';
import { IfcRelAssignsToProduct } from './index';
import { IfcRelAssignsToResource } from './index';
import { IfcRelAssignsTasks } from './index';
import { IfcRelOccupiesSpaces } from './index';
import { IfcRelAssignsToProjectOrder } from './index';
import { IfcRelSchedulesCostItems } from './index';
import { IfcRelAssociates } from './index';
import { IfcRelAssociatesAppliedValue } from './index';
import { IfcRelAssociatesApproval } from './index';
import { IfcRelAssociatesClassification } from './index';
import { IfcRelAssociatesConstraint } from './index';
import { IfcRelAssociatesDocument } from './index';
import { IfcRelAssociatesLibrary } from './index';
import { IfcRelAssociatesMaterial } from './index';
import { IfcRelAssociatesProfileProperties } from './index';
import { IfcRelConnectsElements } from './index';
import { IfcRelConnectsPortToElement } from './index';
import { IfcRelConnectsPorts } from './index';
import { IfcRelConnectsStructuralActivity } from './index';
import { IfcRelConnectsStructuralElement } from './index';
import { IfcRelConnectsStructuralMember } from './index';
import { IfcRelContainedInSpatialStructure } from './index';
import { IfcRelCoversBldgElements } from './index';
import { IfcRelCoversSpaces } from './index';
import { IfcRelFillsElement } from './index';
import { IfcRelFlowControlElements } from './index';
import { IfcRelInteractionRequirements } from './index';
import { IfcRelProjectsElement } from './index';
import { IfcRelReferencedInSpatialStructure } from './index';
import { IfcRelSequence } from './index';
import { IfcRelServicesBuildings } from './index';
import { IfcRelSpaceBoundary } from './index';
import { IfcRelVoidsElement } from './index';
import { IfcRelConnectsPathElements } from './index';
import { IfcRelConnectsWithRealizingElements } from './index';
import { IfcRelConnectsWithEccentricity } from './index';
import { IfcRelNests } from './index';
import { IfcRelDefinesByProperties } from './index';
import { IfcRelDefinesByType } from './index';
import { IfcRelOverridesProperties } from './index';
import { IfcRelaxation } from './index';
import { IfcRepresentation } from './index';
import { IfcRepresentationMap } from './index';
import { IfcRevolvedAreaSolid } from './index';
import { IfcSectionProperties } from './index';
import { IfcSectionReinforcementProperties } from './index';
import { IfcShapeAspect } from './index';
import { IfcShapeRepresentation } from './index';
import { IfcTopologyRepresentation } from './index';
import { IfcSite } from './index';
import { IfcSlippageConnectionCondition } from './index';
import { IfcSweptDiskSolid } from './index';
import { IfcSpace } from './index';
import { IfcSpaceType } from './index';
import { IfcStructuralLinearAction } from './index';
import { IfcStructuralPlanarAction } from './index';
import { IfcStructuralPointAction } from './index';
import { IfcStructuralAnalysisModel } from './index';
import { IfcStructuralCurveConnection } from './index';
import { IfcStructuralPointConnection } from './index';
import { IfcStructuralSurfaceConnection } from './index';
import { IfcStructuralCurveMember } from './index';
import { IfcStructuralCurveMemberVarying } from './index';
import { IfcStructuralLinearActionVarying } from './index';
import { IfcStructuralLoadLinearForce } from './index';
import { IfcStructuralLoadPlanarForce } from './index';
import { IfcStructuralLoadSingleDisplacement } from './index';
import { IfcStructuralLoadSingleDisplacementDistortion } from './index';
import { IfcStructuralLoadSingleForce } from './index';
import { IfcStructuralLoadSingleForceWarping } from './index';
import { IfcStructuralLoadTemperature } from './index';
import { IfcStructuralSurfaceMember } from './index';
import { IfcStructuralPlanarActionVarying } from './index';
import { IfcStructuralPointReaction } from './index';
import { IfcStructuralSteelProfileProperties } from './index';
import { IfcStructuralSurfaceMemberVarying } from './index';
import { IfcStyledRepresentation } from './index';
import { IfcSurfaceCurveSweptAreaSolid } from './index';
import { IfcSurfaceOfLinearExtrusion } from './index';
import { IfcSurfaceOfRevolution } from './index';
import { IfcSurfaceStyleLighting } from './index';
import { IfcSurfaceStyleRefraction } from './index';
import { IfcSurfaceStyleRendering } from './index';
import { IfcSurfaceStyleShading } from './index';
import { IfcSurfaceStyleWithTextures } from './index';
import { IfcTable } from './index';
import { IfcTableRow } from './index';
import { IfcTextLiteralWithExtent } from './index';
import { IfcTextStyleForDefinedFont } from './index';
import { IfcTextStyleTextModel } from './index';
import { IfcTextStyleWithBoxCharacteristics } from './index';
import { IfcTextureCoordinateGenerator } from './index';
import { IfcTextureMap } from './index';
import { IfcTextureVertex } from './index';
import { IfcTimeSeriesReferenceRelationship } from './index';
import { IfcTimeSeriesValue } from './index';
import { IfcVertex } from './index';
import { IfcWindowStyle } from './index';
import { IfcUnitAssignment } from './index';
import { IfcVertexPoint } from './index';
import { IfcVertexBasedTextureMap } from './index';
import { IfcVirtualGridIntersection } from './index';
import { IfcWallStandardCase } from './index';
import { IfcWorkPlan } from './index';
import { IfcWorkSchedule } from './index';
let constructors : ( StepEntityConstructor< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > | undefined )[]  = [
    Ifc2DCompositeCurve,
    IfcCompositeCurve,
    IfcActionRequest,
    void 0,
    IfcActor,
    IfcOccupant,
    void 0,
    IfcActorRole,
    IfcActuatorType,
    void 0,
    void 0,
    IfcPostalAddress,
    IfcTelecomAddress,
    IfcAirTerminalBoxType,
    void 0,
    IfcAirTerminalType,
    void 0,
    IfcAirToAirHeatRecoveryType,
    void 0,
    IfcAlarmType,
    IfcAngularDimension,
    IfcDimensionCurveDirectedCallout,
    IfcAnnotation,
    void 0,
    IfcAnnotationCurveOccurrence,
    IfcDimensionCurve,
    IfcProjectionCurve,
    void 0,
    IfcAnnotationFillArea,
    void 0,
    IfcAnnotationFillAreaOccurrence,
    IfcAnnotationSurfaceOccurrence,
    IfcAnnotationSymbolOccurrence,
    IfcAnnotationTextOccurrence,
    IfcStyledItem,
    IfcAnnotationSurface,
    IfcTerminatorSymbol,
    IfcApplication,
    void 0,
    IfcCostValue,
    IfcEnvironmentalImpactValue,
    IfcAppliedValueRelationship,
    IfcApproval,
    IfcApprovalActorRelationship,
    IfcApprovalPropertyRelationship,
    IfcApprovalRelationship,
    IfcArbitraryClosedProfileDef,
    IfcArbitraryProfileDefWithVoids,
    void 0,
    IfcArbitraryOpenProfileDef,
    IfcCenterLineProfileDef,
    IfcAsset,
    IfcGroup,
    IfcAsymmetricIShapeProfileDef,
    IfcIShapeProfileDef,
    IfcAxis1Placement,
    void 0,
    IfcAxis2Placement2D,
    IfcAxis2Placement3D,
    void 0,
    IfcBezierCurve,
    void 0,
    IfcBeam,
    void 0,
    IfcBeamType,
    void 0,
    IfcRationalBezierCurve,
    IfcBlobTexture,
    void 0,
    IfcBlock,
    void 0,
    IfcBoilerType,
    IfcBooleanClippingResult,
    IfcBooleanResult,
    void 0,
    IfcBoundaryEdgeCondition,
    IfcBoundaryFaceCondition,
    IfcBoundaryNodeCondition,
    IfcBoundaryNodeConditionWarping,
    IfcPolyline,
    IfcTrimmedCurve,
    void 0,
    IfcBoundedSurface,
    IfcCurveBoundedPlane,
    IfcRectangularTrimmedSurface,
    void 0,
    IfcBoundingBox,
    IfcBoxedHalfSpace,
    IfcHalfSpaceSolid,
    IfcBuilding,
    void 0,
    void 0,
    IfcBuildingElementProxy,
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
    IfcSlab,
    IfcStair,
    IfcStairFlight,
    IfcWall,
    IfcWindow,
    void 0,
    IfcBuildingElementPart,
    void 0,
    IfcBuildingElementProxyType,
    IfcColumnType,
    IfcCoveringType,
    IfcCurtainWallType,
    IfcMemberType,
    IfcPlateType,
    IfcRailingType,
    IfcRampFlightType,
    IfcSlabType,
    IfcStairFlightType,
    IfcWallType,
    void 0,
    IfcBuildingStorey,
    IfcCShapeProfileDef,
    void 0,
    IfcCableCarrierFittingType,
    void 0,
    IfcCableCarrierSegmentType,
    void 0,
    IfcCableSegmentType,
    IfcCalendarDate,
    IfcCartesianPoint,
    void 0,
    void 0,
    IfcCartesianTransformationOperator2D,
    IfcCartesianTransformationOperator3D,
    IfcCartesianTransformationOperator2DnonUniform,
    IfcCartesianTransformationOperator3DnonUniform,
    IfcChamferEdgeFeature,
    void 0,
    IfcChillerType,
    IfcCircle,
    void 0,
    IfcCircleHollowProfileDef,
    IfcCircleProfileDef,
    IfcClassification,
    IfcClassificationItem,
    IfcClassificationItemRelationship,
    IfcClassificationNotation,
    IfcClassificationNotationFacet,
    IfcClassificationReference,
    void 0,
    IfcClosedShell,
    IfcConnectedFaceSet,
    IfcCoilType,
    IfcColourRgb,
    void 0,
    IfcComplexProperty,
    void 0,
    IfcCompositeCurveSegment,
    IfcCompositeProfileDef,
    IfcCompressorType,
    void 0,
    IfcCondenserType,
    IfcCondition,
    IfcConditionCriterion,
    IfcEllipse,
    IfcOpenShell,
    void 0,
    IfcConnectionCurveGeometry,
    void 0,
    IfcConnectionPointGeometry,
    IfcConnectionPortGeometry,
    IfcConnectionSurfaceGeometry,
    IfcConnectionPointEccentricity,
    void 0,
    IfcMetric,
    IfcObjective,
    IfcConstraintAggregationRelationship,
    IfcConstraintClassificationRelationship,
    IfcConstraintRelationship,
    IfcConstructionEquipmentResource,
    void 0,
    IfcConstructionMaterialResource,
    IfcConstructionProductResource,
    IfcCrewResource,
    IfcLaborResource,
    IfcSubContractResource,
    void 0,
    IfcContextDependentUnit,
    void 0,
    IfcCostItem,
    IfcCostSchedule,
    IfcEquipmentStandard,
    IfcFurnitureStandard,
    IfcPerformanceHistory,
    IfcPermit,
    IfcProjectOrder,
    IfcProjectOrderRecord,
    IfcScheduleTimeControl,
    IfcServiceLife,
    IfcSpaceProgram,
    IfcTimeSeriesSchedule,
    void 0,
    IfcControllerType,
    IfcConversionBasedUnit,
    IfcCooledBeamType,
    IfcCoolingTowerType,
    IfcCoordinatedUniversalTimeOffset,
    IfcCraneRailAShapeProfileDef,
    IfcCraneRailFShapeProfileDef,
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
    IfcCurveStyle,
    void 0,
    IfcCurveStyleFont,
    IfcCurveStyleFontAndScaling,
    IfcCurveStyleFontPattern,
    IfcDamperType,
    IfcDateAndTime,
    IfcDefinedSymbol,
    IfcDerivedProfileDef,
    IfcDerivedUnit,
    IfcDerivedUnitElement,
    IfcDiameterDimension,
    IfcDimensionCalloutRelationship,
    IfcDraughtingCalloutRelationship,
    IfcLinearDimension,
    IfcRadiusDimension,
    IfcDraughtingCallout,
    IfcDimensionCurveTerminator,
    IfcDimensionPair,
    IfcDimensionalExponents,
    IfcDirection,
    IfcDiscreteAccessory,
    void 0,
    IfcDiscreteAccessoryType,
    IfcVibrationIsolatorType,
    void 0,
    IfcDistributionChamberElement,
    IfcDistributionFlowElement,
    IfcDistributionChamberElementType,
    void 0,
    IfcDistributionControlElement,
    IfcDistributionElement,
    IfcFlowInstrumentType,
    IfcSensorType,
    IfcDistributionElementType,
    IfcEnergyConversionDevice,
    IfcFlowController,
    IfcFlowFitting,
    IfcFlowMovingDevice,
    IfcFlowSegment,
    IfcFlowStorageDevice,
    IfcFlowTerminal,
    IfcFlowTreatmentDevice,
    void 0,
    void 0,
    IfcDistributionPort,
    void 0,
    IfcDocumentElectronicFormat,
    IfcDocumentInformation,
    IfcDocumentInformationRelationship,
    IfcDocumentReference,
    IfcDoorLiningProperties,
    void 0,
    IfcDoorPanelProperties,
    IfcDoorStyle,
    IfcTypeProduct,
    IfcStructuredDimensionCallout,
    IfcDraughtingPreDefinedColour,
    void 0,
    IfcDraughtingPreDefinedCurveFont,
    void 0,
    IfcDraughtingPreDefinedTextFont,
    void 0,
    IfcDuctFittingType,
    IfcDuctSegmentType,
    IfcDuctSilencerType,
    IfcEdge,
    IfcEdgeCurve,
    IfcOrientedEdge,
    IfcSubedge,
    IfcRoundedEdgeFeature,
    void 0,
    IfcEdgeLoop,
    IfcLoop,
    IfcElectricApplianceType,
    IfcElectricDistributionPoint,
    IfcElectricFlowStorageDeviceType,
    IfcElectricGeneratorType,
    IfcElectricHeaterType,
    IfcElectricMotorType,
    IfcElectricTimeControlType,
    IfcElectricalBaseProperties,
    IfcEnergyProperties,
    IfcElectricalCircuit,
    IfcSystem,
    IfcElectricalElement,
    IfcElementAssembly,
    IfcEquipmentElement,
    void 0,
    IfcFurnishingElement,
    IfcTransportElement,
    IfcVirtualElement,
    IfcFastener,
    IfcFastenerType,
    IfcElementQuantity,
    IfcFurnishingElementType,
    void 0,
    IfcTransportElementType,
    void 0,
    IfcPlane,
    IfcEllipseProfileDef,
    IfcEvaporativeCoolerType,
    IfcEvaporatorType,
    IfcHeatExchangerType,
    IfcHumidifierType,
    IfcMotorConnectionType,
    IfcSpaceHeaterType,
    IfcTransformerType,
    IfcTubeBundleType,
    IfcUnitaryEquipmentType,
    IfcExtendedMaterialProperties,
    void 0,
    IfcExternallyDefinedHatchStyle,
    IfcExternallyDefinedSurfaceStyle,
    IfcExternallyDefinedSymbol,
    IfcExternallyDefinedTextFont,
    IfcLibraryReference,
    IfcExtrudedAreaSolid,
    void 0,
    IfcFace,
    IfcFaceSurface,
    IfcFaceBasedSurfaceModel,
    IfcFaceBound,
    IfcFaceOuterBound,
    IfcFacetedBrep,
    void 0,
    IfcFacetedBrepWithVoids,
    IfcFailureConnectionCondition,
    void 0,
    IfcFanType,
    IfcMechanicalFastener,
    IfcMechanicalFastenerType,
    void 0,
    IfcProjectionElement,
    IfcOpeningElement,
    IfcFillAreaStyle,
    IfcFillAreaStyleHatching,
    IfcFillAreaStyleTileSymbolWithStyle,
    IfcFillAreaStyleTiles,
    IfcFilterType,
    IfcFireSuppressionTerminalType,
    IfcFlowMeterType,
    IfcProtectiveDeviceType,
    IfcSwitchingDeviceType,
    IfcValveType,
    IfcJunctionBoxType,
    IfcPipeFittingType,
    IfcPumpType,
    IfcPipeSegmentType,
    IfcTankType,
    IfcGasTerminalType,
    IfcLampType,
    IfcLightFixtureType,
    IfcOutletType,
    IfcSanitaryTerminalType,
    IfcStackTerminalType,
    IfcWasteTerminalType,
    IfcFluidFlowProperties,
    IfcFuelProperties,
    IfcFurnitureType,
    IfcSystemFurnitureElementType,
    IfcGeneralMaterialProperties,
    IfcGeneralProfileProperties,
    IfcStructuralProfileProperties,
    void 0,
    IfcGeometricCurveSet,
    IfcGeometricSet,
    IfcGeometricRepresentationContext,
    IfcGeometricRepresentationSubContext,
    IfcRepresentationContext,
    void 0,
    IfcOneDirectionRepeatFactor,
    IfcPlanarExtent,
    IfcSectionedSpine,
    IfcShellBasedSurfaceModel,
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
    IfcZone,
    IfcPolygonalBoundedHalfSpace,
    IfcHygroscopicMaterialProperties,
    IfcImageTexture,
    IfcIrregularTimeSeries,
    void 0,
    IfcIrregularTimeSeriesValue,
    IfcLShapeProfileDef,
    IfcLibraryInformation,
    IfcLightDistributionData,
    IfcLightIntensityDistribution,
    IfcLightSourceAmbient,
    IfcLightSourceDirectional,
    IfcLightSourceGoniometric,
    IfcLightSourcePositional,
    IfcLightSourceSpot,
    IfcLocalPlacement,
    IfcLocalTime,
    IfcPolyLoop,
    IfcVertexLoop,
    IfcMappedItem,
    IfcMaterial,
    IfcMaterialClassificationRelationship,
    IfcMaterialDefinitionRepresentation,
    IfcProductRepresentation,
    IfcMaterialLayer,
    IfcMaterialLayerSet,
    IfcMaterialLayerSetUsage,
    IfcMaterialList,
    IfcMechanicalMaterialProperties,
    IfcOpticalMaterialProperties,
    IfcProductsOfCombustionProperties,
    IfcThermalMaterialProperties,
    IfcWaterProperties,
    IfcMeasureWithUnit,
    IfcMechanicalConcreteMaterialProperties,
    IfcMechanicalSteelMaterialProperties,
    IfcMonetaryUnit,
    IfcMove,
    IfcTask,
    IfcSIUnit,
    void 0,
    IfcProject,
    void 0,
    IfcTypeObject,
    void 0,
    IfcTwoDirectionRepeatFactor,
    IfcOrderAction,
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
    IfcPointOnCurve,
    IfcPointOnSurface,
    void 0,
    IfcPreDefinedDimensionSymbol,
    void 0,
    IfcPreDefinedPointMarkerSymbol,
    IfcPreDefinedTerminatorSymbol,
    IfcTextStyleFontModel,
    IfcPresentationLayerAssignment,
    IfcPresentationLayerWithStyle,
    IfcSurfaceStyle,
    IfcSymbolStyle,
    IfcTextStyle,
    IfcPresentationStyleAssignment,
    IfcProcedure,
    IfcProxy,
    void 0,
    void 0,
    IfcProductDefinitionShape,
    IfcRibPlateProfileProperties,
    void 0,
    IfcPropertyBoundedValue,
    IfcPropertyConstraintRelationship,
    void 0,
    IfcPropertyDependencyRelationship,
    IfcPropertyEnumeratedValue,
    IfcPropertyEnumeration,
    IfcPropertyListValue,
    IfcPropertyReferenceValue,
    IfcPropertySet,
    IfcReinforcementDefinitionProperties,
    IfcServiceLifeFactor,
    IfcSoundProperties,
    IfcSoundValue,
    IfcSpaceThermalLoadProperties,
    IfcWindowLiningProperties,
    IfcWindowPanelProperties,
    IfcPropertySingleValue,
    IfcPropertyTableValue,
    IfcRectangleHollowProfileDef,
    IfcRoundedRectangleProfileDef,
    IfcReferencesValueDocument,
    IfcRegularTimeSeries,
    IfcReinforcementBarProperties,
    IfcReinforcingBar,
    IfcReinforcingMesh,
    IfcTendon,
    IfcTendonAnchor,
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
    IfcRelAssignsTasks,
    IfcRelOccupiesSpaces,
    IfcRelAssignsToProjectOrder,
    IfcRelSchedulesCostItems,
    IfcRelAssociates,
    IfcRelAssociatesAppliedValue,
    IfcRelAssociatesApproval,
    IfcRelAssociatesClassification,
    IfcRelAssociatesConstraint,
    IfcRelAssociatesDocument,
    IfcRelAssociatesLibrary,
    IfcRelAssociatesMaterial,
    IfcRelAssociatesProfileProperties,
    void 0,
    IfcRelConnectsElements,
    IfcRelConnectsPortToElement,
    IfcRelConnectsPorts,
    IfcRelConnectsStructuralActivity,
    IfcRelConnectsStructuralElement,
    IfcRelConnectsStructuralMember,
    IfcRelContainedInSpatialStructure,
    IfcRelCoversBldgElements,
    IfcRelCoversSpaces,
    IfcRelFillsElement,
    IfcRelFlowControlElements,
    IfcRelInteractionRequirements,
    IfcRelProjectsElement,
    IfcRelReferencedInSpatialStructure,
    IfcRelSequence,
    IfcRelServicesBuildings,
    IfcRelSpaceBoundary,
    IfcRelVoidsElement,
    IfcRelConnectsPathElements,
    IfcRelConnectsWithRealizingElements,
    IfcRelConnectsWithEccentricity,
    IfcRelNests,
    void 0,
    IfcRelDefinesByProperties,
    IfcRelDefinesByType,
    IfcRelOverridesProperties,
    IfcRelaxation,
    IfcRepresentation,
    void 0,
    void 0,
    IfcRepresentationMap,
    IfcRevolvedAreaSolid,
    IfcSectionProperties,
    IfcSectionReinforcementProperties,
    IfcShapeAspect,
    IfcShapeRepresentation,
    IfcTopologyRepresentation,
    IfcSite,
    IfcSlippageConnectionCondition,
    IfcSweptDiskSolid,
    IfcSpace,
    IfcSpaceType,
    void 0,
    IfcStructuralLinearAction,
    IfcStructuralPlanarAction,
    IfcStructuralPointAction,
    void 0,
    IfcStructuralAnalysisModel,
    void 0,
    IfcStructuralCurveConnection,
    IfcStructuralPointConnection,
    IfcStructuralSurfaceConnection,
    IfcStructuralCurveMember,
    IfcStructuralCurveMemberVarying,
    void 0,
    IfcStructuralLinearActionVarying,
    void 0,
    void 0,
    IfcStructuralLoadLinearForce,
    IfcStructuralLoadPlanarForce,
    IfcStructuralLoadSingleDisplacement,
    IfcStructuralLoadSingleDisplacementDistortion,
    IfcStructuralLoadSingleForce,
    IfcStructuralLoadSingleForceWarping,
    IfcStructuralLoadTemperature,
    IfcStructuralSurfaceMember,
    IfcStructuralPlanarActionVarying,
    IfcStructuralPointReaction,
    IfcStructuralSteelProfileProperties,
    IfcStructuralSurfaceMemberVarying,
    IfcStyledRepresentation,
    void 0,
    IfcSurfaceCurveSweptAreaSolid,
    IfcSurfaceOfLinearExtrusion,
    IfcSurfaceOfRevolution,
    IfcSurfaceStyleLighting,
    IfcSurfaceStyleRefraction,
    IfcSurfaceStyleRendering,
    IfcSurfaceStyleShading,
    IfcSurfaceStyleWithTextures,
    IfcTable,
    IfcTableRow,
    IfcTextLiteralWithExtent,
    IfcTextStyleForDefinedFont,
    IfcTextStyleTextModel,
    IfcTextStyleWithBoxCharacteristics,
    void 0,
    IfcTextureCoordinateGenerator,
    IfcTextureMap,
    IfcTextureVertex,
    IfcTimeSeriesReferenceRelationship,
    IfcTimeSeriesValue,
    IfcVertex,
    IfcWindowStyle,
    IfcUnitAssignment,
    IfcVertexPoint,
    IfcVertexBasedTextureMap,
    IfcVirtualGridIntersection,
    IfcWallStandardCase,
    IfcWorkPlan,
    IfcWorkSchedule,
];

let parser = new StepParser< EntityTypesIfc >( EntityTypesIfcSearch );

let SchemaIfc = new StepEntitySchema< EntityTypesIfc >( constructors, parser );

export default SchemaIfc;

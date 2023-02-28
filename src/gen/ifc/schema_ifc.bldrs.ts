import EntityTypesIfc from './entity_types_ifc.bldrs';
import EntityTypesIfcSearch from './entity_types_search.bldrs';
import StepEntityConstructor from '../../core/step_entity_constructor';
import StepEntityBase from '../../core/step_entity_base';
import StepEntitySchema from '../../core/step_entity_schema';
import StepParser from '../../../dependencies/conway-ds/src/parsing/step/step_parser';
import Ifc2DCompositeCurve from './Ifc2DCompositeCurve.bldrs';
import IfcCompositeCurve from './IfcCompositeCurve.bldrs';
import IfcActionRequest from './IfcActionRequest.bldrs';
import IfcActor from './IfcActor.bldrs';
import IfcOccupant from './IfcOccupant.bldrs';
import IfcActorRole from './IfcActorRole.bldrs';
import IfcActuatorType from './IfcActuatorType.bldrs';
import IfcPostalAddress from './IfcPostalAddress.bldrs';
import IfcTelecomAddress from './IfcTelecomAddress.bldrs';
import IfcAirTerminalBoxType from './IfcAirTerminalBoxType.bldrs';
import IfcAirTerminalType from './IfcAirTerminalType.bldrs';
import IfcAirToAirHeatRecoveryType from './IfcAirToAirHeatRecoveryType.bldrs';
import IfcAlarmType from './IfcAlarmType.bldrs';
import IfcAngularDimension from './IfcAngularDimension.bldrs';
import IfcDimensionCurveDirectedCallout from './IfcDimensionCurveDirectedCallout.bldrs';
import IfcAnnotation from './IfcAnnotation.bldrs';
import IfcAnnotationCurveOccurrence from './IfcAnnotationCurveOccurrence.bldrs';
import IfcDimensionCurve from './IfcDimensionCurve.bldrs';
import IfcProjectionCurve from './IfcProjectionCurve.bldrs';
import IfcAnnotationFillArea from './IfcAnnotationFillArea.bldrs';
import IfcAnnotationFillAreaOccurrence from './IfcAnnotationFillAreaOccurrence.bldrs';
import IfcAnnotationSurfaceOccurrence from './IfcAnnotationSurfaceOccurrence.bldrs';
import IfcAnnotationSymbolOccurrence from './IfcAnnotationSymbolOccurrence.bldrs';
import IfcAnnotationTextOccurrence from './IfcAnnotationTextOccurrence.bldrs';
import IfcStyledItem from './IfcStyledItem.bldrs';
import IfcAnnotationSurface from './IfcAnnotationSurface.bldrs';
import IfcTerminatorSymbol from './IfcTerminatorSymbol.bldrs';
import IfcApplication from './IfcApplication.bldrs';
import IfcCostValue from './IfcCostValue.bldrs';
import IfcEnvironmentalImpactValue from './IfcEnvironmentalImpactValue.bldrs';
import IfcAppliedValueRelationship from './IfcAppliedValueRelationship.bldrs';
import IfcApproval from './IfcApproval.bldrs';
import IfcApprovalActorRelationship from './IfcApprovalActorRelationship.bldrs';
import IfcApprovalPropertyRelationship from './IfcApprovalPropertyRelationship.bldrs';
import IfcApprovalRelationship from './IfcApprovalRelationship.bldrs';
import IfcArbitraryClosedProfileDef from './IfcArbitraryClosedProfileDef.bldrs';
import IfcArbitraryProfileDefWithVoids from './IfcArbitraryProfileDefWithVoids.bldrs';
import IfcArbitraryOpenProfileDef from './IfcArbitraryOpenProfileDef.bldrs';
import IfcCenterLineProfileDef from './IfcCenterLineProfileDef.bldrs';
import IfcAsset from './IfcAsset.bldrs';
import IfcGroup from './IfcGroup.bldrs';
import IfcAsymmetricIShapeProfileDef from './IfcAsymmetricIShapeProfileDef.bldrs';
import IfcIShapeProfileDef from './IfcIShapeProfileDef.bldrs';
import IfcAxis1Placement from './IfcAxis1Placement.bldrs';
import IfcAxis2Placement2D from './IfcAxis2Placement2D.bldrs';
import IfcAxis2Placement3D from './IfcAxis2Placement3D.bldrs';
import IfcBezierCurve from './IfcBezierCurve.bldrs';
import IfcBeam from './IfcBeam.bldrs';
import IfcBeamType from './IfcBeamType.bldrs';
import IfcRationalBezierCurve from './IfcRationalBezierCurve.bldrs';
import IfcBlobTexture from './IfcBlobTexture.bldrs';
import IfcBlock from './IfcBlock.bldrs';
import IfcBoilerType from './IfcBoilerType.bldrs';
import IfcBooleanClippingResult from './IfcBooleanClippingResult.bldrs';
import IfcBooleanResult from './IfcBooleanResult.bldrs';
import IfcBoundaryEdgeCondition from './IfcBoundaryEdgeCondition.bldrs';
import IfcBoundaryFaceCondition from './IfcBoundaryFaceCondition.bldrs';
import IfcBoundaryNodeCondition from './IfcBoundaryNodeCondition.bldrs';
import IfcBoundaryNodeConditionWarping from './IfcBoundaryNodeConditionWarping.bldrs';
import IfcPolyline from './IfcPolyline.bldrs';
import IfcTrimmedCurve from './IfcTrimmedCurve.bldrs';
import IfcBoundedSurface from './IfcBoundedSurface.bldrs';
import IfcCurveBoundedPlane from './IfcCurveBoundedPlane.bldrs';
import IfcRectangularTrimmedSurface from './IfcRectangularTrimmedSurface.bldrs';
import IfcBoundingBox from './IfcBoundingBox.bldrs';
import IfcBoxedHalfSpace from './IfcBoxedHalfSpace.bldrs';
import IfcHalfSpaceSolid from './IfcHalfSpaceSolid.bldrs';
import IfcBuilding from './IfcBuilding.bldrs';
import IfcBuildingElementProxy from './IfcBuildingElementProxy.bldrs';
import IfcColumn from './IfcColumn.bldrs';
import IfcCovering from './IfcCovering.bldrs';
import IfcCurtainWall from './IfcCurtainWall.bldrs';
import IfcDoor from './IfcDoor.bldrs';
import IfcFooting from './IfcFooting.bldrs';
import IfcMember from './IfcMember.bldrs';
import IfcPile from './IfcPile.bldrs';
import IfcPlate from './IfcPlate.bldrs';
import IfcRailing from './IfcRailing.bldrs';
import IfcRamp from './IfcRamp.bldrs';
import IfcRampFlight from './IfcRampFlight.bldrs';
import IfcRoof from './IfcRoof.bldrs';
import IfcSlab from './IfcSlab.bldrs';
import IfcStair from './IfcStair.bldrs';
import IfcStairFlight from './IfcStairFlight.bldrs';
import IfcWall from './IfcWall.bldrs';
import IfcWindow from './IfcWindow.bldrs';
import IfcBuildingElementPart from './IfcBuildingElementPart.bldrs';
import IfcBuildingElementProxyType from './IfcBuildingElementProxyType.bldrs';
import IfcColumnType from './IfcColumnType.bldrs';
import IfcCoveringType from './IfcCoveringType.bldrs';
import IfcCurtainWallType from './IfcCurtainWallType.bldrs';
import IfcMemberType from './IfcMemberType.bldrs';
import IfcPlateType from './IfcPlateType.bldrs';
import IfcRailingType from './IfcRailingType.bldrs';
import IfcRampFlightType from './IfcRampFlightType.bldrs';
import IfcSlabType from './IfcSlabType.bldrs';
import IfcStairFlightType from './IfcStairFlightType.bldrs';
import IfcWallType from './IfcWallType.bldrs';
import IfcBuildingStorey from './IfcBuildingStorey.bldrs';
import IfcCShapeProfileDef from './IfcCShapeProfileDef.bldrs';
import IfcCableCarrierFittingType from './IfcCableCarrierFittingType.bldrs';
import IfcCableCarrierSegmentType from './IfcCableCarrierSegmentType.bldrs';
import IfcCableSegmentType from './IfcCableSegmentType.bldrs';
import IfcCalendarDate from './IfcCalendarDate.bldrs';
import IfcCartesianPoint from './IfcCartesianPoint.bldrs';
import IfcCartesianTransformationOperator2D from './IfcCartesianTransformationOperator2D.bldrs';
import IfcCartesianTransformationOperator3D from './IfcCartesianTransformationOperator3D.bldrs';
import IfcCartesianTransformationOperator2DnonUniform from './IfcCartesianTransformationOperator2DnonUniform.bldrs';
import IfcCartesianTransformationOperator3DnonUniform from './IfcCartesianTransformationOperator3DnonUniform.bldrs';
import IfcChamferEdgeFeature from './IfcChamferEdgeFeature.bldrs';
import IfcChillerType from './IfcChillerType.bldrs';
import IfcCircle from './IfcCircle.bldrs';
import IfcCircleHollowProfileDef from './IfcCircleHollowProfileDef.bldrs';
import IfcCircleProfileDef from './IfcCircleProfileDef.bldrs';
import IfcClassification from './IfcClassification.bldrs';
import IfcClassificationItem from './IfcClassificationItem.bldrs';
import IfcClassificationItemRelationship from './IfcClassificationItemRelationship.bldrs';
import IfcClassificationNotation from './IfcClassificationNotation.bldrs';
import IfcClassificationNotationFacet from './IfcClassificationNotationFacet.bldrs';
import IfcClassificationReference from './IfcClassificationReference.bldrs';
import IfcClosedShell from './IfcClosedShell.bldrs';
import IfcConnectedFaceSet from './IfcConnectedFaceSet.bldrs';
import IfcCoilType from './IfcCoilType.bldrs';
import IfcColourRgb from './IfcColourRgb.bldrs';
import IfcComplexProperty from './IfcComplexProperty.bldrs';
import IfcCompositeCurveSegment from './IfcCompositeCurveSegment.bldrs';
import IfcCompositeProfileDef from './IfcCompositeProfileDef.bldrs';
import IfcCompressorType from './IfcCompressorType.bldrs';
import IfcCondenserType from './IfcCondenserType.bldrs';
import IfcCondition from './IfcCondition.bldrs';
import IfcConditionCriterion from './IfcConditionCriterion.bldrs';
import IfcEllipse from './IfcEllipse.bldrs';
import IfcOpenShell from './IfcOpenShell.bldrs';
import IfcConnectionCurveGeometry from './IfcConnectionCurveGeometry.bldrs';
import IfcConnectionPointGeometry from './IfcConnectionPointGeometry.bldrs';
import IfcConnectionPortGeometry from './IfcConnectionPortGeometry.bldrs';
import IfcConnectionSurfaceGeometry from './IfcConnectionSurfaceGeometry.bldrs';
import IfcConnectionPointEccentricity from './IfcConnectionPointEccentricity.bldrs';
import IfcMetric from './IfcMetric.bldrs';
import IfcObjective from './IfcObjective.bldrs';
import IfcConstraintAggregationRelationship from './IfcConstraintAggregationRelationship.bldrs';
import IfcConstraintClassificationRelationship from './IfcConstraintClassificationRelationship.bldrs';
import IfcConstraintRelationship from './IfcConstraintRelationship.bldrs';
import IfcConstructionEquipmentResource from './IfcConstructionEquipmentResource.bldrs';
import IfcConstructionMaterialResource from './IfcConstructionMaterialResource.bldrs';
import IfcConstructionProductResource from './IfcConstructionProductResource.bldrs';
import IfcCrewResource from './IfcCrewResource.bldrs';
import IfcLaborResource from './IfcLaborResource.bldrs';
import IfcSubContractResource from './IfcSubContractResource.bldrs';
import IfcContextDependentUnit from './IfcContextDependentUnit.bldrs';
import IfcCostItem from './IfcCostItem.bldrs';
import IfcCostSchedule from './IfcCostSchedule.bldrs';
import IfcEquipmentStandard from './IfcEquipmentStandard.bldrs';
import IfcFurnitureStandard from './IfcFurnitureStandard.bldrs';
import IfcPerformanceHistory from './IfcPerformanceHistory.bldrs';
import IfcPermit from './IfcPermit.bldrs';
import IfcProjectOrder from './IfcProjectOrder.bldrs';
import IfcProjectOrderRecord from './IfcProjectOrderRecord.bldrs';
import IfcScheduleTimeControl from './IfcScheduleTimeControl.bldrs';
import IfcServiceLife from './IfcServiceLife.bldrs';
import IfcSpaceProgram from './IfcSpaceProgram.bldrs';
import IfcTimeSeriesSchedule from './IfcTimeSeriesSchedule.bldrs';
import IfcControllerType from './IfcControllerType.bldrs';
import IfcConversionBasedUnit from './IfcConversionBasedUnit.bldrs';
import IfcCooledBeamType from './IfcCooledBeamType.bldrs';
import IfcCoolingTowerType from './IfcCoolingTowerType.bldrs';
import IfcCoordinatedUniversalTimeOffset from './IfcCoordinatedUniversalTimeOffset.bldrs';
import IfcCraneRailAShapeProfileDef from './IfcCraneRailAShapeProfileDef.bldrs';
import IfcCraneRailFShapeProfileDef from './IfcCraneRailFShapeProfileDef.bldrs';
import IfcRectangularPyramid from './IfcRectangularPyramid.bldrs';
import IfcRightCircularCone from './IfcRightCircularCone.bldrs';
import IfcRightCircularCylinder from './IfcRightCircularCylinder.bldrs';
import IfcSphere from './IfcSphere.bldrs';
import IfcCsgSolid from './IfcCsgSolid.bldrs';
import IfcCurrencyRelationship from './IfcCurrencyRelationship.bldrs';
import IfcLine from './IfcLine.bldrs';
import IfcOffsetCurve2D from './IfcOffsetCurve2D.bldrs';
import IfcOffsetCurve3D from './IfcOffsetCurve3D.bldrs';
import IfcCurveStyle from './IfcCurveStyle.bldrs';
import IfcCurveStyleFont from './IfcCurveStyleFont.bldrs';
import IfcCurveStyleFontAndScaling from './IfcCurveStyleFontAndScaling.bldrs';
import IfcCurveStyleFontPattern from './IfcCurveStyleFontPattern.bldrs';
import IfcDamperType from './IfcDamperType.bldrs';
import IfcDateAndTime from './IfcDateAndTime.bldrs';
import IfcDefinedSymbol from './IfcDefinedSymbol.bldrs';
import IfcDerivedProfileDef from './IfcDerivedProfileDef.bldrs';
import IfcDerivedUnit from './IfcDerivedUnit.bldrs';
import IfcDerivedUnitElement from './IfcDerivedUnitElement.bldrs';
import IfcDiameterDimension from './IfcDiameterDimension.bldrs';
import IfcDimensionCalloutRelationship from './IfcDimensionCalloutRelationship.bldrs';
import IfcDraughtingCalloutRelationship from './IfcDraughtingCalloutRelationship.bldrs';
import IfcLinearDimension from './IfcLinearDimension.bldrs';
import IfcRadiusDimension from './IfcRadiusDimension.bldrs';
import IfcDraughtingCallout from './IfcDraughtingCallout.bldrs';
import IfcDimensionCurveTerminator from './IfcDimensionCurveTerminator.bldrs';
import IfcDimensionPair from './IfcDimensionPair.bldrs';
import IfcDimensionalExponents from './IfcDimensionalExponents.bldrs';
import IfcDirection from './IfcDirection.bldrs';
import IfcDiscreteAccessory from './IfcDiscreteAccessory.bldrs';
import IfcDiscreteAccessoryType from './IfcDiscreteAccessoryType.bldrs';
import IfcVibrationIsolatorType from './IfcVibrationIsolatorType.bldrs';
import IfcDistributionChamberElement from './IfcDistributionChamberElement.bldrs';
import IfcDistributionFlowElement from './IfcDistributionFlowElement.bldrs';
import IfcDistributionChamberElementType from './IfcDistributionChamberElementType.bldrs';
import IfcDistributionControlElement from './IfcDistributionControlElement.bldrs';
import IfcDistributionElement from './IfcDistributionElement.bldrs';
import IfcFlowInstrumentType from './IfcFlowInstrumentType.bldrs';
import IfcSensorType from './IfcSensorType.bldrs';
import IfcDistributionElementType from './IfcDistributionElementType.bldrs';
import IfcEnergyConversionDevice from './IfcEnergyConversionDevice.bldrs';
import IfcFlowController from './IfcFlowController.bldrs';
import IfcFlowFitting from './IfcFlowFitting.bldrs';
import IfcFlowMovingDevice from './IfcFlowMovingDevice.bldrs';
import IfcFlowSegment from './IfcFlowSegment.bldrs';
import IfcFlowStorageDevice from './IfcFlowStorageDevice.bldrs';
import IfcFlowTerminal from './IfcFlowTerminal.bldrs';
import IfcFlowTreatmentDevice from './IfcFlowTreatmentDevice.bldrs';
import IfcDistributionPort from './IfcDistributionPort.bldrs';
import IfcDocumentElectronicFormat from './IfcDocumentElectronicFormat.bldrs';
import IfcDocumentInformation from './IfcDocumentInformation.bldrs';
import IfcDocumentInformationRelationship from './IfcDocumentInformationRelationship.bldrs';
import IfcDocumentReference from './IfcDocumentReference.bldrs';
import IfcDoorLiningProperties from './IfcDoorLiningProperties.bldrs';
import IfcDoorPanelProperties from './IfcDoorPanelProperties.bldrs';
import IfcDoorStyle from './IfcDoorStyle.bldrs';
import IfcTypeProduct from './IfcTypeProduct.bldrs';
import IfcStructuredDimensionCallout from './IfcStructuredDimensionCallout.bldrs';
import IfcDraughtingPreDefinedColour from './IfcDraughtingPreDefinedColour.bldrs';
import IfcDraughtingPreDefinedCurveFont from './IfcDraughtingPreDefinedCurveFont.bldrs';
import IfcDraughtingPreDefinedTextFont from './IfcDraughtingPreDefinedTextFont.bldrs';
import IfcDuctFittingType from './IfcDuctFittingType.bldrs';
import IfcDuctSegmentType from './IfcDuctSegmentType.bldrs';
import IfcDuctSilencerType from './IfcDuctSilencerType.bldrs';
import IfcEdge from './IfcEdge.bldrs';
import IfcEdgeCurve from './IfcEdgeCurve.bldrs';
import IfcOrientedEdge from './IfcOrientedEdge.bldrs';
import IfcSubedge from './IfcSubedge.bldrs';
import IfcRoundedEdgeFeature from './IfcRoundedEdgeFeature.bldrs';
import IfcEdgeLoop from './IfcEdgeLoop.bldrs';
import IfcLoop from './IfcLoop.bldrs';
import IfcElectricApplianceType from './IfcElectricApplianceType.bldrs';
import IfcElectricDistributionPoint from './IfcElectricDistributionPoint.bldrs';
import IfcElectricFlowStorageDeviceType from './IfcElectricFlowStorageDeviceType.bldrs';
import IfcElectricGeneratorType from './IfcElectricGeneratorType.bldrs';
import IfcElectricHeaterType from './IfcElectricHeaterType.bldrs';
import IfcElectricMotorType from './IfcElectricMotorType.bldrs';
import IfcElectricTimeControlType from './IfcElectricTimeControlType.bldrs';
import IfcElectricalBaseProperties from './IfcElectricalBaseProperties.bldrs';
import IfcEnergyProperties from './IfcEnergyProperties.bldrs';
import IfcElectricalCircuit from './IfcElectricalCircuit.bldrs';
import IfcSystem from './IfcSystem.bldrs';
import IfcElectricalElement from './IfcElectricalElement.bldrs';
import IfcElementAssembly from './IfcElementAssembly.bldrs';
import IfcEquipmentElement from './IfcEquipmentElement.bldrs';
import IfcFurnishingElement from './IfcFurnishingElement.bldrs';
import IfcTransportElement from './IfcTransportElement.bldrs';
import IfcVirtualElement from './IfcVirtualElement.bldrs';
import IfcFastener from './IfcFastener.bldrs';
import IfcFastenerType from './IfcFastenerType.bldrs';
import IfcElementQuantity from './IfcElementQuantity.bldrs';
import IfcFurnishingElementType from './IfcFurnishingElementType.bldrs';
import IfcTransportElementType from './IfcTransportElementType.bldrs';
import IfcPlane from './IfcPlane.bldrs';
import IfcEllipseProfileDef from './IfcEllipseProfileDef.bldrs';
import IfcEvaporativeCoolerType from './IfcEvaporativeCoolerType.bldrs';
import IfcEvaporatorType from './IfcEvaporatorType.bldrs';
import IfcHeatExchangerType from './IfcHeatExchangerType.bldrs';
import IfcHumidifierType from './IfcHumidifierType.bldrs';
import IfcMotorConnectionType from './IfcMotorConnectionType.bldrs';
import IfcSpaceHeaterType from './IfcSpaceHeaterType.bldrs';
import IfcTransformerType from './IfcTransformerType.bldrs';
import IfcTubeBundleType from './IfcTubeBundleType.bldrs';
import IfcUnitaryEquipmentType from './IfcUnitaryEquipmentType.bldrs';
import IfcExtendedMaterialProperties from './IfcExtendedMaterialProperties.bldrs';
import IfcExternallyDefinedHatchStyle from './IfcExternallyDefinedHatchStyle.bldrs';
import IfcExternallyDefinedSurfaceStyle from './IfcExternallyDefinedSurfaceStyle.bldrs';
import IfcExternallyDefinedSymbol from './IfcExternallyDefinedSymbol.bldrs';
import IfcExternallyDefinedTextFont from './IfcExternallyDefinedTextFont.bldrs';
import IfcLibraryReference from './IfcLibraryReference.bldrs';
import IfcExtrudedAreaSolid from './IfcExtrudedAreaSolid.bldrs';
import IfcFace from './IfcFace.bldrs';
import IfcFaceSurface from './IfcFaceSurface.bldrs';
import IfcFaceBasedSurfaceModel from './IfcFaceBasedSurfaceModel.bldrs';
import IfcFaceBound from './IfcFaceBound.bldrs';
import IfcFaceOuterBound from './IfcFaceOuterBound.bldrs';
import IfcFacetedBrep from './IfcFacetedBrep.bldrs';
import IfcFacetedBrepWithVoids from './IfcFacetedBrepWithVoids.bldrs';
import IfcFailureConnectionCondition from './IfcFailureConnectionCondition.bldrs';
import IfcFanType from './IfcFanType.bldrs';
import IfcMechanicalFastener from './IfcMechanicalFastener.bldrs';
import IfcMechanicalFastenerType from './IfcMechanicalFastenerType.bldrs';
import IfcProjectionElement from './IfcProjectionElement.bldrs';
import IfcOpeningElement from './IfcOpeningElement.bldrs';
import IfcFillAreaStyle from './IfcFillAreaStyle.bldrs';
import IfcFillAreaStyleHatching from './IfcFillAreaStyleHatching.bldrs';
import IfcFillAreaStyleTileSymbolWithStyle from './IfcFillAreaStyleTileSymbolWithStyle.bldrs';
import IfcFillAreaStyleTiles from './IfcFillAreaStyleTiles.bldrs';
import IfcFilterType from './IfcFilterType.bldrs';
import IfcFireSuppressionTerminalType from './IfcFireSuppressionTerminalType.bldrs';
import IfcFlowMeterType from './IfcFlowMeterType.bldrs';
import IfcProtectiveDeviceType from './IfcProtectiveDeviceType.bldrs';
import IfcSwitchingDeviceType from './IfcSwitchingDeviceType.bldrs';
import IfcValveType from './IfcValveType.bldrs';
import IfcJunctionBoxType from './IfcJunctionBoxType.bldrs';
import IfcPipeFittingType from './IfcPipeFittingType.bldrs';
import IfcPumpType from './IfcPumpType.bldrs';
import IfcPipeSegmentType from './IfcPipeSegmentType.bldrs';
import IfcTankType from './IfcTankType.bldrs';
import IfcGasTerminalType from './IfcGasTerminalType.bldrs';
import IfcLampType from './IfcLampType.bldrs';
import IfcLightFixtureType from './IfcLightFixtureType.bldrs';
import IfcOutletType from './IfcOutletType.bldrs';
import IfcSanitaryTerminalType from './IfcSanitaryTerminalType.bldrs';
import IfcStackTerminalType from './IfcStackTerminalType.bldrs';
import IfcWasteTerminalType from './IfcWasteTerminalType.bldrs';
import IfcFluidFlowProperties from './IfcFluidFlowProperties.bldrs';
import IfcFuelProperties from './IfcFuelProperties.bldrs';
import IfcFurnitureType from './IfcFurnitureType.bldrs';
import IfcSystemFurnitureElementType from './IfcSystemFurnitureElementType.bldrs';
import IfcGeneralMaterialProperties from './IfcGeneralMaterialProperties.bldrs';
import IfcGeneralProfileProperties from './IfcGeneralProfileProperties.bldrs';
import IfcStructuralProfileProperties from './IfcStructuralProfileProperties.bldrs';
import IfcGeometricCurveSet from './IfcGeometricCurveSet.bldrs';
import IfcGeometricSet from './IfcGeometricSet.bldrs';
import IfcGeometricRepresentationContext from './IfcGeometricRepresentationContext.bldrs';
import IfcGeometricRepresentationSubContext from './IfcGeometricRepresentationSubContext.bldrs';
import IfcRepresentationContext from './IfcRepresentationContext.bldrs';
import IfcOneDirectionRepeatFactor from './IfcOneDirectionRepeatFactor.bldrs';
import IfcPlanarExtent from './IfcPlanarExtent.bldrs';
import IfcSectionedSpine from './IfcSectionedSpine.bldrs';
import IfcShellBasedSurfaceModel from './IfcShellBasedSurfaceModel.bldrs';
import IfcTextLiteral from './IfcTextLiteral.bldrs';
import IfcVector from './IfcVector.bldrs';
import IfcGrid from './IfcGrid.bldrs';
import IfcGridAxis from './IfcGridAxis.bldrs';
import IfcGridPlacement from './IfcGridPlacement.bldrs';
import IfcInventory from './IfcInventory.bldrs';
import IfcStructuralLoadGroup from './IfcStructuralLoadGroup.bldrs';
import IfcStructuralResultGroup from './IfcStructuralResultGroup.bldrs';
import IfcZone from './IfcZone.bldrs';
import IfcPolygonalBoundedHalfSpace from './IfcPolygonalBoundedHalfSpace.bldrs';
import IfcHygroscopicMaterialProperties from './IfcHygroscopicMaterialProperties.bldrs';
import IfcImageTexture from './IfcImageTexture.bldrs';
import IfcIrregularTimeSeries from './IfcIrregularTimeSeries.bldrs';
import IfcIrregularTimeSeriesValue from './IfcIrregularTimeSeriesValue.bldrs';
import IfcLShapeProfileDef from './IfcLShapeProfileDef.bldrs';
import IfcLibraryInformation from './IfcLibraryInformation.bldrs';
import IfcLightDistributionData from './IfcLightDistributionData.bldrs';
import IfcLightIntensityDistribution from './IfcLightIntensityDistribution.bldrs';
import IfcLightSourceAmbient from './IfcLightSourceAmbient.bldrs';
import IfcLightSourceDirectional from './IfcLightSourceDirectional.bldrs';
import IfcLightSourceGoniometric from './IfcLightSourceGoniometric.bldrs';
import IfcLightSourcePositional from './IfcLightSourcePositional.bldrs';
import IfcLightSourceSpot from './IfcLightSourceSpot.bldrs';
import IfcLocalPlacement from './IfcLocalPlacement.bldrs';
import IfcLocalTime from './IfcLocalTime.bldrs';
import IfcPolyLoop from './IfcPolyLoop.bldrs';
import IfcVertexLoop from './IfcVertexLoop.bldrs';
import IfcMappedItem from './IfcMappedItem.bldrs';
import IfcMaterial from './IfcMaterial.bldrs';
import IfcMaterialClassificationRelationship from './IfcMaterialClassificationRelationship.bldrs';
import IfcMaterialDefinitionRepresentation from './IfcMaterialDefinitionRepresentation.bldrs';
import IfcProductRepresentation from './IfcProductRepresentation.bldrs';
import IfcMaterialLayer from './IfcMaterialLayer.bldrs';
import IfcMaterialLayerSet from './IfcMaterialLayerSet.bldrs';
import IfcMaterialLayerSetUsage from './IfcMaterialLayerSetUsage.bldrs';
import IfcMaterialList from './IfcMaterialList.bldrs';
import IfcMechanicalMaterialProperties from './IfcMechanicalMaterialProperties.bldrs';
import IfcOpticalMaterialProperties from './IfcOpticalMaterialProperties.bldrs';
import IfcProductsOfCombustionProperties from './IfcProductsOfCombustionProperties.bldrs';
import IfcThermalMaterialProperties from './IfcThermalMaterialProperties.bldrs';
import IfcWaterProperties from './IfcWaterProperties.bldrs';
import IfcMeasureWithUnit from './IfcMeasureWithUnit.bldrs';
import IfcMechanicalConcreteMaterialProperties from './IfcMechanicalConcreteMaterialProperties.bldrs';
import IfcMechanicalSteelMaterialProperties from './IfcMechanicalSteelMaterialProperties.bldrs';
import IfcMonetaryUnit from './IfcMonetaryUnit.bldrs';
import IfcMove from './IfcMove.bldrs';
import IfcTask from './IfcTask.bldrs';
import IfcSIUnit from './IfcSIUnit.bldrs';
import IfcProject from './IfcProject.bldrs';
import IfcTypeObject from './IfcTypeObject.bldrs';
import IfcTwoDirectionRepeatFactor from './IfcTwoDirectionRepeatFactor.bldrs';
import IfcOrderAction from './IfcOrderAction.bldrs';
import IfcOrganization from './IfcOrganization.bldrs';
import IfcOrganizationRelationship from './IfcOrganizationRelationship.bldrs';
import IfcOwnerHistory from './IfcOwnerHistory.bldrs';
import IfcRectangleProfileDef from './IfcRectangleProfileDef.bldrs';
import IfcTShapeProfileDef from './IfcTShapeProfileDef.bldrs';
import IfcTrapeziumProfileDef from './IfcTrapeziumProfileDef.bldrs';
import IfcUShapeProfileDef from './IfcUShapeProfileDef.bldrs';
import IfcZShapeProfileDef from './IfcZShapeProfileDef.bldrs';
import IfcPath from './IfcPath.bldrs';
import IfcPermeableCoveringProperties from './IfcPermeableCoveringProperties.bldrs';
import IfcPerson from './IfcPerson.bldrs';
import IfcPersonAndOrganization from './IfcPersonAndOrganization.bldrs';
import IfcPhysicalComplexQuantity from './IfcPhysicalComplexQuantity.bldrs';
import IfcQuantityArea from './IfcQuantityArea.bldrs';
import IfcQuantityCount from './IfcQuantityCount.bldrs';
import IfcQuantityLength from './IfcQuantityLength.bldrs';
import IfcQuantityTime from './IfcQuantityTime.bldrs';
import IfcQuantityVolume from './IfcQuantityVolume.bldrs';
import IfcQuantityWeight from './IfcQuantityWeight.bldrs';
import IfcPixelTexture from './IfcPixelTexture.bldrs';
import IfcPlanarBox from './IfcPlanarBox.bldrs';
import IfcPointOnCurve from './IfcPointOnCurve.bldrs';
import IfcPointOnSurface from './IfcPointOnSurface.bldrs';
import IfcPreDefinedDimensionSymbol from './IfcPreDefinedDimensionSymbol.bldrs';
import IfcPreDefinedPointMarkerSymbol from './IfcPreDefinedPointMarkerSymbol.bldrs';
import IfcPreDefinedTerminatorSymbol from './IfcPreDefinedTerminatorSymbol.bldrs';
import IfcTextStyleFontModel from './IfcTextStyleFontModel.bldrs';
import IfcPresentationLayerAssignment from './IfcPresentationLayerAssignment.bldrs';
import IfcPresentationLayerWithStyle from './IfcPresentationLayerWithStyle.bldrs';
import IfcSurfaceStyle from './IfcSurfaceStyle.bldrs';
import IfcSymbolStyle from './IfcSymbolStyle.bldrs';
import IfcTextStyle from './IfcTextStyle.bldrs';
import IfcPresentationStyleAssignment from './IfcPresentationStyleAssignment.bldrs';
import IfcProcedure from './IfcProcedure.bldrs';
import IfcProxy from './IfcProxy.bldrs';
import IfcProductDefinitionShape from './IfcProductDefinitionShape.bldrs';
import IfcRibPlateProfileProperties from './IfcRibPlateProfileProperties.bldrs';
import IfcPropertyBoundedValue from './IfcPropertyBoundedValue.bldrs';
import IfcPropertyConstraintRelationship from './IfcPropertyConstraintRelationship.bldrs';
import IfcPropertyDependencyRelationship from './IfcPropertyDependencyRelationship.bldrs';
import IfcPropertyEnumeratedValue from './IfcPropertyEnumeratedValue.bldrs';
import IfcPropertyEnumeration from './IfcPropertyEnumeration.bldrs';
import IfcPropertyListValue from './IfcPropertyListValue.bldrs';
import IfcPropertyReferenceValue from './IfcPropertyReferenceValue.bldrs';
import IfcPropertySet from './IfcPropertySet.bldrs';
import IfcReinforcementDefinitionProperties from './IfcReinforcementDefinitionProperties.bldrs';
import IfcServiceLifeFactor from './IfcServiceLifeFactor.bldrs';
import IfcSoundProperties from './IfcSoundProperties.bldrs';
import IfcSoundValue from './IfcSoundValue.bldrs';
import IfcSpaceThermalLoadProperties from './IfcSpaceThermalLoadProperties.bldrs';
import IfcWindowLiningProperties from './IfcWindowLiningProperties.bldrs';
import IfcWindowPanelProperties from './IfcWindowPanelProperties.bldrs';
import IfcPropertySingleValue from './IfcPropertySingleValue.bldrs';
import IfcPropertyTableValue from './IfcPropertyTableValue.bldrs';
import IfcRectangleHollowProfileDef from './IfcRectangleHollowProfileDef.bldrs';
import IfcRoundedRectangleProfileDef from './IfcRoundedRectangleProfileDef.bldrs';
import IfcReferencesValueDocument from './IfcReferencesValueDocument.bldrs';
import IfcRegularTimeSeries from './IfcRegularTimeSeries.bldrs';
import IfcReinforcementBarProperties from './IfcReinforcementBarProperties.bldrs';
import IfcReinforcingBar from './IfcReinforcingBar.bldrs';
import IfcReinforcingMesh from './IfcReinforcingMesh.bldrs';
import IfcTendon from './IfcTendon.bldrs';
import IfcTendonAnchor from './IfcTendonAnchor.bldrs';
import IfcRelAggregates from './IfcRelAggregates.bldrs';
import IfcRelAssignsToActor from './IfcRelAssignsToActor.bldrs';
import IfcRelAssignsToControl from './IfcRelAssignsToControl.bldrs';
import IfcRelAssignsToGroup from './IfcRelAssignsToGroup.bldrs';
import IfcRelAssignsToProcess from './IfcRelAssignsToProcess.bldrs';
import IfcRelAssignsToProduct from './IfcRelAssignsToProduct.bldrs';
import IfcRelAssignsToResource from './IfcRelAssignsToResource.bldrs';
import IfcRelAssignsTasks from './IfcRelAssignsTasks.bldrs';
import IfcRelOccupiesSpaces from './IfcRelOccupiesSpaces.bldrs';
import IfcRelAssignsToProjectOrder from './IfcRelAssignsToProjectOrder.bldrs';
import IfcRelSchedulesCostItems from './IfcRelSchedulesCostItems.bldrs';
import IfcRelAssociates from './IfcRelAssociates.bldrs';
import IfcRelAssociatesAppliedValue from './IfcRelAssociatesAppliedValue.bldrs';
import IfcRelAssociatesApproval from './IfcRelAssociatesApproval.bldrs';
import IfcRelAssociatesClassification from './IfcRelAssociatesClassification.bldrs';
import IfcRelAssociatesConstraint from './IfcRelAssociatesConstraint.bldrs';
import IfcRelAssociatesDocument from './IfcRelAssociatesDocument.bldrs';
import IfcRelAssociatesLibrary from './IfcRelAssociatesLibrary.bldrs';
import IfcRelAssociatesMaterial from './IfcRelAssociatesMaterial.bldrs';
import IfcRelAssociatesProfileProperties from './IfcRelAssociatesProfileProperties.bldrs';
import IfcRelConnectsElements from './IfcRelConnectsElements.bldrs';
import IfcRelConnectsPortToElement from './IfcRelConnectsPortToElement.bldrs';
import IfcRelConnectsPorts from './IfcRelConnectsPorts.bldrs';
import IfcRelConnectsStructuralActivity from './IfcRelConnectsStructuralActivity.bldrs';
import IfcRelConnectsStructuralElement from './IfcRelConnectsStructuralElement.bldrs';
import IfcRelConnectsStructuralMember from './IfcRelConnectsStructuralMember.bldrs';
import IfcRelContainedInSpatialStructure from './IfcRelContainedInSpatialStructure.bldrs';
import IfcRelCoversBldgElements from './IfcRelCoversBldgElements.bldrs';
import IfcRelCoversSpaces from './IfcRelCoversSpaces.bldrs';
import IfcRelFillsElement from './IfcRelFillsElement.bldrs';
import IfcRelFlowControlElements from './IfcRelFlowControlElements.bldrs';
import IfcRelInteractionRequirements from './IfcRelInteractionRequirements.bldrs';
import IfcRelProjectsElement from './IfcRelProjectsElement.bldrs';
import IfcRelReferencedInSpatialStructure from './IfcRelReferencedInSpatialStructure.bldrs';
import IfcRelSequence from './IfcRelSequence.bldrs';
import IfcRelServicesBuildings from './IfcRelServicesBuildings.bldrs';
import IfcRelSpaceBoundary from './IfcRelSpaceBoundary.bldrs';
import IfcRelVoidsElement from './IfcRelVoidsElement.bldrs';
import IfcRelConnectsPathElements from './IfcRelConnectsPathElements.bldrs';
import IfcRelConnectsWithRealizingElements from './IfcRelConnectsWithRealizingElements.bldrs';
import IfcRelConnectsWithEccentricity from './IfcRelConnectsWithEccentricity.bldrs';
import IfcRelNests from './IfcRelNests.bldrs';
import IfcRelDefinesByProperties from './IfcRelDefinesByProperties.bldrs';
import IfcRelDefinesByType from './IfcRelDefinesByType.bldrs';
import IfcRelOverridesProperties from './IfcRelOverridesProperties.bldrs';
import IfcRelaxation from './IfcRelaxation.bldrs';
import IfcRepresentation from './IfcRepresentation.bldrs';
import IfcRepresentationMap from './IfcRepresentationMap.bldrs';
import IfcRevolvedAreaSolid from './IfcRevolvedAreaSolid.bldrs';
import IfcSectionProperties from './IfcSectionProperties.bldrs';
import IfcSectionReinforcementProperties from './IfcSectionReinforcementProperties.bldrs';
import IfcShapeAspect from './IfcShapeAspect.bldrs';
import IfcShapeRepresentation from './IfcShapeRepresentation.bldrs';
import IfcTopologyRepresentation from './IfcTopologyRepresentation.bldrs';
import IfcSite from './IfcSite.bldrs';
import IfcSlippageConnectionCondition from './IfcSlippageConnectionCondition.bldrs';
import IfcSweptDiskSolid from './IfcSweptDiskSolid.bldrs';
import IfcSpace from './IfcSpace.bldrs';
import IfcSpaceType from './IfcSpaceType.bldrs';
import IfcStructuralLinearAction from './IfcStructuralLinearAction.bldrs';
import IfcStructuralPlanarAction from './IfcStructuralPlanarAction.bldrs';
import IfcStructuralPointAction from './IfcStructuralPointAction.bldrs';
import IfcStructuralAnalysisModel from './IfcStructuralAnalysisModel.bldrs';
import IfcStructuralCurveConnection from './IfcStructuralCurveConnection.bldrs';
import IfcStructuralPointConnection from './IfcStructuralPointConnection.bldrs';
import IfcStructuralSurfaceConnection from './IfcStructuralSurfaceConnection.bldrs';
import IfcStructuralCurveMember from './IfcStructuralCurveMember.bldrs';
import IfcStructuralCurveMemberVarying from './IfcStructuralCurveMemberVarying.bldrs';
import IfcStructuralLinearActionVarying from './IfcStructuralLinearActionVarying.bldrs';
import IfcStructuralLoadLinearForce from './IfcStructuralLoadLinearForce.bldrs';
import IfcStructuralLoadPlanarForce from './IfcStructuralLoadPlanarForce.bldrs';
import IfcStructuralLoadSingleDisplacement from './IfcStructuralLoadSingleDisplacement.bldrs';
import IfcStructuralLoadSingleDisplacementDistortion from './IfcStructuralLoadSingleDisplacementDistortion.bldrs';
import IfcStructuralLoadSingleForce from './IfcStructuralLoadSingleForce.bldrs';
import IfcStructuralLoadSingleForceWarping from './IfcStructuralLoadSingleForceWarping.bldrs';
import IfcStructuralLoadTemperature from './IfcStructuralLoadTemperature.bldrs';
import IfcStructuralSurfaceMember from './IfcStructuralSurfaceMember.bldrs';
import IfcStructuralPlanarActionVarying from './IfcStructuralPlanarActionVarying.bldrs';
import IfcStructuralPointReaction from './IfcStructuralPointReaction.bldrs';
import IfcStructuralSteelProfileProperties from './IfcStructuralSteelProfileProperties.bldrs';
import IfcStructuralSurfaceMemberVarying from './IfcStructuralSurfaceMemberVarying.bldrs';
import IfcStyledRepresentation from './IfcStyledRepresentation.bldrs';
import IfcSurfaceCurveSweptAreaSolid from './IfcSurfaceCurveSweptAreaSolid.bldrs';
import IfcSurfaceOfLinearExtrusion from './IfcSurfaceOfLinearExtrusion.bldrs';
import IfcSurfaceOfRevolution from './IfcSurfaceOfRevolution.bldrs';
import IfcSurfaceStyleLighting from './IfcSurfaceStyleLighting.bldrs';
import IfcSurfaceStyleRefraction from './IfcSurfaceStyleRefraction.bldrs';
import IfcSurfaceStyleRendering from './IfcSurfaceStyleRendering.bldrs';
import IfcSurfaceStyleShading from './IfcSurfaceStyleShading.bldrs';
import IfcSurfaceStyleWithTextures from './IfcSurfaceStyleWithTextures.bldrs';
import IfcTable from './IfcTable.bldrs';
import IfcTableRow from './IfcTableRow.bldrs';
import IfcTextLiteralWithExtent from './IfcTextLiteralWithExtent.bldrs';
import IfcTextStyleForDefinedFont from './IfcTextStyleForDefinedFont.bldrs';
import IfcTextStyleTextModel from './IfcTextStyleTextModel.bldrs';
import IfcTextStyleWithBoxCharacteristics from './IfcTextStyleWithBoxCharacteristics.bldrs';
import IfcTextureCoordinateGenerator from './IfcTextureCoordinateGenerator.bldrs';
import IfcTextureMap from './IfcTextureMap.bldrs';
import IfcTextureVertex from './IfcTextureVertex.bldrs';
import IfcTimeSeriesReferenceRelationship from './IfcTimeSeriesReferenceRelationship.bldrs';
import IfcTimeSeriesValue from './IfcTimeSeriesValue.bldrs';
import IfcVertex from './IfcVertex.bldrs';
import IfcWindowStyle from './IfcWindowStyle.bldrs';
import IfcUnitAssignment from './IfcUnitAssignment.bldrs';
import IfcVertexPoint from './IfcVertexPoint.bldrs';
import IfcVertexBasedTextureMap from './IfcVertexBasedTextureMap.bldrs';
import IfcVirtualGridIntersection from './IfcVirtualGridIntersection.bldrs';
import IfcWallStandardCase from './IfcWallStandardCase.bldrs';
import IfcWorkPlan from './IfcWorkPlan.bldrs';
import IfcWorkSchedule from './IfcWorkSchedule.bldrs';
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

import {IfcComponentTypeNames} from './schema_ifc.bldrs'
import Entity from '../../core/entity'

import IfcGloballyUniqueId from './IfcGloballyUniqueId.bldrs'
import Ifc2DCompositeCurve from './Ifc2DCompositeCurve.bldrs'
import IfcCompositeCurve from './IfcCompositeCurve.bldrs'
import IfcActionRequest from './IfcActionRequest.bldrs'
import IfcControl from './IfcControl.bldrs'
import IfcActor from './IfcActor.bldrs'
import IfcOccupant from './IfcOccupant.bldrs'
import IfcObject from './IfcObject.bldrs'
import IfcActorRole from './IfcActorRole.bldrs'
import IfcActuatorType from './IfcActuatorType.bldrs'
import IfcDistributionControlElementType from './IfcDistributionControlElementType.bldrs'
import IfcAddress from './IfcAddress.bldrs'
import IfcPostalAddress from './IfcPostalAddress.bldrs'
import IfcTelecomAddress from './IfcTelecomAddress.bldrs'
import IfcAirTerminalBoxType from './IfcAirTerminalBoxType.bldrs'
import IfcFlowControllerType from './IfcFlowControllerType.bldrs'
import IfcAirTerminalType from './IfcAirTerminalType.bldrs'
import IfcFlowTerminalType from './IfcFlowTerminalType.bldrs'
import IfcAirToAirHeatRecoveryType from './IfcAirToAirHeatRecoveryType.bldrs'
import IfcEnergyConversionDeviceType from './IfcEnergyConversionDeviceType.bldrs'
import IfcAlarmType from './IfcAlarmType.bldrs'
import IfcAngularDimension from './IfcAngularDimension.bldrs'
import IfcDimensionCurveDirectedCallout from './IfcDimensionCurveDirectedCallout.bldrs'
import IfcAnnotation from './IfcAnnotation.bldrs'
import IfcProduct from './IfcProduct.bldrs'
import IfcAnnotationCurveOccurrence from './IfcAnnotationCurveOccurrence.bldrs'
import IfcDimensionCurve from './IfcDimensionCurve.bldrs'
import IfcProjectionCurve from './IfcProjectionCurve.bldrs'
import IfcAnnotationOccurrence from './IfcAnnotationOccurrence.bldrs'
import IfcAnnotationFillArea from './IfcAnnotationFillArea.bldrs'
import IfcGeometricRepresentationItem from './IfcGeometricRepresentationItem.bldrs'
import IfcAnnotationFillAreaOccurrence from './IfcAnnotationFillAreaOccurrence.bldrs'
import IfcAnnotationSurfaceOccurrence from './IfcAnnotationSurfaceOccurrence.bldrs'
import IfcAnnotationSymbolOccurrence from './IfcAnnotationSymbolOccurrence.bldrs'
import IfcAnnotationTextOccurrence from './IfcAnnotationTextOccurrence.bldrs'
import IfcStyledItem from './IfcStyledItem.bldrs'
import IfcAnnotationSurface from './IfcAnnotationSurface.bldrs'
import IfcTerminatorSymbol from './IfcTerminatorSymbol.bldrs'
import IfcApplication from './IfcApplication.bldrs'
import IfcAppliedValue from './IfcAppliedValue.bldrs'
import IfcCostValue from './IfcCostValue.bldrs'
import IfcEnvironmentalImpactValue from './IfcEnvironmentalImpactValue.bldrs'
import IfcAppliedValueRelationship from './IfcAppliedValueRelationship.bldrs'
import IfcApproval from './IfcApproval.bldrs'
import IfcApprovalActorRelationship from './IfcApprovalActorRelationship.bldrs'
import IfcApprovalPropertyRelationship from './IfcApprovalPropertyRelationship.bldrs'
import IfcApprovalRelationship from './IfcApprovalRelationship.bldrs'
import IfcArbitraryClosedProfileDef from './IfcArbitraryClosedProfileDef.bldrs'
import IfcArbitraryProfileDefWithVoids from './IfcArbitraryProfileDefWithVoids.bldrs'
import IfcProfileDef from './IfcProfileDef.bldrs'
import IfcArbitraryOpenProfileDef from './IfcArbitraryOpenProfileDef.bldrs'
import IfcCenterLineProfileDef from './IfcCenterLineProfileDef.bldrs'
import IfcAsset from './IfcAsset.bldrs'
import IfcGroup from './IfcGroup.bldrs'
import IfcAsymmetricIShapeProfileDef from './IfcAsymmetricIShapeProfileDef.bldrs'
import IfcIShapeProfileDef from './IfcIShapeProfileDef.bldrs'
import IfcAxis1Placement from './IfcAxis1Placement.bldrs'
import IfcPlacement from './IfcPlacement.bldrs'
import IfcAxis2Placement2D from './IfcAxis2Placement2D.bldrs'
import IfcAxis2Placement3D from './IfcAxis2Placement3D.bldrs'
import IfcBSplineCurve from './IfcBSplineCurve.bldrs'
import IfcBezierCurve from './IfcBezierCurve.bldrs'
import IfcBoundedCurve from './IfcBoundedCurve.bldrs'
import IfcBeam from './IfcBeam.bldrs'
import IfcBuildingElement from './IfcBuildingElement.bldrs'
import IfcBeamType from './IfcBeamType.bldrs'
import IfcBuildingElementType from './IfcBuildingElementType.bldrs'
import IfcRationalBezierCurve from './IfcRationalBezierCurve.bldrs'
import IfcBlobTexture from './IfcBlobTexture.bldrs'
import IfcSurfaceTexture from './IfcSurfaceTexture.bldrs'
import IfcBlock from './IfcBlock.bldrs'
import IfcCsgPrimitive3D from './IfcCsgPrimitive3D.bldrs'
import IfcBoilerType from './IfcBoilerType.bldrs'
import IfcBooleanClippingResult from './IfcBooleanClippingResult.bldrs'
import IfcBooleanResult from './IfcBooleanResult.bldrs'
import IfcBoundaryCondition from './IfcBoundaryCondition.bldrs'
import IfcBoundaryEdgeCondition from './IfcBoundaryEdgeCondition.bldrs'
import IfcBoundaryFaceCondition from './IfcBoundaryFaceCondition.bldrs'
import IfcBoundaryNodeCondition from './IfcBoundaryNodeCondition.bldrs'
import IfcBoundaryNodeConditionWarping from './IfcBoundaryNodeConditionWarping.bldrs'
import IfcPolyline from './IfcPolyline.bldrs'
import IfcTrimmedCurve from './IfcTrimmedCurve.bldrs'
import IfcCurve from './IfcCurve.bldrs'
import IfcBoundedSurface from './IfcBoundedSurface.bldrs'
import IfcCurveBoundedPlane from './IfcCurveBoundedPlane.bldrs'
import IfcRectangularTrimmedSurface from './IfcRectangularTrimmedSurface.bldrs'
import IfcSurface from './IfcSurface.bldrs'
import IfcBoundingBox from './IfcBoundingBox.bldrs'
import IfcBoxedHalfSpace from './IfcBoxedHalfSpace.bldrs'
import IfcHalfSpaceSolid from './IfcHalfSpaceSolid.bldrs'
import IfcBuilding from './IfcBuilding.bldrs'
import IfcSpatialStructureElement from './IfcSpatialStructureElement.bldrs'
import IfcBuildingElementComponent from './IfcBuildingElementComponent.bldrs'
import IfcBuildingElementProxy from './IfcBuildingElementProxy.bldrs'
import IfcColumn from './IfcColumn.bldrs'
import IfcCovering from './IfcCovering.bldrs'
import IfcCurtainWall from './IfcCurtainWall.bldrs'
import IfcDoor from './IfcDoor.bldrs'
import IfcFooting from './IfcFooting.bldrs'
import IfcMember from './IfcMember.bldrs'
import IfcPile from './IfcPile.bldrs'
import IfcPlate from './IfcPlate.bldrs'
import IfcRailing from './IfcRailing.bldrs'
import IfcRamp from './IfcRamp.bldrs'
import IfcRampFlight from './IfcRampFlight.bldrs'
import IfcRoof from './IfcRoof.bldrs'
import IfcSlab from './IfcSlab.bldrs'
import IfcStair from './IfcStair.bldrs'
import IfcStairFlight from './IfcStairFlight.bldrs'
import IfcWall from './IfcWall.bldrs'
import IfcWindow from './IfcWindow.bldrs'
import IfcElement from './IfcElement.bldrs'
import IfcBuildingElementPart from './IfcBuildingElementPart.bldrs'
import IfcReinforcingElement from './IfcReinforcingElement.bldrs'
import IfcBuildingElementProxyType from './IfcBuildingElementProxyType.bldrs'
import IfcColumnType from './IfcColumnType.bldrs'
import IfcCoveringType from './IfcCoveringType.bldrs'
import IfcCurtainWallType from './IfcCurtainWallType.bldrs'
import IfcMemberType from './IfcMemberType.bldrs'
import IfcPlateType from './IfcPlateType.bldrs'
import IfcRailingType from './IfcRailingType.bldrs'
import IfcRampFlightType from './IfcRampFlightType.bldrs'
import IfcSlabType from './IfcSlabType.bldrs'
import IfcStairFlightType from './IfcStairFlightType.bldrs'
import IfcWallType from './IfcWallType.bldrs'
import IfcElementType from './IfcElementType.bldrs'
import IfcBuildingStorey from './IfcBuildingStorey.bldrs'
import IfcCShapeProfileDef from './IfcCShapeProfileDef.bldrs'
import IfcParameterizedProfileDef from './IfcParameterizedProfileDef.bldrs'
import IfcCableCarrierFittingType from './IfcCableCarrierFittingType.bldrs'
import IfcFlowFittingType from './IfcFlowFittingType.bldrs'
import IfcCableCarrierSegmentType from './IfcCableCarrierSegmentType.bldrs'
import IfcFlowSegmentType from './IfcFlowSegmentType.bldrs'
import IfcCableSegmentType from './IfcCableSegmentType.bldrs'
import IfcCalendarDate from './IfcCalendarDate.bldrs'
import IfcCartesianPoint from './IfcCartesianPoint.bldrs'
import IfcPoint from './IfcPoint.bldrs'
import IfcCartesianTransformationOperator from './IfcCartesianTransformationOperator.bldrs'
import IfcCartesianTransformationOperator2D from './IfcCartesianTransformationOperator2D.bldrs'
import IfcCartesianTransformationOperator3D from './IfcCartesianTransformationOperator3D.bldrs'
import IfcCartesianTransformationOperator2DnonUniform from './IfcCartesianTransformationOperator2DnonUniform.bldrs'
import IfcCartesianTransformationOperator3DnonUniform from './IfcCartesianTransformationOperator3DnonUniform.bldrs'
import IfcChamferEdgeFeature from './IfcChamferEdgeFeature.bldrs'
import IfcEdgeFeature from './IfcEdgeFeature.bldrs'
import IfcChillerType from './IfcChillerType.bldrs'
import IfcCircle from './IfcCircle.bldrs'
import IfcConic from './IfcConic.bldrs'
import IfcCircleHollowProfileDef from './IfcCircleHollowProfileDef.bldrs'
import IfcCircleProfileDef from './IfcCircleProfileDef.bldrs'
import IfcClassification from './IfcClassification.bldrs'
import IfcClassificationItem from './IfcClassificationItem.bldrs'
import IfcClassificationItemRelationship from './IfcClassificationItemRelationship.bldrs'
import IfcClassificationNotation from './IfcClassificationNotation.bldrs'
import IfcClassificationNotationFacet from './IfcClassificationNotationFacet.bldrs'
import IfcClassificationReference from './IfcClassificationReference.bldrs'
import IfcExternalReference from './IfcExternalReference.bldrs'
import IfcClosedShell from './IfcClosedShell.bldrs'
import IfcConnectedFaceSet from './IfcConnectedFaceSet.bldrs'
import IfcCoilType from './IfcCoilType.bldrs'
import IfcColourRgb from './IfcColourRgb.bldrs'
import IfcColourSpecification from './IfcColourSpecification.bldrs'
import IfcComplexProperty from './IfcComplexProperty.bldrs'
import IfcProperty from './IfcProperty.bldrs'
import IfcCompositeCurveSegment from './IfcCompositeCurveSegment.bldrs'
import IfcCompositeProfileDef from './IfcCompositeProfileDef.bldrs'
import IfcCompressorType from './IfcCompressorType.bldrs'
import IfcFlowMovingDeviceType from './IfcFlowMovingDeviceType.bldrs'
import IfcCondenserType from './IfcCondenserType.bldrs'
import IfcCondition from './IfcCondition.bldrs'
import IfcConditionCriterion from './IfcConditionCriterion.bldrs'
import IfcEllipse from './IfcEllipse.bldrs'
import IfcOpenShell from './IfcOpenShell.bldrs'
import IfcTopologicalRepresentationItem from './IfcTopologicalRepresentationItem.bldrs'
import IfcConnectionCurveGeometry from './IfcConnectionCurveGeometry.bldrs'
import IfcConnectionGeometry from './IfcConnectionGeometry.bldrs'
import IfcConnectionPointGeometry from './IfcConnectionPointGeometry.bldrs'
import IfcConnectionPortGeometry from './IfcConnectionPortGeometry.bldrs'
import IfcConnectionSurfaceGeometry from './IfcConnectionSurfaceGeometry.bldrs'
import IfcConnectionPointEccentricity from './IfcConnectionPointEccentricity.bldrs'
import IfcConstraint from './IfcConstraint.bldrs'
import IfcMetric from './IfcMetric.bldrs'
import IfcObjective from './IfcObjective.bldrs'
import IfcConstraintAggregationRelationship from './IfcConstraintAggregationRelationship.bldrs'
import IfcConstraintClassificationRelationship from './IfcConstraintClassificationRelationship.bldrs'
import IfcConstraintRelationship from './IfcConstraintRelationship.bldrs'
import IfcConstructionEquipmentResource from './IfcConstructionEquipmentResource.bldrs'
import IfcConstructionResource from './IfcConstructionResource.bldrs'
import IfcConstructionMaterialResource from './IfcConstructionMaterialResource.bldrs'
import IfcConstructionProductResource from './IfcConstructionProductResource.bldrs'
import IfcCrewResource from './IfcCrewResource.bldrs'
import IfcLaborResource from './IfcLaborResource.bldrs'
import IfcSubContractResource from './IfcSubContractResource.bldrs'
import IfcResource from './IfcResource.bldrs'
import IfcContextDependentUnit from './IfcContextDependentUnit.bldrs'
import IfcNamedUnit from './IfcNamedUnit.bldrs'
import IfcCostItem from './IfcCostItem.bldrs'
import IfcCostSchedule from './IfcCostSchedule.bldrs'
import IfcEquipmentStandard from './IfcEquipmentStandard.bldrs'
import IfcFurnitureStandard from './IfcFurnitureStandard.bldrs'
import IfcPerformanceHistory from './IfcPerformanceHistory.bldrs'
import IfcPermit from './IfcPermit.bldrs'
import IfcProjectOrder from './IfcProjectOrder.bldrs'
import IfcProjectOrderRecord from './IfcProjectOrderRecord.bldrs'
import IfcScheduleTimeControl from './IfcScheduleTimeControl.bldrs'
import IfcServiceLife from './IfcServiceLife.bldrs'
import IfcSpaceProgram from './IfcSpaceProgram.bldrs'
import IfcTimeSeriesSchedule from './IfcTimeSeriesSchedule.bldrs'
import IfcWorkControl from './IfcWorkControl.bldrs'
import IfcControllerType from './IfcControllerType.bldrs'
import IfcConversionBasedUnit from './IfcConversionBasedUnit.bldrs'
import IfcCooledBeamType from './IfcCooledBeamType.bldrs'
import IfcCoolingTowerType from './IfcCoolingTowerType.bldrs'
import IfcCoordinatedUniversalTimeOffset from './IfcCoordinatedUniversalTimeOffset.bldrs'
import IfcCraneRailAShapeProfileDef from './IfcCraneRailAShapeProfileDef.bldrs'
import IfcCraneRailFShapeProfileDef from './IfcCraneRailFShapeProfileDef.bldrs'
import IfcRectangularPyramid from './IfcRectangularPyramid.bldrs'
import IfcRightCircularCone from './IfcRightCircularCone.bldrs'
import IfcRightCircularCylinder from './IfcRightCircularCylinder.bldrs'
import IfcSphere from './IfcSphere.bldrs'
import IfcCsgSolid from './IfcCsgSolid.bldrs'
import IfcSolidModel from './IfcSolidModel.bldrs'
import IfcCurrencyRelationship from './IfcCurrencyRelationship.bldrs'
import IfcLine from './IfcLine.bldrs'
import IfcOffsetCurve2D from './IfcOffsetCurve2D.bldrs'
import IfcOffsetCurve3D from './IfcOffsetCurve3D.bldrs'
import IfcCurveStyle from './IfcCurveStyle.bldrs'
import IfcPresentationStyle from './IfcPresentationStyle.bldrs'
import IfcCurveStyleFont from './IfcCurveStyleFont.bldrs'
import IfcCurveStyleFontAndScaling from './IfcCurveStyleFontAndScaling.bldrs'
import IfcCurveStyleFontPattern from './IfcCurveStyleFontPattern.bldrs'
import IfcDamperType from './IfcDamperType.bldrs'
import IfcDateAndTime from './IfcDateAndTime.bldrs'
import IfcDefinedSymbol from './IfcDefinedSymbol.bldrs'
import IfcDerivedProfileDef from './IfcDerivedProfileDef.bldrs'
import IfcDerivedUnit from './IfcDerivedUnit.bldrs'
import IfcDerivedUnitElement from './IfcDerivedUnitElement.bldrs'
import IfcDiameterDimension from './IfcDiameterDimension.bldrs'
import IfcDimensionCalloutRelationship from './IfcDimensionCalloutRelationship.bldrs'
import IfcDraughtingCalloutRelationship from './IfcDraughtingCalloutRelationship.bldrs'
import IfcLinearDimension from './IfcLinearDimension.bldrs'
import IfcRadiusDimension from './IfcRadiusDimension.bldrs'
import IfcDraughtingCallout from './IfcDraughtingCallout.bldrs'
import IfcDimensionCurveTerminator from './IfcDimensionCurveTerminator.bldrs'
import IfcDimensionPair from './IfcDimensionPair.bldrs'
import IfcDimensionalExponents from './IfcDimensionalExponents.bldrs'
import IfcDirection from './IfcDirection.bldrs'
import IfcDiscreteAccessory from './IfcDiscreteAccessory.bldrs'
import IfcElementComponent from './IfcElementComponent.bldrs'
import IfcDiscreteAccessoryType from './IfcDiscreteAccessoryType.bldrs'
import IfcVibrationIsolatorType from './IfcVibrationIsolatorType.bldrs'
import IfcElementComponentType from './IfcElementComponentType.bldrs'
import IfcDistributionChamberElement from './IfcDistributionChamberElement.bldrs'
import IfcDistributionFlowElement from './IfcDistributionFlowElement.bldrs'
import IfcDistributionChamberElementType from './IfcDistributionChamberElementType.bldrs'
import IfcDistributionFlowElementType from './IfcDistributionFlowElementType.bldrs'
import IfcDistributionControlElement from './IfcDistributionControlElement.bldrs'
import IfcDistributionElement from './IfcDistributionElement.bldrs'
import IfcFlowInstrumentType from './IfcFlowInstrumentType.bldrs'
import IfcSensorType from './IfcSensorType.bldrs'
import IfcDistributionElementType from './IfcDistributionElementType.bldrs'
import IfcEnergyConversionDevice from './IfcEnergyConversionDevice.bldrs'
import IfcFlowController from './IfcFlowController.bldrs'
import IfcFlowFitting from './IfcFlowFitting.bldrs'
import IfcFlowMovingDevice from './IfcFlowMovingDevice.bldrs'
import IfcFlowSegment from './IfcFlowSegment.bldrs'
import IfcFlowStorageDevice from './IfcFlowStorageDevice.bldrs'
import IfcFlowTerminal from './IfcFlowTerminal.bldrs'
import IfcFlowTreatmentDevice from './IfcFlowTreatmentDevice.bldrs'
import IfcFlowStorageDeviceType from './IfcFlowStorageDeviceType.bldrs'
import IfcFlowTreatmentDeviceType from './IfcFlowTreatmentDeviceType.bldrs'
import IfcDistributionPort from './IfcDistributionPort.bldrs'
import IfcPort from './IfcPort.bldrs'
import IfcDocumentElectronicFormat from './IfcDocumentElectronicFormat.bldrs'
import IfcDocumentInformation from './IfcDocumentInformation.bldrs'
import IfcDocumentInformationRelationship from './IfcDocumentInformationRelationship.bldrs'
import IfcDocumentReference from './IfcDocumentReference.bldrs'
import IfcDoorLiningProperties from './IfcDoorLiningProperties.bldrs'
import IfcPropertySetDefinition from './IfcPropertySetDefinition.bldrs'
import IfcDoorPanelProperties from './IfcDoorPanelProperties.bldrs'
import IfcDoorStyle from './IfcDoorStyle.bldrs'
import IfcTypeProduct from './IfcTypeProduct.bldrs'
import IfcStructuredDimensionCallout from './IfcStructuredDimensionCallout.bldrs'
import IfcDraughtingPreDefinedColour from './IfcDraughtingPreDefinedColour.bldrs'
import IfcPreDefinedColour from './IfcPreDefinedColour.bldrs'
import IfcDraughtingPreDefinedCurveFont from './IfcDraughtingPreDefinedCurveFont.bldrs'
import IfcPreDefinedCurveFont from './IfcPreDefinedCurveFont.bldrs'
import IfcDraughtingPreDefinedTextFont from './IfcDraughtingPreDefinedTextFont.bldrs'
import IfcPreDefinedTextFont from './IfcPreDefinedTextFont.bldrs'
import IfcDuctFittingType from './IfcDuctFittingType.bldrs'
import IfcDuctSegmentType from './IfcDuctSegmentType.bldrs'
import IfcDuctSilencerType from './IfcDuctSilencerType.bldrs'
import IfcEdge from './IfcEdge.bldrs'
import IfcEdgeCurve from './IfcEdgeCurve.bldrs'
import IfcOrientedEdge from './IfcOrientedEdge.bldrs'
import IfcSubedge from './IfcSubedge.bldrs'
import IfcRoundedEdgeFeature from './IfcRoundedEdgeFeature.bldrs'
import IfcFeatureElementSubtraction from './IfcFeatureElementSubtraction.bldrs'
import IfcEdgeLoop from './IfcEdgeLoop.bldrs'
import IfcLoop from './IfcLoop.bldrs'
import IfcElectricApplianceType from './IfcElectricApplianceType.bldrs'
import IfcElectricDistributionPoint from './IfcElectricDistributionPoint.bldrs'
import IfcElectricFlowStorageDeviceType from './IfcElectricFlowStorageDeviceType.bldrs'
import IfcElectricGeneratorType from './IfcElectricGeneratorType.bldrs'
import IfcElectricHeaterType from './IfcElectricHeaterType.bldrs'
import IfcElectricMotorType from './IfcElectricMotorType.bldrs'
import IfcElectricTimeControlType from './IfcElectricTimeControlType.bldrs'
import IfcElectricalBaseProperties from './IfcElectricalBaseProperties.bldrs'
import IfcEnergyProperties from './IfcEnergyProperties.bldrs'
import IfcElectricalCircuit from './IfcElectricalCircuit.bldrs'
import IfcSystem from './IfcSystem.bldrs'
import IfcElectricalElement from './IfcElectricalElement.bldrs'
import IfcElementAssembly from './IfcElementAssembly.bldrs'
import IfcEquipmentElement from './IfcEquipmentElement.bldrs'
import IfcFeatureElement from './IfcFeatureElement.bldrs'
import IfcFurnishingElement from './IfcFurnishingElement.bldrs'
import IfcTransportElement from './IfcTransportElement.bldrs'
import IfcVirtualElement from './IfcVirtualElement.bldrs'
import IfcFastener from './IfcFastener.bldrs'
import IfcFastenerType from './IfcFastenerType.bldrs'
import IfcElementQuantity from './IfcElementQuantity.bldrs'
import IfcFurnishingElementType from './IfcFurnishingElementType.bldrs'
import IfcSpatialStructureElementType from './IfcSpatialStructureElementType.bldrs'
import IfcTransportElementType from './IfcTransportElementType.bldrs'
import IfcElementarySurface from './IfcElementarySurface.bldrs'
import IfcPlane from './IfcPlane.bldrs'
import IfcEllipseProfileDef from './IfcEllipseProfileDef.bldrs'
import IfcEvaporativeCoolerType from './IfcEvaporativeCoolerType.bldrs'
import IfcEvaporatorType from './IfcEvaporatorType.bldrs'
import IfcHeatExchangerType from './IfcHeatExchangerType.bldrs'
import IfcHumidifierType from './IfcHumidifierType.bldrs'
import IfcMotorConnectionType from './IfcMotorConnectionType.bldrs'
import IfcSpaceHeaterType from './IfcSpaceHeaterType.bldrs'
import IfcTransformerType from './IfcTransformerType.bldrs'
import IfcTubeBundleType from './IfcTubeBundleType.bldrs'
import IfcUnitaryEquipmentType from './IfcUnitaryEquipmentType.bldrs'
import IfcExtendedMaterialProperties from './IfcExtendedMaterialProperties.bldrs'
import IfcMaterialProperties from './IfcMaterialProperties.bldrs'
import IfcExternallyDefinedHatchStyle from './IfcExternallyDefinedHatchStyle.bldrs'
import IfcExternallyDefinedSurfaceStyle from './IfcExternallyDefinedSurfaceStyle.bldrs'
import IfcExternallyDefinedSymbol from './IfcExternallyDefinedSymbol.bldrs'
import IfcExternallyDefinedTextFont from './IfcExternallyDefinedTextFont.bldrs'
import IfcLibraryReference from './IfcLibraryReference.bldrs'
import IfcExtrudedAreaSolid from './IfcExtrudedAreaSolid.bldrs'
import IfcSweptAreaSolid from './IfcSweptAreaSolid.bldrs'
import IfcFace from './IfcFace.bldrs'
import IfcFaceSurface from './IfcFaceSurface.bldrs'
import IfcFaceBasedSurfaceModel from './IfcFaceBasedSurfaceModel.bldrs'
import IfcFaceBound from './IfcFaceBound.bldrs'
import IfcFaceOuterBound from './IfcFaceOuterBound.bldrs'
import IfcFacetedBrep from './IfcFacetedBrep.bldrs'
import IfcManifoldSolidBrep from './IfcManifoldSolidBrep.bldrs'
import IfcFacetedBrepWithVoids from './IfcFacetedBrepWithVoids.bldrs'
import IfcFailureConnectionCondition from './IfcFailureConnectionCondition.bldrs'
import IfcStructuralConnectionCondition from './IfcStructuralConnectionCondition.bldrs'
import IfcFanType from './IfcFanType.bldrs'
import IfcMechanicalFastener from './IfcMechanicalFastener.bldrs'
import IfcMechanicalFastenerType from './IfcMechanicalFastenerType.bldrs'
import IfcFeatureElementAddition from './IfcFeatureElementAddition.bldrs'
import IfcProjectionElement from './IfcProjectionElement.bldrs'
import IfcOpeningElement from './IfcOpeningElement.bldrs'
import IfcFillAreaStyle from './IfcFillAreaStyle.bldrs'
import IfcFillAreaStyleHatching from './IfcFillAreaStyleHatching.bldrs'
import IfcFillAreaStyleTileSymbolWithStyle from './IfcFillAreaStyleTileSymbolWithStyle.bldrs'
import IfcFillAreaStyleTiles from './IfcFillAreaStyleTiles.bldrs'
import IfcFilterType from './IfcFilterType.bldrs'
import IfcFireSuppressionTerminalType from './IfcFireSuppressionTerminalType.bldrs'
import IfcFlowMeterType from './IfcFlowMeterType.bldrs'
import IfcProtectiveDeviceType from './IfcProtectiveDeviceType.bldrs'
import IfcSwitchingDeviceType from './IfcSwitchingDeviceType.bldrs'
import IfcValveType from './IfcValveType.bldrs'
import IfcJunctionBoxType from './IfcJunctionBoxType.bldrs'
import IfcPipeFittingType from './IfcPipeFittingType.bldrs'
import IfcPumpType from './IfcPumpType.bldrs'
import IfcPipeSegmentType from './IfcPipeSegmentType.bldrs'
import IfcTankType from './IfcTankType.bldrs'
import IfcGasTerminalType from './IfcGasTerminalType.bldrs'
import IfcLampType from './IfcLampType.bldrs'
import IfcLightFixtureType from './IfcLightFixtureType.bldrs'
import IfcOutletType from './IfcOutletType.bldrs'
import IfcSanitaryTerminalType from './IfcSanitaryTerminalType.bldrs'
import IfcStackTerminalType from './IfcStackTerminalType.bldrs'
import IfcWasteTerminalType from './IfcWasteTerminalType.bldrs'
import IfcFluidFlowProperties from './IfcFluidFlowProperties.bldrs'
import IfcFuelProperties from './IfcFuelProperties.bldrs'
import IfcFurnitureType from './IfcFurnitureType.bldrs'
import IfcSystemFurnitureElementType from './IfcSystemFurnitureElementType.bldrs'
import IfcGeneralMaterialProperties from './IfcGeneralMaterialProperties.bldrs'
import IfcGeneralProfileProperties from './IfcGeneralProfileProperties.bldrs'
import IfcStructuralProfileProperties from './IfcStructuralProfileProperties.bldrs'
import IfcProfileProperties from './IfcProfileProperties.bldrs'
import IfcGeometricCurveSet from './IfcGeometricCurveSet.bldrs'
import IfcGeometricSet from './IfcGeometricSet.bldrs'
import IfcGeometricRepresentationContext from './IfcGeometricRepresentationContext.bldrs'
import IfcGeometricRepresentationSubContext from './IfcGeometricRepresentationSubContext.bldrs'
import IfcRepresentationContext from './IfcRepresentationContext.bldrs'
import IfcLightSource from './IfcLightSource.bldrs'
import IfcOneDirectionRepeatFactor from './IfcOneDirectionRepeatFactor.bldrs'
import IfcPlanarExtent from './IfcPlanarExtent.bldrs'
import IfcSectionedSpine from './IfcSectionedSpine.bldrs'
import IfcShellBasedSurfaceModel from './IfcShellBasedSurfaceModel.bldrs'
import IfcTextLiteral from './IfcTextLiteral.bldrs'
import IfcVector from './IfcVector.bldrs'
import IfcRepresentationItem from './IfcRepresentationItem.bldrs'
import IfcGrid from './IfcGrid.bldrs'
import IfcGridAxis from './IfcGridAxis.bldrs'
import IfcGridPlacement from './IfcGridPlacement.bldrs'
import IfcObjectPlacement from './IfcObjectPlacement.bldrs'
import IfcInventory from './IfcInventory.bldrs'
import IfcStructuralLoadGroup from './IfcStructuralLoadGroup.bldrs'
import IfcStructuralResultGroup from './IfcStructuralResultGroup.bldrs'
import IfcZone from './IfcZone.bldrs'
import IfcPolygonalBoundedHalfSpace from './IfcPolygonalBoundedHalfSpace.bldrs'
import IfcHygroscopicMaterialProperties from './IfcHygroscopicMaterialProperties.bldrs'
import IfcImageTexture from './IfcImageTexture.bldrs'
import IfcIrregularTimeSeries from './IfcIrregularTimeSeries.bldrs'
import IfcTimeSeries from './IfcTimeSeries.bldrs'
import IfcIrregularTimeSeriesValue from './IfcIrregularTimeSeriesValue.bldrs'
import IfcLShapeProfileDef from './IfcLShapeProfileDef.bldrs'
import IfcLibraryInformation from './IfcLibraryInformation.bldrs'
import IfcLightDistributionData from './IfcLightDistributionData.bldrs'
import IfcLightIntensityDistribution from './IfcLightIntensityDistribution.bldrs'
import IfcLightSourceAmbient from './IfcLightSourceAmbient.bldrs'
import IfcLightSourceDirectional from './IfcLightSourceDirectional.bldrs'
import IfcLightSourceGoniometric from './IfcLightSourceGoniometric.bldrs'
import IfcLightSourcePositional from './IfcLightSourcePositional.bldrs'
import IfcLightSourceSpot from './IfcLightSourceSpot.bldrs'
import IfcLocalPlacement from './IfcLocalPlacement.bldrs'
import IfcLocalTime from './IfcLocalTime.bldrs'
import IfcPolyLoop from './IfcPolyLoop.bldrs'
import IfcVertexLoop from './IfcVertexLoop.bldrs'
import IfcMappedItem from './IfcMappedItem.bldrs'
import IfcMaterial from './IfcMaterial.bldrs'
import IfcMaterialClassificationRelationship from './IfcMaterialClassificationRelationship.bldrs'
import IfcMaterialDefinitionRepresentation from './IfcMaterialDefinitionRepresentation.bldrs'
import IfcProductRepresentation from './IfcProductRepresentation.bldrs'
import IfcMaterialLayer from './IfcMaterialLayer.bldrs'
import IfcMaterialLayerSet from './IfcMaterialLayerSet.bldrs'
import IfcMaterialLayerSetUsage from './IfcMaterialLayerSetUsage.bldrs'
import IfcMaterialList from './IfcMaterialList.bldrs'
import IfcMechanicalMaterialProperties from './IfcMechanicalMaterialProperties.bldrs'
import IfcOpticalMaterialProperties from './IfcOpticalMaterialProperties.bldrs'
import IfcProductsOfCombustionProperties from './IfcProductsOfCombustionProperties.bldrs'
import IfcThermalMaterialProperties from './IfcThermalMaterialProperties.bldrs'
import IfcWaterProperties from './IfcWaterProperties.bldrs'
import IfcMeasureWithUnit from './IfcMeasureWithUnit.bldrs'
import IfcMechanicalConcreteMaterialProperties from './IfcMechanicalConcreteMaterialProperties.bldrs'
import IfcMechanicalSteelMaterialProperties from './IfcMechanicalSteelMaterialProperties.bldrs'
import IfcMonetaryUnit from './IfcMonetaryUnit.bldrs'
import IfcMove from './IfcMove.bldrs'
import IfcTask from './IfcTask.bldrs'
import IfcSIUnit from './IfcSIUnit.bldrs'
import IfcProcess from './IfcProcess.bldrs'
import IfcProject from './IfcProject.bldrs'
import IfcObjectDefinition from './IfcObjectDefinition.bldrs'
import IfcTypeObject from './IfcTypeObject.bldrs'
import IfcRoot from './IfcRoot.bldrs'
import IfcTwoDirectionRepeatFactor from './IfcTwoDirectionRepeatFactor.bldrs'
import IfcOrderAction from './IfcOrderAction.bldrs'
import IfcOrganization from './IfcOrganization.bldrs'
import IfcOrganizationRelationship from './IfcOrganizationRelationship.bldrs'
import IfcOwnerHistory from './IfcOwnerHistory.bldrs'
import IfcRectangleProfileDef from './IfcRectangleProfileDef.bldrs'
import IfcTShapeProfileDef from './IfcTShapeProfileDef.bldrs'
import IfcTrapeziumProfileDef from './IfcTrapeziumProfileDef.bldrs'
import IfcUShapeProfileDef from './IfcUShapeProfileDef.bldrs'
import IfcZShapeProfileDef from './IfcZShapeProfileDef.bldrs'
import IfcPath from './IfcPath.bldrs'
import IfcPermeableCoveringProperties from './IfcPermeableCoveringProperties.bldrs'
import IfcPerson from './IfcPerson.bldrs'
import IfcPersonAndOrganization from './IfcPersonAndOrganization.bldrs'
import IfcPhysicalComplexQuantity from './IfcPhysicalComplexQuantity.bldrs'
import IfcPhysicalQuantity from './IfcPhysicalQuantity.bldrs'
import IfcPhysicalSimpleQuantity from './IfcPhysicalSimpleQuantity.bldrs'
import IfcQuantityArea from './IfcQuantityArea.bldrs'
import IfcQuantityCount from './IfcQuantityCount.bldrs'
import IfcQuantityLength from './IfcQuantityLength.bldrs'
import IfcQuantityTime from './IfcQuantityTime.bldrs'
import IfcQuantityVolume from './IfcQuantityVolume.bldrs'
import IfcQuantityWeight from './IfcQuantityWeight.bldrs'
import IfcPixelTexture from './IfcPixelTexture.bldrs'
import IfcPlanarBox from './IfcPlanarBox.bldrs'
import IfcPointOnCurve from './IfcPointOnCurve.bldrs'
import IfcPointOnSurface from './IfcPointOnSurface.bldrs'
import IfcPreDefinedItem from './IfcPreDefinedItem.bldrs'
import IfcPreDefinedDimensionSymbol from './IfcPreDefinedDimensionSymbol.bldrs'
import IfcPreDefinedSymbol from './IfcPreDefinedSymbol.bldrs'
import IfcPreDefinedPointMarkerSymbol from './IfcPreDefinedPointMarkerSymbol.bldrs'
import IfcPreDefinedTerminatorSymbol from './IfcPreDefinedTerminatorSymbol.bldrs'
import IfcTextStyleFontModel from './IfcTextStyleFontModel.bldrs'
import IfcPresentationLayerAssignment from './IfcPresentationLayerAssignment.bldrs'
import IfcPresentationLayerWithStyle from './IfcPresentationLayerWithStyle.bldrs'
import IfcSurfaceStyle from './IfcSurfaceStyle.bldrs'
import IfcSymbolStyle from './IfcSymbolStyle.bldrs'
import IfcTextStyle from './IfcTextStyle.bldrs'
import IfcPresentationStyleAssignment from './IfcPresentationStyleAssignment.bldrs'
import IfcProcedure from './IfcProcedure.bldrs'
import IfcProxy from './IfcProxy.bldrs'
import IfcStructuralActivity from './IfcStructuralActivity.bldrs'
import IfcStructuralItem from './IfcStructuralItem.bldrs'
import IfcProductDefinitionShape from './IfcProductDefinitionShape.bldrs'
import IfcRibPlateProfileProperties from './IfcRibPlateProfileProperties.bldrs'
import IfcSimpleProperty from './IfcSimpleProperty.bldrs'
import IfcPropertyBoundedValue from './IfcPropertyBoundedValue.bldrs'
import IfcPropertyConstraintRelationship from './IfcPropertyConstraintRelationship.bldrs'
import IfcPropertyDefinition from './IfcPropertyDefinition.bldrs'
import IfcPropertyDependencyRelationship from './IfcPropertyDependencyRelationship.bldrs'
import IfcPropertyEnumeratedValue from './IfcPropertyEnumeratedValue.bldrs'
import IfcPropertyEnumeration from './IfcPropertyEnumeration.bldrs'
import IfcPropertyListValue from './IfcPropertyListValue.bldrs'
import IfcPropertyReferenceValue from './IfcPropertyReferenceValue.bldrs'
import IfcPropertySet from './IfcPropertySet.bldrs'
import IfcReinforcementDefinitionProperties from './IfcReinforcementDefinitionProperties.bldrs'
import IfcServiceLifeFactor from './IfcServiceLifeFactor.bldrs'
import IfcSoundProperties from './IfcSoundProperties.bldrs'
import IfcSoundValue from './IfcSoundValue.bldrs'
import IfcSpaceThermalLoadProperties from './IfcSpaceThermalLoadProperties.bldrs'
import IfcWindowLiningProperties from './IfcWindowLiningProperties.bldrs'
import IfcWindowPanelProperties from './IfcWindowPanelProperties.bldrs'
import IfcPropertySingleValue from './IfcPropertySingleValue.bldrs'
import IfcPropertyTableValue from './IfcPropertyTableValue.bldrs'
import IfcRectangleHollowProfileDef from './IfcRectangleHollowProfileDef.bldrs'
import IfcRoundedRectangleProfileDef from './IfcRoundedRectangleProfileDef.bldrs'
import IfcReferencesValueDocument from './IfcReferencesValueDocument.bldrs'
import IfcRegularTimeSeries from './IfcRegularTimeSeries.bldrs'
import IfcReinforcementBarProperties from './IfcReinforcementBarProperties.bldrs'
import IfcReinforcingBar from './IfcReinforcingBar.bldrs'
import IfcReinforcingMesh from './IfcReinforcingMesh.bldrs'
import IfcTendon from './IfcTendon.bldrs'
import IfcTendonAnchor from './IfcTendonAnchor.bldrs'
import IfcRelAggregates from './IfcRelAggregates.bldrs'
import IfcRelDecomposes from './IfcRelDecomposes.bldrs'
import IfcRelAssigns from './IfcRelAssigns.bldrs'
import IfcRelAssignsToActor from './IfcRelAssignsToActor.bldrs'
import IfcRelAssignsToControl from './IfcRelAssignsToControl.bldrs'
import IfcRelAssignsToGroup from './IfcRelAssignsToGroup.bldrs'
import IfcRelAssignsToProcess from './IfcRelAssignsToProcess.bldrs'
import IfcRelAssignsToProduct from './IfcRelAssignsToProduct.bldrs'
import IfcRelAssignsToResource from './IfcRelAssignsToResource.bldrs'
import IfcRelationship from './IfcRelationship.bldrs'
import IfcRelAssignsTasks from './IfcRelAssignsTasks.bldrs'
import IfcRelOccupiesSpaces from './IfcRelOccupiesSpaces.bldrs'
import IfcRelAssignsToProjectOrder from './IfcRelAssignsToProjectOrder.bldrs'
import IfcRelSchedulesCostItems from './IfcRelSchedulesCostItems.bldrs'
import IfcRelAssociates from './IfcRelAssociates.bldrs'
import IfcRelAssociatesAppliedValue from './IfcRelAssociatesAppliedValue.bldrs'
import IfcRelAssociatesApproval from './IfcRelAssociatesApproval.bldrs'
import IfcRelAssociatesClassification from './IfcRelAssociatesClassification.bldrs'
import IfcRelAssociatesConstraint from './IfcRelAssociatesConstraint.bldrs'
import IfcRelAssociatesDocument from './IfcRelAssociatesDocument.bldrs'
import IfcRelAssociatesLibrary from './IfcRelAssociatesLibrary.bldrs'
import IfcRelAssociatesMaterial from './IfcRelAssociatesMaterial.bldrs'
import IfcRelAssociatesProfileProperties from './IfcRelAssociatesProfileProperties.bldrs'
import IfcRelConnects from './IfcRelConnects.bldrs'
import IfcRelConnectsElements from './IfcRelConnectsElements.bldrs'
import IfcRelConnectsPortToElement from './IfcRelConnectsPortToElement.bldrs'
import IfcRelConnectsPorts from './IfcRelConnectsPorts.bldrs'
import IfcRelConnectsStructuralActivity from './IfcRelConnectsStructuralActivity.bldrs'
import IfcRelConnectsStructuralElement from './IfcRelConnectsStructuralElement.bldrs'
import IfcRelConnectsStructuralMember from './IfcRelConnectsStructuralMember.bldrs'
import IfcRelContainedInSpatialStructure from './IfcRelContainedInSpatialStructure.bldrs'
import IfcRelCoversBldgElements from './IfcRelCoversBldgElements.bldrs'
import IfcRelCoversSpaces from './IfcRelCoversSpaces.bldrs'
import IfcRelFillsElement from './IfcRelFillsElement.bldrs'
import IfcRelFlowControlElements from './IfcRelFlowControlElements.bldrs'
import IfcRelInteractionRequirements from './IfcRelInteractionRequirements.bldrs'
import IfcRelProjectsElement from './IfcRelProjectsElement.bldrs'
import IfcRelReferencedInSpatialStructure from './IfcRelReferencedInSpatialStructure.bldrs'
import IfcRelSequence from './IfcRelSequence.bldrs'
import IfcRelServicesBuildings from './IfcRelServicesBuildings.bldrs'
import IfcRelSpaceBoundary from './IfcRelSpaceBoundary.bldrs'
import IfcRelVoidsElement from './IfcRelVoidsElement.bldrs'
import IfcRelConnectsPathElements from './IfcRelConnectsPathElements.bldrs'
import IfcRelConnectsWithRealizingElements from './IfcRelConnectsWithRealizingElements.bldrs'
import IfcRelConnectsWithEccentricity from './IfcRelConnectsWithEccentricity.bldrs'
import IfcRelNests from './IfcRelNests.bldrs'
import IfcRelDefines from './IfcRelDefines.bldrs'
import IfcRelDefinesByProperties from './IfcRelDefinesByProperties.bldrs'
import IfcRelDefinesByType from './IfcRelDefinesByType.bldrs'
import IfcRelOverridesProperties from './IfcRelOverridesProperties.bldrs'
import IfcRelaxation from './IfcRelaxation.bldrs'
import IfcRepresentation from './IfcRepresentation.bldrs'
import IfcShapeModel from './IfcShapeModel.bldrs'
import IfcStyleModel from './IfcStyleModel.bldrs'
import IfcRepresentationMap from './IfcRepresentationMap.bldrs'
import IfcRevolvedAreaSolid from './IfcRevolvedAreaSolid.bldrs'
import IfcSectionProperties from './IfcSectionProperties.bldrs'
import IfcSectionReinforcementProperties from './IfcSectionReinforcementProperties.bldrs'
import IfcShapeAspect from './IfcShapeAspect.bldrs'
import IfcShapeRepresentation from './IfcShapeRepresentation.bldrs'
import IfcTopologyRepresentation from './IfcTopologyRepresentation.bldrs'
import IfcSite from './IfcSite.bldrs'
import IfcSlippageConnectionCondition from './IfcSlippageConnectionCondition.bldrs'
import IfcSweptDiskSolid from './IfcSweptDiskSolid.bldrs'
import IfcSpace from './IfcSpace.bldrs'
import IfcSpaceType from './IfcSpaceType.bldrs'
import IfcStructuralAction from './IfcStructuralAction.bldrs'
import IfcStructuralLinearAction from './IfcStructuralLinearAction.bldrs'
import IfcStructuralPlanarAction from './IfcStructuralPlanarAction.bldrs'
import IfcStructuralPointAction from './IfcStructuralPointAction.bldrs'
import IfcStructuralReaction from './IfcStructuralReaction.bldrs'
import IfcStructuralAnalysisModel from './IfcStructuralAnalysisModel.bldrs'
import IfcStructuralConnection from './IfcStructuralConnection.bldrs'
import IfcStructuralCurveConnection from './IfcStructuralCurveConnection.bldrs'
import IfcStructuralPointConnection from './IfcStructuralPointConnection.bldrs'
import IfcStructuralSurfaceConnection from './IfcStructuralSurfaceConnection.bldrs'
import IfcStructuralCurveMember from './IfcStructuralCurveMember.bldrs'
import IfcStructuralCurveMemberVarying from './IfcStructuralCurveMemberVarying.bldrs'
import IfcStructuralMember from './IfcStructuralMember.bldrs'
import IfcStructuralLinearActionVarying from './IfcStructuralLinearActionVarying.bldrs'
import IfcStructuralLoad from './IfcStructuralLoad.bldrs'
import IfcStructuralLoadStatic from './IfcStructuralLoadStatic.bldrs'
import IfcStructuralLoadLinearForce from './IfcStructuralLoadLinearForce.bldrs'
import IfcStructuralLoadPlanarForce from './IfcStructuralLoadPlanarForce.bldrs'
import IfcStructuralLoadSingleDisplacement from './IfcStructuralLoadSingleDisplacement.bldrs'
import IfcStructuralLoadSingleDisplacementDistortion from './IfcStructuralLoadSingleDisplacementDistortion.bldrs'
import IfcStructuralLoadSingleForce from './IfcStructuralLoadSingleForce.bldrs'
import IfcStructuralLoadSingleForceWarping from './IfcStructuralLoadSingleForceWarping.bldrs'
import IfcStructuralLoadTemperature from './IfcStructuralLoadTemperature.bldrs'
import IfcStructuralSurfaceMember from './IfcStructuralSurfaceMember.bldrs'
import IfcStructuralPlanarActionVarying from './IfcStructuralPlanarActionVarying.bldrs'
import IfcStructuralPointReaction from './IfcStructuralPointReaction.bldrs'
import IfcStructuralSteelProfileProperties from './IfcStructuralSteelProfileProperties.bldrs'
import IfcStructuralSurfaceMemberVarying from './IfcStructuralSurfaceMemberVarying.bldrs'
import IfcStyledRepresentation from './IfcStyledRepresentation.bldrs'
import IfcSweptSurface from './IfcSweptSurface.bldrs'
import IfcSurfaceCurveSweptAreaSolid from './IfcSurfaceCurveSweptAreaSolid.bldrs'
import IfcSurfaceOfLinearExtrusion from './IfcSurfaceOfLinearExtrusion.bldrs'
import IfcSurfaceOfRevolution from './IfcSurfaceOfRevolution.bldrs'
import IfcSurfaceStyleLighting from './IfcSurfaceStyleLighting.bldrs'
import IfcSurfaceStyleRefraction from './IfcSurfaceStyleRefraction.bldrs'
import IfcSurfaceStyleRendering from './IfcSurfaceStyleRendering.bldrs'
import IfcSurfaceStyleShading from './IfcSurfaceStyleShading.bldrs'
import IfcSurfaceStyleWithTextures from './IfcSurfaceStyleWithTextures.bldrs'
import IfcTable from './IfcTable.bldrs'
import IfcTableRow from './IfcTableRow.bldrs'
import IfcTextLiteralWithExtent from './IfcTextLiteralWithExtent.bldrs'
import IfcTextStyleForDefinedFont from './IfcTextStyleForDefinedFont.bldrs'
import IfcTextStyleTextModel from './IfcTextStyleTextModel.bldrs'
import IfcTextStyleWithBoxCharacteristics from './IfcTextStyleWithBoxCharacteristics.bldrs'
import IfcTextureCoordinate from './IfcTextureCoordinate.bldrs'
import IfcTextureCoordinateGenerator from './IfcTextureCoordinateGenerator.bldrs'
import IfcTextureMap from './IfcTextureMap.bldrs'
import IfcTextureVertex from './IfcTextureVertex.bldrs'
import IfcTimeSeriesReferenceRelationship from './IfcTimeSeriesReferenceRelationship.bldrs'
import IfcTimeSeriesValue from './IfcTimeSeriesValue.bldrs'
import IfcVertex from './IfcVertex.bldrs'
import IfcWindowStyle from './IfcWindowStyle.bldrs'
import IfcUnitAssignment from './IfcUnitAssignment.bldrs'
import IfcVertexPoint from './IfcVertexPoint.bldrs'
import IfcVertexBasedTextureMap from './IfcVertexBasedTextureMap.bldrs'
import IfcVirtualGridIntersection from './IfcVirtualGridIntersection.bldrs'
import IfcWallStandardCase from './IfcWallStandardCase.bldrs'
import IfcWorkPlan from './IfcWorkPlan.bldrs'
import IfcWorkSchedule from './IfcWorkSchedule.bldrs'


export default class ModelIfc
{
	public readonly components : IfcComponents = {};

	public readonly entities : Map< IfcGloballyUniqueId, Entity< IfcComponentTypeNames > > = new Map< IfcGloballyUniqueId, Entity< IfcComponentTypeNames > >();
}

export interface IfcComponents
{
	Ifc2DCompositeCurve? : Map< IfcGloballyUniqueId, Ifc2DCompositeCurve>;

	IfcCompositeCurve? : Map< IfcGloballyUniqueId, IfcCompositeCurve>;

	IfcActionRequest? : Map< IfcGloballyUniqueId, IfcActionRequest>;

	IfcControl? : Map< IfcGloballyUniqueId, IfcControl>;

	IfcActor? : Map< IfcGloballyUniqueId, IfcActor>;

	IfcOccupant? : Map< IfcGloballyUniqueId, IfcOccupant>;

	IfcObject? : Map< IfcGloballyUniqueId, IfcObject>;

	IfcActorRole? : Map< IfcGloballyUniqueId, IfcActorRole>;

	IfcActuatorType? : Map< IfcGloballyUniqueId, IfcActuatorType>;

	IfcDistributionControlElementType? : Map< IfcGloballyUniqueId, IfcDistributionControlElementType>;

	IfcAddress? : Map< IfcGloballyUniqueId, IfcAddress>;

	IfcPostalAddress? : Map< IfcGloballyUniqueId, IfcPostalAddress>;

	IfcTelecomAddress? : Map< IfcGloballyUniqueId, IfcTelecomAddress>;

	IfcAirTerminalBoxType? : Map< IfcGloballyUniqueId, IfcAirTerminalBoxType>;

	IfcFlowControllerType? : Map< IfcGloballyUniqueId, IfcFlowControllerType>;

	IfcAirTerminalType? : Map< IfcGloballyUniqueId, IfcAirTerminalType>;

	IfcFlowTerminalType? : Map< IfcGloballyUniqueId, IfcFlowTerminalType>;

	IfcAirToAirHeatRecoveryType? : Map< IfcGloballyUniqueId, IfcAirToAirHeatRecoveryType>;

	IfcEnergyConversionDeviceType? : Map< IfcGloballyUniqueId, IfcEnergyConversionDeviceType>;

	IfcAlarmType? : Map< IfcGloballyUniqueId, IfcAlarmType>;

	IfcAngularDimension? : Map< IfcGloballyUniqueId, IfcAngularDimension>;

	IfcDimensionCurveDirectedCallout? : Map< IfcGloballyUniqueId, IfcDimensionCurveDirectedCallout>;

	IfcAnnotation? : Map< IfcGloballyUniqueId, IfcAnnotation>;

	IfcProduct? : Map< IfcGloballyUniqueId, IfcProduct>;

	IfcAnnotationCurveOccurrence? : Map< IfcGloballyUniqueId, IfcAnnotationCurveOccurrence>;

	IfcDimensionCurve? : Map< IfcGloballyUniqueId, IfcDimensionCurve>;

	IfcProjectionCurve? : Map< IfcGloballyUniqueId, IfcProjectionCurve>;

	IfcAnnotationOccurrence? : Map< IfcGloballyUniqueId, IfcAnnotationOccurrence>;

	IfcAnnotationFillArea? : Map< IfcGloballyUniqueId, IfcAnnotationFillArea>;

	IfcGeometricRepresentationItem? : Map< IfcGloballyUniqueId, IfcGeometricRepresentationItem>;

	IfcAnnotationFillAreaOccurrence? : Map< IfcGloballyUniqueId, IfcAnnotationFillAreaOccurrence>;

	IfcAnnotationSurfaceOccurrence? : Map< IfcGloballyUniqueId, IfcAnnotationSurfaceOccurrence>;

	IfcAnnotationSymbolOccurrence? : Map< IfcGloballyUniqueId, IfcAnnotationSymbolOccurrence>;

	IfcAnnotationTextOccurrence? : Map< IfcGloballyUniqueId, IfcAnnotationTextOccurrence>;

	IfcStyledItem? : Map< IfcGloballyUniqueId, IfcStyledItem>;

	IfcAnnotationSurface? : Map< IfcGloballyUniqueId, IfcAnnotationSurface>;

	IfcTerminatorSymbol? : Map< IfcGloballyUniqueId, IfcTerminatorSymbol>;

	IfcApplication? : Map< IfcGloballyUniqueId, IfcApplication>;

	IfcAppliedValue? : Map< IfcGloballyUniqueId, IfcAppliedValue>;

	IfcCostValue? : Map< IfcGloballyUniqueId, IfcCostValue>;

	IfcEnvironmentalImpactValue? : Map< IfcGloballyUniqueId, IfcEnvironmentalImpactValue>;

	IfcAppliedValueRelationship? : Map< IfcGloballyUniqueId, IfcAppliedValueRelationship>;

	IfcApproval? : Map< IfcGloballyUniqueId, IfcApproval>;

	IfcApprovalActorRelationship? : Map< IfcGloballyUniqueId, IfcApprovalActorRelationship>;

	IfcApprovalPropertyRelationship? : Map< IfcGloballyUniqueId, IfcApprovalPropertyRelationship>;

	IfcApprovalRelationship? : Map< IfcGloballyUniqueId, IfcApprovalRelationship>;

	IfcArbitraryClosedProfileDef? : Map< IfcGloballyUniqueId, IfcArbitraryClosedProfileDef>;

	IfcArbitraryProfileDefWithVoids? : Map< IfcGloballyUniqueId, IfcArbitraryProfileDefWithVoids>;

	IfcProfileDef? : Map< IfcGloballyUniqueId, IfcProfileDef>;

	IfcArbitraryOpenProfileDef? : Map< IfcGloballyUniqueId, IfcArbitraryOpenProfileDef>;

	IfcCenterLineProfileDef? : Map< IfcGloballyUniqueId, IfcCenterLineProfileDef>;

	IfcAsset? : Map< IfcGloballyUniqueId, IfcAsset>;

	IfcGroup? : Map< IfcGloballyUniqueId, IfcGroup>;

	IfcAsymmetricIShapeProfileDef? : Map< IfcGloballyUniqueId, IfcAsymmetricIShapeProfileDef>;

	IfcIShapeProfileDef? : Map< IfcGloballyUniqueId, IfcIShapeProfileDef>;

	IfcAxis1Placement? : Map< IfcGloballyUniqueId, IfcAxis1Placement>;

	IfcPlacement? : Map< IfcGloballyUniqueId, IfcPlacement>;

	IfcAxis2Placement2D? : Map< IfcGloballyUniqueId, IfcAxis2Placement2D>;

	IfcAxis2Placement3D? : Map< IfcGloballyUniqueId, IfcAxis2Placement3D>;

	IfcBSplineCurve? : Map< IfcGloballyUniqueId, IfcBSplineCurve>;

	IfcBezierCurve? : Map< IfcGloballyUniqueId, IfcBezierCurve>;

	IfcBoundedCurve? : Map< IfcGloballyUniqueId, IfcBoundedCurve>;

	IfcBeam? : Map< IfcGloballyUniqueId, IfcBeam>;

	IfcBuildingElement? : Map< IfcGloballyUniqueId, IfcBuildingElement>;

	IfcBeamType? : Map< IfcGloballyUniqueId, IfcBeamType>;

	IfcBuildingElementType? : Map< IfcGloballyUniqueId, IfcBuildingElementType>;

	IfcRationalBezierCurve? : Map< IfcGloballyUniqueId, IfcRationalBezierCurve>;

	IfcBlobTexture? : Map< IfcGloballyUniqueId, IfcBlobTexture>;

	IfcSurfaceTexture? : Map< IfcGloballyUniqueId, IfcSurfaceTexture>;

	IfcBlock? : Map< IfcGloballyUniqueId, IfcBlock>;

	IfcCsgPrimitive3D? : Map< IfcGloballyUniqueId, IfcCsgPrimitive3D>;

	IfcBoilerType? : Map< IfcGloballyUniqueId, IfcBoilerType>;

	IfcBooleanClippingResult? : Map< IfcGloballyUniqueId, IfcBooleanClippingResult>;

	IfcBooleanResult? : Map< IfcGloballyUniqueId, IfcBooleanResult>;

	IfcBoundaryCondition? : Map< IfcGloballyUniqueId, IfcBoundaryCondition>;

	IfcBoundaryEdgeCondition? : Map< IfcGloballyUniqueId, IfcBoundaryEdgeCondition>;

	IfcBoundaryFaceCondition? : Map< IfcGloballyUniqueId, IfcBoundaryFaceCondition>;

	IfcBoundaryNodeCondition? : Map< IfcGloballyUniqueId, IfcBoundaryNodeCondition>;

	IfcBoundaryNodeConditionWarping? : Map< IfcGloballyUniqueId, IfcBoundaryNodeConditionWarping>;

	IfcPolyline? : Map< IfcGloballyUniqueId, IfcPolyline>;

	IfcTrimmedCurve? : Map< IfcGloballyUniqueId, IfcTrimmedCurve>;

	IfcCurve? : Map< IfcGloballyUniqueId, IfcCurve>;

	IfcBoundedSurface? : Map< IfcGloballyUniqueId, IfcBoundedSurface>;

	IfcCurveBoundedPlane? : Map< IfcGloballyUniqueId, IfcCurveBoundedPlane>;

	IfcRectangularTrimmedSurface? : Map< IfcGloballyUniqueId, IfcRectangularTrimmedSurface>;

	IfcSurface? : Map< IfcGloballyUniqueId, IfcSurface>;

	IfcBoundingBox? : Map< IfcGloballyUniqueId, IfcBoundingBox>;

	IfcBoxedHalfSpace? : Map< IfcGloballyUniqueId, IfcBoxedHalfSpace>;

	IfcHalfSpaceSolid? : Map< IfcGloballyUniqueId, IfcHalfSpaceSolid>;

	IfcBuilding? : Map< IfcGloballyUniqueId, IfcBuilding>;

	IfcSpatialStructureElement? : Map< IfcGloballyUniqueId, IfcSpatialStructureElement>;

	IfcBuildingElementComponent? : Map< IfcGloballyUniqueId, IfcBuildingElementComponent>;

	IfcBuildingElementProxy? : Map< IfcGloballyUniqueId, IfcBuildingElementProxy>;

	IfcColumn? : Map< IfcGloballyUniqueId, IfcColumn>;

	IfcCovering? : Map< IfcGloballyUniqueId, IfcCovering>;

	IfcCurtainWall? : Map< IfcGloballyUniqueId, IfcCurtainWall>;

	IfcDoor? : Map< IfcGloballyUniqueId, IfcDoor>;

	IfcFooting? : Map< IfcGloballyUniqueId, IfcFooting>;

	IfcMember? : Map< IfcGloballyUniqueId, IfcMember>;

	IfcPile? : Map< IfcGloballyUniqueId, IfcPile>;

	IfcPlate? : Map< IfcGloballyUniqueId, IfcPlate>;

	IfcRailing? : Map< IfcGloballyUniqueId, IfcRailing>;

	IfcRamp? : Map< IfcGloballyUniqueId, IfcRamp>;

	IfcRampFlight? : Map< IfcGloballyUniqueId, IfcRampFlight>;

	IfcRoof? : Map< IfcGloballyUniqueId, IfcRoof>;

	IfcSlab? : Map< IfcGloballyUniqueId, IfcSlab>;

	IfcStair? : Map< IfcGloballyUniqueId, IfcStair>;

	IfcStairFlight? : Map< IfcGloballyUniqueId, IfcStairFlight>;

	IfcWall? : Map< IfcGloballyUniqueId, IfcWall>;

	IfcWindow? : Map< IfcGloballyUniqueId, IfcWindow>;

	IfcElement? : Map< IfcGloballyUniqueId, IfcElement>;

	IfcBuildingElementPart? : Map< IfcGloballyUniqueId, IfcBuildingElementPart>;

	IfcReinforcingElement? : Map< IfcGloballyUniqueId, IfcReinforcingElement>;

	IfcBuildingElementProxyType? : Map< IfcGloballyUniqueId, IfcBuildingElementProxyType>;

	IfcColumnType? : Map< IfcGloballyUniqueId, IfcColumnType>;

	IfcCoveringType? : Map< IfcGloballyUniqueId, IfcCoveringType>;

	IfcCurtainWallType? : Map< IfcGloballyUniqueId, IfcCurtainWallType>;

	IfcMemberType? : Map< IfcGloballyUniqueId, IfcMemberType>;

	IfcPlateType? : Map< IfcGloballyUniqueId, IfcPlateType>;

	IfcRailingType? : Map< IfcGloballyUniqueId, IfcRailingType>;

	IfcRampFlightType? : Map< IfcGloballyUniqueId, IfcRampFlightType>;

	IfcSlabType? : Map< IfcGloballyUniqueId, IfcSlabType>;

	IfcStairFlightType? : Map< IfcGloballyUniqueId, IfcStairFlightType>;

	IfcWallType? : Map< IfcGloballyUniqueId, IfcWallType>;

	IfcElementType? : Map< IfcGloballyUniqueId, IfcElementType>;

	IfcBuildingStorey? : Map< IfcGloballyUniqueId, IfcBuildingStorey>;

	IfcCShapeProfileDef? : Map< IfcGloballyUniqueId, IfcCShapeProfileDef>;

	IfcParameterizedProfileDef? : Map< IfcGloballyUniqueId, IfcParameterizedProfileDef>;

	IfcCableCarrierFittingType? : Map< IfcGloballyUniqueId, IfcCableCarrierFittingType>;

	IfcFlowFittingType? : Map< IfcGloballyUniqueId, IfcFlowFittingType>;

	IfcCableCarrierSegmentType? : Map< IfcGloballyUniqueId, IfcCableCarrierSegmentType>;

	IfcFlowSegmentType? : Map< IfcGloballyUniqueId, IfcFlowSegmentType>;

	IfcCableSegmentType? : Map< IfcGloballyUniqueId, IfcCableSegmentType>;

	IfcCalendarDate? : Map< IfcGloballyUniqueId, IfcCalendarDate>;

	IfcCartesianPoint? : Map< IfcGloballyUniqueId, IfcCartesianPoint>;

	IfcPoint? : Map< IfcGloballyUniqueId, IfcPoint>;

	IfcCartesianTransformationOperator? : Map< IfcGloballyUniqueId, IfcCartesianTransformationOperator>;

	IfcCartesianTransformationOperator2D? : Map< IfcGloballyUniqueId, IfcCartesianTransformationOperator2D>;

	IfcCartesianTransformationOperator3D? : Map< IfcGloballyUniqueId, IfcCartesianTransformationOperator3D>;

	IfcCartesianTransformationOperator2DnonUniform? : Map< IfcGloballyUniqueId, IfcCartesianTransformationOperator2DnonUniform>;

	IfcCartesianTransformationOperator3DnonUniform? : Map< IfcGloballyUniqueId, IfcCartesianTransformationOperator3DnonUniform>;

	IfcChamferEdgeFeature? : Map< IfcGloballyUniqueId, IfcChamferEdgeFeature>;

	IfcEdgeFeature? : Map< IfcGloballyUniqueId, IfcEdgeFeature>;

	IfcChillerType? : Map< IfcGloballyUniqueId, IfcChillerType>;

	IfcCircle? : Map< IfcGloballyUniqueId, IfcCircle>;

	IfcConic? : Map< IfcGloballyUniqueId, IfcConic>;

	IfcCircleHollowProfileDef? : Map< IfcGloballyUniqueId, IfcCircleHollowProfileDef>;

	IfcCircleProfileDef? : Map< IfcGloballyUniqueId, IfcCircleProfileDef>;

	IfcClassification? : Map< IfcGloballyUniqueId, IfcClassification>;

	IfcClassificationItem? : Map< IfcGloballyUniqueId, IfcClassificationItem>;

	IfcClassificationItemRelationship? : Map< IfcGloballyUniqueId, IfcClassificationItemRelationship>;

	IfcClassificationNotation? : Map< IfcGloballyUniqueId, IfcClassificationNotation>;

	IfcClassificationNotationFacet? : Map< IfcGloballyUniqueId, IfcClassificationNotationFacet>;

	IfcClassificationReference? : Map< IfcGloballyUniqueId, IfcClassificationReference>;

	IfcExternalReference? : Map< IfcGloballyUniqueId, IfcExternalReference>;

	IfcClosedShell? : Map< IfcGloballyUniqueId, IfcClosedShell>;

	IfcConnectedFaceSet? : Map< IfcGloballyUniqueId, IfcConnectedFaceSet>;

	IfcCoilType? : Map< IfcGloballyUniqueId, IfcCoilType>;

	IfcColourRgb? : Map< IfcGloballyUniqueId, IfcColourRgb>;

	IfcColourSpecification? : Map< IfcGloballyUniqueId, IfcColourSpecification>;

	IfcComplexProperty? : Map< IfcGloballyUniqueId, IfcComplexProperty>;

	IfcProperty? : Map< IfcGloballyUniqueId, IfcProperty>;

	IfcCompositeCurveSegment? : Map< IfcGloballyUniqueId, IfcCompositeCurveSegment>;

	IfcCompositeProfileDef? : Map< IfcGloballyUniqueId, IfcCompositeProfileDef>;

	IfcCompressorType? : Map< IfcGloballyUniqueId, IfcCompressorType>;

	IfcFlowMovingDeviceType? : Map< IfcGloballyUniqueId, IfcFlowMovingDeviceType>;

	IfcCondenserType? : Map< IfcGloballyUniqueId, IfcCondenserType>;

	IfcCondition? : Map< IfcGloballyUniqueId, IfcCondition>;

	IfcConditionCriterion? : Map< IfcGloballyUniqueId, IfcConditionCriterion>;

	IfcEllipse? : Map< IfcGloballyUniqueId, IfcEllipse>;

	IfcOpenShell? : Map< IfcGloballyUniqueId, IfcOpenShell>;

	IfcTopologicalRepresentationItem? : Map< IfcGloballyUniqueId, IfcTopologicalRepresentationItem>;

	IfcConnectionCurveGeometry? : Map< IfcGloballyUniqueId, IfcConnectionCurveGeometry>;

	IfcConnectionGeometry? : Map< IfcGloballyUniqueId, IfcConnectionGeometry>;

	IfcConnectionPointGeometry? : Map< IfcGloballyUniqueId, IfcConnectionPointGeometry>;

	IfcConnectionPortGeometry? : Map< IfcGloballyUniqueId, IfcConnectionPortGeometry>;

	IfcConnectionSurfaceGeometry? : Map< IfcGloballyUniqueId, IfcConnectionSurfaceGeometry>;

	IfcConnectionPointEccentricity? : Map< IfcGloballyUniqueId, IfcConnectionPointEccentricity>;

	IfcConstraint? : Map< IfcGloballyUniqueId, IfcConstraint>;

	IfcMetric? : Map< IfcGloballyUniqueId, IfcMetric>;

	IfcObjective? : Map< IfcGloballyUniqueId, IfcObjective>;

	IfcConstraintAggregationRelationship? : Map< IfcGloballyUniqueId, IfcConstraintAggregationRelationship>;

	IfcConstraintClassificationRelationship? : Map< IfcGloballyUniqueId, IfcConstraintClassificationRelationship>;

	IfcConstraintRelationship? : Map< IfcGloballyUniqueId, IfcConstraintRelationship>;

	IfcConstructionEquipmentResource? : Map< IfcGloballyUniqueId, IfcConstructionEquipmentResource>;

	IfcConstructionResource? : Map< IfcGloballyUniqueId, IfcConstructionResource>;

	IfcConstructionMaterialResource? : Map< IfcGloballyUniqueId, IfcConstructionMaterialResource>;

	IfcConstructionProductResource? : Map< IfcGloballyUniqueId, IfcConstructionProductResource>;

	IfcCrewResource? : Map< IfcGloballyUniqueId, IfcCrewResource>;

	IfcLaborResource? : Map< IfcGloballyUniqueId, IfcLaborResource>;

	IfcSubContractResource? : Map< IfcGloballyUniqueId, IfcSubContractResource>;

	IfcResource? : Map< IfcGloballyUniqueId, IfcResource>;

	IfcContextDependentUnit? : Map< IfcGloballyUniqueId, IfcContextDependentUnit>;

	IfcNamedUnit? : Map< IfcGloballyUniqueId, IfcNamedUnit>;

	IfcCostItem? : Map< IfcGloballyUniqueId, IfcCostItem>;

	IfcCostSchedule? : Map< IfcGloballyUniqueId, IfcCostSchedule>;

	IfcEquipmentStandard? : Map< IfcGloballyUniqueId, IfcEquipmentStandard>;

	IfcFurnitureStandard? : Map< IfcGloballyUniqueId, IfcFurnitureStandard>;

	IfcPerformanceHistory? : Map< IfcGloballyUniqueId, IfcPerformanceHistory>;

	IfcPermit? : Map< IfcGloballyUniqueId, IfcPermit>;

	IfcProjectOrder? : Map< IfcGloballyUniqueId, IfcProjectOrder>;

	IfcProjectOrderRecord? : Map< IfcGloballyUniqueId, IfcProjectOrderRecord>;

	IfcScheduleTimeControl? : Map< IfcGloballyUniqueId, IfcScheduleTimeControl>;

	IfcServiceLife? : Map< IfcGloballyUniqueId, IfcServiceLife>;

	IfcSpaceProgram? : Map< IfcGloballyUniqueId, IfcSpaceProgram>;

	IfcTimeSeriesSchedule? : Map< IfcGloballyUniqueId, IfcTimeSeriesSchedule>;

	IfcWorkControl? : Map< IfcGloballyUniqueId, IfcWorkControl>;

	IfcControllerType? : Map< IfcGloballyUniqueId, IfcControllerType>;

	IfcConversionBasedUnit? : Map< IfcGloballyUniqueId, IfcConversionBasedUnit>;

	IfcCooledBeamType? : Map< IfcGloballyUniqueId, IfcCooledBeamType>;

	IfcCoolingTowerType? : Map< IfcGloballyUniqueId, IfcCoolingTowerType>;

	IfcCoordinatedUniversalTimeOffset? : Map< IfcGloballyUniqueId, IfcCoordinatedUniversalTimeOffset>;

	IfcCraneRailAShapeProfileDef? : Map< IfcGloballyUniqueId, IfcCraneRailAShapeProfileDef>;

	IfcCraneRailFShapeProfileDef? : Map< IfcGloballyUniqueId, IfcCraneRailFShapeProfileDef>;

	IfcRectangularPyramid? : Map< IfcGloballyUniqueId, IfcRectangularPyramid>;

	IfcRightCircularCone? : Map< IfcGloballyUniqueId, IfcRightCircularCone>;

	IfcRightCircularCylinder? : Map< IfcGloballyUniqueId, IfcRightCircularCylinder>;

	IfcSphere? : Map< IfcGloballyUniqueId, IfcSphere>;

	IfcCsgSolid? : Map< IfcGloballyUniqueId, IfcCsgSolid>;

	IfcSolidModel? : Map< IfcGloballyUniqueId, IfcSolidModel>;

	IfcCurrencyRelationship? : Map< IfcGloballyUniqueId, IfcCurrencyRelationship>;

	IfcLine? : Map< IfcGloballyUniqueId, IfcLine>;

	IfcOffsetCurve2D? : Map< IfcGloballyUniqueId, IfcOffsetCurve2D>;

	IfcOffsetCurve3D? : Map< IfcGloballyUniqueId, IfcOffsetCurve3D>;

	IfcCurveStyle? : Map< IfcGloballyUniqueId, IfcCurveStyle>;

	IfcPresentationStyle? : Map< IfcGloballyUniqueId, IfcPresentationStyle>;

	IfcCurveStyleFont? : Map< IfcGloballyUniqueId, IfcCurveStyleFont>;

	IfcCurveStyleFontAndScaling? : Map< IfcGloballyUniqueId, IfcCurveStyleFontAndScaling>;

	IfcCurveStyleFontPattern? : Map< IfcGloballyUniqueId, IfcCurveStyleFontPattern>;

	IfcDamperType? : Map< IfcGloballyUniqueId, IfcDamperType>;

	IfcDateAndTime? : Map< IfcGloballyUniqueId, IfcDateAndTime>;

	IfcDefinedSymbol? : Map< IfcGloballyUniqueId, IfcDefinedSymbol>;

	IfcDerivedProfileDef? : Map< IfcGloballyUniqueId, IfcDerivedProfileDef>;

	IfcDerivedUnit? : Map< IfcGloballyUniqueId, IfcDerivedUnit>;

	IfcDerivedUnitElement? : Map< IfcGloballyUniqueId, IfcDerivedUnitElement>;

	IfcDiameterDimension? : Map< IfcGloballyUniqueId, IfcDiameterDimension>;

	IfcDimensionCalloutRelationship? : Map< IfcGloballyUniqueId, IfcDimensionCalloutRelationship>;

	IfcDraughtingCalloutRelationship? : Map< IfcGloballyUniqueId, IfcDraughtingCalloutRelationship>;

	IfcLinearDimension? : Map< IfcGloballyUniqueId, IfcLinearDimension>;

	IfcRadiusDimension? : Map< IfcGloballyUniqueId, IfcRadiusDimension>;

	IfcDraughtingCallout? : Map< IfcGloballyUniqueId, IfcDraughtingCallout>;

	IfcDimensionCurveTerminator? : Map< IfcGloballyUniqueId, IfcDimensionCurveTerminator>;

	IfcDimensionPair? : Map< IfcGloballyUniqueId, IfcDimensionPair>;

	IfcDimensionalExponents? : Map< IfcGloballyUniqueId, IfcDimensionalExponents>;

	IfcDirection? : Map< IfcGloballyUniqueId, IfcDirection>;

	IfcDiscreteAccessory? : Map< IfcGloballyUniqueId, IfcDiscreteAccessory>;

	IfcElementComponent? : Map< IfcGloballyUniqueId, IfcElementComponent>;

	IfcDiscreteAccessoryType? : Map< IfcGloballyUniqueId, IfcDiscreteAccessoryType>;

	IfcVibrationIsolatorType? : Map< IfcGloballyUniqueId, IfcVibrationIsolatorType>;

	IfcElementComponentType? : Map< IfcGloballyUniqueId, IfcElementComponentType>;

	IfcDistributionChamberElement? : Map< IfcGloballyUniqueId, IfcDistributionChamberElement>;

	IfcDistributionFlowElement? : Map< IfcGloballyUniqueId, IfcDistributionFlowElement>;

	IfcDistributionChamberElementType? : Map< IfcGloballyUniqueId, IfcDistributionChamberElementType>;

	IfcDistributionFlowElementType? : Map< IfcGloballyUniqueId, IfcDistributionFlowElementType>;

	IfcDistributionControlElement? : Map< IfcGloballyUniqueId, IfcDistributionControlElement>;

	IfcDistributionElement? : Map< IfcGloballyUniqueId, IfcDistributionElement>;

	IfcFlowInstrumentType? : Map< IfcGloballyUniqueId, IfcFlowInstrumentType>;

	IfcSensorType? : Map< IfcGloballyUniqueId, IfcSensorType>;

	IfcDistributionElementType? : Map< IfcGloballyUniqueId, IfcDistributionElementType>;

	IfcEnergyConversionDevice? : Map< IfcGloballyUniqueId, IfcEnergyConversionDevice>;

	IfcFlowController? : Map< IfcGloballyUniqueId, IfcFlowController>;

	IfcFlowFitting? : Map< IfcGloballyUniqueId, IfcFlowFitting>;

	IfcFlowMovingDevice? : Map< IfcGloballyUniqueId, IfcFlowMovingDevice>;

	IfcFlowSegment? : Map< IfcGloballyUniqueId, IfcFlowSegment>;

	IfcFlowStorageDevice? : Map< IfcGloballyUniqueId, IfcFlowStorageDevice>;

	IfcFlowTerminal? : Map< IfcGloballyUniqueId, IfcFlowTerminal>;

	IfcFlowTreatmentDevice? : Map< IfcGloballyUniqueId, IfcFlowTreatmentDevice>;

	IfcFlowStorageDeviceType? : Map< IfcGloballyUniqueId, IfcFlowStorageDeviceType>;

	IfcFlowTreatmentDeviceType? : Map< IfcGloballyUniqueId, IfcFlowTreatmentDeviceType>;

	IfcDistributionPort? : Map< IfcGloballyUniqueId, IfcDistributionPort>;

	IfcPort? : Map< IfcGloballyUniqueId, IfcPort>;

	IfcDocumentElectronicFormat? : Map< IfcGloballyUniqueId, IfcDocumentElectronicFormat>;

	IfcDocumentInformation? : Map< IfcGloballyUniqueId, IfcDocumentInformation>;

	IfcDocumentInformationRelationship? : Map< IfcGloballyUniqueId, IfcDocumentInformationRelationship>;

	IfcDocumentReference? : Map< IfcGloballyUniqueId, IfcDocumentReference>;

	IfcDoorLiningProperties? : Map< IfcGloballyUniqueId, IfcDoorLiningProperties>;

	IfcPropertySetDefinition? : Map< IfcGloballyUniqueId, IfcPropertySetDefinition>;

	IfcDoorPanelProperties? : Map< IfcGloballyUniqueId, IfcDoorPanelProperties>;

	IfcDoorStyle? : Map< IfcGloballyUniqueId, IfcDoorStyle>;

	IfcTypeProduct? : Map< IfcGloballyUniqueId, IfcTypeProduct>;

	IfcStructuredDimensionCallout? : Map< IfcGloballyUniqueId, IfcStructuredDimensionCallout>;

	IfcDraughtingPreDefinedColour? : Map< IfcGloballyUniqueId, IfcDraughtingPreDefinedColour>;

	IfcPreDefinedColour? : Map< IfcGloballyUniqueId, IfcPreDefinedColour>;

	IfcDraughtingPreDefinedCurveFont? : Map< IfcGloballyUniqueId, IfcDraughtingPreDefinedCurveFont>;

	IfcPreDefinedCurveFont? : Map< IfcGloballyUniqueId, IfcPreDefinedCurveFont>;

	IfcDraughtingPreDefinedTextFont? : Map< IfcGloballyUniqueId, IfcDraughtingPreDefinedTextFont>;

	IfcPreDefinedTextFont? : Map< IfcGloballyUniqueId, IfcPreDefinedTextFont>;

	IfcDuctFittingType? : Map< IfcGloballyUniqueId, IfcDuctFittingType>;

	IfcDuctSegmentType? : Map< IfcGloballyUniqueId, IfcDuctSegmentType>;

	IfcDuctSilencerType? : Map< IfcGloballyUniqueId, IfcDuctSilencerType>;

	IfcEdge? : Map< IfcGloballyUniqueId, IfcEdge>;

	IfcEdgeCurve? : Map< IfcGloballyUniqueId, IfcEdgeCurve>;

	IfcOrientedEdge? : Map< IfcGloballyUniqueId, IfcOrientedEdge>;

	IfcSubedge? : Map< IfcGloballyUniqueId, IfcSubedge>;

	IfcRoundedEdgeFeature? : Map< IfcGloballyUniqueId, IfcRoundedEdgeFeature>;

	IfcFeatureElementSubtraction? : Map< IfcGloballyUniqueId, IfcFeatureElementSubtraction>;

	IfcEdgeLoop? : Map< IfcGloballyUniqueId, IfcEdgeLoop>;

	IfcLoop? : Map< IfcGloballyUniqueId, IfcLoop>;

	IfcElectricApplianceType? : Map< IfcGloballyUniqueId, IfcElectricApplianceType>;

	IfcElectricDistributionPoint? : Map< IfcGloballyUniqueId, IfcElectricDistributionPoint>;

	IfcElectricFlowStorageDeviceType? : Map< IfcGloballyUniqueId, IfcElectricFlowStorageDeviceType>;

	IfcElectricGeneratorType? : Map< IfcGloballyUniqueId, IfcElectricGeneratorType>;

	IfcElectricHeaterType? : Map< IfcGloballyUniqueId, IfcElectricHeaterType>;

	IfcElectricMotorType? : Map< IfcGloballyUniqueId, IfcElectricMotorType>;

	IfcElectricTimeControlType? : Map< IfcGloballyUniqueId, IfcElectricTimeControlType>;

	IfcElectricalBaseProperties? : Map< IfcGloballyUniqueId, IfcElectricalBaseProperties>;

	IfcEnergyProperties? : Map< IfcGloballyUniqueId, IfcEnergyProperties>;

	IfcElectricalCircuit? : Map< IfcGloballyUniqueId, IfcElectricalCircuit>;

	IfcSystem? : Map< IfcGloballyUniqueId, IfcSystem>;

	IfcElectricalElement? : Map< IfcGloballyUniqueId, IfcElectricalElement>;

	IfcElementAssembly? : Map< IfcGloballyUniqueId, IfcElementAssembly>;

	IfcEquipmentElement? : Map< IfcGloballyUniqueId, IfcEquipmentElement>;

	IfcFeatureElement? : Map< IfcGloballyUniqueId, IfcFeatureElement>;

	IfcFurnishingElement? : Map< IfcGloballyUniqueId, IfcFurnishingElement>;

	IfcTransportElement? : Map< IfcGloballyUniqueId, IfcTransportElement>;

	IfcVirtualElement? : Map< IfcGloballyUniqueId, IfcVirtualElement>;

	IfcFastener? : Map< IfcGloballyUniqueId, IfcFastener>;

	IfcFastenerType? : Map< IfcGloballyUniqueId, IfcFastenerType>;

	IfcElementQuantity? : Map< IfcGloballyUniqueId, IfcElementQuantity>;

	IfcFurnishingElementType? : Map< IfcGloballyUniqueId, IfcFurnishingElementType>;

	IfcSpatialStructureElementType? : Map< IfcGloballyUniqueId, IfcSpatialStructureElementType>;

	IfcTransportElementType? : Map< IfcGloballyUniqueId, IfcTransportElementType>;

	IfcElementarySurface? : Map< IfcGloballyUniqueId, IfcElementarySurface>;

	IfcPlane? : Map< IfcGloballyUniqueId, IfcPlane>;

	IfcEllipseProfileDef? : Map< IfcGloballyUniqueId, IfcEllipseProfileDef>;

	IfcEvaporativeCoolerType? : Map< IfcGloballyUniqueId, IfcEvaporativeCoolerType>;

	IfcEvaporatorType? : Map< IfcGloballyUniqueId, IfcEvaporatorType>;

	IfcHeatExchangerType? : Map< IfcGloballyUniqueId, IfcHeatExchangerType>;

	IfcHumidifierType? : Map< IfcGloballyUniqueId, IfcHumidifierType>;

	IfcMotorConnectionType? : Map< IfcGloballyUniqueId, IfcMotorConnectionType>;

	IfcSpaceHeaterType? : Map< IfcGloballyUniqueId, IfcSpaceHeaterType>;

	IfcTransformerType? : Map< IfcGloballyUniqueId, IfcTransformerType>;

	IfcTubeBundleType? : Map< IfcGloballyUniqueId, IfcTubeBundleType>;

	IfcUnitaryEquipmentType? : Map< IfcGloballyUniqueId, IfcUnitaryEquipmentType>;

	IfcExtendedMaterialProperties? : Map< IfcGloballyUniqueId, IfcExtendedMaterialProperties>;

	IfcMaterialProperties? : Map< IfcGloballyUniqueId, IfcMaterialProperties>;

	IfcExternallyDefinedHatchStyle? : Map< IfcGloballyUniqueId, IfcExternallyDefinedHatchStyle>;

	IfcExternallyDefinedSurfaceStyle? : Map< IfcGloballyUniqueId, IfcExternallyDefinedSurfaceStyle>;

	IfcExternallyDefinedSymbol? : Map< IfcGloballyUniqueId, IfcExternallyDefinedSymbol>;

	IfcExternallyDefinedTextFont? : Map< IfcGloballyUniqueId, IfcExternallyDefinedTextFont>;

	IfcLibraryReference? : Map< IfcGloballyUniqueId, IfcLibraryReference>;

	IfcExtrudedAreaSolid? : Map< IfcGloballyUniqueId, IfcExtrudedAreaSolid>;

	IfcSweptAreaSolid? : Map< IfcGloballyUniqueId, IfcSweptAreaSolid>;

	IfcFace? : Map< IfcGloballyUniqueId, IfcFace>;

	IfcFaceSurface? : Map< IfcGloballyUniqueId, IfcFaceSurface>;

	IfcFaceBasedSurfaceModel? : Map< IfcGloballyUniqueId, IfcFaceBasedSurfaceModel>;

	IfcFaceBound? : Map< IfcGloballyUniqueId, IfcFaceBound>;

	IfcFaceOuterBound? : Map< IfcGloballyUniqueId, IfcFaceOuterBound>;

	IfcFacetedBrep? : Map< IfcGloballyUniqueId, IfcFacetedBrep>;

	IfcManifoldSolidBrep? : Map< IfcGloballyUniqueId, IfcManifoldSolidBrep>;

	IfcFacetedBrepWithVoids? : Map< IfcGloballyUniqueId, IfcFacetedBrepWithVoids>;

	IfcFailureConnectionCondition? : Map< IfcGloballyUniqueId, IfcFailureConnectionCondition>;

	IfcStructuralConnectionCondition? : Map< IfcGloballyUniqueId, IfcStructuralConnectionCondition>;

	IfcFanType? : Map< IfcGloballyUniqueId, IfcFanType>;

	IfcMechanicalFastener? : Map< IfcGloballyUniqueId, IfcMechanicalFastener>;

	IfcMechanicalFastenerType? : Map< IfcGloballyUniqueId, IfcMechanicalFastenerType>;

	IfcFeatureElementAddition? : Map< IfcGloballyUniqueId, IfcFeatureElementAddition>;

	IfcProjectionElement? : Map< IfcGloballyUniqueId, IfcProjectionElement>;

	IfcOpeningElement? : Map< IfcGloballyUniqueId, IfcOpeningElement>;

	IfcFillAreaStyle? : Map< IfcGloballyUniqueId, IfcFillAreaStyle>;

	IfcFillAreaStyleHatching? : Map< IfcGloballyUniqueId, IfcFillAreaStyleHatching>;

	IfcFillAreaStyleTileSymbolWithStyle? : Map< IfcGloballyUniqueId, IfcFillAreaStyleTileSymbolWithStyle>;

	IfcFillAreaStyleTiles? : Map< IfcGloballyUniqueId, IfcFillAreaStyleTiles>;

	IfcFilterType? : Map< IfcGloballyUniqueId, IfcFilterType>;

	IfcFireSuppressionTerminalType? : Map< IfcGloballyUniqueId, IfcFireSuppressionTerminalType>;

	IfcFlowMeterType? : Map< IfcGloballyUniqueId, IfcFlowMeterType>;

	IfcProtectiveDeviceType? : Map< IfcGloballyUniqueId, IfcProtectiveDeviceType>;

	IfcSwitchingDeviceType? : Map< IfcGloballyUniqueId, IfcSwitchingDeviceType>;

	IfcValveType? : Map< IfcGloballyUniqueId, IfcValveType>;

	IfcJunctionBoxType? : Map< IfcGloballyUniqueId, IfcJunctionBoxType>;

	IfcPipeFittingType? : Map< IfcGloballyUniqueId, IfcPipeFittingType>;

	IfcPumpType? : Map< IfcGloballyUniqueId, IfcPumpType>;

	IfcPipeSegmentType? : Map< IfcGloballyUniqueId, IfcPipeSegmentType>;

	IfcTankType? : Map< IfcGloballyUniqueId, IfcTankType>;

	IfcGasTerminalType? : Map< IfcGloballyUniqueId, IfcGasTerminalType>;

	IfcLampType? : Map< IfcGloballyUniqueId, IfcLampType>;

	IfcLightFixtureType? : Map< IfcGloballyUniqueId, IfcLightFixtureType>;

	IfcOutletType? : Map< IfcGloballyUniqueId, IfcOutletType>;

	IfcSanitaryTerminalType? : Map< IfcGloballyUniqueId, IfcSanitaryTerminalType>;

	IfcStackTerminalType? : Map< IfcGloballyUniqueId, IfcStackTerminalType>;

	IfcWasteTerminalType? : Map< IfcGloballyUniqueId, IfcWasteTerminalType>;

	IfcFluidFlowProperties? : Map< IfcGloballyUniqueId, IfcFluidFlowProperties>;

	IfcFuelProperties? : Map< IfcGloballyUniqueId, IfcFuelProperties>;

	IfcFurnitureType? : Map< IfcGloballyUniqueId, IfcFurnitureType>;

	IfcSystemFurnitureElementType? : Map< IfcGloballyUniqueId, IfcSystemFurnitureElementType>;

	IfcGeneralMaterialProperties? : Map< IfcGloballyUniqueId, IfcGeneralMaterialProperties>;

	IfcGeneralProfileProperties? : Map< IfcGloballyUniqueId, IfcGeneralProfileProperties>;

	IfcStructuralProfileProperties? : Map< IfcGloballyUniqueId, IfcStructuralProfileProperties>;

	IfcProfileProperties? : Map< IfcGloballyUniqueId, IfcProfileProperties>;

	IfcGeometricCurveSet? : Map< IfcGloballyUniqueId, IfcGeometricCurveSet>;

	IfcGeometricSet? : Map< IfcGloballyUniqueId, IfcGeometricSet>;

	IfcGeometricRepresentationContext? : Map< IfcGloballyUniqueId, IfcGeometricRepresentationContext>;

	IfcGeometricRepresentationSubContext? : Map< IfcGloballyUniqueId, IfcGeometricRepresentationSubContext>;

	IfcRepresentationContext? : Map< IfcGloballyUniqueId, IfcRepresentationContext>;

	IfcLightSource? : Map< IfcGloballyUniqueId, IfcLightSource>;

	IfcOneDirectionRepeatFactor? : Map< IfcGloballyUniqueId, IfcOneDirectionRepeatFactor>;

	IfcPlanarExtent? : Map< IfcGloballyUniqueId, IfcPlanarExtent>;

	IfcSectionedSpine? : Map< IfcGloballyUniqueId, IfcSectionedSpine>;

	IfcShellBasedSurfaceModel? : Map< IfcGloballyUniqueId, IfcShellBasedSurfaceModel>;

	IfcTextLiteral? : Map< IfcGloballyUniqueId, IfcTextLiteral>;

	IfcVector? : Map< IfcGloballyUniqueId, IfcVector>;

	IfcRepresentationItem? : Map< IfcGloballyUniqueId, IfcRepresentationItem>;

	IfcGrid? : Map< IfcGloballyUniqueId, IfcGrid>;

	IfcGridAxis? : Map< IfcGloballyUniqueId, IfcGridAxis>;

	IfcGridPlacement? : Map< IfcGloballyUniqueId, IfcGridPlacement>;

	IfcObjectPlacement? : Map< IfcGloballyUniqueId, IfcObjectPlacement>;

	IfcInventory? : Map< IfcGloballyUniqueId, IfcInventory>;

	IfcStructuralLoadGroup? : Map< IfcGloballyUniqueId, IfcStructuralLoadGroup>;

	IfcStructuralResultGroup? : Map< IfcGloballyUniqueId, IfcStructuralResultGroup>;

	IfcZone? : Map< IfcGloballyUniqueId, IfcZone>;

	IfcPolygonalBoundedHalfSpace? : Map< IfcGloballyUniqueId, IfcPolygonalBoundedHalfSpace>;

	IfcHygroscopicMaterialProperties? : Map< IfcGloballyUniqueId, IfcHygroscopicMaterialProperties>;

	IfcImageTexture? : Map< IfcGloballyUniqueId, IfcImageTexture>;

	IfcIrregularTimeSeries? : Map< IfcGloballyUniqueId, IfcIrregularTimeSeries>;

	IfcTimeSeries? : Map< IfcGloballyUniqueId, IfcTimeSeries>;

	IfcIrregularTimeSeriesValue? : Map< IfcGloballyUniqueId, IfcIrregularTimeSeriesValue>;

	IfcLShapeProfileDef? : Map< IfcGloballyUniqueId, IfcLShapeProfileDef>;

	IfcLibraryInformation? : Map< IfcGloballyUniqueId, IfcLibraryInformation>;

	IfcLightDistributionData? : Map< IfcGloballyUniqueId, IfcLightDistributionData>;

	IfcLightIntensityDistribution? : Map< IfcGloballyUniqueId, IfcLightIntensityDistribution>;

	IfcLightSourceAmbient? : Map< IfcGloballyUniqueId, IfcLightSourceAmbient>;

	IfcLightSourceDirectional? : Map< IfcGloballyUniqueId, IfcLightSourceDirectional>;

	IfcLightSourceGoniometric? : Map< IfcGloballyUniqueId, IfcLightSourceGoniometric>;

	IfcLightSourcePositional? : Map< IfcGloballyUniqueId, IfcLightSourcePositional>;

	IfcLightSourceSpot? : Map< IfcGloballyUniqueId, IfcLightSourceSpot>;

	IfcLocalPlacement? : Map< IfcGloballyUniqueId, IfcLocalPlacement>;

	IfcLocalTime? : Map< IfcGloballyUniqueId, IfcLocalTime>;

	IfcPolyLoop? : Map< IfcGloballyUniqueId, IfcPolyLoop>;

	IfcVertexLoop? : Map< IfcGloballyUniqueId, IfcVertexLoop>;

	IfcMappedItem? : Map< IfcGloballyUniqueId, IfcMappedItem>;

	IfcMaterial? : Map< IfcGloballyUniqueId, IfcMaterial>;

	IfcMaterialClassificationRelationship? : Map< IfcGloballyUniqueId, IfcMaterialClassificationRelationship>;

	IfcMaterialDefinitionRepresentation? : Map< IfcGloballyUniqueId, IfcMaterialDefinitionRepresentation>;

	IfcProductRepresentation? : Map< IfcGloballyUniqueId, IfcProductRepresentation>;

	IfcMaterialLayer? : Map< IfcGloballyUniqueId, IfcMaterialLayer>;

	IfcMaterialLayerSet? : Map< IfcGloballyUniqueId, IfcMaterialLayerSet>;

	IfcMaterialLayerSetUsage? : Map< IfcGloballyUniqueId, IfcMaterialLayerSetUsage>;

	IfcMaterialList? : Map< IfcGloballyUniqueId, IfcMaterialList>;

	IfcMechanicalMaterialProperties? : Map< IfcGloballyUniqueId, IfcMechanicalMaterialProperties>;

	IfcOpticalMaterialProperties? : Map< IfcGloballyUniqueId, IfcOpticalMaterialProperties>;

	IfcProductsOfCombustionProperties? : Map< IfcGloballyUniqueId, IfcProductsOfCombustionProperties>;

	IfcThermalMaterialProperties? : Map< IfcGloballyUniqueId, IfcThermalMaterialProperties>;

	IfcWaterProperties? : Map< IfcGloballyUniqueId, IfcWaterProperties>;

	IfcMeasureWithUnit? : Map< IfcGloballyUniqueId, IfcMeasureWithUnit>;

	IfcMechanicalConcreteMaterialProperties? : Map< IfcGloballyUniqueId, IfcMechanicalConcreteMaterialProperties>;

	IfcMechanicalSteelMaterialProperties? : Map< IfcGloballyUniqueId, IfcMechanicalSteelMaterialProperties>;

	IfcMonetaryUnit? : Map< IfcGloballyUniqueId, IfcMonetaryUnit>;

	IfcMove? : Map< IfcGloballyUniqueId, IfcMove>;

	IfcTask? : Map< IfcGloballyUniqueId, IfcTask>;

	IfcSIUnit? : Map< IfcGloballyUniqueId, IfcSIUnit>;

	IfcProcess? : Map< IfcGloballyUniqueId, IfcProcess>;

	IfcProject? : Map< IfcGloballyUniqueId, IfcProject>;

	IfcObjectDefinition? : Map< IfcGloballyUniqueId, IfcObjectDefinition>;

	IfcTypeObject? : Map< IfcGloballyUniqueId, IfcTypeObject>;

	IfcRoot? : Map< IfcGloballyUniqueId, IfcRoot>;

	IfcTwoDirectionRepeatFactor? : Map< IfcGloballyUniqueId, IfcTwoDirectionRepeatFactor>;

	IfcOrderAction? : Map< IfcGloballyUniqueId, IfcOrderAction>;

	IfcOrganization? : Map< IfcGloballyUniqueId, IfcOrganization>;

	IfcOrganizationRelationship? : Map< IfcGloballyUniqueId, IfcOrganizationRelationship>;

	IfcOwnerHistory? : Map< IfcGloballyUniqueId, IfcOwnerHistory>;

	IfcRectangleProfileDef? : Map< IfcGloballyUniqueId, IfcRectangleProfileDef>;

	IfcTShapeProfileDef? : Map< IfcGloballyUniqueId, IfcTShapeProfileDef>;

	IfcTrapeziumProfileDef? : Map< IfcGloballyUniqueId, IfcTrapeziumProfileDef>;

	IfcUShapeProfileDef? : Map< IfcGloballyUniqueId, IfcUShapeProfileDef>;

	IfcZShapeProfileDef? : Map< IfcGloballyUniqueId, IfcZShapeProfileDef>;

	IfcPath? : Map< IfcGloballyUniqueId, IfcPath>;

	IfcPermeableCoveringProperties? : Map< IfcGloballyUniqueId, IfcPermeableCoveringProperties>;

	IfcPerson? : Map< IfcGloballyUniqueId, IfcPerson>;

	IfcPersonAndOrganization? : Map< IfcGloballyUniqueId, IfcPersonAndOrganization>;

	IfcPhysicalComplexQuantity? : Map< IfcGloballyUniqueId, IfcPhysicalComplexQuantity>;

	IfcPhysicalQuantity? : Map< IfcGloballyUniqueId, IfcPhysicalQuantity>;

	IfcPhysicalSimpleQuantity? : Map< IfcGloballyUniqueId, IfcPhysicalSimpleQuantity>;

	IfcQuantityArea? : Map< IfcGloballyUniqueId, IfcQuantityArea>;

	IfcQuantityCount? : Map< IfcGloballyUniqueId, IfcQuantityCount>;

	IfcQuantityLength? : Map< IfcGloballyUniqueId, IfcQuantityLength>;

	IfcQuantityTime? : Map< IfcGloballyUniqueId, IfcQuantityTime>;

	IfcQuantityVolume? : Map< IfcGloballyUniqueId, IfcQuantityVolume>;

	IfcQuantityWeight? : Map< IfcGloballyUniqueId, IfcQuantityWeight>;

	IfcPixelTexture? : Map< IfcGloballyUniqueId, IfcPixelTexture>;

	IfcPlanarBox? : Map< IfcGloballyUniqueId, IfcPlanarBox>;

	IfcPointOnCurve? : Map< IfcGloballyUniqueId, IfcPointOnCurve>;

	IfcPointOnSurface? : Map< IfcGloballyUniqueId, IfcPointOnSurface>;

	IfcPreDefinedItem? : Map< IfcGloballyUniqueId, IfcPreDefinedItem>;

	IfcPreDefinedDimensionSymbol? : Map< IfcGloballyUniqueId, IfcPreDefinedDimensionSymbol>;

	IfcPreDefinedSymbol? : Map< IfcGloballyUniqueId, IfcPreDefinedSymbol>;

	IfcPreDefinedPointMarkerSymbol? : Map< IfcGloballyUniqueId, IfcPreDefinedPointMarkerSymbol>;

	IfcPreDefinedTerminatorSymbol? : Map< IfcGloballyUniqueId, IfcPreDefinedTerminatorSymbol>;

	IfcTextStyleFontModel? : Map< IfcGloballyUniqueId, IfcTextStyleFontModel>;

	IfcPresentationLayerAssignment? : Map< IfcGloballyUniqueId, IfcPresentationLayerAssignment>;

	IfcPresentationLayerWithStyle? : Map< IfcGloballyUniqueId, IfcPresentationLayerWithStyle>;

	IfcSurfaceStyle? : Map< IfcGloballyUniqueId, IfcSurfaceStyle>;

	IfcSymbolStyle? : Map< IfcGloballyUniqueId, IfcSymbolStyle>;

	IfcTextStyle? : Map< IfcGloballyUniqueId, IfcTextStyle>;

	IfcPresentationStyleAssignment? : Map< IfcGloballyUniqueId, IfcPresentationStyleAssignment>;

	IfcProcedure? : Map< IfcGloballyUniqueId, IfcProcedure>;

	IfcProxy? : Map< IfcGloballyUniqueId, IfcProxy>;

	IfcStructuralActivity? : Map< IfcGloballyUniqueId, IfcStructuralActivity>;

	IfcStructuralItem? : Map< IfcGloballyUniqueId, IfcStructuralItem>;

	IfcProductDefinitionShape? : Map< IfcGloballyUniqueId, IfcProductDefinitionShape>;

	IfcRibPlateProfileProperties? : Map< IfcGloballyUniqueId, IfcRibPlateProfileProperties>;

	IfcSimpleProperty? : Map< IfcGloballyUniqueId, IfcSimpleProperty>;

	IfcPropertyBoundedValue? : Map< IfcGloballyUniqueId, IfcPropertyBoundedValue>;

	IfcPropertyConstraintRelationship? : Map< IfcGloballyUniqueId, IfcPropertyConstraintRelationship>;

	IfcPropertyDefinition? : Map< IfcGloballyUniqueId, IfcPropertyDefinition>;

	IfcPropertyDependencyRelationship? : Map< IfcGloballyUniqueId, IfcPropertyDependencyRelationship>;

	IfcPropertyEnumeratedValue? : Map< IfcGloballyUniqueId, IfcPropertyEnumeratedValue>;

	IfcPropertyEnumeration? : Map< IfcGloballyUniqueId, IfcPropertyEnumeration>;

	IfcPropertyListValue? : Map< IfcGloballyUniqueId, IfcPropertyListValue>;

	IfcPropertyReferenceValue? : Map< IfcGloballyUniqueId, IfcPropertyReferenceValue>;

	IfcPropertySet? : Map< IfcGloballyUniqueId, IfcPropertySet>;

	IfcReinforcementDefinitionProperties? : Map< IfcGloballyUniqueId, IfcReinforcementDefinitionProperties>;

	IfcServiceLifeFactor? : Map< IfcGloballyUniqueId, IfcServiceLifeFactor>;

	IfcSoundProperties? : Map< IfcGloballyUniqueId, IfcSoundProperties>;

	IfcSoundValue? : Map< IfcGloballyUniqueId, IfcSoundValue>;

	IfcSpaceThermalLoadProperties? : Map< IfcGloballyUniqueId, IfcSpaceThermalLoadProperties>;

	IfcWindowLiningProperties? : Map< IfcGloballyUniqueId, IfcWindowLiningProperties>;

	IfcWindowPanelProperties? : Map< IfcGloballyUniqueId, IfcWindowPanelProperties>;

	IfcPropertySingleValue? : Map< IfcGloballyUniqueId, IfcPropertySingleValue>;

	IfcPropertyTableValue? : Map< IfcGloballyUniqueId, IfcPropertyTableValue>;

	IfcRectangleHollowProfileDef? : Map< IfcGloballyUniqueId, IfcRectangleHollowProfileDef>;

	IfcRoundedRectangleProfileDef? : Map< IfcGloballyUniqueId, IfcRoundedRectangleProfileDef>;

	IfcReferencesValueDocument? : Map< IfcGloballyUniqueId, IfcReferencesValueDocument>;

	IfcRegularTimeSeries? : Map< IfcGloballyUniqueId, IfcRegularTimeSeries>;

	IfcReinforcementBarProperties? : Map< IfcGloballyUniqueId, IfcReinforcementBarProperties>;

	IfcReinforcingBar? : Map< IfcGloballyUniqueId, IfcReinforcingBar>;

	IfcReinforcingMesh? : Map< IfcGloballyUniqueId, IfcReinforcingMesh>;

	IfcTendon? : Map< IfcGloballyUniqueId, IfcTendon>;

	IfcTendonAnchor? : Map< IfcGloballyUniqueId, IfcTendonAnchor>;

	IfcRelAggregates? : Map< IfcGloballyUniqueId, IfcRelAggregates>;

	IfcRelDecomposes? : Map< IfcGloballyUniqueId, IfcRelDecomposes>;

	IfcRelAssigns? : Map< IfcGloballyUniqueId, IfcRelAssigns>;

	IfcRelAssignsToActor? : Map< IfcGloballyUniqueId, IfcRelAssignsToActor>;

	IfcRelAssignsToControl? : Map< IfcGloballyUniqueId, IfcRelAssignsToControl>;

	IfcRelAssignsToGroup? : Map< IfcGloballyUniqueId, IfcRelAssignsToGroup>;

	IfcRelAssignsToProcess? : Map< IfcGloballyUniqueId, IfcRelAssignsToProcess>;

	IfcRelAssignsToProduct? : Map< IfcGloballyUniqueId, IfcRelAssignsToProduct>;

	IfcRelAssignsToResource? : Map< IfcGloballyUniqueId, IfcRelAssignsToResource>;

	IfcRelationship? : Map< IfcGloballyUniqueId, IfcRelationship>;

	IfcRelAssignsTasks? : Map< IfcGloballyUniqueId, IfcRelAssignsTasks>;

	IfcRelOccupiesSpaces? : Map< IfcGloballyUniqueId, IfcRelOccupiesSpaces>;

	IfcRelAssignsToProjectOrder? : Map< IfcGloballyUniqueId, IfcRelAssignsToProjectOrder>;

	IfcRelSchedulesCostItems? : Map< IfcGloballyUniqueId, IfcRelSchedulesCostItems>;

	IfcRelAssociates? : Map< IfcGloballyUniqueId, IfcRelAssociates>;

	IfcRelAssociatesAppliedValue? : Map< IfcGloballyUniqueId, IfcRelAssociatesAppliedValue>;

	IfcRelAssociatesApproval? : Map< IfcGloballyUniqueId, IfcRelAssociatesApproval>;

	IfcRelAssociatesClassification? : Map< IfcGloballyUniqueId, IfcRelAssociatesClassification>;

	IfcRelAssociatesConstraint? : Map< IfcGloballyUniqueId, IfcRelAssociatesConstraint>;

	IfcRelAssociatesDocument? : Map< IfcGloballyUniqueId, IfcRelAssociatesDocument>;

	IfcRelAssociatesLibrary? : Map< IfcGloballyUniqueId, IfcRelAssociatesLibrary>;

	IfcRelAssociatesMaterial? : Map< IfcGloballyUniqueId, IfcRelAssociatesMaterial>;

	IfcRelAssociatesProfileProperties? : Map< IfcGloballyUniqueId, IfcRelAssociatesProfileProperties>;

	IfcRelConnects? : Map< IfcGloballyUniqueId, IfcRelConnects>;

	IfcRelConnectsElements? : Map< IfcGloballyUniqueId, IfcRelConnectsElements>;

	IfcRelConnectsPortToElement? : Map< IfcGloballyUniqueId, IfcRelConnectsPortToElement>;

	IfcRelConnectsPorts? : Map< IfcGloballyUniqueId, IfcRelConnectsPorts>;

	IfcRelConnectsStructuralActivity? : Map< IfcGloballyUniqueId, IfcRelConnectsStructuralActivity>;

	IfcRelConnectsStructuralElement? : Map< IfcGloballyUniqueId, IfcRelConnectsStructuralElement>;

	IfcRelConnectsStructuralMember? : Map< IfcGloballyUniqueId, IfcRelConnectsStructuralMember>;

	IfcRelContainedInSpatialStructure? : Map< IfcGloballyUniqueId, IfcRelContainedInSpatialStructure>;

	IfcRelCoversBldgElements? : Map< IfcGloballyUniqueId, IfcRelCoversBldgElements>;

	IfcRelCoversSpaces? : Map< IfcGloballyUniqueId, IfcRelCoversSpaces>;

	IfcRelFillsElement? : Map< IfcGloballyUniqueId, IfcRelFillsElement>;

	IfcRelFlowControlElements? : Map< IfcGloballyUniqueId, IfcRelFlowControlElements>;

	IfcRelInteractionRequirements? : Map< IfcGloballyUniqueId, IfcRelInteractionRequirements>;

	IfcRelProjectsElement? : Map< IfcGloballyUniqueId, IfcRelProjectsElement>;

	IfcRelReferencedInSpatialStructure? : Map< IfcGloballyUniqueId, IfcRelReferencedInSpatialStructure>;

	IfcRelSequence? : Map< IfcGloballyUniqueId, IfcRelSequence>;

	IfcRelServicesBuildings? : Map< IfcGloballyUniqueId, IfcRelServicesBuildings>;

	IfcRelSpaceBoundary? : Map< IfcGloballyUniqueId, IfcRelSpaceBoundary>;

	IfcRelVoidsElement? : Map< IfcGloballyUniqueId, IfcRelVoidsElement>;

	IfcRelConnectsPathElements? : Map< IfcGloballyUniqueId, IfcRelConnectsPathElements>;

	IfcRelConnectsWithRealizingElements? : Map< IfcGloballyUniqueId, IfcRelConnectsWithRealizingElements>;

	IfcRelConnectsWithEccentricity? : Map< IfcGloballyUniqueId, IfcRelConnectsWithEccentricity>;

	IfcRelNests? : Map< IfcGloballyUniqueId, IfcRelNests>;

	IfcRelDefines? : Map< IfcGloballyUniqueId, IfcRelDefines>;

	IfcRelDefinesByProperties? : Map< IfcGloballyUniqueId, IfcRelDefinesByProperties>;

	IfcRelDefinesByType? : Map< IfcGloballyUniqueId, IfcRelDefinesByType>;

	IfcRelOverridesProperties? : Map< IfcGloballyUniqueId, IfcRelOverridesProperties>;

	IfcRelaxation? : Map< IfcGloballyUniqueId, IfcRelaxation>;

	IfcRepresentation? : Map< IfcGloballyUniqueId, IfcRepresentation>;

	IfcShapeModel? : Map< IfcGloballyUniqueId, IfcShapeModel>;

	IfcStyleModel? : Map< IfcGloballyUniqueId, IfcStyleModel>;

	IfcRepresentationMap? : Map< IfcGloballyUniqueId, IfcRepresentationMap>;

	IfcRevolvedAreaSolid? : Map< IfcGloballyUniqueId, IfcRevolvedAreaSolid>;

	IfcSectionProperties? : Map< IfcGloballyUniqueId, IfcSectionProperties>;

	IfcSectionReinforcementProperties? : Map< IfcGloballyUniqueId, IfcSectionReinforcementProperties>;

	IfcShapeAspect? : Map< IfcGloballyUniqueId, IfcShapeAspect>;

	IfcShapeRepresentation? : Map< IfcGloballyUniqueId, IfcShapeRepresentation>;

	IfcTopologyRepresentation? : Map< IfcGloballyUniqueId, IfcTopologyRepresentation>;

	IfcSite? : Map< IfcGloballyUniqueId, IfcSite>;

	IfcSlippageConnectionCondition? : Map< IfcGloballyUniqueId, IfcSlippageConnectionCondition>;

	IfcSweptDiskSolid? : Map< IfcGloballyUniqueId, IfcSweptDiskSolid>;

	IfcSpace? : Map< IfcGloballyUniqueId, IfcSpace>;

	IfcSpaceType? : Map< IfcGloballyUniqueId, IfcSpaceType>;

	IfcStructuralAction? : Map< IfcGloballyUniqueId, IfcStructuralAction>;

	IfcStructuralLinearAction? : Map< IfcGloballyUniqueId, IfcStructuralLinearAction>;

	IfcStructuralPlanarAction? : Map< IfcGloballyUniqueId, IfcStructuralPlanarAction>;

	IfcStructuralPointAction? : Map< IfcGloballyUniqueId, IfcStructuralPointAction>;

	IfcStructuralReaction? : Map< IfcGloballyUniqueId, IfcStructuralReaction>;

	IfcStructuralAnalysisModel? : Map< IfcGloballyUniqueId, IfcStructuralAnalysisModel>;

	IfcStructuralConnection? : Map< IfcGloballyUniqueId, IfcStructuralConnection>;

	IfcStructuralCurveConnection? : Map< IfcGloballyUniqueId, IfcStructuralCurveConnection>;

	IfcStructuralPointConnection? : Map< IfcGloballyUniqueId, IfcStructuralPointConnection>;

	IfcStructuralSurfaceConnection? : Map< IfcGloballyUniqueId, IfcStructuralSurfaceConnection>;

	IfcStructuralCurveMember? : Map< IfcGloballyUniqueId, IfcStructuralCurveMember>;

	IfcStructuralCurveMemberVarying? : Map< IfcGloballyUniqueId, IfcStructuralCurveMemberVarying>;

	IfcStructuralMember? : Map< IfcGloballyUniqueId, IfcStructuralMember>;

	IfcStructuralLinearActionVarying? : Map< IfcGloballyUniqueId, IfcStructuralLinearActionVarying>;

	IfcStructuralLoad? : Map< IfcGloballyUniqueId, IfcStructuralLoad>;

	IfcStructuralLoadStatic? : Map< IfcGloballyUniqueId, IfcStructuralLoadStatic>;

	IfcStructuralLoadLinearForce? : Map< IfcGloballyUniqueId, IfcStructuralLoadLinearForce>;

	IfcStructuralLoadPlanarForce? : Map< IfcGloballyUniqueId, IfcStructuralLoadPlanarForce>;

	IfcStructuralLoadSingleDisplacement? : Map< IfcGloballyUniqueId, IfcStructuralLoadSingleDisplacement>;

	IfcStructuralLoadSingleDisplacementDistortion? : Map< IfcGloballyUniqueId, IfcStructuralLoadSingleDisplacementDistortion>;

	IfcStructuralLoadSingleForce? : Map< IfcGloballyUniqueId, IfcStructuralLoadSingleForce>;

	IfcStructuralLoadSingleForceWarping? : Map< IfcGloballyUniqueId, IfcStructuralLoadSingleForceWarping>;

	IfcStructuralLoadTemperature? : Map< IfcGloballyUniqueId, IfcStructuralLoadTemperature>;

	IfcStructuralSurfaceMember? : Map< IfcGloballyUniqueId, IfcStructuralSurfaceMember>;

	IfcStructuralPlanarActionVarying? : Map< IfcGloballyUniqueId, IfcStructuralPlanarActionVarying>;

	IfcStructuralPointReaction? : Map< IfcGloballyUniqueId, IfcStructuralPointReaction>;

	IfcStructuralSteelProfileProperties? : Map< IfcGloballyUniqueId, IfcStructuralSteelProfileProperties>;

	IfcStructuralSurfaceMemberVarying? : Map< IfcGloballyUniqueId, IfcStructuralSurfaceMemberVarying>;

	IfcStyledRepresentation? : Map< IfcGloballyUniqueId, IfcStyledRepresentation>;

	IfcSweptSurface? : Map< IfcGloballyUniqueId, IfcSweptSurface>;

	IfcSurfaceCurveSweptAreaSolid? : Map< IfcGloballyUniqueId, IfcSurfaceCurveSweptAreaSolid>;

	IfcSurfaceOfLinearExtrusion? : Map< IfcGloballyUniqueId, IfcSurfaceOfLinearExtrusion>;

	IfcSurfaceOfRevolution? : Map< IfcGloballyUniqueId, IfcSurfaceOfRevolution>;

	IfcSurfaceStyleLighting? : Map< IfcGloballyUniqueId, IfcSurfaceStyleLighting>;

	IfcSurfaceStyleRefraction? : Map< IfcGloballyUniqueId, IfcSurfaceStyleRefraction>;

	IfcSurfaceStyleRendering? : Map< IfcGloballyUniqueId, IfcSurfaceStyleRendering>;

	IfcSurfaceStyleShading? : Map< IfcGloballyUniqueId, IfcSurfaceStyleShading>;

	IfcSurfaceStyleWithTextures? : Map< IfcGloballyUniqueId, IfcSurfaceStyleWithTextures>;

	IfcTable? : Map< IfcGloballyUniqueId, IfcTable>;

	IfcTableRow? : Map< IfcGloballyUniqueId, IfcTableRow>;

	IfcTextLiteralWithExtent? : Map< IfcGloballyUniqueId, IfcTextLiteralWithExtent>;

	IfcTextStyleForDefinedFont? : Map< IfcGloballyUniqueId, IfcTextStyleForDefinedFont>;

	IfcTextStyleTextModel? : Map< IfcGloballyUniqueId, IfcTextStyleTextModel>;

	IfcTextStyleWithBoxCharacteristics? : Map< IfcGloballyUniqueId, IfcTextStyleWithBoxCharacteristics>;

	IfcTextureCoordinate? : Map< IfcGloballyUniqueId, IfcTextureCoordinate>;

	IfcTextureCoordinateGenerator? : Map< IfcGloballyUniqueId, IfcTextureCoordinateGenerator>;

	IfcTextureMap? : Map< IfcGloballyUniqueId, IfcTextureMap>;

	IfcTextureVertex? : Map< IfcGloballyUniqueId, IfcTextureVertex>;

	IfcTimeSeriesReferenceRelationship? : Map< IfcGloballyUniqueId, IfcTimeSeriesReferenceRelationship>;

	IfcTimeSeriesValue? : Map< IfcGloballyUniqueId, IfcTimeSeriesValue>;

	IfcVertex? : Map< IfcGloballyUniqueId, IfcVertex>;

	IfcWindowStyle? : Map< IfcGloballyUniqueId, IfcWindowStyle>;

	IfcUnitAssignment? : Map< IfcGloballyUniqueId, IfcUnitAssignment>;

	IfcVertexPoint? : Map< IfcGloballyUniqueId, IfcVertexPoint>;

	IfcVertexBasedTextureMap? : Map< IfcGloballyUniqueId, IfcVertexBasedTextureMap>;

	IfcVirtualGridIntersection? : Map< IfcGloballyUniqueId, IfcVirtualGridIntersection>;

	IfcWallStandardCase? : Map< IfcGloballyUniqueId, IfcWallStandardCase>;

	IfcWorkPlan? : Map< IfcGloballyUniqueId, IfcWorkPlan>;

	IfcWorkSchedule? : Map< IfcGloballyUniqueId, IfcWorkSchedule>;

}

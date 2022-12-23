import SchemaSpecification from '../../core/schema_specification'
import ComponentSpecification from '../../core/component_specification'
import {Ifc2DCompositeCurveSpecification} from './Ifc2DCompositeCurve.bldrs'
import {IfcCompositeCurveSpecification} from './IfcCompositeCurve.bldrs'
import {IfcActionRequestSpecification} from './IfcActionRequest.bldrs'
import {IfcControlSpecification} from './IfcControl.bldrs'
import {IfcActorSpecification} from './IfcActor.bldrs'
import {IfcOccupantSpecification} from './IfcOccupant.bldrs'
import {IfcObjectSpecification} from './IfcObject.bldrs'
import {IfcActorRoleSpecification} from './IfcActorRole.bldrs'
import {IfcActuatorTypeSpecification} from './IfcActuatorType.bldrs'
import {IfcDistributionControlElementTypeSpecification} from './IfcDistributionControlElementType.bldrs'
import {IfcAddressSpecification} from './IfcAddress.bldrs'
import {IfcPostalAddressSpecification} from './IfcPostalAddress.bldrs'
import {IfcTelecomAddressSpecification} from './IfcTelecomAddress.bldrs'
import {IfcAirTerminalBoxTypeSpecification} from './IfcAirTerminalBoxType.bldrs'
import {IfcFlowControllerTypeSpecification} from './IfcFlowControllerType.bldrs'
import {IfcAirTerminalTypeSpecification} from './IfcAirTerminalType.bldrs'
import {IfcFlowTerminalTypeSpecification} from './IfcFlowTerminalType.bldrs'
import {IfcAirToAirHeatRecoveryTypeSpecification} from './IfcAirToAirHeatRecoveryType.bldrs'
import {IfcEnergyConversionDeviceTypeSpecification} from './IfcEnergyConversionDeviceType.bldrs'
import {IfcAlarmTypeSpecification} from './IfcAlarmType.bldrs'
import {IfcAngularDimensionSpecification} from './IfcAngularDimension.bldrs'
import {IfcDimensionCurveDirectedCalloutSpecification} from './IfcDimensionCurveDirectedCallout.bldrs'
import {IfcAnnotationSpecification} from './IfcAnnotation.bldrs'
import {IfcProductSpecification} from './IfcProduct.bldrs'
import {IfcAnnotationCurveOccurrenceSpecification} from './IfcAnnotationCurveOccurrence.bldrs'
import {IfcDimensionCurveSpecification} from './IfcDimensionCurve.bldrs'
import {IfcProjectionCurveSpecification} from './IfcProjectionCurve.bldrs'
import {IfcAnnotationOccurrenceSpecification} from './IfcAnnotationOccurrence.bldrs'
import {IfcAnnotationFillAreaSpecification} from './IfcAnnotationFillArea.bldrs'
import {IfcGeometricRepresentationItemSpecification} from './IfcGeometricRepresentationItem.bldrs'
import {IfcAnnotationFillAreaOccurrenceSpecification} from './IfcAnnotationFillAreaOccurrence.bldrs'
import {IfcAnnotationSurfaceOccurrenceSpecification} from './IfcAnnotationSurfaceOccurrence.bldrs'
import {IfcAnnotationSymbolOccurrenceSpecification} from './IfcAnnotationSymbolOccurrence.bldrs'
import {IfcAnnotationTextOccurrenceSpecification} from './IfcAnnotationTextOccurrence.bldrs'
import {IfcStyledItemSpecification} from './IfcStyledItem.bldrs'
import {IfcAnnotationSurfaceSpecification} from './IfcAnnotationSurface.bldrs'
import {IfcTerminatorSymbolSpecification} from './IfcTerminatorSymbol.bldrs'
import {IfcApplicationSpecification} from './IfcApplication.bldrs'
import {IfcAppliedValueSpecification} from './IfcAppliedValue.bldrs'
import {IfcCostValueSpecification} from './IfcCostValue.bldrs'
import {IfcEnvironmentalImpactValueSpecification} from './IfcEnvironmentalImpactValue.bldrs'
import {IfcAppliedValueRelationshipSpecification} from './IfcAppliedValueRelationship.bldrs'
import {IfcApprovalSpecification} from './IfcApproval.bldrs'
import {IfcApprovalActorRelationshipSpecification} from './IfcApprovalActorRelationship.bldrs'
import {IfcApprovalPropertyRelationshipSpecification} from './IfcApprovalPropertyRelationship.bldrs'
import {IfcApprovalRelationshipSpecification} from './IfcApprovalRelationship.bldrs'
import {IfcArbitraryClosedProfileDefSpecification} from './IfcArbitraryClosedProfileDef.bldrs'
import {IfcArbitraryProfileDefWithVoidsSpecification} from './IfcArbitraryProfileDefWithVoids.bldrs'
import {IfcProfileDefSpecification} from './IfcProfileDef.bldrs'
import {IfcArbitraryOpenProfileDefSpecification} from './IfcArbitraryOpenProfileDef.bldrs'
import {IfcCenterLineProfileDefSpecification} from './IfcCenterLineProfileDef.bldrs'
import {IfcAssetSpecification} from './IfcAsset.bldrs'
import {IfcGroupSpecification} from './IfcGroup.bldrs'
import {IfcAsymmetricIShapeProfileDefSpecification} from './IfcAsymmetricIShapeProfileDef.bldrs'
import {IfcIShapeProfileDefSpecification} from './IfcIShapeProfileDef.bldrs'
import {IfcAxis1PlacementSpecification} from './IfcAxis1Placement.bldrs'
import {IfcPlacementSpecification} from './IfcPlacement.bldrs'
import {IfcAxis2Placement2DSpecification} from './IfcAxis2Placement2D.bldrs'
import {IfcAxis2Placement3DSpecification} from './IfcAxis2Placement3D.bldrs'
import {IfcBSplineCurveSpecification} from './IfcBSplineCurve.bldrs'
import {IfcBezierCurveSpecification} from './IfcBezierCurve.bldrs'
import {IfcBoundedCurveSpecification} from './IfcBoundedCurve.bldrs'
import {IfcBeamSpecification} from './IfcBeam.bldrs'
import {IfcBuildingElementSpecification} from './IfcBuildingElement.bldrs'
import {IfcBeamTypeSpecification} from './IfcBeamType.bldrs'
import {IfcBuildingElementTypeSpecification} from './IfcBuildingElementType.bldrs'
import {IfcRationalBezierCurveSpecification} from './IfcRationalBezierCurve.bldrs'
import {IfcBlobTextureSpecification} from './IfcBlobTexture.bldrs'
import {IfcSurfaceTextureSpecification} from './IfcSurfaceTexture.bldrs'
import {IfcBlockSpecification} from './IfcBlock.bldrs'
import {IfcCsgPrimitive3DSpecification} from './IfcCsgPrimitive3D.bldrs'
import {IfcBoilerTypeSpecification} from './IfcBoilerType.bldrs'
import {IfcBooleanClippingResultSpecification} from './IfcBooleanClippingResult.bldrs'
import {IfcBooleanResultSpecification} from './IfcBooleanResult.bldrs'
import {IfcBoundaryConditionSpecification} from './IfcBoundaryCondition.bldrs'
import {IfcBoundaryEdgeConditionSpecification} from './IfcBoundaryEdgeCondition.bldrs'
import {IfcBoundaryFaceConditionSpecification} from './IfcBoundaryFaceCondition.bldrs'
import {IfcBoundaryNodeConditionSpecification} from './IfcBoundaryNodeCondition.bldrs'
import {IfcBoundaryNodeConditionWarpingSpecification} from './IfcBoundaryNodeConditionWarping.bldrs'
import {IfcPolylineSpecification} from './IfcPolyline.bldrs'
import {IfcTrimmedCurveSpecification} from './IfcTrimmedCurve.bldrs'
import {IfcCurveSpecification} from './IfcCurve.bldrs'
import {IfcBoundedSurfaceSpecification} from './IfcBoundedSurface.bldrs'
import {IfcCurveBoundedPlaneSpecification} from './IfcCurveBoundedPlane.bldrs'
import {IfcRectangularTrimmedSurfaceSpecification} from './IfcRectangularTrimmedSurface.bldrs'
import {IfcSurfaceSpecification} from './IfcSurface.bldrs'
import {IfcBoundingBoxSpecification} from './IfcBoundingBox.bldrs'
import {IfcBoxedHalfSpaceSpecification} from './IfcBoxedHalfSpace.bldrs'
import {IfcHalfSpaceSolidSpecification} from './IfcHalfSpaceSolid.bldrs'
import {IfcBuildingSpecification} from './IfcBuilding.bldrs'
import {IfcSpatialStructureElementSpecification} from './IfcSpatialStructureElement.bldrs'
import {IfcBuildingElementComponentSpecification} from './IfcBuildingElementComponent.bldrs'
import {IfcBuildingElementProxySpecification} from './IfcBuildingElementProxy.bldrs'
import {IfcColumnSpecification} from './IfcColumn.bldrs'
import {IfcCoveringSpecification} from './IfcCovering.bldrs'
import {IfcCurtainWallSpecification} from './IfcCurtainWall.bldrs'
import {IfcDoorSpecification} from './IfcDoor.bldrs'
import {IfcFootingSpecification} from './IfcFooting.bldrs'
import {IfcMemberSpecification} from './IfcMember.bldrs'
import {IfcPileSpecification} from './IfcPile.bldrs'
import {IfcPlateSpecification} from './IfcPlate.bldrs'
import {IfcRailingSpecification} from './IfcRailing.bldrs'
import {IfcRampSpecification} from './IfcRamp.bldrs'
import {IfcRampFlightSpecification} from './IfcRampFlight.bldrs'
import {IfcRoofSpecification} from './IfcRoof.bldrs'
import {IfcSlabSpecification} from './IfcSlab.bldrs'
import {IfcStairSpecification} from './IfcStair.bldrs'
import {IfcStairFlightSpecification} from './IfcStairFlight.bldrs'
import {IfcWallSpecification} from './IfcWall.bldrs'
import {IfcWindowSpecification} from './IfcWindow.bldrs'
import {IfcElementSpecification} from './IfcElement.bldrs'
import {IfcBuildingElementPartSpecification} from './IfcBuildingElementPart.bldrs'
import {IfcReinforcingElementSpecification} from './IfcReinforcingElement.bldrs'
import {IfcBuildingElementProxyTypeSpecification} from './IfcBuildingElementProxyType.bldrs'
import {IfcColumnTypeSpecification} from './IfcColumnType.bldrs'
import {IfcCoveringTypeSpecification} from './IfcCoveringType.bldrs'
import {IfcCurtainWallTypeSpecification} from './IfcCurtainWallType.bldrs'
import {IfcMemberTypeSpecification} from './IfcMemberType.bldrs'
import {IfcPlateTypeSpecification} from './IfcPlateType.bldrs'
import {IfcRailingTypeSpecification} from './IfcRailingType.bldrs'
import {IfcRampFlightTypeSpecification} from './IfcRampFlightType.bldrs'
import {IfcSlabTypeSpecification} from './IfcSlabType.bldrs'
import {IfcStairFlightTypeSpecification} from './IfcStairFlightType.bldrs'
import {IfcWallTypeSpecification} from './IfcWallType.bldrs'
import {IfcElementTypeSpecification} from './IfcElementType.bldrs'
import {IfcBuildingStoreySpecification} from './IfcBuildingStorey.bldrs'
import {IfcCShapeProfileDefSpecification} from './IfcCShapeProfileDef.bldrs'
import {IfcParameterizedProfileDefSpecification} from './IfcParameterizedProfileDef.bldrs'
import {IfcCableCarrierFittingTypeSpecification} from './IfcCableCarrierFittingType.bldrs'
import {IfcFlowFittingTypeSpecification} from './IfcFlowFittingType.bldrs'
import {IfcCableCarrierSegmentTypeSpecification} from './IfcCableCarrierSegmentType.bldrs'
import {IfcFlowSegmentTypeSpecification} from './IfcFlowSegmentType.bldrs'
import {IfcCableSegmentTypeSpecification} from './IfcCableSegmentType.bldrs'
import {IfcCalendarDateSpecification} from './IfcCalendarDate.bldrs'
import {IfcCartesianPointSpecification} from './IfcCartesianPoint.bldrs'
import {IfcPointSpecification} from './IfcPoint.bldrs'
import {IfcCartesianTransformationOperatorSpecification} from './IfcCartesianTransformationOperator.bldrs'
import {IfcCartesianTransformationOperator2DSpecification} from './IfcCartesianTransformationOperator2D.bldrs'
import {IfcCartesianTransformationOperator3DSpecification} from './IfcCartesianTransformationOperator3D.bldrs'
import {IfcCartesianTransformationOperator2DnonUniformSpecification} from './IfcCartesianTransformationOperator2DnonUniform.bldrs'
import {IfcCartesianTransformationOperator3DnonUniformSpecification} from './IfcCartesianTransformationOperator3DnonUniform.bldrs'
import {IfcChamferEdgeFeatureSpecification} from './IfcChamferEdgeFeature.bldrs'
import {IfcEdgeFeatureSpecification} from './IfcEdgeFeature.bldrs'
import {IfcChillerTypeSpecification} from './IfcChillerType.bldrs'
import {IfcCircleSpecification} from './IfcCircle.bldrs'
import {IfcConicSpecification} from './IfcConic.bldrs'
import {IfcCircleHollowProfileDefSpecification} from './IfcCircleHollowProfileDef.bldrs'
import {IfcCircleProfileDefSpecification} from './IfcCircleProfileDef.bldrs'
import {IfcClassificationSpecification} from './IfcClassification.bldrs'
import {IfcClassificationItemSpecification} from './IfcClassificationItem.bldrs'
import {IfcClassificationItemRelationshipSpecification} from './IfcClassificationItemRelationship.bldrs'
import {IfcClassificationNotationSpecification} from './IfcClassificationNotation.bldrs'
import {IfcClassificationNotationFacetSpecification} from './IfcClassificationNotationFacet.bldrs'
import {IfcClassificationReferenceSpecification} from './IfcClassificationReference.bldrs'
import {IfcExternalReferenceSpecification} from './IfcExternalReference.bldrs'
import {IfcClosedShellSpecification} from './IfcClosedShell.bldrs'
import {IfcConnectedFaceSetSpecification} from './IfcConnectedFaceSet.bldrs'
import {IfcCoilTypeSpecification} from './IfcCoilType.bldrs'
import {IfcColourRgbSpecification} from './IfcColourRgb.bldrs'
import {IfcColourSpecificationSpecification} from './IfcColourSpecification.bldrs'
import {IfcComplexPropertySpecification} from './IfcComplexProperty.bldrs'
import {IfcPropertySpecification} from './IfcProperty.bldrs'
import {IfcCompositeCurveSegmentSpecification} from './IfcCompositeCurveSegment.bldrs'
import {IfcCompositeProfileDefSpecification} from './IfcCompositeProfileDef.bldrs'
import {IfcCompressorTypeSpecification} from './IfcCompressorType.bldrs'
import {IfcFlowMovingDeviceTypeSpecification} from './IfcFlowMovingDeviceType.bldrs'
import {IfcCondenserTypeSpecification} from './IfcCondenserType.bldrs'
import {IfcConditionSpecification} from './IfcCondition.bldrs'
import {IfcConditionCriterionSpecification} from './IfcConditionCriterion.bldrs'
import {IfcEllipseSpecification} from './IfcEllipse.bldrs'
import {IfcOpenShellSpecification} from './IfcOpenShell.bldrs'
import {IfcTopologicalRepresentationItemSpecification} from './IfcTopologicalRepresentationItem.bldrs'
import {IfcConnectionCurveGeometrySpecification} from './IfcConnectionCurveGeometry.bldrs'
import {IfcConnectionGeometrySpecification} from './IfcConnectionGeometry.bldrs'
import {IfcConnectionPointGeometrySpecification} from './IfcConnectionPointGeometry.bldrs'
import {IfcConnectionPortGeometrySpecification} from './IfcConnectionPortGeometry.bldrs'
import {IfcConnectionSurfaceGeometrySpecification} from './IfcConnectionSurfaceGeometry.bldrs'
import {IfcConnectionPointEccentricitySpecification} from './IfcConnectionPointEccentricity.bldrs'
import {IfcConstraintSpecification} from './IfcConstraint.bldrs'
import {IfcMetricSpecification} from './IfcMetric.bldrs'
import {IfcObjectiveSpecification} from './IfcObjective.bldrs'
import {IfcConstraintAggregationRelationshipSpecification} from './IfcConstraintAggregationRelationship.bldrs'
import {IfcConstraintClassificationRelationshipSpecification} from './IfcConstraintClassificationRelationship.bldrs'
import {IfcConstraintRelationshipSpecification} from './IfcConstraintRelationship.bldrs'
import {IfcConstructionEquipmentResourceSpecification} from './IfcConstructionEquipmentResource.bldrs'
import {IfcConstructionResourceSpecification} from './IfcConstructionResource.bldrs'
import {IfcConstructionMaterialResourceSpecification} from './IfcConstructionMaterialResource.bldrs'
import {IfcConstructionProductResourceSpecification} from './IfcConstructionProductResource.bldrs'
import {IfcCrewResourceSpecification} from './IfcCrewResource.bldrs'
import {IfcLaborResourceSpecification} from './IfcLaborResource.bldrs'
import {IfcSubContractResourceSpecification} from './IfcSubContractResource.bldrs'
import {IfcResourceSpecification} from './IfcResource.bldrs'
import {IfcContextDependentUnitSpecification} from './IfcContextDependentUnit.bldrs'
import {IfcNamedUnitSpecification} from './IfcNamedUnit.bldrs'
import {IfcCostItemSpecification} from './IfcCostItem.bldrs'
import {IfcCostScheduleSpecification} from './IfcCostSchedule.bldrs'
import {IfcEquipmentStandardSpecification} from './IfcEquipmentStandard.bldrs'
import {IfcFurnitureStandardSpecification} from './IfcFurnitureStandard.bldrs'
import {IfcPerformanceHistorySpecification} from './IfcPerformanceHistory.bldrs'
import {IfcPermitSpecification} from './IfcPermit.bldrs'
import {IfcProjectOrderSpecification} from './IfcProjectOrder.bldrs'
import {IfcProjectOrderRecordSpecification} from './IfcProjectOrderRecord.bldrs'
import {IfcScheduleTimeControlSpecification} from './IfcScheduleTimeControl.bldrs'
import {IfcServiceLifeSpecification} from './IfcServiceLife.bldrs'
import {IfcSpaceProgramSpecification} from './IfcSpaceProgram.bldrs'
import {IfcTimeSeriesScheduleSpecification} from './IfcTimeSeriesSchedule.bldrs'
import {IfcWorkControlSpecification} from './IfcWorkControl.bldrs'
import {IfcControllerTypeSpecification} from './IfcControllerType.bldrs'
import {IfcConversionBasedUnitSpecification} from './IfcConversionBasedUnit.bldrs'
import {IfcCooledBeamTypeSpecification} from './IfcCooledBeamType.bldrs'
import {IfcCoolingTowerTypeSpecification} from './IfcCoolingTowerType.bldrs'
import {IfcCoordinatedUniversalTimeOffsetSpecification} from './IfcCoordinatedUniversalTimeOffset.bldrs'
import {IfcCraneRailAShapeProfileDefSpecification} from './IfcCraneRailAShapeProfileDef.bldrs'
import {IfcCraneRailFShapeProfileDefSpecification} from './IfcCraneRailFShapeProfileDef.bldrs'
import {IfcRectangularPyramidSpecification} from './IfcRectangularPyramid.bldrs'
import {IfcRightCircularConeSpecification} from './IfcRightCircularCone.bldrs'
import {IfcRightCircularCylinderSpecification} from './IfcRightCircularCylinder.bldrs'
import {IfcSphereSpecification} from './IfcSphere.bldrs'
import {IfcCsgSolidSpecification} from './IfcCsgSolid.bldrs'
import {IfcSolidModelSpecification} from './IfcSolidModel.bldrs'
import {IfcCurrencyRelationshipSpecification} from './IfcCurrencyRelationship.bldrs'
import {IfcLineSpecification} from './IfcLine.bldrs'
import {IfcOffsetCurve2DSpecification} from './IfcOffsetCurve2D.bldrs'
import {IfcOffsetCurve3DSpecification} from './IfcOffsetCurve3D.bldrs'
import {IfcCurveStyleSpecification} from './IfcCurveStyle.bldrs'
import {IfcPresentationStyleSpecification} from './IfcPresentationStyle.bldrs'
import {IfcCurveStyleFontSpecification} from './IfcCurveStyleFont.bldrs'
import {IfcCurveStyleFontAndScalingSpecification} from './IfcCurveStyleFontAndScaling.bldrs'
import {IfcCurveStyleFontPatternSpecification} from './IfcCurveStyleFontPattern.bldrs'
import {IfcDamperTypeSpecification} from './IfcDamperType.bldrs'
import {IfcDateAndTimeSpecification} from './IfcDateAndTime.bldrs'
import {IfcDefinedSymbolSpecification} from './IfcDefinedSymbol.bldrs'
import {IfcDerivedProfileDefSpecification} from './IfcDerivedProfileDef.bldrs'
import {IfcDerivedUnitSpecification} from './IfcDerivedUnit.bldrs'
import {IfcDerivedUnitElementSpecification} from './IfcDerivedUnitElement.bldrs'
import {IfcDiameterDimensionSpecification} from './IfcDiameterDimension.bldrs'
import {IfcDimensionCalloutRelationshipSpecification} from './IfcDimensionCalloutRelationship.bldrs'
import {IfcDraughtingCalloutRelationshipSpecification} from './IfcDraughtingCalloutRelationship.bldrs'
import {IfcLinearDimensionSpecification} from './IfcLinearDimension.bldrs'
import {IfcRadiusDimensionSpecification} from './IfcRadiusDimension.bldrs'
import {IfcDraughtingCalloutSpecification} from './IfcDraughtingCallout.bldrs'
import {IfcDimensionCurveTerminatorSpecification} from './IfcDimensionCurveTerminator.bldrs'
import {IfcDimensionPairSpecification} from './IfcDimensionPair.bldrs'
import {IfcDimensionalExponentsSpecification} from './IfcDimensionalExponents.bldrs'
import {IfcDirectionSpecification} from './IfcDirection.bldrs'
import {IfcDiscreteAccessorySpecification} from './IfcDiscreteAccessory.bldrs'
import {IfcElementComponentSpecification} from './IfcElementComponent.bldrs'
import {IfcDiscreteAccessoryTypeSpecification} from './IfcDiscreteAccessoryType.bldrs'
import {IfcVibrationIsolatorTypeSpecification} from './IfcVibrationIsolatorType.bldrs'
import {IfcElementComponentTypeSpecification} from './IfcElementComponentType.bldrs'
import {IfcDistributionChamberElementSpecification} from './IfcDistributionChamberElement.bldrs'
import {IfcDistributionFlowElementSpecification} from './IfcDistributionFlowElement.bldrs'
import {IfcDistributionChamberElementTypeSpecification} from './IfcDistributionChamberElementType.bldrs'
import {IfcDistributionFlowElementTypeSpecification} from './IfcDistributionFlowElementType.bldrs'
import {IfcDistributionControlElementSpecification} from './IfcDistributionControlElement.bldrs'
import {IfcDistributionElementSpecification} from './IfcDistributionElement.bldrs'
import {IfcFlowInstrumentTypeSpecification} from './IfcFlowInstrumentType.bldrs'
import {IfcSensorTypeSpecification} from './IfcSensorType.bldrs'
import {IfcDistributionElementTypeSpecification} from './IfcDistributionElementType.bldrs'
import {IfcEnergyConversionDeviceSpecification} from './IfcEnergyConversionDevice.bldrs'
import {IfcFlowControllerSpecification} from './IfcFlowController.bldrs'
import {IfcFlowFittingSpecification} from './IfcFlowFitting.bldrs'
import {IfcFlowMovingDeviceSpecification} from './IfcFlowMovingDevice.bldrs'
import {IfcFlowSegmentSpecification} from './IfcFlowSegment.bldrs'
import {IfcFlowStorageDeviceSpecification} from './IfcFlowStorageDevice.bldrs'
import {IfcFlowTerminalSpecification} from './IfcFlowTerminal.bldrs'
import {IfcFlowTreatmentDeviceSpecification} from './IfcFlowTreatmentDevice.bldrs'
import {IfcFlowStorageDeviceTypeSpecification} from './IfcFlowStorageDeviceType.bldrs'
import {IfcFlowTreatmentDeviceTypeSpecification} from './IfcFlowTreatmentDeviceType.bldrs'
import {IfcDistributionPortSpecification} from './IfcDistributionPort.bldrs'
import {IfcPortSpecification} from './IfcPort.bldrs'
import {IfcDocumentElectronicFormatSpecification} from './IfcDocumentElectronicFormat.bldrs'
import {IfcDocumentInformationSpecification} from './IfcDocumentInformation.bldrs'
import {IfcDocumentInformationRelationshipSpecification} from './IfcDocumentInformationRelationship.bldrs'
import {IfcDocumentReferenceSpecification} from './IfcDocumentReference.bldrs'
import {IfcDoorLiningPropertiesSpecification} from './IfcDoorLiningProperties.bldrs'
import {IfcPropertySetDefinitionSpecification} from './IfcPropertySetDefinition.bldrs'
import {IfcDoorPanelPropertiesSpecification} from './IfcDoorPanelProperties.bldrs'
import {IfcDoorStyleSpecification} from './IfcDoorStyle.bldrs'
import {IfcTypeProductSpecification} from './IfcTypeProduct.bldrs'
import {IfcStructuredDimensionCalloutSpecification} from './IfcStructuredDimensionCallout.bldrs'
import {IfcDraughtingPreDefinedColourSpecification} from './IfcDraughtingPreDefinedColour.bldrs'
import {IfcPreDefinedColourSpecification} from './IfcPreDefinedColour.bldrs'
import {IfcDraughtingPreDefinedCurveFontSpecification} from './IfcDraughtingPreDefinedCurveFont.bldrs'
import {IfcPreDefinedCurveFontSpecification} from './IfcPreDefinedCurveFont.bldrs'
import {IfcDraughtingPreDefinedTextFontSpecification} from './IfcDraughtingPreDefinedTextFont.bldrs'
import {IfcPreDefinedTextFontSpecification} from './IfcPreDefinedTextFont.bldrs'
import {IfcDuctFittingTypeSpecification} from './IfcDuctFittingType.bldrs'
import {IfcDuctSegmentTypeSpecification} from './IfcDuctSegmentType.bldrs'
import {IfcDuctSilencerTypeSpecification} from './IfcDuctSilencerType.bldrs'
import {IfcEdgeSpecification} from './IfcEdge.bldrs'
import {IfcEdgeCurveSpecification} from './IfcEdgeCurve.bldrs'
import {IfcOrientedEdgeSpecification} from './IfcOrientedEdge.bldrs'
import {IfcSubedgeSpecification} from './IfcSubedge.bldrs'
import {IfcRoundedEdgeFeatureSpecification} from './IfcRoundedEdgeFeature.bldrs'
import {IfcFeatureElementSubtractionSpecification} from './IfcFeatureElementSubtraction.bldrs'
import {IfcEdgeLoopSpecification} from './IfcEdgeLoop.bldrs'
import {IfcLoopSpecification} from './IfcLoop.bldrs'
import {IfcElectricApplianceTypeSpecification} from './IfcElectricApplianceType.bldrs'
import {IfcElectricDistributionPointSpecification} from './IfcElectricDistributionPoint.bldrs'
import {IfcElectricFlowStorageDeviceTypeSpecification} from './IfcElectricFlowStorageDeviceType.bldrs'
import {IfcElectricGeneratorTypeSpecification} from './IfcElectricGeneratorType.bldrs'
import {IfcElectricHeaterTypeSpecification} from './IfcElectricHeaterType.bldrs'
import {IfcElectricMotorTypeSpecification} from './IfcElectricMotorType.bldrs'
import {IfcElectricTimeControlTypeSpecification} from './IfcElectricTimeControlType.bldrs'
import {IfcElectricalBasePropertiesSpecification} from './IfcElectricalBaseProperties.bldrs'
import {IfcEnergyPropertiesSpecification} from './IfcEnergyProperties.bldrs'
import {IfcElectricalCircuitSpecification} from './IfcElectricalCircuit.bldrs'
import {IfcSystemSpecification} from './IfcSystem.bldrs'
import {IfcElectricalElementSpecification} from './IfcElectricalElement.bldrs'
import {IfcElementAssemblySpecification} from './IfcElementAssembly.bldrs'
import {IfcEquipmentElementSpecification} from './IfcEquipmentElement.bldrs'
import {IfcFeatureElementSpecification} from './IfcFeatureElement.bldrs'
import {IfcFurnishingElementSpecification} from './IfcFurnishingElement.bldrs'
import {IfcTransportElementSpecification} from './IfcTransportElement.bldrs'
import {IfcVirtualElementSpecification} from './IfcVirtualElement.bldrs'
import {IfcFastenerSpecification} from './IfcFastener.bldrs'
import {IfcFastenerTypeSpecification} from './IfcFastenerType.bldrs'
import {IfcElementQuantitySpecification} from './IfcElementQuantity.bldrs'
import {IfcFurnishingElementTypeSpecification} from './IfcFurnishingElementType.bldrs'
import {IfcSpatialStructureElementTypeSpecification} from './IfcSpatialStructureElementType.bldrs'
import {IfcTransportElementTypeSpecification} from './IfcTransportElementType.bldrs'
import {IfcElementarySurfaceSpecification} from './IfcElementarySurface.bldrs'
import {IfcPlaneSpecification} from './IfcPlane.bldrs'
import {IfcEllipseProfileDefSpecification} from './IfcEllipseProfileDef.bldrs'
import {IfcEvaporativeCoolerTypeSpecification} from './IfcEvaporativeCoolerType.bldrs'
import {IfcEvaporatorTypeSpecification} from './IfcEvaporatorType.bldrs'
import {IfcHeatExchangerTypeSpecification} from './IfcHeatExchangerType.bldrs'
import {IfcHumidifierTypeSpecification} from './IfcHumidifierType.bldrs'
import {IfcMotorConnectionTypeSpecification} from './IfcMotorConnectionType.bldrs'
import {IfcSpaceHeaterTypeSpecification} from './IfcSpaceHeaterType.bldrs'
import {IfcTransformerTypeSpecification} from './IfcTransformerType.bldrs'
import {IfcTubeBundleTypeSpecification} from './IfcTubeBundleType.bldrs'
import {IfcUnitaryEquipmentTypeSpecification} from './IfcUnitaryEquipmentType.bldrs'
import {IfcExtendedMaterialPropertiesSpecification} from './IfcExtendedMaterialProperties.bldrs'
import {IfcMaterialPropertiesSpecification} from './IfcMaterialProperties.bldrs'
import {IfcExternallyDefinedHatchStyleSpecification} from './IfcExternallyDefinedHatchStyle.bldrs'
import {IfcExternallyDefinedSurfaceStyleSpecification} from './IfcExternallyDefinedSurfaceStyle.bldrs'
import {IfcExternallyDefinedSymbolSpecification} from './IfcExternallyDefinedSymbol.bldrs'
import {IfcExternallyDefinedTextFontSpecification} from './IfcExternallyDefinedTextFont.bldrs'
import {IfcLibraryReferenceSpecification} from './IfcLibraryReference.bldrs'
import {IfcExtrudedAreaSolidSpecification} from './IfcExtrudedAreaSolid.bldrs'
import {IfcSweptAreaSolidSpecification} from './IfcSweptAreaSolid.bldrs'
import {IfcFaceSpecification} from './IfcFace.bldrs'
import {IfcFaceSurfaceSpecification} from './IfcFaceSurface.bldrs'
import {IfcFaceBasedSurfaceModelSpecification} from './IfcFaceBasedSurfaceModel.bldrs'
import {IfcFaceBoundSpecification} from './IfcFaceBound.bldrs'
import {IfcFaceOuterBoundSpecification} from './IfcFaceOuterBound.bldrs'
import {IfcFacetedBrepSpecification} from './IfcFacetedBrep.bldrs'
import {IfcManifoldSolidBrepSpecification} from './IfcManifoldSolidBrep.bldrs'
import {IfcFacetedBrepWithVoidsSpecification} from './IfcFacetedBrepWithVoids.bldrs'
import {IfcFailureConnectionConditionSpecification} from './IfcFailureConnectionCondition.bldrs'
import {IfcStructuralConnectionConditionSpecification} from './IfcStructuralConnectionCondition.bldrs'
import {IfcFanTypeSpecification} from './IfcFanType.bldrs'
import {IfcMechanicalFastenerSpecification} from './IfcMechanicalFastener.bldrs'
import {IfcMechanicalFastenerTypeSpecification} from './IfcMechanicalFastenerType.bldrs'
import {IfcFeatureElementAdditionSpecification} from './IfcFeatureElementAddition.bldrs'
import {IfcProjectionElementSpecification} from './IfcProjectionElement.bldrs'
import {IfcOpeningElementSpecification} from './IfcOpeningElement.bldrs'
import {IfcFillAreaStyleSpecification} from './IfcFillAreaStyle.bldrs'
import {IfcFillAreaStyleHatchingSpecification} from './IfcFillAreaStyleHatching.bldrs'
import {IfcFillAreaStyleTileSymbolWithStyleSpecification} from './IfcFillAreaStyleTileSymbolWithStyle.bldrs'
import {IfcFillAreaStyleTilesSpecification} from './IfcFillAreaStyleTiles.bldrs'
import {IfcFilterTypeSpecification} from './IfcFilterType.bldrs'
import {IfcFireSuppressionTerminalTypeSpecification} from './IfcFireSuppressionTerminalType.bldrs'
import {IfcFlowMeterTypeSpecification} from './IfcFlowMeterType.bldrs'
import {IfcProtectiveDeviceTypeSpecification} from './IfcProtectiveDeviceType.bldrs'
import {IfcSwitchingDeviceTypeSpecification} from './IfcSwitchingDeviceType.bldrs'
import {IfcValveTypeSpecification} from './IfcValveType.bldrs'
import {IfcJunctionBoxTypeSpecification} from './IfcJunctionBoxType.bldrs'
import {IfcPipeFittingTypeSpecification} from './IfcPipeFittingType.bldrs'
import {IfcPumpTypeSpecification} from './IfcPumpType.bldrs'
import {IfcPipeSegmentTypeSpecification} from './IfcPipeSegmentType.bldrs'
import {IfcTankTypeSpecification} from './IfcTankType.bldrs'
import {IfcGasTerminalTypeSpecification} from './IfcGasTerminalType.bldrs'
import {IfcLampTypeSpecification} from './IfcLampType.bldrs'
import {IfcLightFixtureTypeSpecification} from './IfcLightFixtureType.bldrs'
import {IfcOutletTypeSpecification} from './IfcOutletType.bldrs'
import {IfcSanitaryTerminalTypeSpecification} from './IfcSanitaryTerminalType.bldrs'
import {IfcStackTerminalTypeSpecification} from './IfcStackTerminalType.bldrs'
import {IfcWasteTerminalTypeSpecification} from './IfcWasteTerminalType.bldrs'
import {IfcFluidFlowPropertiesSpecification} from './IfcFluidFlowProperties.bldrs'
import {IfcFuelPropertiesSpecification} from './IfcFuelProperties.bldrs'
import {IfcFurnitureTypeSpecification} from './IfcFurnitureType.bldrs'
import {IfcSystemFurnitureElementTypeSpecification} from './IfcSystemFurnitureElementType.bldrs'
import {IfcGeneralMaterialPropertiesSpecification} from './IfcGeneralMaterialProperties.bldrs'
import {IfcGeneralProfilePropertiesSpecification} from './IfcGeneralProfileProperties.bldrs'
import {IfcStructuralProfilePropertiesSpecification} from './IfcStructuralProfileProperties.bldrs'
import {IfcProfilePropertiesSpecification} from './IfcProfileProperties.bldrs'
import {IfcGeometricCurveSetSpecification} from './IfcGeometricCurveSet.bldrs'
import {IfcGeometricSetSpecification} from './IfcGeometricSet.bldrs'
import {IfcGeometricRepresentationContextSpecification} from './IfcGeometricRepresentationContext.bldrs'
import {IfcGeometricRepresentationSubContextSpecification} from './IfcGeometricRepresentationSubContext.bldrs'
import {IfcRepresentationContextSpecification} from './IfcRepresentationContext.bldrs'
import {IfcLightSourceSpecification} from './IfcLightSource.bldrs'
import {IfcOneDirectionRepeatFactorSpecification} from './IfcOneDirectionRepeatFactor.bldrs'
import {IfcPlanarExtentSpecification} from './IfcPlanarExtent.bldrs'
import {IfcSectionedSpineSpecification} from './IfcSectionedSpine.bldrs'
import {IfcShellBasedSurfaceModelSpecification} from './IfcShellBasedSurfaceModel.bldrs'
import {IfcTextLiteralSpecification} from './IfcTextLiteral.bldrs'
import {IfcVectorSpecification} from './IfcVector.bldrs'
import {IfcRepresentationItemSpecification} from './IfcRepresentationItem.bldrs'
import {IfcGridSpecification} from './IfcGrid.bldrs'
import {IfcGridAxisSpecification} from './IfcGridAxis.bldrs'
import {IfcGridPlacementSpecification} from './IfcGridPlacement.bldrs'
import {IfcObjectPlacementSpecification} from './IfcObjectPlacement.bldrs'
import {IfcInventorySpecification} from './IfcInventory.bldrs'
import {IfcStructuralLoadGroupSpecification} from './IfcStructuralLoadGroup.bldrs'
import {IfcStructuralResultGroupSpecification} from './IfcStructuralResultGroup.bldrs'
import {IfcZoneSpecification} from './IfcZone.bldrs'
import {IfcPolygonalBoundedHalfSpaceSpecification} from './IfcPolygonalBoundedHalfSpace.bldrs'
import {IfcHygroscopicMaterialPropertiesSpecification} from './IfcHygroscopicMaterialProperties.bldrs'
import {IfcImageTextureSpecification} from './IfcImageTexture.bldrs'
import {IfcIrregularTimeSeriesSpecification} from './IfcIrregularTimeSeries.bldrs'
import {IfcTimeSeriesSpecification} from './IfcTimeSeries.bldrs'
import {IfcIrregularTimeSeriesValueSpecification} from './IfcIrregularTimeSeriesValue.bldrs'
import {IfcLShapeProfileDefSpecification} from './IfcLShapeProfileDef.bldrs'
import {IfcLibraryInformationSpecification} from './IfcLibraryInformation.bldrs'
import {IfcLightDistributionDataSpecification} from './IfcLightDistributionData.bldrs'
import {IfcLightIntensityDistributionSpecification} from './IfcLightIntensityDistribution.bldrs'
import {IfcLightSourceAmbientSpecification} from './IfcLightSourceAmbient.bldrs'
import {IfcLightSourceDirectionalSpecification} from './IfcLightSourceDirectional.bldrs'
import {IfcLightSourceGoniometricSpecification} from './IfcLightSourceGoniometric.bldrs'
import {IfcLightSourcePositionalSpecification} from './IfcLightSourcePositional.bldrs'
import {IfcLightSourceSpotSpecification} from './IfcLightSourceSpot.bldrs'
import {IfcLocalPlacementSpecification} from './IfcLocalPlacement.bldrs'
import {IfcLocalTimeSpecification} from './IfcLocalTime.bldrs'
import {IfcPolyLoopSpecification} from './IfcPolyLoop.bldrs'
import {IfcVertexLoopSpecification} from './IfcVertexLoop.bldrs'
import {IfcMappedItemSpecification} from './IfcMappedItem.bldrs'
import {IfcMaterialSpecification} from './IfcMaterial.bldrs'
import {IfcMaterialClassificationRelationshipSpecification} from './IfcMaterialClassificationRelationship.bldrs'
import {IfcMaterialDefinitionRepresentationSpecification} from './IfcMaterialDefinitionRepresentation.bldrs'
import {IfcProductRepresentationSpecification} from './IfcProductRepresentation.bldrs'
import {IfcMaterialLayerSpecification} from './IfcMaterialLayer.bldrs'
import {IfcMaterialLayerSetSpecification} from './IfcMaterialLayerSet.bldrs'
import {IfcMaterialLayerSetUsageSpecification} from './IfcMaterialLayerSetUsage.bldrs'
import {IfcMaterialListSpecification} from './IfcMaterialList.bldrs'
import {IfcMechanicalMaterialPropertiesSpecification} from './IfcMechanicalMaterialProperties.bldrs'
import {IfcOpticalMaterialPropertiesSpecification} from './IfcOpticalMaterialProperties.bldrs'
import {IfcProductsOfCombustionPropertiesSpecification} from './IfcProductsOfCombustionProperties.bldrs'
import {IfcThermalMaterialPropertiesSpecification} from './IfcThermalMaterialProperties.bldrs'
import {IfcWaterPropertiesSpecification} from './IfcWaterProperties.bldrs'
import {IfcMeasureWithUnitSpecification} from './IfcMeasureWithUnit.bldrs'
import {IfcMechanicalConcreteMaterialPropertiesSpecification} from './IfcMechanicalConcreteMaterialProperties.bldrs'
import {IfcMechanicalSteelMaterialPropertiesSpecification} from './IfcMechanicalSteelMaterialProperties.bldrs'
import {IfcMonetaryUnitSpecification} from './IfcMonetaryUnit.bldrs'
import {IfcMoveSpecification} from './IfcMove.bldrs'
import {IfcTaskSpecification} from './IfcTask.bldrs'
import {IfcSIUnitSpecification} from './IfcSIUnit.bldrs'
import {IfcProcessSpecification} from './IfcProcess.bldrs'
import {IfcProjectSpecification} from './IfcProject.bldrs'
import {IfcObjectDefinitionSpecification} from './IfcObjectDefinition.bldrs'
import {IfcTypeObjectSpecification} from './IfcTypeObject.bldrs'
import {IfcRootSpecification} from './IfcRoot.bldrs'
import {IfcTwoDirectionRepeatFactorSpecification} from './IfcTwoDirectionRepeatFactor.bldrs'
import {IfcOrderActionSpecification} from './IfcOrderAction.bldrs'
import {IfcOrganizationSpecification} from './IfcOrganization.bldrs'
import {IfcOrganizationRelationshipSpecification} from './IfcOrganizationRelationship.bldrs'
import {IfcOwnerHistorySpecification} from './IfcOwnerHistory.bldrs'
import {IfcRectangleProfileDefSpecification} from './IfcRectangleProfileDef.bldrs'
import {IfcTShapeProfileDefSpecification} from './IfcTShapeProfileDef.bldrs'
import {IfcTrapeziumProfileDefSpecification} from './IfcTrapeziumProfileDef.bldrs'
import {IfcUShapeProfileDefSpecification} from './IfcUShapeProfileDef.bldrs'
import {IfcZShapeProfileDefSpecification} from './IfcZShapeProfileDef.bldrs'
import {IfcPathSpecification} from './IfcPath.bldrs'
import {IfcPermeableCoveringPropertiesSpecification} from './IfcPermeableCoveringProperties.bldrs'
import {IfcPersonSpecification} from './IfcPerson.bldrs'
import {IfcPersonAndOrganizationSpecification} from './IfcPersonAndOrganization.bldrs'
import {IfcPhysicalComplexQuantitySpecification} from './IfcPhysicalComplexQuantity.bldrs'
import {IfcPhysicalQuantitySpecification} from './IfcPhysicalQuantity.bldrs'
import {IfcPhysicalSimpleQuantitySpecification} from './IfcPhysicalSimpleQuantity.bldrs'
import {IfcQuantityAreaSpecification} from './IfcQuantityArea.bldrs'
import {IfcQuantityCountSpecification} from './IfcQuantityCount.bldrs'
import {IfcQuantityLengthSpecification} from './IfcQuantityLength.bldrs'
import {IfcQuantityTimeSpecification} from './IfcQuantityTime.bldrs'
import {IfcQuantityVolumeSpecification} from './IfcQuantityVolume.bldrs'
import {IfcQuantityWeightSpecification} from './IfcQuantityWeight.bldrs'
import {IfcPixelTextureSpecification} from './IfcPixelTexture.bldrs'
import {IfcPlanarBoxSpecification} from './IfcPlanarBox.bldrs'
import {IfcPointOnCurveSpecification} from './IfcPointOnCurve.bldrs'
import {IfcPointOnSurfaceSpecification} from './IfcPointOnSurface.bldrs'
import {IfcPreDefinedItemSpecification} from './IfcPreDefinedItem.bldrs'
import {IfcPreDefinedDimensionSymbolSpecification} from './IfcPreDefinedDimensionSymbol.bldrs'
import {IfcPreDefinedSymbolSpecification} from './IfcPreDefinedSymbol.bldrs'
import {IfcPreDefinedPointMarkerSymbolSpecification} from './IfcPreDefinedPointMarkerSymbol.bldrs'
import {IfcPreDefinedTerminatorSymbolSpecification} from './IfcPreDefinedTerminatorSymbol.bldrs'
import {IfcTextStyleFontModelSpecification} from './IfcTextStyleFontModel.bldrs'
import {IfcPresentationLayerAssignmentSpecification} from './IfcPresentationLayerAssignment.bldrs'
import {IfcPresentationLayerWithStyleSpecification} from './IfcPresentationLayerWithStyle.bldrs'
import {IfcSurfaceStyleSpecification} from './IfcSurfaceStyle.bldrs'
import {IfcSymbolStyleSpecification} from './IfcSymbolStyle.bldrs'
import {IfcTextStyleSpecification} from './IfcTextStyle.bldrs'
import {IfcPresentationStyleAssignmentSpecification} from './IfcPresentationStyleAssignment.bldrs'
import {IfcProcedureSpecification} from './IfcProcedure.bldrs'
import {IfcProxySpecification} from './IfcProxy.bldrs'
import {IfcStructuralActivitySpecification} from './IfcStructuralActivity.bldrs'
import {IfcStructuralItemSpecification} from './IfcStructuralItem.bldrs'
import {IfcProductDefinitionShapeSpecification} from './IfcProductDefinitionShape.bldrs'
import {IfcRibPlateProfilePropertiesSpecification} from './IfcRibPlateProfileProperties.bldrs'
import {IfcSimplePropertySpecification} from './IfcSimpleProperty.bldrs'
import {IfcPropertyBoundedValueSpecification} from './IfcPropertyBoundedValue.bldrs'
import {IfcPropertyConstraintRelationshipSpecification} from './IfcPropertyConstraintRelationship.bldrs'
import {IfcPropertyDefinitionSpecification} from './IfcPropertyDefinition.bldrs'
import {IfcPropertyDependencyRelationshipSpecification} from './IfcPropertyDependencyRelationship.bldrs'
import {IfcPropertyEnumeratedValueSpecification} from './IfcPropertyEnumeratedValue.bldrs'
import {IfcPropertyEnumerationSpecification} from './IfcPropertyEnumeration.bldrs'
import {IfcPropertyListValueSpecification} from './IfcPropertyListValue.bldrs'
import {IfcPropertyReferenceValueSpecification} from './IfcPropertyReferenceValue.bldrs'
import {IfcPropertySetSpecification} from './IfcPropertySet.bldrs'
import {IfcReinforcementDefinitionPropertiesSpecification} from './IfcReinforcementDefinitionProperties.bldrs'
import {IfcServiceLifeFactorSpecification} from './IfcServiceLifeFactor.bldrs'
import {IfcSoundPropertiesSpecification} from './IfcSoundProperties.bldrs'
import {IfcSoundValueSpecification} from './IfcSoundValue.bldrs'
import {IfcSpaceThermalLoadPropertiesSpecification} from './IfcSpaceThermalLoadProperties.bldrs'
import {IfcWindowLiningPropertiesSpecification} from './IfcWindowLiningProperties.bldrs'
import {IfcWindowPanelPropertiesSpecification} from './IfcWindowPanelProperties.bldrs'
import {IfcPropertySingleValueSpecification} from './IfcPropertySingleValue.bldrs'
import {IfcPropertyTableValueSpecification} from './IfcPropertyTableValue.bldrs'
import {IfcRectangleHollowProfileDefSpecification} from './IfcRectangleHollowProfileDef.bldrs'
import {IfcRoundedRectangleProfileDefSpecification} from './IfcRoundedRectangleProfileDef.bldrs'
import {IfcReferencesValueDocumentSpecification} from './IfcReferencesValueDocument.bldrs'
import {IfcRegularTimeSeriesSpecification} from './IfcRegularTimeSeries.bldrs'
import {IfcReinforcementBarPropertiesSpecification} from './IfcReinforcementBarProperties.bldrs'
import {IfcReinforcingBarSpecification} from './IfcReinforcingBar.bldrs'
import {IfcReinforcingMeshSpecification} from './IfcReinforcingMesh.bldrs'
import {IfcTendonSpecification} from './IfcTendon.bldrs'
import {IfcTendonAnchorSpecification} from './IfcTendonAnchor.bldrs'
import {IfcRelAggregatesSpecification} from './IfcRelAggregates.bldrs'
import {IfcRelDecomposesSpecification} from './IfcRelDecomposes.bldrs'
import {IfcRelAssignsSpecification} from './IfcRelAssigns.bldrs'
import {IfcRelAssignsToActorSpecification} from './IfcRelAssignsToActor.bldrs'
import {IfcRelAssignsToControlSpecification} from './IfcRelAssignsToControl.bldrs'
import {IfcRelAssignsToGroupSpecification} from './IfcRelAssignsToGroup.bldrs'
import {IfcRelAssignsToProcessSpecification} from './IfcRelAssignsToProcess.bldrs'
import {IfcRelAssignsToProductSpecification} from './IfcRelAssignsToProduct.bldrs'
import {IfcRelAssignsToResourceSpecification} from './IfcRelAssignsToResource.bldrs'
import {IfcRelationshipSpecification} from './IfcRelationship.bldrs'
import {IfcRelAssignsTasksSpecification} from './IfcRelAssignsTasks.bldrs'
import {IfcRelOccupiesSpacesSpecification} from './IfcRelOccupiesSpaces.bldrs'
import {IfcRelAssignsToProjectOrderSpecification} from './IfcRelAssignsToProjectOrder.bldrs'
import {IfcRelSchedulesCostItemsSpecification} from './IfcRelSchedulesCostItems.bldrs'
import {IfcRelAssociatesSpecification} from './IfcRelAssociates.bldrs'
import {IfcRelAssociatesAppliedValueSpecification} from './IfcRelAssociatesAppliedValue.bldrs'
import {IfcRelAssociatesApprovalSpecification} from './IfcRelAssociatesApproval.bldrs'
import {IfcRelAssociatesClassificationSpecification} from './IfcRelAssociatesClassification.bldrs'
import {IfcRelAssociatesConstraintSpecification} from './IfcRelAssociatesConstraint.bldrs'
import {IfcRelAssociatesDocumentSpecification} from './IfcRelAssociatesDocument.bldrs'
import {IfcRelAssociatesLibrarySpecification} from './IfcRelAssociatesLibrary.bldrs'
import {IfcRelAssociatesMaterialSpecification} from './IfcRelAssociatesMaterial.bldrs'
import {IfcRelAssociatesProfilePropertiesSpecification} from './IfcRelAssociatesProfileProperties.bldrs'
import {IfcRelConnectsSpecification} from './IfcRelConnects.bldrs'
import {IfcRelConnectsElementsSpecification} from './IfcRelConnectsElements.bldrs'
import {IfcRelConnectsPortToElementSpecification} from './IfcRelConnectsPortToElement.bldrs'
import {IfcRelConnectsPortsSpecification} from './IfcRelConnectsPorts.bldrs'
import {IfcRelConnectsStructuralActivitySpecification} from './IfcRelConnectsStructuralActivity.bldrs'
import {IfcRelConnectsStructuralElementSpecification} from './IfcRelConnectsStructuralElement.bldrs'
import {IfcRelConnectsStructuralMemberSpecification} from './IfcRelConnectsStructuralMember.bldrs'
import {IfcRelContainedInSpatialStructureSpecification} from './IfcRelContainedInSpatialStructure.bldrs'
import {IfcRelCoversBldgElementsSpecification} from './IfcRelCoversBldgElements.bldrs'
import {IfcRelCoversSpacesSpecification} from './IfcRelCoversSpaces.bldrs'
import {IfcRelFillsElementSpecification} from './IfcRelFillsElement.bldrs'
import {IfcRelFlowControlElementsSpecification} from './IfcRelFlowControlElements.bldrs'
import {IfcRelInteractionRequirementsSpecification} from './IfcRelInteractionRequirements.bldrs'
import {IfcRelProjectsElementSpecification} from './IfcRelProjectsElement.bldrs'
import {IfcRelReferencedInSpatialStructureSpecification} from './IfcRelReferencedInSpatialStructure.bldrs'
import {IfcRelSequenceSpecification} from './IfcRelSequence.bldrs'
import {IfcRelServicesBuildingsSpecification} from './IfcRelServicesBuildings.bldrs'
import {IfcRelSpaceBoundarySpecification} from './IfcRelSpaceBoundary.bldrs'
import {IfcRelVoidsElementSpecification} from './IfcRelVoidsElement.bldrs'
import {IfcRelConnectsPathElementsSpecification} from './IfcRelConnectsPathElements.bldrs'
import {IfcRelConnectsWithRealizingElementsSpecification} from './IfcRelConnectsWithRealizingElements.bldrs'
import {IfcRelConnectsWithEccentricitySpecification} from './IfcRelConnectsWithEccentricity.bldrs'
import {IfcRelNestsSpecification} from './IfcRelNests.bldrs'
import {IfcRelDefinesSpecification} from './IfcRelDefines.bldrs'
import {IfcRelDefinesByPropertiesSpecification} from './IfcRelDefinesByProperties.bldrs'
import {IfcRelDefinesByTypeSpecification} from './IfcRelDefinesByType.bldrs'
import {IfcRelOverridesPropertiesSpecification} from './IfcRelOverridesProperties.bldrs'
import {IfcRelaxationSpecification} from './IfcRelaxation.bldrs'
import {IfcRepresentationSpecification} from './IfcRepresentation.bldrs'
import {IfcShapeModelSpecification} from './IfcShapeModel.bldrs'
import {IfcStyleModelSpecification} from './IfcStyleModel.bldrs'
import {IfcRepresentationMapSpecification} from './IfcRepresentationMap.bldrs'
import {IfcRevolvedAreaSolidSpecification} from './IfcRevolvedAreaSolid.bldrs'
import {IfcSectionPropertiesSpecification} from './IfcSectionProperties.bldrs'
import {IfcSectionReinforcementPropertiesSpecification} from './IfcSectionReinforcementProperties.bldrs'
import {IfcShapeAspectSpecification} from './IfcShapeAspect.bldrs'
import {IfcShapeRepresentationSpecification} from './IfcShapeRepresentation.bldrs'
import {IfcTopologyRepresentationSpecification} from './IfcTopologyRepresentation.bldrs'
import {IfcSiteSpecification} from './IfcSite.bldrs'
import {IfcSlippageConnectionConditionSpecification} from './IfcSlippageConnectionCondition.bldrs'
import {IfcSweptDiskSolidSpecification} from './IfcSweptDiskSolid.bldrs'
import {IfcSpaceSpecification} from './IfcSpace.bldrs'
import {IfcSpaceTypeSpecification} from './IfcSpaceType.bldrs'
import {IfcStructuralActionSpecification} from './IfcStructuralAction.bldrs'
import {IfcStructuralLinearActionSpecification} from './IfcStructuralLinearAction.bldrs'
import {IfcStructuralPlanarActionSpecification} from './IfcStructuralPlanarAction.bldrs'
import {IfcStructuralPointActionSpecification} from './IfcStructuralPointAction.bldrs'
import {IfcStructuralReactionSpecification} from './IfcStructuralReaction.bldrs'
import {IfcStructuralAnalysisModelSpecification} from './IfcStructuralAnalysisModel.bldrs'
import {IfcStructuralConnectionSpecification} from './IfcStructuralConnection.bldrs'
import {IfcStructuralCurveConnectionSpecification} from './IfcStructuralCurveConnection.bldrs'
import {IfcStructuralPointConnectionSpecification} from './IfcStructuralPointConnection.bldrs'
import {IfcStructuralSurfaceConnectionSpecification} from './IfcStructuralSurfaceConnection.bldrs'
import {IfcStructuralCurveMemberSpecification} from './IfcStructuralCurveMember.bldrs'
import {IfcStructuralCurveMemberVaryingSpecification} from './IfcStructuralCurveMemberVarying.bldrs'
import {IfcStructuralMemberSpecification} from './IfcStructuralMember.bldrs'
import {IfcStructuralLinearActionVaryingSpecification} from './IfcStructuralLinearActionVarying.bldrs'
import {IfcStructuralLoadSpecification} from './IfcStructuralLoad.bldrs'
import {IfcStructuralLoadStaticSpecification} from './IfcStructuralLoadStatic.bldrs'
import {IfcStructuralLoadLinearForceSpecification} from './IfcStructuralLoadLinearForce.bldrs'
import {IfcStructuralLoadPlanarForceSpecification} from './IfcStructuralLoadPlanarForce.bldrs'
import {IfcStructuralLoadSingleDisplacementSpecification} from './IfcStructuralLoadSingleDisplacement.bldrs'
import {IfcStructuralLoadSingleDisplacementDistortionSpecification} from './IfcStructuralLoadSingleDisplacementDistortion.bldrs'
import {IfcStructuralLoadSingleForceSpecification} from './IfcStructuralLoadSingleForce.bldrs'
import {IfcStructuralLoadSingleForceWarpingSpecification} from './IfcStructuralLoadSingleForceWarping.bldrs'
import {IfcStructuralLoadTemperatureSpecification} from './IfcStructuralLoadTemperature.bldrs'
import {IfcStructuralSurfaceMemberSpecification} from './IfcStructuralSurfaceMember.bldrs'
import {IfcStructuralPlanarActionVaryingSpecification} from './IfcStructuralPlanarActionVarying.bldrs'
import {IfcStructuralPointReactionSpecification} from './IfcStructuralPointReaction.bldrs'
import {IfcStructuralSteelProfilePropertiesSpecification} from './IfcStructuralSteelProfileProperties.bldrs'
import {IfcStructuralSurfaceMemberVaryingSpecification} from './IfcStructuralSurfaceMemberVarying.bldrs'
import {IfcStyledRepresentationSpecification} from './IfcStyledRepresentation.bldrs'
import {IfcSweptSurfaceSpecification} from './IfcSweptSurface.bldrs'
import {IfcSurfaceCurveSweptAreaSolidSpecification} from './IfcSurfaceCurveSweptAreaSolid.bldrs'
import {IfcSurfaceOfLinearExtrusionSpecification} from './IfcSurfaceOfLinearExtrusion.bldrs'
import {IfcSurfaceOfRevolutionSpecification} from './IfcSurfaceOfRevolution.bldrs'
import {IfcSurfaceStyleLightingSpecification} from './IfcSurfaceStyleLighting.bldrs'
import {IfcSurfaceStyleRefractionSpecification} from './IfcSurfaceStyleRefraction.bldrs'
import {IfcSurfaceStyleRenderingSpecification} from './IfcSurfaceStyleRendering.bldrs'
import {IfcSurfaceStyleShadingSpecification} from './IfcSurfaceStyleShading.bldrs'
import {IfcSurfaceStyleWithTexturesSpecification} from './IfcSurfaceStyleWithTextures.bldrs'
import {IfcTableSpecification} from './IfcTable.bldrs'
import {IfcTableRowSpecification} from './IfcTableRow.bldrs'
import {IfcTextLiteralWithExtentSpecification} from './IfcTextLiteralWithExtent.bldrs'
import {IfcTextStyleForDefinedFontSpecification} from './IfcTextStyleForDefinedFont.bldrs'
import {IfcTextStyleTextModelSpecification} from './IfcTextStyleTextModel.bldrs'
import {IfcTextStyleWithBoxCharacteristicsSpecification} from './IfcTextStyleWithBoxCharacteristics.bldrs'
import {IfcTextureCoordinateSpecification} from './IfcTextureCoordinate.bldrs'
import {IfcTextureCoordinateGeneratorSpecification} from './IfcTextureCoordinateGenerator.bldrs'
import {IfcTextureMapSpecification} from './IfcTextureMap.bldrs'
import {IfcTextureVertexSpecification} from './IfcTextureVertex.bldrs'
import {IfcTimeSeriesReferenceRelationshipSpecification} from './IfcTimeSeriesReferenceRelationship.bldrs'
import {IfcTimeSeriesValueSpecification} from './IfcTimeSeriesValue.bldrs'
import {IfcVertexSpecification} from './IfcVertex.bldrs'
import {IfcWindowStyleSpecification} from './IfcWindowStyle.bldrs'
import {IfcUnitAssignmentSpecification} from './IfcUnitAssignment.bldrs'
import {IfcVertexPointSpecification} from './IfcVertexPoint.bldrs'
import {IfcVertexBasedTextureMapSpecification} from './IfcVertexBasedTextureMap.bldrs'
import {IfcVirtualGridIntersectionSpecification} from './IfcVirtualGridIntersection.bldrs'
import {IfcWallStandardCaseSpecification} from './IfcWallStandardCase.bldrs'
import {IfcWorkPlanSpecification} from './IfcWorkPlan.bldrs'
import {IfcWorkScheduleSpecification} from './IfcWorkSchedule.bldrs'

export type IFCSchema = 'IFC';


export default class SchemaSpecificationIFC implements SchemaSpecification
{
    public readonly name: IFCSchema = 'IFC';
    
    public readonly components : IfcComponentTypeNames[] = [ 'Ifc2DCompositeCurve', 'IfcCompositeCurve', 'IfcActionRequest', 'IfcControl', 'IfcActor', 'IfcOccupant', 'IfcObject', 'IfcActorRole', 'IfcActuatorType', 'IfcDistributionControlElementType', 'IfcAddress', 'IfcPostalAddress', 'IfcTelecomAddress', 'IfcAirTerminalBoxType', 'IfcFlowControllerType', 'IfcAirTerminalType', 'IfcFlowTerminalType', 'IfcAirToAirHeatRecoveryType', 'IfcEnergyConversionDeviceType', 'IfcAlarmType', 'IfcAngularDimension', 'IfcDimensionCurveDirectedCallout', 'IfcAnnotation', 'IfcProduct', 'IfcAnnotationCurveOccurrence', 'IfcDimensionCurve', 'IfcProjectionCurve', 'IfcAnnotationOccurrence', 'IfcAnnotationFillArea', 'IfcGeometricRepresentationItem', 'IfcAnnotationFillAreaOccurrence', 'IfcAnnotationSurfaceOccurrence', 'IfcAnnotationSymbolOccurrence', 'IfcAnnotationTextOccurrence', 'IfcStyledItem', 'IfcAnnotationSurface', 'IfcTerminatorSymbol', 'IfcApplication', 'IfcAppliedValue', 'IfcCostValue', 'IfcEnvironmentalImpactValue', 'IfcAppliedValueRelationship', 'IfcApproval', 'IfcApprovalActorRelationship', 'IfcApprovalPropertyRelationship', 'IfcApprovalRelationship', 'IfcArbitraryClosedProfileDef', 'IfcArbitraryProfileDefWithVoids', 'IfcProfileDef', 'IfcArbitraryOpenProfileDef', 'IfcCenterLineProfileDef', 'IfcAsset', 'IfcGroup', 'IfcAsymmetricIShapeProfileDef', 'IfcIShapeProfileDef', 'IfcAxis1Placement', 'IfcPlacement', 'IfcAxis2Placement2D', 'IfcAxis2Placement3D', 'IfcBSplineCurve', 'IfcBezierCurve', 'IfcBoundedCurve', 'IfcBeam', 'IfcBuildingElement', 'IfcBeamType', 'IfcBuildingElementType', 'IfcRationalBezierCurve', 'IfcBlobTexture', 'IfcSurfaceTexture', 'IfcBlock', 'IfcCsgPrimitive3D', 'IfcBoilerType', 'IfcBooleanClippingResult', 'IfcBooleanResult', 'IfcBoundaryCondition', 'IfcBoundaryEdgeCondition', 'IfcBoundaryFaceCondition', 'IfcBoundaryNodeCondition', 'IfcBoundaryNodeConditionWarping', 'IfcPolyline', 'IfcTrimmedCurve', 'IfcCurve', 'IfcBoundedSurface', 'IfcCurveBoundedPlane', 'IfcRectangularTrimmedSurface', 'IfcSurface', 'IfcBoundingBox', 'IfcBoxedHalfSpace', 'IfcHalfSpaceSolid', 'IfcBuilding', 'IfcSpatialStructureElement', 'IfcBuildingElementComponent', 'IfcBuildingElementProxy', 'IfcColumn', 'IfcCovering', 'IfcCurtainWall', 'IfcDoor', 'IfcFooting', 'IfcMember', 'IfcPile', 'IfcPlate', 'IfcRailing', 'IfcRamp', 'IfcRampFlight', 'IfcRoof', 'IfcSlab', 'IfcStair', 'IfcStairFlight', 'IfcWall', 'IfcWindow', 'IfcElement', 'IfcBuildingElementPart', 'IfcReinforcingElement', 'IfcBuildingElementProxyType', 'IfcColumnType', 'IfcCoveringType', 'IfcCurtainWallType', 'IfcMemberType', 'IfcPlateType', 'IfcRailingType', 'IfcRampFlightType', 'IfcSlabType', 'IfcStairFlightType', 'IfcWallType', 'IfcElementType', 'IfcBuildingStorey', 'IfcCShapeProfileDef', 'IfcParameterizedProfileDef', 'IfcCableCarrierFittingType', 'IfcFlowFittingType', 'IfcCableCarrierSegmentType', 'IfcFlowSegmentType', 'IfcCableSegmentType', 'IfcCalendarDate', 'IfcCartesianPoint', 'IfcPoint', 'IfcCartesianTransformationOperator', 'IfcCartesianTransformationOperator2D', 'IfcCartesianTransformationOperator3D', 'IfcCartesianTransformationOperator2DnonUniform', 'IfcCartesianTransformationOperator3DnonUniform', 'IfcChamferEdgeFeature', 'IfcEdgeFeature', 'IfcChillerType', 'IfcCircle', 'IfcConic', 'IfcCircleHollowProfileDef', 'IfcCircleProfileDef', 'IfcClassification', 'IfcClassificationItem', 'IfcClassificationItemRelationship', 'IfcClassificationNotation', 'IfcClassificationNotationFacet', 'IfcClassificationReference', 'IfcExternalReference', 'IfcClosedShell', 'IfcConnectedFaceSet', 'IfcCoilType', 'IfcColourRgb', 'IfcColourSpecification', 'IfcComplexProperty', 'IfcProperty', 'IfcCompositeCurveSegment', 'IfcCompositeProfileDef', 'IfcCompressorType', 'IfcFlowMovingDeviceType', 'IfcCondenserType', 'IfcCondition', 'IfcConditionCriterion', 'IfcEllipse', 'IfcOpenShell', 'IfcTopologicalRepresentationItem', 'IfcConnectionCurveGeometry', 'IfcConnectionGeometry', 'IfcConnectionPointGeometry', 'IfcConnectionPortGeometry', 'IfcConnectionSurfaceGeometry', 'IfcConnectionPointEccentricity', 'IfcConstraint', 'IfcMetric', 'IfcObjective', 'IfcConstraintAggregationRelationship', 'IfcConstraintClassificationRelationship', 'IfcConstraintRelationship', 'IfcConstructionEquipmentResource', 'IfcConstructionResource', 'IfcConstructionMaterialResource', 'IfcConstructionProductResource', 'IfcCrewResource', 'IfcLaborResource', 'IfcSubContractResource', 'IfcResource', 'IfcContextDependentUnit', 'IfcNamedUnit', 'IfcCostItem', 'IfcCostSchedule', 'IfcEquipmentStandard', 'IfcFurnitureStandard', 'IfcPerformanceHistory', 'IfcPermit', 'IfcProjectOrder', 'IfcProjectOrderRecord', 'IfcScheduleTimeControl', 'IfcServiceLife', 'IfcSpaceProgram', 'IfcTimeSeriesSchedule', 'IfcWorkControl', 'IfcControllerType', 'IfcConversionBasedUnit', 'IfcCooledBeamType', 'IfcCoolingTowerType', 'IfcCoordinatedUniversalTimeOffset', 'IfcCraneRailAShapeProfileDef', 'IfcCraneRailFShapeProfileDef', 'IfcRectangularPyramid', 'IfcRightCircularCone', 'IfcRightCircularCylinder', 'IfcSphere', 'IfcCsgSolid', 'IfcSolidModel', 'IfcCurrencyRelationship', 'IfcLine', 'IfcOffsetCurve2D', 'IfcOffsetCurve3D', 'IfcCurveStyle', 'IfcPresentationStyle', 'IfcCurveStyleFont', 'IfcCurveStyleFontAndScaling', 'IfcCurveStyleFontPattern', 'IfcDamperType', 'IfcDateAndTime', 'IfcDefinedSymbol', 'IfcDerivedProfileDef', 'IfcDerivedUnit', 'IfcDerivedUnitElement', 'IfcDiameterDimension', 'IfcDimensionCalloutRelationship', 'IfcDraughtingCalloutRelationship', 'IfcLinearDimension', 'IfcRadiusDimension', 'IfcDraughtingCallout', 'IfcDimensionCurveTerminator', 'IfcDimensionPair', 'IfcDimensionalExponents', 'IfcDirection', 'IfcDiscreteAccessory', 'IfcElementComponent', 'IfcDiscreteAccessoryType', 'IfcVibrationIsolatorType', 'IfcElementComponentType', 'IfcDistributionChamberElement', 'IfcDistributionFlowElement', 'IfcDistributionChamberElementType', 'IfcDistributionFlowElementType', 'IfcDistributionControlElement', 'IfcDistributionElement', 'IfcFlowInstrumentType', 'IfcSensorType', 'IfcDistributionElementType', 'IfcEnergyConversionDevice', 'IfcFlowController', 'IfcFlowFitting', 'IfcFlowMovingDevice', 'IfcFlowSegment', 'IfcFlowStorageDevice', 'IfcFlowTerminal', 'IfcFlowTreatmentDevice', 'IfcFlowStorageDeviceType', 'IfcFlowTreatmentDeviceType', 'IfcDistributionPort', 'IfcPort', 'IfcDocumentElectronicFormat', 'IfcDocumentInformation', 'IfcDocumentInformationRelationship', 'IfcDocumentReference', 'IfcDoorLiningProperties', 'IfcPropertySetDefinition', 'IfcDoorPanelProperties', 'IfcDoorStyle', 'IfcTypeProduct', 'IfcStructuredDimensionCallout', 'IfcDraughtingPreDefinedColour', 'IfcPreDefinedColour', 'IfcDraughtingPreDefinedCurveFont', 'IfcPreDefinedCurveFont', 'IfcDraughtingPreDefinedTextFont', 'IfcPreDefinedTextFont', 'IfcDuctFittingType', 'IfcDuctSegmentType', 'IfcDuctSilencerType', 'IfcEdge', 'IfcEdgeCurve', 'IfcOrientedEdge', 'IfcSubedge', 'IfcRoundedEdgeFeature', 'IfcFeatureElementSubtraction', 'IfcEdgeLoop', 'IfcLoop', 'IfcElectricApplianceType', 'IfcElectricDistributionPoint', 'IfcElectricFlowStorageDeviceType', 'IfcElectricGeneratorType', 'IfcElectricHeaterType', 'IfcElectricMotorType', 'IfcElectricTimeControlType', 'IfcElectricalBaseProperties', 'IfcEnergyProperties', 'IfcElectricalCircuit', 'IfcSystem', 'IfcElectricalElement', 'IfcElementAssembly', 'IfcEquipmentElement', 'IfcFeatureElement', 'IfcFurnishingElement', 'IfcTransportElement', 'IfcVirtualElement', 'IfcFastener', 'IfcFastenerType', 'IfcElementQuantity', 'IfcFurnishingElementType', 'IfcSpatialStructureElementType', 'IfcTransportElementType', 'IfcElementarySurface', 'IfcPlane', 'IfcEllipseProfileDef', 'IfcEvaporativeCoolerType', 'IfcEvaporatorType', 'IfcHeatExchangerType', 'IfcHumidifierType', 'IfcMotorConnectionType', 'IfcSpaceHeaterType', 'IfcTransformerType', 'IfcTubeBundleType', 'IfcUnitaryEquipmentType', 'IfcExtendedMaterialProperties', 'IfcMaterialProperties', 'IfcExternallyDefinedHatchStyle', 'IfcExternallyDefinedSurfaceStyle', 'IfcExternallyDefinedSymbol', 'IfcExternallyDefinedTextFont', 'IfcLibraryReference', 'IfcExtrudedAreaSolid', 'IfcSweptAreaSolid', 'IfcFace', 'IfcFaceSurface', 'IfcFaceBasedSurfaceModel', 'IfcFaceBound', 'IfcFaceOuterBound', 'IfcFacetedBrep', 'IfcManifoldSolidBrep', 'IfcFacetedBrepWithVoids', 'IfcFailureConnectionCondition', 'IfcStructuralConnectionCondition', 'IfcFanType', 'IfcMechanicalFastener', 'IfcMechanicalFastenerType', 'IfcFeatureElementAddition', 'IfcProjectionElement', 'IfcOpeningElement', 'IfcFillAreaStyle', 'IfcFillAreaStyleHatching', 'IfcFillAreaStyleTileSymbolWithStyle', 'IfcFillAreaStyleTiles', 'IfcFilterType', 'IfcFireSuppressionTerminalType', 'IfcFlowMeterType', 'IfcProtectiveDeviceType', 'IfcSwitchingDeviceType', 'IfcValveType', 'IfcJunctionBoxType', 'IfcPipeFittingType', 'IfcPumpType', 'IfcPipeSegmentType', 'IfcTankType', 'IfcGasTerminalType', 'IfcLampType', 'IfcLightFixtureType', 'IfcOutletType', 'IfcSanitaryTerminalType', 'IfcStackTerminalType', 'IfcWasteTerminalType', 'IfcFluidFlowProperties', 'IfcFuelProperties', 'IfcFurnitureType', 'IfcSystemFurnitureElementType', 'IfcGeneralMaterialProperties', 'IfcGeneralProfileProperties', 'IfcStructuralProfileProperties', 'IfcProfileProperties', 'IfcGeometricCurveSet', 'IfcGeometricSet', 'IfcGeometricRepresentationContext', 'IfcGeometricRepresentationSubContext', 'IfcRepresentationContext', 'IfcLightSource', 'IfcOneDirectionRepeatFactor', 'IfcPlanarExtent', 'IfcSectionedSpine', 'IfcShellBasedSurfaceModel', 'IfcTextLiteral', 'IfcVector', 'IfcRepresentationItem', 'IfcGrid', 'IfcGridAxis', 'IfcGridPlacement', 'IfcObjectPlacement', 'IfcInventory', 'IfcStructuralLoadGroup', 'IfcStructuralResultGroup', 'IfcZone', 'IfcPolygonalBoundedHalfSpace', 'IfcHygroscopicMaterialProperties', 'IfcImageTexture', 'IfcIrregularTimeSeries', 'IfcTimeSeries', 'IfcIrregularTimeSeriesValue', 'IfcLShapeProfileDef', 'IfcLibraryInformation', 'IfcLightDistributionData', 'IfcLightIntensityDistribution', 'IfcLightSourceAmbient', 'IfcLightSourceDirectional', 'IfcLightSourceGoniometric', 'IfcLightSourcePositional', 'IfcLightSourceSpot', 'IfcLocalPlacement', 'IfcLocalTime', 'IfcPolyLoop', 'IfcVertexLoop', 'IfcMappedItem', 'IfcMaterial', 'IfcMaterialClassificationRelationship', 'IfcMaterialDefinitionRepresentation', 'IfcProductRepresentation', 'IfcMaterialLayer', 'IfcMaterialLayerSet', 'IfcMaterialLayerSetUsage', 'IfcMaterialList', 'IfcMechanicalMaterialProperties', 'IfcOpticalMaterialProperties', 'IfcProductsOfCombustionProperties', 'IfcThermalMaterialProperties', 'IfcWaterProperties', 'IfcMeasureWithUnit', 'IfcMechanicalConcreteMaterialProperties', 'IfcMechanicalSteelMaterialProperties', 'IfcMonetaryUnit', 'IfcMove', 'IfcTask', 'IfcSIUnit', 'IfcProcess', 'IfcProject', 'IfcObjectDefinition', 'IfcTypeObject', 'IfcRoot', 'IfcTwoDirectionRepeatFactor', 'IfcOrderAction', 'IfcOrganization', 'IfcOrganizationRelationship', 'IfcOwnerHistory', 'IfcRectangleProfileDef', 'IfcTShapeProfileDef', 'IfcTrapeziumProfileDef', 'IfcUShapeProfileDef', 'IfcZShapeProfileDef', 'IfcPath', 'IfcPermeableCoveringProperties', 'IfcPerson', 'IfcPersonAndOrganization', 'IfcPhysicalComplexQuantity', 'IfcPhysicalQuantity', 'IfcPhysicalSimpleQuantity', 'IfcQuantityArea', 'IfcQuantityCount', 'IfcQuantityLength', 'IfcQuantityTime', 'IfcQuantityVolume', 'IfcQuantityWeight', 'IfcPixelTexture', 'IfcPlanarBox', 'IfcPointOnCurve', 'IfcPointOnSurface', 'IfcPreDefinedItem', 'IfcPreDefinedDimensionSymbol', 'IfcPreDefinedSymbol', 'IfcPreDefinedPointMarkerSymbol', 'IfcPreDefinedTerminatorSymbol', 'IfcTextStyleFontModel', 'IfcPresentationLayerAssignment', 'IfcPresentationLayerWithStyle', 'IfcSurfaceStyle', 'IfcSymbolStyle', 'IfcTextStyle', 'IfcPresentationStyleAssignment', 'IfcProcedure', 'IfcProxy', 'IfcStructuralActivity', 'IfcStructuralItem', 'IfcProductDefinitionShape', 'IfcRibPlateProfileProperties', 'IfcSimpleProperty', 'IfcPropertyBoundedValue', 'IfcPropertyConstraintRelationship', 'IfcPropertyDefinition', 'IfcPropertyDependencyRelationship', 'IfcPropertyEnumeratedValue', 'IfcPropertyEnumeration', 'IfcPropertyListValue', 'IfcPropertyReferenceValue', 'IfcPropertySet', 'IfcReinforcementDefinitionProperties', 'IfcServiceLifeFactor', 'IfcSoundProperties', 'IfcSoundValue', 'IfcSpaceThermalLoadProperties', 'IfcWindowLiningProperties', 'IfcWindowPanelProperties', 'IfcPropertySingleValue', 'IfcPropertyTableValue', 'IfcRectangleHollowProfileDef', 'IfcRoundedRectangleProfileDef', 'IfcReferencesValueDocument', 'IfcRegularTimeSeries', 'IfcReinforcementBarProperties', 'IfcReinforcingBar', 'IfcReinforcingMesh', 'IfcTendon', 'IfcTendonAnchor', 'IfcRelAggregates', 'IfcRelDecomposes', 'IfcRelAssigns', 'IfcRelAssignsToActor', 'IfcRelAssignsToControl', 'IfcRelAssignsToGroup', 'IfcRelAssignsToProcess', 'IfcRelAssignsToProduct', 'IfcRelAssignsToResource', 'IfcRelationship', 'IfcRelAssignsTasks', 'IfcRelOccupiesSpaces', 'IfcRelAssignsToProjectOrder', 'IfcRelSchedulesCostItems', 'IfcRelAssociates', 'IfcRelAssociatesAppliedValue', 'IfcRelAssociatesApproval', 'IfcRelAssociatesClassification', 'IfcRelAssociatesConstraint', 'IfcRelAssociatesDocument', 'IfcRelAssociatesLibrary', 'IfcRelAssociatesMaterial', 'IfcRelAssociatesProfileProperties', 'IfcRelConnects', 'IfcRelConnectsElements', 'IfcRelConnectsPortToElement', 'IfcRelConnectsPorts', 'IfcRelConnectsStructuralActivity', 'IfcRelConnectsStructuralElement', 'IfcRelConnectsStructuralMember', 'IfcRelContainedInSpatialStructure', 'IfcRelCoversBldgElements', 'IfcRelCoversSpaces', 'IfcRelFillsElement', 'IfcRelFlowControlElements', 'IfcRelInteractionRequirements', 'IfcRelProjectsElement', 'IfcRelReferencedInSpatialStructure', 'IfcRelSequence', 'IfcRelServicesBuildings', 'IfcRelSpaceBoundary', 'IfcRelVoidsElement', 'IfcRelConnectsPathElements', 'IfcRelConnectsWithRealizingElements', 'IfcRelConnectsWithEccentricity', 'IfcRelNests', 'IfcRelDefines', 'IfcRelDefinesByProperties', 'IfcRelDefinesByType', 'IfcRelOverridesProperties', 'IfcRelaxation', 'IfcRepresentation', 'IfcShapeModel', 'IfcStyleModel', 'IfcRepresentationMap', 'IfcRevolvedAreaSolid', 'IfcSectionProperties', 'IfcSectionReinforcementProperties', 'IfcShapeAspect', 'IfcShapeRepresentation', 'IfcTopologyRepresentation', 'IfcSite', 'IfcSlippageConnectionCondition', 'IfcSweptDiskSolid', 'IfcSpace', 'IfcSpaceType', 'IfcStructuralAction', 'IfcStructuralLinearAction', 'IfcStructuralPlanarAction', 'IfcStructuralPointAction', 'IfcStructuralReaction', 'IfcStructuralAnalysisModel', 'IfcStructuralConnection', 'IfcStructuralCurveConnection', 'IfcStructuralPointConnection', 'IfcStructuralSurfaceConnection', 'IfcStructuralCurveMember', 'IfcStructuralCurveMemberVarying', 'IfcStructuralMember', 'IfcStructuralLinearActionVarying', 'IfcStructuralLoad', 'IfcStructuralLoadStatic', 'IfcStructuralLoadLinearForce', 'IfcStructuralLoadPlanarForce', 'IfcStructuralLoadSingleDisplacement', 'IfcStructuralLoadSingleDisplacementDistortion', 'IfcStructuralLoadSingleForce', 'IfcStructuralLoadSingleForceWarping', 'IfcStructuralLoadTemperature', 'IfcStructuralSurfaceMember', 'IfcStructuralPlanarActionVarying', 'IfcStructuralPointReaction', 'IfcStructuralSteelProfileProperties', 'IfcStructuralSurfaceMemberVarying', 'IfcStyledRepresentation', 'IfcSweptSurface', 'IfcSurfaceCurveSweptAreaSolid', 'IfcSurfaceOfLinearExtrusion', 'IfcSurfaceOfRevolution', 'IfcSurfaceStyleLighting', 'IfcSurfaceStyleRefraction', 'IfcSurfaceStyleRendering', 'IfcSurfaceStyleShading', 'IfcSurfaceStyleWithTextures', 'IfcTable', 'IfcTableRow', 'IfcTextLiteralWithExtent', 'IfcTextStyleForDefinedFont', 'IfcTextStyleTextModel', 'IfcTextStyleWithBoxCharacteristics', 'IfcTextureCoordinate', 'IfcTextureCoordinateGenerator', 'IfcTextureMap', 'IfcTextureVertex', 'IfcTimeSeriesReferenceRelationship', 'IfcTimeSeriesValue', 'IfcVertex', 'IfcWindowStyle', 'IfcUnitAssignment', 'IfcVertexPoint', 'IfcVertexBasedTextureMap', 'IfcVirtualGridIntersection', 'IfcWallStandardCase', 'IfcWorkPlan', 'IfcWorkSchedule' ];

    public readonly specifications : ReadonlyMap< IfcComponentTypeNames, ComponentSpecification >;

    constructor()
    {
        let localSpecifications = new Map< IfcComponentTypeNames, ComponentSpecification >();

		localSpecifications.set( 'Ifc2DCompositeCurve', new Ifc2DCompositeCurveSpecification() );
		localSpecifications.set( 'IfcCompositeCurve', new IfcCompositeCurveSpecification() );
		localSpecifications.set( 'IfcActionRequest', new IfcActionRequestSpecification() );
		localSpecifications.set( 'IfcControl', new IfcControlSpecification() );
		localSpecifications.set( 'IfcActor', new IfcActorSpecification() );
		localSpecifications.set( 'IfcOccupant', new IfcOccupantSpecification() );
		localSpecifications.set( 'IfcObject', new IfcObjectSpecification() );
		localSpecifications.set( 'IfcActorRole', new IfcActorRoleSpecification() );
		localSpecifications.set( 'IfcActuatorType', new IfcActuatorTypeSpecification() );
		localSpecifications.set( 'IfcDistributionControlElementType', new IfcDistributionControlElementTypeSpecification() );
		localSpecifications.set( 'IfcAddress', new IfcAddressSpecification() );
		localSpecifications.set( 'IfcPostalAddress', new IfcPostalAddressSpecification() );
		localSpecifications.set( 'IfcTelecomAddress', new IfcTelecomAddressSpecification() );
		localSpecifications.set( 'IfcAirTerminalBoxType', new IfcAirTerminalBoxTypeSpecification() );
		localSpecifications.set( 'IfcFlowControllerType', new IfcFlowControllerTypeSpecification() );
		localSpecifications.set( 'IfcAirTerminalType', new IfcAirTerminalTypeSpecification() );
		localSpecifications.set( 'IfcFlowTerminalType', new IfcFlowTerminalTypeSpecification() );
		localSpecifications.set( 'IfcAirToAirHeatRecoveryType', new IfcAirToAirHeatRecoveryTypeSpecification() );
		localSpecifications.set( 'IfcEnergyConversionDeviceType', new IfcEnergyConversionDeviceTypeSpecification() );
		localSpecifications.set( 'IfcAlarmType', new IfcAlarmTypeSpecification() );
		localSpecifications.set( 'IfcAngularDimension', new IfcAngularDimensionSpecification() );
		localSpecifications.set( 'IfcDimensionCurveDirectedCallout', new IfcDimensionCurveDirectedCalloutSpecification() );
		localSpecifications.set( 'IfcAnnotation', new IfcAnnotationSpecification() );
		localSpecifications.set( 'IfcProduct', new IfcProductSpecification() );
		localSpecifications.set( 'IfcAnnotationCurveOccurrence', new IfcAnnotationCurveOccurrenceSpecification() );
		localSpecifications.set( 'IfcDimensionCurve', new IfcDimensionCurveSpecification() );
		localSpecifications.set( 'IfcProjectionCurve', new IfcProjectionCurveSpecification() );
		localSpecifications.set( 'IfcAnnotationOccurrence', new IfcAnnotationOccurrenceSpecification() );
		localSpecifications.set( 'IfcAnnotationFillArea', new IfcAnnotationFillAreaSpecification() );
		localSpecifications.set( 'IfcGeometricRepresentationItem', new IfcGeometricRepresentationItemSpecification() );
		localSpecifications.set( 'IfcAnnotationFillAreaOccurrence', new IfcAnnotationFillAreaOccurrenceSpecification() );
		localSpecifications.set( 'IfcAnnotationSurfaceOccurrence', new IfcAnnotationSurfaceOccurrenceSpecification() );
		localSpecifications.set( 'IfcAnnotationSymbolOccurrence', new IfcAnnotationSymbolOccurrenceSpecification() );
		localSpecifications.set( 'IfcAnnotationTextOccurrence', new IfcAnnotationTextOccurrenceSpecification() );
		localSpecifications.set( 'IfcStyledItem', new IfcStyledItemSpecification() );
		localSpecifications.set( 'IfcAnnotationSurface', new IfcAnnotationSurfaceSpecification() );
		localSpecifications.set( 'IfcTerminatorSymbol', new IfcTerminatorSymbolSpecification() );
		localSpecifications.set( 'IfcApplication', new IfcApplicationSpecification() );
		localSpecifications.set( 'IfcAppliedValue', new IfcAppliedValueSpecification() );
		localSpecifications.set( 'IfcCostValue', new IfcCostValueSpecification() );
		localSpecifications.set( 'IfcEnvironmentalImpactValue', new IfcEnvironmentalImpactValueSpecification() );
		localSpecifications.set( 'IfcAppliedValueRelationship', new IfcAppliedValueRelationshipSpecification() );
		localSpecifications.set( 'IfcApproval', new IfcApprovalSpecification() );
		localSpecifications.set( 'IfcApprovalActorRelationship', new IfcApprovalActorRelationshipSpecification() );
		localSpecifications.set( 'IfcApprovalPropertyRelationship', new IfcApprovalPropertyRelationshipSpecification() );
		localSpecifications.set( 'IfcApprovalRelationship', new IfcApprovalRelationshipSpecification() );
		localSpecifications.set( 'IfcArbitraryClosedProfileDef', new IfcArbitraryClosedProfileDefSpecification() );
		localSpecifications.set( 'IfcArbitraryProfileDefWithVoids', new IfcArbitraryProfileDefWithVoidsSpecification() );
		localSpecifications.set( 'IfcProfileDef', new IfcProfileDefSpecification() );
		localSpecifications.set( 'IfcArbitraryOpenProfileDef', new IfcArbitraryOpenProfileDefSpecification() );
		localSpecifications.set( 'IfcCenterLineProfileDef', new IfcCenterLineProfileDefSpecification() );
		localSpecifications.set( 'IfcAsset', new IfcAssetSpecification() );
		localSpecifications.set( 'IfcGroup', new IfcGroupSpecification() );
		localSpecifications.set( 'IfcAsymmetricIShapeProfileDef', new IfcAsymmetricIShapeProfileDefSpecification() );
		localSpecifications.set( 'IfcIShapeProfileDef', new IfcIShapeProfileDefSpecification() );
		localSpecifications.set( 'IfcAxis1Placement', new IfcAxis1PlacementSpecification() );
		localSpecifications.set( 'IfcPlacement', new IfcPlacementSpecification() );
		localSpecifications.set( 'IfcAxis2Placement2D', new IfcAxis2Placement2DSpecification() );
		localSpecifications.set( 'IfcAxis2Placement3D', new IfcAxis2Placement3DSpecification() );
		localSpecifications.set( 'IfcBSplineCurve', new IfcBSplineCurveSpecification() );
		localSpecifications.set( 'IfcBezierCurve', new IfcBezierCurveSpecification() );
		localSpecifications.set( 'IfcBoundedCurve', new IfcBoundedCurveSpecification() );
		localSpecifications.set( 'IfcBeam', new IfcBeamSpecification() );
		localSpecifications.set( 'IfcBuildingElement', new IfcBuildingElementSpecification() );
		localSpecifications.set( 'IfcBeamType', new IfcBeamTypeSpecification() );
		localSpecifications.set( 'IfcBuildingElementType', new IfcBuildingElementTypeSpecification() );
		localSpecifications.set( 'IfcRationalBezierCurve', new IfcRationalBezierCurveSpecification() );
		localSpecifications.set( 'IfcBlobTexture', new IfcBlobTextureSpecification() );
		localSpecifications.set( 'IfcSurfaceTexture', new IfcSurfaceTextureSpecification() );
		localSpecifications.set( 'IfcBlock', new IfcBlockSpecification() );
		localSpecifications.set( 'IfcCsgPrimitive3D', new IfcCsgPrimitive3DSpecification() );
		localSpecifications.set( 'IfcBoilerType', new IfcBoilerTypeSpecification() );
		localSpecifications.set( 'IfcBooleanClippingResult', new IfcBooleanClippingResultSpecification() );
		localSpecifications.set( 'IfcBooleanResult', new IfcBooleanResultSpecification() );
		localSpecifications.set( 'IfcBoundaryCondition', new IfcBoundaryConditionSpecification() );
		localSpecifications.set( 'IfcBoundaryEdgeCondition', new IfcBoundaryEdgeConditionSpecification() );
		localSpecifications.set( 'IfcBoundaryFaceCondition', new IfcBoundaryFaceConditionSpecification() );
		localSpecifications.set( 'IfcBoundaryNodeCondition', new IfcBoundaryNodeConditionSpecification() );
		localSpecifications.set( 'IfcBoundaryNodeConditionWarping', new IfcBoundaryNodeConditionWarpingSpecification() );
		localSpecifications.set( 'IfcPolyline', new IfcPolylineSpecification() );
		localSpecifications.set( 'IfcTrimmedCurve', new IfcTrimmedCurveSpecification() );
		localSpecifications.set( 'IfcCurve', new IfcCurveSpecification() );
		localSpecifications.set( 'IfcBoundedSurface', new IfcBoundedSurfaceSpecification() );
		localSpecifications.set( 'IfcCurveBoundedPlane', new IfcCurveBoundedPlaneSpecification() );
		localSpecifications.set( 'IfcRectangularTrimmedSurface', new IfcRectangularTrimmedSurfaceSpecification() );
		localSpecifications.set( 'IfcSurface', new IfcSurfaceSpecification() );
		localSpecifications.set( 'IfcBoundingBox', new IfcBoundingBoxSpecification() );
		localSpecifications.set( 'IfcBoxedHalfSpace', new IfcBoxedHalfSpaceSpecification() );
		localSpecifications.set( 'IfcHalfSpaceSolid', new IfcHalfSpaceSolidSpecification() );
		localSpecifications.set( 'IfcBuilding', new IfcBuildingSpecification() );
		localSpecifications.set( 'IfcSpatialStructureElement', new IfcSpatialStructureElementSpecification() );
		localSpecifications.set( 'IfcBuildingElementComponent', new IfcBuildingElementComponentSpecification() );
		localSpecifications.set( 'IfcBuildingElementProxy', new IfcBuildingElementProxySpecification() );
		localSpecifications.set( 'IfcColumn', new IfcColumnSpecification() );
		localSpecifications.set( 'IfcCovering', new IfcCoveringSpecification() );
		localSpecifications.set( 'IfcCurtainWall', new IfcCurtainWallSpecification() );
		localSpecifications.set( 'IfcDoor', new IfcDoorSpecification() );
		localSpecifications.set( 'IfcFooting', new IfcFootingSpecification() );
		localSpecifications.set( 'IfcMember', new IfcMemberSpecification() );
		localSpecifications.set( 'IfcPile', new IfcPileSpecification() );
		localSpecifications.set( 'IfcPlate', new IfcPlateSpecification() );
		localSpecifications.set( 'IfcRailing', new IfcRailingSpecification() );
		localSpecifications.set( 'IfcRamp', new IfcRampSpecification() );
		localSpecifications.set( 'IfcRampFlight', new IfcRampFlightSpecification() );
		localSpecifications.set( 'IfcRoof', new IfcRoofSpecification() );
		localSpecifications.set( 'IfcSlab', new IfcSlabSpecification() );
		localSpecifications.set( 'IfcStair', new IfcStairSpecification() );
		localSpecifications.set( 'IfcStairFlight', new IfcStairFlightSpecification() );
		localSpecifications.set( 'IfcWall', new IfcWallSpecification() );
		localSpecifications.set( 'IfcWindow', new IfcWindowSpecification() );
		localSpecifications.set( 'IfcElement', new IfcElementSpecification() );
		localSpecifications.set( 'IfcBuildingElementPart', new IfcBuildingElementPartSpecification() );
		localSpecifications.set( 'IfcReinforcingElement', new IfcReinforcingElementSpecification() );
		localSpecifications.set( 'IfcBuildingElementProxyType', new IfcBuildingElementProxyTypeSpecification() );
		localSpecifications.set( 'IfcColumnType', new IfcColumnTypeSpecification() );
		localSpecifications.set( 'IfcCoveringType', new IfcCoveringTypeSpecification() );
		localSpecifications.set( 'IfcCurtainWallType', new IfcCurtainWallTypeSpecification() );
		localSpecifications.set( 'IfcMemberType', new IfcMemberTypeSpecification() );
		localSpecifications.set( 'IfcPlateType', new IfcPlateTypeSpecification() );
		localSpecifications.set( 'IfcRailingType', new IfcRailingTypeSpecification() );
		localSpecifications.set( 'IfcRampFlightType', new IfcRampFlightTypeSpecification() );
		localSpecifications.set( 'IfcSlabType', new IfcSlabTypeSpecification() );
		localSpecifications.set( 'IfcStairFlightType', new IfcStairFlightTypeSpecification() );
		localSpecifications.set( 'IfcWallType', new IfcWallTypeSpecification() );
		localSpecifications.set( 'IfcElementType', new IfcElementTypeSpecification() );
		localSpecifications.set( 'IfcBuildingStorey', new IfcBuildingStoreySpecification() );
		localSpecifications.set( 'IfcCShapeProfileDef', new IfcCShapeProfileDefSpecification() );
		localSpecifications.set( 'IfcParameterizedProfileDef', new IfcParameterizedProfileDefSpecification() );
		localSpecifications.set( 'IfcCableCarrierFittingType', new IfcCableCarrierFittingTypeSpecification() );
		localSpecifications.set( 'IfcFlowFittingType', new IfcFlowFittingTypeSpecification() );
		localSpecifications.set( 'IfcCableCarrierSegmentType', new IfcCableCarrierSegmentTypeSpecification() );
		localSpecifications.set( 'IfcFlowSegmentType', new IfcFlowSegmentTypeSpecification() );
		localSpecifications.set( 'IfcCableSegmentType', new IfcCableSegmentTypeSpecification() );
		localSpecifications.set( 'IfcCalendarDate', new IfcCalendarDateSpecification() );
		localSpecifications.set( 'IfcCartesianPoint', new IfcCartesianPointSpecification() );
		localSpecifications.set( 'IfcPoint', new IfcPointSpecification() );
		localSpecifications.set( 'IfcCartesianTransformationOperator', new IfcCartesianTransformationOperatorSpecification() );
		localSpecifications.set( 'IfcCartesianTransformationOperator2D', new IfcCartesianTransformationOperator2DSpecification() );
		localSpecifications.set( 'IfcCartesianTransformationOperator3D', new IfcCartesianTransformationOperator3DSpecification() );
		localSpecifications.set( 'IfcCartesianTransformationOperator2DnonUniform', new IfcCartesianTransformationOperator2DnonUniformSpecification() );
		localSpecifications.set( 'IfcCartesianTransformationOperator3DnonUniform', new IfcCartesianTransformationOperator3DnonUniformSpecification() );
		localSpecifications.set( 'IfcChamferEdgeFeature', new IfcChamferEdgeFeatureSpecification() );
		localSpecifications.set( 'IfcEdgeFeature', new IfcEdgeFeatureSpecification() );
		localSpecifications.set( 'IfcChillerType', new IfcChillerTypeSpecification() );
		localSpecifications.set( 'IfcCircle', new IfcCircleSpecification() );
		localSpecifications.set( 'IfcConic', new IfcConicSpecification() );
		localSpecifications.set( 'IfcCircleHollowProfileDef', new IfcCircleHollowProfileDefSpecification() );
		localSpecifications.set( 'IfcCircleProfileDef', new IfcCircleProfileDefSpecification() );
		localSpecifications.set( 'IfcClassification', new IfcClassificationSpecification() );
		localSpecifications.set( 'IfcClassificationItem', new IfcClassificationItemSpecification() );
		localSpecifications.set( 'IfcClassificationItemRelationship', new IfcClassificationItemRelationshipSpecification() );
		localSpecifications.set( 'IfcClassificationNotation', new IfcClassificationNotationSpecification() );
		localSpecifications.set( 'IfcClassificationNotationFacet', new IfcClassificationNotationFacetSpecification() );
		localSpecifications.set( 'IfcClassificationReference', new IfcClassificationReferenceSpecification() );
		localSpecifications.set( 'IfcExternalReference', new IfcExternalReferenceSpecification() );
		localSpecifications.set( 'IfcClosedShell', new IfcClosedShellSpecification() );
		localSpecifications.set( 'IfcConnectedFaceSet', new IfcConnectedFaceSetSpecification() );
		localSpecifications.set( 'IfcCoilType', new IfcCoilTypeSpecification() );
		localSpecifications.set( 'IfcColourRgb', new IfcColourRgbSpecification() );
		localSpecifications.set( 'IfcColourSpecification', new IfcColourSpecificationSpecification() );
		localSpecifications.set( 'IfcComplexProperty', new IfcComplexPropertySpecification() );
		localSpecifications.set( 'IfcProperty', new IfcPropertySpecification() );
		localSpecifications.set( 'IfcCompositeCurveSegment', new IfcCompositeCurveSegmentSpecification() );
		localSpecifications.set( 'IfcCompositeProfileDef', new IfcCompositeProfileDefSpecification() );
		localSpecifications.set( 'IfcCompressorType', new IfcCompressorTypeSpecification() );
		localSpecifications.set( 'IfcFlowMovingDeviceType', new IfcFlowMovingDeviceTypeSpecification() );
		localSpecifications.set( 'IfcCondenserType', new IfcCondenserTypeSpecification() );
		localSpecifications.set( 'IfcCondition', new IfcConditionSpecification() );
		localSpecifications.set( 'IfcConditionCriterion', new IfcConditionCriterionSpecification() );
		localSpecifications.set( 'IfcEllipse', new IfcEllipseSpecification() );
		localSpecifications.set( 'IfcOpenShell', new IfcOpenShellSpecification() );
		localSpecifications.set( 'IfcTopologicalRepresentationItem', new IfcTopologicalRepresentationItemSpecification() );
		localSpecifications.set( 'IfcConnectionCurveGeometry', new IfcConnectionCurveGeometrySpecification() );
		localSpecifications.set( 'IfcConnectionGeometry', new IfcConnectionGeometrySpecification() );
		localSpecifications.set( 'IfcConnectionPointGeometry', new IfcConnectionPointGeometrySpecification() );
		localSpecifications.set( 'IfcConnectionPortGeometry', new IfcConnectionPortGeometrySpecification() );
		localSpecifications.set( 'IfcConnectionSurfaceGeometry', new IfcConnectionSurfaceGeometrySpecification() );
		localSpecifications.set( 'IfcConnectionPointEccentricity', new IfcConnectionPointEccentricitySpecification() );
		localSpecifications.set( 'IfcConstraint', new IfcConstraintSpecification() );
		localSpecifications.set( 'IfcMetric', new IfcMetricSpecification() );
		localSpecifications.set( 'IfcObjective', new IfcObjectiveSpecification() );
		localSpecifications.set( 'IfcConstraintAggregationRelationship', new IfcConstraintAggregationRelationshipSpecification() );
		localSpecifications.set( 'IfcConstraintClassificationRelationship', new IfcConstraintClassificationRelationshipSpecification() );
		localSpecifications.set( 'IfcConstraintRelationship', new IfcConstraintRelationshipSpecification() );
		localSpecifications.set( 'IfcConstructionEquipmentResource', new IfcConstructionEquipmentResourceSpecification() );
		localSpecifications.set( 'IfcConstructionResource', new IfcConstructionResourceSpecification() );
		localSpecifications.set( 'IfcConstructionMaterialResource', new IfcConstructionMaterialResourceSpecification() );
		localSpecifications.set( 'IfcConstructionProductResource', new IfcConstructionProductResourceSpecification() );
		localSpecifications.set( 'IfcCrewResource', new IfcCrewResourceSpecification() );
		localSpecifications.set( 'IfcLaborResource', new IfcLaborResourceSpecification() );
		localSpecifications.set( 'IfcSubContractResource', new IfcSubContractResourceSpecification() );
		localSpecifications.set( 'IfcResource', new IfcResourceSpecification() );
		localSpecifications.set( 'IfcContextDependentUnit', new IfcContextDependentUnitSpecification() );
		localSpecifications.set( 'IfcNamedUnit', new IfcNamedUnitSpecification() );
		localSpecifications.set( 'IfcCostItem', new IfcCostItemSpecification() );
		localSpecifications.set( 'IfcCostSchedule', new IfcCostScheduleSpecification() );
		localSpecifications.set( 'IfcEquipmentStandard', new IfcEquipmentStandardSpecification() );
		localSpecifications.set( 'IfcFurnitureStandard', new IfcFurnitureStandardSpecification() );
		localSpecifications.set( 'IfcPerformanceHistory', new IfcPerformanceHistorySpecification() );
		localSpecifications.set( 'IfcPermit', new IfcPermitSpecification() );
		localSpecifications.set( 'IfcProjectOrder', new IfcProjectOrderSpecification() );
		localSpecifications.set( 'IfcProjectOrderRecord', new IfcProjectOrderRecordSpecification() );
		localSpecifications.set( 'IfcScheduleTimeControl', new IfcScheduleTimeControlSpecification() );
		localSpecifications.set( 'IfcServiceLife', new IfcServiceLifeSpecification() );
		localSpecifications.set( 'IfcSpaceProgram', new IfcSpaceProgramSpecification() );
		localSpecifications.set( 'IfcTimeSeriesSchedule', new IfcTimeSeriesScheduleSpecification() );
		localSpecifications.set( 'IfcWorkControl', new IfcWorkControlSpecification() );
		localSpecifications.set( 'IfcControllerType', new IfcControllerTypeSpecification() );
		localSpecifications.set( 'IfcConversionBasedUnit', new IfcConversionBasedUnitSpecification() );
		localSpecifications.set( 'IfcCooledBeamType', new IfcCooledBeamTypeSpecification() );
		localSpecifications.set( 'IfcCoolingTowerType', new IfcCoolingTowerTypeSpecification() );
		localSpecifications.set( 'IfcCoordinatedUniversalTimeOffset', new IfcCoordinatedUniversalTimeOffsetSpecification() );
		localSpecifications.set( 'IfcCraneRailAShapeProfileDef', new IfcCraneRailAShapeProfileDefSpecification() );
		localSpecifications.set( 'IfcCraneRailFShapeProfileDef', new IfcCraneRailFShapeProfileDefSpecification() );
		localSpecifications.set( 'IfcRectangularPyramid', new IfcRectangularPyramidSpecification() );
		localSpecifications.set( 'IfcRightCircularCone', new IfcRightCircularConeSpecification() );
		localSpecifications.set( 'IfcRightCircularCylinder', new IfcRightCircularCylinderSpecification() );
		localSpecifications.set( 'IfcSphere', new IfcSphereSpecification() );
		localSpecifications.set( 'IfcCsgSolid', new IfcCsgSolidSpecification() );
		localSpecifications.set( 'IfcSolidModel', new IfcSolidModelSpecification() );
		localSpecifications.set( 'IfcCurrencyRelationship', new IfcCurrencyRelationshipSpecification() );
		localSpecifications.set( 'IfcLine', new IfcLineSpecification() );
		localSpecifications.set( 'IfcOffsetCurve2D', new IfcOffsetCurve2DSpecification() );
		localSpecifications.set( 'IfcOffsetCurve3D', new IfcOffsetCurve3DSpecification() );
		localSpecifications.set( 'IfcCurveStyle', new IfcCurveStyleSpecification() );
		localSpecifications.set( 'IfcPresentationStyle', new IfcPresentationStyleSpecification() );
		localSpecifications.set( 'IfcCurveStyleFont', new IfcCurveStyleFontSpecification() );
		localSpecifications.set( 'IfcCurveStyleFontAndScaling', new IfcCurveStyleFontAndScalingSpecification() );
		localSpecifications.set( 'IfcCurveStyleFontPattern', new IfcCurveStyleFontPatternSpecification() );
		localSpecifications.set( 'IfcDamperType', new IfcDamperTypeSpecification() );
		localSpecifications.set( 'IfcDateAndTime', new IfcDateAndTimeSpecification() );
		localSpecifications.set( 'IfcDefinedSymbol', new IfcDefinedSymbolSpecification() );
		localSpecifications.set( 'IfcDerivedProfileDef', new IfcDerivedProfileDefSpecification() );
		localSpecifications.set( 'IfcDerivedUnit', new IfcDerivedUnitSpecification() );
		localSpecifications.set( 'IfcDerivedUnitElement', new IfcDerivedUnitElementSpecification() );
		localSpecifications.set( 'IfcDiameterDimension', new IfcDiameterDimensionSpecification() );
		localSpecifications.set( 'IfcDimensionCalloutRelationship', new IfcDimensionCalloutRelationshipSpecification() );
		localSpecifications.set( 'IfcDraughtingCalloutRelationship', new IfcDraughtingCalloutRelationshipSpecification() );
		localSpecifications.set( 'IfcLinearDimension', new IfcLinearDimensionSpecification() );
		localSpecifications.set( 'IfcRadiusDimension', new IfcRadiusDimensionSpecification() );
		localSpecifications.set( 'IfcDraughtingCallout', new IfcDraughtingCalloutSpecification() );
		localSpecifications.set( 'IfcDimensionCurveTerminator', new IfcDimensionCurveTerminatorSpecification() );
		localSpecifications.set( 'IfcDimensionPair', new IfcDimensionPairSpecification() );
		localSpecifications.set( 'IfcDimensionalExponents', new IfcDimensionalExponentsSpecification() );
		localSpecifications.set( 'IfcDirection', new IfcDirectionSpecification() );
		localSpecifications.set( 'IfcDiscreteAccessory', new IfcDiscreteAccessorySpecification() );
		localSpecifications.set( 'IfcElementComponent', new IfcElementComponentSpecification() );
		localSpecifications.set( 'IfcDiscreteAccessoryType', new IfcDiscreteAccessoryTypeSpecification() );
		localSpecifications.set( 'IfcVibrationIsolatorType', new IfcVibrationIsolatorTypeSpecification() );
		localSpecifications.set( 'IfcElementComponentType', new IfcElementComponentTypeSpecification() );
		localSpecifications.set( 'IfcDistributionChamberElement', new IfcDistributionChamberElementSpecification() );
		localSpecifications.set( 'IfcDistributionFlowElement', new IfcDistributionFlowElementSpecification() );
		localSpecifications.set( 'IfcDistributionChamberElementType', new IfcDistributionChamberElementTypeSpecification() );
		localSpecifications.set( 'IfcDistributionFlowElementType', new IfcDistributionFlowElementTypeSpecification() );
		localSpecifications.set( 'IfcDistributionControlElement', new IfcDistributionControlElementSpecification() );
		localSpecifications.set( 'IfcDistributionElement', new IfcDistributionElementSpecification() );
		localSpecifications.set( 'IfcFlowInstrumentType', new IfcFlowInstrumentTypeSpecification() );
		localSpecifications.set( 'IfcSensorType', new IfcSensorTypeSpecification() );
		localSpecifications.set( 'IfcDistributionElementType', new IfcDistributionElementTypeSpecification() );
		localSpecifications.set( 'IfcEnergyConversionDevice', new IfcEnergyConversionDeviceSpecification() );
		localSpecifications.set( 'IfcFlowController', new IfcFlowControllerSpecification() );
		localSpecifications.set( 'IfcFlowFitting', new IfcFlowFittingSpecification() );
		localSpecifications.set( 'IfcFlowMovingDevice', new IfcFlowMovingDeviceSpecification() );
		localSpecifications.set( 'IfcFlowSegment', new IfcFlowSegmentSpecification() );
		localSpecifications.set( 'IfcFlowStorageDevice', new IfcFlowStorageDeviceSpecification() );
		localSpecifications.set( 'IfcFlowTerminal', new IfcFlowTerminalSpecification() );
		localSpecifications.set( 'IfcFlowTreatmentDevice', new IfcFlowTreatmentDeviceSpecification() );
		localSpecifications.set( 'IfcFlowStorageDeviceType', new IfcFlowStorageDeviceTypeSpecification() );
		localSpecifications.set( 'IfcFlowTreatmentDeviceType', new IfcFlowTreatmentDeviceTypeSpecification() );
		localSpecifications.set( 'IfcDistributionPort', new IfcDistributionPortSpecification() );
		localSpecifications.set( 'IfcPort', new IfcPortSpecification() );
		localSpecifications.set( 'IfcDocumentElectronicFormat', new IfcDocumentElectronicFormatSpecification() );
		localSpecifications.set( 'IfcDocumentInformation', new IfcDocumentInformationSpecification() );
		localSpecifications.set( 'IfcDocumentInformationRelationship', new IfcDocumentInformationRelationshipSpecification() );
		localSpecifications.set( 'IfcDocumentReference', new IfcDocumentReferenceSpecification() );
		localSpecifications.set( 'IfcDoorLiningProperties', new IfcDoorLiningPropertiesSpecification() );
		localSpecifications.set( 'IfcPropertySetDefinition', new IfcPropertySetDefinitionSpecification() );
		localSpecifications.set( 'IfcDoorPanelProperties', new IfcDoorPanelPropertiesSpecification() );
		localSpecifications.set( 'IfcDoorStyle', new IfcDoorStyleSpecification() );
		localSpecifications.set( 'IfcTypeProduct', new IfcTypeProductSpecification() );
		localSpecifications.set( 'IfcStructuredDimensionCallout', new IfcStructuredDimensionCalloutSpecification() );
		localSpecifications.set( 'IfcDraughtingPreDefinedColour', new IfcDraughtingPreDefinedColourSpecification() );
		localSpecifications.set( 'IfcPreDefinedColour', new IfcPreDefinedColourSpecification() );
		localSpecifications.set( 'IfcDraughtingPreDefinedCurveFont', new IfcDraughtingPreDefinedCurveFontSpecification() );
		localSpecifications.set( 'IfcPreDefinedCurveFont', new IfcPreDefinedCurveFontSpecification() );
		localSpecifications.set( 'IfcDraughtingPreDefinedTextFont', new IfcDraughtingPreDefinedTextFontSpecification() );
		localSpecifications.set( 'IfcPreDefinedTextFont', new IfcPreDefinedTextFontSpecification() );
		localSpecifications.set( 'IfcDuctFittingType', new IfcDuctFittingTypeSpecification() );
		localSpecifications.set( 'IfcDuctSegmentType', new IfcDuctSegmentTypeSpecification() );
		localSpecifications.set( 'IfcDuctSilencerType', new IfcDuctSilencerTypeSpecification() );
		localSpecifications.set( 'IfcEdge', new IfcEdgeSpecification() );
		localSpecifications.set( 'IfcEdgeCurve', new IfcEdgeCurveSpecification() );
		localSpecifications.set( 'IfcOrientedEdge', new IfcOrientedEdgeSpecification() );
		localSpecifications.set( 'IfcSubedge', new IfcSubedgeSpecification() );
		localSpecifications.set( 'IfcRoundedEdgeFeature', new IfcRoundedEdgeFeatureSpecification() );
		localSpecifications.set( 'IfcFeatureElementSubtraction', new IfcFeatureElementSubtractionSpecification() );
		localSpecifications.set( 'IfcEdgeLoop', new IfcEdgeLoopSpecification() );
		localSpecifications.set( 'IfcLoop', new IfcLoopSpecification() );
		localSpecifications.set( 'IfcElectricApplianceType', new IfcElectricApplianceTypeSpecification() );
		localSpecifications.set( 'IfcElectricDistributionPoint', new IfcElectricDistributionPointSpecification() );
		localSpecifications.set( 'IfcElectricFlowStorageDeviceType', new IfcElectricFlowStorageDeviceTypeSpecification() );
		localSpecifications.set( 'IfcElectricGeneratorType', new IfcElectricGeneratorTypeSpecification() );
		localSpecifications.set( 'IfcElectricHeaterType', new IfcElectricHeaterTypeSpecification() );
		localSpecifications.set( 'IfcElectricMotorType', new IfcElectricMotorTypeSpecification() );
		localSpecifications.set( 'IfcElectricTimeControlType', new IfcElectricTimeControlTypeSpecification() );
		localSpecifications.set( 'IfcElectricalBaseProperties', new IfcElectricalBasePropertiesSpecification() );
		localSpecifications.set( 'IfcEnergyProperties', new IfcEnergyPropertiesSpecification() );
		localSpecifications.set( 'IfcElectricalCircuit', new IfcElectricalCircuitSpecification() );
		localSpecifications.set( 'IfcSystem', new IfcSystemSpecification() );
		localSpecifications.set( 'IfcElectricalElement', new IfcElectricalElementSpecification() );
		localSpecifications.set( 'IfcElementAssembly', new IfcElementAssemblySpecification() );
		localSpecifications.set( 'IfcEquipmentElement', new IfcEquipmentElementSpecification() );
		localSpecifications.set( 'IfcFeatureElement', new IfcFeatureElementSpecification() );
		localSpecifications.set( 'IfcFurnishingElement', new IfcFurnishingElementSpecification() );
		localSpecifications.set( 'IfcTransportElement', new IfcTransportElementSpecification() );
		localSpecifications.set( 'IfcVirtualElement', new IfcVirtualElementSpecification() );
		localSpecifications.set( 'IfcFastener', new IfcFastenerSpecification() );
		localSpecifications.set( 'IfcFastenerType', new IfcFastenerTypeSpecification() );
		localSpecifications.set( 'IfcElementQuantity', new IfcElementQuantitySpecification() );
		localSpecifications.set( 'IfcFurnishingElementType', new IfcFurnishingElementTypeSpecification() );
		localSpecifications.set( 'IfcSpatialStructureElementType', new IfcSpatialStructureElementTypeSpecification() );
		localSpecifications.set( 'IfcTransportElementType', new IfcTransportElementTypeSpecification() );
		localSpecifications.set( 'IfcElementarySurface', new IfcElementarySurfaceSpecification() );
		localSpecifications.set( 'IfcPlane', new IfcPlaneSpecification() );
		localSpecifications.set( 'IfcEllipseProfileDef', new IfcEllipseProfileDefSpecification() );
		localSpecifications.set( 'IfcEvaporativeCoolerType', new IfcEvaporativeCoolerTypeSpecification() );
		localSpecifications.set( 'IfcEvaporatorType', new IfcEvaporatorTypeSpecification() );
		localSpecifications.set( 'IfcHeatExchangerType', new IfcHeatExchangerTypeSpecification() );
		localSpecifications.set( 'IfcHumidifierType', new IfcHumidifierTypeSpecification() );
		localSpecifications.set( 'IfcMotorConnectionType', new IfcMotorConnectionTypeSpecification() );
		localSpecifications.set( 'IfcSpaceHeaterType', new IfcSpaceHeaterTypeSpecification() );
		localSpecifications.set( 'IfcTransformerType', new IfcTransformerTypeSpecification() );
		localSpecifications.set( 'IfcTubeBundleType', new IfcTubeBundleTypeSpecification() );
		localSpecifications.set( 'IfcUnitaryEquipmentType', new IfcUnitaryEquipmentTypeSpecification() );
		localSpecifications.set( 'IfcExtendedMaterialProperties', new IfcExtendedMaterialPropertiesSpecification() );
		localSpecifications.set( 'IfcMaterialProperties', new IfcMaterialPropertiesSpecification() );
		localSpecifications.set( 'IfcExternallyDefinedHatchStyle', new IfcExternallyDefinedHatchStyleSpecification() );
		localSpecifications.set( 'IfcExternallyDefinedSurfaceStyle', new IfcExternallyDefinedSurfaceStyleSpecification() );
		localSpecifications.set( 'IfcExternallyDefinedSymbol', new IfcExternallyDefinedSymbolSpecification() );
		localSpecifications.set( 'IfcExternallyDefinedTextFont', new IfcExternallyDefinedTextFontSpecification() );
		localSpecifications.set( 'IfcLibraryReference', new IfcLibraryReferenceSpecification() );
		localSpecifications.set( 'IfcExtrudedAreaSolid', new IfcExtrudedAreaSolidSpecification() );
		localSpecifications.set( 'IfcSweptAreaSolid', new IfcSweptAreaSolidSpecification() );
		localSpecifications.set( 'IfcFace', new IfcFaceSpecification() );
		localSpecifications.set( 'IfcFaceSurface', new IfcFaceSurfaceSpecification() );
		localSpecifications.set( 'IfcFaceBasedSurfaceModel', new IfcFaceBasedSurfaceModelSpecification() );
		localSpecifications.set( 'IfcFaceBound', new IfcFaceBoundSpecification() );
		localSpecifications.set( 'IfcFaceOuterBound', new IfcFaceOuterBoundSpecification() );
		localSpecifications.set( 'IfcFacetedBrep', new IfcFacetedBrepSpecification() );
		localSpecifications.set( 'IfcManifoldSolidBrep', new IfcManifoldSolidBrepSpecification() );
		localSpecifications.set( 'IfcFacetedBrepWithVoids', new IfcFacetedBrepWithVoidsSpecification() );
		localSpecifications.set( 'IfcFailureConnectionCondition', new IfcFailureConnectionConditionSpecification() );
		localSpecifications.set( 'IfcStructuralConnectionCondition', new IfcStructuralConnectionConditionSpecification() );
		localSpecifications.set( 'IfcFanType', new IfcFanTypeSpecification() );
		localSpecifications.set( 'IfcMechanicalFastener', new IfcMechanicalFastenerSpecification() );
		localSpecifications.set( 'IfcMechanicalFastenerType', new IfcMechanicalFastenerTypeSpecification() );
		localSpecifications.set( 'IfcFeatureElementAddition', new IfcFeatureElementAdditionSpecification() );
		localSpecifications.set( 'IfcProjectionElement', new IfcProjectionElementSpecification() );
		localSpecifications.set( 'IfcOpeningElement', new IfcOpeningElementSpecification() );
		localSpecifications.set( 'IfcFillAreaStyle', new IfcFillAreaStyleSpecification() );
		localSpecifications.set( 'IfcFillAreaStyleHatching', new IfcFillAreaStyleHatchingSpecification() );
		localSpecifications.set( 'IfcFillAreaStyleTileSymbolWithStyle', new IfcFillAreaStyleTileSymbolWithStyleSpecification() );
		localSpecifications.set( 'IfcFillAreaStyleTiles', new IfcFillAreaStyleTilesSpecification() );
		localSpecifications.set( 'IfcFilterType', new IfcFilterTypeSpecification() );
		localSpecifications.set( 'IfcFireSuppressionTerminalType', new IfcFireSuppressionTerminalTypeSpecification() );
		localSpecifications.set( 'IfcFlowMeterType', new IfcFlowMeterTypeSpecification() );
		localSpecifications.set( 'IfcProtectiveDeviceType', new IfcProtectiveDeviceTypeSpecification() );
		localSpecifications.set( 'IfcSwitchingDeviceType', new IfcSwitchingDeviceTypeSpecification() );
		localSpecifications.set( 'IfcValveType', new IfcValveTypeSpecification() );
		localSpecifications.set( 'IfcJunctionBoxType', new IfcJunctionBoxTypeSpecification() );
		localSpecifications.set( 'IfcPipeFittingType', new IfcPipeFittingTypeSpecification() );
		localSpecifications.set( 'IfcPumpType', new IfcPumpTypeSpecification() );
		localSpecifications.set( 'IfcPipeSegmentType', new IfcPipeSegmentTypeSpecification() );
		localSpecifications.set( 'IfcTankType', new IfcTankTypeSpecification() );
		localSpecifications.set( 'IfcGasTerminalType', new IfcGasTerminalTypeSpecification() );
		localSpecifications.set( 'IfcLampType', new IfcLampTypeSpecification() );
		localSpecifications.set( 'IfcLightFixtureType', new IfcLightFixtureTypeSpecification() );
		localSpecifications.set( 'IfcOutletType', new IfcOutletTypeSpecification() );
		localSpecifications.set( 'IfcSanitaryTerminalType', new IfcSanitaryTerminalTypeSpecification() );
		localSpecifications.set( 'IfcStackTerminalType', new IfcStackTerminalTypeSpecification() );
		localSpecifications.set( 'IfcWasteTerminalType', new IfcWasteTerminalTypeSpecification() );
		localSpecifications.set( 'IfcFluidFlowProperties', new IfcFluidFlowPropertiesSpecification() );
		localSpecifications.set( 'IfcFuelProperties', new IfcFuelPropertiesSpecification() );
		localSpecifications.set( 'IfcFurnitureType', new IfcFurnitureTypeSpecification() );
		localSpecifications.set( 'IfcSystemFurnitureElementType', new IfcSystemFurnitureElementTypeSpecification() );
		localSpecifications.set( 'IfcGeneralMaterialProperties', new IfcGeneralMaterialPropertiesSpecification() );
		localSpecifications.set( 'IfcGeneralProfileProperties', new IfcGeneralProfilePropertiesSpecification() );
		localSpecifications.set( 'IfcStructuralProfileProperties', new IfcStructuralProfilePropertiesSpecification() );
		localSpecifications.set( 'IfcProfileProperties', new IfcProfilePropertiesSpecification() );
		localSpecifications.set( 'IfcGeometricCurveSet', new IfcGeometricCurveSetSpecification() );
		localSpecifications.set( 'IfcGeometricSet', new IfcGeometricSetSpecification() );
		localSpecifications.set( 'IfcGeometricRepresentationContext', new IfcGeometricRepresentationContextSpecification() );
		localSpecifications.set( 'IfcGeometricRepresentationSubContext', new IfcGeometricRepresentationSubContextSpecification() );
		localSpecifications.set( 'IfcRepresentationContext', new IfcRepresentationContextSpecification() );
		localSpecifications.set( 'IfcLightSource', new IfcLightSourceSpecification() );
		localSpecifications.set( 'IfcOneDirectionRepeatFactor', new IfcOneDirectionRepeatFactorSpecification() );
		localSpecifications.set( 'IfcPlanarExtent', new IfcPlanarExtentSpecification() );
		localSpecifications.set( 'IfcSectionedSpine', new IfcSectionedSpineSpecification() );
		localSpecifications.set( 'IfcShellBasedSurfaceModel', new IfcShellBasedSurfaceModelSpecification() );
		localSpecifications.set( 'IfcTextLiteral', new IfcTextLiteralSpecification() );
		localSpecifications.set( 'IfcVector', new IfcVectorSpecification() );
		localSpecifications.set( 'IfcRepresentationItem', new IfcRepresentationItemSpecification() );
		localSpecifications.set( 'IfcGrid', new IfcGridSpecification() );
		localSpecifications.set( 'IfcGridAxis', new IfcGridAxisSpecification() );
		localSpecifications.set( 'IfcGridPlacement', new IfcGridPlacementSpecification() );
		localSpecifications.set( 'IfcObjectPlacement', new IfcObjectPlacementSpecification() );
		localSpecifications.set( 'IfcInventory', new IfcInventorySpecification() );
		localSpecifications.set( 'IfcStructuralLoadGroup', new IfcStructuralLoadGroupSpecification() );
		localSpecifications.set( 'IfcStructuralResultGroup', new IfcStructuralResultGroupSpecification() );
		localSpecifications.set( 'IfcZone', new IfcZoneSpecification() );
		localSpecifications.set( 'IfcPolygonalBoundedHalfSpace', new IfcPolygonalBoundedHalfSpaceSpecification() );
		localSpecifications.set( 'IfcHygroscopicMaterialProperties', new IfcHygroscopicMaterialPropertiesSpecification() );
		localSpecifications.set( 'IfcImageTexture', new IfcImageTextureSpecification() );
		localSpecifications.set( 'IfcIrregularTimeSeries', new IfcIrregularTimeSeriesSpecification() );
		localSpecifications.set( 'IfcTimeSeries', new IfcTimeSeriesSpecification() );
		localSpecifications.set( 'IfcIrregularTimeSeriesValue', new IfcIrregularTimeSeriesValueSpecification() );
		localSpecifications.set( 'IfcLShapeProfileDef', new IfcLShapeProfileDefSpecification() );
		localSpecifications.set( 'IfcLibraryInformation', new IfcLibraryInformationSpecification() );
		localSpecifications.set( 'IfcLightDistributionData', new IfcLightDistributionDataSpecification() );
		localSpecifications.set( 'IfcLightIntensityDistribution', new IfcLightIntensityDistributionSpecification() );
		localSpecifications.set( 'IfcLightSourceAmbient', new IfcLightSourceAmbientSpecification() );
		localSpecifications.set( 'IfcLightSourceDirectional', new IfcLightSourceDirectionalSpecification() );
		localSpecifications.set( 'IfcLightSourceGoniometric', new IfcLightSourceGoniometricSpecification() );
		localSpecifications.set( 'IfcLightSourcePositional', new IfcLightSourcePositionalSpecification() );
		localSpecifications.set( 'IfcLightSourceSpot', new IfcLightSourceSpotSpecification() );
		localSpecifications.set( 'IfcLocalPlacement', new IfcLocalPlacementSpecification() );
		localSpecifications.set( 'IfcLocalTime', new IfcLocalTimeSpecification() );
		localSpecifications.set( 'IfcPolyLoop', new IfcPolyLoopSpecification() );
		localSpecifications.set( 'IfcVertexLoop', new IfcVertexLoopSpecification() );
		localSpecifications.set( 'IfcMappedItem', new IfcMappedItemSpecification() );
		localSpecifications.set( 'IfcMaterial', new IfcMaterialSpecification() );
		localSpecifications.set( 'IfcMaterialClassificationRelationship', new IfcMaterialClassificationRelationshipSpecification() );
		localSpecifications.set( 'IfcMaterialDefinitionRepresentation', new IfcMaterialDefinitionRepresentationSpecification() );
		localSpecifications.set( 'IfcProductRepresentation', new IfcProductRepresentationSpecification() );
		localSpecifications.set( 'IfcMaterialLayer', new IfcMaterialLayerSpecification() );
		localSpecifications.set( 'IfcMaterialLayerSet', new IfcMaterialLayerSetSpecification() );
		localSpecifications.set( 'IfcMaterialLayerSetUsage', new IfcMaterialLayerSetUsageSpecification() );
		localSpecifications.set( 'IfcMaterialList', new IfcMaterialListSpecification() );
		localSpecifications.set( 'IfcMechanicalMaterialProperties', new IfcMechanicalMaterialPropertiesSpecification() );
		localSpecifications.set( 'IfcOpticalMaterialProperties', new IfcOpticalMaterialPropertiesSpecification() );
		localSpecifications.set( 'IfcProductsOfCombustionProperties', new IfcProductsOfCombustionPropertiesSpecification() );
		localSpecifications.set( 'IfcThermalMaterialProperties', new IfcThermalMaterialPropertiesSpecification() );
		localSpecifications.set( 'IfcWaterProperties', new IfcWaterPropertiesSpecification() );
		localSpecifications.set( 'IfcMeasureWithUnit', new IfcMeasureWithUnitSpecification() );
		localSpecifications.set( 'IfcMechanicalConcreteMaterialProperties', new IfcMechanicalConcreteMaterialPropertiesSpecification() );
		localSpecifications.set( 'IfcMechanicalSteelMaterialProperties', new IfcMechanicalSteelMaterialPropertiesSpecification() );
		localSpecifications.set( 'IfcMonetaryUnit', new IfcMonetaryUnitSpecification() );
		localSpecifications.set( 'IfcMove', new IfcMoveSpecification() );
		localSpecifications.set( 'IfcTask', new IfcTaskSpecification() );
		localSpecifications.set( 'IfcSIUnit', new IfcSIUnitSpecification() );
		localSpecifications.set( 'IfcProcess', new IfcProcessSpecification() );
		localSpecifications.set( 'IfcProject', new IfcProjectSpecification() );
		localSpecifications.set( 'IfcObjectDefinition', new IfcObjectDefinitionSpecification() );
		localSpecifications.set( 'IfcTypeObject', new IfcTypeObjectSpecification() );
		localSpecifications.set( 'IfcRoot', new IfcRootSpecification() );
		localSpecifications.set( 'IfcTwoDirectionRepeatFactor', new IfcTwoDirectionRepeatFactorSpecification() );
		localSpecifications.set( 'IfcOrderAction', new IfcOrderActionSpecification() );
		localSpecifications.set( 'IfcOrganization', new IfcOrganizationSpecification() );
		localSpecifications.set( 'IfcOrganizationRelationship', new IfcOrganizationRelationshipSpecification() );
		localSpecifications.set( 'IfcOwnerHistory', new IfcOwnerHistorySpecification() );
		localSpecifications.set( 'IfcRectangleProfileDef', new IfcRectangleProfileDefSpecification() );
		localSpecifications.set( 'IfcTShapeProfileDef', new IfcTShapeProfileDefSpecification() );
		localSpecifications.set( 'IfcTrapeziumProfileDef', new IfcTrapeziumProfileDefSpecification() );
		localSpecifications.set( 'IfcUShapeProfileDef', new IfcUShapeProfileDefSpecification() );
		localSpecifications.set( 'IfcZShapeProfileDef', new IfcZShapeProfileDefSpecification() );
		localSpecifications.set( 'IfcPath', new IfcPathSpecification() );
		localSpecifications.set( 'IfcPermeableCoveringProperties', new IfcPermeableCoveringPropertiesSpecification() );
		localSpecifications.set( 'IfcPerson', new IfcPersonSpecification() );
		localSpecifications.set( 'IfcPersonAndOrganization', new IfcPersonAndOrganizationSpecification() );
		localSpecifications.set( 'IfcPhysicalComplexQuantity', new IfcPhysicalComplexQuantitySpecification() );
		localSpecifications.set( 'IfcPhysicalQuantity', new IfcPhysicalQuantitySpecification() );
		localSpecifications.set( 'IfcPhysicalSimpleQuantity', new IfcPhysicalSimpleQuantitySpecification() );
		localSpecifications.set( 'IfcQuantityArea', new IfcQuantityAreaSpecification() );
		localSpecifications.set( 'IfcQuantityCount', new IfcQuantityCountSpecification() );
		localSpecifications.set( 'IfcQuantityLength', new IfcQuantityLengthSpecification() );
		localSpecifications.set( 'IfcQuantityTime', new IfcQuantityTimeSpecification() );
		localSpecifications.set( 'IfcQuantityVolume', new IfcQuantityVolumeSpecification() );
		localSpecifications.set( 'IfcQuantityWeight', new IfcQuantityWeightSpecification() );
		localSpecifications.set( 'IfcPixelTexture', new IfcPixelTextureSpecification() );
		localSpecifications.set( 'IfcPlanarBox', new IfcPlanarBoxSpecification() );
		localSpecifications.set( 'IfcPointOnCurve', new IfcPointOnCurveSpecification() );
		localSpecifications.set( 'IfcPointOnSurface', new IfcPointOnSurfaceSpecification() );
		localSpecifications.set( 'IfcPreDefinedItem', new IfcPreDefinedItemSpecification() );
		localSpecifications.set( 'IfcPreDefinedDimensionSymbol', new IfcPreDefinedDimensionSymbolSpecification() );
		localSpecifications.set( 'IfcPreDefinedSymbol', new IfcPreDefinedSymbolSpecification() );
		localSpecifications.set( 'IfcPreDefinedPointMarkerSymbol', new IfcPreDefinedPointMarkerSymbolSpecification() );
		localSpecifications.set( 'IfcPreDefinedTerminatorSymbol', new IfcPreDefinedTerminatorSymbolSpecification() );
		localSpecifications.set( 'IfcTextStyleFontModel', new IfcTextStyleFontModelSpecification() );
		localSpecifications.set( 'IfcPresentationLayerAssignment', new IfcPresentationLayerAssignmentSpecification() );
		localSpecifications.set( 'IfcPresentationLayerWithStyle', new IfcPresentationLayerWithStyleSpecification() );
		localSpecifications.set( 'IfcSurfaceStyle', new IfcSurfaceStyleSpecification() );
		localSpecifications.set( 'IfcSymbolStyle', new IfcSymbolStyleSpecification() );
		localSpecifications.set( 'IfcTextStyle', new IfcTextStyleSpecification() );
		localSpecifications.set( 'IfcPresentationStyleAssignment', new IfcPresentationStyleAssignmentSpecification() );
		localSpecifications.set( 'IfcProcedure', new IfcProcedureSpecification() );
		localSpecifications.set( 'IfcProxy', new IfcProxySpecification() );
		localSpecifications.set( 'IfcStructuralActivity', new IfcStructuralActivitySpecification() );
		localSpecifications.set( 'IfcStructuralItem', new IfcStructuralItemSpecification() );
		localSpecifications.set( 'IfcProductDefinitionShape', new IfcProductDefinitionShapeSpecification() );
		localSpecifications.set( 'IfcRibPlateProfileProperties', new IfcRibPlateProfilePropertiesSpecification() );
		localSpecifications.set( 'IfcSimpleProperty', new IfcSimplePropertySpecification() );
		localSpecifications.set( 'IfcPropertyBoundedValue', new IfcPropertyBoundedValueSpecification() );
		localSpecifications.set( 'IfcPropertyConstraintRelationship', new IfcPropertyConstraintRelationshipSpecification() );
		localSpecifications.set( 'IfcPropertyDefinition', new IfcPropertyDefinitionSpecification() );
		localSpecifications.set( 'IfcPropertyDependencyRelationship', new IfcPropertyDependencyRelationshipSpecification() );
		localSpecifications.set( 'IfcPropertyEnumeratedValue', new IfcPropertyEnumeratedValueSpecification() );
		localSpecifications.set( 'IfcPropertyEnumeration', new IfcPropertyEnumerationSpecification() );
		localSpecifications.set( 'IfcPropertyListValue', new IfcPropertyListValueSpecification() );
		localSpecifications.set( 'IfcPropertyReferenceValue', new IfcPropertyReferenceValueSpecification() );
		localSpecifications.set( 'IfcPropertySet', new IfcPropertySetSpecification() );
		localSpecifications.set( 'IfcReinforcementDefinitionProperties', new IfcReinforcementDefinitionPropertiesSpecification() );
		localSpecifications.set( 'IfcServiceLifeFactor', new IfcServiceLifeFactorSpecification() );
		localSpecifications.set( 'IfcSoundProperties', new IfcSoundPropertiesSpecification() );
		localSpecifications.set( 'IfcSoundValue', new IfcSoundValueSpecification() );
		localSpecifications.set( 'IfcSpaceThermalLoadProperties', new IfcSpaceThermalLoadPropertiesSpecification() );
		localSpecifications.set( 'IfcWindowLiningProperties', new IfcWindowLiningPropertiesSpecification() );
		localSpecifications.set( 'IfcWindowPanelProperties', new IfcWindowPanelPropertiesSpecification() );
		localSpecifications.set( 'IfcPropertySingleValue', new IfcPropertySingleValueSpecification() );
		localSpecifications.set( 'IfcPropertyTableValue', new IfcPropertyTableValueSpecification() );
		localSpecifications.set( 'IfcRectangleHollowProfileDef', new IfcRectangleHollowProfileDefSpecification() );
		localSpecifications.set( 'IfcRoundedRectangleProfileDef', new IfcRoundedRectangleProfileDefSpecification() );
		localSpecifications.set( 'IfcReferencesValueDocument', new IfcReferencesValueDocumentSpecification() );
		localSpecifications.set( 'IfcRegularTimeSeries', new IfcRegularTimeSeriesSpecification() );
		localSpecifications.set( 'IfcReinforcementBarProperties', new IfcReinforcementBarPropertiesSpecification() );
		localSpecifications.set( 'IfcReinforcingBar', new IfcReinforcingBarSpecification() );
		localSpecifications.set( 'IfcReinforcingMesh', new IfcReinforcingMeshSpecification() );
		localSpecifications.set( 'IfcTendon', new IfcTendonSpecification() );
		localSpecifications.set( 'IfcTendonAnchor', new IfcTendonAnchorSpecification() );
		localSpecifications.set( 'IfcRelAggregates', new IfcRelAggregatesSpecification() );
		localSpecifications.set( 'IfcRelDecomposes', new IfcRelDecomposesSpecification() );
		localSpecifications.set( 'IfcRelAssigns', new IfcRelAssignsSpecification() );
		localSpecifications.set( 'IfcRelAssignsToActor', new IfcRelAssignsToActorSpecification() );
		localSpecifications.set( 'IfcRelAssignsToControl', new IfcRelAssignsToControlSpecification() );
		localSpecifications.set( 'IfcRelAssignsToGroup', new IfcRelAssignsToGroupSpecification() );
		localSpecifications.set( 'IfcRelAssignsToProcess', new IfcRelAssignsToProcessSpecification() );
		localSpecifications.set( 'IfcRelAssignsToProduct', new IfcRelAssignsToProductSpecification() );
		localSpecifications.set( 'IfcRelAssignsToResource', new IfcRelAssignsToResourceSpecification() );
		localSpecifications.set( 'IfcRelationship', new IfcRelationshipSpecification() );
		localSpecifications.set( 'IfcRelAssignsTasks', new IfcRelAssignsTasksSpecification() );
		localSpecifications.set( 'IfcRelOccupiesSpaces', new IfcRelOccupiesSpacesSpecification() );
		localSpecifications.set( 'IfcRelAssignsToProjectOrder', new IfcRelAssignsToProjectOrderSpecification() );
		localSpecifications.set( 'IfcRelSchedulesCostItems', new IfcRelSchedulesCostItemsSpecification() );
		localSpecifications.set( 'IfcRelAssociates', new IfcRelAssociatesSpecification() );
		localSpecifications.set( 'IfcRelAssociatesAppliedValue', new IfcRelAssociatesAppliedValueSpecification() );
		localSpecifications.set( 'IfcRelAssociatesApproval', new IfcRelAssociatesApprovalSpecification() );
		localSpecifications.set( 'IfcRelAssociatesClassification', new IfcRelAssociatesClassificationSpecification() );
		localSpecifications.set( 'IfcRelAssociatesConstraint', new IfcRelAssociatesConstraintSpecification() );
		localSpecifications.set( 'IfcRelAssociatesDocument', new IfcRelAssociatesDocumentSpecification() );
		localSpecifications.set( 'IfcRelAssociatesLibrary', new IfcRelAssociatesLibrarySpecification() );
		localSpecifications.set( 'IfcRelAssociatesMaterial', new IfcRelAssociatesMaterialSpecification() );
		localSpecifications.set( 'IfcRelAssociatesProfileProperties', new IfcRelAssociatesProfilePropertiesSpecification() );
		localSpecifications.set( 'IfcRelConnects', new IfcRelConnectsSpecification() );
		localSpecifications.set( 'IfcRelConnectsElements', new IfcRelConnectsElementsSpecification() );
		localSpecifications.set( 'IfcRelConnectsPortToElement', new IfcRelConnectsPortToElementSpecification() );
		localSpecifications.set( 'IfcRelConnectsPorts', new IfcRelConnectsPortsSpecification() );
		localSpecifications.set( 'IfcRelConnectsStructuralActivity', new IfcRelConnectsStructuralActivitySpecification() );
		localSpecifications.set( 'IfcRelConnectsStructuralElement', new IfcRelConnectsStructuralElementSpecification() );
		localSpecifications.set( 'IfcRelConnectsStructuralMember', new IfcRelConnectsStructuralMemberSpecification() );
		localSpecifications.set( 'IfcRelContainedInSpatialStructure', new IfcRelContainedInSpatialStructureSpecification() );
		localSpecifications.set( 'IfcRelCoversBldgElements', new IfcRelCoversBldgElementsSpecification() );
		localSpecifications.set( 'IfcRelCoversSpaces', new IfcRelCoversSpacesSpecification() );
		localSpecifications.set( 'IfcRelFillsElement', new IfcRelFillsElementSpecification() );
		localSpecifications.set( 'IfcRelFlowControlElements', new IfcRelFlowControlElementsSpecification() );
		localSpecifications.set( 'IfcRelInteractionRequirements', new IfcRelInteractionRequirementsSpecification() );
		localSpecifications.set( 'IfcRelProjectsElement', new IfcRelProjectsElementSpecification() );
		localSpecifications.set( 'IfcRelReferencedInSpatialStructure', new IfcRelReferencedInSpatialStructureSpecification() );
		localSpecifications.set( 'IfcRelSequence', new IfcRelSequenceSpecification() );
		localSpecifications.set( 'IfcRelServicesBuildings', new IfcRelServicesBuildingsSpecification() );
		localSpecifications.set( 'IfcRelSpaceBoundary', new IfcRelSpaceBoundarySpecification() );
		localSpecifications.set( 'IfcRelVoidsElement', new IfcRelVoidsElementSpecification() );
		localSpecifications.set( 'IfcRelConnectsPathElements', new IfcRelConnectsPathElementsSpecification() );
		localSpecifications.set( 'IfcRelConnectsWithRealizingElements', new IfcRelConnectsWithRealizingElementsSpecification() );
		localSpecifications.set( 'IfcRelConnectsWithEccentricity', new IfcRelConnectsWithEccentricitySpecification() );
		localSpecifications.set( 'IfcRelNests', new IfcRelNestsSpecification() );
		localSpecifications.set( 'IfcRelDefines', new IfcRelDefinesSpecification() );
		localSpecifications.set( 'IfcRelDefinesByProperties', new IfcRelDefinesByPropertiesSpecification() );
		localSpecifications.set( 'IfcRelDefinesByType', new IfcRelDefinesByTypeSpecification() );
		localSpecifications.set( 'IfcRelOverridesProperties', new IfcRelOverridesPropertiesSpecification() );
		localSpecifications.set( 'IfcRelaxation', new IfcRelaxationSpecification() );
		localSpecifications.set( 'IfcRepresentation', new IfcRepresentationSpecification() );
		localSpecifications.set( 'IfcShapeModel', new IfcShapeModelSpecification() );
		localSpecifications.set( 'IfcStyleModel', new IfcStyleModelSpecification() );
		localSpecifications.set( 'IfcRepresentationMap', new IfcRepresentationMapSpecification() );
		localSpecifications.set( 'IfcRevolvedAreaSolid', new IfcRevolvedAreaSolidSpecification() );
		localSpecifications.set( 'IfcSectionProperties', new IfcSectionPropertiesSpecification() );
		localSpecifications.set( 'IfcSectionReinforcementProperties', new IfcSectionReinforcementPropertiesSpecification() );
		localSpecifications.set( 'IfcShapeAspect', new IfcShapeAspectSpecification() );
		localSpecifications.set( 'IfcShapeRepresentation', new IfcShapeRepresentationSpecification() );
		localSpecifications.set( 'IfcTopologyRepresentation', new IfcTopologyRepresentationSpecification() );
		localSpecifications.set( 'IfcSite', new IfcSiteSpecification() );
		localSpecifications.set( 'IfcSlippageConnectionCondition', new IfcSlippageConnectionConditionSpecification() );
		localSpecifications.set( 'IfcSweptDiskSolid', new IfcSweptDiskSolidSpecification() );
		localSpecifications.set( 'IfcSpace', new IfcSpaceSpecification() );
		localSpecifications.set( 'IfcSpaceType', new IfcSpaceTypeSpecification() );
		localSpecifications.set( 'IfcStructuralAction', new IfcStructuralActionSpecification() );
		localSpecifications.set( 'IfcStructuralLinearAction', new IfcStructuralLinearActionSpecification() );
		localSpecifications.set( 'IfcStructuralPlanarAction', new IfcStructuralPlanarActionSpecification() );
		localSpecifications.set( 'IfcStructuralPointAction', new IfcStructuralPointActionSpecification() );
		localSpecifications.set( 'IfcStructuralReaction', new IfcStructuralReactionSpecification() );
		localSpecifications.set( 'IfcStructuralAnalysisModel', new IfcStructuralAnalysisModelSpecification() );
		localSpecifications.set( 'IfcStructuralConnection', new IfcStructuralConnectionSpecification() );
		localSpecifications.set( 'IfcStructuralCurveConnection', new IfcStructuralCurveConnectionSpecification() );
		localSpecifications.set( 'IfcStructuralPointConnection', new IfcStructuralPointConnectionSpecification() );
		localSpecifications.set( 'IfcStructuralSurfaceConnection', new IfcStructuralSurfaceConnectionSpecification() );
		localSpecifications.set( 'IfcStructuralCurveMember', new IfcStructuralCurveMemberSpecification() );
		localSpecifications.set( 'IfcStructuralCurveMemberVarying', new IfcStructuralCurveMemberVaryingSpecification() );
		localSpecifications.set( 'IfcStructuralMember', new IfcStructuralMemberSpecification() );
		localSpecifications.set( 'IfcStructuralLinearActionVarying', new IfcStructuralLinearActionVaryingSpecification() );
		localSpecifications.set( 'IfcStructuralLoad', new IfcStructuralLoadSpecification() );
		localSpecifications.set( 'IfcStructuralLoadStatic', new IfcStructuralLoadStaticSpecification() );
		localSpecifications.set( 'IfcStructuralLoadLinearForce', new IfcStructuralLoadLinearForceSpecification() );
		localSpecifications.set( 'IfcStructuralLoadPlanarForce', new IfcStructuralLoadPlanarForceSpecification() );
		localSpecifications.set( 'IfcStructuralLoadSingleDisplacement', new IfcStructuralLoadSingleDisplacementSpecification() );
		localSpecifications.set( 'IfcStructuralLoadSingleDisplacementDistortion', new IfcStructuralLoadSingleDisplacementDistortionSpecification() );
		localSpecifications.set( 'IfcStructuralLoadSingleForce', new IfcStructuralLoadSingleForceSpecification() );
		localSpecifications.set( 'IfcStructuralLoadSingleForceWarping', new IfcStructuralLoadSingleForceWarpingSpecification() );
		localSpecifications.set( 'IfcStructuralLoadTemperature', new IfcStructuralLoadTemperatureSpecification() );
		localSpecifications.set( 'IfcStructuralSurfaceMember', new IfcStructuralSurfaceMemberSpecification() );
		localSpecifications.set( 'IfcStructuralPlanarActionVarying', new IfcStructuralPlanarActionVaryingSpecification() );
		localSpecifications.set( 'IfcStructuralPointReaction', new IfcStructuralPointReactionSpecification() );
		localSpecifications.set( 'IfcStructuralSteelProfileProperties', new IfcStructuralSteelProfilePropertiesSpecification() );
		localSpecifications.set( 'IfcStructuralSurfaceMemberVarying', new IfcStructuralSurfaceMemberVaryingSpecification() );
		localSpecifications.set( 'IfcStyledRepresentation', new IfcStyledRepresentationSpecification() );
		localSpecifications.set( 'IfcSweptSurface', new IfcSweptSurfaceSpecification() );
		localSpecifications.set( 'IfcSurfaceCurveSweptAreaSolid', new IfcSurfaceCurveSweptAreaSolidSpecification() );
		localSpecifications.set( 'IfcSurfaceOfLinearExtrusion', new IfcSurfaceOfLinearExtrusionSpecification() );
		localSpecifications.set( 'IfcSurfaceOfRevolution', new IfcSurfaceOfRevolutionSpecification() );
		localSpecifications.set( 'IfcSurfaceStyleLighting', new IfcSurfaceStyleLightingSpecification() );
		localSpecifications.set( 'IfcSurfaceStyleRefraction', new IfcSurfaceStyleRefractionSpecification() );
		localSpecifications.set( 'IfcSurfaceStyleRendering', new IfcSurfaceStyleRenderingSpecification() );
		localSpecifications.set( 'IfcSurfaceStyleShading', new IfcSurfaceStyleShadingSpecification() );
		localSpecifications.set( 'IfcSurfaceStyleWithTextures', new IfcSurfaceStyleWithTexturesSpecification() );
		localSpecifications.set( 'IfcTable', new IfcTableSpecification() );
		localSpecifications.set( 'IfcTableRow', new IfcTableRowSpecification() );
		localSpecifications.set( 'IfcTextLiteralWithExtent', new IfcTextLiteralWithExtentSpecification() );
		localSpecifications.set( 'IfcTextStyleForDefinedFont', new IfcTextStyleForDefinedFontSpecification() );
		localSpecifications.set( 'IfcTextStyleTextModel', new IfcTextStyleTextModelSpecification() );
		localSpecifications.set( 'IfcTextStyleWithBoxCharacteristics', new IfcTextStyleWithBoxCharacteristicsSpecification() );
		localSpecifications.set( 'IfcTextureCoordinate', new IfcTextureCoordinateSpecification() );
		localSpecifications.set( 'IfcTextureCoordinateGenerator', new IfcTextureCoordinateGeneratorSpecification() );
		localSpecifications.set( 'IfcTextureMap', new IfcTextureMapSpecification() );
		localSpecifications.set( 'IfcTextureVertex', new IfcTextureVertexSpecification() );
		localSpecifications.set( 'IfcTimeSeriesReferenceRelationship', new IfcTimeSeriesReferenceRelationshipSpecification() );
		localSpecifications.set( 'IfcTimeSeriesValue', new IfcTimeSeriesValueSpecification() );
		localSpecifications.set( 'IfcVertex', new IfcVertexSpecification() );
		localSpecifications.set( 'IfcWindowStyle', new IfcWindowStyleSpecification() );
		localSpecifications.set( 'IfcUnitAssignment', new IfcUnitAssignmentSpecification() );
		localSpecifications.set( 'IfcVertexPoint', new IfcVertexPointSpecification() );
		localSpecifications.set( 'IfcVertexBasedTextureMap', new IfcVertexBasedTextureMapSpecification() );
		localSpecifications.set( 'IfcVirtualGridIntersection', new IfcVirtualGridIntersectionSpecification() );
		localSpecifications.set( 'IfcWallStandardCase', new IfcWallStandardCaseSpecification() );
		localSpecifications.set( 'IfcWorkPlan', new IfcWorkPlanSpecification() );
		localSpecifications.set( 'IfcWorkSchedule', new IfcWorkScheduleSpecification() );

        this.specifications = localSpecifications;
    }
}
export type IfcComponentTypeNames = 'Ifc2DCompositeCurve'|'IfcCompositeCurve'|'IfcActionRequest'|'IfcControl'|'IfcActor'|'IfcOccupant'|'IfcObject'|'IfcActorRole'|'IfcActuatorType'|'IfcDistributionControlElementType'|'IfcAddress'|'IfcPostalAddress'|'IfcTelecomAddress'|'IfcAirTerminalBoxType'|'IfcFlowControllerType'|'IfcAirTerminalType'|'IfcFlowTerminalType'|'IfcAirToAirHeatRecoveryType'|'IfcEnergyConversionDeviceType'|'IfcAlarmType'|'IfcAngularDimension'|'IfcDimensionCurveDirectedCallout'|'IfcAnnotation'|'IfcProduct'|'IfcAnnotationCurveOccurrence'|'IfcDimensionCurve'|'IfcProjectionCurve'|'IfcAnnotationOccurrence'|'IfcAnnotationFillArea'|'IfcGeometricRepresentationItem'|'IfcAnnotationFillAreaOccurrence'|'IfcAnnotationSurfaceOccurrence'|'IfcAnnotationSymbolOccurrence'|'IfcAnnotationTextOccurrence'|'IfcStyledItem'|'IfcAnnotationSurface'|'IfcTerminatorSymbol'|'IfcApplication'|'IfcAppliedValue'|'IfcCostValue'|'IfcEnvironmentalImpactValue'|'IfcAppliedValueRelationship'|'IfcApproval'|'IfcApprovalActorRelationship'|'IfcApprovalPropertyRelationship'|'IfcApprovalRelationship'|'IfcArbitraryClosedProfileDef'|'IfcArbitraryProfileDefWithVoids'|'IfcProfileDef'|'IfcArbitraryOpenProfileDef'|'IfcCenterLineProfileDef'|'IfcAsset'|'IfcGroup'|'IfcAsymmetricIShapeProfileDef'|'IfcIShapeProfileDef'|'IfcAxis1Placement'|'IfcPlacement'|'IfcAxis2Placement2D'|'IfcAxis2Placement3D'|'IfcBSplineCurve'|'IfcBezierCurve'|'IfcBoundedCurve'|'IfcBeam'|'IfcBuildingElement'|'IfcBeamType'|'IfcBuildingElementType'|'IfcRationalBezierCurve'|'IfcBlobTexture'|'IfcSurfaceTexture'|'IfcBlock'|'IfcCsgPrimitive3D'|'IfcBoilerType'|'IfcBooleanClippingResult'|'IfcBooleanResult'|'IfcBoundaryCondition'|'IfcBoundaryEdgeCondition'|'IfcBoundaryFaceCondition'|'IfcBoundaryNodeCondition'|'IfcBoundaryNodeConditionWarping'|'IfcPolyline'|'IfcTrimmedCurve'|'IfcCurve'|'IfcBoundedSurface'|'IfcCurveBoundedPlane'|'IfcRectangularTrimmedSurface'|'IfcSurface'|'IfcBoundingBox'|'IfcBoxedHalfSpace'|'IfcHalfSpaceSolid'|'IfcBuilding'|'IfcSpatialStructureElement'|'IfcBuildingElementComponent'|'IfcBuildingElementProxy'|'IfcColumn'|'IfcCovering'|'IfcCurtainWall'|'IfcDoor'|'IfcFooting'|'IfcMember'|'IfcPile'|'IfcPlate'|'IfcRailing'|'IfcRamp'|'IfcRampFlight'|'IfcRoof'|'IfcSlab'|'IfcStair'|'IfcStairFlight'|'IfcWall'|'IfcWindow'|'IfcElement'|'IfcBuildingElementPart'|'IfcReinforcingElement'|'IfcBuildingElementProxyType'|'IfcColumnType'|'IfcCoveringType'|'IfcCurtainWallType'|'IfcMemberType'|'IfcPlateType'|'IfcRailingType'|'IfcRampFlightType'|'IfcSlabType'|'IfcStairFlightType'|'IfcWallType'|'IfcElementType'|'IfcBuildingStorey'|'IfcCShapeProfileDef'|'IfcParameterizedProfileDef'|'IfcCableCarrierFittingType'|'IfcFlowFittingType'|'IfcCableCarrierSegmentType'|'IfcFlowSegmentType'|'IfcCableSegmentType'|'IfcCalendarDate'|'IfcCartesianPoint'|'IfcPoint'|'IfcCartesianTransformationOperator'|'IfcCartesianTransformationOperator2D'|'IfcCartesianTransformationOperator3D'|'IfcCartesianTransformationOperator2DnonUniform'|'IfcCartesianTransformationOperator3DnonUniform'|'IfcChamferEdgeFeature'|'IfcEdgeFeature'|'IfcChillerType'|'IfcCircle'|'IfcConic'|'IfcCircleHollowProfileDef'|'IfcCircleProfileDef'|'IfcClassification'|'IfcClassificationItem'|'IfcClassificationItemRelationship'|'IfcClassificationNotation'|'IfcClassificationNotationFacet'|'IfcClassificationReference'|'IfcExternalReference'|'IfcClosedShell'|'IfcConnectedFaceSet'|'IfcCoilType'|'IfcColourRgb'|'IfcColourSpecification'|'IfcComplexProperty'|'IfcProperty'|'IfcCompositeCurveSegment'|'IfcCompositeProfileDef'|'IfcCompressorType'|'IfcFlowMovingDeviceType'|'IfcCondenserType'|'IfcCondition'|'IfcConditionCriterion'|'IfcEllipse'|'IfcOpenShell'|'IfcTopologicalRepresentationItem'|'IfcConnectionCurveGeometry'|'IfcConnectionGeometry'|'IfcConnectionPointGeometry'|'IfcConnectionPortGeometry'|'IfcConnectionSurfaceGeometry'|'IfcConnectionPointEccentricity'|'IfcConstraint'|'IfcMetric'|'IfcObjective'|'IfcConstraintAggregationRelationship'|'IfcConstraintClassificationRelationship'|'IfcConstraintRelationship'|'IfcConstructionEquipmentResource'|'IfcConstructionResource'|'IfcConstructionMaterialResource'|'IfcConstructionProductResource'|'IfcCrewResource'|'IfcLaborResource'|'IfcSubContractResource'|'IfcResource'|'IfcContextDependentUnit'|'IfcNamedUnit'|'IfcCostItem'|'IfcCostSchedule'|'IfcEquipmentStandard'|'IfcFurnitureStandard'|'IfcPerformanceHistory'|'IfcPermit'|'IfcProjectOrder'|'IfcProjectOrderRecord'|'IfcScheduleTimeControl'|'IfcServiceLife'|'IfcSpaceProgram'|'IfcTimeSeriesSchedule'|'IfcWorkControl'|'IfcControllerType'|'IfcConversionBasedUnit'|'IfcCooledBeamType'|'IfcCoolingTowerType'|'IfcCoordinatedUniversalTimeOffset'|'IfcCraneRailAShapeProfileDef'|'IfcCraneRailFShapeProfileDef'|'IfcRectangularPyramid'|'IfcRightCircularCone'|'IfcRightCircularCylinder'|'IfcSphere'|'IfcCsgSolid'|'IfcSolidModel'|'IfcCurrencyRelationship'|'IfcLine'|'IfcOffsetCurve2D'|'IfcOffsetCurve3D'|'IfcCurveStyle'|'IfcPresentationStyle'|'IfcCurveStyleFont'|'IfcCurveStyleFontAndScaling'|'IfcCurveStyleFontPattern'|'IfcDamperType'|'IfcDateAndTime'|'IfcDefinedSymbol'|'IfcDerivedProfileDef'|'IfcDerivedUnit'|'IfcDerivedUnitElement'|'IfcDiameterDimension'|'IfcDimensionCalloutRelationship'|'IfcDraughtingCalloutRelationship'|'IfcLinearDimension'|'IfcRadiusDimension'|'IfcDraughtingCallout'|'IfcDimensionCurveTerminator'|'IfcDimensionPair'|'IfcDimensionalExponents'|'IfcDirection'|'IfcDiscreteAccessory'|'IfcElementComponent'|'IfcDiscreteAccessoryType'|'IfcVibrationIsolatorType'|'IfcElementComponentType'|'IfcDistributionChamberElement'|'IfcDistributionFlowElement'|'IfcDistributionChamberElementType'|'IfcDistributionFlowElementType'|'IfcDistributionControlElement'|'IfcDistributionElement'|'IfcFlowInstrumentType'|'IfcSensorType'|'IfcDistributionElementType'|'IfcEnergyConversionDevice'|'IfcFlowController'|'IfcFlowFitting'|'IfcFlowMovingDevice'|'IfcFlowSegment'|'IfcFlowStorageDevice'|'IfcFlowTerminal'|'IfcFlowTreatmentDevice'|'IfcFlowStorageDeviceType'|'IfcFlowTreatmentDeviceType'|'IfcDistributionPort'|'IfcPort'|'IfcDocumentElectronicFormat'|'IfcDocumentInformation'|'IfcDocumentInformationRelationship'|'IfcDocumentReference'|'IfcDoorLiningProperties'|'IfcPropertySetDefinition'|'IfcDoorPanelProperties'|'IfcDoorStyle'|'IfcTypeProduct'|'IfcStructuredDimensionCallout'|'IfcDraughtingPreDefinedColour'|'IfcPreDefinedColour'|'IfcDraughtingPreDefinedCurveFont'|'IfcPreDefinedCurveFont'|'IfcDraughtingPreDefinedTextFont'|'IfcPreDefinedTextFont'|'IfcDuctFittingType'|'IfcDuctSegmentType'|'IfcDuctSilencerType'|'IfcEdge'|'IfcEdgeCurve'|'IfcOrientedEdge'|'IfcSubedge'|'IfcRoundedEdgeFeature'|'IfcFeatureElementSubtraction'|'IfcEdgeLoop'|'IfcLoop'|'IfcElectricApplianceType'|'IfcElectricDistributionPoint'|'IfcElectricFlowStorageDeviceType'|'IfcElectricGeneratorType'|'IfcElectricHeaterType'|'IfcElectricMotorType'|'IfcElectricTimeControlType'|'IfcElectricalBaseProperties'|'IfcEnergyProperties'|'IfcElectricalCircuit'|'IfcSystem'|'IfcElectricalElement'|'IfcElementAssembly'|'IfcEquipmentElement'|'IfcFeatureElement'|'IfcFurnishingElement'|'IfcTransportElement'|'IfcVirtualElement'|'IfcFastener'|'IfcFastenerType'|'IfcElementQuantity'|'IfcFurnishingElementType'|'IfcSpatialStructureElementType'|'IfcTransportElementType'|'IfcElementarySurface'|'IfcPlane'|'IfcEllipseProfileDef'|'IfcEvaporativeCoolerType'|'IfcEvaporatorType'|'IfcHeatExchangerType'|'IfcHumidifierType'|'IfcMotorConnectionType'|'IfcSpaceHeaterType'|'IfcTransformerType'|'IfcTubeBundleType'|'IfcUnitaryEquipmentType'|'IfcExtendedMaterialProperties'|'IfcMaterialProperties'|'IfcExternallyDefinedHatchStyle'|'IfcExternallyDefinedSurfaceStyle'|'IfcExternallyDefinedSymbol'|'IfcExternallyDefinedTextFont'|'IfcLibraryReference'|'IfcExtrudedAreaSolid'|'IfcSweptAreaSolid'|'IfcFace'|'IfcFaceSurface'|'IfcFaceBasedSurfaceModel'|'IfcFaceBound'|'IfcFaceOuterBound'|'IfcFacetedBrep'|'IfcManifoldSolidBrep'|'IfcFacetedBrepWithVoids'|'IfcFailureConnectionCondition'|'IfcStructuralConnectionCondition'|'IfcFanType'|'IfcMechanicalFastener'|'IfcMechanicalFastenerType'|'IfcFeatureElementAddition'|'IfcProjectionElement'|'IfcOpeningElement'|'IfcFillAreaStyle'|'IfcFillAreaStyleHatching'|'IfcFillAreaStyleTileSymbolWithStyle'|'IfcFillAreaStyleTiles'|'IfcFilterType'|'IfcFireSuppressionTerminalType'|'IfcFlowMeterType'|'IfcProtectiveDeviceType'|'IfcSwitchingDeviceType'|'IfcValveType'|'IfcJunctionBoxType'|'IfcPipeFittingType'|'IfcPumpType'|'IfcPipeSegmentType'|'IfcTankType'|'IfcGasTerminalType'|'IfcLampType'|'IfcLightFixtureType'|'IfcOutletType'|'IfcSanitaryTerminalType'|'IfcStackTerminalType'|'IfcWasteTerminalType'|'IfcFluidFlowProperties'|'IfcFuelProperties'|'IfcFurnitureType'|'IfcSystemFurnitureElementType'|'IfcGeneralMaterialProperties'|'IfcGeneralProfileProperties'|'IfcStructuralProfileProperties'|'IfcProfileProperties'|'IfcGeometricCurveSet'|'IfcGeometricSet'|'IfcGeometricRepresentationContext'|'IfcGeometricRepresentationSubContext'|'IfcRepresentationContext'|'IfcLightSource'|'IfcOneDirectionRepeatFactor'|'IfcPlanarExtent'|'IfcSectionedSpine'|'IfcShellBasedSurfaceModel'|'IfcTextLiteral'|'IfcVector'|'IfcRepresentationItem'|'IfcGrid'|'IfcGridAxis'|'IfcGridPlacement'|'IfcObjectPlacement'|'IfcInventory'|'IfcStructuralLoadGroup'|'IfcStructuralResultGroup'|'IfcZone'|'IfcPolygonalBoundedHalfSpace'|'IfcHygroscopicMaterialProperties'|'IfcImageTexture'|'IfcIrregularTimeSeries'|'IfcTimeSeries'|'IfcIrregularTimeSeriesValue'|'IfcLShapeProfileDef'|'IfcLibraryInformation'|'IfcLightDistributionData'|'IfcLightIntensityDistribution'|'IfcLightSourceAmbient'|'IfcLightSourceDirectional'|'IfcLightSourceGoniometric'|'IfcLightSourcePositional'|'IfcLightSourceSpot'|'IfcLocalPlacement'|'IfcLocalTime'|'IfcPolyLoop'|'IfcVertexLoop'|'IfcMappedItem'|'IfcMaterial'|'IfcMaterialClassificationRelationship'|'IfcMaterialDefinitionRepresentation'|'IfcProductRepresentation'|'IfcMaterialLayer'|'IfcMaterialLayerSet'|'IfcMaterialLayerSetUsage'|'IfcMaterialList'|'IfcMechanicalMaterialProperties'|'IfcOpticalMaterialProperties'|'IfcProductsOfCombustionProperties'|'IfcThermalMaterialProperties'|'IfcWaterProperties'|'IfcMeasureWithUnit'|'IfcMechanicalConcreteMaterialProperties'|'IfcMechanicalSteelMaterialProperties'|'IfcMonetaryUnit'|'IfcMove'|'IfcTask'|'IfcSIUnit'|'IfcProcess'|'IfcProject'|'IfcObjectDefinition'|'IfcTypeObject'|'IfcRoot'|'IfcTwoDirectionRepeatFactor'|'IfcOrderAction'|'IfcOrganization'|'IfcOrganizationRelationship'|'IfcOwnerHistory'|'IfcRectangleProfileDef'|'IfcTShapeProfileDef'|'IfcTrapeziumProfileDef'|'IfcUShapeProfileDef'|'IfcZShapeProfileDef'|'IfcPath'|'IfcPermeableCoveringProperties'|'IfcPerson'|'IfcPersonAndOrganization'|'IfcPhysicalComplexQuantity'|'IfcPhysicalQuantity'|'IfcPhysicalSimpleQuantity'|'IfcQuantityArea'|'IfcQuantityCount'|'IfcQuantityLength'|'IfcQuantityTime'|'IfcQuantityVolume'|'IfcQuantityWeight'|'IfcPixelTexture'|'IfcPlanarBox'|'IfcPointOnCurve'|'IfcPointOnSurface'|'IfcPreDefinedItem'|'IfcPreDefinedDimensionSymbol'|'IfcPreDefinedSymbol'|'IfcPreDefinedPointMarkerSymbol'|'IfcPreDefinedTerminatorSymbol'|'IfcTextStyleFontModel'|'IfcPresentationLayerAssignment'|'IfcPresentationLayerWithStyle'|'IfcSurfaceStyle'|'IfcSymbolStyle'|'IfcTextStyle'|'IfcPresentationStyleAssignment'|'IfcProcedure'|'IfcProxy'|'IfcStructuralActivity'|'IfcStructuralItem'|'IfcProductDefinitionShape'|'IfcRibPlateProfileProperties'|'IfcSimpleProperty'|'IfcPropertyBoundedValue'|'IfcPropertyConstraintRelationship'|'IfcPropertyDefinition'|'IfcPropertyDependencyRelationship'|'IfcPropertyEnumeratedValue'|'IfcPropertyEnumeration'|'IfcPropertyListValue'|'IfcPropertyReferenceValue'|'IfcPropertySet'|'IfcReinforcementDefinitionProperties'|'IfcServiceLifeFactor'|'IfcSoundProperties'|'IfcSoundValue'|'IfcSpaceThermalLoadProperties'|'IfcWindowLiningProperties'|'IfcWindowPanelProperties'|'IfcPropertySingleValue'|'IfcPropertyTableValue'|'IfcRectangleHollowProfileDef'|'IfcRoundedRectangleProfileDef'|'IfcReferencesValueDocument'|'IfcRegularTimeSeries'|'IfcReinforcementBarProperties'|'IfcReinforcingBar'|'IfcReinforcingMesh'|'IfcTendon'|'IfcTendonAnchor'|'IfcRelAggregates'|'IfcRelDecomposes'|'IfcRelAssigns'|'IfcRelAssignsToActor'|'IfcRelAssignsToControl'|'IfcRelAssignsToGroup'|'IfcRelAssignsToProcess'|'IfcRelAssignsToProduct'|'IfcRelAssignsToResource'|'IfcRelationship'|'IfcRelAssignsTasks'|'IfcRelOccupiesSpaces'|'IfcRelAssignsToProjectOrder'|'IfcRelSchedulesCostItems'|'IfcRelAssociates'|'IfcRelAssociatesAppliedValue'|'IfcRelAssociatesApproval'|'IfcRelAssociatesClassification'|'IfcRelAssociatesConstraint'|'IfcRelAssociatesDocument'|'IfcRelAssociatesLibrary'|'IfcRelAssociatesMaterial'|'IfcRelAssociatesProfileProperties'|'IfcRelConnects'|'IfcRelConnectsElements'|'IfcRelConnectsPortToElement'|'IfcRelConnectsPorts'|'IfcRelConnectsStructuralActivity'|'IfcRelConnectsStructuralElement'|'IfcRelConnectsStructuralMember'|'IfcRelContainedInSpatialStructure'|'IfcRelCoversBldgElements'|'IfcRelCoversSpaces'|'IfcRelFillsElement'|'IfcRelFlowControlElements'|'IfcRelInteractionRequirements'|'IfcRelProjectsElement'|'IfcRelReferencedInSpatialStructure'|'IfcRelSequence'|'IfcRelServicesBuildings'|'IfcRelSpaceBoundary'|'IfcRelVoidsElement'|'IfcRelConnectsPathElements'|'IfcRelConnectsWithRealizingElements'|'IfcRelConnectsWithEccentricity'|'IfcRelNests'|'IfcRelDefines'|'IfcRelDefinesByProperties'|'IfcRelDefinesByType'|'IfcRelOverridesProperties'|'IfcRelaxation'|'IfcRepresentation'|'IfcShapeModel'|'IfcStyleModel'|'IfcRepresentationMap'|'IfcRevolvedAreaSolid'|'IfcSectionProperties'|'IfcSectionReinforcementProperties'|'IfcShapeAspect'|'IfcShapeRepresentation'|'IfcTopologyRepresentation'|'IfcSite'|'IfcSlippageConnectionCondition'|'IfcSweptDiskSolid'|'IfcSpace'|'IfcSpaceType'|'IfcStructuralAction'|'IfcStructuralLinearAction'|'IfcStructuralPlanarAction'|'IfcStructuralPointAction'|'IfcStructuralReaction'|'IfcStructuralAnalysisModel'|'IfcStructuralConnection'|'IfcStructuralCurveConnection'|'IfcStructuralPointConnection'|'IfcStructuralSurfaceConnection'|'IfcStructuralCurveMember'|'IfcStructuralCurveMemberVarying'|'IfcStructuralMember'|'IfcStructuralLinearActionVarying'|'IfcStructuralLoad'|'IfcStructuralLoadStatic'|'IfcStructuralLoadLinearForce'|'IfcStructuralLoadPlanarForce'|'IfcStructuralLoadSingleDisplacement'|'IfcStructuralLoadSingleDisplacementDistortion'|'IfcStructuralLoadSingleForce'|'IfcStructuralLoadSingleForceWarping'|'IfcStructuralLoadTemperature'|'IfcStructuralSurfaceMember'|'IfcStructuralPlanarActionVarying'|'IfcStructuralPointReaction'|'IfcStructuralSteelProfileProperties'|'IfcStructuralSurfaceMemberVarying'|'IfcStyledRepresentation'|'IfcSweptSurface'|'IfcSurfaceCurveSweptAreaSolid'|'IfcSurfaceOfLinearExtrusion'|'IfcSurfaceOfRevolution'|'IfcSurfaceStyleLighting'|'IfcSurfaceStyleRefraction'|'IfcSurfaceStyleRendering'|'IfcSurfaceStyleShading'|'IfcSurfaceStyleWithTextures'|'IfcTable'|'IfcTableRow'|'IfcTextLiteralWithExtent'|'IfcTextStyleForDefinedFont'|'IfcTextStyleTextModel'|'IfcTextStyleWithBoxCharacteristics'|'IfcTextureCoordinate'|'IfcTextureCoordinateGenerator'|'IfcTextureMap'|'IfcTextureVertex'|'IfcTimeSeriesReferenceRelationship'|'IfcTimeSeriesValue'|'IfcVertex'|'IfcWindowStyle'|'IfcUnitAssignment'|'IfcVertexPoint'|'IfcVertexBasedTextureMap'|'IfcVirtualGridIntersection'|'IfcWallStandardCase'|'IfcWorkPlan'|'IfcWorkSchedule';

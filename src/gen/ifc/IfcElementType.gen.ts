
import { IfcTypeProduct } from "./index"
import { IfcLabel } from "./index"
import {
  stepExtractString,
  stepExtractOptional,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcelementtype.htm */
export abstract class IfcElementType extends IfcTypeProduct {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCELEMENTTYPE
  }
  private ElementType_? : string | null

  public get ElementType() : string | null {
    if ( this.ElementType_ === void 0 ) {
      this.ElementType_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 8 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 8

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

     let value = stepExtractString( buffer, cursor, endCursor )

      if ( value === void 0 ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }

        return null
      } else {
        return value
      } })()
    }

    return this.ElementType_ as string | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCIVILELEMENTTYPE, EntityTypesIfc.IFCDISTRIBUTIONELEMENTTYPE, EntityTypesIfc.IFCELEMENTASSEMBLYTYPE, EntityTypesIfc.IFCFURNISHINGELEMENTTYPE, EntityTypesIfc.IFCGEOGRAPHICELEMENTTYPE, EntityTypesIfc.IFCTRANSPORTELEMENTTYPE, EntityTypesIfc.IFCBEAMTYPE, EntityTypesIfc.IFCBUILDINGELEMENTPROXYTYPE, EntityTypesIfc.IFCCHIMNEYTYPE, EntityTypesIfc.IFCCOLUMNTYPE, EntityTypesIfc.IFCCOVERINGTYPE, EntityTypesIfc.IFCCURTAINWALLTYPE, EntityTypesIfc.IFCDOORTYPE, EntityTypesIfc.IFCFOOTINGTYPE, EntityTypesIfc.IFCMEMBERTYPE, EntityTypesIfc.IFCPILETYPE, EntityTypesIfc.IFCPLATETYPE, EntityTypesIfc.IFCRAILINGTYPE, EntityTypesIfc.IFCRAMPFLIGHTTYPE, EntityTypesIfc.IFCRAMPTYPE, EntityTypesIfc.IFCROOFTYPE, EntityTypesIfc.IFCSHADINGDEVICETYPE, EntityTypesIfc.IFCSLABTYPE, EntityTypesIfc.IFCSTAIRFLIGHTTYPE, EntityTypesIfc.IFCSTAIRTYPE, EntityTypesIfc.IFCWALLTYPE, EntityTypesIfc.IFCWINDOWTYPE, EntityTypesIfc.IFCACTUATORTYPE, EntityTypesIfc.IFCALARMTYPE, EntityTypesIfc.IFCCONTROLLERTYPE, EntityTypesIfc.IFCFLOWINSTRUMENTTYPE, EntityTypesIfc.IFCPROTECTIVEDEVICETRIPPINGUNITTYPE, EntityTypesIfc.IFCSENSORTYPE, EntityTypesIfc.IFCUNITARYCONTROLELEMENTTYPE, EntityTypesIfc.IFCDISTRIBUTIONCHAMBERELEMENTTYPE, EntityTypesIfc.IFCAIRTOAIRHEATRECOVERYTYPE, EntityTypesIfc.IFCBOILERTYPE, EntityTypesIfc.IFCBURNERTYPE, EntityTypesIfc.IFCCHILLERTYPE, EntityTypesIfc.IFCCOILTYPE, EntityTypesIfc.IFCCONDENSERTYPE, EntityTypesIfc.IFCCOOLEDBEAMTYPE, EntityTypesIfc.IFCCOOLINGTOWERTYPE, EntityTypesIfc.IFCELECTRICGENERATORTYPE, EntityTypesIfc.IFCELECTRICMOTORTYPE, EntityTypesIfc.IFCENGINETYPE, EntityTypesIfc.IFCEVAPORATIVECOOLERTYPE, EntityTypesIfc.IFCEVAPORATORTYPE, EntityTypesIfc.IFCHEATEXCHANGERTYPE, EntityTypesIfc.IFCHUMIDIFIERTYPE, EntityTypesIfc.IFCMOTORCONNECTIONTYPE, EntityTypesIfc.IFCSOLARDEVICETYPE, EntityTypesIfc.IFCTRANSFORMERTYPE, EntityTypesIfc.IFCTUBEBUNDLETYPE, EntityTypesIfc.IFCUNITARYEQUIPMENTTYPE, EntityTypesIfc.IFCAIRTERMINALBOXTYPE, EntityTypesIfc.IFCDAMPERTYPE, EntityTypesIfc.IFCELECTRICDISTRIBUTIONBOARDTYPE, EntityTypesIfc.IFCELECTRICTIMECONTROLTYPE, EntityTypesIfc.IFCFLOWMETERTYPE, EntityTypesIfc.IFCPROTECTIVEDEVICETYPE, EntityTypesIfc.IFCSWITCHINGDEVICETYPE, EntityTypesIfc.IFCVALVETYPE, EntityTypesIfc.IFCCABLECARRIERFITTINGTYPE, EntityTypesIfc.IFCCABLEFITTINGTYPE, EntityTypesIfc.IFCDUCTFITTINGTYPE, EntityTypesIfc.IFCJUNCTIONBOXTYPE, EntityTypesIfc.IFCPIPEFITTINGTYPE, EntityTypesIfc.IFCCOMPRESSORTYPE, EntityTypesIfc.IFCFANTYPE, EntityTypesIfc.IFCPUMPTYPE, EntityTypesIfc.IFCCABLECARRIERSEGMENTTYPE, EntityTypesIfc.IFCCABLESEGMENTTYPE, EntityTypesIfc.IFCDUCTSEGMENTTYPE, EntityTypesIfc.IFCPIPESEGMENTTYPE, EntityTypesIfc.IFCELECTRICFLOWSTORAGEDEVICETYPE, EntityTypesIfc.IFCTANKTYPE, EntityTypesIfc.IFCAIRTERMINALTYPE, EntityTypesIfc.IFCAUDIOVISUALAPPLIANCETYPE, EntityTypesIfc.IFCCOMMUNICATIONSAPPLIANCETYPE, EntityTypesIfc.IFCELECTRICAPPLIANCETYPE, EntityTypesIfc.IFCFIRESUPPRESSIONTERMINALTYPE, EntityTypesIfc.IFCLAMPTYPE, EntityTypesIfc.IFCLIGHTFIXTURETYPE, EntityTypesIfc.IFCMEDICALDEVICETYPE, EntityTypesIfc.IFCOUTLETTYPE, EntityTypesIfc.IFCSANITARYTERMINALTYPE, EntityTypesIfc.IFCSPACEHEATERTYPE, EntityTypesIfc.IFCSTACKTERMINALTYPE, EntityTypesIfc.IFCWASTETERMINALTYPE, EntityTypesIfc.IFCDUCTSILENCERTYPE, EntityTypesIfc.IFCFILTERTYPE, EntityTypesIfc.IFCINTERCEPTORTYPE, EntityTypesIfc.IFCBUILDINGELEMENTPARTTYPE, EntityTypesIfc.IFCDISCRETEACCESSORYTYPE, EntityTypesIfc.IFCFASTENERTYPE, EntityTypesIfc.IFCMECHANICALFASTENERTYPE, EntityTypesIfc.IFCVIBRATIONISOLATORTYPE, EntityTypesIfc.IFCREINFORCINGBARTYPE, EntityTypesIfc.IFCREINFORCINGMESHTYPE, EntityTypesIfc.IFCTENDONANCHORTYPE, EntityTypesIfc.IFCTENDONTYPE, EntityTypesIfc.IFCFURNITURETYPE, EntityTypesIfc.IFCSYSTEMFURNITUREELEMENTTYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCELEMENTTYPE
}

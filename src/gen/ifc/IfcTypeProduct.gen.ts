
import { IfcTypeObject } from "./index"
import { IfcRepresentationMap } from "./index"
import { IfcLabel } from "./index"
import {
  stepExtractString,
  stepExtractOptional,
  stepExtractReference,
  stepExtractInlineElemement,
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctypeproduct.htm */
export  class IfcTypeProduct extends IfcTypeObject {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCTYPEPRODUCT
  }
  private RepresentationMaps_? : Array<IfcRepresentationMap> | null
  private Tag_? : string | null

  public get RepresentationMaps() : Array<IfcRepresentationMap> | null {
    if ( this.RepresentationMaps_ === void 0 ) {
      this.RepresentationMaps_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 6 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 6

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<IfcRepresentationMap> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => { 
          let cursor = address
    
           let expressID = stepExtractReference( buffer, cursor, endCursor );
           let value =
             expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
             this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) )
    
          if ( !( value instanceof IfcRepresentationMap ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }

return value })()
    }

    return this.RepresentationMaps_ as Array<IfcRepresentationMap> | null
  }

  public get Tag() : string | null {
    if ( this.Tag_ === void 0 ) {
      this.Tag_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 7 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 7

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

    return this.Tag_ as string | null
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCTYPEPRODUCT, EntityTypesIfc.IFCDOORSTYLE, EntityTypesIfc.IFCWINDOWSTYLE, EntityTypesIfc.IFCCIVILELEMENTTYPE, EntityTypesIfc.IFCDISTRIBUTIONELEMENTTYPE, EntityTypesIfc.IFCELEMENTASSEMBLYTYPE, EntityTypesIfc.IFCFURNISHINGELEMENTTYPE, EntityTypesIfc.IFCGEOGRAPHICELEMENTTYPE, EntityTypesIfc.IFCTRANSPORTELEMENTTYPE, EntityTypesIfc.IFCBEAMTYPE, EntityTypesIfc.IFCBUILDINGELEMENTPROXYTYPE, EntityTypesIfc.IFCCHIMNEYTYPE, EntityTypesIfc.IFCCOLUMNTYPE, EntityTypesIfc.IFCCOVERINGTYPE, EntityTypesIfc.IFCCURTAINWALLTYPE, EntityTypesIfc.IFCDOORTYPE, EntityTypesIfc.IFCFOOTINGTYPE, EntityTypesIfc.IFCMEMBERTYPE, EntityTypesIfc.IFCPILETYPE, EntityTypesIfc.IFCPLATETYPE, EntityTypesIfc.IFCRAILINGTYPE, EntityTypesIfc.IFCRAMPFLIGHTTYPE, EntityTypesIfc.IFCRAMPTYPE, EntityTypesIfc.IFCROOFTYPE, EntityTypesIfc.IFCSHADINGDEVICETYPE, EntityTypesIfc.IFCSLABTYPE, EntityTypesIfc.IFCSTAIRFLIGHTTYPE, EntityTypesIfc.IFCSTAIRTYPE, EntityTypesIfc.IFCWALLTYPE, EntityTypesIfc.IFCWINDOWTYPE, EntityTypesIfc.IFCACTUATORTYPE, EntityTypesIfc.IFCALARMTYPE, EntityTypesIfc.IFCCONTROLLERTYPE, EntityTypesIfc.IFCFLOWINSTRUMENTTYPE, EntityTypesIfc.IFCPROTECTIVEDEVICETRIPPINGUNITTYPE, EntityTypesIfc.IFCSENSORTYPE, EntityTypesIfc.IFCUNITARYCONTROLELEMENTTYPE, EntityTypesIfc.IFCDISTRIBUTIONCHAMBERELEMENTTYPE, EntityTypesIfc.IFCAIRTOAIRHEATRECOVERYTYPE, EntityTypesIfc.IFCBOILERTYPE, EntityTypesIfc.IFCBURNERTYPE, EntityTypesIfc.IFCCHILLERTYPE, EntityTypesIfc.IFCCOILTYPE, EntityTypesIfc.IFCCONDENSERTYPE, EntityTypesIfc.IFCCOOLEDBEAMTYPE, EntityTypesIfc.IFCCOOLINGTOWERTYPE, EntityTypesIfc.IFCELECTRICGENERATORTYPE, EntityTypesIfc.IFCELECTRICMOTORTYPE, EntityTypesIfc.IFCENGINETYPE, EntityTypesIfc.IFCEVAPORATIVECOOLERTYPE, EntityTypesIfc.IFCEVAPORATORTYPE, EntityTypesIfc.IFCHEATEXCHANGERTYPE, EntityTypesIfc.IFCHUMIDIFIERTYPE, EntityTypesIfc.IFCMOTORCONNECTIONTYPE, EntityTypesIfc.IFCSOLARDEVICETYPE, EntityTypesIfc.IFCTRANSFORMERTYPE, EntityTypesIfc.IFCTUBEBUNDLETYPE, EntityTypesIfc.IFCUNITARYEQUIPMENTTYPE, EntityTypesIfc.IFCAIRTERMINALBOXTYPE, EntityTypesIfc.IFCDAMPERTYPE, EntityTypesIfc.IFCELECTRICDISTRIBUTIONBOARDTYPE, EntityTypesIfc.IFCELECTRICTIMECONTROLTYPE, EntityTypesIfc.IFCFLOWMETERTYPE, EntityTypesIfc.IFCPROTECTIVEDEVICETYPE, EntityTypesIfc.IFCSWITCHINGDEVICETYPE, EntityTypesIfc.IFCVALVETYPE, EntityTypesIfc.IFCCABLECARRIERFITTINGTYPE, EntityTypesIfc.IFCCABLEFITTINGTYPE, EntityTypesIfc.IFCDUCTFITTINGTYPE, EntityTypesIfc.IFCJUNCTIONBOXTYPE, EntityTypesIfc.IFCPIPEFITTINGTYPE, EntityTypesIfc.IFCCOMPRESSORTYPE, EntityTypesIfc.IFCFANTYPE, EntityTypesIfc.IFCPUMPTYPE, EntityTypesIfc.IFCCABLECARRIERSEGMENTTYPE, EntityTypesIfc.IFCCABLESEGMENTTYPE, EntityTypesIfc.IFCDUCTSEGMENTTYPE, EntityTypesIfc.IFCPIPESEGMENTTYPE, EntityTypesIfc.IFCELECTRICFLOWSTORAGEDEVICETYPE, EntityTypesIfc.IFCTANKTYPE, EntityTypesIfc.IFCAIRTERMINALTYPE, EntityTypesIfc.IFCAUDIOVISUALAPPLIANCETYPE, EntityTypesIfc.IFCCOMMUNICATIONSAPPLIANCETYPE, EntityTypesIfc.IFCELECTRICAPPLIANCETYPE, EntityTypesIfc.IFCFIRESUPPRESSIONTERMINALTYPE, EntityTypesIfc.IFCLAMPTYPE, EntityTypesIfc.IFCLIGHTFIXTURETYPE, EntityTypesIfc.IFCMEDICALDEVICETYPE, EntityTypesIfc.IFCOUTLETTYPE, EntityTypesIfc.IFCSANITARYTERMINALTYPE, EntityTypesIfc.IFCSPACEHEATERTYPE, EntityTypesIfc.IFCSTACKTERMINALTYPE, EntityTypesIfc.IFCWASTETERMINALTYPE, EntityTypesIfc.IFCDUCTSILENCERTYPE, EntityTypesIfc.IFCFILTERTYPE, EntityTypesIfc.IFCINTERCEPTORTYPE, EntityTypesIfc.IFCBUILDINGELEMENTPARTTYPE, EntityTypesIfc.IFCDISCRETEACCESSORYTYPE, EntityTypesIfc.IFCFASTENERTYPE, EntityTypesIfc.IFCMECHANICALFASTENERTYPE, EntityTypesIfc.IFCVIBRATIONISOLATORTYPE, EntityTypesIfc.IFCREINFORCINGBARTYPE, EntityTypesIfc.IFCREINFORCINGMESHTYPE, EntityTypesIfc.IFCTENDONANCHORTYPE, EntityTypesIfc.IFCTENDONTYPE, EntityTypesIfc.IFCFURNITURETYPE, EntityTypesIfc.IFCSYSTEMFURNITUREELEMENTTYPE, EntityTypesIfc.IFCSPATIALZONETYPE, EntityTypesIfc.IFCSPACETYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCTYPEPRODUCT
}

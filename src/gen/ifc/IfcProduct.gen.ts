
import { IfcObject } from "./index"
import { IfcObjectPlacement } from "./index"
import { IfcProductRepresentation } from "./index"
import {
  stepExtractOptional,
  stepExtractReference,
  stepExtractInlineElemement,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcproduct.htm */
export abstract class IfcProduct extends IfcObject {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCPRODUCT
  }
  private ObjectPlacement_? : IfcObjectPlacement | null
  private Representation_? : IfcProductRepresentation | null

  public get ObjectPlacement() : IfcObjectPlacement | null {
    if ( this.ObjectPlacement_ === void 0 ) {
      this.ObjectPlacement_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 5 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 5

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

       let expressID = stepExtractReference( buffer, cursor, endCursor );
       let value =
         expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
         this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) )

     if ( !( value instanceof IfcObjectPlacement ) ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed for field' )
        }

        return null
      } else {
        return value
      } })()
    }

    return this.ObjectPlacement_ as IfcObjectPlacement | null
  }

  public get Representation() : IfcProductRepresentation | null {
    if ( this.Representation_ === void 0 ) {
      this.Representation_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 6 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 6

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

       let expressID = stepExtractReference( buffer, cursor, endCursor );
       let value =
         expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
         this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) )

     if ( !( value instanceof IfcProductRepresentation ) ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed for field' )
        }

        return null
      } else {
        return value
      } })()
    }

    return this.Representation_ as IfcProductRepresentation | null
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCANNOTATION, EntityTypesIfc.IFCGRID, EntityTypesIfc.IFCPROXY, EntityTypesIfc.IFCCIVILELEMENT, EntityTypesIfc.IFCDISTRIBUTIONELEMENT, EntityTypesIfc.IFCELEMENTASSEMBLY, EntityTypesIfc.IFCFURNISHINGELEMENT, EntityTypesIfc.IFCGEOGRAPHICELEMENT, EntityTypesIfc.IFCTRANSPORTELEMENT, EntityTypesIfc.IFCVIRTUALELEMENT, EntityTypesIfc.IFCBEAM, EntityTypesIfc.IFCBUILDINGELEMENTPROXY, EntityTypesIfc.IFCCHIMNEY, EntityTypesIfc.IFCCOLUMN, EntityTypesIfc.IFCCOVERING, EntityTypesIfc.IFCCURTAINWALL, EntityTypesIfc.IFCDOOR, EntityTypesIfc.IFCFOOTING, EntityTypesIfc.IFCMEMBER, EntityTypesIfc.IFCPILE, EntityTypesIfc.IFCPLATE, EntityTypesIfc.IFCRAILING, EntityTypesIfc.IFCRAMP, EntityTypesIfc.IFCRAMPFLIGHT, EntityTypesIfc.IFCROOF, EntityTypesIfc.IFCSHADINGDEVICE, EntityTypesIfc.IFCSLAB, EntityTypesIfc.IFCSTAIR, EntityTypesIfc.IFCSTAIRFLIGHT, EntityTypesIfc.IFCWALL, EntityTypesIfc.IFCWINDOW, EntityTypesIfc.IFCBEAMSTANDARDCASE, EntityTypesIfc.IFCCOLUMNSTANDARDCASE, EntityTypesIfc.IFCDOORSTANDARDCASE, EntityTypesIfc.IFCMEMBERSTANDARDCASE, EntityTypesIfc.IFCPLATESTANDARDCASE, EntityTypesIfc.IFCSLABELEMENTEDCASE, EntityTypesIfc.IFCSLABSTANDARDCASE, EntityTypesIfc.IFCWALLELEMENTEDCASE, EntityTypesIfc.IFCWALLSTANDARDCASE, EntityTypesIfc.IFCWINDOWSTANDARDCASE, EntityTypesIfc.IFCDISTRIBUTIONCONTROLELEMENT, EntityTypesIfc.IFCDISTRIBUTIONFLOWELEMENT, EntityTypesIfc.IFCACTUATOR, EntityTypesIfc.IFCALARM, EntityTypesIfc.IFCCONTROLLER, EntityTypesIfc.IFCFLOWINSTRUMENT, EntityTypesIfc.IFCPROTECTIVEDEVICETRIPPINGUNIT, EntityTypesIfc.IFCSENSOR, EntityTypesIfc.IFCUNITARYCONTROLELEMENT, EntityTypesIfc.IFCDISTRIBUTIONCHAMBERELEMENT, EntityTypesIfc.IFCENERGYCONVERSIONDEVICE, EntityTypesIfc.IFCFLOWCONTROLLER, EntityTypesIfc.IFCFLOWFITTING, EntityTypesIfc.IFCFLOWMOVINGDEVICE, EntityTypesIfc.IFCFLOWSEGMENT, EntityTypesIfc.IFCFLOWSTORAGEDEVICE, EntityTypesIfc.IFCFLOWTERMINAL, EntityTypesIfc.IFCFLOWTREATMENTDEVICE, EntityTypesIfc.IFCAIRTOAIRHEATRECOVERY, EntityTypesIfc.IFCBOILER, EntityTypesIfc.IFCBURNER, EntityTypesIfc.IFCCHILLER, EntityTypesIfc.IFCCOIL, EntityTypesIfc.IFCCONDENSER, EntityTypesIfc.IFCCOOLEDBEAM, EntityTypesIfc.IFCCOOLINGTOWER, EntityTypesIfc.IFCELECTRICGENERATOR, EntityTypesIfc.IFCELECTRICMOTOR, EntityTypesIfc.IFCENGINE, EntityTypesIfc.IFCEVAPORATIVECOOLER, EntityTypesIfc.IFCEVAPORATOR, EntityTypesIfc.IFCHEATEXCHANGER, EntityTypesIfc.IFCHUMIDIFIER, EntityTypesIfc.IFCMOTORCONNECTION, EntityTypesIfc.IFCSOLARDEVICE, EntityTypesIfc.IFCTRANSFORMER, EntityTypesIfc.IFCTUBEBUNDLE, EntityTypesIfc.IFCUNITARYEQUIPMENT, EntityTypesIfc.IFCAIRTERMINALBOX, EntityTypesIfc.IFCDAMPER, EntityTypesIfc.IFCELECTRICDISTRIBUTIONBOARD, EntityTypesIfc.IFCELECTRICTIMECONTROL, EntityTypesIfc.IFCFLOWMETER, EntityTypesIfc.IFCPROTECTIVEDEVICE, EntityTypesIfc.IFCSWITCHINGDEVICE, EntityTypesIfc.IFCVALVE, EntityTypesIfc.IFCCABLECARRIERFITTING, EntityTypesIfc.IFCCABLEFITTING, EntityTypesIfc.IFCDUCTFITTING, EntityTypesIfc.IFCJUNCTIONBOX, EntityTypesIfc.IFCPIPEFITTING, EntityTypesIfc.IFCCOMPRESSOR, EntityTypesIfc.IFCFAN, EntityTypesIfc.IFCPUMP, EntityTypesIfc.IFCCABLECARRIERSEGMENT, EntityTypesIfc.IFCCABLESEGMENT, EntityTypesIfc.IFCDUCTSEGMENT, EntityTypesIfc.IFCPIPESEGMENT, EntityTypesIfc.IFCELECTRICFLOWSTORAGEDEVICE, EntityTypesIfc.IFCTANK, EntityTypesIfc.IFCAIRTERMINAL, EntityTypesIfc.IFCAUDIOVISUALAPPLIANCE, EntityTypesIfc.IFCCOMMUNICATIONSAPPLIANCE, EntityTypesIfc.IFCELECTRICAPPLIANCE, EntityTypesIfc.IFCFIRESUPPRESSIONTERMINAL, EntityTypesIfc.IFCLAMP, EntityTypesIfc.IFCLIGHTFIXTURE, EntityTypesIfc.IFCMEDICALDEVICE, EntityTypesIfc.IFCOUTLET, EntityTypesIfc.IFCSANITARYTERMINAL, EntityTypesIfc.IFCSPACEHEATER, EntityTypesIfc.IFCSTACKTERMINAL, EntityTypesIfc.IFCWASTETERMINAL, EntityTypesIfc.IFCDUCTSILENCER, EntityTypesIfc.IFCFILTER, EntityTypesIfc.IFCINTERCEPTOR, EntityTypesIfc.IFCBUILDINGELEMENTPART, EntityTypesIfc.IFCDISCRETEACCESSORY, EntityTypesIfc.IFCFASTENER, EntityTypesIfc.IFCMECHANICALFASTENER, EntityTypesIfc.IFCVIBRATIONISOLATOR, EntityTypesIfc.IFCREINFORCINGBAR, EntityTypesIfc.IFCREINFORCINGMESH, EntityTypesIfc.IFCTENDON, EntityTypesIfc.IFCTENDONANCHOR, EntityTypesIfc.IFCSURFACEFEATURE, EntityTypesIfc.IFCPROJECTIONELEMENT, EntityTypesIfc.IFCOPENINGELEMENT, EntityTypesIfc.IFCVOIDINGFEATURE, EntityTypesIfc.IFCOPENINGSTANDARDCASE, EntityTypesIfc.IFCFURNITURE, EntityTypesIfc.IFCSYSTEMFURNITUREELEMENT, EntityTypesIfc.IFCDISTRIBUTIONPORT, EntityTypesIfc.IFCSPATIALZONE, EntityTypesIfc.IFCEXTERNALSPATIALELEMENT, EntityTypesIfc.IFCBUILDING, EntityTypesIfc.IFCBUILDINGSTOREY, EntityTypesIfc.IFCSITE, EntityTypesIfc.IFCSPACE, EntityTypesIfc.IFCSTRUCTURALCURVEACTION, EntityTypesIfc.IFCSTRUCTURALPOINTACTION, EntityTypesIfc.IFCSTRUCTURALSURFACEACTION, EntityTypesIfc.IFCSTRUCTURALLINEARACTION, EntityTypesIfc.IFCSTRUCTURALPLANARACTION, EntityTypesIfc.IFCSTRUCTURALCURVEREACTION, EntityTypesIfc.IFCSTRUCTURALPOINTREACTION, EntityTypesIfc.IFCSTRUCTURALSURFACEREACTION, EntityTypesIfc.IFCSTRUCTURALCURVECONNECTION, EntityTypesIfc.IFCSTRUCTURALPOINTCONNECTION, EntityTypesIfc.IFCSTRUCTURALSURFACECONNECTION, EntityTypesIfc.IFCSTRUCTURALCURVEMEMBER, EntityTypesIfc.IFCSTRUCTURALSURFACEMEMBER, EntityTypesIfc.IFCSTRUCTURALCURVEMEMBERVARYING, EntityTypesIfc.IFCSTRUCTURALSURFACEMEMBERVARYING ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCPRODUCT
}

import ModelFormatDetector, { ModelFormatType } from '../format_detection/model_format_detector'
import Logger from '../logging/logger'
import ParsingBuffer from '../parsing/parsing_buffer'
import { Loadersettings } from './ifc_api'
import { IfcApiModelPassthrough } from './ifc_api_model_passthrough'
import { IfcApiProxyIfc } from './ifc_api_proxy_ifc'

/**
 * The factory to construct models.
 */
export class IfcApiModelPassthroughFactory {

  /**
   *
   * @param modelID
   * @param data
   * @param wasmModule
   * @param settings
   * @return {IfcApiModelPassthrough | undefined}
   */
  public static from(
      modelID: number,
      data: Uint8Array,
      wasmModule: any,
      settings?: Loadersettings ): IfcApiModelPassthrough | undefined {

    const modelFormat = ModelFormatDetector.detect( new ParsingBuffer( data ) )

    switch ( modelFormat ) {

      case ModelFormatType.AP214:

        break

      case ModelFormatType.IFC:

        try {

          return new IfcApiProxyIfc(modelID, data, wasmModule, settings)

        } catch ( e ) {

          if ( e instanceof Error ) {

            // eslint-disable-next-line max-len
            Logger.error( `Error loading IFC model in passthrough factory ${modelID}:\n${e.message}\n\n${e.stack}`)
          } else {

            Logger.error( `Unknown error loading IFC model in passthrough factory ${modelID}` )
          }

        }

        break

      default:

        Logger.error( 'No type detected when constructing model')
    }
  }

}

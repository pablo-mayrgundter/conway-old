
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsectionalareaintegralmeasure.htm
type IfcSectionalAreaIntegralMeasure = number;


export const IfcSectionalAreaIntegralMeasureSize = 8;

export function IfcSectionalAreaIntegralMeasureSerializer( value?: IfcSectionalAreaIntegralMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcSectionalAreaIntegralMeasureDeserializer( value?: IfcSectionalAreaIntegralMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcSectionalAreaIntegralMeasure;
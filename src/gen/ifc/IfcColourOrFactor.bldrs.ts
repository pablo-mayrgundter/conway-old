
import IfcColourRgb from "./IfcColourRgb.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccolourorfactor.htm
 */

export default class IfcColourOrFactor
{
    constructor( public readonly value: IfcColourOrFactorVariant ) {}
}

export type IfcColourOrFactorType = 'IfcColourRgb'|'IfcNormalisedRatioMeasure';

export type IfcColourOrFactorChoices = IfcColourRgb|IfcNormalisedRatioMeasure;

export type IfcColourOrFactorVariant = ({ type: 'IfcColourRgb'; value: IfcColourRgb }|{ type: 'IfcNormalisedRatioMeasure'; value: IfcNormalisedRatioMeasure }) & { type: IfcColourOrFactorType; value: IfcColourOrFactorChoices };

export function IfcColourOrFactorSerializer( value?: IfcColourOrFactor, to: SmartBuffer, offset?: number )
{
    switch
    
}

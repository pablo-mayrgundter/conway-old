enum IfcCurrencyEnum {
    AED = 0,
    AES = 1,
    ATS = 2,
    AUD = 3,
    BBD = 4,
    BEG = 5,
    BGL = 6,
    BHD = 7,
    BMD = 8,
    BND = 9,
    BRL = 10,
    BSD = 11,
    BWP = 12,
    BZD = 13,
    CAD = 14,
    CBD = 15,
    CHF = 16,
    CLP = 17,
    CNY = 18,
    CYS = 19,
    CZK = 20,
    DDP = 21,
    DEM = 22,
    DKK = 23,
    EGL = 24,
    EST = 25,
    EUR = 26,
    FAK = 27,
    FIM = 28,
    FJD = 29,
    FKP = 30,
    FRF = 31,
    GBP = 32,
    GIP = 33,
    GMD = 34,
    GRX = 35,
    HKD = 36,
    HUF = 37,
    ICK = 38,
    IDR = 39,
    ILS = 40,
    INR = 41,
    IRP = 42,
    ITL = 43,
    JMD = 44,
    JOD = 45,
    JPY = 46,
    KES = 47,
    KRW = 48,
    KWD = 49,
    KYD = 50,
    LKR = 51,
    LUF = 52,
    MTL = 53,
    MUR = 54,
    MXN = 55,
    MYR = 56,
    NLG = 57,
    NZD = 58,
    OMR = 59,
    PGK = 60,
    PHP = 61,
    PKR = 62,
    PLN = 63,
    PTN = 64,
    QAR = 65,
    RUR = 66,
    SAR = 67,
    SCR = 68,
    SEK = 69,
    SGD = 70,
    SKP = 71,
    THB = 72,
    TRL = 73,
    TTD = 74,
    TWD = 75,
    USD = 76,
    VEB = 77,
    VND = 78,
    XEU = 79,
    ZAR = 80,
    ZWD = 81,
    NOK = 82,
}
export { IfcCurrencyEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcCurrencyEnum = new Int32Array( [-69,3,6,67,1,469,111,45,1,13,84,-41,498,43,444,304,3,27,263,0,1] );

let prefixSumAddressIfcCurrencyEnum = new Uint32Array( [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,175,180,185,190,195,200,205,210,215,220,225,230,235,240,245,250,255,260,265,270,275,280,285,290,295,300,305,310,315,320,325,330,335,340,345,350,355,360,365,370,375,380,385,390,395,400,405,410,415] );

let slotMapIfcCurrencyEnum = new Int32Array( [4,73,7,12,48,16,46,3,35,55,82,28,22,9,52,20,24,61,78,40,63,67,41,62,23,42,33,59,56,64,68,37,36,25,70,6,51,30,71,74,18,44,5,11,65,43,50,53,66,79,15,17,1,58,21,14,45,26,0,80,38,77,76,29,72,19,10,13,34,8,60,2,69,54,49,47,75,31,32,57,27,39,81] );

let encodedDataIfcCurrencyEnum = (new TextEncoder()).encode( ".BBD..TRL..BHD..BWP..KRW..CHF..JPY..AUD..GRX..MXN..NOK..FIM..DEM..BND..LUF..CZK..EGL..PHP..VND..ILS..PLN..SAR..INR..PKR..DKK..IRP..GIP..OMR..MYR..PTN..SCR..HUF..HKD..EST..SGD..BGL..LKR..FKP..SKP..TTD..CNY..JMD..BEG..BSD..QAR..ITL..KYD..MTL..RUR..XEU..CBD..CLP..AES..NZD..DDP..CAD..JOD..EUR..AED..ZAR..ICK..VEB..USD..FJD..THB..CYS..BRL..BZD..GMD..BMD..PGK..ATS..SEK..MUR..KWD..KES..TWD..FRF..GBP..NLG..FAK..IDR..ZWD." );

let IfcCurrencyEnumSearch = new MinimalPerfectHash< IfcCurrencyEnum >( gMapIfcCurrencyEnum, prefixSumAddressIfcCurrencyEnum, slotMapIfcCurrencyEnum, encodedDataIfcCurrencyEnum );

export { IfcCurrencyEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcCurrencyEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcCurrencyEnum | undefined
{
    return parser.extract< IfcCurrencyEnum >( IfcCurrencyEnumSearch, input, cursor, endCursor );
}


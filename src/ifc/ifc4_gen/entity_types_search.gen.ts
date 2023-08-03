/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'
import EntityTypesIfc from './entity_types_ifc.gen'

let gMapEntityTypesIfc =
  new Int32Array( [304,6,12,54,1,2,1,48,462,20,-28,25,3,2,271,24,715,516,2,1008,214,34,156,227,382,7,88,228,44,119,2,138,22,-777,37,172,1,47,4,18,-798,113,1,28,1,303,40,81,41,520,1,13,542,2,91,242,1,119,6,255,242,118,228,-496,4,1,-474,93,-414,205,1,855,15,-372,37,82,-290,31,0,58,299,52,533,-160,4,68,2966,0,26,5,15,0,547,1120,7,759,9,6,547,772,-6,3231,2632,75,64,206,44,3,-254,2,-105,76,23,3,22,73,14,6,1,8,2381,19,44,2,21,7,-76,1065,7,1,26,182,80,107,7,110,61,231,1,10,563,9,694,4541,3,0,78,7,0,5,714,1227,59,2,1,23,-410,15,1,-424,599,57,-427,12,1,23,3,942,17,8,36,13,-741,1246,2,14,239,32,18,2133,2,1,270,144,957,6,9,182,37,1,261,3,13,7,7,452,34,72,1,27,1,104,1663,539,1,22,30,54,1382,241,132,44,3,12,4,11,1,4,53,158,4,151,8,15,22,1] )

let prefixSumAddressEntityTypesIfc =
  new Uint32Array( [0,27,53,60,90,104,125,142,169,185,200,220,253,281,307,331,367,388,411,440,461,482,509,530,555,582,611,635,660,677,695,715,730,751,778,801,824,836,845,864,878,898,921,946,978,993,1008,1027,1041,1073,1088,1114,1138,1161,1176,1195,1236,1251,1268,1280,1301,1314,1330,1356,1377,1390,1404,1416,1428,1443,1459,1487,1514,1540,1568,1590,1615,1649,1661,1681,1690,1712,1719,1737,1758,1772,1787,1809,1848,1864,1889,1912,1932,1952,1981,2011,2028,2042,2068,2092,2106,2116,2144,2180,2199,2208,2236,2254,2274,2289,2309,2329,2351,2364,2390,2406,2441,2465,2478,2492,2507,2516,2527,2536,2555,2571,2587,2600,2624,2646,2667,2691,2723,2744,2756,2784,2807,2820,2826,2841,2856,2873,2899,2913,2928,2958,2980,3007,3031,3051,3080,3110,3131,3143,3157,3187,3203,3219,3237,3252,3262,3280,3302,3313,3336,3371,3389,3406,3429,3448,3470,3499,3519,3534,3552,3563,3577,3586,3606,3631,3649,3662,3694,3708,3729,3753,3767,3795,3818,3833,3854,3883,3908,3925,3955,3963,3986,4008,4025,4039,4057,4083,4095,4104,4121,4167,4187,4207,4231,4255,4271,4297,4330,4347,4366,4394,4422,4436,4461,4477,4499,4524,4536,4565,4588,4596,4615,4639,4646,4675,4697,4722,4738,4761,4786,4803,4828,4839,4858,4872,4886,4903,4924,4951,4982,4995,5018,5038,5061,5090,5111,5128,5158,5186,5209,5220,5234,5252,5261,5272,5297,5330,5353,5366,5380,5391,5408,5418,5433,5448,5462,5483,5502,5511,5533,5548,5562,5575,5602,5629,5659,5670,5692,5714,5731,5742,5753,5767,5791,5818,5833,5847,5862,5892,5908,5934,5955,5980,6000,6046,6066,6099,6116,6134,6156,6175,6200,6224,6248,6270,6277,6294,6321,6342,6356,6382,6401,6425,6455,6475,6504,6512,6529,6558,6580,6600,6617,6650,6674,6687,6710,6731,6743,6754,6787,6811,6820,6856,6864,6876,6894,6906,6916,6934,6949,6966,6995,7015,7029,7055,7067,7093,7116,7142,7164,7199,7212,7220,7236,7255,7275,7307,7324,7345,7358,7388,7403,7413,7447,7463,7477,7489,7515,7542,7554,7566,7585,7604,7614,7647,7673,7691,7701,7716,7726,7744,7762,7781,7794,7812,7828,7851,7867,7895,7918,7940,7957,7981,8010,8026,8037,8045,8071,8098,8127,8138,8167,8189,8197,8224,8246,8262,8283,8303,8327,8335,8354,8378,8388,8398,8419,8436,8464,8484,8508,8515,8532,8539,8560,8572,8587,8594,8610,8643,8675,8694,8702,8716,8735,8754,8783,8792,8805,8831,8844,8863,8875,8888,8912,8943,8952,8976,8984,9006,9026,9058,9085,9104,9111,9123,9147,9174,9188,9203,9225,9251,9270,9280,9309,9339,9357,9371,9401,9411,9423,9443,9461,9472,9487,9502,9513,9545,9570,9593,9606,9617,9639,9656,9680,9698,9719,9735,9755,9786,9806,9822,9839,9856,9873,9890,9911,9929,9943,9956,9975,10000,10007,10024,10047,10067,10074,10085,10092,10100,10122,10139,10154,10170,10215,10231,10253,10272,10297,10321,10341,10353,10365,10377,10404,10415,10430,10456,10481,10498,10527,10539,10556,10575,10597,10621,10647,10676,10701,10723,10747,10766,10787,10804,10832,10863,10893,10923,10960,10967,10987,11006,11020,11046,11063,11094,11105,11140,11168,11195,11211,11232,11257,11275,11305,11318,11337,11349,11370,11386,11408,11428,11438,11474,11494,11513,11526,11547,11561,11589,11621,11643,11654,11676,11695,11715,11739,11756,11775,11793,11818,11846,11857,11877,11891,11899,11917,11942,11960,11979,12005,12014,12042,12051,12058,12085,12105,12125,12159,12184,12205,12229,12253,12275,12294,12326,12333,12354,12376,12386,12401,12424,12445,12465,12473,12491,12508,12518,12553,12571,12595,12602,12611,12621,12641,12653,12689,12720,12738,12770,12795,12808,12842,12863,12878,12907,12930,12943,12956,12970,12997,13018,13038,13053,13081,13098,13118,13129,13155,13176,13197,13223,13241,13248,13273,13292,13304,13328,13356,13378,13401,13428,13450,13463,13486,13496,13534,13551,13558,13567,13592,13603,13639,13659,13687,13721,13743,13758,13784,13806,13830,13846,13872,13891,13902,13916,13925,13953,13983,13996,14014,14022,14030,14047,14071,14092,14126,14142,14149,14164,14177,14193,14200,14217,14235,14261,14282,14304,14318,14329,14357,14375,14420,14439,14446,14453,14467,14483,14513,14534,14543,14569,14593,14614,14633,14644,14659,14678,14706,14727,14751,14765,14788,14808,14819,14841,14860,14884,14913,14930,14949,14976,15002,15016,15033,15048,15060,15073,15087,15107,15116,15142,15164,15187,15201,15210,15225,15236,15253,15275,15285,15298,15313,15338,15359,15372,15395,15406,15426,15438,15451,15474,15498,15519,15539,15547,15560,15578,15598,15618,15650,15676,15702,15711,15745,15762,15782,15811,15836,15850,15875,15886,15901,15923,15940,15959,15981,16007,16019,16028,16048,16055,16070,16087,16115,16137,16147,16155,16168,16185,16194,16209,16220,16239,16250,16265,16284,16296,16311,16326,16345,16369,16390,16409,16422,16445,16452,16469,16486,16504,16528,16561,16585,16599,16634,16660,16671,16708,16733,16757,16780,16806,16837,16866,16888,16902,16924,16949,16983,17002,17021,17036,17047,17054,17085,17104,17120,17143,17166,17184,17203,17226,17255,17280,17302,17323,17336,17364,17375,17389,17405,17429,17447,17463,17476,17496,17503,17531,17550,17575,17593,17600,17619,17649,17662,17679,17696,17718,17746,17761,17785,17805,17840,17867] )

let slotMapEntityTypesIfc =
  new Int32Array( [779,770,886,228,367,435,429,852,231,362,345,885,341,438,761,170,518,124,884,22,857,538,297,787,685,872,369,178,12,451,473,13,818,836,422,242,448,102,122,175,704,46,724,222,863,331,442,449,424,812,596,664,40,59,66,844,249,20,709,718,689,11,753,214,251,17,134,441,335,900,904,891,565,408,530,625,544,899,642,107,643,561,666,580,95,57,69,835,271,519,592,185,276,517,196,570,250,213,434,769,820,736,171,258,273,216,665,858,128,619,851,314,550,50,260,846,340,383,322,262,492,527,766,55,887,650,437,799,760,194,871,344,712,397,806,842,763,425,553,245,298,719,145,274,881,875,513,715,348,627,295,401,289,455,675,82,192,373,482,120,546,309,133,683,227,765,707,906,463,390,323,771,568,155,698,621,119,876,531,850,75,60,157,34,310,756,721,545,180,632,837,363,277,35,755,720,622,389,18,796,199,54,149,413,173,644,235,500,14,479,744,483,21,468,501,824,131,27,903,816,682,629,802,168,177,705,654,113,804,552,731,77,207,805,73,877,233,324,767,711,488,782,735,874,512,471,374,671,847,285,768,562,306,269,6,286,391,282,781,702,9,505,690,36,759,729,785,548,16,126,402,560,300,156,868,327,127,217,278,895,3,511,92,164,88,244,841,291,750,791,450,19,406,378,195,493,780,284,172,353,617,572,633,152,161,478,725,485,777,703,854,894,246,329,99,181,76,706,509,584,165,610,423,191,630,578,663,589,268,51,615,399,697,586,590,74,484,708,603,472,190,106,452,503,63,762,78,898,158,208,184,583,801,203,674,204,825,598,332,883,661,387,535,811,723,162,238,896,433,475,243,84,595,38,605,772,179,94,746,215,159,239,89,210,366,679,814,379,380,640,880,461,93,862,778,432,368,29,569,98,90,653,902,292,454,892,349,608,52,404,639,681,691,716,48,533,58,833,101,547,631,626,878,279,105,252,333,732,828,541,494,347,693,254,187,47,382,559,317,749,462,144,307,688,566,477,526,521,43,784,564,109,447,403,410,696,56,457,142,873,659,104,635,296,62,882,110,843,600,197,135,652,515,31,430,859,143,694,901,103,325,743,446,817,267,326,61,418,864,166,788,758,440,576,606,420,71,398,136,263,328,381,680,384,593,417,431,734,316,793,138,115,116,121,146,775,465,845,532,357,372,588,651,339,809,211,699,686,358,460,45,567,393,870,221,256,637,834,832,311,7,848,636,301,409,609,573,733,85,710,662,893,551,628,234,657,728,96,726,68,740,879,415,0,303,520,351,218,377,792,498,890,466,840,91,426,823,354,504,150,582,486,739,506,302,39,645,151,361,365,53,776,497,905,508,757,695,670,395,330,831,67,87,236,549,741,176,338,28,308,507,669,807,624,81,516,556,205,212,607,829,701,336,237,223,359,281,72,456,147,174,737,392,668,754,563,396,481,419,224,299,476,342,364,641,315,591,37,542,100,764,275,421,554,797,290,786,343,888,388,337,154,287,280,540,24,270,667,660,334,860,745,499,614,125,646,112,318,10,202,416,459,634,853,189,587,264,649,169,253,257,543,838,346,209,742,502,800,464,266,861,604,525,141,371,2,206,803,597,64,827,118,8,44,496,897,356,522,123,23,613,491,677,261,490,738,241,65,111,70,445,730,528,247,717,537,405,514,524,748,684,722,773,319,700,655,474,137,594,795,752,616,240,25,225,790,153,182,577,575,826,676,599,220,293,183,26,783,436,248,130,612,830,33,305,160,411,839,638,394,458,469,321,255,370,656,83,585,444,470,534,376,819,407,350,822,4,412,798,139,49,849,186,620,774,230,623,352,727,751,673,5,148,414,108,889,86,789,658,1,30,32,523,375,574,467,672,140,648,200,855,571,487,355,79,360,714,283,288,313,856,687,443,539,294,80,810,304,618,198,529,489,265,647,821,692,480,320,400,259,427,229,163,579,602,495,869,226,813,808,867,747,713,557,167,601,815,558,678,385,42,794,117,114,386,865,272,219,15,453,428,193,611,129,188,312,439,132,97,581,232,41,555,201,510,536,866] )

let encodedDataEntityTypesIfc =
  (new TextEncoder()).encode( "IFCAMOUNTOFSUBSTANCEMEASUREIFCVIRTUALGRIDINTERSECTIONIFCTEXTIFCCONSTRUCTIONPRODUCTRESOURCEIFCQUANTITYSETIFCFILLAREASTYLETILESIFCSURFACEFEATUREIFCNONNEGATIVELENGTHMEASUREIFCLABORRESOURCEIFCFASTENERTYPEIFCELECTRICGENERATORIFCTEMPERATURERATEOFCHANGEMEASUREIFCELECTRICDISTRIBUTIONBOARDIFCFIRESUPPRESSIONTERMINALIFCTEXTLITERALWITHEXTENTIFCCARTESIANTRANSFORMATIONOPERATOR2DIFCLIGHTSOURCEAMBIENTIFCELEMENTCOMPONENTTYPEIFCTEMPERATUREGRADIENTMEASUREIFCAIRTERMINALBOXTYPEIFCPLANARFORCEMEASUREIFCMATERIALLAYERWITHOFFSETSIFCDISTRIBUTIONSYSTEMIFCCARDINALPOINTREFERENCEIFCRELSPACEBOUNDARY1STLEVELIFCROTATIONALSTIFFNESSMEASUREIFCGEOGRAPHICELEMENTTYPEIFCCIRCLEHOLLOWPROFILEDEFIFCTELECOMADDRESSIFCJUNCTIONBOXTYPEIFCSTACKTERMINALTYPEIFCADVANCEDBREPIFCILLUMINANCEMEASUREIFCLUMINOUSINTENSITYMEASUREIFCFACETEDBREPWITHVOIDSIFCCONTEXTDEPENDENTUNITIFCVALVETYPEIFCCOLUMNIFCELEMENTCOMPONENTIFCCHILLERTYPEIFCSLABELEMENTEDCASEIFCCENTERLINEPROFILEDEFIFCSTRUCTURALLINEARACTIONIFCCONSTRUCTIONEQUIPMENTRESOURCEIFCPOWERMEASUREIFCDUCTSILENCERIFCPROTECTIVEDEVICEIFCJUNCTIONBOXIFCSTRUCTURALCONNECTIONCONDITIONIFCFORCEMEASUREIFCTEXTSTYLEFORDEFINEDFONTIFCRELCOVERSBLDGELEMENTSIFCAPPROVALRELATIONSHIPIFCBOUNDEDCURVEIFCBEAMSTANDARDCASEIFCMODULUSOFLINEARSUBGRADEREACTIONMEASUREIFCWORKCALENDARIFCAIRTERMINALBOXIFCSPACETYPEIFCSTRUCTURALREACTIONIFCSTYLEMODELIFCPOSTALADDRESSIFCSWEPTDISKSOLIDPOLYGONALIFCCONNECTIONGEOMETRYIFCCONTROLLERIFCFACESURFACEIFCPLATETYPEIFCFLOWMETERIFCORIENTEDEDGEIFCTORQUEMEASUREIFCVOLUMETRICFLOWRATEMEASUREIFCTHERMALADMITTANCEMEASUREIFCPHYSICALCOMPLEXQUANTITYIFCEXTERNALLYDEFINEDTEXTFONTIFCMATERIALCONSTITUENTIFCSIMPLEPROPERTYTEMPLATEIFCMATERIALPROFILESETUSAGETAPERINGIFCTIMESTAMPIFCRELASSIGNSTOACTORIFCMEMBERIFCRELASSIGNSTOCONTROLIFCPATHIFCRELFILLSELEMENTIFCTESSELLATEDFACESETIFCBOUNDINGBOXIFCBSPLINECURVEIFCBUILDINGELEMENTTYPEIFCLUMINOUSINTENSITYDISTRIBUTIONMEASUREIFCOFFSETCURVE2DIFCLIGHTSOURCEDIRECTIONALIFCSURFACESTYLELIGHTINGIFCEXTERNALREFERENCEIFCPRESENTATIONSTYLEIFCLIGHTINTENSITYDISTRIBUTIONIFCCOMMUNICATIONSAPPLIANCETYPEIFCQUANTITYLENGTHIFCWORKCONTROLIFCCONNECTIONCURVEGEOMETRYIFCFILLAREASTYLEHATCHINGIFCVERTEXPOINTIFCINTEGERIFCSTRUCTURALLOADPLANARFORCEIFCCARTESIANTRANSFORMATIONOPERATOR3DIFCCOOLINGTOWERTYPEIFCPCURVEIFCCONNECTIONSURFACEGEOMETRYIFCRELCOVERSSPACESIFCPLANEANGLEMEASUREIFCCOVERINGTYPEIFCPROPERTYLISTVALUEIFCMONTHINYEARNUMBERIFCDOCUMENTINFORMATIONIFCTYPEOBJECTIFCPARAMETERIZEDPROFILEDEFIFCMAPCONVERSIONIFCMODULUSOFSUBGRADEREACTIONMEASUREIFCELECTRICAPPLIANCETYPEIFCTUBEBUNDLEIFCTYPEPRODUCTIFCPROJECTEDCRSIFCVECTORIFCMATERIALIFCVERTEXIFCAXIS2PLACEMENT2DIFCTEXTALIGNMENTIFCRELASSOCIATESIFCFILTERTYPEIFCDOSEEQUIVALENTMEASUREIFCTRIANGULATEDFACESETIFCCOLUMNSTANDARDCASEIFCROTATIONALMASSMEASUREIFCELECTRICFLOWSTORAGEDEVICETYPEIFCSPATIALELEMENTTYPEIFCEVENTTIMEIFCELECTRICRESISTANCEMEASUREIFCMASSPERLENGTHMEASUREIFCTEXTUREMAPIFCFANIFCORGANIZATIONIFCCOSTSCHEDULEIFCFLOWINSTRUMENTIFCSTRUCTURALANALYSISMODELIFCELEMENTTYPEIFCSURFACECURVEIFCSPECIFICHEATCAPACITYMEASUREIFCSHEARMODULUSMEASUREIFCIRREGULARTIMESERIESVALUEIFCSTRUCTURALCURVEACTIONIFCELECTRICMOTORTYPEIFCROUNDEDRECTANGLEPROFILEDEFIFCDISTRIBUTIONFLOWELEMENTTYPEIFCEXTENDEDPROPERTIESIFCDIRECTIONIFCPIPESEGMENTIFCRELCONNECTSWITHECCENTRICITYIFCBOUNDARYCURVEIFCCOLOURRGBLISTIFCTOROIDALSURFACEIFCGEOMETRICSETIFCELEMENTIFCMEASUREWITHUNITIFCFLOWTREATMENTDEVICEIFCPILETYPEIFCRELDEFINESBYTEMPLATEIFCCONSTRUCTIONMATERIALRESOURCETYPEIFCTIMESERIESVALUEIFCSWEPTDISKSOLIDIFCWARPINGMOMENTMEASUREIFCSANITARYTERMINALIFCMOTORCONNECTIONTYPEIFCDRAUGHTINGPREDEFINEDCOLOURIFCWALLELEMENTEDCASEIFCQUANTITYAREAIFCFLOWFITTINGTYPEIFCWORKTIMEIFCPROPERTYSETIFCWINDOWIFCSOLIDANGLEMEASUREIFCMATERIALCONSTITUENTSETIFCMONETARYMEASUREIFCBOILERTYPEIFCRATIONALBSPLINECURVEWITHKNOTSIFCFLOWSEGMENTIFCANNOTATIONFILLAREAIFCFLOWSTORAGEDEVICETYPEIFCTABLECOLUMNIFCSTRUCTURALCURVECONNECTIONIFCMATERIALRELATIONSHIPIFCCIVILELEMENTIFCREINFORCINGBARTYPEIFCMAGNETICFLUXDENSITYMEASUREIFCMECHANICALFASTENERTYPEIFCCURVESTYLEFONTIFCGEOMETRICREPRESENTATIONITEMIFCTABLEIFCSTRUCTURALCONNECTIONIFCPROPERTYSETTEMPLATEIFCHUMIDIFIERTYPEIFCAIRTERMINALIFCDAYINWEEKNUMBERIFCCOMPLEXPROPERTYTEMPLATEIFCPLACEMENTIFCBURNERIFCSPATIALELEMENTIFCCARTESIANTRANSFORMATIONOPERATOR3DNONUNIFORMIFCRELASSIGNSTOGROUPIFCLABORRESOURCETYPEIFCSTRUCTURALRESULTGROUPIFCADVANCEDBREPWITHVOIDSIFCFURNITURETYPEIFCSTRUCTURALPOINTREACTIONIFCGEOMETRICREPRESENTATIONCONTEXTIFCFLOWCONTROLLERIFCLIGHTFIXTURETYPEIFCPOLYGONALBOUNDEDHALFSPACEIFCKINEMATICVISCOSITYMEASUREIFCFOOTINGTYPEIFCENERGYCONVERSIONDEVICEIFCVOLUMEMEASUREIFCHEATINGVALUEMEASUREIFCRELDEFINESBYPROPERTIESIFCREFERENCEIFCELECTRICCAPACITANCEMEASUREIFCCARTESIANPOINTLIST3DIFCCONICIFCSLABSTANDARDCASEIFCRELASSOCIATESDOCUMENTIFCROOFIFCELECTRICCONDUCTANCEMEASUREIFCOPENINGSTANDARDCASEIFCSTRUCTURALLOADORRESULTIFCBOOLEANRESULTIFCFLOWMOVINGDEVICETYPEIFCELECTRICCURRENTMEASUREIFCCSGPRIMITIVE3DIFCSOUNDPOWERLEVELMEASUREIFCRESOURCEIFCPREDEFINEDCOLOURIFCWINDOWSTYLEIFCSPATIALZONEIFCSECTIONEDSPINEIFCAREADENSITYMEASUREIFCSURFACEREINFORCEMENTAREAIFCSECTIONALAREAINTEGRALMEASUREIFCTIMESERIESIFCSANITARYTERMINALTYPEIFCELLIPSEPROFILEDEFIFCRELSERVICESBUILDINGSIFCMOISTUREDIFFUSIVITYMEASUREIFCMIRROREDPROFILEDEFIFCUNITASSIGNMENTIFCPERMEABLECOVERINGPROPERTIESIFCUNITARYCONTROLELEMENTTYPEIFCCURRENCYRELATIONSHIPIFCACTUATORIFCDERIVEDUNITIFCSOLARDEVICETYPEIFCDAMPERIFCARCINDEXIFCTOPOLOGYREPRESENTATIONIFCDISTRIBUTIONCONTROLELEMENTTYPEIFCINDEXEDPOLYGONALFACEIFCSTYLEDITEMIFCAPPLICATIONIFCTASKTYPEIFCSTRUCTURALLOADIFCBOOLEANIFCMONETARYUNITIFCADVANCEDFACEIFCCHIMNEYTYPEIFCMATERIALPROPERTIESIFCZSHAPEPROFILEDEFIFCSENSORIFCCABLECARRIERSEGMENTIFCRATIOMEASUREIFCDUCTFITTINGIFCCOLUMNTYPEIFCCONNECTIONVOLUMEGEOMETRYIFCCURVESTYLEFONTANDSCALINGIFCTHERMALTRANSMITTANCEMEASUREIFCOCCUPANTIFCIRREGULARTIMESERIESIFCCURVEBOUNDEDSURFACEIFCCARTESIANPOINTIFCPOLYLINEIFCCOSTITEMIFCMASSMEASUREIFCDISCRETEACCESSORYTYPEIFCSURFACEOFLINEAREXTRUSIONIFCCOUNTMEASUREIFCPIPEFITTINGIFCFLOWTERMINALIFCEXTERNALLYDEFINEDHATCHSTYLEIFCHEATEXCHANGERIFCCOMMUNICATIONSAPPLIANCEIFCREPRESENTATIONITEMIFCANGULARVELOCITYMEASUREIFCDERIVEDPROFILEDEFIFCCARTESIANTRANSFORMATIONOPERATOR2DNONUNIFORMIFCFURNISHINGELEMENTIFCPROPERTYDEPENDENCYRELATIONSHIPIFCQUANTITYVOLUMEIFCREINFORCINGMESHIFCCABLECARRIERFITTINGIFCCABLEFITTINGTYPEIFCSYSTEMFURNITUREELEMENTIFCSTRUCTURALCURVEMEMBERIFCREPRESENTATIONCONTEXTIFCABSORBEDDOSEMEASUREIFCSITEIFCNUMERICMEASUREIFCTHERMALRESISTANCEMEASUREIFCPERFORMANCEHISTORYIFCDUCTSEGMENTIFCSPATIALSTRUCTUREELEMENTIFCCIVILELEMENTTYPEIFCBOOLEANCLIPPINGRESULTIFCSLIPPAGECONNECTIONCONDITIONIFCTEXTURECOORDINATEIFCREINFORCEMENTBARPROPERTIESIFCPOINTIFCSTRUCTURALITEMIFCFAILURECONNECTIONCONDITIONIFCCOLOURSPECIFICATIONIFCREGULARTIMESERIESIFCPOINTONSURFACEIFCRELCONTAINEDINSPATIALSTRUCTUREIFCWINDOWPANELPROPERTIESIFCSOLIDMODELIFCAUDIOVISUALAPPLIANCEIFCPROPERTYDEFINITIONIFCEVENTTYPEIFCTASKTIMEIFCSECTIONREINFORCEMENTPROPERTIESIFCPROPERTYSETDEFINITIONIFCBOILERIFCGEOMETRICREPRESENTATIONSUBCONTEXTIFCSPACEIFCTEXTSTYLEIFCSPACEHEATERTYPEIFCCOLOURRGBIFCFOOTINGIFCPIPEFITTINGTYPEIFCIMAGETEXTUREIFCBOUNDEDSURFACEIFCTEXTURECOORDINATEGENERATORIFCBOUNDARYCONDITIONIFCTIMEMEASUREIFCCABLECARRIERSEGMENTTYPEIFCCONDENSERIFCCLASSIFICATIONREFERENCEIFCPREDEFINEDPROPERTIESIFCDYNAMICVISCOSITYMEASUREIFCCOMPOSITEPROFILEDEFIFCRELCONNECTSWITHREALIZINGELEMENTSIFCCOMPRESSORIFCLABELIFCTEXTUREVERTEXIFCDUCTSILENCERTYPEIFCSPECULARROUGHNESSIFCRELCONNECTSSTRUCTURALACTIVITYIFCEVAPORATORTYPEIFCMATERIALPROFILESETIFCFONTWEIGHTIFCSTRUCTURALSURFACECONNECTIONIFCCABLESEGMENTIFCCONTEXTIFCTHERMODYNAMICTEMPERATUREMEASUREIFCFILLAREASTYLEIFCINTERCEPTORIFCNAMEDUNITIFCCOMPOSITECURVEONSURFACEIFCSURFACESTYLEWITHTEXTURESIFCCOSTVALUEIFCPROCEDUREIFCWALLSTANDARDCASEIFCCIRCLEPROFILEDEFIFCSURFACEIFCSTRUCTURALSURFACEMEMBERVARYINGIFCCONNECTIONPOINTGEOMETRYIFCFLOWSEGMENTTYPEIFCPROJECTIFCTRIMMEDCURVEIFCELLIPSEIFCELEMENTQUANTITYIFCRELVOIDSELEMENTIFCGLOBALLYUNIQUEIDIFCHUMIDIFIERIFCMOTORCONNECTIONIFCRELDECOMPOSESIFCSOUNDPRESSUREMEASUREIFCMEDICALDEVICEIFCRECTANGULARTRIMMEDSURFACEIFCPOSITIVERATIOMEASUREIFCACCELERATIONMEASUREIFCVOIDINGFEATUREIFCFURNISHINGELEMENTTYPEIFCENERGYCONVERSIONDEVICETYPEIFCQUANTITYCOUNTIFCBUILDINGIFCCURVEIFCRELASSOCIATESCONSTRAINTIFCVAPORPERMEABILITYMEASUREIFCDISTRIBUTIONCHAMBERELEMENTIFCPUMPTYPEIFCTHERMALCONDUCTIVITYMEASUREIFCELECTRICTIMECONTROLIFCPROXYIFCAUDIOVISUALAPPLIANCETYPEIFCPROPERTYABSTRACTIONIFCRELAGGREGATESIFCRELDEFINESBYOBJECTIFCREPRESENTATIONMAPIFCSTRUCTURALPOINTACTIONIFCGROUPIFCMATERIALLAYERSETIFCBSPLINECURVEWITHKNOTSIFCLOGICALIFCCHIMNEYIFCMEMBERSTANDARDCASEIFCREINFORCINGBARIFCRECTANGLEHOLLOWPROFILEDEFIFCSOUNDPOWERMEASUREIFCCURVESTYLEFONTPATTERNIFCDOORIFCCONTROLLERTYPEIFCEDGEIFCSTRUCTURALLOADCASEIFCLINEINDEXIFCMATERIALLISTIFCGRIDIFCELECTRICMOTORIFCRESOURCECONSTRAINTRELATIONSHIPIFCCONVERSIONBASEDUNITWITHOFFSETIFCCONNECTEDFACESETIFCASSETIFCTRANSFORMERIFCUSHAPEPROFILEDEFIFCDOORSTANDARDCASEIFCSURFACECURVESWEPTAREASOLIDIFCOUTLETIFCWINDOWTYPEIFCDISTRIBUTIONELEMENTTYPEIFCSHAPEMODELIFCPHYSICALQUANTITYIFCFURNITUREIFCMAPPEDITEMIFCLIGHTSOURCEPOSITIONALIFCARBITRARYPROFILEDEFWITHVOIDSIFCBINARYIFCPERSONANDORGANIZATIONIFCPLATEIFCSWITCHINGDEVICETYPEIFCPROFILEPROPERTIESIFCEXTERNALREFERENCERELATIONSHIPIFCREVOLVEDAREASOLIDTAPEREDIFCAXIS2PLACEMENT3DIFCTANKIFCSTAIRTYPEIFCSECTIONMODULUSMEASUREIFCRELCONNECTSPORTTOELEMENTIFCCURTAINWALLIFCTENDONANCHORIFCDISTRIBUTIONCIRCUITIFCBSPLINESURFACEWITHKNOTSIFCSPECULAREXPONENTIFCRAILINGIFCMODULUSOFELASTICITYMEASUREIFCPRESENTATIONLAYERASSIGNMENTIFCCOMPLEXPROPERTYIFCRAILINGTYPEIFCRELASSOCIATESCLASSIFICATIONIFCLAGTIMEIFCALARMTYPEIFCPROJECTIONELEMENTIFCPOSITIVEINTEGERIFCWALLTYPEIFCRESOURCETIMEIFCURIREFERENCEIFCCOVERINGIFCDRAUGHTINGPREDEFINEDCURVEFONTIFCSTRUCTURALPLANARACTIONIFCPROTECTIVEDEVICETYPEIFCIDENTIFIERIFCCSGSOLIDIFCPREDEFINEDCURVEFONTIFCBSPLINESURFACEIFCFACEBASEDSURFACEMODELIFCPRESENTABLETEXTIFCCARTESIANPOINTLISTIFCCOMPLEXNUMBERIFCTASKTIMERECURRINGIFCFIXEDREFERENCESWEPTAREASOLIDIFCPLATESTANDARDCASEIFCPROCEDURETYPEIFCFACEOUTERBOUNDIFCSURFACETEXTUREIFCSCHEDULINGTIMEIFCRAMPFLIGHTTYPEIFCRECTANGULARPYRAMIDIFCDUCTFITTINGTYPEIFCSOLARDEVICEIFCRELDEFINESIFCUNITARYEQUIPMENTIFCSURFACESTYLEREFRACTIONIFCFACEIFCOPENINGELEMENTIFCSTRUCTURALLOADSTATICIFCDOCUMENTREFERENCEIFCDATEIFCROOFTYPEIFCSLABIFCSTAIRIFCBUILDINGELEMENTPARTIFCBUILDINGSTOREYIFCWORKSCHEDULEIFCSTACKTERMINALIFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASUREIFCMATERIALLAYERIFCELEMENTASSEMBLYTYPEIFCSPHERICALSURFACEIFCWINDOWLININGPROPERTIESIFCRELASSOCIATESAPPROVALIFCELECTRICAPPLIANCEIFCFONTSTYLEIFCOPENSHELLIFCSEAMCURVEIFCRELSPACEBOUNDARY2NDLEVELIFCFASTENERIFCLIGHTFIXTUREIFCARBITRARYOPENPROFILEDEFIFCPHYSICALSIMPLEQUANTITYIFCTUBEBUNDLETYPEIFCROTATIONALFREQUENCYMEASUREIFCOBJECTIVEIFCCOOLEDBEAMTYPEIFCTENDONANCHORTYPEIFCLUMINOUSFLUXMEASUREIFCLINEARVELOCITYMEASUREIFCFLOWTREATMENTDEVICETYPEIFCDISTRIBUTIONCONTROLELEMENTIFCMOLECULARWEIGHTMEASUREIFCREINFORCINGMESHTYPEIFCUNITARYCONTROLELEMENTIFCLIBRARYREFERENCEIFCSTRUCTURALACTIVITYIFCQUANTITYWEIGHTIFCSTRUCTURALLOADLINEARFORCEIFCBOUNDARYNODECONDITIONWARPINGIFCSPATIALSTRUCTUREELEMENTTYPEIFCRELCONNECTSSTRUCTURALMEMBERIFCTHERMALEXPANSIONCOEFFICIENTMEASUREIFCROOTIFCRECURRENCEPATTERNIFCCREWRESOURCETYPEIFCRELCONNECTSIFCSTRUCTURALCURVEREACTIONIFCBOXEDHALFSPACEIFCSTRUCTURALCURVEMEMBERVARYINGIFCBEAMTYPEIFCSTRUCTURALLOADSINGLEFORCEWARPINGIFCSOUNDPRESSURELEVELMEASUREIFCEXTRUDEDAREASOLIDTAPEREDIFCACTIONREQUESTIFCFLOWINSTRUMENTTYPEIFCLIGHTSOURCEGONIOMETRICIFCELEMENTASSEMBLYIFCCONNECTIONPOINTECCENTRICITYIFCEVAPORATORIFCCURVATUREMEASUREIFCINVENTORYIFCTEXTTRANSFORMATIONIFCWASTETERMINALIFCMASSFLOWRATEMEASUREIFCCURVEBOUNDEDPLANEIFCFANTYPEIFCISOTHERMALMOISTURECAPACITYMEASUREIFCGEOGRAPHICELEMENTIFCINDEXEDCOLOURMAPIFCBURNERTYPEIFCPREDEFINEDTEXTFONTIFCLIGHTSOURCEIFCSTRUCTURALLOADSINGLEFORCEIFCINDEXEDPOLYGONALFACEWITHVOIDSIFCDISTRIBUTIONELEMENTIFCAPPROVALIFCRELASSIGNSTOPROCESSIFCCSHAPEPROFILEDEFIFCVIBRATIONISOLATORIFCVIBRATIONISOLATORTYPEIFCAXIS1PLACEMENTIFCSTRIPPEDOPTIONALIFCOBJECTPLACEMENTIFCWARPINGCONSTANTMEASUREIFCINDEXEDTRIANGLETEXTUREMAPIFCTABLEROWIFCREVOLVEDAREASOLIDIFCRELSEQUENCEIFCEVENTIFCDUCTSEGMENTTYPEIFCLINEARSTIFFNESSMEASUREIFCBUILDINGELEMENTIFCINDEXEDPOLYCURVEIFCSUBCONTRACTRESOURCETYPEIFCSIUNITIFCSTRUCTURALLOADTEMPERATUREIFCCIRCLEIFCLOOPIFCAIRTOAIRHEATRECOVERYTYPEIFCFLOWSTORAGEDEVICEIFCINDEXEDTEXTUREMAPIFCRELREFERENCEDINSPATIALSTRUCTUREIFCELECTRICVOLTAGEMEASUREIFCPROPERTYTABLEVALUEIFCBOUNDARYNODECONDITIONIFCLIGHTDISTRIBUTIONDATAIFCRECTANGLEPROFILEDEFIFCFLOWMOVINGDEVICEIFCTOPOLOGICALREPRESENTATIONITEMIFCTASKIFCLINEARFORCEMEASUREIFCSHAPEREPRESENTATIONIFCSUBEDGEIFCTYPERESOURCEIFCCONSTRUCTIONRESOURCEIFCMECHANICALFASTENERIFCELEMENTARYSURFACEIFCBLOCKIFCPIPESEGMENTTYPEIFCBUILDINGSYSTEMIFCCHILLERIFCSTRUCTURALLOADSINGLEDISPLACEMENTIFCTRANSFORMERTYPEIFCRELINTERFERESELEMENTSIFCZONEIFCPERSONIFCPROCESSIFCGEOMETRICCURVESETIFCFACEBOUNDIFCCONSTRUCTIONEQUIPMENTRESOURCETYPEIFCPROTECTIVEDEVICETRIPPINGUNITIFCINTERCEPTORTYPEIFCELECTRICDISTRIBUTIONBOARDTYPEIFCREINFORCINGELEMENTTYPEIFCRELASSIGNSIFCDOCUMENTINFORMATIONRELATIONSHIPIFCTEXTSTYLEFONTMODELIFCAPPLIEDVALUEIFCMATERIALPROFILEWITHOFFSETSIFCBUILDINGELEMENTPROXYIFCTIMEPERIODIFCCURVESTYLEIFCFACETEDBREPIFCORGANIZATIONRELATIONSHIPIFCDESCRIPTIVEMEASUREIFCDISCRETEACCESSORYIFCBOXALIGNMENTIFCELECTRICFLOWSTORAGEDEVICEIFCTEXTDECORATIONIFCHEATEXCHANGERTYPEIFCEDGELOOPIFCCABLECARRIERFITTINGTYPEIFCDERIVEDUNITELEMENTIFCCYLINDRICALSURFACEIFCMATERIALUSAGEDEFINITIONIFCAIRTERMINALTYPEIFCLINEIFCRELFLOWCONTROLELEMENTSIFCRELCONNECTSPORTSIFCEDGECURVEIFCPOSITIVELENGTHMEASUREIFCSTRUCTURALSURFACEREACTIONIFCSTRUCTURALLOADGROUPIFCPROPERTYBOUNDEDVALUEIFCBUILDINGELEMENTPROXYTYPEIFCRELASSIGNSTOPRODUCTIFCRAMPFLIGHTIFCDOORLININGPROPERTIESIFCADDRESSIFCREPARAMETRISEDCOMPOSITECURVESEGMENTIFCSWEPTAREASOLIDIFCLAMPIFCTENDONIFCNORMALISEDRATIOMEASUREIFCCOILTYPEIFCREINFORCEMENTDEFINITIONPROPERTIESIFCRIGHTCIRCULARCONEIFCRELASSIGNSTOGROUPBYFACTORIFCCARTESIANTRANSFORMATIONOPERATORIFCCONVERSIONBASEDUNITIFCCOOLINGTOWERIFCMATERIALPROFILESETUSAGEIFCMAGNETICFLUXMEASUREIFCELECTRICGENERATORTYPEIFCCONDENSERTYPEIFCSTRUCTURALSURFACEMEMBERIFCISHAPEPROFILEDEFIFCDURATIONIFCSPACEHEATERIFCSPHEREIFCPOSITIVEPLANEANGLEMEASUREIFCPRESENTATIONSTYLEASSIGNMENTIFCVERTEXLOOPIFCSTAIRFLIGHTTYPEIFCPLANEIFCACTORIFCCOMPRESSORTYPEIFCELECTRICCHARGEMEASUREIFCTEXTSTYLETEXTMODELIFCRATIONALBSPLINESURFACEWITHKNOTSIFCLENGTHMEASUREIFCWALLIFCACTUATORTYPEIFCPROFILEDEFIFCGRIDPLACEMENTIFCTIMEIFCVIRTUALELEMENTIFCLIGHTSOURCESPOTIFCBUILDINGELEMENTPARTTYPEIFCFLOWCONTROLLERTYPEIFCPROPERTYENUMERATIONIFCTEXTLITERALIFCRELNESTSIFCCOORDINATEREFERENCESYSTEMIFCTESSELLATEDITEMIFCSTRUCTURALLOADSINGLEDISPLACEMENTDISTORTIONIFCOBJECTDEFINITIONIFCBEAMIFCRAMPIFCBLOBTEXTUREIFCFLOWMETERTYPEIFCSTRUCTURALLOADCONFIGURATIONIFCMATERIALDEFINITIONIFCPERMITIFCSTRUCTURALSURFACEACTIONIFCPRODUCTREPRESENTATIONIFCLIBRARYINFORMATIONIFCLSHAPEPROFILEDEFIFCPOLYLOOPIFCSWEPTSURFACEIFCRELDEFINESBYTYPEIFCSTRUCTURALPOINTCONNECTIONIFCWINDOWSTANDARDCASEIFCPREDEFINEDPROPERTYSETIFCSHAPEASPECTIFCRELASSOCIATESLIBRARYIFCWASTETERMINALTYPEIFCRAMPTYPEIFCSURFACESTYLESHADINGIFCDAYINMONTHNUMBERIFCSURFACESTYLERENDERINGIFCPROPERTYTEMPLATEDEFINITIONIFCPROJECTLIBRARYIFCFLOWTERMINALTYPEIFCCONSTRUCTIONRESOURCETYPEIFCCONTEXTDEPENDENTMEASUREIFCFLOWFITTINGIFCCLASSIFICATIONIFCPOINTONCURVEIFCPLANARBOXIFCLANGUAGEIDIFCRELDECLARESIFCTEXTUREVERTEXLISTIFCMETRICIFCDISTRIBUTIONFLOWELEMENTIFCEXTERNALINFORMATIONIFCAIRTOAIRHEATRECOVERYIFCAREAMEASUREIFCFILTERIFCPROJECTORDERIFCDOORTYPEIFCSIMPLEPROPERTYIFCLINEARMOMENTMEASUREIFCPRODUCTIFCSENSORTYPEIFCCABLEFITTINGIFCEXTERNALSPATIALELEMENTIFCMASSDENSITYMEASUREIFCTENDONTYPEIFCUNITARYEQUIPMENTTYPEIFCTANKTYPEIFCMEDICALDEVICETYPEIFCDOORSTYLEIFCCOOLEDBEAMIFCTRANSPORTELEMENTTYPEIFCRELASSOCIATESMATERIALIFCOUTERBOUNDARYCURVEIFCSECTIONPROPERTIESIFCVALVEIFCOUTLETTYPEIFCMATERIALPROFILEIFCEVAPORATIVECOOLERIFCINDUCTANCEMEASUREIFCEXTERNALLYDEFINEDSURFACESTYLEIFCELECTRICTIMECONTROLTYPEIFCIONCONCENTRATIONMEASUREIFCOBJECTIFCEXTERNALSPATIALSTRUCTUREELEMENTIFCDIMENSIONCOUNTIFCSHADINGDEVICETYPEIFCASYMMETRICISHAPEPROFILEDEFIFCMOMENTOFINERTIAMEASUREIFCCLOSEDSHELLIFCPROPERTYREFERENCEVALUEIFCWORKPLANIFCCREWRESOURCEIFCPROPERTYSINGLEVALUEIFCFEATUREELEMENTIFCSTRUCTURALMEMBERIFCSURFACEOFREVOLUTIONIFCRELCONNECTSPATHELEMENTSIFCACTORROLEIFCSYSTEMIFCEXTRUDEDAREASOLIDIFCPILEIFCTEXTFONTNAMEIFCCOMPOSITECURVEIFCCOMPOUNDPLANEANGLEMEASUREIFCRELCONNECTSELEMENTSIFCCONTROLIFCALARMIFCANNOTATIONIFCLOCALPLACEMENTIFCENGINEIFCPIXELTEXTUREIFCLAMPTYPEIFCRELSPACEBOUNDARYIFCSLABTYPEIFCRELATIONSHIPIFCPROPERTYTEMPLATEIFCPHMEASUREIFCQUANTITYTIMEIFCPLANAREXTENTIFCTRANSPORTELEMENTIFCBOUNDARYEDGECONDITIONIFCREINFORCINGELEMENTIFCSTRUCTURALACTIONIFCDAMPERTYPEIFCDIMENSIONALEXPONENTSIFCPORTIFCPARAMETERVALUEIFCREPRESENTATIONIFCSWITCHINGDEVICEIFCMATERIALLAYERSETUSAGEIFCDISTRIBUTIONCHAMBERELEMENTTYPEIFCBOUNDARYFACECONDITIONIFCFONTVARIANTIFCPROTECTIVEDEVICETRIPPINGUNITTYPEIFCPROPERTYENUMERATEDVALUEIFCPROPERTYIFCMATERIALCLASSIFICATIONRELATIONSHIPIFCSHELLBASEDSURFACEMODELIFCRIGHTCIRCULARCYLINDERIFCRELASSIGNSTORESOURCEIFCINTEGERCOUNTRATEMEASUREIFCRESOURCEAPPROVALRELATIONSHIPIFCSYSTEMFURNITUREELEMENTTYPEIFCDOORPANELPROPERTIESIFCTYPEPROCESSIFCCOORDINATEOPERATIONIFCFEATUREELEMENTADDITIONIFCCONSTRUCTIONPRODUCTRESOURCETYPEIFCCABLESEGMENTTYPEIFCPOLYGONALFACESETIFCSURFACESTYLEIFCGRIDAXISIFCREALIFCCONSTRUCTIONMATERIALRESOURCEIFCFREQUENCYMEASUREIFCENERGYMEASUREIFCRADIOACTIVITYMEASUREIFCSTYLEDREPRESENTATIONIFCSPATIALZONETYPEIFCTSHAPEPROFILEDEFIFCCARTESIANPOINTLIST2DIFCPRESENTATIONLAYERWITHSTYLEIFCHEATFLUXDENSITYMEASUREIFCTRAPEZIUMPROFILEDEFIFCRELPROJECTSELEMENTIFCENGINETYPEIFCARBITRARYCLOSEDPROFILEDEFIFCDATETIMEIFCSTAIRFLIGHTIFCSHADINGDEVICEIFCEVAPORATIVECOOLERTYPEIFCPRESSUREMEASUREIFCOFFSETCURVE3DIFCCONSTRAINTIFCMANIFOLDSOLIDBREPIFCPUMPIFCFEATUREELEMENTSUBTRACTIONIFCPRESENTATIONITEMIFCPRODUCTDEFINITIONSHAPEIFCCURTAINWALLTYPEIFCCOILIFCDISTRIBUTIONPORTIFCFIRESUPPRESSIONTERMINALTYPEIFCMEMBERTYPEIFCHALFSPACESOLIDIFCPREDEFINEDITEMIFCSUBCONTRACTRESOURCEIFCRESOURCELEVELRELATIONSHIPIFCOWNERHISTORYIFCCOMPOSITECURVESEGMENTIFCINTERSECTIONCURVEIFCMATERIALDEFINITIONREPRESENTATIONIFCPROPERTYSETDEFINITIONSET" )

let EntityTypesIfcSearch =
  new MinimalPerfectHash< EntityTypesIfc >( gMapEntityTypesIfc, prefixSumAddressEntityTypesIfc, slotMapEntityTypesIfc, encodedDataEntityTypesIfc )

export default EntityTypesIfcSearch
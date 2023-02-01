import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';
import EntitTypesIfc from './entity_types_ifc.bldrs';

let gMapEntitTypesIfc = new Int32Array( [-605,15,1,2,1,34,-91,250,-144,1,-148,28,34,-214,1,65,126,60,9,2,87,15,3,-253,-297,22,5,343,1,1,208,0,14,6,79,2,131,9,43,21,1,38,15,-454,177,2,-495,45,326,11,5,15,27,39,208,141,908,60,25,-531,19,182,4,157,3,773,4,67,3,8,28,13,761,51,5,5,-532,24,5,82,1155,543,292,20,117,-547,7,-600,252,87,590,1,281,968,3481,13,1023,49,20,9,159,3,1,5,497,1,461,699,10,1036,123,123,-491,-602,182,17,102,2,136,-242,40,240,0,26,15,480,2,18,1,91,-374,116,42,146,12,57,31,2,-74,35,16,130,8,10,2,88,36,90,84,119,224,136,29,51,78,30,57,59,107,72,360,11,402] );

let prefixSumAddressEntitTypesIfc = new Uint32Array( [0,26,50,63,93,102,115,131,151,161,182,194,209,216,242,270,288,321,332,340,363,379,399,432,451,481,495,526,549,571,579,602,614,638,668,677,701,713,734,766,783,800,826,837,863,884,909,934,943,962,981,1003,1028,1058,1095,1116,1137,1173,1193,1205,1220,1252,1283,1310,1325,1345,1373,1402,1420,1442,1478,1492,1499,1529,1539,1562,1576,1599,1619,1641,1649,1659,1676,1690,1697,1726,1759,1785,1813,1859,1874,1894,1912,1933,1951,1965,1989,2006,2024,2048,2071,2086,2105,2119,2140,2149,2167,2179,2197,2212,2233,2250,2264,2288,2308,2330,2350,2368,2395,2410,2444,2468,2485,2513,2535,2565,2581,2592,2607,2623,2651,2660,2668,2696,2715,2736,2754,2779,2790,2809,2820,2843,2871,2906,2939,2959,2970,2993,3017,3039,3052,3088,3109,3144,3171,3180,3190,3207,3215,3225,3232,3278,3291,3303,3310,3331,3351,3370,3379,3396,3421,3433,3461,3472,3491,3514,3546,3574,3610,3626,3665,3682,3704,3723,3736,3758,3787,3811,3833,3851,3881,3904,3931,3950,3970,3997,4008,4023,4044,4057,4078,4097,4114,4145,4168,4178,4209,4236,4258,4272,4296,4323,4338,4355,4375,4397,4411,4436,4458,4482,4496,4524,4543,4552,4563,4577,4607,4618,4634,4670,4698,4722,4734,4755,4768,4794,4807,4827,4849,4877,4901,4917,4936,4951,4966,4995,5006,5039,5060,5084,5096,5122,5136,5153,5173,5187,5206,5222,5239,5257,5271,5283,5295,5312,5325,5340,5350,5361,5387,5408,5422,5436,5448,5469,5490,5505,5527,5544,5574,5598,5623,5655,5673,5697,5714,5721,5746,5769,5788,5801,5822,5838,5862,5869,5896,5917,5936,5943,5951,5963,5971,5999,6018,6042,6070,6081,6104,6125,6147,6170,6191,6211,6235,6257,6267,6301,6317,6336,6351,6371,6399,6427,6444,6473,6490,6507,6522,6541,6573,6587,6602,6622,6645,6656,6701,6730,6741,6750,6776,6800,6812,6832,6860,6878,6897,6916,6935,6947,6966,6993,7008,7018,7035,7050,7067,7077,7085,7110,7125,7138,7162,7183,7196,7224,7231,7248,7267,7297,7330,7344,7375,7384,7400,7428,7447,7476,7489,7516,7535,7564,7581,7610,7633,7640,7666,7673,7682,7702,7716,7745,7763,7802,7821,7844,7873,7906,7922,7933,7961,7976,7996,8010,8026,8047,8072,8088,8106,8115,8141,8155,8179,8195,8222,8243,8275,8289,8311,8328,8340,8373,8386,8409,8443,8458,8471,8503,8528,8549,8566,8588,8613,8631,8666,8685,8699,8711,8721,8751,8764,8794,8811,8825,8833,8867,8885,8902,8922,8946,8953,8980,9007,9035,9048,9064,9075,9108,9133,9151,9172,9184,9198,9214,9239,9271,9297,9321,9350,9365,9389,9407,9414,9436,9458,9488,9506,9539,9559,9583,9600,9614,9649,9673,9690,9717,9736,9756,9764,9783,9808,9829,9851,9882,9900,9917,9945,9969,9986,10013,10025,10038,10057,10079,10105,10123,10152,10172,10198,10213,10232,10261,10278,10294,10313,10331,10349,10371,10391,10424,10444,10455,10479,10502,10522,10531,10551,10574,10587,10622,10636,10654,10677,10694,10715,10742,10768,10793,10815,10839,10864,10884,10891,10906,10919,10949,10974,10983,11009,11027,11057,11082,11100,11108,11121,11148,11171,11202,11219,11238,11251,11285,11314,11336,11344,11355,11362,11373,11390,11405,11429,11460,11479,11499,11517,11544,11565,11589,11600,11611,11637,11665,11695,11702,11737,11766,11773,11803,11823,11836,11853,11865,11891,11905,11931,11946,11972,11996,12014,12032,12042,12053,12070,12089,12125,12139,12159,12179,12192,12215,12230,12262,12284,12314,12325,12354,12374,12407,12420,12445,12474,12499,12516,12548,12556,12576,12596,12603,12629,12646,12670,12693,12717,12746,12758,12773,12805,12837,12868,12895,12923,12949,12971,12989,13009,13026,13040,13056,13063,13094,13109,13135,13155,13185,13207,13224] );

let slotMapEntitTypesIfc = new Int32Array( [635,549,453,29,98,530,73,341,450,487,406,317,409,304,410,131,252,218,592,366,11,388,558,132,152,143,285,45,460,145,185,593,228,31,308,247,180,173,352,209,382,617,157,258,335,422,498,199,210,54,367,508,572,431,201,141,138,35,167,475,618,438,625,265,303,611,384,370,65,392,551,297,590,169,165,399,192,196,534,100,3,55,566,290,624,9,153,441,140,457,531,331,198,405,344,648,342,369,267,321,652,289,206,503,6,330,494,525,204,14,312,203,301,235,255,245,129,17,80,136,248,226,24,532,320,542,316,200,365,43,449,69,385,269,149,116,471,5,554,94,548,84,620,585,264,633,501,319,163,48,445,636,361,631,400,451,120,135,101,447,139,224,118,343,564,349,576,109,134,356,346,519,573,262,600,171,176,181,2,182,68,159,126,178,381,250,325,329,538,336,27,553,594,522,241,161,59,214,574,354,435,87,236,536,293,186,458,202,67,72,455,446,347,240,284,645,421,630,418,509,483,463,217,427,647,545,430,641,510,439,162,368,205,414,174,103,379,413,295,597,383,16,133,480,486,375,502,417,604,426,90,279,328,583,263,484,473,481,442,491,7,56,591,219,527,23,42,599,256,86,348,158,234,598,472,506,579,364,76,577,237,569,423,260,99,175,50,650,429,112,404,559,448,540,168,156,221,323,291,106,499,340,629,602,403,275,294,111,609,401,154,468,535,97,565,166,461,537,307,601,610,25,563,397,358,292,57,337,155,490,584,378,121,613,419,373,644,338,516,278,638,614,287,452,36,147,39,470,386,396,85,315,115,646,10,632,515,188,363,216,13,578,339,402,474,246,603,391,261,47,93,231,543,464,520,34,91,282,639,207,280,622,102,130,270,526,582,233,514,643,444,20,350,53,440,434,371,299,61,357,230,359,362,595,529,238,179,619,37,541,223,33,28,411,107,552,500,492,504,428,627,637,459,377,184,562,286,88,190,151,318,432,314,95,479,353,493,580,187,12,394,51,642,288,482,511,345,454,305,40,213,117,242,191,211,398,560,518,170,142,222,596,300,268,75,281,38,276,63,105,272,66,253,561,550,324,77,125,60,615,544,332,395,568,215,495,306,575,420,407,556,512,497,212,436,164,271,193,22,606,277,649,15,334,389,570,195,376,489,82,528,58,122,372,208,274,621,313,194,433,92,322,144,380,249,513,571,586,374,220,477,496,415,172,588,587,393,183,197,62,8,257,387,355,467,505,310,177,628,239,52,114,227,567,44,608,416,229,273,523,626,4,651,465,123,524,623,547,78,311,507,424,113,302,408,296,79,49,46,466,104,612,351,108,557,232,581,326,244,128,124,521,437,127,298,443,160,110,64,70,0,137,119,539,83,640,333,412,607,266,485,89,254,309,150,71,259,18,146,148,555,81,533,74,96,469,425,360,243,634,32,19,478,283,21,605,41,616,546,517,26,327,1,456,189,589,30,390,251,225,488,462,476] );

let encodedDataEntitTypesIfc = (new TextEncoder()).encode( "IFCTEXTSTYLEFORDEFINEDFONTIFCRELASSOCIATESMATERIALIFCTYPEOBJECTIFCGEOMETRICREPRESENTATIONITEMIFCMEMBERIFCRELASSIGNSIFCBOOLEANRESULTIFCEXTRUDEDAREASOLIDIFCPROCESSIFCTEXTSTYLEFONTMODELIFCINVENTORYIFCFASTENERTYPEIFCZONEIFCELECTRICTIMECONTROLTYPEIFCPOLYGONALBOUNDEDHALFSPACEIFCFLOWSEGMENTTYPEIFCDISTRIBUTIONCHAMBERELEMENTTYPEIFCCSGSOLIDIFCSPACEIFCPROTECTIVEDEVICETYPEIFCPOSTALADDRESSIFCPROFILEPROPERTIESIFCRELCONTAINEDINSPATIALSTRUCTUREIFCCABLESEGMENTTYPEIFCCLASSIFICATIONNOTATIONFACETIFCCHILLERTYPEIFCDRAUGHTINGPREDEFINEDTEXTFONTIFCAPPROVALRELATIONSHIPIFCRECTANGLEPROFILEDEFIFCCONICIFCCONSTRUCTIONRESOURCEIFCSPACETYPEIFCCURVESTYLEFONTPATTERNIFCANNOTATIONSURFACEOCCURRENCEIFCSYSTEMIFCDISCRETEACCESSORYTYPEIFCOBJECTIVEIFCCONNECTIONGEOMETRYIFCSTRUCTURALCONNECTIONCONDITIONIFCCOOLEDBEAMTYPEIFCFUELPROPERTIESIFCSTRUCTURALSURFACEMEMBERIFCCOILTYPEIFCDISTRIBUTIONELEMENTTYPEIFCMATERIALPROPERTIESIFCLIGHTSOURCEGONIOMETRICIFCPRODUCTDEFINITIONSHAPEIFCPERMITIFCCOOLINGTOWERTYPEIFCISHAPEPROFILEDEFIFCSWITCHINGDEVICETYPEIFCPROPERTYREFERENCEVALUEIFCRELCONNECTSWITHECCENTRICITYIFCMATERIALCLASSIFICATIONRELATIONSHIPIFCPROJECTORDERRECORDIFCCHAMFEREDGEFEATUREIFCCARTESIANTRANSFORMATIONOPERATOR3DIFCANNOTATIONSURFACEIFCCONDITIONIFCQUANTITYTIMEIFCSTRUCTURALPLANARACTIONVARYINGIFCMECHANICALMATERIALPROPERTIESIFCSURFACEOFLINEAREXTRUSIONIFCFLOWTERMINALIFCELECTRICMOTORTYPEIFCSTRUCTURALLOADPLANARFORCEIFCSYSTEMFURNITUREELEMENTTYPEIFCPIPEFITTINGTYPEIFCBUILDINGELEMENTTYPEIFCGEOMETRICREPRESENTATIONSUBCONTEXTIFCRELCONNECTSIFCLOOPIFCSLIPPAGECONNECTIONCONDITIONIFCELLIPSEIFCFLOWMOVINGDEVICETYPEIFCTEXTLITERALIFCCONTEXTDEPENDENTUNITIFCEQUIPMENTSTANDARDIFCRELASSIGNSTOPROCESSIFCPLATEIFCCONTROLIFCAXIS1PLACEMENTIFCRELSEQUENCEIFCEDGEIFCSURFACECURVESWEPTAREASOLIDIFCDISTRIBUTIONCONTROLELEMENTTYPEIFCCLASSIFICATIONREFERENCEIFCTHERMALMATERIALPROPERTIESIFCCARTESIANTRANSFORMATIONOPERATOR3DNONUNIFORMIFCORGANIZATIONIFCRELASSIGNSTOACTORIFCTRANSFORMERTYPEIFCPERFORMANCEHISTORYIFCOBJECTPLACEMENTIFCFACESURFACEIFCVERTEXBASEDTEXTUREMAPIFCSWEPTAREASOLIDIFCJUNCTIONBOXTYPEIFCFLOWSTORAGEDEVICETYPEIFCTRANSPORTELEMENTTYPEIFCWORKSCHEDULEIFCDUCTSILENCERTYPEIFCWORKCONTROLIFCPROPERTYDEFINITIONIFCOBJECTIFCSPACEHEATERTYPEIFCPROCEDUREIFCREINFORCINGMESHIFCSPACEPROGRAMIFCFLOWCONTROLLERTYPEIFCFEATUREELEMENTIFCSERVICELIFEIFCELECTRICGENERATORTYPEIFCDIAMETERDIMENSIONIFCDISTRIBUTIONELEMENTIFCDISCRETEACCESSORYIFCFLOWFITTINGTYPEIFCAIRTOAIRHEATRECOVERYTYPEIFCTRIMMEDCURVEIFCCARTESIANTRANSFORMATIONOPERATORIFCVIBRATIONISOLATORTYPEIFCCURVESTYLEFONTIFCANNOTATIONCURVEOCCURRENCEIFCRELASSIGNSTOCONTROLIFCSPATIALSTRUCTUREELEMENTTYPEIFCRELASSOCIATESIFCFASTENERIFCPROJECTORDERIFCFLOWMETERTYPEIFCAPPROVALACTORRELATIONSHIPIFCSIUNITIFCBLOCKIFCGENERALMATERIALPROPERTIESIFCDISTRIBUTIONPORTIFCCLASSIFICATIONITEMIFCCURTAINWALLTYPEIFCPHYSICALSIMPLEQUANTITYIFCOCCUPANTIFCRELCONNECTSPORTSIFCCOVERINGIFCRELASSOCIATESLIBRARYIFCRECTANGULARTRIMMEDSURFACEIFCSTRUCTURALSTEELPROFILEPROPERTIESIFCSECTIONREINFORCEMENTPROPERTIESIFCFLOWSTORAGEDEVICEIFCTABLEROWIFCPROPERTYBOUNDEDVALUEIFCFURNISHINGELEMENTTYPEIFCCOMPOSITEPROFILEDEFIFCPROFILEDEFIFCMECHANICALSTEELMATERIALPROPERTIESIFCTEXTSTYLETEXTMODELIFCFILLAREASTYLETILESYMBOLWITHSTYLEIFCSURFACESTYLEWITHTEXTURESIFCVECTORIFCPROJECTIFCRAMPFLIGHTTYPEIFCPOINTIFCRAILINGIFCMOVEIFCCARTESIANTRANSFORMATIONOPERATOR2DNONUNIFORMIFCCURVESTYLEIFCPLATETYPEIFCFACEIFCRELPROJECTSELEMENTIFCMANIFOLDSOLIDBREPIFCRELDEFINESBYTYPEIFCWINDOWIFCCARTESIANPOINTIFCFEATUREELEMENTADDITIONIFCFACEBOUNDIFCRECTANGLEHOLLOWPROFILEDEFIFCRELNESTSIFCFLOWMOVINGDEVICEIFCSTRUCTURALCONNECTIONIFCTOPOLOGICALREPRESENTATIONITEMIFCCONNECTIONSURFACEGEOMETRYIFCCONSTRAINTAGGREGATIONRELATIONSHIPIFCACTIONREQUESTIFCCONSTRAINTCLASSIFICATIONRELATIONSHIPIFCSURFACETEXTUREIFCCOLOURSPECIFICATIONIFCCSHAPEPROFILEDEFIFCCONSTRAINTIFCFLUIDFLOWPROPERTIESIFCDISTRIBUTIONCHAMBERELEMENTIFCEVAPORATIVECOOLERTYPEIFCMOTORCONNECTIONTYPEIFCRELASSIGNSTASKSIFCEXTERNALLYDEFINEDHATCHSTYLEIFCANNOTATIONOCCURRENCEIFCRELCONNECTSPORTTOELEMENTIFCSTRUCTURALACTIONIFCREGULARTIMESERIESIFCDIMENSIONCURVETERMINATORIFCPROPERTYIFCBSPLINECURVEIFCRECTANGULARPYRAMIDIFCRELDEFINESIFCMECHANICALFASTENERIFCMATERIALLAYERSETIFCBOXEDHALFSPACEIFCDIMENSIONCALLOUTRELATIONSHIPIFCRELASSIGNSTORESOURCEIFCSUBEDGEIFCCONSTRUCTIONMATERIALRESOURCEIFCORGANIZATIONRELATIONSHIPIFCSCHEDULETIMECONTROLIFCBLOBTEXTUREIFCBOOLEANCLIPPINGRESULTIFCTWODIRECTIONREPEATFACTORIFCMONETARYUNITIFCFACEOUTERBOUNDIFCDRAUGHTINGCALLOUTIFCPREDEFINEDCURVEFONTIFCWINDOWSTYLEIFCLIGHTSOURCEDIRECTIONALIFCSURFACESTYLESHADINGIFCLIGHTDISTRIBUTIONDATAIFCPROPERTYSETIFCPREDEFINEDDIMENSIONSYMBOLIFCUSHAPEPROFILEDEFIFCSPHEREIFCPOLYLOOPIFCVERTEXPOINTIFCRELASSOCIATESCLASSIFICATIONIFCMATERIALIFCTEXTUREVERTEXIFCREINFORCEMENTDEFINITIONPROPERTIESIFCOPTICALMATERIALPROPERTIESIFCCOMPOSITECURVESEGMENTIFCVALVETYPEIFCTIMESERIESSCHEDULEIFCTIMESERIESIFCCONNECTIONPOINTGEOMETRYIFCRAMPFLIGHTIFCSTACKTERMINALTYPEIFCIRREGULARTIMESERIESIFCFEATUREELEMENTSUBTRACTIONIFCSTRUCTURALPOINTACTIONIFCFURNITURETYPEIFCFLOWTERMINALTYPEIFCCALENDARDATEIFCPOINTONCURVEIFCPREDEFINEDTERMINATORSYMBOLIFCLAMPTYPEIFCPROPERTYCONSTRAINTRELATIONSHIPIFCLIBRARYINFORMATIONIFCSTRUCTURALCURVEMEMBERIFCLOCALTIMEIFCSPATIALSTRUCTUREELEMENTIFCTYPEPRODUCTIFCHUMIDIFIERTYPEIFCREVOLVEDAREASOLIDIFCFLOWSEGMENTIFCPREDEFINEDSYMBOLIFCQUANTITYCOUNTIFCPOINTONSURFACEIFCWATERPROPERTIESIFCSYMBOLSTYLEIFCACTORROLEIFCPLACEMENTIFCSWEPTDISKSOLIDIFCSOLIDMODELIFCTENDONANCHORIFCPRODUCTIFCAPPROVALIFCSTRUCTURALANALYSISMODELIFCFLOWINSTRUMENTTYPEIFCBOUNDINGBOXIFCFACETEDBREPIFCCOLOURRGBIFCDERIVEDUNITELEMENTIFCSTRUCTURALREACTIONIFCQUANTITYAREAIFCPROPERTYENUMERATIONIFCREPRESENTATIONIFCFIRESUPPRESSIONTERMINALTYPEIFCBOUNDARYFACECONDITIONIFCRELOVERRIDESPROPERTIESIFCDRAUGHTINGCALLOUTRELATIONSHIPIFCRELVOIDSELEMENTIFCLIGHTSOURCEPOSITIONALIFCFLOWCONTROLLERIFCPILEIFCCONNECTIONPORTGEOMETRYIFCCENTERLINEPROFILEDEFIFCWALLSTANDARDCASEIFCMAPPEDITEMIFCREINFORCINGELEMENTIFCGRIDPLACEMENTIFCRELCOVERSBLDGELEMENTSIFCTASKIFCRELASSIGNSTOPROJECTORDERIFCCONDITIONCRITERIONIFCCONNECTEDFACESETIFCLINEIFCPLANEIFCEDGECURVEIFCSTAIRIFCRIBPLATEPROFILEPROPERTIESIFCLIBRARYREFERENCEIFCSURFACESTYLERENDERINGIFCSTRUCTURALPOINTCONNECTIONIFCGRIDAXISIFCDOORLININGPROPERTIESIFCROUNDEDEDGEFEATUREIFCBUILDINGELEMENTPARTIFCSTRUCTURALLOADSTATICIFCREPRESENTATIONITEMIFCEXTERNALREFERENCEIFCPERSONANDORGANIZATIONIFCRELASSIGNSTOPRODUCTIFCFOOTINGIFCRELREFERENCEDINSPATIALSTRUCTUREIFCCONDENSERTYPEIFCTSHAPEPROFILEDEFIFCRELATIONSHIPIFCELECTRICALCIRCUITIFCSTRUCTURALCURVECONNECTIONIFCSTRUCTURALLOADLINEARFORCEIFCDIMENSIONCURVEIFCRELINTERACTIONREQUIREMENTSIFCSECTIONEDSPINEIFCOPENINGELEMENTIFCORIENTEDEDGEIFCAXIS2PLACEMENT2DIFCEXTERNALLYDEFINEDSURFACESTYLEIFCCLOSEDSHELLIFCSURFACESTYLEIFCSECTIONPROPERTIESIFCSANITARYTERMINALTYPEIFCSLABTYPEIFCSTRUCTURALLOADSINGLEDISPLACEMENTDISTORTIONIFCLIGHTINTENSITYDISTRIBUTIONIFCTANKTYPEIFCVERTEXIFCEXTERNALLYDEFINEDSYMBOLIFCWINDOWPANELPROPERTIESIFCDOORSTYLEIFCTEXTURECOORDINATEIFCSTRUCTURALLOADSINGLEFORCEIFCDUCTFITTINGTYPEIFCOBJECTDEFINITIONIFCTERMINATORSYMBOLIFCCIRCLEPROFILEDEFIFCCOSTVALUEIFCPHYSICALQUANTITYIFCGENERALPROFILEPROPERTIESIFCPLANAREXTENTIFCSURFACEIFCVIRTUALELEMENTIFCCOVERINGTYPEIFCUNITASSIGNMENTIFCADDRESSIFCTABLEIFCWINDOWLININGPROPERTIESIFCCREWRESOURCEIFCFILTERTYPEIFCRIGHTCIRCULARCYLINDERIFCAIRTERMINALBOXTYPEIFCRELAXATIONIFCEXTERNALLYDEFINEDTEXTFONTIFCGRIDIFCQUANTITYLENGTHIFCELEMENTCOMPONENTIFCSTRUCTURALSURFACECONNECTIONIFCGEOMETRICREPRESENTATIONCONTEXTIFCFLOWFITTINGIFCARBITRARYPROFILEDEFWITHVOIDSIFCCOLUMNIFCDEFINEDSYMBOLIFCRELASSOCIATESAPPLIEDVALUEIFCZSHAPEPROFILEDEFIFCROUNDEDRECTANGLEPROFILEDEFIFCSTYLEDITEMIFCBUILDINGELEMENTCOMPONENTIFCPREDEFINEDCOLOURIFCTEXTURECOORDINATEGENERATORIFCCONTROLLERTYPEIFCSTRUCTUREDDIMENSIONCALLOUTIFCSTYLEDREPRESENTATIONIFCRAMPIFCCABLECARRIERSEGMENTTYPEIFCPORTIFCTENDONIFCREPRESENTATIONMAPIFCDERIVEDUNITIFCSPACETHERMALLOADPROPERTIESIFCTIMESERIESVALUEIFCMECHANICALCONCRETEMATERIALPROPERTIESIFCANGULARDIMENSIONIFCFACETEDBREPWITHVOIDSIFCASYMMETRICISHAPEPROFILEDEFIFCPRODUCTSOFCOMBUSTIONPROPERTIESIFCMATERIALLAYERIFCPUMPTYPEIFCELECTRICDISTRIBUTIONPOINTIFCBOUNDEDCURVEIFCPROJECTIONELEMENTIFCDATEANDTIMEIFCFILLAREASTYLEIFCFILLAREASTYLETILESIFCSTRUCTURALLINEARACTIONIFCRELDECOMPOSESIFCLINEARDIMENSIONIFCMETRICIFCSTRUCTURALPOINTREACTIONIFCAPPLICATIONIFCRELSCHEDULESCOSTITEMSIFCOFFSETCURVE3DIFCANNOTATIONTEXTOCCURRENCEIFCANNOTATIONFILLAREAIFCHYGROSCOPICMATERIALPROPERTIESIFCSTAIRFLIGHTIFCRELCONNECTSELEMENTSIFCSIMPLEPROPERTYIFCTEXTSTYLEIFCPROPERTYDEPENDENCYRELATIONSHIPIFCVERTEXLOOPIFCSURFACESTYLELIGHTINGIFCTEXTSTYLEWITHBOXCHARACTERISTICSIFCOWNERHISTORYIFCOUTLETTYPEIFCCONSTRUCTIONEQUIPMENTRESOURCEIFCRELFLOWCONTROLELEMENTSIFCPREDEFINEDTEXTFONTIFCHALFSPACESOLIDIFCSUBCONTRACTRESOURCEIFCCLASSIFICATIONNOTATIONIFCELEMENTQUANTITYIFCMATERIALDEFINITIONREPRESENTATIONIFCTRANSPORTELEMENTIFCCURTAINWALLIFCPLANARBOXIFCFANTYPEIFCPRESENTATIONSTYLEASSIGNMENTIFCSHAPEMODELIFCCONSTRUCTIONPRODUCTRESOURCEIFCTELECOMADDRESSIFCLIGHTSOURCEIFCASSETIFCTIMESERIESREFERENCERELATIONSHIPIFCDUCTSEGMENTTYPEIFCPREDEFINEDITEMIFCSERVICELIFEFACTORIFCFACEBASEDSURFACEMODELIFCROOTIFCELECTRICALBASEPROPERTIESIFCENVIRONMENTALIMPACTVALUEIFCCRANERAILFSHAPEPROFILEDEFIFCMEMBERTYPEIFCDIMENSIONPAIRIFCRESOURCEIFCCOORDINATEDUNIVERSALTIMEOFFSETIFCSHELLBASEDSURFACEMODELIFCRELCOVERSSPACESIFCPROPERTYTABLEVALUEIFCOPENSHELLIFCEDGEFEATUREIFCOFFSETCURVE2DIFCSTRUCTURALPLANARACTIONIFCELECTRICFLOWSTORAGEDEVICETYPEIFCFLOWTREATMENTDEVICETYPEIFCBOUNDARYEDGECONDITIONIFCDRAUGHTINGPREDEFINEDCOLOURIFCAPPLIEDVALUEIFCPROPERTYSETDEFINITIONIFCBUILDINGELEMENTIFCSLABIFCDOCUMENTINFORMATIONIFCRATIONALBEZIERCURVEIFCDISTRIBUTIONFLOWELEMENTTYPEIFCRELFILLSELEMENTIFCRELASSOCIATESPROFILEPROPERTIESIFCELLIPSEPROFILEDEFIFCBOUNDARYNODECONDITIONIFCBUILDINGSTOREYIFCBEZIERCURVEIFCSTRUCTURALLOADSINGLEFORCEWARPINGIFCRELASSOCIATESAPPROVALIFCTUBEBUNDLETYPEIFCONEDIRECTIONREPEATFACTORIFCRELSPACEBOUNDARYIFCRIGHTCIRCULARCONEIFCPROXYIFCENERGYPROPERTIESIFCRELDEFINESBYPROPERTIESIFCLIGHTSOURCEAMBIENTIFCSTRUCTURALLOADGROUPIFCRELCONNECTSSTRUCTURALELEMENTIFCSOUNDPROPERTIESIFCSTRUCTURALITEMIFCCRANERAILASHAPEPROFILEDEFIFCMATERIALLAYERSETUSAGEIFCCOMPRESSORTYPEIFCDOCUMENTELECTRONICFORMATIFCNAMEDUNITIFCANNOTATIONIFCSTRUCTURALMEMBERIFCDOORPANELPROPERTIESIFCVIRTUALGRIDINTERSECTIONIFCAIRTERMINALTYPEIFCEXTENDEDMATERIALPROPERTIESIFCGEOMETRICCURVESETIFCRELCONNECTSPATHELEMENTSIFCCOSTSCHEDULEIFCLIGHTFIXTURETYPEIFCPRESENTATIONLAYERWITHSTYLEIFCBOUNDEDSURFACEIFCRELAGGREGATESIFCAXIS2PLACEMENT3DIFCSTAIRFLIGHTTYPEIFCPIPESEGMENTTYPEIFCCONVERSIONBASEDUNITIFCDOCUMENTREFERENCEIFCSTRUCTURALSURFACEMEMBERVARYINGIFCFURNISHINGELEMENTIFCCOSTITEMIFCPRODUCTREPRESENTATIONIFCBUILDINGELEMENTPROXYIFCELEMENTARYSURFACEIFCCIRCLEIFCWASTETERMINALTYPEIFCELEMENTCOMPONENTTYPEIFCSOUNDVALUEIFCRELCONNECTSWITHREALIZINGELEMENTSIFCSHAPEASPECTIFCGASTERMINALTYPEIFCCURRENCYRELATIONSHIPIFCQUANTITYWEIGHTIFCSTRUCTURALACTIVITYIFCIRREGULARTIMESERIESVALUEIFCCONNECTIONCURVEGEOMETRYIFCTOPOLOGYREPRESENTATIONIFCSHAPEREPRESENTATIONIFCREPRESENTATIONCONTEXTIFCCONSTRAINTRELATIONSHIPIFCFURNITURESTANDARDIFCBEAMIFCACTUATORTYPEIFCSENSORTYPEIFCSTRUCTURALPROFILEPROPERTIESIFCMECHANICALFASTENERTYPEIFCPERSONIFCPROPERTYENUMERATEDVALUEIFCELEMENTASSEMBLYIFCCONNECTIONPOINTECCENTRICITYIFCSURFACESTYLEREFRACTIONIFCRADIUSDIMENSIONIFCGROUPIFCCOLUMNTYPEIFCCURVESTYLEFONTANDSCALINGIFCRELSERVICESBUILDINGSIFCAPPROVALPROPERTYRELATIONSHIPIFCSTRUCTURALLOADIFCLSHAPEPROFILEDEFIFCDAMPERTYPEIFCDOCUMENTINFORMATIONRELATIONSHIPIFCREINFORCEMENTBARPROPERTIESIFCSURFACEOFREVOLUTIONIFCACTORIFCWORKPLANIFCPATHIFCWALLTYPEIFCREINFORCINGBARIFCSWEPTSURFACEIFCRELASSOCIATESDOCUMENTIFCBOUNDARYNODECONDITIONWARPINGIFCEQUIPMENTELEMENTIFCPROPERTYLISTVALUEIFCLIGHTSOURCESPOTIFCBUILDINGELEMENTPROXYTYPEIFCELECTRICHEATERTYPEIFCSTRUCTURALRESULTGROUPIFCEDGELOOPIFCPOLYLINEIFCARBITRARYOPENPROFILEDEFIFCARBITRARYCLOSEDPROFILEDEFIFCPERMEABLECOVERINGPROPERTIESIFCROOFIFCSTRUCTURALLOADSINGLEDISPLACEMENTIFCFAILURECONNECTIONCONDITIONIFCWALLIFCRELCONNECTSSTRUCTURALMEMBERIFCDERIVEDPROFILEDEFIFCSTYLEMODELIFCEVAPORATORTYPEIFCDIRECTIONIFCCABLECARRIERFITTINGTYPEIFCELEMENTTYPEIFCREFERENCESVALUEDOCUMENTIFCMATERIALLISTIFCPARAMETERIZEDPROFILEDEFIFCELECTRICAPPLIANCETYPEIFCMEASUREWITHUNITIFCCOMPLEXPROPERTYIFCELEMENTIFCBEAMTYPEIFCCSGPRIMITIVE3DIFC2DCOMPOSITECURVEIFCCARTESIANTRANSFORMATIONOPERATOR2DIFCRAILINGTYPEIFCRELOCCUPIESSPACESIFCCURVEBOUNDEDPLANEIFCTEXTUREMAPIFCUNITARYEQUIPMENTTYPEIFCIMAGETEXTUREIFCSTRUCTURALLINEARACTIONVARYINGIFCFLOWTREATMENTDEVICEIFCPREDEFINEDPOINTMARKERSYMBOLIFCBUILDINGIFCDISTRIBUTIONCONTROLELEMENTIFCELECTRICALELEMENTIFCCLASSIFICATIONITEMRELATIONSHIPIFCBOILERTYPEIFCENERGYCONVERSIONDEVICEIFCENERGYCONVERSIONDEVICETYPEIFCCIRCLEHOLLOWPROFILEDEFIFCCLASSIFICATIONIFCRELCONNECTSSTRUCTURALACTIVITYIFCCURVEIFCRELASSIGNSTOGROUPIFCBOUNDARYCONDITIONIFCDOORIFCPHYSICALCOMPLEXQUANTITYIFCLOCALPLACEMENTIFCFILLAREASTYLEHATCHINGIFCDIMENSIONALEXPONENTSIFCTEXTLITERALWITHEXTENTIFCANNOTATIONSYMBOLOCCURRENCEIFCALARMTYPEIFCPIXELTEXTUREIFCDRAUGHTINGPREDEFINEDCURVEFONTIFCDIMENSIONCURVEDIRECTEDCALLOUTIFCSTRUCTURALCURVEMEMBERVARYINGIFCAPPLIEDVALUERELATIONSHIPIFCSTRUCTURALLOADTEMPERATUREIFCRELASSOCIATESCONSTRAINTIFCPROPERTYSINGLEVALUEIFCPROJECTIONCURVEIFCHEATEXCHANGERTYPEIFCCOMPOSITECURVEIFCORDERACTIONIFCLABORRESOURCEIFCSITEIFCANNOTATIONFILLAREAOCCURRENCEIFCGEOMETRICSETIFCDISTRIBUTIONFLOWELEMENTIFCPRESENTATIONSTYLEIFCPRESENTATIONLAYERASSIGNMENTIFCTRAPEZIUMPROFILEDEFIFCQUANTITYVOLUME" );

let EntitTypesIfcSearch = new MinimalPerfectHash< EntitTypesIfc >( gMapEntitTypesIfc, prefixSumAddressEntitTypesIfc, slotMapEntitTypesIfc, encodedDataEntitTypesIfc );

export default EntitTypesIfcSearch;

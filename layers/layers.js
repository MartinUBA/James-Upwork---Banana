ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([52.810921, 3.746437, 102.270121, 37.310986]);
var wms_layers = [];


        var lyr_ESRIPhysical_0 = new ol.layer.Tile({
            'title': 'ESRI Physical',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_BaseMapGrey_1 = new ol.layer.Tile({
            'title': 'Base Map (Grey)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Banana_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Banana",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Banana_3.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [58.832378, -19.249563, 142.998708, 43.750185]
                            })
                        });
var format_Bananas_4 = new ol.format.GeoJSON();
var features_Bananas_4 = format_Bananas_4.readFeatures(json_Bananas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Bananas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bananas_4.addFeatures(features_Bananas_4);
var lyr_Bananas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bananas_4, 
                style: style_Bananas_4,
                popuplayertitle: "Bananas",
                interactive: true,
    title: 'Bananas<br />\
    <img src="styles/legend/Bananas_4_0.png" /> 0.1 - 1 kTons<br />\
    <img src="styles/legend/Bananas_4_1.png" /> 1.5 - 2 kTons<br />\
    <img src="styles/legend/Bananas_4_2.png" /> 2 - 2.5 kTons<br />\
    <img src="styles/legend/Bananas_4_3.png" /> 2.5 - 3 kTons<br />\
    <img src="styles/legend/Bananas_4_4.png" /> 3 - 10 kTons<br />'
        });
var format_IndiaBoundary_5 = new ol.format.GeoJSON();
var features_IndiaBoundary_5 = format_IndiaBoundary_5.readFeatures(json_IndiaBoundary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IndiaBoundary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndiaBoundary_5.addFeatures(features_IndiaBoundary_5);
var lyr_IndiaBoundary_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndiaBoundary_5, 
                style: style_IndiaBoundary_5,
                popuplayertitle: "India Boundary",
                interactive: false,
                    title: '<img src="styles/legend/IndiaBoundary_5.png" /> India Boundary'
                });
var format_Buffer50Km_6 = new ol.format.GeoJSON();
var features_Buffer50Km_6 = format_Buffer50Km_6.readFeatures(json_Buffer50Km_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Buffer50Km_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer50Km_6.addFeatures(features_Buffer50Km_6);
var lyr_Buffer50Km_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer50Km_6, 
                style: style_Buffer50Km_6,
                popuplayertitle: "Buffer 50 Km",
                interactive: true,
                    title: '<img src="styles/legend/Buffer50Km_6.png" /> Buffer 50 Km'
                });
var format_Papermills_7 = new ol.format.GeoJSON();
var features_Papermills_7 = format_Papermills_7.readFeatures(json_Papermills_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Papermills_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Papermills_7.addFeatures(features_Papermills_7);
var lyr_Papermills_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Papermills_7, 
                style: style_Papermills_7,
                popuplayertitle: "Paper mills ",
                interactive: true,
                    title: '<img src="styles/legend/Papermills_7.png" /> Paper mills '
                });
var format_PaperMillsbananaTOP20_8 = new ol.format.GeoJSON();
var features_PaperMillsbananaTOP20_8 = format_PaperMillsbananaTOP20_8.readFeatures(json_PaperMillsbananaTOP20_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PaperMillsbananaTOP20_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaperMillsbananaTOP20_8.addFeatures(features_PaperMillsbananaTOP20_8);
var lyr_PaperMillsbananaTOP20_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaperMillsbananaTOP20_8, 
                style: style_PaperMillsbananaTOP20_8,
                popuplayertitle: "Paper Mills banana TOP 20 ",
                interactive: true,
    title: 'Paper Mills banana TOP 20 <br />\
    <img src="styles/legend/PaperMillsbananaTOP20_8_0.png" /> 2040 - 3599 kTons<br />\
    <img src="styles/legend/PaperMillsbananaTOP20_8_1.png" /> 3599 - 5158 kTons<br />\
    <img src="styles/legend/PaperMillsbananaTOP20_8_2.png" /> 5158 - 6717 kTons<br />'
        });
var group_PaperMills = new ol.layer.Group({
                                layers: [lyr_Papermills_7,lyr_PaperMillsbananaTOP20_8,],
                                fold: "open",
                                title: "Paper Mills"});
var group_Feedstock = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Feedstock"});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_ESRIPhysical_0,lyr_BaseMapGrey_1,lyr_GoogleSatellite_2,],
                                fold: "open",
                                title: "Base map "});

lyr_ESRIPhysical_0.setVisible(true);lyr_BaseMapGrey_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_Banana_3.setVisible(true);lyr_Bananas_4.setVisible(true);lyr_IndiaBoundary_5.setVisible(true);lyr_Buffer50Km_6.setVisible(false);lyr_Papermills_7.setVisible(true);lyr_PaperMillsbananaTOP20_8.setVisible(true);
var layersList = [group_Basemap,lyr_Banana_3,lyr_Bananas_4,lyr_IndiaBoundary_5,lyr_Buffer50Km_6,group_PaperMills];
lyr_Bananas_4.set('fieldAliases', {'Banana': 'Banana', });
lyr_IndiaBoundary_5.set('fieldAliases', {'fid_1': 'fid_1', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', });
lyr_Buffer50Km_6.set('fieldAliases', {'Site Code': 'Site Code', 'Company Na': 'Company Na', 'Site Name': 'Site Name', 'Site City': 'Site City', 'Site State': 'Site State', 'Site Count': 'Site Count', 'My Site In': 'My Site In', 'My Site _1': 'My Site _1', });
lyr_Papermills_7.set('fieldAliases', {'Site Code': 'Site Code', 'Company Na': 'Company Na', 'Site Name': 'Site Name', 'Site City': 'Site City', 'Site State': 'Site State', 'Site Count': 'Site Count', 'My Site In': 'My Site In', 'My Site _1': 'My Site _1', 'VALUE': 'VALUE', });
lyr_PaperMillsbananaTOP20_8.set('fieldAliases', {'Site Code': 'Site Code', 'Company Na': 'Company Na', 'Site Name': 'Site Name', 'Site City': 'Site City', 'Site State': 'Site State', 'Site Count': 'Site Count', 'My Site In': 'My Site In', 'My Site _1': 'My Site _1', 'VALUE': 'VALUE', 'N° TOP 20': 'N° TOP 20', });
lyr_Bananas_4.set('fieldImages', {'Banana': 'TextEdit', });
lyr_IndiaBoundary_5.set('fieldImages', {'fid_1': 'TextEdit', 'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', });
lyr_Buffer50Km_6.set('fieldImages', {'Site Code': 'TextEdit', 'Company Na': 'TextEdit', 'Site Name': 'TextEdit', 'Site City': 'TextEdit', 'Site State': 'TextEdit', 'Site Count': 'TextEdit', 'My Site In': 'TextEdit', 'My Site _1': 'TextEdit', });
lyr_Papermills_7.set('fieldImages', {'Site Code': 'TextEdit', 'Company Na': 'TextEdit', 'Site Name': 'TextEdit', 'Site City': 'TextEdit', 'Site State': 'TextEdit', 'Site Count': 'TextEdit', 'My Site In': 'TextEdit', 'My Site _1': 'TextEdit', 'VALUE': 'TextEdit', });
lyr_PaperMillsbananaTOP20_8.set('fieldImages', {'Site Code': 'TextEdit', 'Company Na': 'TextEdit', 'Site Name': 'TextEdit', 'Site City': 'TextEdit', 'Site State': 'TextEdit', 'Site Count': 'TextEdit', 'My Site In': 'TextEdit', 'My Site _1': 'TextEdit', 'VALUE': 'TextEdit', 'N° TOP 20': 'Range', });
lyr_Bananas_4.set('fieldLabels', {'Banana': 'inline label - always visible', });
lyr_IndiaBoundary_5.set('fieldLabels', {'fid_1': 'no label', 'GID_0': 'no label', 'NAME_0': 'no label', });
lyr_Buffer50Km_6.set('fieldLabels', {'Site Code': 'inline label - always visible', 'Company Na': 'inline label - always visible', 'Site Name': 'inline label - always visible', 'Site City': 'inline label - always visible', 'Site State': 'hidden field', 'Site Count': 'inline label - always visible', 'My Site In': 'hidden field', 'My Site _1': 'hidden field', });
lyr_Papermills_7.set('fieldLabels', {'Site Code': 'inline label - always visible', 'Company Na': 'inline label - always visible', 'Site Name': 'inline label - always visible', 'Site City': 'inline label - always visible', 'Site State': 'inline label - always visible', 'Site Count': 'inline label - always visible', 'My Site In': 'hidden field', 'My Site _1': 'hidden field', 'VALUE': 'inline label - always visible', });
lyr_PaperMillsbananaTOP20_8.set('fieldLabels', {'Site Code': 'inline label - always visible', 'Company Na': 'inline label - always visible', 'Site Name': 'inline label - always visible', 'Site City': 'inline label - always visible', 'Site State': 'inline label - always visible', 'Site Count': 'inline label - always visible', 'My Site In': 'hidden field', 'My Site _1': 'hidden field', 'VALUE': 'inline label - always visible', 'N° TOP 20': 'inline label - always visible', });
lyr_PaperMillsbananaTOP20_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
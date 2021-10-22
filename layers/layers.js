var wms_layers = [];

var format_DDLL_0 = new ol.format.GeoJSON();
var features_DDLL_0 = format_DDLL_0.readFeatures(json_DDLL_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DDLL_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DDLL_0.addFeatures(features_DDLL_0);
var lyr_DDLL_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DDLL_0, 
                style: style_DDLL_0,
                interactive: true,
    title: 'DDLL<br />\
    <img src="styles/legend/DDLL_0_0.png" /> 1<br />\
    <img src="styles/legend/DDLL_0_1.png" /> 2<br />\
    <img src="styles/legend/DDLL_0_2.png" /> 4<br />\
    <img src="styles/legend/DDLL_0_3.png" /> 5<br />\
    <img src="styles/legend/DDLL_0_4.png" /> 6<br />\
    <img src="styles/legend/DDLL_0_5.png" /> 7<br />\
    <img src="styles/legend/DDLL_0_6.png" /> <br />'
        });
var format_KerawananLongsorYangBener_1 = new ol.format.GeoJSON();
var features_KerawananLongsorYangBener_1 = format_KerawananLongsorYangBener_1.readFeatures(json_KerawananLongsorYangBener_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KerawananLongsorYangBener_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KerawananLongsorYangBener_1.addFeatures(features_KerawananLongsorYangBener_1);
var lyr_KerawananLongsorYangBener_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KerawananLongsorYangBener_1, 
                style: style_KerawananLongsorYangBener_1,
                interactive: true,
    title: 'KerawananLongsorYangBener<br />\
    <img src="styles/legend/KerawananLongsorYangBener_1_0.png" /> Rendah<br />\
    <img src="styles/legend/KerawananLongsorYangBener_1_1.png" /> Sedang<br />\
    <img src="styles/legend/KerawananLongsorYangBener_1_2.png" /> Tinggi<br />\
    <img src="styles/legend/KerawananLongsorYangBener_1_3.png" /> Sangat Tinggi<br />\
    <img src="styles/legend/KerawananLongsorYangBener_1_4.png" /> <br />'
        });

lyr_DDLL_0.setVisible(true);lyr_KerawananLongsorYangBener_1.setVisible(true);
var layersList = [lyr_DDLL_0,lyr_KerawananLongsorYangBener_1];
lyr_DDLL_0.set('fieldAliases', {'WADMKC': 'WADMKC', 'DDLL': 'DDLL', });
lyr_KerawananLongsorYangBener_1.set('fieldAliases', {'WADMKC': 'WADMKC', 'K_Longsor': 'K_Longsor', });
lyr_DDLL_0.set('fieldImages', {'WADMKC': 'TextEdit', 'DDLL': 'TextEdit', });
lyr_KerawananLongsorYangBener_1.set('fieldImages', {'WADMKC': 'TextEdit', 'K_Longsor': 'TextEdit', });
lyr_DDLL_0.set('fieldLabels', {'WADMKC': 'inline label', 'DDLL': 'inline label', });
lyr_KerawananLongsorYangBener_1.set('fieldLabels', {'WADMKC': 'inline label', 'K_Longsor': 'inline label', });
lyr_KerawananLongsorYangBener_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
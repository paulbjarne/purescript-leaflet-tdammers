var L = require('leaflet');

exports.tileLayerJS =
    function (urlTemplate) {
        return function (options) {
            return function () {
                return L.tileLayer(urlTemplate, options)
            }
        }
    }


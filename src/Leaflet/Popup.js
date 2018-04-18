if (typeof window !== 'undefined') {
    var L = require('leaflet');
}

exports.bindPopup =
    function (marker) {
        return function (popupContent) {
            return function () {
                marker.bindPopup(popupContent);
            }
        }
    }
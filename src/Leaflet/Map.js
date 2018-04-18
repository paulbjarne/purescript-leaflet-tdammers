if (typeof window !== 'undefined') {
    var L = require('leaflet');
}
exports.map =
    function (domID) {
        return function(latlng) {
            return function (zoom) {
                return function () {
                    var m = L.map(domID)
                    m.setView(latlng, zoom)
                    return m
                }
            }
        }
    }

exports.addLayer =
    function (layer) {
        return function (map) {
            return function () {
                layer.addTo(map)
            }
        }
    }

exports.removeLayer =
    function (layer) {
        return function (map) {
            return function () {
                map.removeLayer(layer)
            }
        }
    }

exports.setView =
    function (map) {
        return function (latlng) {
            return function (zoom) {
                return function () {
                    map.setView(latlng, zoom)
                }
            }
        }
    }

exports.invalidateSize =
    function (map) {
        return function () {
            map.invalidateSize()
        }
    }

exports.getCenter =
    function (map) {
        return function () {
            return map.getCenter()
        }
    }

exports.getZoom =
    function (map) {
        return function () {
            return map.getZoom()
        }
    }

exports.onZoom =
    function (map) {
        return function (handler) {
            return function () {
                map.on('zoom', function (data) {
                    handler()
                })
            }
        }
    }

exports.onMove =
    function (map) {
        return function (handler) {
            return function () {
                map.on('move', function (ev) {
                    handler(ev.latlng)()
                })
            }
        }
    }


if (typeof window !== 'undefined') {
    var L = require('leaflet');
}

exports.markerJS =
    function (position) {
        return function (options) {
            return function () {
                return L.marker(position, options)
            }
        }
    }

exports.onMouseEventJS = function (eventName) {
    return function (marker) {
        return function (action) {
            return function () {
                var handler = function (ev) {
                    action(mkMouseEvent(ev))()
                }
                marker.on(eventName, handler)
                return handler
            }
        }
    }
}

exports.offMouseEventJS = function (eventName) {
    return function (marker) {
        return function (handler) {
            return function () {
                marker.off(eventName, handler)
                return null
            }
        }
    }
}

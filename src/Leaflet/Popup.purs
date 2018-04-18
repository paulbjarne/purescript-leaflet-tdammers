module Leaflet.Popup
( Popup
, bindPopup )
where

import Leaflet.Marker

import Control.Monad.Eff (Eff)
import Leaflet (LEAFLET)

foreign import data Popup :: Type

foreign import bindPopup :: forall html eff.
    Marker ->
    html ->
    Eff (leaflet :: LEAFLET | eff) Marker
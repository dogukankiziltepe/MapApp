import { ADD_MARKER, DESELECT_MARKER, MapActionTypes, Marker, REMOVE_MARKER, SELECT_MARKER, SET_MARKERS, UPDATE_MARKER } from "./types";

export function addMarker(marker: Marker):MapActionTypes{
    return {
        type: ADD_MARKER,
        payload: marker,
    }
}

export function removeMarker(id: string):MapActionTypes{
    return {
        type: REMOVE_MARKER,
        payload: id,
    }
}

export function selectMarker(id: string):MapActionTypes{
    return {
        type: SELECT_MARKER,
        payload: id,
    }
}

export function deselectMarker():MapActionTypes{
    return {
        type: DESELECT_MARKER,
    }
}

export function updateMarker(marker: Marker):MapActionTypes{
    return {
        type: UPDATE_MARKER,
        payload: marker,
    }
}

export function setMarkers(markers: Marker[]):MapActionTypes{
    return {
        type: SET_MARKERS,
        payload: markers,
    }
}

import { ADD_MARKER, DESELECT_MARKER, MapActionTypes, MarkerModel, REMOVE_MARKER, SELECT_MARKER, SET_MARKERS, UPDATE_MARKER } from "./types";

export function addMarker(marker: MarkerModel):MapActionTypes{
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

export function updateMarker(marker: MarkerModel):MapActionTypes{
    return {
        type: UPDATE_MARKER,
        payload: marker,
    }
}

export function setMarkers(markers: MarkerModel[]):MapActionTypes{
    return {
        type: SET_MARKERS,
        payload: markers,
    }
}

import { MapActionTypes, MarkerModel,MarkerTypes } from "./types";

export function addMarker(marker: MarkerModel):MapActionTypes{
    return {
        type: MarkerTypes.ADD_MARKER,
        payload: marker,
    }
}

export function removeMarker(id: string):MapActionTypes{
    return {
        type: MarkerTypes.REMOVE_MARKER,
        payload: id,
    }
}

export function selectMarker(id: string):MapActionTypes{
    return {
        type: MarkerTypes.SELECT_MARKER,
        payload: id,
    }
}

export function deselectMarker():MapActionTypes{
    return {
        type: MarkerTypes.DESELECT_MARKER,
    }
}

export function updateMarker(marker: MarkerModel):MapActionTypes{
    return {
        type: MarkerTypes.UPDATE_MARKER,
        payload: marker,
    }
}

export function setMarkers(markers: MarkerModel[]):MapActionTypes{
    return {
        type: MarkerTypes.SET_MARKERS,
        payload: markers,
    }
}

export interface InitialState{
    markers: MarkerModel[],
    selectedMarker: MarkerModel|null,
}

export interface Coordinates{
    latitude: number,
    longitude: number,
}

export interface MarkerModel{
    id: string,
    coordinate: Coordinates,
    name: string,
    color: string,
}

export const ADD_MARKER = "ADD_MARKER"
export const REMOVE_MARKER = "REMOVE_MARKER"
export const SELECT_MARKER = "SELECT_MARKER"
export const DESELECT_MARKER = "DESELECT_MARKER"
export const UPDATE_MARKER = "UPDATE_MARKER"
export const SET_MARKERS = "SET_MARKERS"

export interface AddMarkerAction{
    type: typeof ADD_MARKER,
    payload: MarkerModel,
}

export interface RemoveMarkerAction{
    type: typeof REMOVE_MARKER,
    payload: string,
}

export interface SelectMarkerAction{
    type: typeof SELECT_MARKER,
    payload: string,
}

export interface DeselectMarkerAction{
    type: typeof DESELECT_MARKER,
}

export interface UpdateMarkerAction{
    type: typeof UPDATE_MARKER,
    payload: MarkerModel,
}

export interface SetMarkersAction{
    type: typeof SET_MARKERS,
    payload: MarkerModel[],
}



export type MapActionTypes = AddMarkerAction | RemoveMarkerAction | SelectMarkerAction | DeselectMarkerAction | UpdateMarkerAction | SetMarkersAction
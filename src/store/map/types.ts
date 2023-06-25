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
    placeId?: string,
    coordinate: Coordinates,
    name: string,
    color: string,
}

export enum MarkerTypes {
    ADD_MARKER = "ADD_MARKER",
    REMOVE_MARKER = "REMOVE_MARKER",
    SELECT_MARKER = "SELECT_MARKER",
    DESELECT_MARKER = "DESELECT_MARKER",
    UPDATE_MARKER = "UPDATE_MARKER",
    SET_MARKERS = "SET_MARKERS",
}


export interface AddMarkerAction{
    type: typeof MarkerTypes.ADD_MARKER,
    payload: MarkerModel,
}

export interface RemoveMarkerAction{
    type: typeof MarkerTypes.REMOVE_MARKER,
    payload: string,
}

export interface SelectMarkerAction{
    type: typeof MarkerTypes.SELECT_MARKER,
    payload: string,
}

export interface DeselectMarkerAction{
    type: typeof MarkerTypes.DESELECT_MARKER,
}

export interface UpdateMarkerAction{
    type: typeof MarkerTypes.UPDATE_MARKER,
    payload: MarkerModel,
}

export interface SetMarkersAction{
    type: typeof MarkerTypes.SET_MARKERS,
    payload: MarkerModel[],
}



export type MapActionTypes = AddMarkerAction | RemoveMarkerAction | SelectMarkerAction | DeselectMarkerAction | UpdateMarkerAction | SetMarkersAction
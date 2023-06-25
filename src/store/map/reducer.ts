import { InitialState, MapActionTypes, MarkerTypes } from "./types";

export const initialState: InitialState = {
    markers: [],
    selectedMarker: null,
}

export function mapReducer(
    state = initialState,
    action: MapActionTypes
  ): InitialState {
    switch (action.type) {
        case MarkerTypes.ADD_MARKER:
            return {
                ...state,
                markers: [...state.markers, action.payload]
            }
        case MarkerTypes.REMOVE_MARKER:
            return {
                ...state,
                markers: state.markers.filter(marker => marker.id !== action.payload)
            }
        case MarkerTypes.SET_MARKERS:
            return {
                ...state,
                markers: action.payload
            }
        case MarkerTypes.DESELECT_MARKER:
            return {
                ...state,
                selectedMarker: null
            }
        case MarkerTypes.UPDATE_MARKER:
            return {
                ...state,
                markers: state.markers.map(marker => marker.id === action.payload.id ? action.payload : marker)
            }
        default :
            return state


  }
}
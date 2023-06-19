import { InitialState, MapActionTypes } from "./types";

export const initialState: InitialState = {
    markers: [],
    selectedMarker: null,
}

export function mapReducer(
    state = initialState,
    action: MapActionTypes
  ): InitialState {
    switch (action.type) {
        case "ADD_MARKER":
            return {
                ...state,
                markers: [...state.markers, action.payload]
            }
        case "REMOVE_MARKER":
            return {
                ...state,
                markers: state.markers.filter(marker => marker.id !== action.payload)
            }
        case "SELECT_MARKER":
            return {
                ...state,
                selectedMarker: state.markers.find(marker => marker.id === action.payload) || null
            }
        case "DESELECT_MARKER":
            return {
                ...state,
                selectedMarker: null
            }
        case "UPDATE_MARKER":
            return {
                ...state,
                markers: state.markers.map(marker => marker.id === action.payload.id ? action.payload : marker)
            }
        default :
            return state


  }
}
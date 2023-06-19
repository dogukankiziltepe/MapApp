import { combineReducers } from "redux";
import { mapReducer } from "./map/reducer";

export const rootReducer = combineReducers({
	map: mapReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

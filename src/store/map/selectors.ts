import { useSelector } from "react-redux";
import { RootState } from "../reducer";

export const getMarkers = () => {
  const list = useSelector((state: RootState) => state.map.markers);
  return list;
};

export const getSelectedMarker = () => {
    const marker = useSelector((state: RootState) => state.map.selectedMarker);
    return marker;
}
import { Text } from 'native-base'
import React, { useEffect } from 'react'
import { Alert, Dimensions, StyleSheet, View } from 'react-native'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { CommonActions, useIsFocused, useNavigation } from '@react-navigation/native'
import { getMarkers } from '../store/map/selectors'
import { MarkerModel } from '../store/map/types'
import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation'
import MapViewDirections from 'react-native-maps-directions'
import UserIcon from '../components/UserIcon'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'


export default function Directions({ route }: BottomTabScreenProps<any, "Directions">) {
  const [poi, setPoi] = React.useState<MarkerModel | null>(null);
  const [userLocation, setUserLocation] = React.useState<GeolocationResponse | null>(null);
  const navigation = useNavigation();
  const params = route.params;
  const isFocused = useIsFocused();
  const markers = getMarkers();
  useEffect(() => {
    if (isFocused && params?.poi) {
      setPoi(params?.poi);
    }
    else {
      setPoi(null);
      navigation.dispatch(CommonActions.setParams({ poi: null }));
    }
  }, [isFocused])
  useEffect(() => {
    getCurrentPosition();
  }, [])
  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation(pos);
      },
      (error) => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      { enableHighAccuracy: true }
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: userLocation !== null ? userLocation.coords.latitude : 37.785834,
          longitude: userLocation !== null ? userLocation.coords.longitude : 40.406417,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        onLongPress={(e) => setPoi(null)}
      >
        {markers !== null ? markers.map((marker: MarkerModel) => <Marker key={marker.id} onPress={() => setPoi(marker)} coordinate={marker.coordinate} pinColor={marker.color}>
          <Callout>
            <View>
              <Text>Name: {marker.name}</Text>
            </View>
          </Callout>
        </Marker>)
          : null}
        {userLocation !== null ?
          <Marker coordinate={{ latitude: userLocation.coords.latitude, longitude: userLocation.coords.longitude }} pinColor={'blue'}>
            <UserIcon />
            <Callout>
              <View>
                <Text>You are here</Text>
              </View>
            </Callout>
          </Marker> : null
        }
        {poi !== null && userLocation !== null ? (<MapViewDirections
          origin={userLocation.coords}
          destination={poi.coordinate}
          apikey="AIzaSyCOxabUvMjEXbT6W7WiEeF2AaBS-wnyaRY "
          strokeWidth={3}
        />) : null
        }
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

});

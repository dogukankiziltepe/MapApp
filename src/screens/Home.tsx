import { Box, Container,Heading,Text,Button, Row } from 'native-base'
import React, { useEffect } from 'react'
import { Alert, Dimensions, StyleSheet, View } from 'react-native'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { SafeAreaView } from 'react-native-safe-area-context'
import Modal from '../components/Modal'
import Form from '../components/Form'
import { CommonActions, useIsFocused, useNavigation } from '@react-navigation/native'
import Geolocation from '@react-native-community/geolocation'
import { MarkerDefaultColor } from '../assets/Colors'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { MarkerModel } from '../store/map/types'
import UserIcon from '../components/UserIcon'

export default function Home({route}:BottomTabScreenProps<any,"Home">) {
  const [poi, setPoi] = React.useState<MarkerModel|null>(null)
  const [update,isUpdate] = React.useState(false)
  const [userLocation,setUserLocation] = React.useState<any>(null);
  const [modalVisible, setModalVisible] = React.useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const params = route.params;
  useEffect(() => {
    getCurrentPosition();
  },[])
  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (pos) => {
       setUserLocation(pos);
      },
      (error) => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      { enableHighAccuracy: true }
    );
  };

  const onPoiClick = (e: any) => {
    const poi = e.nativeEvent;
    setPoi(poi);
  }
  useEffect(() => {
    if(isFocused && params?.poi )
    {
      setPoi(params?.poi);
      isUpdate(params?.isUpdate);
    }
    else{
      setPoi(null);
      isUpdate(false);
      navigation.dispatch(CommonActions.setParams({ poi: null,isUpdate:false }));
    }},[isFocused])
  return (
    <View style={styles.container}>
      <Form isUpdate = {update} poi={poi ? poi : null} modalVisible={modalVisible} setModalVisible={setModalVisible}/>

    <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
        latitude : update ? params?.poi.coordinate.latitude : userLocation !== null ? userLocation.coords.latitude : 37.785834,
        longitude: update ? params?.poi.coordinate.longitude: userLocation !== null ? userLocation.coords.longitude : 40.406417,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
       onPress={(e) => onPoiClick(e)}
       onPoiClick={(e) => onPoiClick(e)}>
       {poi !== null ? (
         <Marker coordinate={poi.coordinate} pinColor={poi.color ? poi.color : MarkerDefaultColor}>
           <Callout>
             <View>
               <Text>Place Id: {poi.placeId}</Text>
               <Text>Name: {poi.name}</Text>
             </View>
           </Callout>
         </Marker>
       ):null}
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
      </MapView>

      {poi !== null ? (
         <Modal isUpdate = {update}  setModalVisible={setModalVisible} poi={poi} setPoi={setPoi}/>
        ):null}
      
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

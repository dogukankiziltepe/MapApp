import React from 'react'
import { Touchable, TouchableOpacity, View } from 'react-native'
import { getMarkers } from '../store/map/selectors'
import { Box, FlatList, HStack, Spacer, VStack, Text, ArrowForwardIcon, Container, Heading, Center, DeleteIcon } from 'native-base';
import MarkerIcon from '../components/MarkerIcon';
import DirectionIcon from '../components/DirectionIcon';
import { useDispatch } from 'react-redux';
import { removeMarker } from '../store/map/actions';
import { useNavigation } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export default function MarkerList({navigation}: BottomTabScreenProps<any, "MarkerList">) {
  const markers = getMarkers();
  const dispatch = useDispatch();
  const deleteMarker = (id: string) => {
    dispatch(removeMarker(id))
  }
  return (
    <Container minWidth={"100%"} minHeight={"100%"} bgColor={'blue.50'} paddingTop={5}>
      <Heading alignSelf={"center"}>My Markers</Heading>
      <FlatList data={markers} width={"100%"} renderItem={({
        item
      }) => <Box
        paddingLeft={5}
        paddingRight={5}
        borderBottomWidth="1"
        borderColor="muted.800"
        pl={["0", "4"]}
        pr={["0", "5"]}
        py="2">
          <HStack space={[2, 3]} justifyContent="space-between">
            <MarkerIcon color={item.color} />
            <Text fontSize="lg" _dark={{
              color: "warmGray.50"
            }} color="coolGray.800" alignSelf="flex-start">
              {item.name}
            </Text>
            <Spacer />
            <TouchableOpacity onPress={() => navigation.navigate("MarkerList", {screen:"Directions",params:{poi: item }})}>
              <DirectionIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Home", { poi: item, isUpdate: true })}>
              <ArrowForwardIcon size="5" mt="1" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteMarker(item.id)}>
              <DeleteIcon size="5" mt="1" />
            </TouchableOpacity>
          </HStack>
        </Box>} keyExtractor={item => item.id} />
    </Container>
  )
}

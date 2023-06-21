import React from 'react'
import { Touchable, TouchableOpacity, View } from 'react-native'
import { getMarkers } from '../store/map/selectors'
import { Box, FlatList, HStack, Spacer, VStack,Text, ArrowForwardIcon, Container, Heading, Center } from 'native-base';
import MarkerIcon from '../components/MarkerIcon';
import DirectionIcon from '../components/DirectionIcon';

export default function MarkerList(props:any) {
    const markers = getMarkers();
  return (
    <Container minWidth={"100%"} minHeight={"100%"} bgColor={'blue.50'} paddingTop={5}>
            <Heading alignSelf={"center"}>My Markers</Heading>
    <FlatList data={markers} width={"100%"} renderItem={({
      item
    }) => <Box paddingLeft={5} paddingRight={5} borderBottomWidth="1" _dark={{
      borderColor: "muted.50"
    }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
            <HStack space={[2, 3]} justifyContent="space-between">
          <MarkerIcon color={item.color}/>

            <Text fontSize="lg" _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" alignSelf="flex-start">
                {item.name}
              </Text>
              <Spacer />
              <TouchableOpacity  onPress={() => props.navigation.navigate("Directions",{poi:item})}>
                <DirectionIcon/>
                </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate("Home",{poi:item,isUpdate:true})}>
              <ArrowForwardIcon size="5" mt="1" />
              </TouchableOpacity>
            </HStack>
          </Box>} keyExtractor={item => item.id} />
    </Container>
  )
}

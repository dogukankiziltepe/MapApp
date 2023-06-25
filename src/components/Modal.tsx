import { Container, Heading, Row,Text, Button  } from 'native-base'
import React from 'react'

interface ComponentProps {
    poi: any;
    setPoi: any;
    setModalVisible: any;
    isUpdate:boolean;
}

export default function Modal({poi,setPoi,setModalVisible,isUpdate}: ComponentProps) {
  return (
    <Container mt="3" position={"absolute"} paddingTop={5} paddingBottom={5} paddingLeft={5} paddingRight={5}  borderRadius={50} bottom={"10%"} backgroundColor={"white"} width={"150%"} alignSelf={"center"}>
         <Heading backgroundColor={"blue"} marginTop={0}  paddingTop={0}>
            {poi.name ? poi.name : "No Name"}
         </Heading>
         <Text mt="1" fontWeight="bold">
           Coordinates:
         </Text>
         <Text width={"100%"}>{poi.coordinate.latitude} , {poi.coordinate.longitude}</Text>
         <Row width="100%" justifyContent="space-evenly">
         <Button width="45%" backgroundColor={"green.500"} onPress={() => setModalVisible(true)}>{isUpdate ? "Update Place": "Save Place" }</Button>
          <Button width="45%" backgroundColor={"red.500"} onPress={() => setPoi(null)}>Cancel</Button>
        </Row>
       </Container>
  )
}

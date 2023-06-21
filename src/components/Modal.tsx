import { Container, Heading, Row,Text, Button  } from 'native-base'
import React from 'react'

interface ComponentProps {
    poi: any;
    setPoi: any;
    setModalVisible: any;
    isUpdate:boolean;
}

export default function Modal(props: ComponentProps) {
  return (
    <Container mt="3" position={"absolute"} paddingTop={5} paddingBottom={5} paddingLeft={5} paddingRight={5}  borderRadius={50} bottom={"10%"} backgroundColor={"white"} width={"150%"} alignSelf={"center"}>
         <Heading backgroundColor={"blue"} marginTop={0}  paddingTop={0}>
            {props.poi.name ? props.poi.name : "No Name"}
         </Heading>
         <Text mt="1" fontWeight="bold">
           Coordinates:
         </Text>
         <Text width={"100%"}>{props.poi.coordinate.latitude} , {props.poi.coordinate.longitude}</Text>
         <Row width="100%" justifyContent="space-evenly">
         <Button width="45%" backgroundColor={"green.500"} onPress={() => props.setModalVisible(true)}>{props.isUpdate ? "Update Place": "Save Place" }</Button>
          <Button width="45%" backgroundColor={"red.500"} onPress={() => props.setPoi(null)}>Cancel</Button>
        </Row>
       </Container>
  )
}

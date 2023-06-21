import { Button, Modal, FormControl, Input, WarningOutlineIcon, Container, Text } from 'native-base'
import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import { TriangleColorPicker, fromHsv } from 'react-native-color-picker';
import { HsvColor } from 'react-native-color-picker/dist/typeHelpers';
import { useDispatch } from 'react-redux';
import { addMarker, updateMarker } from '../store/map/actions';
import UserColorPicker from './ColorPicker';

export default function Form(props: any) {
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [name, setName] = useState('');
    const [color, setColor] = useState('#3d5866');
    const dispatch = useDispatch();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    console.log(props.poi,"poi")
    return (
        <Modal isOpen={props.modalVisible} onClose={() => props.setModalVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
            {props.poi !== null ? 
            <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header>New Marker</Modal.Header>

                {showColorPicker ? (
                    <Modal.Body  _scrollview={{ scrollEnabled: false }} justifyContent={"center"} alignItems={"center"} padding={0} margin={0}>
                        <UserColorPicker color={color} setColor={setColor} setShowColorPicker={setShowColorPicker} />
                    </Modal.Body>
                ) : <Modal.Body>
                    <FormControl isInvalid={name === ''} w="75%" maxW="300px">
                    <FormControl.Label color={"white"}>Name</FormControl.Label>
                    <Input placeholder="Enter Marker Name" color={"white"} onChangeText={(text) => setName(text)} />
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        Enter a valid name
                    </FormControl.ErrorMessage>
                </FormControl>
                    <FormControl isDisabled={true} w="75%" maxW="300px">
                        <FormControl.Label color={"white"}>Latitude</FormControl.Label>
                        <Text>{props.poi.coordinate.latitude}</Text>
                    </FormControl>
                    <FormControl isDisabled={true} w="75%" maxW="300px">
                        <FormControl.Label>Longitude</FormControl.Label>
                        <Text>{props.poi.coordinate.longitude}</Text>
                    </FormControl>
                    <FormControl isInvalid w="75%" maxW="300px">
                        <FormControl.Label>Color</FormControl.Label>
                        <Button backgroundColor={color} onPress={() => setShowColorPicker(true)}></Button>
                    </FormControl>
                </Modal.Body>}
            
                <Modal.Footer>
                    <Button.Group space={2}>
                        <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                            props.setModalVisible(false);
                        }}>
                            Cancel
                        </Button>
                        {!props.poi.id ? <Button onPress={() => {
                            dispatch(addMarker({
                                id: Math.random().toString(36).substr(2, 9),
                                name,
                                coordinate: {
                                    latitude: parseFloat(props.poi.coordinate.latitude),
                                    longitude: parseFloat(props.poi.coordinate.longitude)
                                },
                                color: color,
                            }))
                            props.setModalVisible(false);
                        }}>
                            Save</Button>:<Button onPress={() => {
                                dispatch(updateMarker({
                                    id: props.poi.id,
                                    name,
                                    coordinate: {
                                        latitude: parseFloat(props.poi.coordinate.latitude),
                                        longitude: parseFloat(props.poi.coordinate.longitude)
                                    },
                                    color: color,
                                }))
                            props.setModalVisible(false);
                        }}>Update</Button>}
                        
                           
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>:null}
        </Modal>
    )
}

import { Button, Modal, FormControl, Input, WarningOutlineIcon, Container, Text } from 'native-base'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addMarker, updateMarker } from '../store/map/actions';
import UserColorPicker from './ColorPicker';
import { MarkerDefaultColor } from '../assets/Colors';
import { MarkerModel } from '../store/map/types';

interface FormProps {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    poi: MarkerModel | null;
    isUpdate: boolean;
}

export default function Form({poi,isUpdate,setModalVisible,modalVisible}: FormProps) {
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [name, setName] = useState('');
    const [color, setColor] = useState(MarkerDefaultColor);
    const dispatch = useDispatch();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    return (
        <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
            {poi !== null ? 
            <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header>New Marker</Modal.Header>

                {showColorPicker ? (
                    <Modal.Body  _scrollview={{ scrollEnabled: false }} justifyContent={"center"} alignItems={"center"} padding={0} margin={0}>
                        <UserColorPicker color={color} setColor={setColor} setShowColorPicker={setShowColorPicker} />
                    </Modal.Body>
                ) : <Modal.Body>
                    <FormControl isInvalid={name === ''} w="75%" maxW="300px">
                    <FormControl.Label color={"black"}>Name</FormControl.Label>
                    <Input placeholder="Enter Marker Name" color={"black"} onChangeText={(text) => setName(text)} />
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        Enter a valid name
                    </FormControl.ErrorMessage>
                </FormControl>
                    <FormControl isDisabled={true} w="75%" maxW="300px">
                        <FormControl.Label color={"white"}>Latitude</FormControl.Label>
                        <Text>{poi.coordinate.latitude}</Text>
                    </FormControl>
                    <FormControl isDisabled={true} w="75%" maxW="300px">
                        <FormControl.Label>Longitude</FormControl.Label>
                        <Text>{poi.coordinate.longitude}</Text>
                    </FormControl>
                    <FormControl isInvalid w="75%" maxW="300px">
                        <FormControl.Label>Color</FormControl.Label>
                        <Button backgroundColor={color} onPress={() => setShowColorPicker(true)}></Button>
                    </FormControl>
                </Modal.Body>}
            
                <Modal.Footer>
                    <Button.Group space={2}>
                        <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                            setModalVisible(false);
                        }}>
                            Cancel
                        </Button>
                        {!poi.id ? <Button onPress={() => {
                            dispatch(addMarker({
                                id: Math.random().toString(36).substr(2, 9),
                                name,
                                coordinate: {
                                    latitude: poi.coordinate.latitude,
                                    longitude: poi.coordinate.longitude
                                },
                                color: color,
                            }))
                            setModalVisible(false);
                        }}>
                            Save</Button>:<Button onPress={() => {
                                dispatch(updateMarker({
                                    id: poi.id,
                                    name,
                                    coordinate: {
                                        latitude:poi.coordinate.latitude,
                                        longitude: poi.coordinate.longitude
                                    },
                                    color: color,
                                }))
                            setModalVisible(false);
                        }}>Update</Button>}
                        
                           
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>:null}
        </Modal>
    )
}

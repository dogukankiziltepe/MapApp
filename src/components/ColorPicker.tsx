import { Button, Container } from 'native-base'
import React from 'react'
import { ColorPicker, fromHsv } from 'react-native-color-picker'
import { HsvColor } from 'react-native-color-picker/dist/typeHelpers';

export interface UserColorPickerProps {
    color: string;
    setColor: (color: string) => void;
    setShowColorPicker: (show: boolean) => void;
}

export default function UserColorPicker({color,setColor,setShowColorPicker}:UserColorPickerProps) {
  return (
    <Container paddingTop={5} paddingBottom={5} zIndex={1000} >
         <ColorPicker
                    color={color}
                    onColorChange={(hsvColor: HsvColor) => setColor(fromHsv(hsvColor))}
                    style={{width: 200, height: 200,padding:0,margin:0, top:0, left:0}}
                />
                <Button bgColor={color} width={200} onPress={() => setShowColorPicker(false)}>Select</Button>
    </Container>
  )
}

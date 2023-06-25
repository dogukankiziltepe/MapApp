import { Button, Container } from 'native-base'
import React from 'react'
import { ColorPicker, fromHsv } from 'react-native-color-picker'

export default function UserColorPicker(props:any) {
  return (
    <Container  paddingTop={5} paddingBottom={5} zIndex={1000} >
         <ColorPicker
                    color={props.color}
                    onColorChange={(hsvColor: any) => props.setColor(fromHsv(hsvColor))}
                    style={{width: 200, height: 200,padding:0,margin:0, top:0, left:0}}
                />
                <Button bgColor={props.color} width={200} onPress={() => props.setShowColorPicker(false)}>Select</Button>
    </Container>
  )
}

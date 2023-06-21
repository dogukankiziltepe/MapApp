import React from 'react'
import { Icon, Center, NativeBaseProvider } from "native-base";
import { Path, G, Circle, SvgXml } from "react-native-svg";
export default function MarkerIcon(props:any) {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <svg width="800px" height="800px" viewBox="-4 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
        <title>map-marker</title>
        <desc>Created with Sketch.</desc>
        <defs>
    
    </defs>
        <g id="Vivid.JS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Vivid-Icons" transform="translate(-125.000000, -643.000000)">
                <g id="Icons" transform="translate(37.000000, 169.000000)">
                    <g id="map-marker" transform="translate(78.000000, 468.000000)">
                        <g transform="translate(10.000000, 6.000000)">
                            <path d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z" id="Shape" fill=${props.color}>
    
    </path>
                            <circle id="Oval" fill="#0C0058" fill-rule="nonzero" cx="14" cy="14" r="7">
    
    </circle>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>`
  return (
    <Icon size={"xl"} >
        <SvgXml xml={xml} width="100%" height="100%" />         
    </Icon>
  )
}

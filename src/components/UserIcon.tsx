import React from 'react'
import { Icon} from "native-base";
import {SvgXml } from "react-native-svg";
export default function UserIcon(props:any) {
    const xml = `<?xml version="1.0" encoding="iso-8859-1"?>
    <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
         viewBox="0 0 60.671 60.671" xml:space="preserve">
    <g>
        <g>
            <ellipse style="fill:#010002;" cx="30.336" cy="12.097" rx="11.997" ry="12.097"/>
            <path style="fill:#010002;" d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9
                C48.354,35.818,42.661,30.079,35.64,30.079z"/>
        </g>
    </g>
    </svg>`
  return (
    <Icon size={"xl"} >
        <SvgXml xml={xml} width="100%" height="100%" />         
    </Icon>
  )
}

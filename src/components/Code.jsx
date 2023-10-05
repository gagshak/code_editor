import React , {useContext} from 'react'
import Editor from './Editors'

import { Box ,styled } from '@mui/material'
import {DataContext} from "../context/DataProvider"

const Container = styled(Box)`
display:flex;
background:#060606;
height:50vh;
`


export default function Code() {

    const {html, setHtml, css, setCss, js, setJs} = useContext(DataContext);

  return (
    <>
    <Container>
        <Editor 
        heading = "HTML" 
        name="/" 
        color="red"
        value={html}
        onChange = {setHtml}
        />

        <Editor 
        heading = "CSS" 
        name="*" 
        color="blue"
        value={css}
        onChange={setCss}
        />

        <Editor 
        heading = "JavaScript" 
        name="()" 
        color="yellow"
        value={js}
        onChange={setJs}
        />
    </Container>
    </>
  )
}

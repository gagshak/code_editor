import React from 'react'
import {AppBar , Toolbar ,styled} from '@mui/material'
import diamond from "../icon.png";


const Container = styled(AppBar)`
    background:black;
    height: 9vh;
`


export default function Header() {
    
  return (
    <Container position='static'>
      <Toolbar>
        <img src={diamond} alt="logo" style={{"width":30}}/>
      </Toolbar>
    </Container>

  )
}

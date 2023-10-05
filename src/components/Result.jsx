import React , {useContext,useState,useEffect} from 'react'

import { Box,styled } from '@mui/material'
import { DataContext } from '../context/DataProvider'

const Container = styled(Box)`
 height:37.7vh;
`

export default function Result() {
  
  const [src,setSrc]=useState('');  
  const { html,css,js } =useContext(DataContext);


   const srcCode =`
       <html>
       <body>${html}</body>
       <style>${css}</style>
       <script>${js}</script>
       </html>
   `
 
   useEffect(()=>{
    const timeout = setTimeout(()=>{
       setSrc(srcCode);
    },1000)
    return()=>clearTimeout(timeout);
 },[html,js,css])


  return (
    <Container>
<iframe
    srcDoc={src}
    title='Output'
    sandbox='allow-script'
    // width="100%"
    height="100%"
/>
    </Container>
  )
}

import React,{useState} from 'react'
import {Box,styled} from '@mui/material'

import '../App.css'

import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as CodeMirror } from 'react-codemirror2'

// import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';


const Heading = styled(Box)`
background:#1d1e22;
display:flex;
padding:9px 12px ;
`;

const Header = styled(Box)`
display:flex;
background:#060606;
color:#AAAEBC;
justify-content:space-between;
font-weight:700;
`;

const Container = styled(Box)`
flex-grow:1;
flex-basic:0;
display:flex;
flex-direction:column;
padding:0px 8px 8px;
`

export default function Editor({name,heading,color,value,onChange}){

  const [open,setOpen] = useState(true)
  const handleChange = (editor,data,value)=>{
    onChange(value)
  }
  return (
  <Container style={open ? null : {flexGrow:0}}>
    <Header>
        <Heading>
            <Box component="span"
            style={{
                display:'flex',
                height:20,
                width:20,
                background: `${color}`, // props.color  (ye bhi chal jata bcz variable me bina '' ke likh sakte hai directly)
                placeContent: 'center',
                borderRadius:5,
                marginRight:5,
                paddingBottom:3,
                color:'black'
            }}
            >{name}</Box>
            {heading}
        </Heading>
        <CloseFullscreenIcon
        fontSize='small'
        style={{alignSelf:'center'}}
          onClick={()=>{setOpen(prevState => !prevState)}}
        />
    </Header>
   <CodeMirror 
   className='controlled-editor'
   value={value}
   onBeforeChange={handleChange}
    options={{
      theme:'material',
      lineNumbers:true
    }}
   />
  </Container>
  )
}

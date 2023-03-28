import React from "react";
import { Stack,Typography } from "@mui/material";
import all from '../assets/icons/all.png'
import arms from '../assets/icons/arms.png'
import back from '../assets/icons/back.png'
import chest   from '../assets/icons/chest.png'
import lowerLegs from '../assets/icons/lowerLegs.png'
import shoulders from '../assets/icons/shoulders.png'
import upperLegs from '../assets/icons/upperLegs.png'
import waist from '../assets/icons/waist.png'
import {Link as Scroll} from "react-scroll"

const BodyPart = ({item,bodyPart,setBodyPart}) => {
  return(
    <Scroll to='exercises' style={{textDecoration:'none'}}>
      <Stack
          type='button' 
          alignItems='center'
          justifyContent='center'
          className='bodyPart-card'
          sx={{
            borderTop:bodyPart==item?'4px solid #1d90fc':'',
            backgroundColor:'#fff',
            borderBottomLeftRadius:'20px',
            width:{xs:'200px',md:'',lg:'230px'},
            height:{xs:'190',md:'',lg:'220px'},
            cursor:'pointer',
            gap:'47px',
            borderRadius:'50px'
          }}
          onClick={()=>{
            setBodyPart(item)
            window.scrollTo({top:1800,behavior:'smooth'})
          }}
        
      >
          <img src={getBodyIcon(item)} alt='dumbbell' style={{height:'60px'}}/>
          <Typography fontSize='24px' fontWeight='bold' color='#3A1212' textTransform='capitalize'>{item}</Typography>
      </Stack>
    </Scroll>
  );
};

export default BodyPart;


const getBodyIcon=(part)=>{
  if(part.toLowerCase()=='Lower Arms'.toLowerCase()||part.toLowerCase()=='upper Arms'.toLowerCase())return arms
  if(part.toLowerCase()=='back'.toLowerCase())return back
  if(part.toLowerCase()=='chest'.toLowerCase())return chest
  if(part.toLowerCase()=='Lower Legs'.toLowerCase())return lowerLegs
  if(part.toLowerCase()=='Shoulders'.toLowerCase())return shoulders
  if(part.toLowerCase()=='Upper Legs'.toLowerCase())return upperLegs
  if(part.toLowerCase()=='Waist'.toLowerCase())return waist
  else return all
}
import React,{useState,useEffect} from "react";
import { Box,Button,Stack,Typography } from "@mui/material";
// import {Banner1,Banner2,Banner3} from '../assets/images/images'
import Banner from '../assets/images/Banner.svg'
import Person from '../assets/images/Person.png'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import LoopIcon from '@mui/icons-material/Loop';

const HeroBanner = () => {
 const [words, setWords] = useState(['Sweat',<RunCircleIcon/>]);
 const [count, setCount] = useState(0);
 let wordsArr=[['Smile',<EmojiEmotionsIcon/>],['Repeat',<LoopIcon/>],['Sweat',<RunCircleIcon/>]]

 useEffect(()=>{
  if(count>(wordsArr.length-1)) setCount(0)
  const interval=setInterval(() => {
    setWords(wordsArr[count])
    setCount((prev)=>prev+1)
  }, 6000);
  return()=>{
    clearInterval(interval)
  }
 },[count])




  return (
  <Box sx={{ mt: { lg: '150px', xs: '50px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography  fontWeight="800" sx={{ fontSize: {xs: '40px', lg: '44px'  } ,background: 'linear-gradient(90deg, #841fd2,white)',backgroundClip:'text',color:'transparent'}}>Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ color:'rgba(89,87,163,100) ',fontSize: {xs: '40px', lg: '44px'  } }} mb="23px" mt="30px" className="wrapper">
      {words[0].split("").map((item,index)=>(
        <span key={index}>{item}</span>
      ))}
      {<span style={{marginLeft:'5px'}}>{words[1]}</span>}
    </Typography>
    
    <Box sx={{position:'absolute',right: '100px',top:'0px',marginTop:'-300px' ,display:{xs:'none',lg:'flex'},justifyContent:'center',alignItems:'center' ,gap:'0px'}} >
      <img src={Person} alt="" style={{width:'150px' ,marginRight:'-520px',zIndex:'1000'}}  />
      <img src={Banner} alt="" style={{width:'900px',height:'900px'}} className='hero-banner'/>
    </Box>
    <Button  variant='contained'  href='#exercises' sx={{backgroundColor:'#841fd2',padding:'10px',display:'block',width:'fit-content'}} >
      Explore Exercises
    </Button>

    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1',background: 'linear-gradient(90deg, #841fd2,white)',backgroundClip:'text',color:'transparent', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>

  </Box>

  );
};

export default HeroBanner;



import React from "react";
import { Stack,Box,Typography } from "@mui/material";
const ExerciseVideos = ({exerciseVideos,name}) => {
  if(!exerciseVideos) return 'Loading...'
  return (
    <Box sx={{marginTop:{xs:'40px',lg:'200px'}}} p='20px'>
      <Typography  mb='33px'sx={{fontSize:{xs:'15px',md:'30px',lg:'40px'},p:'10px',background:'#18296e1c' ,width:'fit-content' ,borderRadius:'50px',boxShadow:'0 8px 32px 0 #00000017'}}>
          watch <span style={{color:'#0c559ae8' ,textTransform:'capitalize'}}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center' sx={{flexDirection:{lg:'row'},gap:{xs:'0px',lg:'110px'}}}>
        {
          exerciseVideos.slice(0,6).map((item,index)=>(
            <a 
              key={index} 
              className='exercise-video' 
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target='_blank'
              rel='noreferre' 
             
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title }  style={{borderRadius:'50px'}} />
              <Box>
                <Typography  color='#000'>
                  {item.video.title}
                </Typography>
                <Typography variant='h7' color='#000'>
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          ))
        }
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;

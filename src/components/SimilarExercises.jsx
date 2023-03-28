import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Loaders from './Loaders'
import HorizontalScrollbar from './HorizontalScrollbar'
import ExercisesCard from './ExercisesCard'
import {Link as Scroll} from "react-scroll"

const SimilarExercises = ({targetMuscleExercise,equipmentExercises}) => {

  return (
    <Box sx={{mt:{xs:'0',lg:'100px'} ,mb:'50px'}}>

      <Typography   mb='10px' sx={{fontSize:{xs:'15px',md:'30px',lg:'40px'},p:'10px',background:'#18296e1c' ,width:'fit-content' ,borderRadius:'50px',boxShadow:'0 8px 32px 0 #00000017'}}>
        Exercises that target the <span style={{color:'#0c559ae8'}}>same muscle group</span>
      </Typography>
      
      <Stack direction='row'sx={{position:'relative',width:'100%',p:'20px',boxShadow:'inset 3px 3px 15px #80808010 , 5px 2px 10px #80808020;',borderRadius:'30px'}}>
      {targetMuscleExercise.length!==0?
        <HorizontalScrollbar data={targetMuscleExercise}> 
          <ExercisesCard />
        </HorizontalScrollbar>
        :
        <Loaders/>
      }
      </Stack>
      
      <Typography  mt='100px' mb='10px' sx={{fontSize:{xs:'15px',md:'30px',lg:'40px'},p:'10px',background:'#18296e1c' ,width:'fit-content' ,borderRadius:'50px',boxShadow:'0 8px 32px 0 #00000017'}}>
        Exercises that use the <span style={{color:'#0c559ae8'}}>same equipment</span>
      </Typography>
      <Stack direction='row'sx={{position:'relative',width:'100%',p:'20px',boxShadow:'inset 3px 3px 15px #80808010 , 5px 2px 10px #80808020;',borderRadius:'30px'}}>
      {equipmentExercises.length!==0?
        <HorizontalScrollbar data={equipmentExercises}> 
          <ExercisesCard />
        </HorizontalScrollbar>
        :
        <Loaders/>
      }
      </Stack>
      
    </Box>
  );
};

export default SimilarExercises;

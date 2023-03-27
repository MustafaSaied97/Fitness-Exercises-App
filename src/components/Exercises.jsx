import React,{useState,useEffect} from "react";
import { Pagination,Box,Stack,Typography } from "@mui/material";
import { exerciseOptions,fetchData } from "../utils/fetchData";
import ExercisesCard from './ExercisesCard'
import { Link } from "react-router-dom";

const Exercises = ({exercises}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const exercisesPerPage=9
  const indexOfLastExercise=currentPage*exercisesPerPage
  const indexOfFirstExercise=indexOfLastExercise-9
  const currentExercises=exercises?.slice(indexOfFirstExercise,indexOfLastExercise)

  const paginate=(e,value)=>{
    setCurrentPage(value)
  }

  return (
    <Box 
      id="exercises" 
      sx={{mt:{lg:'110px'}}}
      mt='50px'
      p='20px'
    >
      <Typography id='ex' variant='h3' mb='46px' sx={{fontSize:{xs:'20px',md:'30px',lg:'40px'}}}>
        Showing Results
      </Typography>

      <Stack  direction='row' flexWrap='wrap' justifyContent='center' sx={{gap:{xs:'50px',lg:'110px'}}}>
        {currentExercises.map((exercise,index)=>(
          <ExercisesCard key={index} exercise={exercise} />
        ))}
      </Stack>

      <a href='#exercises' style={{textDecoration:'none'}}>
      <Stack mt='100px' alignItems='center'>
          {exercises.length > 9 && (
            <Pagination 
              color="standard" 
              shape='rounded' 
              size="large" 

              count={Math.ceil(exercises.length/exercisesPerPage)}
              
              defaultPage={1}  
              page={currentPage} 
              onChange={(e,value)=>paginate(e,value)}
            />
          )
        }  
      </Stack>
      </a>

    </Box>
  );
};

export default Exercises;

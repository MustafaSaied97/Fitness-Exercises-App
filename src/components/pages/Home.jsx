import React ,{useState} from 'react'
import { Box } from "@mui/material";
import HeroBanner from '../HeroBanner'
import SearchExercises from '../SearchExercises'
import Exercises from '../Exercises'
const Home = () => {
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises setExercises={setExercises} />
      <Exercises exercises ={exercises} />
    </Box>
  );
};

export default Home;

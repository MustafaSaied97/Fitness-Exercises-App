import React,{useState,useEffect} from "react";
import {Box,Stack,TextField,Typography,Button}from '@mui/material';
import { Search } from '@mui/icons-material';
import {exerciseOptions,fetchData} from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'
import BodyPart from "./BodyPart"
import {Link as Scroll} from "react-scroll"

const SearchExercises = ({setExercises}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([])//[]//Array(20).fill().map((item,i)=>item=i+1);
  const [bodyPart, setBodyPart] = useState('all');

  //reducing the number of requests to the server by storing some data in local storage 
  useEffect(()=>{

    //hit the server just first time and with every refresh get data from the local storage
    const fetchExerciseData=async()=>{
      try{
        const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
        setBodyParts(['all',...bodyPartsData])
        if(bodyParts.length!==0) localStorage.setItem("bodyParts",JSON.stringify(bodyParts))
      }catch (err){

      }
    }
    if(!localStorage.getItem("bodyParts")){
      fetchExerciseData()
    }else{
      setBodyParts(JSON.parse(localStorage.getItem("bodyParts")))
    }

  },[])


  useEffect(()=>{

    //hit the server the first time to get exercises that refer to bodyPart=='all' and are stored in local storage
    //after that, if bodyPart=='all' gets data from local storage and don't hit the server just hit server in case that the bodyPart !== 'all' 
 
    const fetchExerciseData= async ()=>{
      let exerciseData=[]
      if(bodyPart=='all'){
        exerciseData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
        localStorage.setItem("exercises",JSON.stringify(exerciseData))
      }else {
        exerciseData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}` , exerciseOptions)
      }
      setExercises(exerciseData)
    }


    if(!localStorage.getItem("exercises")||bodyPart!=='all'){
      fetchExerciseData()
    }else{
      setExercises(JSON.parse(localStorage.getItem("exercises")))
    }
  
  },[bodyPart])


  const handleSearch=async()=>{
    if(search){
      const exerciseData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
      const searchExercises= exerciseData.filter((exercise)=>(
        exercise.name.toLowerCase().includes(search)
        ||exercise.target.toLowerCase().includes(search)
        ||exercise.equipment.toLowerCase().includes(search)
        ||exercise.bodyPart.toLowerCase().includes(search)
      ))
      setExercises(searchExercises)
      setSearch('')
    }
  } 

  
  return (
    <Stack  justifyContent='center'  alignItems='center'  mt='200px' p='10px' position='relative' sx={{width:'100%'}}>
        <Typography  fontWeight={800} sx={{fontSize:{xs:'20px',md:'30px',lg:'44px'},width:'100%'}} mb='50px' textAlign='center'> 
          Awsome Exercise You <br/> Should Know
        </Typography>
        <Box sx={{display:'flex'}}>
          <TextField 
            sx={{
              input:{
                fontWeight:'700',
                border:'none',
                borderRadius:'0px',
                borderRadius:'10px'
              },
              width:{xs:'80%',sm:'350px',lg:'800px'},
              backgroundColor:'#fff',
            }}
            type='text'
            placeholder='Search Exercises'
            value={search}
            onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
            onKeyDown={(e)=>{e.key=="Enter"&& handleSearch()}}

          />

          <Scroll to='exercises' style={{textDecoration:'none'}}>
            <Button 
              className='search-btn'
              sx={{
                backgroundColor:'#841fd2',
                color:'#fff',
                textTransform:'none',
                width:{xs:'30%',lg:'175px'},
                fontSize:{xs:'14px',lg:'20px'},
                height:'56px',
                
              }}
              onClick={handleSearch}
            >
              Search
            </Button>
          </Scroll>

        </Box>

        <Box sx={{position:'relative',width:'100%',minWidth:'300px',p:'20px',mt:'50px' }} className='glass'>
          <HorizontalScrollbar data={bodyParts}>
            <BodyPart  bodyPart={bodyPart}  setBodyPart={setBodyPart}/> 
          </HorizontalScrollbar>
        </Box>
        
    </Stack>
  )
};

export default SearchExercises;





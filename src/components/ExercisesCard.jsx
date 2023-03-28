import React from "react";
import {Link} from 'react-router-dom'
import {Button,Stack,Typography} from '@mui/material';
import {Link as Scroll} from "react-scroll"

const ExercisesCard = ({exercise,item}) => {
   const {id,gifUrl,name,bodyPart,target}=exercise||item
  return (
    <Scroll to='detail' style={{textDecoration:'none'}}>
        <Link  className='exercise-card'  to={`/exercise/${id}` } onClick={()=>{window.scrollTo(0,0)}} >
            <img src={gifUrl} alt={name} loading='lazy'/>
            <Stack direction='row'>
                <Button sx={{color:'#fff',background: 'linear-gradient(45deg, rgba(110,108,194,0.8548669467787114) 16%, rgba(56,92,113,0.9445028011204482) 48%, rgba(3,3,17,0.7792366946778712) 94%);',ml:'21px',fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'}}>
                    {bodyPart}
                </Button>
                <Button sx={{color:'#fff',background:'#23224e',ml:'21px',fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'}}>
                    {target}
                </Button>
            </Stack>
            <Typography ml='21px' color='#000' fontWeight='bold' fontSize='22px' mt='11px' pb='10px' textTransform='capitalize'> 
                    {name}
            </Typography>

        </Link>
    </Scroll>

  );
};

export default ExercisesCard;

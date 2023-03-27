import React from "react";
import { Typography,Stack,Button } from "@mui/material";
import BodyPartImage from '../assets/icons/body-part.png'
import EquipmentImage from '../assets/icons/equipment.png'
import TargetImage from '../assets/icons/target.png'
const Detail = ({exerciseDetail}) => {
  const {gifUrl,name,bodyPart,target,equipment}=exerciseDetail
  const extraDetail=[
    {
      name:bodyPart,
      icon:BodyPartImage,
    },
    {
      name:target,
      icon:TargetImage,
    },
    {
      name:equipment,
      icon:EquipmentImage,
    },

  ]
    
  
  return (
    <Stack id='detail' gap='60px' sx={{flexDirection:{lg:'row'},p:'20px',alignItems:'center',mt:'20px'}}>
      <img src={gifUrl} alt={name} loading='lazy' className="detail-image"/>

      <Stack sx={{gap:{xs:'20px',lg:'35px'}}}>
          <Typography variant='h3'>
            {name}
          </Typography>
          <Typography variant='h6'>
            Exercises Keep you strong. <br/> {name} {` `}
            is one of the best  exercises to traget your {target}.
            it will help you to improve  your mood.
          </Typography>
          {extraDetail.map((item,indx)=>(
              <Stack key={indx}  direction='row' gap='24px' alignItems='center'>
                <Button sx={{background:'linear-gradient(45deg, rgba(121,18,231,0.1) 12%, rgba(67,20,154,0.15) 41%, rgba(3,3,17,0.05) 94%);' ,borderRadius:'50%',width:'100px',height:'100px'}}>
                  <img src={item.icon} alt={item.name} style={{width:'45px'}} />
                </Button>
                <Typography variant="h5" textTransform='capitalize'>
                  {item.name} 
                </Typography>
              </Stack>
            ))
          }
      </Stack>

     
    </Stack>
  );
};

export default Detail;

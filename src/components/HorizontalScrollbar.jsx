import React ,{useContext,Children,cloneElement,isValidElement}from "react";
import { Box, Typography } from "@mui/material";
import {ScrollMenu,VisibilityContext} from 'react-horizontal-scrolling-menu'

import PlayCircleIcon from '@mui/icons-material/PlayCircle';
const LeftArrow=()=>{
  const {scrollPrev}=useContext(VisibilityContext)
  return(
    <Typography onClick={()=>scrollPrev()} className="right-arrow" sx={{display:{xs:'none',md:'block'}}}>
      <PlayCircleIcon sx={{transform:'rotateZ(180deg)' }}/>
    </Typography>
  )
}
const RightArrow=()=>{
  const {scrollNext}=useContext(VisibilityContext)
  return(
    <Typography onClick={()=>scrollNext()} className="left-arrow" sx={{display:{xs:'none',md:'block'}}}>
      <PlayCircleIcon />
    </Typography>
  )
}
const HorizontalScrollbar = ({data,children}) => {

  return(
    <ScrollMenu RightArrow={RightArrow} LeftArrow={LeftArrow} >

      {data.map((item)=>(
        <Box
          key={item.id||item}
          itemId={item.id||item}
          title={item.id||item}
          m="0 40px"
        >
          {/* <BodyPart item={item} bodyPart={bodyPart}  setBodyPart={setBodyPart}/>   */}
          {Children.map(children,(child)=>{
            if(!isValidElement(child)) return null
            return cloneElement(child,{...child.props,item})
          })}
        </Box>
      ))

      }
     
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
 


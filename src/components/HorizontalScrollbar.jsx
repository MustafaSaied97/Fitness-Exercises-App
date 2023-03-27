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
 





// import React ,{useContext}from "react";
// import { Box, Typography } from "@mui/material";
// import {ScrollMenu,VisibilityContext} from 'react-horizontal-scrolling-menu'
// import BodyPart from "./BodyPart"
// import RigthArrowIcon from "../assets/icons/right-arrow.png"
// import LeftArrowIcon from "../assets/icons/left-arrow.png"

// const LeftArrow=()=>{
//   const {scrollPrev}=useContext(VisibilityContext)
//   return(
//     <Typography onClick={()=>scrollPrev()} className="right-arrow">
//       <img src={LeftArrowIcon} alt="right-arrow" />
//     </Typography>
//   )
// }
// const RightArrow=()=>{
//   const {scrollNext}=useContext(VisibilityContext)
//   return(
//     <Typography onClick={()=>scrollNext()} className="left-arrow">
//       <img src={RigthArrowIcon} alt="right-arrow" />
//     </Typography>
//   )
// }
// const HorizontalScrollbar = ({bodyParts,bodyPart,setBodyPart}) => {

//   return(
//     <ScrollMenu RightArrow={RightArrow} LeftArrow={LeftArrow} >

//       {bodyParts.map((item)=>(
//         <Box
//           key={item.id||item}
//           itemId={item.id||item}
//           title={item.id||item}
//           m="0 40px"
//         >

//           <BodyPart item={item} bodyPart={bodyPart}  setBodyPart={setBodyPart}/>


//         </Box>
//       ))

//       }
     
//     </ScrollMenu>
//   );
// };

// export default HorizontalScrollbar;
 
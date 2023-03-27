import React from "react";
import {Link, NavLink} from "react-router-dom"
import { Button, Stack } from "@mui/material";

import Logo from '../assets/images/Logo.png'
const NavBar = () => {
  return (
      <Stack direction='row' justifyContent='space-around' sx={{gap:{xs:'40px',sm:'122px'}, mt:{xs:'20px',sm:'32px'},justifyContent:'none',px:'20px'}}>

        <Link to="/">
          <img src={Logo} alt="logo" style={{width:'58px',height:'58px',margin:'0 20px'}} />
        </Link>
        
        <Stack direction='row' alignItems='flex-end' gap='40px' fontSize='24px'>
          <NavLink to='/' style={{textDecoration:'none',color:'#3A1212',borderBottom:'1px solid blue'}} ><Button sx={{background:'#7373eb12'}}>Home</Button></NavLink>
          <NavLink to='/exercise/0001'style={{textDecoration:'none',color:'#3A1212',borderBottom:'1px solid blue'}} ><Button sx={{background:'#7373eb12'}}>Exercise</Button></NavLink>
        </Stack>

      </Stack>
  );
};

export default NavBar;


// <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
// <Link to="/">
//   <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
// </Link>
// <Stack
//   direction="row"
//   gap="40px"
//   fontFamily="Alegreya"
//   fontSize="24px"
//   alignItems="flex-end"
// >
//   <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
//   <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
// </Stack>
// </Stack>


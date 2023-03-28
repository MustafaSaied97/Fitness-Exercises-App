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


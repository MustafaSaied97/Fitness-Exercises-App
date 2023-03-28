import React from "react";
import {Box,Stack,Typography}from '@mui/material';
import Logo from '../assets/images/Logo.png'

const Footer = () => {
  return(
    <Box mt='80px' bgcolor='#7373eb12' mb='30px'>
      <Stack gap='40px' direction='row' justifyContent='space-around' alignItems='center' px='40px' >
        <img src={Logo} alt="logo"  height='50px' />
        <Typography fontSize='20px' fontWeight='bold' sx={{background: 'linear-gradient(90deg, #841fd2,#3d9dda)',backgroundClip:'text',color:'transparent'}}>Ftintess Exercises</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;

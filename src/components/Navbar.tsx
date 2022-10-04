import * as React from 'react';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <Box id="navbar-box" sx={{ width: '100vw', height: '3rem', bgcolor: 'white', display: "flex", justifyContent: 'space-between' }}>
      <IconButton aria-label="open drawer"> <MenuIcon /> </IconButton>
      <img src={"/src/assets/empty.png"} alt={"Header Graphic"} style={{ width: 40, height: 40, marginTop: 'auto', marginBottom: 'auto'}} />  
    </Box>
  );
}
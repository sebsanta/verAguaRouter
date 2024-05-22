import { useState } from "react";
import {
    AppBar,
    Button,
    Drawer,
    IconButton,
    Toolbar,
    Typography,
  } from "@mui/material";
  import { Link } from 'react-router-dom';
  
  import MenuIcon from "@mui/icons-material/Menu";
  import NavListDrawer from "./NavListDrawer";
  

  
  export default function Navbar({navlinks}) {
    const [open, setOpen] = useState(false);

  
    return (
      <>
        <AppBar position="fixed" color="transparent" navlinks={navlinks} >
          <Toolbar>
            <IconButton
              color="primary"
              size="small"
              edge="start"
              aria-label="menu"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{ flexGrow: 2 }}
              color='white'
            >
              Inicio
            </Typography>
            <Button color="primary" href="/informacion">Información</Button>
            <Button color="primary" href="/login">Login</Button>
          </Toolbar>
        </AppBar>
  
        <Drawer
          anchor="left"
          open={open}
          onClose={() => setOpen(false)}
        >
          <NavListDrawer onClick={() => setOpen(false)} navlinks={navlinks}/>
        </Drawer>
      </>
    );
  }

//export default Navbar;
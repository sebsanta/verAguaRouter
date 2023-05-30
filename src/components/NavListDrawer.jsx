import {
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import { createTheme, ThemeProvider } from '@mui/material/styles';

  import GpsFixedIcon from '@mui/icons-material/GpsFixed';
  import InvertColorsIcon from '@mui/icons-material/InvertColors';
  import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
  

  const theme = createTheme({
    palette: {
      primary: {
        // color blanco con toque de gris
        main: '#E0E6E4',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });

  const mainList = [
    {
      text: "Locaciones",
      icon: <GpsFixedIcon color="primary"/>,
      href: "/Locaciones",
      
    },
    {
      text: "Tratamiento agua",
      icon: <InvertColorsIcon color="primary" />,
      href: "/Tratamiento",
    },
    {
        text: "Aparato de medición",
        icon: <AutoFixHighIcon color="primary"/>,
        href: "/Aparato",
      },
  ];
  
  const secondaryList = [
  
    {
      text: "Información",
      href: "/Informacion",
    },
    {
      text: "Inicio",
      href: "/",
    },
  ];


const NavListDrawer = ({ onClick, navlink }) => {
    return(
       
    <Box sx={{ width: 250, bgcolor: "#2f2c2c" }}
         onClick={onClick}>
      <ThemeProvider theme={theme}>
      <nav aria-label="main mailbox folders">
      <Typography variant="h5" textAlign="center" color="primary">Datos Muestras</Typography>
        <List>
          {mainList.map((item) => (
            <ListItem
              disablePadding
              key={item.text}
              style={{color:"white"}}
            >
              <ListItemButton
                href={item.href}
                component="a"
                style={{color:"action"}}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary trash spam">
        <List>
          {secondaryList.map((item) => (
            <ListItem
              disablePadding
              key={item.text}
              style={{color:"white"}}
            >
              <ListItemButton
                component="a"
                href={item.href}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
      </ThemeProvider>
    </Box>  
    )
}

export default NavListDrawer;
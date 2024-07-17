import { Typography, Button, Container, Grid, Drawer } from "@mui/material"
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useState } from "react";
import Navbar from "./components/Navbar";
import NavListDrawer from "./components/NavListDrawer";
import { Routes, Route } from 'react-router-dom'
import Login from "./components/login/Login";
import Inicio from "./components/inicio/Inicio";
import Tratamiento from "./components/tratamiento/Tratamiento";
import Aparato from "./components/aparato/Aparato";
import Informacion from "./components/informacion/Informacion";
import Locaciones from "./components/locaciones/Locaciones";
import Graficos from "./components/grafico/Graficos";

const navlinks = [
  {
      title:"Inicio",
      path: "/",
  },
  {
      title:"Login",
      path:"/Login"
  },
  {
      title:"Tratamiento",
      path:"/Tratamiento"
  },
  {
      title:"Aparato",
      path:"/Aparato"
  },
  {
      title:"Información",
      path:"/Información"
  },
  {
      title:"Graficos",
      path:"/Graficos"
  }

]

const App = () => {

  const [open, setOpen] = useState(false);
return(
  <Container>
    <Navbar navLinks={navlinks}></Navbar>
    <Drawer
     anchor="left"
     open={open}
     onClose={() => setOpen(false)}
    >
    <NavListDrawer onClick={() => setOpen(false)} />
    </Drawer>
    <Grid container spacing={4}>
        {/* <Grid
          item
          xs={12}
          sm={6}
          md={4}
        >
          <p style={{color: 'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was popularised in 
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including 
            versions of Lorem Ipsum.</p>
          </Grid>
          <Grid
          item
          xs={12}
          sm={6}
          md={4}
          >
          <p style={{color:"white"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was popularised in 
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including 
            versions of Lorem Ipsum.</p>
          </Grid>
          <Grid
          item
          xs={12}
          sm={6}
          md={4}
          >
          <p style={{color:'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was popularised in 
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including 
            versions of Lorem Ipsum.</p>
          </Grid> */}
        {/* <Typography variant="h1" color="primary">Hola mundo</Typography>
        <Typography variant="h4" color="secondary" >secundario</Typography>
        <Button variant="contained" color="primary">Botón</Button>
        <Button variant="contained" color="success" startIcon={<AddAPhotoIcon/>}>Add Photo</Button> */}
      </Grid>
      <Routes>
        <Route exact path="/" element={<Inicio/>}> </Route>
        <Route exact path="/login" element={<Login/>}> </Route>
        <Route exact path="/tratamiento" element={<Tratamiento/>}> </Route>
        <Route exact path="/aparato" element={<Aparato/>}> </Route>
        <Route exact path="/informacion" element={<Informacion/>}></Route>
        <Route exact path="/locaciones" element={<Locaciones/>}></Route>
        <Route exact path="/graficos" element={<Graficos/>}></Route>
      </Routes>
  </Container>
)
}

export default App

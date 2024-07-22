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
import Footer from "./components/footer/Footer";

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
  <div>
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
  <Footer />
  </div>
  
)
}

export default App

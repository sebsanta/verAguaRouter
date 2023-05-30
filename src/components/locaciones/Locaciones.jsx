import React, { useEffect } from 'react';
import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where, QuerySnapshot } from "firebase/firestore";
import { db } from '../../firebase';
import {Typography, Grid } from "@mui/material"


import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const Locaciones = () => {

    const [tar, setTar] = React.useState([])
  

useEffect(() => {
    const obtenerDatosAgua = async () => {
        try {
            const dataRef = collection(db, 'Locaciones');
            const querySnapshot = await getDocs(query(dataRef));
            const dataDB = querySnapshot.docs.map((doc) => doc.data());
            setTar(dataDB)
           } catch (error) {
           console.log(error)
         }
    
      }

      obtenerDatosAgua()
}, [])

    return(

        <div className="container-fluid mt-8">
        <br/>
        <br/>
        <h2 className="font-weight-light" style={{color: "white"}}>Registro de medición de calidad del agua</h2>
        <hr/>        
        <Grid item 
             xs={12}
             sm={6}
             md={4} >
   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Región</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="left">Comuna</StyledTableCell>
            <StyledTableCell align="left">Dirección</StyledTableCell>
            <StyledTableCell align="left">Descripción</StyledTableCell>
            <StyledTableCell align="left">Dureza (PPM)</StyledTableCell>
            <StyledTableCell align="left">Fecha toma</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tar.map((item, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="right">{item.region}</StyledTableCell>
              <StyledTableCell align="left">{item.comuna}</StyledTableCell>
              <StyledTableCell align="left">{item.name}</StyledTableCell>
              <StyledTableCell align="left">{item.adress}</StyledTableCell>
              <StyledTableCell align="left">{item.description}</StyledTableCell>
              <StyledTableCell align="left">{item.ppm}</StyledTableCell>
              <StyledTableCell align="left">{new Date(item.createAt.seconds * 1000).toLocaleDateString("en-US")}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
  

         {/* <br/>
        <br/>
        <br/>
        <hr/>
        <h2 classNameName="font-weight-light" style={{color: "white"}}>Registro de medidor de calidad del agua</h2>
    <hr/>
    <div classNameName="row">
      <div classNameName="col-md-8">
        <table className="table table-responsive">
        <thead>
                  <tr className="">
                    <th className="text-left " style={{color: "white"}}>Región</th>
                    <th className="text-left " style={{color: "white"}}>Comuna</th>
                    <th className="text-left " style={{color: "white"}}>Dirección</th>
                    <th className="text-left " style={{color: "white"}}>Descripción de la muestra</th>
                    <th className="text-left " style={{color: "white"}}>PPM</th>
                    <th className="text-left " style={{color: "white"}}>Fecha</th>
                  </tr>
                </thead>
          <tbody>
          {
            tar.map((item, index) => (
              <tr className="active" key={index}>
                <td style={{color: "white"}}>
                  {item.region}   
                </td>
                <td style={{color: "white"}}>
                  {item.name}     
                </td>
                <td style={{color: "white"}}>
                   {item.adress}  
                </td>
                <td style={{color: "white"}}>
                   {item.description}  
                </td>
                <td style={{color: "white"}}>
                   {item.ppm}      
                </td>
                  <td style={{color: "white"}}>
                    {new Date(item.createAt.seconds * 1000).toLocaleDateString("en-US")}
                  </td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </div>  */}

<footer >
  <div className="text-center p-3" >
    <br/>
       <Typography style={{color: "white"}} align="center"> © 2023 Copyright </Typography> 
    <br/>
  </div>
</footer>
  </div>
    )
}

export default Locaciones;
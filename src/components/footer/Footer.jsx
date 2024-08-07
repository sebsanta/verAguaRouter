import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Mantente conectado con nosotros mediante nuestras redes sociales:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a> */}
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/lab-seeds.appspot.com/o/imagenes%2Flogo.png?alt=media&token=6133f755-c220-4710-a258-7e3cd8c330b2"></img>
                </div>
                <br></br>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                3TDSLabs
              </h6>
              <p>
                Somos  una empresa de investigación e ingeniería que se dedica a experimentar
                con tecnología y realizar la trazabilidad georeferencial de toma de muestras.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Productos</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Diseño web
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Talleres con Arduino
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Aplicación nativa toma de muestras
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Dispositivos lectura TDS
                </a>
              </p>
            </MDBCol>

            {/* <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol> */}

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Santiago, Chile
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                3TDSLabs@gmail.com
              </p>
              {/* <p>
                <MDBIcon icon="phone" className="me-3" /> 
              </p> */}
              {/* <p>
                <MDBIcon icon="print" className="me-3" /> 
              </p> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright 
        <a className='text-reset fw-bold' href=''>
           : 3TDSLabs.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
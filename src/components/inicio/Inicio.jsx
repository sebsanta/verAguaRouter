import * as React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { MDBCarousel, 
        MDBCarouselItem, 
        MDBCarouselCaption,
        MDBCard,
        MDBCardTitle,
        MDBCardText,
        MDBCardBody,
        MDBCardImage,
        MDBRow,
        MDBCol } from 'mdb-react-ui-kit';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { grey, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


//grid
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Inicio() {

    const [expanded, setExpanded] = React.useState(false);
    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);


    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const handleExpandClick1 = () => {
      setExpanded1(!expanded1);
    };
    const handleExpandClick2 = () => {
      setExpanded2(!expanded2);
    };

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
  <Container>
      <Typography variant="h3" color="white"  gutterBottom>
        # Proyecto de trazabilidad de toma de muestras.
      </Typography>
      </Container>
  <hr className="hr hr-blurry" />
  <br></br>
  <Container>
  <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Toma de muestras de agua.</h5>
          <p>Con el uso de la App puedes georeferenciar y capturar el proceso de toma de muestras.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Aplicación diseñada para Android e iOS.</h5>
          <p>Aplicación diseñada en React-Native utilizando Expo y sus componentes basados en JavaScript</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Se pude tomar muestras en cualquier lugar con tu dispositivo móvil</h5>
          <p>Aplicación diseñada para tomar muestras, georeferenciarlas y agregar descripción con fotografía.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
    </Container>
    <br></br>
  <br></br>
  <hr className="hr hr-blurry" />
<Container>
      <section class="text-center">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-5 mb-md-5 mb-lg-0 position-relative">
            <i className="fas fa-pen-alt fa-3x text-primary mb-4"></i>
            <h4 className="text-primary fw-bold mb-3">50+ lecturas</h4>
            <h6 className="fw-normal mb-0 text-secondary">Lecturas TDS de calidad del agua</h6>
            <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5 mb-md-5 mb-lg-0 position-relative">
            <i className="fas fa-chart-line fa-3x text-primary mb-4"></i>
            <h4 className="text-primary fw-bold mb-3">Gráficos</h4>
            <h6 className="fw-normal mb-0 text-secondary">Gráficos de toma de muestras por región</h6>
            <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5 mb-md-0 position-relative">
            <i className="fas fa-image fa-3x text-primary mb-4"></i>
            <h4 className="text-primary fw-bold mb-3">100+</h4>
            <h6 className="fw-normal mb-0 text-secondary">Imágenes de la toma de muestras</h6>
            {/* <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div> */}
          </div>
          {/* <div className="col-lg-3 col-md-6 mb-5 mb-md-0 position-relative">
            <i className="fas fa-plug fa-3x text-primary mb-4"></i>
            <h5 className="text-primary fw-bold mb-3">28</h5>
            <h6 className="fw-normal mb-0">Plugins</h6>
          </div> */}
        </div>
      </section>
</Container>
 <CssBaseline />
    <Container maxWidth=""  className="container-fluid mt-8" >
    {/* <Card sx={{ maxWidth: 1200 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image="https://paulogalarza.com/wp-content/uploads/2024/01/Expo.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          # React-Native Expo
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Para realizar este proyecto se crea una App en React-Native con Expo, diseñada para que tenga compatibilidad
          tanto en Android e iOS. Al utilizar la plataforma Expo para construir esta aplicación que cosiste básicamente en un framework que permite construir
          aplicaciones nativas tanto para Android, iOS y Web-App. Al utilizar este framework se dispone de una cantidad de herramientas y servicios 
          construidos en base de React-Native que en todos los casos los componentes se basan en el lenguaje JavaScript / TypeScript. 
        </Typography>
        <Typography paragraph># Funcionalidades</Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          En este caso la aplicación fue diseñada para registrar toma de muestras de laboratorio, representando una transformación digital de un formulario 
          desde lo análogo que es realizarlo con lápiz y papel a realizarlo completamente digital en un dispositio móvil.
          Esta aplicación, dentro de sus funcionalidades permite guardar las locaciones en que se realizan las toma de muestras mediante la georeferenciación, 
          lo que se permite mediante el uso de la api de google asociada a google-maps registrar las coordenadas del lugar en que se toma la muestra. 
          También para el apoyo del registro se utiliza la incorporación de un componente que permite guardar fotografías que describen la toma de la muestra, 
          representando una capa extra de verificación y respaldo de la lectura que se registra en la aplicación.
        </Typography>
        <CardMedia
             component="img"
             height="194"
             image="src/assets//maps.jpeg"
             alt="Toma de muestras"
          />
      </CardContent>
    </Card> */}
    <hr className="hr hr-blurry" />
    <br></br>
<Container>
      <MDBCard className='mb-3'>
      <MDBCardImage position='top' src='https://firebasestorage.googleapis.com/v0/b/lab-seeds.appspot.com/o/imagenes%2Fapp_image.jpeg?alt=media&token=3ae05813-46cb-4da8-a359-48083007763e' alt='...' />
        <MDBCardBody>
        <hr className="hr hr-blurry" />
        <br></br>
          <MDBCardTitle>Imágenes de la aplicación con lecturas TDS</MDBCardTitle>
          <MDBCardText>
            Esta apicación permite generar un formulario con la información de la muestra, 
            con la geolocalización de la muestra tomada e imágenes que acompañan la evidencia de la toma de muestra.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Imágenes de la aplicación realizada con Expo</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
</Container>

    <hr className="hr hr-blurry" />
    {/* <Typography variant="h4" color="white"  gutterBottom>
        # Imágenes de aplicación con lecturas de lápiz TDS.
      </Typography>
    <ImageList sx={{ width: "maxWidth", height:950, marginBottom:-25 }} cols={5} rowHeight={200} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="eager"
          />
        </ImageListItem>
      ))}
    </ImageList> */}
    </Container>
   <div>
  <div>
    <Container>
    <br></br>
    <Typography variant="h4" color="white"  gutterBottom paragraph>
        # Proceso de toma de muestras y dispositivos utilizados.
    </Typography>
      <br></br>
      </Container>
  <Container>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>
    <Grid item sm={4}>
    <Card sm={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
            T
          </Avatar>
        }
        title="Toma de muestra con medidor Xiaomi TDS"
        subheader="Miércoles 24 marzo, 2021"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://firebasestorage.googleapis.com/v0/b/lab-seeds.appspot.com/o/imagenes%2Fcrear_muestra.jpeg?alt=media&token=6eb90156-6830-4879-9693-0948bf70581d"
        alt="Toma de muestras"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          En esta sección se puede apreciar la toma de muestra de agua
          de una determinada ubicación. El formulario permite ingresar 
          datos de la muestra tales como Región, Comuna, Dirección, 
          Geolocalización, valor que entrega aparato de medición en PPM, 
          comentario sobre la toma de la muestra y sus respectivas fotos.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Toma de muestras:</Typography>
          <Typography paragraph>
            El usuario debe tomar el lapiz medidor de pureza de agua y verificar que 
            esté con pilas el dispositivo. Una vez verificado se procede a realizar la 
            toma de muestras.
          </Typography>
          <br></br>
          <Typography paragraph>
            Una vez que está el aparato listo para usarse, se procede a tomar la lectura
            del agua que se ingresa en un recipiente. Luego el aparato se calibra automáticamente
            y registra el valor PPM que tiene la muestra.
          </Typography>
          <br></br>
          <CardMedia
             component="img"
             height="196"
             image="https://firebasestorage.googleapis.com/v0/b/lab-seeds.appspot.com/o/imagenes%2Fmuestra_agua2.jpeg?alt=media&token=99c7a14f-ed88-46cb-995b-8849287cdc69"
             alt="Toma de muestras"
          />
          <br></br>
          <Typography paragraph>
           Una vez que el usuario ve la lectura del medidor TDS, procede a igresar a la aplicación
           y navegar hasta el inicio de sesión o la creació de un usuario.
          </Typography>
          <br></br>
          <CardMedia
             component="img"
             height="680"
             image="https://firebasestorage.googleapis.com/v0/b/lab-seeds.appspot.com/o/imagenes%2Fcrear_perfil.jpeg?alt=media&token=99157615-fb39-42fc-9261-016a5c16c8b8"
             alt="Toma de muestras"
          />
          <br></br>
          <Typography>
            Una vez que el usuario se crea un perfil o accede a su cuenta, procede a registrar la muestra
            en la aplicación. Esta aplicación consta de un formulario de ingreso de datos, fotos y 
            geolocalización. 
          </Typography>
          <br></br>
          <CardMedia
             component="img"
             height="680"
             image="https://firebasestorage.googleapis.com/v0/b/lab-seeds.appspot.com/o/imagenes%2Fcrear_muestra2.jpeg?alt=media&token=6b3b3869-34d1-4d65-9ca4-981c741e4d56"
             alt="Toma de muestras"
          />
          <br></br>
           <CardMedia
             component="img"
             height="680"
             image="https://firebasestorage.googleapis.com/v0/b/lab-seeds.appspot.com/o/imagenes%2Fgps.jpeg?alt=media&token=7001bec2-f710-4b30-abc3-442fdb441dd8"
             alt="Toma de muestras"
          />
           <br></br>
          <Typography>
            Una vez registrada la toma de muestras, se procede a ir al listado y detalle de los datos ingresados
            y corroborar que los datos están correctos. Para esto se va al inicio donde se listan las mediciones 
            registradas, ordenadas por fecha de toma de muestra.
          </Typography>
          <br></br>
           <CardMedia
             component="img"
             height="680"
             image="https://firebasestorage.googleapis.com/v0/b/lab-seeds.appspot.com/o/imagenes%2Flistado_muestras.jpeg?alt=media&token=13ae4bd6-8a97-492f-9d12-0d985d3c2223"
             alt="Toma de muestras"
          />
        </CardContent>
      </Collapse>
    </Card>
  </Grid>
  <Grid item sm={4}>
  <Card sm={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
            D
          </Avatar>
        }
        title="Dispositivos utilizados para toma de muestras"
        subheader="Martes 09 Julio, 2024"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://firebasestorage.googleapis.com/v0/b/lab-seeds.appspot.com/o/imagenes%2Ftds1.png?alt=media&token=cbb7dcf8-738d-4451-8b8d-e556288fdcf6"
        alt="Toma de muestras"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          En esta sección se muestran los dispositivos con los 
          cuales se realiza la toma de muestra de agua. Dentro de ellos
          se encuentran dispositivos con forma de lápiz que son alimentados por 
          baterías. Estos poseen sensores que miden la dureza en PPM, presencia 
          de metales pesados y compuestos orgánicos iónicos.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded1}
          onClick={handleExpandClick1}
          aria-expanded={expanded1}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded1} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Dispositivos:</Typography>
          <Typography paragraph>
            Los dispositivos utilizados para la toma de muestras corresponden a varios tipos. 
            En algunos casos se utiliza el medidor TDS de Xiaomi, que mide dureza del agua, 
            presencia de metales pesados y compuestos orgánicos. En otros casos se utilizan
            lápices que solo miden dureza del agua.
          </Typography>
          <br></br>
          <Typography paragraph>
            Todos los métodos de medición se hacen de casi la misma forma, ya que para hacer la 
            medición, se debe introducir el lápiz en un recipiente que contenga el líquido a medir.
          </Typography>
          <br></br>
          <CardMedia
             component="img"
             height="300"
             image="https://firebasestorage.googleapis.com/v0/b/lab-seeds.appspot.com/o/imagenes%2Ftds5.jpeg?alt=media&token=6ef5aa5f-516a-46b6-badb-05aa63348cce"
             alt="Toma de muestras"
          />
          <br></br>
          <Typography paragraph>
           Los tipos de lectura que pueden hacer estos dipositivos son variados. Están los tipos de 
           lectura de agua potable para uso doméstico, control de la dureza del agua en acuarios y piscinas.
           También en pruebas de laboratorio para medir que el agua tenga pocos iones o se encuentre lo 
           suficientemente apta para realizar análisis. 
          </Typography>
          <br></br>
          <CardMedia
             component="img"
             height="300"
             image="https://firebasestorage.googleapis.com/v0/b/lab-seeds.appspot.com/o/imagenes%2Ftds3.png?alt=media&token=9321549c-7134-4d7a-812b-e405af651b86"
             alt="Toma de muestras"
          />
          <br></br>
          <Typography>
            Estos dispositivos están compuestos por un sensor que mide la calidad del agua, baterías y una pantalla 
            LCD que indica la cantidad de PPM de sustancias disueltas en el líquido que se desea medir. Cuando el lector
            indica un valor por sobre 1000 PPM, quiere decir que el agua no es apta para el consumo a menos que se le haga
            el debido tratamiento.
          </Typography>
          <br></br>
          <CardMedia
             component="img"
             height="360"
             image="https://firebasestorage.googleapis.com/v0/b/lab-seeds.appspot.com/o/imagenes%2Ftds2.png?alt=media&token=403f4bf5-aa54-4c17-bfdc-a54e1b790d6b"
             alt="Toma de muestras"
          />
          <br></br>
        </CardContent>
      </Collapse>
    </Card>
  </Grid>
  <Grid item sm={4}>
  <Card sm={{ maxWidth: 350 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
            C
          </Avatar>
        }
        title="Creación de una App para registro de toma de muestras"
        subheader="Martes 16 Julio, 2024"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://firebasestorage.googleapis.com/v0/b/lab-seeds.appspot.com/o/imagenes%2FExpo.png?alt=media&token=cd07143c-8616-49dd-a7e1-a01667a22e1f"
        alt="Toma de muestras"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          El framework utilizado para llevar a cabo la aplicación corresponde 
          a Expo. Este framework trabaja con los componentes y funcionalidades
          en torno a React-Native.
          Estos componentes se encuentran desarrollados en JavaScript, que 
          permite desarrollar aplicaciones nativas tanto para Android como iOS. 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded2}
          onClick={handleExpandClick2}
          aria-expanded={expanded2}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded2} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Desarrollo:</Typography>
          <Typography paragraph>
            Al ir desarrollando la aplicación se tiene que determinar que componentes va a llevar
            para satisfacer las necesidades de geolocalización, guardado de fotos y la creación de 
            formularios. Para esto se utiliza Expo que contiene componentes de React-Native que se 
            pueden utilizar para generar aplicaciones rápidamente
          </Typography>
          <br></br>
          <Typography paragraph>
            Para llevar a cabo esta aplicación, se utiliza principalmente Visual Studio Code para 
            el desarrollo de la aplicación. Como base de datos se utiliza Firebase con Firestore 
            para el guardado de fotos y formularios.
          </Typography>
          <br></br>
          <CardMedia
             component="img"
             height="200"
             image="https://firebasestorage.googleapis.com/v0/b/lab-seeds.appspot.com/o/imagenes%2FFirebase_Log2.jpg?alt=media&token=35e29dd3-3764-4a51-84e9-7d8df6dc88bc"
             alt="Toma de muestras"
          />
          <br></br>
          <Typography paragraph>
           Para las fuentes, íconos y componentes a utilizar en la aplicación se utilizan principalmente
           las de Material UI, las que permiten un anvance rápido en la creación de objetos que tengan un
           diseño apto para la vista final de la aplicación. Estos componentes tienen características únicas
           que facilitan el avance de la creación de la aplicación.
          </Typography>
          <br></br>
          <CardMedia
             component="img"
             height="190"
             image="https://firebasestorage.googleapis.com/v0/b/lab-seeds.appspot.com/o/imagenes%2Fmaterial_ui.png?alt=media&token=e53aa7c3-5d8e-4132-9434-56f729272004"
             alt="Toma de muestras"
          />
          <br></br>
          <Typography>
            Dentro de las apis que se consumen desde proveedores externos, se tiene la api de google maps. Esta
            Api, se configura de tal forma en que cuando se ingresa una determinada muestra, esta debe ser 
            georeferenciada. Para esto se suscribe a google maps y se integra la api al proyecto modificando 
            las propiedades en la estructura de la aplicación.
          </Typography>
          <br></br>
          <CardMedia
             component="img"
             height="800"
             image="https://firebasestorage.googleapis.com/v0/b/lab-seeds.appspot.com/o/imagenes%2Fgps.jpeg?alt=media&token=7001bec2-f710-4b30-abc3-442fdb441dd8"
             alt="Toma de muestras"
          />
          <br></br>
        </CardContent>
      </Collapse>
    </Card>
  </Grid>
</Grid>
<br></br>
<br></br>
<br></br>

</Container>
  </div>
    </div>

 </div>
    )
}

const itemData = [
    {
      img: 'src/assets/listado_muestras.jpeg',
      title: 'Breakfast',
    },
    {
      img: 'src/assets/crear_muestra.jpeg',
      title: 'Burger',
    },
    {
      img: 'src/assets/gps.jpeg',
      title: 'Camera',
    },
    {
      img: 'src/assets/crear_perfil.jpeg',
      title: 'Hats',
    },
    {
        img: 'src/assets/crear_muestra2.jpeg',
        title: '0',
      },
    {
        img: 'src/assets/muestra_agua.jpeg',
        title: 'Coffee',
    },
    {
        img: 'src/assets/muestra_agua2.jpeg',
        title: '1',
    },
    {
        img: 'src/assets/muestra_agua3.jpeg',
        title: '2',
    },
    {
        img: 'src/assets/muestra_agua4.jpeg',
        title: '3',
    },
    {
        img: 'src/assets/muestra_agua5.jpeg',
        title: '4',
    },
  ];


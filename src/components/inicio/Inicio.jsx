import * as React from "react";
import CssBaseline from '@mui/material/CssBaseline';
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

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Container>
      <Typography variant="h1" color="white"  gutterBottom>
        # Proyecto de trazabilidad de calidad de aguas.
      </Typography>
      </Container>
  <br></br>
  <br></br>

 <CssBaseline />
    <Container maxWidth=""  className="container-fluid mt-8" >
    <Card sx={{ maxWidth: 1200 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image="dist/assets/Expo.png"
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
             image="dist/assets/maps.jpeg"
             alt="Toma de muestras"
          />
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    <br></br>
    <br></br>
    <Typography variant="h4" color="white"  gutterBottom>
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
    </ImageList>
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
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 345 }}>
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
        image="dist/assets/muestra_agua.jpeg"
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
             height="194"
             image="dist/assets/muestra_agua.jpeg"
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
             image="dist/assets/crear_perfil.jpeg"
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
             image="dist/assets/crear_muestra.jpeg"
             alt="Toma de muestras"
          />
          <br></br>
           <CardMedia
             component="img"
             height="680"
             image="dist/assets/gps.jpeg"
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
             image="dist/assets/listado_muestras.jpeg"
             alt="Toma de muestras"
          />
        </CardContent>
      </Collapse>
    </Card>
  </Grid>
  <Grid item xs={4}>
  <Card sx={{ maxWidth: 345 }}>
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
        image="dist/assets/tds3.jpeg"
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
             image="dist/assets/tds5.jpeg"
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
             image="dist/assets/tds1.jpeg"
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
             image="dist/assets/tds2.jpeg"
             alt="Toma de muestras"
          />
          <br></br>
        </CardContent>
      </Collapse>
    </Card>
  </Grid>
  <Grid item xs={4}>
  <Card sx={{ maxWidth: 345 }}>
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
        image="dist/assets/expo.png"
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
             image="dist/assets/Firebase_Log2.jpg"
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
             image="dist/assets/material_ui.png"
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
             height="700"
             image="dist/assets/gps.jpeg"
             alt="Toma de muestras"
          />
          <br></br>
        </CardContent>
      </Collapse>
    </Card>
  </Grid>
</Grid>
</Container>
  </div>
    </div>
    <footer >
  <div className="text-center p-3" >
    <br/>
       <Typography style={{color: "white"}} align="center"> © 2024 Copyright </Typography> 
    <br/>
  </div>
</footer>
 </div>
    )
}

const itemData = [
    {
      img: 'dist/assets/listado_muestras.jpeg',
      title: 'Breakfast',
    },
    {
      img: 'dist/assets/crear_muestra.jpeg',
      title: 'Burger',
    },
    {
      img: 'dist/assets/gps.jpeg',
      title: 'Camera',
    },
    {
      img: 'dist/assets/crear_perfil.jpeg',
      title: 'Hats',
    },
    {
        img: 'dist/assets/crear_muestra2.jpeg',
        title: '0',
      },
    {
        img: 'dist/assets/muestra_agua.jpeg',
        title: 'Coffee',
    },
    {
        img: 'dist/assets/muestra_agua2.jpeg',
        title: '1',
    },
    {
        img: 'dist/assets/muestra_agua3.jpeg',
        title: '2',
    },
    {
        img: 'dist/assets/muestra_agua5.jpeg',
        title: '3',
    },
    {
        img: 'dist/assets/muestra_agua6.jpeg',
        title: '4',
    },
  ];


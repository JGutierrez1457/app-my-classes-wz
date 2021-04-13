import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button, Modal,Grid, Container, IconButton, CardHeader} from '@material-ui/core'
import React,{ useState} from 'react'
import CloseIcon from '@material-ui/icons/Close'
import useStyle from './styles';

function CardClasses({classItem}) {
    const classes = useStyle();
    const [openZoom, setOpenZoom] = useState(false);
    const handleClose = ()=>{
        setOpenZoom(false);
    }
    const handleOpen = ()=>{
        setOpenZoom(true);
    }
    const viewZoom = (
<Container style={{ width:'80%',marginTop:50,padding:0}}>
    <Grid container justify='center'>
        <Grid item sm={12} xs={12} style={{width:'100%'}}>
        <Card >
            <CardHeader title={classItem.title}
                action={
                    <IconButton onClick={handleClose}>
                        <CloseIcon/>
                    </IconButton>
                }
            />
                <CardMedia title={classItem.title} image={classItem.image} className={classes.zoomImageClass} />
        </Card>
        </Grid>
    </Grid>
</Container>
    )
   
    return (
        <>
        <Card>
            <CardActionArea onClick={handleOpen} >
               <CardMedia image ={classItem.image}
                    title={classItem.title} className={classes.imageClass} /> 
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant='h5'  component='h2'>
                    {classItem.title}
                </Typography>
                <Typography variant='body1' color='textSecondary' component='p'>#{classItem.nameWeapon}</Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                   <b>Owner:</b> {classItem.owner}
                    {' '}
                   <b>Mode:</b> {classItem.mode}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small' color='primary'>
                    {classItem.creator}
                </Button>
            </CardActions>
        </Card>
        <Modal open={openZoom} onClose={handleClose} >
            {viewZoom}
        </Modal>
        </>
    )
}

export default CardClasses

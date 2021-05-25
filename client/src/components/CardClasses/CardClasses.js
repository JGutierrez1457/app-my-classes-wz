import {
    Card, CardActionArea, CardActions, CardContent, CardMedia, Typography,
    Button, Modal, Grid, Container, IconButton, CardHeader, useMediaQuery, useTheme, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Avatar, Divider
} from '@material-ui/core'
import { SpeedDial, SpeedDialAction } from '@material-ui/lab'
import React, { useEffect, useRef, useState } from 'react'
import CloseIcon from '@material-ui/icons/Close'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import useStyle from './styles';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'

function CardClasses({ classItem, onClickDelete, setIdClassEdit,onClickLike, isOwn, showPrivacity }) {
    let API_URL='';
if(process.env.NODE_ENV!=='production'){
    API_URL=process.env.REACT_APP_API_URL;
}
    const classes = useStyle();
    const [openZoom, setOpenZoom] = useState(false);
    const [hiddeSpeedDial, setHiddeSpeedDial] = useState(true);
    const [openSpeedDial, setOpenSpeedDial] = useState(false);
    const [openDialogDelete, setOpenDialogDelete] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState('');
    const [trueConfirmDelete, setTrueConfirmDelete] = useState(true);

    const theme = useTheme();
    const myRef = useRef();
    const history = useHistory();
    const small = useMediaQuery(theme.breakpoints.down('xs'));
    const token = useSelector(state => state.auth?.authData?.token)
    const user = useSelector(state => state.auth?.authData?.result);

    useEffect(() => {
        if (small) {
            setHiddeSpeedDial(false)
        }
    }, [small])
    const handleCloseZoom = () => {
        setOpenZoom(false);
    }
    const handleOpenZoom = () => {
        setOpenZoom(true);
    }
    const handleOpenSpeedDial = () => {
        setOpenSpeedDial(true)
    }
    const handleCloseSpeedDial = () => {
        setOpenSpeedDial(false)
    }
    const handleHiddeSpeedDial = (mouseE) => () => {
        if (small) return
        setHiddeSpeedDial(mouseE)
    }
    const handleClickOpenDialogDelete = () => {
        setOpenDialogDelete(true);
    }
    const handleClickCloseDialogDelete = () => {
        setOpenDialogDelete(false);
    }
    const handleDisabledButtonDelete = (value) => {
        if (value === classItem.title) {
            setTrueConfirmDelete(false)
            return
        }
        setTrueConfirmDelete(true)
    }
    const onChangeInputDelete = (e) => {
        setConfirmDelete(e.target.value);
        handleDisabledButtonDelete(e.target.value)
    }
    const handleDeleteClass = () => {
        onClickDelete(classItem._id);
        handleClickCloseDialogDelete();
    }
    const handleClickLike = ()=>{
        onClickLike(classItem._id);
    }

    const viewZoom = (
        <Container style={{ width: '80%', marginTop: 50, padding: 0 }}>
            <Grid container justify='center'>
                <Grid item sm={12} xs={12} style={{ width: '100%' }}>
                    <Card >
                        <CardHeader title={classItem.title}
                            action={
                                <IconButton onClick={handleCloseZoom}>
                                    <CloseIcon />
                                </IconButton>
                            }
                        />
                        <CardMedia title={classItem.title} image={API_URL+'/'+classItem.image.path} className={classes.zoomImageClass} />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
    return (
        <>
            <Card style={{ position: 'relative' }} >
                <div
                    onMouseLeave={handleHiddeSpeedDial(true)}
                    onMouseMove={handleHiddeSpeedDial(false)}
                >
                    <CardActionArea onClick={handleOpenZoom} innerRef={myRef}>
                        <CardMedia image={API_URL+'/'+classItem.image.path}
                            title={classItem.title} className={classes.imageClass} />
                    </CardActionArea>
                    {token && <SpeedDial className={classes.moreHoriz}
                        ariaLabel="Speedial for edit and delete class"
                        icon={<MoreHorizIcon />}
                        hidden={hiddeSpeedDial}
                        direction='down'
                        open={openSpeedDial}
                        onOpen={handleOpenSpeedDial}
                        onClose={handleCloseSpeedDial}
                    >
                        {isOwn && <SpeedDialAction key='edit'
                            icon={<EditIcon />}
                            tooltipTitle='Edit'
                            tooltipOpen={true}
                            onFocus={() => myRef.current.focus()}//For Fix AutoFocus to Fab with ESC
                            onClick={() => { setIdClassEdit(classItem._id); history.push('/editclass') }}
                        />
                        }
                        {isOwn && <SpeedDialAction key='delete'
                            icon={<DeleteIcon />}
                            tooltipTitle='Delete'
                            tooltipOpen={true}
                            onClick={handleClickOpenDialogDelete}
                            onFocus={() => myRef.current.focus()}//For Fix AutoFocus to Fab with ESC
                        />
                        }
                        {!isOwn && <SpeedDialAction key='report'
                            icon={<ReportProblemIcon />}
                            tooltipTitle='Report'
                            tooltipOpen={true}
                            onClick={() => alert('Reporting')}
                            onFocus={() => myRef.current.focus()}//For Fix AutoFocus to Fab with ESC
                        />
                        }
                    </SpeedDial>}
                </div>
                <Dialog open={openDialogDelete} onClose={handleClickCloseDialogDelete} >
                    <DialogTitle id="form-dialog-title">Delete Class</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please type <b>{classItem.title}</b> to Confirm
                            </DialogContentText>
                        <TextField autoFocus
                            margin="dense"
                            id="title"
                            label="Class Title"
                            type="text"
                            fullWidth
                            onChange={onChangeInputDelete}
                            value={confirmDelete}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button color="secondary"
                            variant="contained"
                            fullWidth
                            disabled={trueConfirmDelete}
                            onClick={handleDeleteClass}
                        >
                            Accept
                        </Button>
                    </DialogActions>
                </Dialog>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                        {classItem.title}
                        {' '}
                        {showPrivacity ? (classItem.public ? <VisibilityIcon fontSize='small' /> : <VisibilityOffIcon fontSize='small' />) : <></>}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        <b>Owner:</b> {classItem.owner}
                        {' '}
                        <b>Mode:</b> {classItem.mode}
                        {' '}
                        <b>Weapon:</b> {classItem.nameWeapon}
                    </Typography>
                </CardContent>
                {classItem.likes.length?
                <>
                <div className={classes.likeCount}>
                <Typography variant='body2'>
                    {classItem.likes.length}
                </Typography>
                    <img src={process.env.PUBLIC_URL+'/like/icon.png'} alt='icon-like' className={classes.likeSmallIcon} />
                </div>
                </>:<></>  
                }
                <Divider />
                <CardActions className={classes.classActions}>
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                        <IconButton  className={classes.avatarButton}>
                        <Avatar
                            className={classes.avatarCreator}
                            alt={classItem.creator.username}
                            src={classItem.creator.avatar}
                            component={Link}
                            to='/'
                            title={classItem.creator.username}
                        />
                        <Typography variant='h6' className={classes.avatarNameCreator}>{classItem.creator.username}</Typography>
                        </IconButton>
                        </Grid>
                        <Grid item xs={6}>
                        <IconButton onClick={handleClickLike} disabled={user?false:true} className={classes.likeButton}>
                            {classItem.likes.findIndex( users => users === user?._id)!==-1 ?
                            (
                            <>
                            <ThumbUpAltIcon /> 
                            <Typography variant='body2' style={{color:'#2196f3',fontWeight:'700'}} >Like</Typography>
                            </>
                            )
                            :(
                            <>
                            <ThumbUpAltOutlinedIcon />
                            <Typography variant='body2' >Like</Typography>
                            </>
                            )
                            }
                            
                        </IconButton>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
            <Modal open={openZoom} onClose={handleCloseZoom} >
                {viewZoom}
            </Modal>
        </>
    )
}

export default CardClasses

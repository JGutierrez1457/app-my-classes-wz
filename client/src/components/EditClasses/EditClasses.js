import React, { useState } from 'react'
import {  useSelector} from 'react-redux';
import { Paper,Typography,TextField,Button, CardMedia } from '@material-ui/core'
import FileBase from 'react-file-base64'
import useStyle from './styles'
import { useHistory } from 'react-router';
import SearchWeapon from '../SearchWeapon/SearchWeapon';


function EditClasses({setIdClassEdit,idClassEdit,onClickUpdate}) {
    const classesItems = useSelector( state => state.classes);
    const [editClass, setEditClass ] = useState(classesItems.find( c => c._id===idClassEdit));
    const classes = useStyle();
    const history = useHistory();
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        onClickUpdate(idClassEdit,editClass);
        handleCancel();
    }
    const setNameWeapon = (name)=>{
        setEditClass({...editClass,nameWeapon:name})
    }
    const clearEditClass=()=>{
        setEditClass(null);
        setIdClassEdit(null);
    }
    const handleCancel=()=>{
        clearEditClass();
        history.push('/myclasses');
    }

    return (
        <Paper elevation={6} className={classes.paper}>
            <form className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit} >
                <Typography variant='h6'>Editing {editClass.title}</Typography>
                <TextField value={editClass.title} label='Title' onChange={(e)=>setEditClass({...editClass,title:e.target.value})} fullWidth/>
                <SearchWeapon getNameWeapon={setNameWeapon} name={editClass.nameWeapon}/>
                <TextField value={editClass.owner} label='Class Owner' onChange={(e)=>setEditClass({...editClass,owner:e.target.value})} fullWidth />
                <TextField value={editClass.mode} label='Game Mode' onChange={(e)=>setEditClass({...editClass,mode:e.target.value})} fullWidth />
                <FileBase type='file' multiple={false} onDone={({base64})=>setEditClass({...editClass,image:base64})} />
                <CardMedia image={editClass.image} title={editClass.title} className={classes.mediaCard}/>
                <Button className={classes.buttonAccept} variant='contained' color='primary' type='submit' size='large' fullWidth>Accept</Button>
                <Button variant='contained' color='secondary' size='small' onClick={handleCancel} fullWidth>Cancel</Button>
            </form>
        </Paper>
    )
}

export default EditClasses

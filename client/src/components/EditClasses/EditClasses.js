import React, { useState } from 'react'
import {  useSelector} from 'react-redux';
import { Paper,Typography,TextField,Button, CardMedia,FormControl, InputLabel, Select,MenuItem, LinearProgress } from '@material-ui/core'
import FileBase from 'react-file-base64'
import useStyle from './styles'
import { useHistory } from 'react-router';
import SearchWeapon from '../SearchWeapon/SearchWeapon';

function ScrollTop({children}){
    const handleScrollTop = ()=>{
        const anchor = document.querySelector('#title-edit');
        if(anchor){
            anchor.scrollIntoView({behavior:'smooth', block:'center'})
        }
    }
    return (
        <div onClick={handleScrollTop} style={{width:'100%'}}>
        {children}
        </div>
    )
}

function EditClasses({setIdClassEdit,idClassEdit,onClickUpdate}) {
    const classesItems = useSelector( state => state.myclasses);
    const [editClass, setEditClass ] = useState(classesItems.find( c => c._id===idClassEdit));
    const [showProgress, setShowProgress] = useState(false);
    const classes = useStyle();
    const history = useHistory();
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        setShowProgress(true);
        onClickUpdate(idClassEdit,editClass).then().finally(()=>handleCancel());
        
    }
    
    const setNameWeapon = (name)=>{
        setEditClass({...editClass,nameWeapon:name})
    }
    const clearEditClass=()=>{
        setEditClass({ title:'',nameWeapon:'',owner:'',mode:'',image:'',public:''});
        setIdClassEdit(null);
    }
    const handleCancel=()=>{
        setShowProgress(false);
        clearEditClass();
        history.push('/');
    }

    return (
        <>
        {showProgress && <LinearProgress id='title-edit' className={classes.linearProgress}/>}
        <Paper elevation={6} className={classes.paper}>
            <form className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit} >
                <Typography id='title-edit' variant='h6'>Editing {editClass.title}</Typography>
                <TextField value={editClass.title} label='Title' onChange={(e)=>setEditClass({...editClass,title:e.target.value})} fullWidth/>
                <SearchWeapon getNameWeapon={setNameWeapon} name={editClass.nameWeapon}/>
                <FormControl fullWidth>
                    <InputLabel id='privacity'>Class Privacity</InputLabel>
                    <Select
                        labelId='privacity'
                        value={editClass.public}
                        onChange={(e)=>setEditClass({...editClass,public:e.target.value})}
                    >
                        <MenuItem key='public' value={true} >Public</MenuItem>
                        <MenuItem key='private' value={false}>Private</MenuItem>
                    </Select>
                </FormControl>
                <TextField value={editClass.owner} label='Class Owner' onChange={(e)=>setEditClass({...editClass,owner:e.target.value})} fullWidth />
                <TextField value={editClass.mode} label='Game Mode' onChange={(e)=>setEditClass({...editClass,mode:e.target.value})} fullWidth />
                <FileBase type='file' multiple={false} onDone={({base64})=>setEditClass({...editClass,image:base64})} />
                {editClass.image&&<CardMedia image={editClass.image} title={editClass.title} className={classes.mediaCard}/>}
                <ScrollTop>
                    <Button variant='contained' color='primary' type='submit' size='large' className={classes.buttonAccept} fullWidth>Accept</Button>
                </ScrollTop>
                <Button variant='contained' color='secondary' size='small' onClick={handleCancel} fullWidth>Cancel</Button>
            </form>
        </Paper>
        </>
    )
}
export default EditClasses

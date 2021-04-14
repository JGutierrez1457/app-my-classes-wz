import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'
import useStyle from './styles'
import { useHistory } from 'react-router-dom'
import SearchWeapon from '../SearchWeapon/SearchWeapon'

function AddClasses({onSubmit}) {
    const classes = useStyle();
    const history = useHistory();
    const [postData, setPostData] = useState({
        title:'',nameWeapon:'',creator:'JG',owner:'',mode:'',image:''
    })
    const handleSubmit =(e)=>{
        e.preventDefault();
        onSubmit(postData);
        handleCancel()
    }
    const clear = ()=>{
        setPostData({
            title:'',nameWeapon:'',creator:'JG',owner:'',mode:'',image:''
        })
    }
    const setNameWeapon = (name)=>{
        setPostData({...postData,nameWeapon:name})
    }
    const handleCancel= ()=>{
       clear();
       history.push('/')
    }
    return (
        <Paper elevation={6} className={classes.paper}>
            <form className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>Add a Class for Warzone</Typography>
                <TextField name='title' variant='outlined' label='Title' fullWidth onChange={(e)=>setPostData({...postData,title:e.target.value})} value={postData.title}/>
                {/*<TextField name='nameWeapon' variant='outlined' label='Name of Weapon' onChange={(e)=>setPostData({...postData,nameWeapon:e.target.value})} value={postData.nameWeapon} fullWidth/> */}
                <SearchWeapon getNameWeapon={setNameWeapon}/>
                <TextField name='owner' variant='outlined' label='Owner of class' onChange={e=>setPostData({...postData,owner:e.target.value})} value={postData.owner} fullWidth/>
                <TextField name='mode' variant='outlined' label='Mode of Game' onChange={e=>setPostData({...postData,mode:e.target.value})} value={postData.mode}  fullWidth/>
                <FileBase type='file' multiple={false} onDone={({base64})=>setPostData({...postData,image:base64})} />
                <Button className={classes.buttonAccept} variant='contained' color='primary' size='large' type='submit' fullWidth>Accept</Button>
                <Button variant='contained' color='secondary' size='small' fullWidth onClick={handleCancel}>Cancel</Button>
            </form>
        </Paper>
    )
}

export default AddClasses

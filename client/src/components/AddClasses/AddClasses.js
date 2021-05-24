import React, { useState } from 'react'
import { TextField, Button, Typography, Paper, CardMedia, FormControl, InputLabel, Select, MenuItem, IconButton } from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image';
import useStyle from './styles'
import { useHistory } from 'react-router-dom'
import SearchWeapon from '../SearchWeapon/SearchWeapon'

function AddClasses({onSubmit}) {
    const classes = useStyle();
    const history = useHistory();
    const [postData, setPostData] = useState({
        title:'',nameWeapon:'',owner:'',mode:'',image:'',public:''
    })
    const handleSubmit =(e)=>{
        e.preventDefault();
        onSubmit(postData).finally(()=>handleCancel());
    }
    const clear = ()=>{
        setPostData({
            title:'',nameWeapon:'',owner:'',mode:'',image:'',public:''
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
                <TextField required name='title' variant='outlined' label='Title' fullWidth onChange={(e)=>setPostData({...postData,title:e.target.value})} value={postData.title}/>
                <SearchWeapon getNameWeapon={setNameWeapon}/>
                <FormControl fullWidth>
                    <InputLabel id='privacity'>Class Privacity</InputLabel>
                    <Select
                        labelId='privacity'
                        value={postData.public}
                        onChange={(e)=>setPostData({...postData,public:e.target.value})}
                        required
                    >
                        <MenuItem key='public' value={true} >Public</MenuItem>
                        <MenuItem key='private' value={false}>Private</MenuItem>
                    </Select>
                </FormControl>
                <TextField required name='owner' variant='outlined' label='Owner of class' onChange={e=>setPostData({...postData,owner:e.target.value})} value={postData.owner} fullWidth/>
                <TextField required name='mode' variant='outlined' label='Mode of Game' onChange={e=>setPostData({...postData,mode:e.target.value})} value={postData.mode}  fullWidth/>
                <input required name='image' id='file' type='file' onChange={e=>setPostData({...postData,image:e.target.files[0]})} hidden/>
                   <label htmlFor='file' >
                       <IconButton component='span' size='small' style={{borderRadius:'0%'}}>
                            {postData.image?.name || 'Upload a Image'}
                            
                           <ImageIcon style={{marginLeft:'8px'}} />
                       </IconButton>
                   </label>
                {postData.image&&<CardMedia image={URL.createObjectURL(postData.image)} title={postData.title} className={classes.mediaCard} />}
                <Button className={classes.buttonAccept} variant='contained' color='primary' size='large' type='submit' fullWidth>Accept</Button>
                <Button variant='contained' color='secondary' size='small' fullWidth onClick={handleCancel}>Cancel</Button>
            </form>
        </Paper>
    )
}

export default AddClasses

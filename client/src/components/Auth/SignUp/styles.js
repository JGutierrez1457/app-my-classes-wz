import { makeStyles } from '@material-ui/core/styles'
export default makeStyles((theme)=>({
    paper:{
        padding:theme.spacing(4,4),
        margin:theme.spacing(2,20),
    },
    form:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
    },DataAvatar:{
        display:'flex',
        flexWrap:'nowrap',
        justifyContent:'space-between',
        width:'100%',
        marginBottom:'20px'

    },avatarMedia:{
        height:'100%',
        width:'20%',
        backgroundSize: '100% 100%'
    },fileAvatar:{
        display:'flex',
        direction:'column',
        flexWrap:'wrap',
        justifyContent:'center'
        
    },
    root:{
        '& .MuiTextField-root':{
            margin: theme.spacing(2)
        },
        '& .MuiButton-root':{
            margin: theme.spacing(1,2)
        },
        
    },
    confirmPassword:{
        '& .MuiFormHelperText-root':{
            color:'green'
        }
    }
}))
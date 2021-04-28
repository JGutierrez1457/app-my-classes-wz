import { makeStyles } from '@material-ui/core/styles'
export default makeStyles((theme)=>({
    paper:{
        padding:theme.spacing(4,8),
        margin:theme.spacing(2,14),
        [theme.breakpoints.down('xs')]:{
            margin:theme.spacing(2,1),
            padding:theme.spacing(4,2),

        }
    },
    form:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        width:'100%',
    },
    DataAvatar:{
        display:'flex',
        flexWrap:'nowrap',
        justifyContent:'space-between',
        width:'100%',
        marginBottom:theme.spacing(1),
        [theme.breakpoints.down('xs')]:{
            flexDirection:'column'
        }

    },
    username:{
        flexGrow:1
    },
    fileAvatar:{
        flexGrow:1,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        width:'50%',
        height:'100px',
        [theme.breakpoints.down('xs')]:{
            width:'100%'
        }
    }
    ,avatarMedia:{
        width:'100px',
        height:'100%',
        backgroundSize: '100% 100%',
        
        
    },avatarFile:{
        display:'flex',
        marginTop:theme.spacing(1),
        justifyContent:'center',
        '& input':
        {
            width:'100%',
            [theme.breakpoints.down('xs')]:{
                width:'75%'
            }
        }
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
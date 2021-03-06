import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme)=>({
    paper:{
        padding:theme.spacing(4,4),
        margin:theme.spacing(2,40),
        [theme.breakpoints.down('xs')]:{
            margin:theme.spacing(2,3)
        }
    },
    form:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
    },
    root:{
        '& .MuiTextField-root':{
            margin: theme.spacing(2)
        },
        '& .MuiButton-root':{
            margin: theme.spacing(1,2)
        }
    },
    
}))
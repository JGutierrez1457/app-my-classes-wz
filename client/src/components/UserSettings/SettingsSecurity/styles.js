import { makeStyles} from '@material-ui/core/styles'
export default makeStyles((theme)=>({
    paper:{
        padding:theme.spacing(2,5),
        [theme.breakpoints.down('xs')]:{
            padding:theme.spacing(2,3),
        },
        '& .MuiButtonBase-root':{
            display:'block',
            margin:'0 auto'
        }
    },
    formInput:{
        display:'flex',
        flexFlow:'column nowrap',
        justifyContent:'space-between',
        padding:theme.spacing(2),
        '& .MuiTextField-root':{
            margin:theme.spacing(1,1)
        },
        [theme.breakpoints.down('xs')]:{
           padding:theme.spacing(1),
      
        }
    },
    snackBar:{
        [theme.breakpoints.down('xs')]:{
            bottom:200
        }
    }
}))
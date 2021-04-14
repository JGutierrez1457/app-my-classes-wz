import { makeStyles} from '@material-ui/core/styles'
export default makeStyles((theme)=>({
    paper:{
        padding:theme.spacing(4),
        margin:theme.spacing(0,20)
    },
    form:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center'
    },
    root:{
        '& .MuiTextField-root':{
            margin: theme.spacing(2)
        }
    },
    buttonAccept:{
        margin:theme.spacing(2,0)
    },
    [theme.breakpoints.down('xs')]:{
        paper:{
            margin:theme.spacing(1,2)
        }
    }
}))
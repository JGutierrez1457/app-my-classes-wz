import { makeStyles} from '@material-ui/core/styles'
export default makeStyles((theme)=>({
    paper:{
        padding:theme.spacing(2,5),
        '& .MuiButtonBase-root':{
            display:'block',
            margin:'0 auto'
        }
    },
    dialog:{
        '& .MuiPaper-root':{
            width:theme.spacing(65)
        }
    }
}))
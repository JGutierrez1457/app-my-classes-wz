import { makeStyles} from '@material-ui/core/styles'
export default makeStyles((theme)=>({
    paper:{
        padding:theme.spacing(2,5),
        '& .MuiButtonBase-root':{
            display:'block',
            margin:'0 auto'
        }
    },
    formInput:{
        display:'flex',
        flexWrap:'nowrap',
        justifyContent:'space-between',
        padding:theme.spacing(2),
        [theme.breakpoints.down('xs')]:{
         flexFlow:'column nowrap',
           height:'220px',       
        }
    },
}))
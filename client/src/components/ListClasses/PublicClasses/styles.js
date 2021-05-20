import { makeStyles } from '@material-ui/core/styles'
export default makeStyles((theme)=>({
    fab:{
        bottom:theme.spacing(2),
        right:theme.spacing(2),
        position:'fixed'
    },
    body:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
    },
    linearProgress:{
        margin:theme.spacing(4,0)
    }
}))
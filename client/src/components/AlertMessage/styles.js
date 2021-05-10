import {makeStyles} from '@material-ui/core/styles'
export default makeStyles((theme)=>({
    snackBar:{
        [theme.breakpoints.down('xs')]:{
            bottom:200
        }
    }

}))
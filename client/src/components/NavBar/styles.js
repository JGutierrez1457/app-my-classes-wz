import {  makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme)=>({
    toolbar:{
        display:'flex',flexDirection:'row', justifyContent:'space-between'
    },
    [theme.breakpoints.down('xs')]:{
        toolTitle:{
            textTransform:'none'
        }
    }
}))
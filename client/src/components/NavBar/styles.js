import { indigo } from '@material-ui/core/colors';
import {  makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme)=>({
    toolbar:{
        display:'flex',flexDirection:'row', justifyContent:'space-between'
    },
    profile:{
        display:'flex',
        justifyContent:'space-between',
    },
    white:{
        color: theme.palette.getContrastText(indigo[50]),
        backgroundColor: indigo[50],
        marginRight:theme.spacing(1)
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        fontSize:'1.20rem',
    },
    [theme.breakpoints.down('xs')]:{
        toolTitle:{
            textTransform:'none'
        }
    }
}))
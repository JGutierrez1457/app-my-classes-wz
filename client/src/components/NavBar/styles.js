import { indigo, } from '@material-ui/core/colors';
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
        width:theme.spacing(3),
        height:theme.spacing(3),
        color: theme.palette.getContrastText(indigo[50]),
        backgroundColor: indigo[50],
        marginRight:theme.spacing(1)
    },
    arrow:{
      width:theme.spacing(1),
      height:theme.spacing(0.5),
      display:'block',
      fontSize:'1.5rem',
      flexShrink:0,
      userSelect:'none',
      fill:'white',
      marginLeft:theme.spacing(14)
    },
    menuUser:{
        borderRadius:'0%',
        padding:theme.spacing(0)
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
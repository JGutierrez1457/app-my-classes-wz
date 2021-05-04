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
    imageAvatar:{
        width:theme.spacing(4),
        height:theme.spacing(4),
        color: theme.palette.getContrastText(indigo[50]),
        backgroundColor: indigo[50],
        marginRight:theme.spacing(1)
    },
    arrow:{
      width:theme.spacing(1),
      height:theme.spacing(0.5),
      display:'block',
      position:'absolute',
      fontSize:'1.5rem',
      flexShrink:0,
      userSelect:'none',
      fill:'white',
    },
    paper: {
        maxWidth: 400,
        overflow: 'auto',
        marginTop: '0.5em',
      }
    ,
    userMenu:{
        flexDirection:'column',
        cursor:'default',
        '&:hover':{
            backgroundColor: 'transparent'
          }
    },
    poper:{
        zIndex: 1,
        '&[x-placement*="bottom"] $spanArrow': {
          top: 0,
          left: 0,
          marginTop: '0.1em',
          width: '3em',
          height: '1em',
          '&::before': {
            borderWidth: '0 1em 1em 1em',
            borderColor: `transparent transparent ${theme.palette.background.paper} transparent`,
          }}
    },
    spanArrow:{
        position: 'absolute',
        fontSize: 7,
        width: '3em',
        height: '3em',
         '&::before': {
            content: '""',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
        }
    }
    ,
    menuUser:{
        borderRadius:'0%',
        padding:theme.spacing(0)
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        fontSize:'1.20rem',
    },
    toolTitle:{
            textTransform:'none'
        }
    
}))
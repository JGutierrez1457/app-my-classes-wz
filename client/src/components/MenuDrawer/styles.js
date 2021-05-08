import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme)=>({
    menuList:{
        '& .MuiSvgIcon-root':{
            marginRight : theme.spacing(2)
        }
    },
    userAvatar:{
        flexDirection:'column',
        justifyContent:'center'
    },
    drawer:{
        '& .MuiPaper-root':{
            backgroundColor: theme.palette.primary.main,
            color:'#fff',
        }
    },
    buttonSignout:{
        textTransform:'none'
    },
    avatar:{
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginBottom: theme.spacing(1)
    }
}))
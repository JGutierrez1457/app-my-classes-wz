import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme)=>({
    menuList:{
        '& .MuiSvgIcon-root':{
            marginRight : theme.spacing(2)
        }
    },
    toolbar:{
        display:'flex',flexDirection:'row', justifyContent:'space-between'
    },
    offset: theme.mixins.toolbar,
    [theme.breakpoints.down('xs')]:{
        toolTitle:{
            textTransform:'none'
        }
    }
}))
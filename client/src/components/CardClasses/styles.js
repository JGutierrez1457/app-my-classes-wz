import { makeStyles} from '@material-ui/core/styles'
import { indigo } from '@material-ui/core/colors';

export default makeStyles((theme)=>({
imageClass:{
    width:'100%',
    height:200,
    backgroundSize: '100% 100%'
},
zoomImageClass:{
    width:'100%',
    height:500,
    backgroundSize: '100% 100%'
},avatarCreator:{
    width: theme.spacing(3),
    height: theme.spacing(3),
    backgroundColor: indigo[100],
    marginRight: theme.spacing(1),
    alignContent:'center'
},avatarNameCreator:{
    fontSize:'1rem'
},containerAvatar:{
    display:'flex',
    justifyContent:'flex-start',
},
moreHoriz:{
  position:'absolute',
  top:'4px',
  right:'0px',
  color:'white',
'& .MuiFab-root':{
    width:'30px',
    height:'30px',
    minHeight:'30px'
}
},
[theme.breakpoints.down('xs')]:{
    zoomImageClass:{
        height:200
    },
}
}))
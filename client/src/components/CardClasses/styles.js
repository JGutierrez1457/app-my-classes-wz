import { makeStyles} from '@material-ui/core/styles'
import { blue, indigo } from '@material-ui/core/colors';

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
likeCount:{
    padding:theme.spacing(0.5,2),
    display:'flex',
    justifyContent:'flex-end'
},
likeSmallIcon:{
    height:20,
    width:20,
    marginLeft:theme.spacing(1)
}
,
classActions:{
    justifyContent: 'center',
    padding:theme.spacing(0),
    height:theme.spacing(5),
    '& .MuiButtonBase-root':{
        borderRadius:'0%',
        padding:theme.spacing(0),
        width:'100%',
        height:'100%'
    },
    '& .MuiGrid-container':{
        height:'100%'
    }
},
avatarButton:{
},
likeButton:{
    '& .MuiSvgIcon-root':{
        color:blue[500]
    }
},
[theme.breakpoints.down('xs')]:{
    zoomImageClass:{
        height:200
    },
}
}))
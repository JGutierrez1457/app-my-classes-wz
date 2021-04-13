import { makeStyles} from '@material-ui/core/styles'
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
},
[theme.breakpoints.down('xs')]:{
    zoomImageClass:{
        height:200
    }

}
}))
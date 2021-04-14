import { makeStyles } from '@material-ui/core/styles'
export default makeStyles((theme)=>({
    gridContainer:{
        marginLeft:'8px',
        marginRight:'8px',
        alignItems:'stretch',
        justifyContent:'space-evenly'
    },
    cardMedia:{
        height:'150px',
        width:'100%',
        backgroundSize: '100% 100%'
    },
    formControl:{
        width:'100%'
    },
    [theme.breakpoints.down('xs')]:{
        gridContainer:{
            flexDirection:'column-reverse',
        },
        cardMedia:{
            width:'200px',
        }
    }
}))
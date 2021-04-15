import React, { useState } from 'react'
import { FormControl, InputLabel, Select, MenuItem, Grid, CardMedia, Card} from '@material-ui/core'
import namesWeapons from '../../constants/nameWeapons';
import useStyle from './styles';

function SearchWeapon({getNameWeapon,name}) {
    const classes = useStyle();
    const [nameWeapon, setNameWeapon] = useState(name?name:'');
    const handleImage = (name)=>{
        return namesWeapons.find( nw => nw.name === name).image;
    }
    const [imageWeapon, setImageWeapon] = useState(name?handleImage(name):'default.png');
    const handleChange = (e)=>{
        setNameWeapon(e.target.value);
        setImageWeapon(handleImage(e.target.value));
        getNameWeapon(e.target.value);
    }
    
    
    return (
        <Grid container  alignItems='center' spacing={4} className={classes.gridContainer}>
            <Grid item sm={5} >
        <FormControl className={classes.formControl}>
            <InputLabel id="nameWeapon">Name Weapon</InputLabel>
            <Select 
                labelId="nameWeapon" 
                value={nameWeapon}
                onChange={handleChange}
                >
                    {namesWeapons.map( nw =>(<MenuItem key={nw.name} value={nw.name}>{nw.name}</MenuItem>))}
                <MenuItem></MenuItem>
            </Select>
        </FormControl>
            </Grid>
            <Grid item sm={5}>
           <Card>
                    <CardMedia image={process.env.PUBLIC_URL+'/weapons/'+imageWeapon} className={classes.cardMedia}/>
           </Card>
               
            </Grid>
        </Grid>
    )
}

export default SearchWeapon

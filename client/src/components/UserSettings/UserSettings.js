import React from 'react'
import {Link, BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import { Divider, Grid, MenuItem, Paper } from '@material-ui/core'
import CSettingsProfile from '../../containers/User/CSettingsProfile'
import CSettingsEmail from '../../containers/User/CSettingsEmail'
import CSettingsSecurity from '../../containers/User/CSettingsSecurity'
import CSettingsAccount from '../../containers/User/CSettingsAccount'

function UserSettings() {
    return (
            <Router>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <Paper >
                        <MenuItem component={Link} to ='/settings/profile'>Profile</MenuItem>
                        <Divider/>
                        <MenuItem component={Link} to ='/settings/account'>Account</MenuItem>
                        <Divider/>
                        <MenuItem component={Link} to ='/settings/email'>Email</MenuItem>
                        <Divider/>
                        <MenuItem component={Link} to ='/settings/security'>Security</MenuItem>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Switch>
                        <Route exact path='/settings' render={(props)=><Redirect to='/settings/profile' />} />
                        <Route exact path='/settings/profile' component={CSettingsProfile}/>
                        <Route exact path='/settings/account' component={CSettingsAccount}/>
                        <Route exact path='/settings/email' component={CSettingsEmail}/>
                        <Route exact path='/settings/security' component={CSettingsSecurity}/>
                    </Switch>
                </Grid>
            </Grid>
            </Router>
    )
}

export default UserSettings

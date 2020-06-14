import React from 'react';
import './header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import clsx from 'clsx';
import Classes from '../../Shared/classes';
import logo from '../../logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';

export default function Header() {
    const classes = Classes();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    return (
        <>
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
                        <MenuIcon />
                    </IconButton>
                    {/* <Typography component="div" variant="inherit" color="inherit" noWrap className={classes.title}> */}
                    <Grid container direction="row"
                        justify="center"
                        spacing={2}>
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1> Moses </h1>
                    </Grid>
                    {/* </Typography> */}
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}
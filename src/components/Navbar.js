import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import FormatListBulletedSharpIcon from '@material-ui/icons/FormatListBulletedSharp';
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import UpdateIcon from '@material-ui/icons/Update';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


// function loginRenderList(loggedIn) {
//   if (loggedIn !== true || loggedIn === false || loggedIn === undefined) {
//     console.log(`Here we go again the variable is ${loggedIn}`)
//     return (

//       < div >
//         <ListItem button key={'Login'}>
//           <ListItemIcon> <MailIcon /></ListItemIcon>
//           <ListItemText primary={'Login'} />
//         </ListItem>
//         <ListItem button key={'Register'}>
//           <ListItemIcon> <MailIcon /></ListItemIcon>
//           <ListItemText primary={'Register'} />
//         </ListItem>
//         <ListItem button key={'Register'}>
//           <ListItemIcon> <MailIcon /></ListItemIcon>
//           <Link to='/login'><ListItemText primary={'Register'} /></Link>
//         </ListItem>
//       </div >
//     )
//   }
//   else if (loggedIn === true) {
//     console.log(`The logged in variable prints ${loggedIn}`)
//     return (
//       <div>
//         <Link to={'/logout'}>
//           <ListItem button key={'Logout'}>
//             <ListItemIcon> <ExitToAppSharpIcon /> </ListItemIcon>
//             <ListItemText primary={'Logout'} />

//           </ListItem>
//         </Link>
//         <Link to={'/'}>
//           <ListItem button key={'Notes'}>
//             <ListItemIcon> <FormatListBulletedSharpIcon /> </ListItemIcon>

//             <ListItemText primary={'View Notes'} />


//           </ListItem>
//         </Link>

//         <ListItem button key={'Mate'}>
//           <ListItemIcon> <PeopleAltSharpIcon /> </ListItemIcon>
//           <ListItemText primary={'Mates'} />
//         </ListItem>

//         <ListItem button key={'Follow'}>
//           <ListItemIcon> <GroupAddOutlinedIcon /></ListItemIcon>
//           <ListItemText primary={'Follow mate'} />
//         </ListItem>

//         <ListItem button key={'Search'}>
//           <ListItemIcon> <SearchIcon /></ListItemIcon>
//           <ListItemText primary={'Search Notes'} />
//         </ListItem>

//         <ListItem button key={'Profile'}>
//           <ListItemIcon> <AccountCircleIcon /></ListItemIcon>
//           <ListItemText primary={'View Profile'} />
//         </ListItem>

//         <ListItem button key={'Update Profile'}>
//           <ListItemIcon> <UpdateIcon /></ListItemIcon>
//           <ListItemText primary={'Update Profile'} />
//         </ListItem>
//       </div>
//     )
//   }
// }


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'orange'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const body = document.getElementById('body')


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const isLoggedIn = window.localStorage.getItem('isLoggedIn')
    setLoggedIn(isLoggedIn)

  })





  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Cryptonotes
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {/* {loginRenderList(loggedIn)} */}
          {loggedIn == "true" ?
            <div>
              <Link to={'/logout'}>
                <ListItem button key={'Logout'}>
                  <ListItemIcon> <ExitToAppSharpIcon /> </ListItemIcon>
                  <ListItemText primary={'Logout'} />

                </ListItem>
              </Link>
              <Link to={'/'}>
                <ListItem button key={'Notes'}>
                  <ListItemIcon> <FormatListBulletedSharpIcon /> </ListItemIcon>

                  <ListItemText primary={'View Notes'} />


                </ListItem>
              </Link>

              <ListItem button key={'Mate'}>
                <ListItemIcon> <PeopleAltSharpIcon /> </ListItemIcon>
                <ListItemText primary={'Mates'} />
              </ListItem>

              <ListItem button key={'Follow'}>
                <ListItemIcon> <GroupAddOutlinedIcon /></ListItemIcon>
                <ListItemText primary={'Follow mate'} />
              </ListItem>

              <ListItem button key={'Search'}>
                <ListItemIcon> <SearchIcon /></ListItemIcon>
                <ListItemText primary={'Search Notes'} />
              </ListItem>

              <Link to={'/profile/detail'}>
                <ListItem button key={'Profile'}>
                  <ListItemIcon> <AccountCircleIcon /></ListItemIcon>
                  <ListItemText primary={'View Profile'} />
                </ListItem>
              </Link>

              <Link to={'/profile/update'}>
                <ListItem button key={'Update Profile'}>
                  <ListItemIcon> <UpdateIcon /></ListItemIcon>
                  <ListItemText primary={'Update Profile'} />
                </ListItem>
              </Link>

            </div>
            :
            <div>
              <ListItem button key={'Login'}>
                <ListItemIcon> <MailIcon /></ListItemIcon>
                <ListItemText primary={'Login'} />
              </ListItem>
              <ListItem button key={'Register'}>
                <ListItemIcon> <MailIcon /></ListItemIcon>
                <ListItemText primary={'Register'} />
              </ListItem>
              <ListItem button key={'Register'}>
                <ListItemIcon> <MailIcon /></ListItemIcon>
                <Link to='/login'><ListItemText primary={'Register'} /></Link>
              </ListItem>
            </div>
          }

        </List>
        <Divider />
        <List>
          <Link to={'/note'}>
            <ListItem button key={'Profile'}>
              <ListItemIcon> <AddCircleOutlineIcon /></ListItemIcon>
              <ListItemText primary={'Create Note'} />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

      </main>
    </div>
  );
}
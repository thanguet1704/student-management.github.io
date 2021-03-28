/* eslint-disable react-hooks/rules-of-hooks */
import { Avatar, Menu, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BarChartIcon from '@material-ui/icons/BarChart';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import clsx from 'clsx';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SideBar } from '../home/SideBar';
import { Chart } from './Chart';
import { Monitoring } from './Monitoring';
import { Report } from './Report';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: 'inherit',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    padding: 50,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    height: '80%',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  logo: {
    width: 60,
    height: 60,
  },
  copyright: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const listMenu = [
  {
    path: '/dashboard/report',
    display: 'Báo cáo điểm danh',
    icon: <BarChartIcon />,
  },
  {
    path: '/dashboard/statistical',
    display: 'Thống kê',
    icon: <ScheduleOutlinedIcon />,
  },
  {
    path: '/dashboard/monitoring',
    display: 'Giám sát lớp học',
    icon: <ScheduleOutlinedIcon />,
  },
];

export const Dashboard = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar} color="primary">
          {open && (
            <img
              src="https://hcma.vn/Publishing/images/badge.png"
              alt="logo"
              className={classes.logo}
            />
          )}
          <IconButton
            edge="start"
            color="secondary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="primary"
            noWrap
            className={classes.title}
          >
            Cổng thông tin đào tạo
          </Typography>
          <IconButton color="primary">
            <Avatar
              aria-controls="simple-menu"
              aria-haspopup="true"
              className={classes.orange}
              onClick={handleClick}
            >
              N
            </Avatar>
            <Typography color="primary">Trinh Huu Thang</Typography>
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Đổi mật khẩu</MenuItem>
            <MenuItem onClick={handleClose}>Đăng xuất</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Router>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <div>
              <SideBar listMenu={listMenu} />
            </div>
          </List>
          <Divider />
        </Drawer>
        <div style={{ width: '100%' }}>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Switch>
              <Route path="/dashboard/report" exact>
                <Report />
              </Route>
              <Route path="/dashboard/statistical" exact>
                <Chart />
              </Route>
              <Route path="/dashboard/monitoring" exact>
                <Monitoring />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </div>
  );
};

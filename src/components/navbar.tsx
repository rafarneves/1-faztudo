'use client'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Inicio', 'Sobre', 'Ferramentas', 'Contato'];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        <ListItem key="inicio" disablePadding>
          <ListItemButton sx={{ textAlign: 'center', justifyContent: 'center' }}>
            <Link href="/">
              <ListItemText primary="Início" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key="sobre" disablePadding>
          <ListItemButton sx={{ textAlign: 'center', justifyContent: 'center' }}>
            <Link href="/sobre">
              <ListItemText primary="Sobre" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key="contato" disablePadding>
          <ListItemButton sx={{ textAlign: 'center', justifyContent: 'center' }}>
            <Link href="/contato">
              <ListItemText primary="Contato" />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key="inverter-texto" disablePadding>
          <ListItemButton sx={{ textAlign: 'center', justifyContent: 'center' }}>
            <Link href="/inverter-texto">
              <ListItemText primary="Inverter" />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
        <CssBaseline />
        <AppBar component="nav" position='static' sx={{backgroundColor: '#000000'}}>
            <Toolbar sx={{
              margin: { sm: 0 }, justifyContent: { md: 'space-between' }
            }}>
                <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ display: { xs: 'flex' }, width: { xs: 'calc(100% - 80px)', md: 'unset' } , justifyContent: { xs: 'center' }}}
                  >
                    <Link href="/">
                    <Image src="/Logo.svg" width={200} height={67} alt="Logo"/>
                    </Link>
                  </Typography>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                {navItems.map((item) => (
                    <Button key={item} sx={{ color: '#fff' }}>
                    {item}
                    </Button>
                ))}
                </Box>
            </Toolbar>
        </AppBar>
        <nav>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
        </nav>
    </>
  );
}
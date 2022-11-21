import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from './components/Drawer/Drawer';
import { useState } from 'react';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);

    return (
        <Box sx={{ flexGrow: 1, width: "100%" }}>
            <AppBar sx={{ background: "#240046" }}>
                <Toolbar>
                    <IconButton
                        onClick={handleOpen}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer isOpen={isOpen} handleClose={handleClose} handleOpen={handleOpen} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Explore Mars with NASA
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

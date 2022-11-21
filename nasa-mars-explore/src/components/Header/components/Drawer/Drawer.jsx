import { LinearProgress, Stack, SwipeableDrawer } from '@mui/material';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import DrawerForm from './components/DrawerForm/DrawerForm';


export default function Drawer({ isOpen, handleClose, handleOpen }) {
    const { loadingStatus } = useSelector(state => state.imgList);

    return (
        <SwipeableDrawer
            anchor='top'
            open={isOpen}
            onClose={handleClose}
            onOpen={handleOpen}
        >
            <Stack
                width={'100vw'}
                height={{ mobile: '50vh', desktop: '200px' }}
                justifyContent={'space-between'}
            >
                <Box height={"100%"}>
                    <DrawerForm />
                </Box>
                <Box>
                    {loadingStatus && <LinearProgress />}
                </Box>
            </Stack>
        </SwipeableDrawer>
    );
}

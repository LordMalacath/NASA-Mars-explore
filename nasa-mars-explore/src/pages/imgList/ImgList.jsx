import { Button, ImageList, ImageListItem, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMoreImgList, setNextPage } from 'redux/slices/imgListSlice';
import ImgSlider from './components/ImgSlider/ImgSlider';


export default function ImgList() {
    const { imgList, querrySetup, totalAmount } = useSelector(state => state.imgList);
    const dispatch = useDispatch();
    const loadMore = () => {
        dispatch(setNextPage());
        dispatch(fetchMoreImgList(querrySetup));
    };
    const lengthCheck = () => {
        if (imgList.length >= totalAmount) {
            return true;
        }
        return false;
    }


    return (
        <Stack
            height={"calc(100vh - 56px)"}
            width={"100vw"}
            direction={'column'}
            alignItems={"center"}
            justifyContent={"center"}
            overflow={"hidden"}
            p={1}
            mt={7}
        >
            <Box width={"75%"} sx={{ display: { mobile: "none", desktop: "block", tablet: "block" } }} >
                <Typography variant="body2" gutterBottom color={'#eff1ed'} fontSize={'18px'}>
                    A Mars rover is a motor vehicle designed to travel on the surface of Mars. Rovers have several advantages over stationary landers: they examine more territory, they can be directed to interesting features, they can place themselves in sunny positions to weather winter months, and they can advance the knowledge of how to perform very remote robotic vehicle control. They serve a different purpose than orbital spacecraft like Mars Reconnaissance Orbiter.
                </Typography>
            </Box>
            {imgList.length > 0 &&
                <ImageList
                    gap={8}
                    cols={1}
                    sx={{
                        width: "auto",
                        height: "auto",
                        display: { desktop: "none" },
                        gridTemplateColumns: 'repeat(2, 1fr)',
                    }}
                    rowHeight={256} >
                    {imgList.map((item) => (
                        <ImageListItem
                            key={item.id}
                            sx={{ overflow: 'hidden' }}
                        >
                            <img
                                src={item.img_src}
                                alt={item.camera.full_name}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                    <Button
                        variant="outlined"
                        startIcon={<KeyboardDoubleArrowDownIcon />}
                        onClick={loadMore}
                    />
                </ImageList>
            }
            {imgList.length > 0 &&
                <ImgSlider slides={imgList} />
            }
        </Stack >
    )
}
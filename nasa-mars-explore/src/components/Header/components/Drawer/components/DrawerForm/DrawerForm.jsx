import { Box, Button } from "@mui/material";
import RocketIcon from '@mui/icons-material/Rocket';
import { Stack } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { fetchImgList, fetchTotalPhotosAmount, setNextPage } from "redux/slices/imgListSlice";
import RoverCamSelect from "./components/RoverCamSelect/RoverCamSelect";
import RoverSelect from "./components/RoverSelect/RoverSelect";
import SolInput from "./components/SolInput/SolInput";
import { useNavigate } from "react-router-dom";


export default function DrawerForm() {
    const { querrySetup } = useSelector(state => state.imgList);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () => {
        dispatch(setNextPage(1));
        dispatch(fetchImgList(querrySetup));
        navigate('/imgList');
    };
    const checkFormFullfill = ({ rover, roverCam, sol }) => {
        if (typeof (rover) === "string"
            && rover?.length > 0
            && typeof (roverCam) === "string"
            && roverCam?.length > 0
            && typeof (sol) === "number"
            && sol > 0) {
            return true
        } else {
            return false
        }
    }

    return (
        <Stack
            direction={{ mobile: "column", desktop: "row" }}
            spacing={{ desktop: 2, mobile: 1 }}
            p={{ desktop: 2, mobile: 0 }}
            pt={{ mobile: 2, desktop: 0 }}
            alignItems={"center"}
            height={"100%"}
            justifyContent={{ desktop: 'flex-start', mobile: 'center' }}
        >
            <RoverSelect />
            <RoverCamSelect />
            <SolInput />
            <Box>
                <Button
                    variant="contained"
                    startIcon={<RocketIcon />}
                    onClick={handleClick}
                    disabled={checkFormFullfill(querrySetup) ? false : true}
                >
                    Explore MARS
                </Button>
            </Box>
        </Stack>
    )
}



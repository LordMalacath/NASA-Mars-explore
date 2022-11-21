import { Box, FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setQuerrySetupRover } from "redux/slices/imgListSlice";


export default function RoverSelect() {
    const dispatch = useDispatch();
    const { rover } = useSelector(state => state.imgList.querrySetup)

    const handleChange = (e) => {
        dispatch(setQuerrySetupRover(e.target.value));
    };


    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="rover-select-label">Rover</InputLabel>
                <Select
                    labelId="rover-select-label"
                    id="rover-select"
                    value={rover}
                    label="Rover"
                    onChange={handleChange}
                    required
                >
                    <MenuItem value="curiosity">Curiosity</MenuItem>
                    <MenuItem value="opportunity">Opportunity</MenuItem>
                    <MenuItem value="spirit">Spirit </MenuItem>
                </Select>
                <FormHelperText>Choose the rover</FormHelperText>
            </FormControl>
        </Box>
    )
}

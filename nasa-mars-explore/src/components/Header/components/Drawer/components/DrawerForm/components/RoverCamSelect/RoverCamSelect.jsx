import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { setQuerrySetupRoverCam } from "redux/slices/imgListSlice";


export default function RoverCamSelect() {
    const dispatch = useDispatch();
    const { roverCam } = useSelector(state => state.imgList.querrySetup)
    const handleChange = (e) => {
        dispatch(setQuerrySetupRoverCam(e.target.value));
    };


    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>

                <InputLabel id="rover-cam-select-label">Rover camera</InputLabel>
                <Select
                    labelId="rover-cam-select-label"
                    id="rover-cam-select"
                    value={roverCam}
                    label="Rover Camera"
                    onChange={handleChange}
                    required
                >
                    <MenuItem value="FHAZ">Front Hazard Avoidance Camera</MenuItem>
                    <MenuItem value="RHAZ">Rear Hazard Avoidance Camera</MenuItem>
                    <MenuItem value="MAST">Mast Camera</MenuItem>
                    <MenuItem value="CHEMCAM">Chemistry and Camera Complex</MenuItem>
                    <MenuItem value="MAHLI">Mars Hand Lens Imager</MenuItem>
                    <MenuItem value="MARDI">Mars Descent Imager</MenuItem>
                    <MenuItem value="NAVCAM">Navigation Camera</MenuItem>
                    <MenuItem value="PANCAM">Panoramic Camera	</MenuItem>
                    <MenuItem value="MINITES">Miniature Thermal Emission Spectrometer</MenuItem>
                </Select>
                <FormHelperText>Choose the rover camera</FormHelperText>
            </FormControl>
        </Box>
    )
}

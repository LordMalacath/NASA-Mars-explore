import { TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setQuerrySetupSol } from 'redux/slices/imgListSlice';


export default function SolInput() {
    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(setQuerrySetupSol(e.target.value))
    }

    return (
        <TextField
            id="outlined-helperText"
            label="Martian sol"
            helperText="Set Martian sol"
            onChange={handleChange}
            required
            autoComplete={'off'}
        />
    )
}

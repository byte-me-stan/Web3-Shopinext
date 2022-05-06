import React from 'react'
import { TextField, Grid,InputLabel, InputAdornment, IconButton} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
const Input = ({value, name, autoFocus, handleChange, label, half, type, handleShowPassword}) => {
    return (
        <Grid item xs={12} sm = {half ? 6 : 12} style={{marginBottom: '20px'}}>
            <InputLabel style={{ fontWeight: '600', fontSize: '18px', marginBottom: '5px'}}>{label}</InputLabel>
            <TextField 
            value={value}
            name={name}
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
            autoFocus={autoFocus}
            type={type}
            InputProps={name === 'password' ? {
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                            {type === 'password' ? <Visibility />: <VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                )
            }: null}
            />
        </Grid> 
    )
}

export default Input;
import React from "react";
import { TextField, Grid, InputLabel} from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ value, name, label , handleChange, required}) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <InputLabel style={{ fontWeight: '600', fontSize: '18px', marginBottom: '5px'}}>{label}</InputLabel>
      <TextField
        value={value}
        name={name}
        onChange={handleChange}
        fullWidth
        required={required}
        variant="outlined"
      />
    </Grid>
  );
};

export default FormInput;

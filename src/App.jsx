import { useState } from 'react'
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import './App.css'

export default function App(){

  //states 
  const [values, setValues] = useState({ fullName: "", quantity: "" });
  //key value pairs, with the key matching name prop

  const [errors, setErrors] = useState({});


//handle functions
  const handleChange = (e) => {
    const {name, value} = e.target
    const newValues = { ...values, [name] : value };
    setValues(newValues);
  }
  //spread operator to unwrap array 

  const handleSubmit = () => {
    const newErrors = validate(values);
    setErrors(newErrors);
  }

  const validate = ({ fullName, quantity }) => {
    const errors = {};

    if(!fullName.trim()){
      errors.fullName = "Full name is required.";
    }
    if(quantity === "") {
      errors.quantity = "Quantity is required.";
    }

    return errors
  }

  return(
    <>
      <Typography variant="h5" sx={{ mb: 1 }}>
          Full Name
      </Typography>
      <TextField
          type="text"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          error={Boolean(errors.fullName)}
          helperText={errors.fullName || " "} 
           sx={{
            "& .MuiInputBase-input": {
          color: "white",
          },
          }}
      />
      <Box>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Quantity (Tickets)
        </Typography>
        <TextField
          type="number"
          name="quantity"
          value={values.quantity}
          onChange={handleChange}
          error={Boolean(errors.quantity)}
          helperText={errors.quantity || " "} 
           sx={{
            "& .MuiInputBase-input": {
          color: "white",
          },
          }}
        />
      </Box>
      <Box>
         <Button
        sx={{ m:1 }}
        onClick={handleSubmit}
        >
        Submit
        </Button>
      </Box>
    </>
  )
}
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

export const ZipLookupForm = () => {
  return (
    <>
      <TextField
        required
        select
        label="Select State"
        variant="filled"
        sx={{
          marginTop: "30px"
        }}
      >
        {["hello", "goodbye"].map((option) => (
          <div>{option}</div>
        ))}
      </TextField>
      <TextField
        required
        label="Input Zip Code"
        variant="filled"
        sx={{
          marginTop: "30px"
        }}
      />
      <Button
        sx={{
          margin: "auto",
          marginTop: "50px",
          width: "200px",
          variant: "filled"
        }}
      >
        Submit
      </Button>
    </>
  )
}
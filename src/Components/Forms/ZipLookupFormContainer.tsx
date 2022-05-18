import Paper from "@mui/material/Paper"
import useMediaQuery from "@mui/material/useMediaQuery"

import { ZipLookupForm } from "./ZipLookupForm"

export const ZipLookupFormContainer = () => {
  const matches = useMediaQuery('(min-width:500px')
  console.log(matches)
  return (
    <Paper 
      elevation={3}
      sx={{
        height: '300px',
        width: matches ? '400px' : '250px',
        margin: "auto",
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        padding: "40px"
      }}
    >
      <ZipLookupForm/>
    </Paper>
  )
}
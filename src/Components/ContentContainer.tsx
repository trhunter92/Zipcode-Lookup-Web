import Paper from "@mui/material/Paper"
import { ZipLookupForm } from "./Forms/ZipLookupForm"

export const ContentContainer = () => {
  return (
    <Paper 
      elevation={3}
      sx={{
        height: '400px',
        width: '400px',
        margin: "auto",
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        padding: "40px"
      }}
    >
      <ZipLookupForm/>
    </Paper>
  )
}
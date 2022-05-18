import AppBar from '@mui/material/AppBar';
import Typography from "@mui/material/Typography"

export const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      
      <Typography variant="h4">Zipcode Lookup</Typography>
    </AppBar>
  )
}
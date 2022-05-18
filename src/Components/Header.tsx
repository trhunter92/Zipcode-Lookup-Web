import AppBar from '@mui/material/AppBar';

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
      Zipcode Lookup
    </AppBar>
  )
}
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"

export const RecentSearch = (props: any) => {
  return (
    <Paper sx={{padding: "8px", margin: "5px 0"}}>
      <Typography>{props.data.postCode}</Typography>
      <Typography>{props.data.places[0].placeName}</Typography>
      <Typography>{props.data.places[0].state}</Typography>
    </Paper>
  )
}
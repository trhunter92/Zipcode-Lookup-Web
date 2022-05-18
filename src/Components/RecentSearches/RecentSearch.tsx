import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"

export const RecentSearch = (props: RecentSearchProps) => {
  return (
    <Paper sx={{padding: "8px", margin: "5px 0"}}>
      <Typography>{`Zip Code: ${props.data.postCode}`}</Typography>
      <Typography>{`City: ${props.data.places[0].placeName}`}</Typography>
      <Typography>{`State: ${props.data.places[0].state}`}</Typography>
    </Paper>
  )
}

interface RecentSearchProps {
  data: {
    postCode: String
    places: [{
      placeName: String
      state: String
    }]
  }
}
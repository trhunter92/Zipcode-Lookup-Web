import Typography from "@mui/material/Typography"

export const ZipInfo = ({ data }: ZipInfoProps) => {
  return (
    <>
      <Typography>{`City: ${data.getZipInfo.places[0].placeName}`}</Typography>
      <Typography>{`State: ${data.getZipInfo.places[0].state}`}</Typography>
    </>
  )
}

interface ZipInfoProps {
  data: {
    getZipInfo: {
      places: [
        {
          placeName: String
          state: String
        }
      ]
    }
  }
}
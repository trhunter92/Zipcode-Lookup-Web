import Typography from "@mui/material/Typography"

import { ResponseData } from "../Queries/GetZipInfo"

export const ZipInfo = ({ data }: ResponseData) => {
  return (
    <>
      <Typography>{data.getZipInfo.places[0].placeName}</Typography>
      <Typography>{data.getZipInfo.places[0].state}</Typography>
    </>
  )
}
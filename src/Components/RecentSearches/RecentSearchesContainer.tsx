import { useContext } from 'react'
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import Box from "@mui/material/Box"
import useMediaQuery from "@mui/material/useMediaQuery"

import { RecentSearches } from "./RecentSearches"
import { GetZipInfoQueryContext } from "../../Containers/Contexts/GetZipInfoContext"

export const RecentSearchesContainer = () => {

  const matches = useMediaQuery('(min-width:500px')
  const { setRecentSearches } = useContext(GetZipInfoQueryContext)

  return (
    <Paper 
      elevation={3}
      sx={{
        height: '400px',
        width: matches ? '400px' : "250px",
        margin: "auto",
        marginTop: "20px",
        padding: "40px",
        overflowY: "scroll"
      }}
    >
      <Box 
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Typography sx={{fontWeight: 900}} variant="h6">Recent Searches</Typography>
        <IconButton onClick={() => setRecentSearches([])}>
          <ClearIcon/>
        </IconButton>
      </Box>
      <RecentSearches/>
    </Paper>
  )
}
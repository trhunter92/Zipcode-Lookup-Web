import { useContext } from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import Typography from "@mui/material/Typography"

import { useZipLookupForm } from "../../Containers/Forms/useZipLookupForm"
import { GetZipInfoQueryContext } from "../../Containers/Contexts/GetZipInfoContext"
import { ZipInfo } from "../ZipInfo"

export const ZipLookupForm = () => {
  const {
    zipInput,
    countryInput,
    handleCountryInputChange,
    handleZipInputChange,
    onSubmit,
    zipError
  } = useZipLookupForm()

  const { loading, data, error } = useContext(GetZipInfoQueryContext)

  return (
    <>
      <TextField
        required
        select
        disabled={loading}
        label="Select Country"
        variant="filled"
        value={countryInput}
        onChange={handleCountryInputChange}
        sx={{
          marginTop: "30px"
        }}
      >
        {countryOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
        ))}
      </TextField>
      <TextField
        required
        error={!!zipError}
        disabled={loading}
        label="Input Zip Code"
        variant="filled"
        value={zipInput}
        onChange={handleZipInputChange}
        helperText={zipError}
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
        disabled={loading}
        onClick={onSubmit}
      >
        Submit
      </Button>
      {error && <Typography>{error.message}</Typography>}
      {data && <ZipInfo data={data}/>}
    </>
  )
}

const countryOptions = [
  {
    label: "AD",
    value: "AD"
  },
  {
    label: "AR",
    value: "AR"
  },
  {
    label: "AS",
    value: "AS"
  },
  {
    label: "AT",
    value: "AT"
  },
  {
    label: "AU",
    value: "AU"
  },
  {
    label: "BD",
    value: "BD"
  },
  {
    label: "BE",
    value: "BE"
  },
  {
    label: "BG",
    value: "BG"
  },
  {
    label: "BR",
    value: "BR"
  },
  {
    label: "CA",
    value: "CA"
  },
  {
    label: "CH",
    value: "CH"
  },
  {
    label: "CZ",
    value: "CZ"
  },
  {
    label: "DE",
    value: "DE"
  },
  {
    label: "DK",
    value: "DK"
  },
  {
    label: "DO",
    value: "DO"
  },
  {
    label: "ES",
    value: "ES"
  },
  {
    label: "FI",
    value: "FI"
  },
  {
    label: "FO",
    value: "FO"
  },
  {
    label: "FR",
    value: "FR"
  },
  {
    label: "GB",
    value: "GB"
  },
  {
    label: "GF",
    value: "GF"
  },
  {
    label: "GG",
    value: "GG"
  },
  {
    label: "GL",
    value: "GL"
  },
  {
    label: "GP",
    value: "GP"
  },
  {
    label: "GT",
    value: "GT"
  },
  {
    label: "GU",
    value: "GU"
  },
  {
    label: "GY",
    value: "GY"
  },
  {
    label: "HR",
    value: "HR"
  },
  {
    label: "HU",
    value: "HU"
  },
  {
    label: "IM",
    value: "IM"
  },
  {
    label: "IN",
    value: "IN"
  },
  {
    label: "IS",
    value: "IS"
  },
  {
    label: "IT",
    value: "IT"
  },
  {
    label: "JE",
    value: "JE"
  },
  {
    label: "JP",
    value: "JP"
  },
  {
    label: "LI",
    value: "LI"
  },
  {
    label: "LK",
    value: "LK"
  },
  {
    label: "LT",
    value: "LT"
  },
  {
    label: "LU",
    value: "LU"
  },
  {
    label: "MC",
    value: "MC"
  },
  {
    label: "MD",
    value: "MD"
  },
  {
    label: "MH",
    value: "MH"
  },
  {
    label: "MK",
    value: "MK"
  },
  {
    label: "MP",
    value: "MP"
  },
  {
    label: "MQ",
    value: "MQ"
  },
  {
    label: "MX",
    value: "MX"
  },
  {
    label: "MY",
    value: "MY"
  },
  {
    label: "NL",
    value: "NL"
  },
  {
    label: "NO",
    value: "NO"
  },
  {
    label: "NZ",
    value: "NZ"
  },
  {
    label: "PH",
    value: "PH"
  },
  {
    label: "PK",
    value: "PK"
  },
  {
    label: "PL",
    value: "PL"
  },
  {
    label: "PM",
    value: "PM"
  },
  {
    label: "PR",
    value: "PR"
  },
  {
    label: "PT",
    value: "PT"
  },
  {
    label: "RE",
    value: "RE"
  },
  {
    label: "RU",
    value: "RU"
  },
  {
    label: "SE",
    value: "SE"
  },
  {
    label: "SI",
    value: "SI"
  },
  {
    label: "SJ",
    value: "SJ"
  },
  {
    label: "SK",
    value: "SK"
  },
  {
    label: "SM",
    value: "SM"
  },
  {
    label: "TH",
    value: "TH"
  },
  {
    label: "TR",
    value: "TR"
  },
  {
    label: "US",
    value: "US"
  },
  {
    label: "VA",
    value: "VA"
  },
  {
    label: "VI",
    value: "VI"
  },
  {
    label: "YT",
    value: "YT"
  },
  {
    label: "ZA",
    value: "ZA"
  }
]

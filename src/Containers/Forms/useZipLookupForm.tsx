import React, { useState, useContext } from 'react'

import { GetZipInfoQueryContext } from "../../Containers/Contexts/GetZipInfoContext"

export const useZipLookupForm = () => {
  const [countryInput, setCountryInput] = useState("US")
  const [zipInput, setZipInput] = useState("")

  const { getZipInfo, recentSearches, setRecentSearches } = useContext(GetZipInfoQueryContext)
  
  const handleCountryInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountryInput(event.target.value)
  }

  const handleZipInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZipInput(event.target.value)
  }

  const onSubmit = async () => {
    try {
      const resp = await getZipInfo({
        variables: {
          input: {
            countryCode: countryInput,
            zip: zipInput
          }
        }
      })
      setRecentSearches([resp.data.getZipInfo, ...recentSearches])

    } catch(e) {
      console.error(e)
    }
  }

  return {
    countryInput,
    zipInput,
    handleCountryInputChange,
    handleZipInputChange,
    onSubmit
  }
}
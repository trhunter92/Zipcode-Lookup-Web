import { createContext, useState } from 'react'
import { useLazyQuery } from "@apollo/client"

import { GET_ZIP_INFO } from "../../Queries/GetZipInfo"


export const GetZipInfoQueryContext = createContext()

export const GetZipInfoQueryProvider = (props) => {
  const [recentSearches, setRecentSearches] = useState([])

  const [getZipInfo, { loading, error, data }] = useLazyQuery(GET_ZIP_INFO)


  return (
    <GetZipInfoQueryContext.Provider
      value={{
        loading,
        error,
        data,
        getZipInfo,
        recentSearches,
        setRecentSearches
      }}
    >
      {props.children}
    </GetZipInfoQueryContext.Provider>
  )
}
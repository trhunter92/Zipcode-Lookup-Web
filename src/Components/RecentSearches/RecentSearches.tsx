import { useContext } from "react"

import { GetZipInfoQueryContext } from "../../Containers/Contexts/GetZipInfoContext"
import { RecentSearch } from "./RecentSearch"

export const RecentSearches = () => {

  const { recentSearches } = useContext(GetZipInfoQueryContext)

  return recentSearches.slice(0,5).map((zipInfo: any, index: any) => <RecentSearch key={index} data={zipInfo}/>)
}
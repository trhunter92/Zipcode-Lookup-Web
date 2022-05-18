import { gql } from '@apollo/client'

export const GET_ZIP_INFO = gql`
query GetZipInfo($input: GetZipInfoInput!) {
  getZipInfo(input: $input) {
    postCode
    places {
      state
      placeName
    }
  }
}
`

export interface ResponseData {
  data: {
    getZipInfo: ZipInfo
  }
}

interface ZipInfo {
  postCode: String
  places: [Place]
}

interface Place {
  state: String
  placeName: String
}

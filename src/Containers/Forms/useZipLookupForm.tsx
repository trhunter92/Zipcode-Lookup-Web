import React, { useState } from 'react'

export const useZipLookupForm = () => {
  const [stateInput, setStateInput] = useState("US")
  const [zipInput, setZipInput] = useState("")

  const handleStateInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateInput(event.target.value)
  }

  const handleZipInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZipInput(event.target.value)
  }

  return {
    stateInput,
    zipInput,
    handleStateInputChange,
    handleZipInputChange
  }
}
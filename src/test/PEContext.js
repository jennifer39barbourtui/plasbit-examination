import { createContext } from 'react'

export default createContext({
  adding: false,
  iterations: [],
  setIterations: f=>f
})

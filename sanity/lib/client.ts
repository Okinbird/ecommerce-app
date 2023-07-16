import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skbwpuyPoFCEEE1STKIMT0ZpyLG218qbuzx4s7zsjZKJRgcMjOoXutqjvqbEZvfi0zLOStWgZ6Aw1mheS7NpcEaa00aF3vwGE30I3Q2uwT8z3dKUwd1M6KRquDOXCWeyLZEc6dJvzMPTdQmPOSUidbDMst7TEMRvV8gOngqdkmFmSImGACTQ"
})

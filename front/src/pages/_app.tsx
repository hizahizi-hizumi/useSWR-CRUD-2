import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"

export default function App() {
  return (
    <>
      <Box component="main">
        <Outlet />
      </Box>
    </>
  )
}

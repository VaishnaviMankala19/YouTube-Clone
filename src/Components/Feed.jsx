import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {SideBar , Videos} from './'

const Feed = () => {
  return (
    <div>
      <Stack sx = {{ flexDirection : { sx:"column" , md: "row"}  }}>
        <Box sx ={{ height : {sx:"auto" , md:"92vh"}  , borderRight: '1px solid #3d3d3d' , px : {sx: 0 , md : 2} }} >
          <SideBar/>
          <Typography className="copyright" varient="body2" sx = {{ mt : 1.5 , color : '#fff' }}>
                copyright 2024 VM
          </Typography>
        </Box>
          <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
            New <span style={{ color: "#FC1503" }}>videos</span>
          </Typography>

          <Videos/>
        </Box>
      </Stack>
    </div>
  )
}

export default Feed

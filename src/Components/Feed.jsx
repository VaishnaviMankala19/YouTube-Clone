import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {SideBar} from './'

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
      </Stack>
    </div>
  )
}

export default Feed

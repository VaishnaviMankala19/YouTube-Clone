import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { ChannelDetail, VideoDetail, SearchFeed, Feed, NavBar } from './Components';

const App = () => {
    return (
        <BrowserRouter>
            <Box sx={{ backgroundColor: '#000' }}>
                <NavBar />
                <Routes>
                    <Route path='/' exact element={<Feed />} />
                    <Route path="/video/:id" element={<VideoDetail />} />
                    <Route path="/channel/:id" element={<ChannelDetail />} />
                    <Route path="/search/:searchTerm" element={<SearchFeed />} />
                </Routes>
            </Box>
        </BrowserRouter>
    );
}

export default App;

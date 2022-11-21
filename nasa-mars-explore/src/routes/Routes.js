import { Stack } from "@mui/system";
import ImgList from "pages/imgList/ImgList";
import Main from "pages/main/Main";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";


const Layout = () => {
    return (
        <Stack direction={"column"} alignItems={"center"} >
            <Header />
            <Outlet />
        </Stack>
    )
}


export const RoutesLayout = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
                <Route path="imgList" element={<ImgList />} />
            </Route>
        </Routes>
    )
}
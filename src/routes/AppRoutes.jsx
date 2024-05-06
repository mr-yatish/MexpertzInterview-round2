import { Route, Routes } from "react-router-dom"
// import {Layout} from "../components/Layout"
import { Home, StoreDetail, PageNotFound } from "../components";


const AppRoutes = () => {
    return (
        <div>
            <Routes>
                {/* route for first page  */}
                <Route path="*" element={
                    <>
                        <PageNotFound />
                    </>
                } />
                <Route path="/" element={
                    <>
                        <Home />
                    </>
                } />
                {/* route for second page  */}
                <Route path="/stories/:id" element={
                    <>
                        <StoreDetail />
                    </>
                } />
            </Routes>

        </div>
    )
}
export default AppRoutes;
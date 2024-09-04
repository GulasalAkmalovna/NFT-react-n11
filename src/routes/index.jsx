import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import { Artist, Auth, ConnectWallet, MarketPlace, Home, Nft, Rankings } from '@pages';

const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="marketplace" element={<MarketPlace />} />
                <Route path="rankings" element={<Rankings />} />
                <Route path="connectWallet" element={<ConnectWallet />} />
                <Route path="auth" element={<Auth />} />
                {/* ... etc. */}
            </Route>
        )
    );
    return <RouterProvider router={router} />
}

export default Index
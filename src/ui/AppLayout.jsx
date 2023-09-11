import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";
import Footer from "./Footer";



export default function AppLayout() {
    const navigation = useNavigation();
    
    const isLoading = navigation.state === 'loading'

    return (
     
        <div className="bg-stone-100  ">
             {isLoading && <Loader/>}
                  <Header />
                  <Outlet />
              <Footer/>
    </div>
  )
}

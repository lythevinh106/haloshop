import logo from './logo.svg';
import './App.css';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import Home from './pages/home/Home';
import Defaultayout from './layout/Defaultlayout/Defaultayout';
import { publicRoutes } from './routes/routes';
import { Fragment, useEffect } from 'react';
import { ScrollRestoration } from "react-router-dom";
import AuthApi from './Service/Auth';

import jwtDecode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { AxiosMainAuth } from './Service/AxiosMain';
import { logOut, setToken } from './features/Auth/AuthSlice';



function App() {



  const jwtRedux = useSelector((state) => state.auth.jwt)
  const refreshTokenRedux = useSelector((state) => state.auth.refresh_token)

  const location = useLocation();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  AxiosMainAuth.interceptors.response.use(undefined, async (error) => {

    if (error.code = 401) {
      dispatch(logOut());

      // navigate("/")
      // console.log(error.response)



      // if (localStorage.getItem("refresh_token").length > 0) {



      //   // console.log(error.response)

      //   // console.log("het han");
      //   // let newData = await AuthApi.refresh(localStorage.getItem("refresh_token"));

      // }



    }

    return Promise.reject(error);
    // console.log(error);
  }

  )








  useEffect(() => {


    try {

      if (jwtRedux) {
        const decodedToken = jwtDecode(jwtRedux);

        (async () => {

          const token_exp = decodedToken.exp * 1000

          const current_time = (new Date().getTime() + 30000);
          console.log(token_exp);
          console.log(current_time);

          if (token_exp < current_time) {
            console.log("re_login");

            const response = await AuthApi.refresh(refreshTokenRedux);
            // console.log(response);


            dispatch(setToken({
              jwt: response?.authorisation?.token,
              refresh_token: response?.authorisation?.refresh_token,

            }))

            localStorage.setItem("jwt", response.authorisation.token);
            localStorage.setItem("refresh_token", response.authorisation.token);


            AxiosMainAuth.defaults.headers.post['Authorization'] = 'Bearer ' + response.authorisation.token;

            console.log(response);

          }

        })()
        // config.headers.Authorization = 'Bearer ' + accessToken 
        // console.log(jwt);


      }




    } catch (error) {


      console.log(error);




    }
  }, [location])


  return (

    <Routes>



      {publicRoutes.map((route, index) => {

        let Layout = route.layout || Defaultayout;
        if (route.layout === null) {
          Layout = Fragment;

        }


        let LayoutMode = Fragment;

        if (route.layoutMode) {
          LayoutMode = route.layoutMode;

        }


        let Layer = Fragment;
        if (route.layer) {
          Layer = route.layer;

        }



        return (





          <Route key={index} path={route.path}
            element={<Layer> <LayoutMode><Layout><route.element></route.element></Layout></LayoutMode></Layer>} />



        )

      })}


      {/* <Route path="users/*" element={<Users />} /> */}
    </Routes>


  );
}

export default App;

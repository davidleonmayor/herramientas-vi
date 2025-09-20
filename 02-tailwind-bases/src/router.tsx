import { Route, BrowserRouter, Routes as RoutesWrap } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { ToastContainer } from "react-toastify";
import { ButonPage, FilterPage, HomePage } from "./page";

export default function Router() {
  return (
    <>
      <main>
        <BrowserRouter>
          <RoutesWrap>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/buton" element={<ButonPage />} />
              <Route path="/filter" element={<FilterPage />} />
              <Route path="/pricing" element={<>Pricing</>} />
              <Route path="/custom-hook-pros" element={<>Custom Hook Pros</>} />
            </Route>
            {/*  */}
            <Route element={<></>}>
              <Route path="" element={<></>} />
              <Route path="" element={<></>} />
            </Route>
          </RoutesWrap>
        </BrowserRouter>
      </main>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        draggablePercent={60}
      />
    </>
  );
}

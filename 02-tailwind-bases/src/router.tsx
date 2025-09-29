import { Route, BrowserRouter, Routes as RoutesWrap } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import {
  ButonPage,
  FilterPage,
  HomePage,
  CounterPage,
  PricingPage,
  StyledButtonPage,
  RandomNumPage,
  TasksPage,
  NotFoundPage,
} from "./page";
import { Toaster } from "@/components/ui/sonner";

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
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/custom-hook-pros" element={<>Custom Hook Pros</>} />

              {/* Homework guide 4 tailwind */}
              <Route path="/guide4/counter" element={<CounterPage />} />
              <Route
                path="/guide4/styled-button"
                element={<StyledButtonPage />}
              />
              <Route path="/guide4/random-num" element={<RandomNumPage />} />
              <Route path="/guide4/tasks" element={<TasksPage />} />

              {/* Ruta 404 - Must be in at the last */}
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </RoutesWrap>
        </BrowserRouter>
      </main>

      <Toaster />
    </>
  );
}

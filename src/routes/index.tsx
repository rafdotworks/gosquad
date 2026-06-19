import { BrowserRouter, Route, Routes } from "react-router-dom";
import RolePage from "@/features/role-page/RolePage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RolePage />} />
      </Routes>
    </BrowserRouter>
  );
}

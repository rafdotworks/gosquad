import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoleBriefPage from "@/features/role-brief/RoleBriefPage";
import RolePage from "@/features/role-page/RolePage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RolePage />} />
        <Route path="/brief" element={<RoleBriefPage />} />
      </Routes>
    </BrowserRouter>
  );
}

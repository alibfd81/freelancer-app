import { Navigate, Route, Routes } from "react-router-dom"
import Auth from "./pages/Auth"
import CompleteProfile from "./pages/CompleteProfile"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import OwnerDashboard from "./features/owner/OwnerDashboard"
import Projects from "./pages/Projects"
import Project from "./pages/Project"
import OwnerLayoute from "./features/owner/OwnerLayoute"
import AdminLayoute from "./features/admin/AdminLayoute"
import AdminDashboard from "./pages/AdminDashboard"
import Users from "./pages/Users"
import Proposals from "./pages/Proposals"
import SubmitedProjects from "./pages/SubmitedProjects"
import { DarkModeProvider } from "./context/DarkModeContext"
import FreelancerLayoute from "./features/freelancer/FreelancerLayoute"
import FreelancerDashboard from "./pages/FreelancerDashboard"
import ProtectedRoute from "./ui/ProtectedRoute"
import NotFound from "./ui/NotFound"

function App() {
  const queryClient = new QueryClient()
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/owner"
            element={
              <ProtectedRoute>
                <OwnerLayoute />
              </ProtectedRoute>}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<Project />} />
          </Route>
          <Route path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayoute />
              </ProtectedRoute>
            }>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="projects" element={<SubmitedProjects />} />
            <Route path="proposals" element={<Proposals />} />
          </Route>
          <Route path="/freelancer"
            element={
              <ProtectedRoute>
                <FreelancerLayoute />
              </ProtectedRoute>
            }>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<FreelancerDashboard />} />
            <Route path="projects" element={<SubmitedProjects />} />
            <Route path="proposals" element={<Proposals />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </DarkModeProvider>
  )
}

export default App

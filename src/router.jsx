import {createBrowserRouter} from "react-router-dom";
import {MainAuth} from "./pages/MainAuth";
import {Events} from "./layouts/Events/Events";
import {ProtectedRoute} from "./components/ProtectedRoute/ProtectedRoute";
import {MainLayout} from "./pages/MainLayout/MainLayout";
import {University} from "./layouts/University/University";
import {UniversityInfo} from "./components/UniversityInfo/UniversityInfo";
import {PublicRoute} from "./components/PublicRoute/PublicRoute";

export const router = createBrowserRouter([
  {
    path: "auth",
    element:
      <ProtectedRoute>
        <MainAuth />
      </ProtectedRoute>
  },
  {
    element:
      <PublicRoute>
        <MainLayout />
      </PublicRoute>,
    children: [
      {
        index: true,
        element: <University />
      },
      {
        path: "events",
        element: <Events />,
        children: [
          {
            path: ":id",
            element: <UniversityInfo  />
          }
        ]

      },
      {
        path: "profile",
      }
    ]
  },
])
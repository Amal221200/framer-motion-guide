import BasicMotion from "./components/BasicMotion"
import Gestures from "./components/Gestures"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import UseAnimationControls from "./components/UseAnimationControls"
import ScrollBased from "./components/ScrollBased"
import Staggered from "./components/staggered"
import ViewBased from "./components/ViewBased"
import DraggableList from "./components/DraggableList"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <BasicMotion />
      },
      {
        path: "/gestures",
        element: <Gestures />
      },
      {
        path: "/use-animation-controls",
        element: <UseAnimationControls />
      },
      {
        path: "/scroll-based",
        element: <ScrollBased />
      },
      {
        path: "/staggered",
        element: <Staggered />
      },
      {
        path: "/view-based",
        element: <ViewBased />
      },
      {
        path: "/draggable-list",
        element: <DraggableList />
      },
    ],
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
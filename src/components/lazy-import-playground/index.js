import { lazy, Suspense } from 'react'
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom'
// import MenuA from './menus/menuA'
// import MenuB from './menus/menuB'
// import MenuC from './menus/menuC'
// import MenuD from './menus/menuD'
// import MenuE from './menus/menuE'

const MenuA = lazy(() => import('./menus/menuA'))
const MenuB = lazy(() => import('./menus/menuB'))
const MenuC = lazy(() => import('./menus/menuC'))
const MenuD = lazy(() => import('./menus/menuD'))
const MenuE = lazy(() => import('./menus/menuE'))

export default function LazyImport() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Layout />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="menuA" />} />
            <Route path="/menuA" element={<MenuA />} />
            <Route path="/menuB" element={<MenuB />} />
            <Route path="/menuC" element={<MenuC />} />
            <Route path="/menuD" element={<MenuD />} />
            <Route path="/menuE" element={<MenuE />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

const Layout = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/menuA')}>Go to A</button>
      <button onClick={() => navigate('/menuB')}>Go to B</button>
      <button onClick={() => navigate('/menuC')}>Go to C</button>
      <button onClick={() => navigate('/menuD')}>Go to D</button>
      <button onClick={() => navigate('/menuE')}>Go to E</button>
      <Outlet />
    </div>
  )
}

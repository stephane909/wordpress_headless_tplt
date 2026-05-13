import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { WordPressProvider } from './contexts/WordPressContext'
import { Layout } from './components/layout/Layout/Layout'
import { Home } from './pages/Home/Home'
import { PostDetail } from './pages/PostDetail/PostDetail'
import { PageDetail } from './pages/PageDetail/PageDetail'
import './styles/main.scss'

function App() {
  return (
    <WordPressProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="post/:slug" element={<PostDetail />} />
            <Route path="page/:slug" element={<PageDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WordPressProvider>
  )
}

export default App

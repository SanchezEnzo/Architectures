import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../layout/pages/Home'

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}

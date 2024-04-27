import Favoritos from 'pages/Favoritos';
import Inicio from 'pages/Inicio';
import MainPage from 'pages/MainPage';
import NaoEncontrada from 'pages/NaoEncontada';
import Player from 'pages/Player';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />}>
          <Route index element={<Inicio />} />
          <Route path='favoritos' element={<Favoritos />} />
          <Route path=':id' element={<Player />} />
          <Route path='*' element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;

import Cabecalho from 'components/Cabecalho';
import Container from 'components/Container';
import Rodape from 'components/Rodape';
import FavoritosProvider from 'contexts/Favoritos';
import Favoritos from 'pages/Favoritos';
import Inicio from 'pages/Inicio';
import NaoEncontrada from 'pages/NaoEncontada';
import Player from 'pages/Player';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/favoritos' element={<Favoritos />} />
            <Route path='/:id' element={<Player />} />
            <Route path='*' element={<NaoEncontrada />}></Route>
          </Routes>
        </FavoritosProvider>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
}
export default AppRoutes;

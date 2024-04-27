import Cabecalho from 'components/Cabecalho';
import Container from 'components/Container';
import Rodape from 'components/Rodape';
import FavoritosProvider from 'contexts/Favoritos';
import { Outlet } from 'react-router-dom';

function MainPage() {
  return (
    <main>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Rodape />
    </main>
  );
}
export default MainPage;

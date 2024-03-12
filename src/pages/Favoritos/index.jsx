import Banner from 'components/Banner';
import styles from './Favoritos.module.css';
import Titulo from 'components/Titulo';
import Card from 'components/Card';

function Favoritos() {
  return (
    <>
      <>
        <Banner imagem={'favoritos'} />
        <Titulo>
          <h1>Meus Favoritos</h1>
        </Titulo>

        <section className={styles.container}>
          <Card
            titulo='O labirinto do Logcat'
            capa='https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img2.png'
            link='https://www.youtube.com/embed/ypvGqZGJBls'
            key='1'
          />
          ;
        </section>
      </>
    </>
  );
}

export default Favoritos;

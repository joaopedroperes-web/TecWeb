import { Navbar } from '../../components/navbar/navbar.component'
import { useNavigate } from 'react-router'
import './home.css'
import bannerPhoto from '../../../assets/images/banner-img.png'
import courseCardImage from '../../../assets/images/boy-studying.png'

export const Home = () => {
    const navigation = useNavigate()
    
    return(
    <>
        <Navbar />
        <section className="home-banner container">
            <div className="home-banner--bg">
                <div className="home-banner--info-wrapper">
                    <div id="home-banner--helper">
                        <h1>Acesse a milhares de vagas de TI pelo mundo</h1>
                        <p>O melhor local para sua vaga dos sonhos!</p>
                        <button className="home-banner--button black-button" onClick={() => navigation("/signup")}>Cadastre-se</button>
                    </div>
                </div>
                <div className="home-banner--image-wrapper">
                    <img src={bannerPhoto} alt="asd" />
                </div>
            </div>
        </section>

        <section class="courses container section">
    <div class="section-top">
      <h2>Aprenda a se destacar!</h2>
    </div>

    <div class="courses--cards-wrapper">
      <div role="list" class="courses-division">
        <div role="listitem" class="courses--card">

          <a href="https://blog.portalpos.com.br/principais-competencias-e-habilidades-desejadas-pelos-recrutadores/"
            class="ebook-thumbnail w-inline-block">
            <img src={courseCardImage} alt="" class="image-cover" />
          </a>

          <a href="#" class="card-text-link w-inline-block"></a>

          <a href="https://blog.portalpos.com.br/principais-competencias-e-habilidades-desejadas-pelos-recrutadores/"
            class="button w-button">Quero dar uma olhada!</a>

        </div>

        <div role="listitem" class="courses--card">

          <a href="https://www.treinaweb.com.br/blog/5-dicas-para-entrevistas-na-area-de-ti"
            class="ebook-thumbnail w-inline-block">
            <img src={courseCardImage} alt="" class="image-cover" />
          </a>

          <a href="#" class="card-text-link w-inline-block"></a>

          <a href="https://www.treinaweb.com.br/blog/5-dicas-para-entrevistas-na-area-de-ti"
            class="button w-button">Quero dar uma olhada!</a>
        </div>

        <div role="listitem" class="courses--card">
          <a href="https://www.hostinger.com.br/tutoriais/linguagens-de-programacao-mais-usadas"
            class="ebook-thumbnail w-inline-block"><img src={courseCardImage} alt=""
              class="image-cover"/></a>

          <a href="#" class="card-text-link w-inline-block"></a>

          <a href="https://www.hostinger.com.br/tutoriais/linguagens-de-programacao-mais-usadas"
            class="button w-button">Quero dar uma olhada!</a>
        </div>
      </div>

    </div>


  </section>
    </>
)
}
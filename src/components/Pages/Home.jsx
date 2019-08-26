import React,{useEffect} from "react";
import Banner from "../Organisms/Banner";
import { connect } from "react-redux";
import store from "../../redux/store";
import {getAllPost, getAllSpecialities} from '../../redux/actionCreators' 
import Publication  from '../Organisms/Publication'
import Countdown from 'react-countdown-now';
import Card from "../Organisms/Card";


const Home = ({posts,specialities}) => {

  useEffect(()=>{
    store.dispatch(getAllPost())
    store.dispatch(getAllSpecialities())
  },[])


  return (
    <>
      <Banner
        color="dark-color"
        title="Bienvenido a EDteam comienza hoy mismo a aprender"
        subtitle="Consigue aprender las nuevas tecnología. Domina los temas con el contenido de calidad que hemos preparado para ti."
        image={{
          src: "https://images.unsplash.com/photo-1501855901885-8b29fa615daf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80",
          alt: "Banner Home"
        }}
        home
        poster="https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desarrollo%20frotend.png"
      />
      <div className="ed-grid">
        <h4 className="t3 ">Especialidades</h4>
        <div className="l-block">
        <div className="scrolling-wrapper">
         
         {
          specialities &&
          specialities.slice(0, 6).map(c=>(
              <div key={c.id}className="card-course">
                <Card
                nombre={c.name}
                cardid={c.id}
                path="especialidad"
                picture={c.picture}
                homeCard
                />
              </div>
            ))
           
         }
        </div>
      </div>
      </div>
      <main className="ed-grid lg-grid-9 border grey-color-lighter">
        <div className="lg-cols-2 from-lg">
          <h3>Próximas Clases</h3>
          <ul className="data-list">
            <li>
              <span>Material Design 21/10/19</span>
              <div className="timer">
                <Countdown  date={Date.now() + 4000000} renderer={renderer}>
                    <span>You are good to go!</span>
                </Countdown>
              </div>
            </li>
            <li>
              <span>React desde cero 20/10/29</span>
              <div className="timer">
                <Countdown  date={Date.now() + 7900000} renderer={renderer}>
                    <span>You are good to go!</span>
                </Countdown>
              </div>
            </li>
            <li>
              <span>Firebase para Android 20/10/29</span>
              <div className="timer">
                <Countdown  date={Date.now() + 18000000} renderer={renderer}>
                    <span>You are good to go!</span>
                </Countdown>
              </div>
            </li>
          </ul>
        </div>
        <div className="l-section lg-cols-5 lg-border-right lg-border-left lg-px-4">
          <h2>Ultimas publicaciones</h2>
          {
            posts ? <div> 
                    { posts.map(p => 
                            <Publication  
                              key={p.id} 
                              author={p.author} 
                              title={p.title} 
                              date={p.fecha}  
                              content={p.content}/>)
                    }
                    </div> 
                  : <p>No existen publicaciones</p>
          }
        </div>
        <div className="lg-cols-2 from-lg">
          <h3 className="t3">Categorias</h3>
          <ul className="feature-list">
            <li><span>Android</span></li>
            <li><span>React</span></li>
            <li><span>Angular</span></li>
            <li><span>SASS</span></li>
            <li><span>iOS</span></li>
          </ul>
        </div>
      </main>
    </>
  );
};

const mapStateToProps = state =>({
  posts:state.postReducer.posts,
  specialities:state.specialityReducer.specialities
})

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
     return <span>Clase en Vivo</span>
  } else {
    return <span>{`${hours}h`} {`${minutes}m`} {`${seconds}s`}</span>;
  }
}

export default connect(mapStateToProps,{})(Home)

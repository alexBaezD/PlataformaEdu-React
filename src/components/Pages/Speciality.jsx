import React,{useEffect} from 'react'
import { connect } from "react-redux";
import store from "../../redux/store";
import { getSpeciality } from '../../redux/actionCreators';
import Banner from '../Organisms/Banner'
import {Link} from 'react-router-dom'

const Speciality = ({speciality}) => {
 
 useEffect(()=>(
   store.dispatch(getSpeciality(1))
 ),[])

 return( 
  <>
    {
      speciality &&
      <>
      <Banner
        color="dark-color"
        title={speciality.data.name}
        subtitle={speciality.data.subtitle}
        image={{
          src:"https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80",
          alt:speciality.data.name
        }}
        courseBanner
        poster={speciality.data.picture}
        info={speciality.data.information}
      />

      <main className="ed-grid lg-grid-10">
        <div className="lg-cols-7">
        <div className="course-features ed-grid lg-grid-3 s-border s-pxy-2 s-radius l-block">
              <div>
                <h3 className="t4">¿Qué Aprenderas?</h3>
                <ul>
                  {
                    speciality.data.abilities.map(a=>(
                      <li key={a.id}>{a.description}</li>
                    ))
                  }
                </ul>
              </div>
              <div>
                <h3 className="t4">Conocimientos previos</h3>
                <ul className="feature-list">
                  {
                    speciality.data.knowledge.map(k=>(
                      <li key={k.id}>{k.description}</li>
                     ))
                  }
                </ul>
              </div>
              <div>
                <h3 className="t4">Nivel</h3>
                <p>{speciality.data.level}</p>
              </div>
            </div>
            <h2>Contenido de la especialidad</h2>
            <div className="s-border s-pxy-2 lg-pxy-4 s-radius  l-block l-section">
              {
                speciality.data.courses.map(co =>(
                  <div key={co.id} className="course-class l-section">
                   <div className="ed-grid m-grid-3">
                      <Link to={`/curso/${co.id}`}><img src={co.picture} alt={co.name}/></Link>
                      <div className="m-cols-2">
                        <Link to={`/curso/${co.id}`}><h3>{co.name}</h3></Link>
                        <p>{co.information}</p>
                      </div>
                   </div>
                  </div>
                ))
              }
            </div>
        </div>
     </main>
      </>
    }
  </>
 )
}

const mapStateToProps=state =>({
  speciality: state.specialityReducer.speciality
})
  
export default connect(mapStateToProps,{})(Speciality)

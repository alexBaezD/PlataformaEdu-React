import React, {useEffect} from 'react'
import Banner from '../Organisms/Banner';
import { connect } from "react-redux";
import store from "../../redux/store";
import { getAllSpecialities } from "../../redux/actionCreators";
import Card from '../Organisms/Card';

const Specialities = ({match,specialities}) => {

  useEffect(()=>{
    store.dispatch(getAllSpecialities())
  },[match])

  return(
   <>
    <Banner 
    color="first-color"
    image={{
      src:"https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
      alt:"Banner Especialidades"
    }}
    title="Especialidades"
    subtitle="Domina una tecnología con las rutas de aprendizaje."
  />
  {
    specialities &&
      <main className="ed-grid m-grid-3">
        {
          specialities.map(s=>(
            <Card 
              key={s.id} 
              nombre={s.name} 
              picture={s.picture}  
              cardid={s.id}
              path="especialidad"
             
              />
          ))
        }
          
      </main>
      
  }
  </>
  )
}

const mapStateToProps = state =>({
  specialities:state.specialityReducer.specialities
})

  
export default connect(mapStateToProps,{})(Specialities)

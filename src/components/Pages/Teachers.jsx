import React, {useEffect} from 'react'
import Banner from '../Organisms/Banner';
import store from '../../redux/store'
import {getAllTeachers} from '../../redux/actionCreators'
import { connect } from 'react-redux';
import Teacher from '../Organisms/Teacher';

const Teachers = ({match,teachers}) => {

  useEffect(()=>{
    store.dispatch(getAllTeachers())
  },[match])

  return(
    <>
    <Banner 
      color="third-color"
      image={{
        src:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80",
        alt:"Banner Profesores"
      }}
      title="Profesores"
      subtitle="Tu futuro te esta esperando, dejanos guiarte en tu educación."
     />
      {
        teachers && 
        <main className="ed-grid m-grid-3 lg-grid-4 row-gap">
          {
            teachers.map(t => (
             <Teacher  
             key={t.id} 
             picture={t.picture}
             name = {t.name}
             country = {t.country}
             />
            ))
          }
        </main>
      }
     </>
  )
}
    
const mapStateToProps = state =>({
  teachers: state.teacherReducer.teachers
})

  
export default connect(mapStateToProps,{}) (Teachers)

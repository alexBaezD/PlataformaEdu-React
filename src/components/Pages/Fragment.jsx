import React, {useEffect} from 'react'
import Vimeo from '@u-wave/react-vimeo'
import { connect } from 'react-redux';
import store from "../../redux/store";
import {getCourse,getFragmet} from '../../redux/actionCreators' 
import {Link} from 'react-router-dom'
const Fragment = ({course,fragment}) => {

  useEffect(()=>{
    store.dispatch(getCourse(1))
    store.dispatch(getFragmet(123))
  },[])

  return (
    
    <div className="class-page background dark-color s-pxy-4">
      {
        (course && fragment) &&
          <div className="ed-grid lg-grid-12">
            <div className="lg-cols-8">
              <div>
                <Vimeo
                  video={fragment.video}
                  width={780}
                />
              </div>
              <div>
              <h1 className="t3 color accent-color s-mb-0">{fragment.name}</h1>
              <p>{course.name}</p>
              <p>{course.subtitle}</p>
              </div>
             </div>
            <div className="lg-cols-4">
              <div className="playlist__content">
                  <h2 className="t3 playlist__title">Temario del curso</h2>
                  <div className="s-border s-pxy-2 lg-pxy-4 s-radius  l-block l-section">
                    <div className="playlist__list">
                    {
                    course.data.classes.map(cl =>(
                      <div key={cl.class.id} className="course-class l-section">
                        <h3>{cl.class.title}</h3>
                        <ul className="data-list">
                          {
                            cl.subjects.map(s=>(
                              <li key={s.subject.id} >
                                <Link className="" to={`/clase/${s.subject.id}`}>
                                  <div className="playlist__item-data">
                                    <div className="playlist__item-content">
                                      <span className="">{s.subject.title}</span> 
                                    </div>
                                  </div>
                                 <div className="playlist__item-action">
                                    <span className="playlist__item-time">{s.subject.duration_string_format}</span>
                                  </div>
                                </Link>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    ))
                  }

                    </div>
                  </div>
              </div>


            </div>
          </div>
      }
    </div>
  )
}

const mapStateToProps= state =>({
  course:state.courseReducer.course,
  fragment:state.fragmentReducer.fragment
})

export default connect(mapStateToProps,{})(Fragment)

import React,{useEffect} from "react";
import Banner from "../Organisms/Banner";
import { connect } from "react-redux";
import store from "../../redux/store";
import { getAllCourses } from "../../redux/actionCreators";
import Card from "../Organisms/Card";

const Courses = ({match,courses}) => {
  
  useEffect(() => {
   store.dispatch(getAllCourses())
  }, [match])

  return (
    <>
      <Banner
        color="dark-color"
        image={{
          src:
            "https://images.unsplash.com/photo-1483808161634-29aa1b0e585e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
          alt: "Banner Cursos"
        }}
        title="Cursos"
        subtitle="Comienza desde cero hoy mismo en tu carrera a dominar la tecnología."
      />
      {
        courses && 
          <main className="ed-grid m-grid-3 lg-grid-4 row-gap gap-2 lg-cols-4">
            {
              courses.map(c=>(
               <Card 
                key={c.id} 
                nombre={c.name} 
                picture={c.picture}
                path="curso"
                cardid={c.id}
                course_type={c.course_type}
                />
              ))
            }
           </main>
      }
    </>
  );
};

const mapStateToProps = state => ({
  courses: state.courseReducer.courses
});

export default connect(
  mapStateToProps,
  {}
)(Courses);

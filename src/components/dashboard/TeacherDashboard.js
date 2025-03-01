import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

const TeacherDashboard = () => {
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: '', description: '' });
  const [material, setMaterial] = useState(null);
  const [evaluation, setEvaluation] = useState({ studentId: '', comment: '', grade: '' });

  useEffect(() => {
    const fetchCourses = async () => {
      // Simulación de obtención de cursos; en producción, realiza una llamada a la API.
      const simulatedCourses = [
        { id: 1, title: 'Matemáticas Avanzadas', description: 'Curso sobre álgebra y cálculo.' },
        { id: 2, title: 'Historia Moderna', description: 'Exploración de la historia del siglo XX.' }
      ];
      setCourses(simulatedCourses);
    };
    fetchCourses();
  }, [user]);

  const handleNewCourseChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };

  const handleCourseCreation = (e) => {
    e.preventDefault();
    const createdCourse = { id: courses.length + 1, ...newCourse };
    setCourses([...courses, createdCourse]);
    setNewCourse({ title: '', description: '' });
  };

  const handleMaterialUpload = (e) => {
    setMaterial(e.target.files[0]);
  };

  const handleMaterialSubmit = (courseId) => {
    alert(`Material subido para el curso ${courseId}: ${material.name}`);
    setMaterial(null);
  };

  const handleEvaluationChange = (e) => {
    setEvaluation({ ...evaluation, [e.target.name]: e.target.value });
  };

  const handleEvaluationSubmit = (courseId) => {
    alert(`Evaluación enviada para el curso ${courseId}: ${evaluation.comment} (Nota: ${evaluation.grade})`);
    setEvaluation({ studentId: '', comment: '', grade: '' });
  };

  return (
    <div className="container mt-4">
      <h2>Panel del Profesor: {user.username}</h2>

      <section className="mb-4">
        <h3>Crear Nuevo Curso</h3>
        <form onSubmit={handleCourseCreation}>
          <div className="mb-3">
            <label>Título del Curso</label>
            <input 
              type="text" 
              name="title" 
              className="form-control"
              value={newCourse.title}
              onChange={handleNewCourseChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Descripción</label>
            <textarea 
              name="description" 
              className="form-control"
              value={newCourse.description}
              onChange={handleNewCourseChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Crear Curso</button>
        </form>
      </section>

      <section className="mb-4">
        <h3>Mis Cursos</h3>
        {courses.length === 0 ? (
          <p>No tienes cursos creados.</p>
        ) : (
          <ul className="list-group">
            {courses.map((course) => (
              <li key={course.id} className="list-group-item">
                <h5>{course.title}</h5>
                <p>{course.description}</p>
                <div className="mb-3">
                  <label>Subir Material</label>
                  <input 
                    type="file" 
                    className="form-control"
                    onChange={handleMaterialUpload}
                  />
                  {material && (
                    <button 
                      className="btn btn-success mt-2"
                      onClick={() => handleMaterialSubmit(course.id)}
                    >
                      Subir
                    </button>
                  )}
                </div>
                <div>
                  <h6>Evaluar Participación</h6>
                  <form onSubmit={(e) => { e.preventDefault(); handleEvaluationSubmit(course.id); }}>
                    <div className="mb-2">
                      <label>ID del Estudiante</label>
                      <input 
                        type="text" 
                        name="studentId" 
                        className="form-control"
                        value={evaluation.studentId}
                        onChange={handleEvaluationChange}
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label>Comentario</label>
                      <textarea 
                        name="comment" 
                        className="form-control"
                        value={evaluation.comment}
                        onChange={handleEvaluationChange}
                        required
                      ></textarea>
                    </div>
                    <div className="mb-2">
                      <label>Nota</label>
                      <input 
                        type="number" 
                        name="grade" 
                        className="form-control"
                        value={evaluation.grade}
                        onChange={handleEvaluationChange}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-secondary">Enviar Evaluación</button>
                  </form>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default TeacherDashboard;

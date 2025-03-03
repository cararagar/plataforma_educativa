import React, { useState, useEffect } from 'react';

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: '', description: '' });
  const [evaluationInput, setEvaluationInput] = useState({ courseId: '', studentId: '', comment: '', grade: '' });
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState('');

  // Simulación de cursos asignados al profesor
  useEffect(() => {
    const simulatedCourses = [
      { id: 1, title: 'Matemáticas Avanzadas', description: 'Curso sobre álgebra y cálculo.' },
      { id: 2, title: 'Historia Moderna', description: 'Exploración de la historia del siglo XX.' }
    ];
    setCourses(simulatedCourses);
  }, []);

  // Funciones para "Mis Cursos"
  const handleNewCourseChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };

  const handleCourseCreation = (e) => {
    e.preventDefault();
    const newId = courses.length > 0 ? courses[courses.length - 1].id + 1 : 1;
    const createdCourse = { id: newId, ...newCourse };
    setCourses([...courses, createdCourse]);
    setNewCourse({ title: '', description: '' });
    alert('Curso creado exitosamente.');
  };

  // Funciones para Materiales
  const handleMaterialUpload = (e, courseId) => {
    const file = e.target.files[0];
    if (file) {
      // Simulación de subida de archivo
      alert(`Material "${file.name}" subido para el curso ${courseId}.`);
    }
  };

  // Funciones para Evaluaciones
  const handleEvaluationChange = (e) => {
    setEvaluationInput({ ...evaluationInput, [e.target.name]: e.target.value });
  };

  const handleEvaluationSubmit = (e) => {
    e.preventDefault();
    // Simulación: Se podría agregar la evaluación a un listado o enviarla a la API
    alert('Evaluación enviada para el estudiante.');
    setEvaluationInput({ courseId: '', studentId: '', comment: '', grade: '' });
  };

  // Funciones para Anuncios
  const handleAnnouncementSubmit = (e) => {
    e.preventDefault();
    if (newAnnouncement.trim() !== '') {
      setAnnouncements([...announcements, newAnnouncement]);
      setNewAnnouncement('');
    }
  };

  // Renderizado según pestaña activa
  const renderTabContent = () => {
    switch (activeTab) {
      case 'courses':
        return (
          <div>
            <h4>Mis Cursos</h4>
            <form onSubmit={handleCourseCreation}>
              <div className="mb-3">
                <label>Título del Curso</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="title" 
                  value={newCourse.title} 
                  onChange={handleNewCourseChange} 
                  required 
                />
              </div>
              <div className="mb-3">
                <label>Descripción</label>
                <textarea 
                  className="form-control" 
                  name="description" 
                  value={newCourse.description} 
                  onChange={handleNewCourseChange} 
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Crear Curso</button>
            </form>
            <hr />
            <ul className="list-group">
              {courses.map(course => (
                <li key={course.id} className="list-group-item">
                  <h5>{course.title}</h5>
                  <p>{course.description}</p>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'materials':
        return (
          <div>
            <h4>Materiales de Curso</h4>
            {courses.map(course => (
              <div key={course.id} className="mb-3">
                <h5>{course.title}</h5>
                <input 
                  type="file" 
                  className="form-control" 
                  onChange={(e) => handleMaterialUpload(e, course.id)} 
                />
              </div>
            ))}
          </div>
        );
      case 'evaluations':
        return (
          <div>
            <h4>Evaluaciones</h4>
            <form onSubmit={handleEvaluationSubmit}>
              <div className="mb-3">
                <label>ID del Curso</label>
                <input 
                  type="number" 
                  className="form-control" 
                  name="courseId" 
                  value={evaluationInput.courseId} 
                  onChange={handleEvaluationChange} 
                  required 
                />
              </div>
              <div className="mb-3">
                <label>ID del Estudiante</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="studentId" 
                  value={evaluationInput.studentId} 
                  onChange={handleEvaluationChange} 
                  required 
                />
              </div>
              <div className="mb-3">
                <label>Comentario</label>
                <textarea 
                  className="form-control" 
                  name="comment" 
                  value={evaluationInput.comment} 
                  onChange={handleEvaluationChange} 
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label>Nota</label>
                <input 
                  type="number" 
                  className="form-control" 
                  name="grade" 
                  value={evaluationInput.grade} 
                  onChange={handleEvaluationChange} 
                  required 
                />
              </div>
              <button type="submit" className="btn btn-secondary">Enviar Evaluación</button>
            </form>
          </div>
        );
      case 'announcements':
        return (
          <div>
            <h4>Anuncios</h4>
            <form onSubmit={handleAnnouncementSubmit}>
              <div className="mb-3">
                <label>Nuevo Anuncio</label>
                <textarea 
                  className="form-control" 
                  value={newAnnouncement} 
                  onChange={(e) => setNewAnnouncement(e.target.value)} 
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Publicar Anuncio</button>
            </form>
            <hr />
            <ul className="list-group">
              {announcements.map((announcement, index) => (
                <li key={index} className="list-group-item">{announcement}</li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mt-4">
      <h2>Panel del Profesor</h2>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'courses' ? 'active' : ''}`} 
            onClick={() => setActiveTab('courses')}
          >
            Mis Cursos
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'materials' ? 'active' : ''}`} 
            onClick={() => setActiveTab('materials')}
          >
            Materiales
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'evaluations' ? 'active' : ''}`} 
            onClick={() => setActiveTab('evaluations')}
          >
            Evaluaciones
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'announcements' ? 'active' : ''}`} 
            onClick={() => setActiveTab('announcements')}
          >
            Anuncios
          </button>
        </li>
      </ul>
      <div className="mt-3">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default TeacherDashboard;

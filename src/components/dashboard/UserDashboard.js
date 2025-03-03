// src/components/dashboard/UserDashboard.js
import React, { useState, useEffect } from 'react';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [forumMessages, setForumMessages] = useState([]);
  const [newForumMessage, setNewForumMessage] = useState('');
  const [evaluations, setEvaluations] = useState([]);

  // Simulación de datos iniciales para el estudiante
  useEffect(() => {
    // Cursos en los que el estudiante está inscrito
    const simulatedCourses = [
      { id: 1, title: 'Matemáticas Avanzadas', description: 'Curso sobre álgebra y cálculo.' },
      { id: 2, title: 'Historia Moderna', description: 'Exploración de la historia del siglo XX.' }
    ];
    setEnrolledCourses(simulatedCourses);

    // Materiales de estudio para cada curso
    const simulatedMaterials = [
      { id: 1, courseId: 1, title: 'Notas de Álgebra', file: 'algebra.pdf' },
      { id: 2, courseId: 2, title: 'Resumen de Historia', file: 'historia.pdf' }
    ];
    setMaterials(simulatedMaterials);

    // Mensajes del foro
    const simulatedForumMessages = [
      { id: 1, sender: 'profesor', message: 'Bienvenidos al foro del curso.' },
      { id: 2, sender: 'alumno1', message: '¿Alguien puede ayudarme con el tema X?' }
    ];
    setForumMessages(simulatedForumMessages);

    // Evaluaciones del estudiante
    const simulatedEvaluations = [
      { id: 1, courseId: 1, grade: 85, feedback: 'Buen desempeño en el examen parcial.' },
      { id: 2, courseId: 2, grade: 90, feedback: 'Excelente participación en clase.' }
    ];
    setEvaluations(simulatedEvaluations);
  }, []);

  // Función para enviar un nuevo mensaje en el foro
  const handleForumSubmit = (e) => {
    e.preventDefault();
    if (newForumMessage.trim() !== '') {
      const newMessage = {
        id: forumMessages.length + 1,
        sender: 'yo', // En un entorno real se usaría el nombre del estudiante autenticado
        message: newForumMessage
      };
      setForumMessages([...forumMessages, newMessage]);
      setNewForumMessage('');
    }
  };

  // Función para renderizar el contenido según la pestaña activa
  const renderTabContent = () => {
    switch (activeTab) {
      case 'courses':
        return (
          <div>
            <h4>Mis Cursos</h4>
            <ul className="list-group">
              {enrolledCourses.map(course => (
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
            <h4>Materiales de Estudio</h4>
            {enrolledCourses.map(course => (
              <div key={course.id} className="mb-3">
                <h5>{course.title}</h5>
                <ul className="list-group">
                  {materials.filter(m => m.courseId === course.id).map(material => (
                    <li key={material.id} className="list-group-item">
                      {material.title} - <a href={`#`}>Descargar {material.file}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      case 'forums':
        return (
          <div>
            <h4>Foros de Discusión</h4>
            <ul className="list-group">
              {forumMessages.map(msg => (
                <li key={msg.id} className="list-group-item">
                  <strong>{msg.sender}: </strong>{msg.message}
                </li>
              ))}
            </ul>
            <form onSubmit={handleForumSubmit} className="mt-3">
              <div className="mb-3">
                <label>Nuevo Mensaje</label>
                <textarea 
                  className="form-control"
                  value={newForumMessage}
                  onChange={(e) => setNewForumMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
            </form>
          </div>
        );
      case 'evaluations':
        return (
          <div>
            <h4>Mis Evaluaciones</h4>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID Curso</th>
                  <th>Nota</th>
                  <th>Comentarios</th>
                </tr>
              </thead>
              <tbody>
                {evaluations.map(evalItem => (
                  <tr key={evalItem.id}>
                    <td>{evalItem.courseId}</td>
                    <td>{evalItem.grade}</td>
                    <td>{evalItem.feedback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mt-4">
      <h2>Panel del Estudiante</h2>
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
            className={`nav-link ${activeTab === 'forums' ? 'active' : ''}`}
            onClick={() => setActiveTab('forums')}
          >
            Foros
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
      </ul>
      <div className="mt-3">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default UserDashboard;

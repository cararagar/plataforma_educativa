// src/components/dashboard/AdminDashboard.js
import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [stats, setStats] = useState({ totalUsers: 0, totalCourses: 0 });
  const [config, setConfig] = useState({ siteTitle: 'Plataforma Educativa', maintenanceMode: 'off' });
  const [message, setMessage] = useState('');

  // Simulación de datos iniciales
  useEffect(() => {
    const simulatedUsers = [
      { id: 1, username: 'admin', role: 'admin' },
      { id: 2, username: 'profesor', role: 'teacher' },
      { id: 3, username: 'alumno1', role: 'student' },
      { id: 4, username: 'alumno2', role: 'student' }
    ];
    setUsers(simulatedUsers);

    const simulatedCourses = [
      { id: 1, title: 'Matemáticas Avanzadas' },
      { id: 2, title: 'Historia Moderna' },
      { id: 3, title: 'Programación Web' }
    ];
    setCourses(simulatedCourses);

    setStats({ totalUsers: simulatedUsers.length, totalCourses: simulatedCourses.length });
  }, []);

  // Funciones para Usuarios
  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleSaveUser = () => {
    setUsers(users.map(u => (u.id === editingUser.id ? editingUser : u)));
    setEditingUser(null);
    setMessage('Usuario actualizado exitosamente.');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(u => u.id !== userId));
    setStats(prev => ({ ...prev, totalUsers: prev.totalUsers - 1 }));
    setMessage('Usuario eliminado.');
    setTimeout(() => setMessage(''), 3000);
  };

  // Funciones para Cursos
  const handleEditCourse = (course) => {
    setEditingCourse(course);
  };

  const handleSaveCourse = () => {
    setCourses(courses.map(c => (c.id === editingCourse.id ? editingCourse : c)));
    setEditingCourse(null);
    setMessage('Curso actualizado exitosamente.');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleDeleteCourse = (courseId) => {
    setCourses(courses.filter(c => c.id !== courseId));
    setStats(prev => ({ ...prev, totalCourses: prev.totalCourses - 1 }));
    setMessage('Curso eliminado.');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleAddCourse = () => {
    const newCourse = { id: courses.length + 1, title: `Nuevo Curso ${courses.length + 1}` };
    setCourses([...courses, newCourse]);
    setStats(prev => ({ ...prev, totalCourses: prev.totalCourses + 1 }));
    setMessage('Nuevo curso agregado.');
    setTimeout(() => setMessage(''), 3000);
  };

  // Funciones para Configuración
  const handleConfigChange = (e) => {
    const { name, value } = e.target;
    setConfig({ ...config, [name]: value });
  };

  const handleConfigSubmit = (e) => {
    e.preventDefault();
    // Simulación de guardar configuración
    setMessage('Configuración guardada exitosamente.');
    setTimeout(() => setMessage(''), 3000);
  };

  // Renderizado del contenido de cada pestaña
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div>
            <h4>Resumen del Sistema</h4>
            <p>Total de usuarios: {stats.totalUsers}</p>
            <p>Total de cursos: {stats.totalCourses}</p>
          </div>
        );
      case 'users':
        return (
          <div>
            <h4>Gestión de Usuarios</h4>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Usuario</th>
                  <th>Rol</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>
                      {editingUser && editingUser.id === user.id ? (
                        <input
                          type="text"
                          value={editingUser.username}
                          onChange={(e) => setEditingUser({ ...editingUser, username: e.target.value })}
                        />
                      ) : (
                        user.username
                      )}
                    </td>
                    <td>
                      {editingUser && editingUser.id === user.id ? (
                        <select
                          value={editingUser.role}
                          onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
                        >
                          <option value="admin">admin</option>
                          <option value="teacher">profesor</option>
                          <option value="student">alumno</option>
                        </select>
                      ) : (
                        user.role
                      )}
                    </td>
                    <td>
                      {editingUser && editingUser.id === user.id ? (
                        <button className="btn btn-sm btn-success me-2" onClick={handleSaveUser}>Guardar</button>
                      ) : (
                        <button className="btn btn-sm btn-primary me-2" onClick={() => handleEditUser(user)}>Editar</button>
                      )}
                      <button className="btn btn-sm btn-danger" onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'courses':
        return (
          <div>
            <h4>Gestión de Cursos</h4>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Título</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {courses.map(course => (
                  <tr key={course.id}>
                    <td>{course.id}</td>
                    <td>
                      {editingCourse && editingCourse.id === course.id ? (
                        <input
                          type="text"
                          value={editingCourse.title}
                          onChange={(e) => setEditingCourse({ ...editingCourse, title: e.target.value })}
                        />
                      ) : (
                        course.title
                      )}
                    </td>
                    <td>
                      {editingCourse && editingCourse.id === course.id ? (
                        <button className="btn btn-sm btn-success me-2" onClick={handleSaveCourse}>Guardar</button>
                      ) : (
                        <button className="btn btn-sm btn-primary me-2" onClick={() => handleEditCourse(course)}>Editar</button>
                      )}
                      <button className="btn btn-sm btn-danger" onClick={() => handleDeleteCourse(course.id)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn btn-success" onClick={handleAddCourse}>Agregar Nuevo Curso</button>
          </div>
        );
      case 'settings':
        return (
          <div>
            <h4>Configuración del Sistema</h4>
            <form onSubmit={handleConfigSubmit}>
              <div className="mb-3">
                <label htmlFor="siteTitle" className="form-label">Título del Sitio</label>
                <input
                  type="text"
                  className="form-control"
                  id="siteTitle"
                  name="siteTitle"
                  value={config.siteTitle}
                  onChange={handleConfigChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="maintenanceMode" className="form-label">Modo de Mantenimiento</label>
                <select
                  className="form-select"
                  id="maintenanceMode"
                  name="maintenanceMode"
                  value={config.maintenanceMode}
                  onChange={handleConfigChange}
                >
                  <option value="off">Desactivado</option>
                  <option value="on">Activado</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Guardar Configuración</button>
            </form>
          </div>
        );
      case 'reports':
        return (
          <div>
            <h4>Reportes y Estadísticas</h4>
            <p>Aquí se mostrarán gráficos y reportes del rendimiento de la plataforma.</p>
            <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
              <p>Gráfico Simulado: Rendimiento de la Plataforma</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mt-4">
      <h2>Panel del Administrador: Admin</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
            Resumen
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'users' ? 'active' : ''}`} onClick={() => setActiveTab('users')}>
            Usuarios
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'courses' ? 'active' : ''}`} onClick={() => setActiveTab('courses')}>
            Cursos
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>
            Configuración
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'reports' ? 'active' : ''}`} onClick={() => setActiveTab('reports')}>
            Reportes
          </button>
        </li>
      </ul>
      <div className="mt-3">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;

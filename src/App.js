import React from 'react';

function App() {
  return (
    <div className="App">
     <h1>David</h1>
      <h2>Tabla de integrantes de Pet Society</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>Nombres</th>
              <th>Correo</th>
              <th>Cedula</th>
              <th>Celular</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sebastián Parra Lopera</td>
              <td>sebastianparralopera351@gmail.com</td>
              <td>1011390733</td>
              <td>3104109270</td>
            </tr>
            <tr>
              <td>Joaquín Higuita López</td>
              <td>Joaquin050218@gmail.com</td>
              <td>1015066347</td>
              <td>3206270582</td>
            </tr>
            <tr>
              <td>David Castañeda Quintero</td>
              <td>davidcastanedaquintero@gmail.com</td>
              <td>1025641452</td>
              <td>3052583246</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
  );
}

export default App;

import React from 'react';
import RegistrationForm from './RegistrationForm';

const App: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Lab_4.1</h1>
      </header>
      <main>
        <section>
          <h2>Registration Form</h2>
          <RegistrationForm />
        </section>
      </main>
    </div>
  );
};

export default App;
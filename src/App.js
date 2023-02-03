import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Project from './components/project';

const classes = 'container text-center';

function App() {
  return (
    <main className={classes}>
      <Header />
      <Project />
      <Footer />
    </main>
  );
}

export default App;

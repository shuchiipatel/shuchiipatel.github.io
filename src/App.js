import './App.scss';
import { Route, Routes } from 'react-router-dom'
import AnimatedCursor from "react-animated-cursor"
import Layout from './components/Layout'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';

function App() {
  return (
    <>
    <AnimatedCursor
      color='198, 222, 65'
      innerSize={5}
      outerSize={25}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: '#C6DE41'
      }}
      outerStyle={{
        border: '1px solid #C6DE41',
      }}
    />
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='project' element={<Project />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;

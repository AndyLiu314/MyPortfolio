import { useState } from 'react'
import * as THREE from 'three';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Canvas from './canvas';
import Home from './pages/Home'
import './App.css'

/* TESTING THREE.JS SCENE 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#three-canvas'),
});

renderer.setPixelRatio(window.devicePixelRatio);
//renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setSize(800,600);
camera.position.setZ(30);
renderer.render(scene, camera); */


/* DEFAULT MAIN PAGE
<>
<div>
  <a href="https://vitejs.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.jsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p>
</> 
*/


function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
    </main>
  )
}

export default App

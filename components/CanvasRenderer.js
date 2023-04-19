import React, { useState, useRef } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

const CanvasRenderer = () => {
  const canvasRef = useRef();
  const [quoteData, setQuoteData] = useState({ name: '', email: '' });

  const handleFileChange = event => {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onload = event => {
      renderSTL(event.target.result);
    };
    reader.readAsArrayBuffer(file);
  };

  const renderSTL = data => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas });

    // carga el archivo STL utilizando STLLoader
    const loader = new STLLoader();
    const geometry = loader.parse(data);
    const material = new THREE.MeshNormalMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  };

  const handleQuoteChange = event => {
    const { name, value } = event.target;
    setQuoteData(prevState => ({ ...prevState, [name]: value }));
  };

  const uploadQuote = async event => {
    event.preventDefault();

    const data = {
      name: quoteData.name,
      email: quoteData.email,
      // Agrega aquí cualquier otro dato que desees enviar
    };

    try {
      const response = await fetch('http://localhost:1337/api/cotizations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Indica que se está enviando JSON
        },
        body: JSON.stringify({ data }) // Envía el objeto 'data' como JSON
      });

      if (response.ok) {
        alert('¡Cotización enviada con éxito!');
        setQuoteData({ name: '', email: '', message: '' });
      } else {
        alert('Ha ocurrido un error al enviar la cotización.');
      }
    } catch (error) {
      console.error(error);
      alert('Ha ocurrido un error al enviar la cotización.');
    }
  };


  return (
    <>
      <canvas ref={canvasRef} />
      <form onSubmit={uploadQuote}>
        <label>
          Nombre:
          <input type="text" name="name" value={quoteData.name} onChange={handleQuoteChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={quoteData.email} onChange={handleQuoteChange} />
        </label>
        <label>
          Email:
          <input type="file" name="model" value={quoteData.email} onChange={handleFileChange} />
        </label>


        <button type="submit">Enviar cotización</button>
      </form>
    </>
  );
};

export default CanvasRenderer;

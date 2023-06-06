import React, { useState, useRef } from "react";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

const CanvasRenderer = () => {
  const [quoteData, setQuoteData] = useState({ name: "", email: "" });
  const [model, setModel] = useState(null);
  const canvasRef = useRef();
  const [sphereHeight, setsphereHeight] = useState(0);
  const [filamentCost, setFilamentCost] = useState(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.addEventListener("load", (event) => {
      const arrayBuffer = event.target.result;
      setModel(arrayBuffer);
      renderSTL(arrayBuffer);
    });

    reader.readAsArrayBuffer(file);
  };

  const handleHeight = (event) => {
    const height = event.target.value;
    console.log("la altura es", height);
    setsphereHeight(height);
  };

  const renderSTL = (data) => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.width / canvas.height,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setClearColor(0xffffff); // El valor 0xffffff representa el color blanco

    // carga el archivo STL utilizando STLLoader
    const loader = new STLLoader();
    const geometry = loader.parse(data);
    console.log("modelo3d", geometry);
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

    const calculateFilamentCost = (geometry) => {
      const filamentDensity = 0.00127; // g/mm³
      const printLength = sphereHeight * 10; // convertir a milímetros
      const crossSectionalArea =
        Math.pow(geometry.boundingSphere.radius * 10, 2) * Math.PI; // convertir a milímetros y calcular el área
      const filamentVolume = crossSectionalArea * printLength;
      const filamentMass = filamentVolume * filamentDensity; // g

      return filamentMass;
    };

    const filamentCost = calculateFilamentCost(geometry);
    console.log(`Costo de filamento: ${filamentCost} g`);
    setFilamentCost(filamentCost);
  };

  const handleQuoteChange = (event) => {
    const { name, value } = event.target;
    setQuoteData((prevState) => ({ ...prevState, [name]: value }));
  };

  const uploadQuote = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("data", JSON.stringify(quoteData));

    if (model) {
      const blob = new Blob([model], { type: "application/octet-stream" });
      formData.append(`files.model`, blob, "model.stl");
    }

    try {
      const response = await fetch(
        "https://prawie-backend.fly.dev/api/cotizations",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        alert("¡Cotización enviada con éxito!");
        setQuoteData({ name: "", email: "" });
        setModel(null);
      } else {
        alert("Ha ocurrido un error al enviar la cotización.");
      }
    } catch (error) {
      console.error(error);
      alert("Ha ocurrido un error al enviar la cotización.");
    }
  };

  return (
    <>
      <canvas ref={canvasRef}></canvas>
      <form onSubmit={uploadQuote}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={quoteData.name}
            onChange={handleQuoteChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={quoteData.email}
            onChange={handleQuoteChange}
          />
        </label>
        <label>
          Modelo:
          <input type="file" name="model" onChange={handleFileChange} />
        </label>
        <label>
          Altura:
          <input type="number" name="height" onChange={handleHeight} />
        </label>
        <button type="submit">Enviar cotización</button>
      </form>
      <span>Costo de filamento: {filamentCost}</span>
    </>
  );
};

export default CanvasRenderer;

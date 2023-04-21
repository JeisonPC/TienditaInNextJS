import * as THREE from 'three';
import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';



function calculateFilamentUsage(model, density) {
  return new Promise((resolve, reject) => { 
    // Convertir el objeto ArrayBuffer en un objeto Blob
    const blob = new Blob([model], { type: 'application/octet-stream' });

    // Cargar el modelo STL
    const loader = new STLLoader();
    loader.load(URL.createObjectURL(blob), (geometry) => {
      // Triangulamos las caras del modelo
      BufferGeometryUtils.triangulateQuads(geometry);

      // Calculamos el volumen de la malla
      const height = geometry.boundingBox.max.z - geometry.boundingBox.min.z;
      const volume = geometry.computeFaceNormals().reduce((acc, face) => {
        const area = face.length() * face.normal.dot(face.midpoint());
        return acc + area;
      }, 0) * height / 3;

      // Convertimos el volumen en peso de filamento
      const weight = volume * density;

      // Resolvemos la promesa con el resultado
      resolve(weight);
    }, undefined, reject);
  });
}


// Ejemplo de uso:
/* const density = 1.25; // Densidad de filamento en gramos/cm^3
calculateFilamentUsage(modelUrl, density).then((weight) => {
  console.log(`El modelo utiliza ${weight.toFixed(2)} gramos de filamento.`);
}).catch((error) => {
  console.error('Ocurrió un error al calcular el consumo de filamento:', error);
}); */

export default calculateFilamentUsage;

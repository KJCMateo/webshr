// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// Create a Three.JS Scene
const scene = new THREE.Scene();
// Create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Keep track of the mouse position
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

// Keep the 3D object on a global variable
let object;

// OrbitControls allow the camera to move around the scene
let controls;

// Set which object to render
let objToRender = "floormap";

// Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

// Load the file
loader.load(
  `models/${objToRender}.glb`,
  function (gltf) {
    object = gltf.scene;
    scene.add(object);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.error(error);
  }
);

// Instantiate a renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container3D").appendChild(renderer.domElement);

// Set camera position
camera.position.z = 500;

// Add lights
const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(500, 500, 500);
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, 1);
scene.add(ambientLight);

// Add camera controls
controls = new OrbitControls(camera, renderer.domElement);

// Animate the scene
function animate() {
  requestAnimationFrame(animate);

  if (object && objToRender === "eye") {
    object.rotation.y = -3 + (mouseX / window.innerWidth) * 3;
    object.rotation.x = -1.2 + (mouseY * 2.5) / window.innerHeight;
  }

  renderer.render(scene, camera);
}

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

document.onmousemove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
};

toggleButton.addEventListener("click", () => {
  const isOpen = sidebar.style.left === "0px";
  sidebar.style.left = isOpen ? "-400px" : "0px"; // Toggle open/close
  sidebar.classList.toggle("open", !isOpen); // Add or remove the 'open' class
});

animate();

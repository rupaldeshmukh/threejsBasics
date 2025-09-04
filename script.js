// 🎭 Step 1: Create a Scene (like an empty stage to hold objects, lights, and cameras)
const scene = new THREE.Scene();

// 👁️ Step 2: Create a Camera (your viewpoint in the 3D world)
// - 75: field of view (how wide the camera sees)
// - window.innerWidth / window.innerHeight: aspect ratio (keeps shapes from stretching)
// - 0.1: nearest distance visible
// - 1000: farthest distance visible
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// 🟦 Step 3: Create a Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);  // cube shape
const material = new THREE.MeshBasicMaterial({ color: "red", wireframe: true }); // red wireframe look
const cube = new THREE.Mesh(geometry, material); // combine shape + material
scene.add(cube); // add cube to the stage

// 🎥 Step 4: Move camera back so we can see the cube
camera.position.z = 5;

// 🖼️ Step 5: Create a Renderer (draws the scene onto the canvas)
const canvas = document.querySelector("#webgl"); // the <canvas> in HTML
const renderer = new THREE.WebGLRenderer({ canvas }); //Make a renderer that will draw my 3D world into the canvas
renderer.setSize(window.innerWidth, window.innerHeight); // match screen size

// 🔄 Step 6: Animation function (called every frame)
function animate() {
  renderer.render(scene, camera);   // draw the scene through the camera
  cube.rotation.x += 0.01;          // rotate cube a little on X axis
  cube.rotation.y += 0.01;          // rotate cube a little on Y axis
}

// ▶️ Step 7: Start animation loop (keeps calling animate)
renderer.setAnimationLoop(animate);

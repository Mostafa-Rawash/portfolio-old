import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerHeight / window.innerWidth,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.render(scene, camera);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const geometry = new THREE.SphereGeometry(10, 32, 32);
// const geometry = new THREE.BoxGeometry();

// const material = new THREE.MeshBasicMaterial({  color: 0xff0000 });
const loader = new THREE.TextureLoader();
const material = new THREE.MeshBasicMaterial({
  map: loader.load("assets/img/20200704_001815.jpg"),
});
// const material = new THREE.MeshBasicMaterial({
//      color: 0xff6347,
//      wireframe: true,
// });

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.y +=0.06;
  mesh.rotation.x = scrollX;
//   mesh.rotation.z = scroll.apply;

  renderer.render(scene, camera);
}
animate();

// onscroll.apply();

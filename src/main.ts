import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh, OrthographicCamera, CameraHelper, Euler } from 'three';

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new BoxGeometry();

// make material with wireframe
const material = new MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true
});

const cube = new Mesh(geometry, material);
scene.add(cube);

cube.position.x = 0;
cube.position.y = 0;
cube.position.z = 0;

camera.position.x = 2;
camera.position.y = 2;
camera.position.z = 4;
camera.lookAt(1,1,1);

renderer.render(scene, camera);


const windowResize =  () => {
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

const animate = () => {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    // cube.rotation.z += 0.01;

    renderer.render( scene, camera );
};

animate();
windowResize();



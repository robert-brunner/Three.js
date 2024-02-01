import * as THREE from 'three'
import './style.css'



// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const group = new THREE.Group ()
group.position.y = 1
group.scale.y = 2
group.rotation.y = 1
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0xff0000})
)

group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00})
)
cube2.position.x = -2
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0x00ff})
    )
    
cube3.position.x = 2
group.add(cube3)

//position 
// mesh.position.x = 3
// mesh.position.y = 1
// mesh.position.z = 1
// either or ||
// mesh.position.set(0.7, -0.6, 1)

//rotation
// mesh.rotation.x = 1
// mesh.rotation.y = 3.14159 //pi will give half a rotation! cool !
// mesh.rotation.z = 1
// mesh.reorder('YXZ') //prevents GimbalLock
// mesh.rotation.set(.5,0,0)




//to position an object in space... Axes Helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)


//SCALE
// mesh.scale.x = 1
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
// ||
// mesh.scale.set (2, 0.5, 0.5)

/**
 * Sizes
*/
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
*/
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)


// console.log(mesh.position.distanceTo(camera.position))


// camera.lookAt(mesh.position)// look at center of object. 


/**
 * Renderer
*/
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

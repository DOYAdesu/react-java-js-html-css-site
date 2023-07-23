import {  
  useGLTF, 
  PresentationControls, 
  Float, 
  Text,
  Html
} from "@react-three/drei";
import "./App.css";
import { Canvas } from "react-three-fiber";

function App() {
  const macbook = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  const coffee = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cup-tea/model.gltf"
  );

  const  burger= useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/burger/model.gltf"
  );

  return (
    <div>
      <Canvas camera={{ fov: 45, near: 0.1, far: 2000, position: [0,1.5,6] }}>
        <color args={["#f5f5f5"]} attach="background" />
        <ambientLight />
        <directionalLight intensity={1.4}/>
        <PresentationControls global 
        config={{mass:2,tension:400}}
        snap={{mass:4,tension:300}}
        >
          <Float rotationIntensity={1.5}>
          <rectAreaLight
            color={"#0021a7"}
            intensity={55}
            rotation={[0.1, Math.PI, 0]}
            width={2.0}
            height={1.65}
            position={[0, 0, -1]}
          />
          <primitive object={macbook.scene} 
          position={[0, -1.5, 0]}>
            <Html 
              position={[0, 1.56, -1.4]} 
              distanceFactor={[1.17]} 
              rotation-x={[-0.256]}
              transform
              wrapperClass="htmlScreen"
            >
            <iframe src="http://127.0.0.1:5500/index.html#about" 
            frameborder="0">
            </iframe>
            </Html>
          </primitive> 

          </Float>
          <Float rotationIntensity={1.5}>
          <rectAreaLight
            color={"#0021a7"}
            intensity={55}
            rotation={[0.1, Math.PI, 0]}
            width={2.0}
            height={1.65}
            position={[0, 0, -1]}
          />
          <primitive object={coffee.scene} 
          position={[-2.4, -1.3, 0.2]} 
          scale={[2, 2, 2]}
          />
          </Float>
          <Float rotationIntensity={1.5}>
          <rectAreaLight
            color={"#0021a7"}
            intensity={55}
            rotation={[0.1, Math.PI, 0]}
            width={2.0}
            height={1.65}
            position={[0, 0, -1]}
          />
          <primitive object={burger.scene} 
          position={[2.4, -1.3, 0.2]} 
          scale={[2, 2, 2]}
          />
          </Float>
          <Text
            fontSize={0.6}
            position={[0,1.725,0.75]}
          >
            My Portfolio
          </Text>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default App;

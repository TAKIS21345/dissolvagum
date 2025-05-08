"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF, Html } from "@react-three/drei";
import { Cube } from "lucide-react";

// Placeholder for a 3D model - in a real scenario, you would load a .gltf or .glb file
// For now, we'll use a simple box as a placeholder if no model is provided.
function Model({ modelPath }: { modelPath?: string }) {
  if (modelPath) {
    try {
      const { scene } = useGLTF(modelPath);
      return <primitive object={scene} scale={1.5} />;
    } catch (error) {
      console.error("Error loading GLTF model:", error);
      // Fallback to a simple box if model loading fails
      return (
        <mesh>
          <boxGeometry args={[1.5, 2.5, 0.3]} />
          <meshStandardMaterial color="#86EFAC" /> {/* Spearmint Green */}
        </mesh>
      );
    }
  } 
  // Default placeholder if no modelPath is given
  return (
    <mesh>
      <boxGeometry args={[1.5, 2.5, 0.3]} /> {/* Dimensions similar to a gum pack */}
      <meshStandardMaterial color="#5EEAD4" /> {/* Teal color as a fallback */}
    </mesh>
  );
}

function Loader() {
  return (
    <Html center>
      <div className="text-center text-muted-foreground font-glacial-indifference">
        <Cube size={32} className="animate-spin-slow mx-auto mb-2" />
        <p>Loading 3D Model...</p>
      </div>
    </Html>
  )
}

const Product3DViewer = ({ productName, modelPath }: { productName: string, modelPath?: string }) => {
  return (
    <motion.div
      className="w-full h-72 md:h-96 bg-card dark:bg-gray-800/50 rounded-xl shadow-lg relative overflow-hidden border border-border aspect-square"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Canvas camera={{ fov: 45, position: [0, 1, 5] }} shadows>
        <Suspense fallback={<Loader />}>
          <Stage environment="city" intensity={0.5} adjustCamera shadows={false}>
            <Model modelPath={modelPath || "/dissolvagum-spearmint-pack.glb"} /> {/* Default to a conceptual model name */}
          </Stage>
        </Suspense>
        <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={true} minDistance={2} maxDistance={10} />
      </Canvas>
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/30 to-transparent pointer-events-none">
        <p className="font-glacial-indifference-bold text-sm text-white text-center truncate">
          Interactive 3D View: {productName}
        </p>
      </div>
    </motion.div>
  );
};

export default Product3DViewer;


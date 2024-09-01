/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import * as THREE from "three";
import { ContextualDashboardLayout } from "../ContextualDashboardLayout";
import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";

// TODO this is gross, there has to be a better way to import all of the possible planet textures and do the selection, but I'm lazy.
import alpine from "@assets/textures/planets/Alpine.png";
import savannah from "@assets/textures/planets/Savannah.png";
import swamp from "@assets/textures/planets/Swamp.png";
import tropical from "@assets/textures/planets/Tropical.png";
import gas1 from "@assets/textures/planets/Gaseous1.png";
import gas2 from "@assets/textures/planets/Gaseous2.png";
import gas3 from "@assets/textures/planets/Gaseous3.png";
import gas4 from "@assets/textures/planets/Gaseous4.png";
import icy from "@assets/textures/planets/Icy.png";
import martian from "@assets/textures/planets/Martian.png";
import terra1 from "@assets/textures/planets/Terrestrial1.png";
import terra2 from "@assets/textures/planets/Terrestrial2.png";
import terra3 from "@assets/textures/planets/Terrestrial3.png";
import terra4 from "@assets/textures/planets/Terrestrial4.png";
import venusian from "@assets/textures/planets/Venusian.png";
import volcanic from "@assets/textures/planets/Volcanic.png";

const contextualNavigationSample = [];

const actionButtons = [
  {
    name: "WELCOME TO AQUILIFER",
    func: () => {},
    tooltip: "Prepare to pirate",
  },
];

const Stars = () => {
  const starLocations = useMemo(() => {
    const getLocation = (i) => {
      return {
        id: `star-${i}`,
        x: Math.random() * 20 - 10,
        y: Math.random() * 20 - 10,
        size: Math.random() * 0.01,
        z: 0, // For this display, we don't want to render any stars in front of the rotating planet.
      };
    };

    var locations = [];
    for (var i = 0; i < Math.floor(Math.random() * 100) + 1000; i++)
      locations = locations.concat(getLocation(i));

    return locations;
  }, []);

  return (
    <group>
      {starLocations.map((location) => (
        <mesh key={location.id} position={[location.x, location.y, location.z]}>
          <circleGeometry args={[location.size, 5]} />
          <meshStandardMaterial
            color="#FFFFFF"
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
};

const Planet = (props) => {
  const planetTextures = [
    alpine,
    savannah,
    swamp,
    tropical,
    gas1,
    gas2,
    gas3,
    gas4,
    icy,
    martian,
    terra1,
    terra2,
    terra3,
    terra4,
    venusian,
    volcanic,
  ];

  // This reference will give us direct access to the mesh
  const meshRef = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [planetTexture, setPlanetTexture] = useState(
    Math.floor(Math.random() * planetTextures.length)
  );

  const textureMap = useLoader(
    THREE.TextureLoader,
    planetTextures[planetTexture]
  );

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    meshRef.current.rotation.x = 35;
    meshRef.current.rotation.y += delta * 0.15;
  });
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() =>
        setPlanetTexture(Math.floor(Math.random() * planetTextures.length))
      }
      // onPointerOver={(event) => setHover(true)}
      // onPointerOut={(event) => setHover(false)}
      {...props}
    >
      <sphereGeometry args={[0.5, 256, 256]} />
      <meshStandardMaterial map={textureMap} />
      {/* <meshStandardMaterial color={hovered ? "hotpink" : "#eab308"} /> */}
    </mesh>
  );
};

const HomeGraphicDisplay = () => {
  return (
    <div className="relative flex flex-1 w-full">
      <div className="relative w-full">
        <Canvas className="bg-gray-950">
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI / 2}
          />
          <Stars />
          <Planet position={[0, 0, 0]} scale={4} />
        </Canvas>
      </div>
    </div>
  );
};

export const HomeLayout = () => {
  return (
    <ContextualDashboardLayout
      primaryPanel={(context) => <HomeGraphicDisplay />}
      contextualNavigation={contextualNavigationSample}
      actionBar={actionButtons}
    />
  );
};

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { Mic, MicOff } from "lucide-react";
import { Button } from "@/components/ui/button";

function AnimatedSphere({ analyser }: { analyser: AnalyserNode | null }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);
  const [hovered, setHover] = useState(false);
  
  // Data array for audio analysis
  const dataArray = useRef(new Uint8Array(0));

  useEffect(() => {
    if (analyser) {
      dataArray.current = new Uint8Array(analyser.frequencyBinCount);
    }
  }, [analyser]);

  useFrame((state) => {
    if (meshRef.current) {
      // Default rotation
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      
      let audioValue = 0;
      
      if (analyser) {
        analyser.getByteFrequencyData(dataArray.current);
        // Calculate average volume from lower frequencies (bass/voice)
        const lowerFrequencies = dataArray.current.slice(0, dataArray.current.length / 4);
        const sum = lowerFrequencies.reduce((a, b) => a + b, 0);
        const average = sum / lowerFrequencies.length;
        
        // Normalize to 0-1 range (approximate)
        audioValue = average / 128; 
      } else {
        // Fallback simulated pulse
        audioValue = Math.sin(state.clock.getElapsedTime() * 2) * 0.1;
      }

      // Apply scale based on audio
      // Base scale 1.2, plus audio impact
      const targetScale = 1.2 + (audioValue * 0.8);
      
      // Smooth interpolation for scale
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
      // Update material distortion based on audio
      if (materialRef.current) {
        // More audio = faster and stronger distortion
        const targetDistort = 0.4 + (audioValue * 0.6);
        const targetSpeed = 2 + (audioValue * 5);
        
        materialRef.current.distort = THREE.MathUtils.lerp(materialRef.current.distort, targetDistort, 0.1);
        materialRef.current.speed = THREE.MathUtils.lerp(materialRef.current.speed, targetSpeed, 0.1);
        
        // Color shift on loud audio
        if (audioValue > 0.4) {
             materialRef.current.emissive.set("#00FFFF");
             materialRef.current.color.set("#00FFFF");
        } else {
             materialRef.current.emissive.set(hovered ? "#00FFFF" : "#C49BFF");
             materialRef.current.color.set(hovered ? "#00FFFF" : "#C49BFF");
        }
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} ref={meshRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
        <MeshDistortMaterial
          ref={materialRef}
          color={hovered ? "#00FFFF" : "#C49BFF"}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive={hovered ? "#00FFFF" : "#C49BFF"}
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
}

function Scene({ analyser }: { analyser: AnalyserNode | null }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#C49BFF" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#00FFFF" />
      
      <AnimatedSphere analyser={analyser} />
      
      <Sparkles count={100} scale={6} size={2} speed={0.4} opacity={0.5} color="#C49BFF" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </>
  );
}

export default function VoiceOrb({ className }: { className?: string }) {
  const [listening, setListening] = useState(false);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const toggleMicrophone = async () => {
    if (listening) {
      // Stop listening
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
      setAnalyser(null);
      setListening(false);
    } else {
      // Start listening
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        streamRef.current = stream;
        
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        audioContextRef.current = audioContext;
        
        const source = audioContext.createMediaStreamSource(stream);
        const newAnalyser = audioContext.createAnalyser();
        newAnalyser.fftSize = 256;
        
        source.connect(newAnalyser);
        setAnalyser(newAnalyser);
        setListening(true);
      } catch (err) {
        console.error("Error accessing microphone:", err);
        alert("Mikrofonzugriff verweigert oder nicht verfügbar.");
      }
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <Scene analyser={analyser} />
      </Canvas>
      
      {/* Microphone Toggle Button */}
      <div className="absolute bottom-4 right-4 z-30">
        <Button 
          variant={listening ? "destructive" : "secondary"} 
          size="sm" 
          onClick={toggleMicrophone}
          className={`rounded-full px-4 gap-2 transition-all duration-300 ${listening ? 'animate-pulse shadow-[0_0_15px_rgba(255,0,0,0.5)]' : 'shadow-lg hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]'}`}
        >
          {listening ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
          {listening ? "Listening..." : "Test Voice"}
        </Button>
      </div>
    </div>
  );
}

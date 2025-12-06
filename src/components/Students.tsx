import SphereImageGrid, { ImageData } from "./ui/SphereImageGrid";

const BASE_STUDENTS: Omit<ImageData, "id">[] = [
  { src: "https://images.unsplash.com/photo-1758178309498-036c3d7d73b3?w=200&h=200&fit=crop", alt: "Aziz Karimov", title: "Aziz Karimov", description: "Frontend Developer" },
  { src: "https://images.unsplash.com/photo-1757647016230-d6b42abc6cc9?w=200&h=200&fit=crop", alt: "Nilufar Saidova", title: "Nilufar Saidova", description: "UI/UX Designer" },
  { src: "https://images.unsplash.com/photo-1757906447358-f2b2cb23d5d8?w=200&h=200&fit=crop", alt: "Jasur Toshev", title: "Jasur Toshev", description: "Backend Developer" },
  { src: "https://images.unsplash.com/photo-1742201877377-03d18a323c18?w=200&h=200&fit=crop", alt: "Sevara Rahimova", title: "Sevara Rahimova", description: "Mobile Developer" },
  { src: "https://images.unsplash.com/photo-1757081791153-3f48cd8c67ac?w=200&h=200&fit=crop", alt: "Bobur Aliyev", title: "Bobur Aliyev", description: "Data Analyst" },
  { src: "https://images.unsplash.com/photo-1757626961383-be254afee9a0?w=200&h=200&fit=crop", alt: "Dilbar Umarova", title: "Dilbar Umarova", description: "Full Stack Developer" },
  { src: "https://images.unsplash.com/photo-1756748371390-099e4e6683ae?w=200&h=200&fit=crop", alt: "Timur Nazarov", title: "Timur Nazarov", description: "DevOps Engineer" },
  { src: "https://images.unsplash.com/photo-1755884405235-5c0213aa3374?w=200&h=200&fit=crop", alt: "Gulnora Xasanova", title: "Gulnora Xasanova", description: "QA Engineer" },
  { src: "https://images.unsplash.com/photo-1757495404191-e94ed7e70046?w=200&h=200&fit=crop", alt: "Sherzod Qodirov", title: "Sherzod Qodirov", description: "Cloud Architect" },
  { src: "https://images.unsplash.com/photo-1756197256528-f9e6fcb82b04?w=200&h=200&fit=crop", alt: "Kamola Ergasheva", title: "Kamola Ergasheva", description: "Project Manager" },
  { src: "https://images.unsplash.com/photo-1534083220759-4c3c00112ea0?w=200&h=200&fit=crop", alt: "Nodir Ismoilov", title: "Nodir Ismoilov", description: "Security Specialist" },
  { src: "https://images.unsplash.com/photo-1755278338891-e8d8481ff087?w=200&h=200&fit=crop", alt: "Zarina Yusupova", title: "Zarina Yusupova", description: "ML Engineer" }
];

// Generate more images for fuller sphere
const STUDENTS: ImageData[] = [];
for (let i = 0; i < 60; i++) {
  const baseIndex = i % BASE_STUDENTS.length;
  const baseStudent = BASE_STUDENTS[baseIndex];
  STUDENTS.push({
    id: `student-${i + 1}`,
    ...baseStudent,
  });
}

const Students = () => {
  return (
    <section className="py-20 px-5 min-h-screen flex flex-col items-center bg-gradient-to-b from-background to-primary/5">
      <h2 className="text-center text-4xl font-bold mb-5 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent font-display">
        Bizning Talabalar
      </h2>
      <p className="text-center text-muted-foreground mb-10 max-w-xl">
        IT Future Hub'da ta'lim olayotgan iqtidorli talabalarimiz bilan tanishing
      </p>
      
      <SphereImageGrid
        images={STUDENTS}
        containerSize={600}
        sphereRadius={200}
        dragSensitivity={0.8}
        momentumDecay={0.96}
        maxRotationSpeed={6}
        baseImageScale={0.15}
        hoverScale={1.3}
        perspective={1000}
        autoRotate={true}
        autoRotateSpeed={0.2}
      />
    </section>
  );
};

export default Students;

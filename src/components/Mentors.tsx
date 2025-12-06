import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Mentor {
  name: string;
  designation: string;
  quote: string;
  src: string;
}

const mentors: Mentor[] = [
  {
    name: "Jahongir Rahmonov",
    designation: "Senior Software Engineer",
    quote: "Dasturlash nafaqat kod yozish, balki muammolarni ijodiy hal qilish san'atidir. Har bir talabamizga individual yondashuv bilan kelajakning eng yaxshi mutaxassislarini tayyorlaymiz.",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop"
  },
  {
    name: "Dilnoza Karimova",
    designation: "UI/UX Design Lead",
    quote: "Dizayn - bu faqat chiroyli ko'rinish emas, bu foydalanuvchi tajribasini yaratish. Biz talabalarimizga zamonaviy dizayn tamoyillarini o'rgatamiz.",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop"
  },
  {
    name: "Sardor Toshmatov",
    designation: "Full Stack Developer",
    quote: "Texnologiyalar tez o'zgaradi, lekin asosiy tamoyillar o'zgarmaydi. Talabalarimizga mustahkam poydevor beramiz.",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
  },
  {
    name: "Madina Azimova",
    designation: "Data Science Instructor",
    quote: "Ma'lumotlar - bu yangi neft. Biz talabalarimizga katta hajmdagi ma'lumotlardan qiymat yaratishni o'rgatamiz.",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop"
  }
];

const Mentors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % mentors.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + mentors.length) % mentors.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  const currentMentor = mentors[currentIndex];
  const words = currentMentor.quote.split(" ");

  return (
    <section className="py-20 px-5 bg-gradient-to-br from-primary/5 to-purple-500/5">
      <h2 className="text-center text-4xl font-bold mb-16 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent font-display">
        Bizning Mentorlar
      </h2>

      <div className="max-w-4xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Container */}
          <div className="relative h-80 w-full">
            {mentors.map((mentor, index) => (
              <img
                key={mentor.name}
                src={mentor.src}
                alt={mentor.name}
                className={`absolute inset-0 w-full h-full object-cover rounded-3xl transition-all duration-500 ease-out ${
                  index === currentIndex
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-50 scale-95 -rotate-y-5"
                }`}
              />
            ))}
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between min-h-72 py-5">
            <div
              key={currentIndex}
              className="animate-fade-in"
            >
              <h3 className="text-2xl font-bold text-foreground mb-1">
                {currentMentor.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {currentMentor.designation}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {words.map((word, i) => (
                  <span
                    key={i}
                    className="word-reveal"
                    style={{ animationDelay: `${i * 0.02}s` }}
                  >
                    {word}{" "}
                  </span>
                ))}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={goToPrev}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-all hover:bg-primary hover:text-primary-foreground group"
              >
                <ChevronLeft className="w-5 h-5 transition-transform group-hover:rotate-12" />
              </button>
              <button
                onClick={goToNext}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-all hover:bg-primary hover:text-primary-foreground group"
              >
                <ChevronRight className="w-5 h-5 transition-transform group-hover:rotate-12" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;

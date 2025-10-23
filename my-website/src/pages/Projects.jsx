// import { motion } from "framer-motion";

// export default function Projects() {
//   const projects = [
//     {
//       title: "🌐 Личный сайт",
//       description:
//         "Мой персональный сайт-портфолио, где я рассказываю о себе, показываю проекты и делюсь опытом.",
//       tech: "React, Tailwind, Framer Motion",
//       link: "#",
//     },
//     {
//       title: "🐍 Python-бот",
//       description:
//         "Telegram-бот, который помогает ученикам решать задачи по математике и информатике.",
//       tech: "Python, aiogram",
//       link: "#",
//     },
//     {
//       title: "💡 Arduino-проект",
//       description:
//         "Мини-умный дом с датчиками температуры, освещения и управления светом.",
//       tech: "Arduino, C++",
//       link: "#",
//     },
//   ];

//   return (
//     <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen py-20 px-6">
//       <motion.h1
//         className="text-4xl md:text-5xl font-bold text-center mb-12"
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         🚀 Мои проекты
//       </motion.h1>

//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project, i) => (
//           <motion.div
//             key={i}
//             className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition transform hover:-translate-y-2"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.1, duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-2xl font-bold mb-3 text-blue-400">
//               {project.title}
//             </h2>
//             <p className="text-gray-300 mb-4">{project.description}</p>
//             <p className="text-sm text-gray-400 mb-6">
//               🧰 {project.tech}
//             </p>
//             <a
//               href={project.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold transition"
//             >
//               Посмотреть
//             </a>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen flex items-center justify-center">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-black"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🚧 В разработке
      </motion.h1>
    </div>
  );
}

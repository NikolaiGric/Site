// 📄 Home.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../App.css"; 
export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="vh-100 vw-100 d-flex align-items-center m-0 p-0"
      style={{
        background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
        color: "white",
        overflow: "hidden",
      }}
    >
      <div className="row w-100 m-0 p-0">
        {/* 📝 Левая часть — текст */}
        <motion.div
          className="col-md-6 d-flex flex-column justify-content-center px-4 px-md-5 text-center text-md-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="fw-bold display-4 mb-3">
            Привет 👋<br /> Я <span className="text-info">Николай Грицак</span>
          </h1>
          <p className="lead mb-4">
            Начинающий разработчик и преподаватель.<br />
            Работаю с Python, веб-технологиями и учу ребят программировать.
          </p>
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-md-start">
            <motion.button
              className="btn btn-light btn-lg shadow-sm"
              onClick={() => navigate("/about")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              👨‍🏫 Обо мне
            </motion.button>
            <motion.button
              className="btn btn-outline-light btn-lg shadow-sm"
              onClick={() => navigate("/projects")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              💻 Проекты
            </motion.button>
          </div>
        </motion.div>

        {/* 📸 Правая часть — фото */}
        <motion.div
          className="col-md-6 d-flex justify-content-center align-items-center p-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/img/MyFace.jpg"
            alt="Николай Грицак"
            className="rounded-4 shadow-lg"
            style={{
              width: "90%",       // 📏 Увеличил размер
              maxWidth: "550px",  // ✅ Ограничение сверху, чтобы не ломало верстку
              height: "auto",
              objectFit: "cover",
            }}
            onLoad={() => console.log("✅ Фото успешно загружено")}
            onError={(e) => {
              console.error("❌ Ошибка загрузки фото:", e.target.src);
              console.warn("📂 Проверь путь и наличие файла в public/img/");
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

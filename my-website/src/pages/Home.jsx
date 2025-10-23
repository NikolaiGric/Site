import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Home() {
  const navigate = useNavigate();

  // 🔧 Убираем скролл страницы и обнуляем отступы body (важно!)
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "hidden"; // запрет прокрутки
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="d-flex align-items-center justify-content-center m-0 p-0"
      style={{
        minHeight: "100vh", // ✅ ровно по экрану
        width: "100vw",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
        color: "white",
      }}
    >
      <div
        className="row w-100 h-100 m-0 p-0 flex-column flex-md-row align-items-center"
        style={{ overflow: "hidden" }}
      >
        {/* 📸 Фото — сверху на мобилках, справа на ПК */}
        <motion.div
          className="col-md-6 d-flex justify-content-center align-items-center p-0 order-1 order-md-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{
            // 🔧 Отступ сверху для мобильных, чтобы фото не попадало под navbar
            paddingTop: "70px",
          }}
        >
          <img
            src="/img/MyFace.jpg"
            alt="Николай Грицак"
            className="rounded-4 shadow-lg"
            style={{
              width: "85%",
              maxWidth: "500px",
              height: "auto",
              objectFit: "cover",
            }}
            onLoad={() => console.log("✅ Фото успешно загружено")}
            onError={(e) => {
              console.error("❌ Ошибка загрузки фото:", e.target.src);
            }}
          />
        </motion.div>

        {/* 📝 Текст — под фото на телефонах, слева на ПК */}
        <motion.div
          className="col-md-6 d-flex flex-column justify-content-center px-4 px-md-5 text-center text-md-start order-2 order-md-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{
            paddingBottom: "40px", // чтобы текст не прижимался к низу на мобилке
          }}
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
      </div>
    </div>
  );
}

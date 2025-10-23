import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTelegramPlane, FaWhatsapp, FaVk } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function About() {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      message: formData.message,
    };

    emailjs
      .send(
        "service_1mu7hj8",
        "template_rgucbwm",
        templateParams,
        "3fV7Il-fJl_LZ8vLG"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSent(true);
          setFormData({ name: "", message: "" });
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <div className="container py-5">
      {/* 🧑‍💻 О себе */}
      <div className="text-center mb-5">
        <img
          src="../img/MyFace.jpg"
          alt="Моё фото"
          className="rounded-circle shadow mb-4"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
        <h1 className="fw-bold mb-3">✨ Привет, друзья!</h1>

        <p>
          Меня зовут <strong>Николай Грицак</strong>, я — студент 4 курса одного из самых престижных колледжей Москвы: Московский приборостроительный техникум при Российский экономический университет имени Г. В. Плеханова по специальности «Информационные системы и программирование».
        </p>

        <p>📚 Уже более полугода я преподаю, сейчас являюсь преподавателем в 4 школах:</p>
        <ul className="list-unstyled">
          <li>1) <a href="https://msk-top-academy.ru/" target="_blank" rel="noopener noreferrer">Академия TOP</a></li>
          <li>2) <a href="https://robboclub.ru/" target="_blank" rel="noopener noreferrer">Роббо клуб</a></li>
          <li>3) <a href="https://robolatoriya.com/" target="_blank" rel="noopener noreferrer">Роболатория</a></li>
          <li>4) <a href="https://tetrika-school.ru/" target="_blank" rel="noopener noreferrer">Онлайн школа Тетрика</a> (mail.ru group)</li>
        </ul>
        <p>И являюсь репетитором.</p>

        <p>
          Мой профиль преподавания это программирование (главный язык Python) и технические науки: Математика, информатика, физика. Так же на хорошем уровне владею историей и философией.
        </p>

        <p>
          Моя цель — не просто «натаскать» на ответы, а научить понимать и полюбить предмет 📈, не просто оценки, но рост ребенка, не ребенок для учебы, но учеба для ребенка.
        </p>

        <p>
          💡 Я умею объяснять сложные вещи простыми словами, работать через практику, примеры и мини-проекты. Для меня преподавание это что-то большее чем работа, это призвание человека, которым движет любовь к детям.
        </p>

        <p>⚡️ В этом канале я буду:</p>
        <ul className="list-unstyled">
          <li>— рассказывать о полезных лайфхаках для учёбы,</li>
          <li>— делиться материалами и интересными задачами,</li>
          <li>— показывать вам яркий и интересный контент из моей жизни,</li>
          <li>— а также помогать школьникам и студентам разбираться с тем, что раньше казалось сложным.</li>
        </ul>

        <p className="fw-bold text-center mt-3">Добро пожаловать! 🚀🚀</p>
      </div>

      {/* 🌐 Соцсети */}
      <div className="d-flex justify-content-center gap-4 mb-5">
        <a
          href="https://t.me/+79777741584"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-primary fs-2"
        >
          <FaTelegramPlane />
        </a>
        <a
          href="https://wa.me/+79777741584"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-success fs-2"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://vk.com/gritsaknikola"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-info fs-2"
        >
          <FaVk />
        </a>
      </div>

      {/* 📩 Форма обратной связи */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="card p-4 mx-auto shadow-lg"
        style={{ maxWidth: "500px" }}
      >
        <h4 className="text-center mb-4">📩 Написать мне на почту</h4>
        <form onSubmit={handleSendEmail}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              className="form-control"
              placeholder="Ваш вопрос или сообщение..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary px-4">
              Отправить ✉️
            </button>
          </div>
        </form>
        {isSent && (
          <p className="text-success text-center mt-3">
            ✅ Сообщение успешно отправлено!
          </p>
        )}
      </motion.div>
    </div>
  );
}

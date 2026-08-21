"use client";

import { useState } from "react";

const ideas = {
  awareness: {
    title: "Один продукт — три параллельные реальности",
    hook: "А что, если привычный экран умеет открывать больше?",
    formats: ["10-секундный motion", "серия 9:16", "интерактивный баннер"],
  },
  launch: {
    title: "Функция, которую хочется попробовать сейчас",
    hook: "Показываем не интерфейс, а момент, когда задача уже решена",
    formats: ["UGC-демо", "before / after", "6-секундный bumper"],
  },
  engagement: {
    title: "Пользователь становится соавтором",
    hook: "Выбери продолжение — система соберёт персональную версию",
    formats: ["интерактивный stories-квест", "генератор", "серия реакций"],
  },
};

export function CreativeCopilot() {
  const [product, setProduct] = useState("Яндекс Браузер");
  const [goal, setGoal] = useState<keyof typeof ideas>("awareness");
  const [tone, setTone] = useState("умный и живой");
  const [result, setResult] = useState(ideas.awareness);
  const [runs, setRuns] = useState(0);

  function generate() {
    setResult(ideas[goal]);
    setRuns((value) => value + 1);
  }

  return (
    <div className="copilot">
      <div className="copilotForm">
        <label>Продукт<input value={product} onChange={(e) => setProduct(e.target.value)} /></label>
        <label>Задача<select value={goal} onChange={(e) => setGoal(e.target.value as keyof typeof ideas)}><option value="awareness">Знание</option><option value="launch">Запуск функции</option><option value="engagement">Вовлечение</option></select></label>
        <label>Тональность<input value={tone} onChange={(e) => setTone(e.target.value)} /></label>
        <button type="button" onClick={generate}>Собрать гипотезу <span>↗</span></button>
        <small>Демо-режим: интерфейс и логика промпта работают локально; LLM-слой подключается отдельно.</small>
      </div>
      <div className="copilotResult" aria-live="polite">
        <div className="resultMeta"><span>CREATIVE CARD / {String(runs + 1).padStart(2, "0")}</span><span>{product || "Продукт"}</span></div>
        <h3>{result.title}</h3>
        <p><b>Хук:</b> {result.hook}</p>
        <p><b>Тон:</b> {tone}</p>
        <div className="formatPills">{result.formats.map((format) => <span key={format}>{format}</span>)}</div>
        <div className="promptLine"><span>PROMPT ARCHITECTURE</span><code>роль → контекст → задача → ограничения → форматы → self-check</code></div>
      </div>
    </div>
  );
}

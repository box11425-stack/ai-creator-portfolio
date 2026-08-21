import { CreativeCopilot } from "./CreativeCopilot";
import { UnitEconomicsCalculator } from "./UnitEconomicsCalculator";

const projects = [
  { index: "01", href: "#villa", title: "Villa Julia", label: "AI CONTENT SYSTEM", summary: "Одна съёмка — система UGC-креативов для разных форматов и языков.", tone: "yellow" },
  { index: "02", href: "#price", title: "Цена вопроса", label: "VIDEO + PRODUCT", summary: "Редизайн вертикального формата и интерактивный калькулятор экономики.", tone: "blue" },
  { index: "03", href: "#browser", title: "Открой больше", label: "SPEC CONCEPT", summary: "Нейросетевой коммуникационный концепт для Яндекс Браузера.", tone: "red" },
  { index: "04", href: "#copilot", title: "Creative Copilot", label: "WORKING MVP", summary: "Инструмент, который превращает бриф в набор креативных гипотез.", tone: "mint" },
];

export default function Home() {
  return (
    <main>
      <nav className="topbar">
        <a className="brand" href="#top" aria-label="На главную">AV<span>AI</span></a>
        <div className="navlinks"><a href="#work">Кейсы</a><a href="#about">Подход</a></div>
        <a className="status" href="#contact"><i />Открыт к стажировке</a>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow">AI-CREATOR · VIDEO · CREATIVE TECHNOLOGY</div>
        <h1>Идеи, которые<br /><em>можно запустить.</em></h1>
        <div className="heroFooter">
          <p>Алексей Васютин — креатор и продюсер. Соединяю нейросети, монтаж и продуктовый подход, чтобы превращать брифы в работающие форматы.</p>
          <a href="#work" className="roundLink" aria-label="Смотреть проекты">↘</a>
        </div>
        <div className="signal" aria-hidden="true"><span>IDEA</span><b>→</b><span>AI</span><b>→</b><span>CRAFT</span><b>→</b><span>RESULT</span></div>
      </section>

      <section className="work" id="work">
        <header className="sectionHead"><span>Выбранные проекты</span><span>2026 / 04 кейса</span></header>
        <div className="projectGrid">
          {projects.map((project) => (
            <a className={`projectCard ${project.tone}`} href={project.href} key={project.index}>
              <div className="cardTop"><span>{project.index}</span><span>{project.label}</span></div>
              <div className="cardVisual" aria-hidden="true"><div /><div /><div /></div>
              <h2>{project.title}</h2><p>{project.summary}</p>
              <div className="cardLink">Смотреть кейс <span>↗</span></div>
            </a>
          ))}
        </div>
      </section>

      <section className="case villaCase" id="villa">
        <div className="caseIntro"><div className="caseNumber">01 / AI CONTENT SYSTEM</div><h2>Villa Julia</h2><p>Из двух исходных роликов собрал систему креативов: эмоциональный UGC, атмосферный room tour, сценарные хуки и правила адаптации.</p></div>
        <div className="villaMedia">
          <div className="phoneFrame"><video controls playsInline preload="metadata" src="/media/villa-julia-ugc-web.mp4" /></div>
          <div className="wideFrame"><video controls playsInline muted preload="metadata" src="/media/villa-room-tour-web.mp4" /><div className="frameNote">ROOM TOUR · 16:9</div></div>
        </div>
        <div className="caseStats"><div><b>03</b><span>варианта хука</span></div><div><b>03</b><span>форматные адаптации</span></div><div><b>02</b><span>языковых сценария</span></div><div><b>17″</b><span>готовый UGC cut</span></div></div>
        <div className="hookGrid"><article><span>HOOK / 01</span><p>Утро, которое начинается не с будильника, а с океана.</p></article><article><span>HOOK / 02</span><p>POV: вы проснулись на первой линии Тенерифе.</p></article><article><span>HOOK / 03</span><p>До этого заката — ровно ноль минут пешком.</p></article></div>
      </section>

      <section className="case priceCase" id="price">
        <div className="caseIntro light"><div className="caseNumber">02 / VIDEO + PRODUCT</div><h2>Цена вопроса</h2><p>Ускоренный монтаж объясняющего ролика и полезный digital-слой: калькулятор показывает, что высокая маржа ещё не означает высокий доход.</p></div>
        <div className="priceLayout">
          <div className="phoneFrame darkPhone"><video controls playsInline preload="metadata" src="/media/price-question-web.mp4" /></div>
          <div className="calculatorWrap"><div className="miniLabel">LIVE UNIT ECONOMICS</div><h3>Посчитайте цену своего времени</h3><UnitEconomicsCalculator /></div>
        </div>
      </section>

      <section className="case browserCase" id="browser">
        <div className="caseIntro"><div className="caseNumber">03 / SPEC CONCEPT · НЕОФИЦИАЛЬНЫЙ КЕЙС</div><h2>Открой больше,<br />чем искал</h2><p>Концепт для коммуникаций Яндекс Браузера: привычный поиск становится порталом в несколько возможных продолжений — от знания до действия.</p></div>
        <div className="browserHero"><img src="/images/browser-key-visual.webp" alt="AI-визуал: экран ноутбука открывается в несколько миров" /><div className="browserCopy"><span>ЯНДЕКС БРАУЗЕР · SPEC</span><h3>Открой больше,<br />чем искал.</h3><p>Один запрос. Несколько миров. Твой следующий шаг — ближе, чем кажется.</p></div></div>
        <div className="formatShowcase"><div className="format landscape"><img src="/images/browser-key-visual.webp" alt="Горизонтальная адаптация" /><span>16:9 · VIDEO</span></div><div className="format square"><img src="/images/browser-key-visual.webp" alt="Квадратная адаптация" /><span>1:1 · FEED</span></div><div className="format portrait"><img src="/images/browser-key-visual.webp" alt="Вертикальная адаптация" /><span>9:16 · STORIES</span></div></div>
        <div className="storyboard"><article><b>01</b><span>Привычный экран</span><p>Тёмный стол, один запрос, тишина.</p></article><article><b>02</b><span>Первое открытие</span><p>Из окна браузера появляется свет.</p></article><article><b>03</b><span>Много продолжений</span><p>Знание, путешествие, творчество, действие.</p></article><article><b>04</b><span>Финальная мысль</span><p>«Открой больше, чем искал».</p></article></div>
        <div className="promptCard"><span>AI WORKFLOW</span><p>Insight → концепция → prompt design → генерация key visual → отбор → форматные кропы → motion storyboard → human review.</p></div>
      </section>

      <section className="case copilotCase" id="copilot">
        <div className="caseIntro light"><div className="caseNumber">04 / WORKING MVP</div><h2>Creative Copilot</h2><p>Прототип интерфейса для креативной команды: помогает превратить короткий бриф в структурированную гипотезу, хук и набор форматов.</p></div>
        <CreativeCopilot />
      </section>

      <section className="about" id="about">
        <span>Мой подход</span><h2>Не просто генерировать.<br />Находить идею, собирать систему и доводить до публикации.</h2>
        <div className="skillMarquee"><span>ChatGPT</span><span>Prompt design</span><span>AI image</span><span>Lip-sync</span><span>Figma</span><span>Video editing</span><span>Prototyping</span></div>
      </section>

      <footer id="contact"><div><span>Готов к команде коммуникаций</span><h2>Давайте<br /><em>сделаем.</em></h2></div><p>Открыт к стажировке 30–40 часов в неделю, гибридному формату и быстрой работе с обратной связью.<br /><br /><a className="repoLink" href="https://github.com/box11425-stack/ai-creator-portfolio" target="_blank" rel="noreferrer">GitHub проекта ↗</a><br /><br />Контакты — в резюме.</p></footer>
    </main>
  );
}

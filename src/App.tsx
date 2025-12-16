import { useState, useEffect } from "react";
import { HomeView } from "./components/HomeView";
import { ActiveView } from "./components/ActiveView";
import { ResultsModal } from "./components/ResultsModal";
import { Language } from "./locales/translations";

const textsByLanguage = {
  English: [
    "The quick brown fox jumps over the lazy dog while the autumn leaves dance in the crisp morning breeze.",
    "In the world of software development, clean code is not just about making it work, but about making it maintainable and readable for future developers.",
    "Machine learning algorithms can process vast amounts of data to identify patterns that would be impossible for humans to detect manually.",
    "The art of touch typing transforms your relationship with the keyboard, turning conscious effort into fluid, automatic motion.",
    "Async functions in JavaScript allow us to write asynchronous code that looks and behaves like synchronous code, making it easier to reason about.",
  ],
  Spanish: [
    "El rápido zorro marrón salta sobre el perro perezoso mientras las hojas de otoño bailan en la fresca brisa de la mañana.",
    "En el mundo del desarrollo de software, el código limpio no se trata solo de hacerlo funcionar, sino de hacerlo mantenible y legible para futuros desarrolladores.",
    "Los algoritmos de aprendizaje automático pueden procesar grandes cantidades de datos para identificar patrones que serían imposibles de detectar manualmente.",
    "El arte de escribir sin mirar el teclado transforma tu relación con él, convirtiendo el esfuerzo consciente en movimiento fluido y automático.",
    "Las funciones asíncronas en JavaScript nos permiten escribir código asíncrono que se ve y se comporta como código síncrono.",
  ],
  French: [
    "Le rapide renard brun saute par-dessus le chien paresseux pendant que les feuilles d'automne dansent dans la brise fraîche du matin.",
    "Dans le monde du développement logiciel, un code propre ne consiste pas seulement à le faire fonctionner, mais à le rendre maintenable et lisible pour les futurs développeurs.",
    "Les algorithmes d'apprentissage automatique peuvent traiter de grandes quantités de données pour identifier des modèles impossibles à détecter manuellement.",
    "L'art de la dactylographie transforme votre relation avec le clavier, transformant l'effort conscient en mouvement fluide et automatique.",
    "Les fonctions asynchrones en JavaScript nous permettent d'écrire du code asynchrone qui ressemble et se comporte comme du code synchrone.",
  ],
  German: [
    "Der schnelle braune Fuchs springt über den faulen Hund, während die Herbstblätter in der kühlen Morgenbrise tanzen.",
    "In der Welt der Softwareentwicklung geht es bei sauberem Code nicht nur darum, dass es funktioniert, sondern auch wartbar und lesbar für zukünftige Entwickler ist.",
    "Maschinelle Lernalgorithmen können große Datenmengen verarbeiten, um Muster zu identifizieren, die für Menschen unmöglich manuell zu erkennen wären.",
    "Die Kunst des Zehnfingerschreibens verwandelt Ihre Beziehung zur Tastatur und macht aus bewusster Anstrengung fließende, automatische Bewegung.",
    "Asynchrone Funktionen in JavaScript ermöglichen es uns, asynchronen Code zu schreiben, der wie synchroner Code aussieht und sich auch so verhält.",
  ],
  Portuguese: [
    "A rápida raposa marrom salta sobre o cão preguiçoso enquanto as folhas de outono dançam na brisa fresca da manhã.",
    "No mundo do desenvolvimento de software, código limpo não é apenas sobre fazê-lo funcionar, mas sobre torná-lo mantível e legível para futuros desenvolvedores.",
    "Algoritmos de aprendizado de máquina podem processar grandes quantidades de dados para identificar padrões que seriam impossíveis de detectar manualmente.",
    "A arte de digitar sem olhar transforma seu relacionamento com o teclado, transformando esforço consciente em movimento fluido e automático.",
    "Funções assíncronas em JavaScript nos permitem escrever código assíncrono que parece e se comporta como código síncrono.",
  ],
};

/**
 * Main Application Component
 * 
 * Manages the global state of the application, including:
 * - Theme selection (default, cyberpunk, paper, soft)
 * - Difficulty settings (normal, expert, master)
 * - Language selection and text content
 * - Test configuration (time limit, minimum speed/accuracy)
 * - Navigation between HomeView (setup) and ActiveView (test)
 */
export default function App() {
  const [theme, setTheme] = useState<"default" | "cyberpunk" | "paper" | "soft">("default");
  const [difficulty, setDifficulty] = useState("normal");
  const [mode, setMode] = useState("agile");
  const [selectedTime, setSelectedTime] = useState(30);
  const [minSpeed, setMinSpeed] = useState<number | null>(null);
  const [minAccuracy, setMinAccuracy] = useState<number | null>(null);
  const [language, setLanguage] = useState<keyof typeof textsByLanguage>("English");
  const [isTestActive, setIsTestActive] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({ wpm: 0, accuracy: 0 });
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const [restartTrigger, setRestartTrigger] = useState(0);

  const currentTexts = textsByLanguage[language];

  // Set favicon and page title
  useEffect(() => {
    // Set page title
    document.title = "TypeBlitz";

    // Set favicon
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = "/public/favicon.svg";
    } else {
      const newFavicon = document.createElement("link");
      newFavicon.rel = "icon";
      newFavicon.type = "image/svg+xml";
      newFavicon.href = "/public/favicon.svg";
      document.head.appendChild(newFavicon);
    }
  }, []);

  const handleStartTest = () => {
    setIsTestActive(true);
    setShowResults(false);
    setRestartTrigger(0);
  };

  const handleComplete = (wpm: number, accuracy: number) => {
    setResults({ wpm, accuracy });
    setShowResults(true);
    setIsTestActive(false);
  };

  const handleRepeat = () => {
    setIsTestActive(true);
    setShowResults(false);
    setRestartTrigger(prev => prev + 1);
  };

  const handleNext = () => {
    setCurrentTextIndex((prev) => (prev + 1) % currentTexts.length);
    setIsTestActive(true);
    setShowResults(false);
    setRestartTrigger(0);
  };

  const handleBackToHome = () => {
    setIsTestActive(false);
    setShowResults(false);
  };

  const handleRetry = () => {
    setShowResults(false);
    setIsTestActive(true);
    setRestartTrigger(prev => prev + 1);
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang as keyof typeof textsByLanguage);
    setCurrentTextIndex(0); // Reset to first text when changing language
  };

  return (
    <>
      {isTestActive ? (
        <ActiveView
          key={restartTrigger}
          text={currentTexts[currentTextIndex]}
          timeLimit={selectedTime}
          onComplete={handleComplete}
          onRepeat={handleRepeat}
          onNext={handleNext}
          theme={theme}
          language={language}
          minSpeed={minSpeed}
          minAccuracy={minAccuracy}
          difficulty={difficulty}
        />
      ) : (
        <HomeView
          difficulty={difficulty}
          mode={mode}
          selectedTime={selectedTime}
          text={currentTexts[currentTextIndex]}
          onDifficultyChange={setDifficulty}
          onModeChange={setMode}
          onTimeChange={setSelectedTime}
          onLanguageChange={handleLanguageChange}
          onThemeChange={setTheme}
          currentTheme={theme}
          currentLanguage={language}
          onStartTest={handleStartTest}
          theme={theme}
          minSpeed={minSpeed}
          minAccuracy={minAccuracy}
          onMinSpeedChange={setMinSpeed}
          onMinAccuracyChange={setMinAccuracy}
        />
      )}

      {showResults && (
        <ResultsModal
          wpm={results.wpm}
          accuracy={results.accuracy}
          onClose={handleBackToHome}
          onRetry={handleRetry}
          theme={theme}
          language={language}
        />
      )}
    </>
  );
}
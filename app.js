const subjects = {
  bangla: {
    id: "bangla",
    name: "বাংলা",
    className: "subject-bangla",
    icon: "অ",
    iconClass: "bangla",
    homeDescription: "সম্পূর্ণ বই ও বিষয়ভিত্তিক",
    heading: "বাংলা নিয়ে খেলি!",
    intro: "অক্ষর আর শব্দের সঙ্গে বন্ধুত্ব করো। ছোট ছোট প্রশ্নে ঝালিয়ে নাও আজকের পড়া।",
    tip: "প্রশ্নটি ধীরে ধীরে পড়ো। দরকার হলে পাশে থাকা বড় কাউকে পড়ে বলতে বলো।",
    quizzes: [
      {
        id: "vowels",
        title: "স্বরবর্ণের মজা",
        description: "স্বরবর্ণ চেনার রঙিন খেলা",
        art: "অ",
        questions: [
          {
            prompt: "‘অ’ কোন ধরনের বর্ণ?",
            options: ["স্বরবর্ণ", "ব্যঞ্জনবর্ণ", "সংখ্যা", "চিহ্ন"],
            answer: 0,
            visual: "অ"
          },
          {
            prompt: "‘আ’ এর পরে কোন স্বরবর্ণটি আসে?",
            options: ["উ", "ই", "ঈ", "এ"],
            answer: 1,
            visual: "আ"
          },
          {
            prompt: "কোনটি একটি স্বরবর্ণ?",
            options: ["ক", "ম", "ঋ", "ত"],
            answer: 2,
            visual: "ঋ"
          },
          {
            prompt: "আম কোন ঋতুতে বেশি পাওয়া যায়?",
            options: ["শীতে", "গ্রীষ্মে", "বর্ষায়", "হেমন্তে"],
            answer: 1,
            visual: "🥭"
          }
        ]
      },
      {
        id: "words",
        title: "শব্দের বন্ধু",
        description: "সহজ শব্দ চিনে ফেলো",
        art: "ম",
        questions: [
          {
            prompt: "কোনটি একটি জলজ প্রাণী?",
            options: ["মাছ", "বল", "কলম", "ঘর"],
            answer: 0,
            visual: "🐟"
          },
          {
            prompt: "‘বই’ কোথায় পড়ি?",
            options: ["স্কুলে", "পানিতে", "গাছে", "আকাশে"],
            answer: 0,
            visual: "বই"
          },
          {
            prompt: "কোনটি একটি ফলের নাম?",
            options: ["আম", "চেয়ার", "জুতা", "ঘড়ি"],
            answer: 0,
            visual: "আম"
          },
          {
            prompt: "‘রবি’ কী ধরনের শব্দ?",
            options: ["ফলের নাম", "ব্যক্তির নাম", "পাখির নাম", "রঙের নাম"],
            answer: 1,
            visual: "রবি"
          }
        ]
      },
      {
        id: "sentence",
        title: "গল্পের ঝুড়ি",
        description: "ছবি আর বাক্যের ছোট কুইজ",
        art: "✎",
        questions: [
          {
            prompt: "বৃষ্টির দিনে আমরা কী ব্যবহার করি?",
            options: ["ছাতা", "সাঁতার", "ঘুড়ি", "রোদচশমা"],
            answer: 0,
            visual: "☂"
          },
          {
            prompt: "সকালে সূর্য কোন দিকে ওঠে?",
            options: ["পূর্ব দিকে", "পশ্চিম দিকে", "নিচে", "ঘরের ভেতর"],
            answer: 0,
            visual: "সূর্য"
          },
          {
            prompt: "কোন বাক্যটি ঠিক?",
            options: ["আমি স্কুলে যাই।", "আমি স্কুলে যায়।", "আমি স্কুলে যাও।", "আমি স্কুলে যায়া।"],
            answer: 0,
            visual: "বাক্য"
          },
          {
            prompt: "ফুলে কী থাকতে পারে?",
            options: ["সুগন্ধ", "চাকা", "ডানা", "চাবি"],
            answer: 0,
            visual: "🌸"
          }
        ]
      }
    ]
  },
  english: {
    id: "english",
    name: "English",
    className: "subject-english",
    icon: "A B",
    iconClass: "english",
    homeDescription: "বইভিত্তিক অনুশীলন",
    heading: "English is fun!",
    intro: "খেলতে খেলতে শিখে নাও English letters আর everyday words। তুমি খুব ভালো পারবে!",
    tip: "শব্দটি জোরে জোরে একবার পড়ো। শুনলে ও মনে রাখলে উত্তর দেওয়া আরও সহজ হবে।",
    quizzes: [
      {
        id: "alphabet",
        title: "Alphabet Adventure",
        description: "A, B, C দিয়ে শুরু হোক মজা",
        art: "A",
        questions: [
          {
            prompt: "Which letter comes after B?",
            options: ["A", "C", "D", "E"],
            answer: 1,
            visual: "B"
          },
          {
            prompt: "Which one is a capital letter?",
            options: ["a", "b", "A", "c"],
            answer: 2,
            visual: "A"
          },
          {
            prompt: "Apple starts with which letter?",
            options: ["A", "B", "C", "D"],
            answer: 0,
            visual: "🍎"
          },
          {
            prompt: "Which one is a vowel?",
            options: ["B", "E", "T", "M"],
            answer: 1,
            visual: "E"
          }
        ]
      },
      {
        id: "colors-animals",
        title: "Colors & Animals",
        description: "রং আর প্রাণীর English নাম",
        art: "🐱",
        questions: [
          {
            prompt: "What color is grass?",
            options: ["Green", "Blue", "Red", "Black"],
            answer: 0,
            visual: "🌿"
          },
          {
            prompt: "Which animal says “meow”?",
            options: ["Dog", "Cat", "Cow", "Bird"],
            answer: 1,
            visual: "🐱"
          },
          {
            prompt: "‘লাল’ রঙের English কী?",
            options: ["Yellow", "Green", "Red", "White"],
            answer: 2,
            visual: "●"
          },
          {
            prompt: "Which one is a fruit?",
            options: ["Mango", "Table", "Pencil", "Shoe"],
            answer: 0,
            visual: "🥭"
          }
        ]
      },
      {
        id: "everyday-words",
        title: "Everyday Words",
        description: "প্রতিদিনের দরকারি শব্দ",
        art: "Hi!",
        questions: [
          {
            prompt: "‘Book’ শব্দের বাংলা অর্থ কী?",
            options: ["বই", "কলম", "ব্যাগ", "খাতা"],
            answer: 0,
            visual: "📘"
          },
          {
            prompt: "সকালে দেখা হলে আমরা কী বলি?",
            options: ["Good morning", "Good night", "Goodbye", "Sorry"],
            answer: 0,
            visual: "☀"
          },
          {
            prompt: "What is the opposite of big?",
            options: ["Tall", "Small", "Red", "Happy"],
            answer: 1,
            visual: "big"
          },
          {
            prompt: "Which is a school item?",
            options: ["Pencil", "Mango", "Fish", "Ball"],
            answer: 0,
            visual: "✎"
          }
        ]
      }
    ]
  },
  math: {
    id: "math",
    name: "গণিত",
    className: "subject-math",
    icon: "+ −",
    iconClass: "math",
    homeDescription: "বইভিত্তিক অনুশীলন",
    heading: "গণিতের মজা!",
    intro: "সংখ্যা তোমার বন্ধু। যোগ-বিয়োগ আর আকারের এই খেলাগুলো একবার চেষ্টা করে দেখো।",
    tip: "আঙুলে গুনতে পারো! উত্তর দেওয়ার আগে সংখ্যাগুলো আরেকবার ভালো করে দেখো।",
    quizzes: [
      {
        id: "numbers",
        title: "সংখ্যা বন্ধু",
        description: "গোনা আর সংখ্যার সহজ খেলা",
        art: "123",
        questions: [
          {
            prompt: "৯ এর পরে কোন সংখ্যাটি আসে?",
            options: ["৮", "১০", "১১", "৭"],
            answer: 1,
            visual: "9"
          },
          {
            prompt: "৪, ৭, ২ — এদের মধ্যে সবচেয়ে বড় সংখ্যা কোনটি?",
            options: ["২", "৪", "৭", "সব সমান"],
            answer: 2,
            visual: "7"
          },
          {
            prompt: "একটি ত্রিভুজের কয়টি বাহু?",
            options: ["২টি", "৩টি", "৪টি", "৫টি"],
            answer: 1,
            visual: "△"
          },
          {
            prompt: "১২ থেকে ২ বাদ দিলে কত থাকে?",
            options: ["৮", "৯", "১০", "১১"],
            answer: 2,
            visual: "12−2"
          }
        ]
      },
      {
        id: "add-subtract",
        title: "যোগের খেলা",
        description: "ছোট ছোট যোগ-বিয়োগ করি",
        art: "2+2",
        questions: [
          {
            prompt: "৫ + ৩ = কত?",
            options: ["৬", "৭", "৮", "৯"],
            answer: 2,
            visual: "5+3"
          },
          {
            prompt: "১০ + ৫ = কত?",
            options: ["১২", "১৩", "১৫", "১৬"],
            answer: 2,
            visual: "10+5"
          },
          {
            prompt: "৭ − ৩ = কত?",
            options: ["৩", "৪", "৫", "৬"],
            answer: 1,
            visual: "7−3"
          },
          {
            prompt: "৯ − ১ = কত?",
            options: ["৬", "৭", "৮", "৯"],
            answer: 2,
            visual: "9−1"
          }
        ]
      },
      {
        id: "shapes",
        title: "আকৃতি খুঁজি",
        description: "চারপাশের আকারগুলো চেনো",
        art: "△",
        questions: [
          {
            prompt: "বল দেখতে কোন আকারের মতো?",
            options: ["বৃত্ত", "ত্রিভুজ", "বর্গ", "আয়তক্ষেত্র"],
            answer: 0,
            visual: "○"
          },
          {
            prompt: "একটি বর্গের কয়টি বাহু?",
            options: ["২টি", "৩টি", "৪টি", "৫টি"],
            answer: 2,
            visual: "□"
          },
          {
            prompt: "কোন আকৃতির ৩টি বাহু আছে?",
            options: ["বর্গ", "বৃত্ত", "ত্রিভুজ", "আয়তক্ষেত্র"],
            answer: 2,
            visual: "△"
          },
          {
            prompt: "ঘড়ির মুখ সাধারণত কোন আকৃতির?",
            options: ["বৃত্ত", "ত্রিভুজ", "বর্গ", "তারকা"],
            answer: 0,
            visual: "◷"
          }
        ]
      }
    ]
  },
  gk: {
    id: "gk",
    name: "সাধারণ জ্ঞান",
    className: "subject-gk",
    icon: "🌏",
    iconClass: "gk",
    homeDescription: "বইভিত্তিক অনুশীলন",
    heading: "জানার দুনিয়া!",
    intro: "আমাদের বাংলাদেশ, প্রকৃতি আর ভালো অভ্যাস নিয়ে জানার আছে কত কিছু!",
    tip: "তাড়াহুড়ো নয়—তুমি যা দেখো, শোনো আর শেখো, সেটি মনে করে উত্তর দাও।",
    quizzes: [
      {
        id: "bangladesh",
        title: "আমার বাংলাদেশ",
        description: "দেশ সম্পর্কে মজার জানা",
        art: "🇧🇩",
        questions: [
          {
            prompt: "বাংলাদেশের রাজধানীর নাম কী?",
            options: ["ঢাকা", "চট্টগ্রাম", "রাজশাহী", "খুলনা"],
            answer: 0,
            visual: "ঢাকা"
          },
          {
            prompt: "বাংলাদেশের জাতীয় ফুল কোনটি?",
            options: ["গোলাপ", "শাপলা", "সূর্যমুখী", "জবা"],
            answer: 1,
            visual: "✿"
          },
          {
            prompt: "বাংলাদেশের পতাকায় কোন দুটি রং আছে?",
            options: ["নীল ও সাদা", "সবুজ ও লাল", "হলুদ ও কালো", "লাল ও নীল"],
            answer: 1,
            visual: "🇧🇩"
          },
          {
            prompt: "আমাদের মাতৃভাষার নাম কী?",
            options: ["ইংরেজি", "বাংলা", "হিন্দি", "আরবি"],
            answer: 1,
            visual: "অ"
          }
        ]
      },
      {
        id: "nature",
        title: "প্রকৃতি বন্ধু",
        description: "গাছ, আকাশ আর ঋতুর গল্প",
        art: "🌿",
        questions: [
          {
            prompt: "গাছ বাঁচতে কী দরকার?",
            options: ["পানি ও রোদ", "খেলনা", "জুতা", "ঘড়ি"],
            answer: 0,
            visual: "🌱"
          },
          {
            prompt: "পরিষ্কার দিনের আকাশ কেমন দেখায়?",
            options: ["নীল", "কালো", "গোলাপি", "সবুজ"],
            answer: 0,
            visual: "☁"
          },
          {
            prompt: "বৃষ্টির দিনে সঙ্গে কী নেওয়া ভালো?",
            options: ["ছাতা", "ঘুড়ি", "বল", "সানগ্লাস"],
            answer: 0,
            visual: "☂"
          },
          {
            prompt: "আমাদের সবচেয়ে কাছের তারা কোনটি?",
            options: ["চাঁদ", "সূর্য", "বাতি", "মেঘ"],
            answer: 1,
            visual: "☀"
          }
        ]
      },
      {
        id: "safe-habits",
        title: "ভালো অভ্যাস",
        description: "নিরাপদ ও সুন্দর থাকার কুইজ",
        art: "★",
        questions: [
          {
            prompt: "খাওয়ার আগে আমাদের কী করা উচিত?",
            options: ["হাত ধোয়া", "দৌড়ানো", "ঘুমানো", "লাফানো"],
            answer: 0,
            visual: "✋"
          },
          {
            prompt: "ট্রাফিক সিগন্যালের লাল আলো মানে কী?",
            options: ["যাও", "থামো", "দৌড়াও", "ঘুমাও"],
            answer: 1,
            visual: "●"
          },
          {
            prompt: "রাস্তা পার হওয়ার আগে কী দেখি?",
            options: ["ডানে-বামে", "শুধু আকাশে", "শুধু মাটিতে", "চোখ বন্ধ করে"],
            answer: 0,
            visual: "↔"
          },
          {
            prompt: "অপরিচিত কেউ কিছু দিতে চাইলে কী করব?",
            options: ["বিশ্বস্ত বড় কাউকে বলব", "একাই চলে যাব", "চুপ থাকব", "নিয়ে খাব"],
            answer: 0,
            visual: "♥"
          }
        ]
      }
    ]
  }
};

const mixedSubject = {
  id: "all-subjects",
  name: "সব বিষয়",
  className: "subject-gk",
  icon: "✦",
  iconClass: "gk"
};

const app = document.getElementById("app");
const topActions = document.getElementById("top-actions");
const STORAGE_KEY = "jhilmil-quiz-progress-v1";

const state = {
  screen: "home",
  subjectKey: null,
  quizId: null,
  topicId: null,
  englishTopicId: null,
  mathTopicId: null,
  gkTopicId: null,
  quizOrigin: "standard",
  generatedQuiz: null,
  usedFullBookQuestionIds: [],
  usedEnglishFullBookQuestionIds: [],
  usedMathFullBookQuestionIds: [],
  usedNumberReadingQuestionIds: [],
  usedGkFullBookQuestionIds: [],
  usedAllSubjectsQuestionIds: [],
  questionIndex: 0,
  answers: [],
  inputs: []
};

let profile = loadProfile();

function loadProfile() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (stored && Array.isArray(stored.completed)) {
      return { completed: stored.completed };
    }
  } catch (error) {
    // A quiz should still work when storage is unavailable.
  }
  return { completed: [] };
}

function saveProfile() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch (error) {
    // Storage is optional for this lightweight classroom-friendly quiz.
  }
}

function bnNumber(number) {
  return new Intl.NumberFormat("bn-BD").format(number);
}

function getSubject() {
  if (state.quizOrigin === "all-subjects") return mixedSubject;
  return subjects[state.subjectKey];
}

function getQuiz() {
  if (state.generatedQuiz) return state.generatedQuiz;
  const subject = getSubject();
  return subject?.quizzes.find((quiz) => quiz.id === state.quizId);
}

function shuffleItems(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function makeAllSubjectsRandomQuiz(excludedQuestionIds = []) {
  const excluded = new Set(excludedQuestionIds);
  const sources = [
    { id: "bangla", label: "বাংলা", book: BanglaBook },
    { id: "english", label: "English", book: EnglishBook },
    { id: "math", label: "গণিত", book: MathBook },
    { id: "gk", label: "সাধারণ জ্ঞান", book: GkBook }
  ];
  const sourcePools = sources.map((source) => ({
    ...source,
    questions: source.book.topics.flatMap((topic) => topic.questions.map((item, questionIndex) => ({
      ...item,
      id: `${source.id}-${topic.id}-question-${questionIndex + 1}`,
      sourceSubject: source.label
    })))
  }));
  const availablePools = sourcePools.map((source) => ({
    ...source,
    questions: source.questions.filter((item) => !excluded.has(item.id))
  }));
  const canCoverAllSubjects = availablePools.every((source) => source.questions.length >= 2);
  const selectedPools = canCoverAllSubjects ? availablePools : sourcePools;
  const requiredQuestions = selectedPools.flatMap((source) => shuffleItems(source.questions).slice(0, 2));
  const selectedIds = new Set(requiredQuestions.map((item) => item.id));
  const remainingQuestions = selectedPools.flatMap((source) => source.questions).filter((item) => !selectedIds.has(item.id));
  const questions = shuffleItems([...requiredQuestions, ...shuffleItems(remainingQuestions).slice(0, 2)]);
  return {
    id: "all-subjects-random",
    title: "সব বিষয়ের র‌্যান্ডম কুইজ",
    description: "বাংলা, English, গণিত ও সাধারণ জ্ঞান থেকে ১০টি প্রশ্ন",
    availableQuestionCount: availablePools.reduce((total, source) => total + source.questions.length, 0),
    canCoverAllSubjects,
    questionIds: questions.map((item) => item.id),
    questions
  };
}

function getBanglaTopic() {
  return state.topicId ? BanglaBook.getTopic(state.topicId) : null;
}

function getEnglishTopic() {
  return state.englishTopicId ? EnglishBook.getTopic(state.englishTopicId) : null;
}

function getMathTopic() {
  return state.mathTopicId ? MathBook.getTopic(state.mathTopicId) : null;
}

function getGkTopic() {
  return state.gkTopicId ? GkBook.getTopic(state.gkTopicId) : null;
}

function isAnswered() {
  return state.answers[state.questionIndex] !== undefined;
}

function quizScore() {
  const quiz = getQuiz();
  if (!quiz) return 0;
  return quiz.questions.reduce(
    (total, question, index) => total + (state.answers[index] === question.answer ? 1 : 0),
    0
  );
}

function iconMarkup(subject, className) {
  return `<span class="${className} ${subject.iconClass}" aria-hidden="true">${subject.icon}</span>`;
}

function updateHeader() {
  if (state.screen === "quiz") {
    topActions.innerHTML = `
      <button class="exit-quiz" type="button" data-action="quit-quiz" aria-label="কুইজ থেকে বের হও">বের হই <span aria-hidden="true">×</span></button>
    `;
    return;
  }

  topActions.innerHTML = `
    <span class="header-greeting">হ্যালো, রিমি! <span aria-hidden="true">🌤️</span></span>
    <button class="top-link" type="button" data-action="home">হোম</button>
    <span class="avatar" aria-label="রিমির প্রোফাইল">🧒</span>
  `;
}

function renderHome() {
  return `
    <section class="home-hero" aria-labelledby="home-title">
      <div class="hero-copy">
        <p class="eyebrow">দ্বিতীয় শ্রেণি <span aria-hidden="true">•</span> বাংলাদেশ</p>
        <h1 id="home-title">খেলা খেলায়<br />শিখি <span>প্রতিদিন!</span></h1>
        <p>বাংলা, English, গণিত ও সাধারণ জ্ঞান থেকে বাছাই করা ১০টি প্রশ্নে আজ নিজেকে যাচাই করো।</p>
        <div class="button-row">
          <button class="primary-button" type="button" data-action="start-all-subjects-quiz">র‌্যান্ডম ১০ প্রশ্ন খেলি <span aria-hidden="true">→</span></button>
        </div>
      </div>
      <div class="hero-scene" aria-hidden="true">
        <div class="hero-sun">☀</div>
        <div class="cloud cloud-one"></div>
        <div class="cloud cloud-two"></div>
        <div class="hero-card-stack"><div class="hero-book"></div></div>
        <div class="hero-planet">🌎</div>
        <span class="scene-note">তুমি পারবে!</span>
        <span class="sparkle sparkle-one">✦</span>
        <span class="sparkle sparkle-two">✦</span>
      </div>
    </section>

    <section id="subjects" aria-labelledby="subjects-title">
      <div class="section-heading">
        <div>
          <h2 id="subjects-title">তোমার বিষয়গুলো</h2>
        </div>
        <p>যে বিষয়টি পড়তে ইচ্ছে করছে, সেটিতে চাপ দাও। প্রতিটিতে আছে প্রয়োজনীয় প্রশ্ন ও সহজ ব্যাখ্যা।</p>
      </div>
      <div class="subject-grid">
        ${Object.values(subjects).map(renderSubjectCard).join("")}
      </div>
    </section>

    <footer class="site-footer">Developed by SADMAN</footer>
  `;
}

function renderSubjectCard(subject, index) {
  const englishQuestionCount = EnglishBook.topics.reduce((total, topic) => total + topic.questions.length, 0);
  const mathQuestionCount = MathBook.topics.reduce((total, topic) => total + topic.questions.length, 0);
  const gkQuestionCount = GkBook.topics.reduce((total, topic) => total + topic.questions.length, 0);
  const itemCount = subject.id === "bangla"
    ? "বই + ৮টি বিষয়"
    : subject.id === "english"
      ? `${bnNumber(EnglishBook.topics.length)}টি বিষয় • ${bnNumber(englishQuestionCount)} প্রশ্ন`
      : subject.id === "math"
        ? `${bnNumber(MathBook.topics.length)}টি বিষয় • ${bnNumber(mathQuestionCount)} প্রশ্ন`
        : subject.id === "gk"
          ? `${bnNumber(GkBook.topics.length)}টি বিষয় • ${bnNumber(gkQuestionCount)} প্রশ্ন`
          : "৩টি কুইজ";
  return `
    <button class="subject-card ${subject.className}" type="button" data-action="open-subject" data-subject="${subject.id}" aria-label="${subject.name} বিষয়ের কুইজগুলো দেখো">
      <span class="subject-card-inner">
        <span class="subject-order">০${index + 1}</span>
        ${iconMarkup(subject, "subject-icon")}
        <span class="subject-name">${subject.name}</span>
        <span class="subject-description">${subject.homeDescription}</span>
        <span class="subject-card-footer"><span>${itemCount}</span><span aria-hidden="true">→</span></span>
      </span>
    </button>
  `;
}

function renderAllSubjectShortcut() {
  return `
    <section class="all-subject-shortcut" aria-label="সব বিষয়ের র‌্যান্ডম কুইজ">
      <div><strong>সব বিষয় মিলিয়ে খেলো</strong><span>বাংলা, English, গণিত ও সাধারণ জ্ঞান থেকে ১০টি র‌্যান্ডম প্রশ্ন</span></div>
      <button class="primary-button" type="button" data-action="start-all-subjects-quiz">র‌্যান্ডম ১০ প্রশ্ন <span aria-hidden="true">→</span></button>
    </section>
  `;
}

function renderSubject() {
  const subject = getSubject();
  const totalQuestions = subject.quizzes.reduce((total, quiz) => total + quiz.questions.length, 0);

  return `
    <section class="subject-page" aria-labelledby="subject-title">
      <button class="back-button" type="button" data-action="home"><span class="back-arrow" aria-hidden="true">←</span>সব বিষয়</button>
      <div class="subject-hero ${subject.className}">
        <div>
          <p class="subject-kicker">দ্বিতীয় শ্রেণি <span aria-hidden="true">•</span> ${subject.name}</p>
          <h1 id="subject-title">${subject.heading}</h1>
          <p>${subject.intro}</p>
          <div class="subject-meta-row">
            <span class="pill">✦ ৩টি কুইজ</span>
            <span class="pill">◷ ${bnNumber(totalQuestions)}টি প্রশ্ন</span>
            <span class="pill">✓ উত্তর দিয়ে শেখো</span>
          </div>
        </div>
        <div class="subject-hero-visual" aria-hidden="true">
          ${iconMarkup(subject, "subject-hero-icon")}
          <span class="hero-orbit"></span>
        </div>
      </div>

      <div class="quiz-intro">
        <div>
          <h2>কোন কুইজটি খেলবে?</h2>
          <p>একটি বেছে নাও, তারপর শুরু হয়ে যাক!</p>
        </div>
        <span class="quiz-count-note">প্রতিটিতে ৪টি প্রশ্ন</span>
      </div>

      <div class="quiz-list">
        ${subject.quizzes.map((quiz, index) => renderQuizCard(subject, quiz, index)).join("")}
      </div>

      <aside class="subject-tip">
        <span class="tip-icon" aria-hidden="true">💡</span>
        <p><strong>ছোট্ট টিপ:</strong> ${subject.tip}</p>
      </aside>
    </section>
  `;
}

function renderBanglaOptions() {
  const subject = subjects.bangla;
  const topicCount = BanglaBook.topics.length;
  const totalQuestions = BanglaBook.topics.reduce((total, topic) => total + topic.questions.length, 0);

  return `
    <section class="bangla-book-page ${subject.className}" aria-labelledby="bangla-book-title">
      <button class="back-button" type="button" data-action="home"><span class="back-arrow" aria-hidden="true">←</span>সব বিষয়</button>
      <div class="book-hub-hero">
        <div>
          <p class="subject-kicker">বাংলা <span aria-hidden="true">•</span> শেখার অনুশীলন</p>
          <h1 id="bangla-book-title">বাংলা বই নিয়ে খেলি!</h1>
          <p>দরকারি বিষয়গুলো থেকে ছোট ছোট প্রশ্ন অনুশীলন করো। প্রতিটি উত্তরের পর সহজ বাংলায় ব্যাখ্যাও দেখবে।</p>
          <div class="subject-meta-row">
            <span class="pill">✦ ${bnNumber(topicCount)}টি বিষয়</span>
            <span class="pill">◷ ${bnNumber(totalQuestions)}টি দরকারি প্রশ্ন</span>
            <span class="pill">💡 ব্যাখ্যাসহ</span>
          </div>
        </div>
        <div class="book-hub-art" aria-hidden="true"><span>অ</span><i>✦</i><b>বই</b></div>
      </div>

      <div class="book-choice-heading">
        <div><h2>কীভাবে অনুশীলন করবে?</h2><p>তোমার পছন্দের একটি পথ বেছে নাও।</p></div>
        <span class="quiz-count-note">শুধু শেখার দরকারি প্রশ্ন</span>
      </div>
      <div class="book-choice-grid">
        <button class="book-choice-card full-book-choice" type="button" data-action="start-full-book" aria-label="সব বিষয় থেকে ১০টি র‌্যান্ডম প্রশ্নের অনুশীলন শুরু করো">
          <span class="choice-topline"><span class="choice-icon" aria-hidden="true">📚</span><span class="choice-label">প্রথম অপশন</span></span>
          <span class="choice-title">সম্পূর্ণ বই</span>
          <span class="choice-description">সব বিষয় থেকে এলোমেলো ১০টি প্রশ্নে নিজের প্রস্তুতি যাচাই করো। প্রতিবার নতুন প্রশ্ন পাবে!</span>
          <span class="choice-footer"><span>১০ প্রশ্নের র‌্যান্ডম কুইজ</span><strong>শুরু করি <i aria-hidden="true">→</i></strong></span>
        </button>
        <button class="book-choice-card chapter-book-choice" type="button" data-action="open-topic-list" aria-label="বিষয়ভিত্তিক প্রশ্নের তালিকা দেখো">
          <span class="choice-topline"><span class="choice-icon" aria-hidden="true">🧩</span><span class="choice-label">দ্বিতীয় অপশন</span></span>
          <span class="choice-title">বিষয়ভিত্তিক</span>
          <span class="choice-description">মাস, দিন, ঋতু ও আরও দরকারি বিষয় থেকে পছন্দের একটি বেছে নাও।</span>
          <span class="choice-footer"><span>${bnNumber(topicCount)}টি বিষয় দেখো</span><strong>বিষয় বেছে নাও <i aria-hidden="true">→</i></strong></span>
        </button>
      </div>

      <aside class="book-note"><span aria-hidden="true">🌟</span><p><strong>মনে রাখো:</strong> উত্তর ভুল হলেও চিন্তা নেই। ব্যাখ্যাটি পড়ে আবার চেষ্টা করলেই তুমি আরও ভালো শিখবে।</p></aside>
    </section>
  `;
}

function renderTopicList() {
  const subject = subjects.bangla;
  const totalQuestions = BanglaBook.topics.reduce((total, topic) => total + topic.questions.length, 0);
  return `
    <section class="chapter-list-page ${subject.className}" aria-labelledby="topic-list-title">
      <button class="back-button" type="button" data-action="bangla-options"><span class="back-arrow" aria-hidden="true">←</span>বাংলা বই</button>
      <div class="chapter-list-hero">
        <div>
          <p class="subject-kicker">বাংলা বই <span aria-hidden="true">•</span> বিষয়ভিত্তিক অনুশীলন</p>
          <h1 id="topic-list-title">বিষয় বেছে নাও</h1>
          <p>এখানে শুধু দরকারি শেখার বিষয় রাখা হয়েছে। প্রতিটি বিষয়ে আছে বাছাই করা প্রশ্ন ও সহজ ব্যাখ্যা।</p>
        </div>
        <div class="chapter-stat-stack" aria-label="বিষয়ভিত্তিক কুইজের তথ্য">
          <span><b>${bnNumber(BanglaBook.topics.length)}</b>টি বিষয়</span>
          <span><b>${bnNumber(totalQuestions)}</b>টি প্রশ্ন</span>
          <span><b>💡</b> ব্যাখ্যাসহ</span>
        </div>
      </div>
      ${renderAllSubjectShortcut()}

      <section class="topic-section" aria-label="বাংলা বিষয়ের তালিকা">
        <div class="chapter-group-heading">
          <span class="group-icon" aria-hidden="true">✦</span>
          <div><h2>আজ কী শিখবে?</h2><p>একটি বিষয়ে চাপ দিলেই কুইজ শুরু হবে।</p></div>
        </div>
        <div class="chapter-card-grid">${BanglaBook.topics.map(renderTopicCard).join("")}</div>
      </section>
    </section>
  `;
}

function renderTopicCard(topic) {
  const completed = profile.completed.includes(`bangla:bangla-topic-${topic.id}`);
  return `
    <button class="chapter-card" type="button" data-action="start-topic-quiz" data-topic="${topic.id}" aria-label="${topic.title} বিষয়ে ${bnNumber(topic.questions.length)}টি প্রশ্ন শুরু করো">
      <span class="chapter-card-icon" aria-hidden="true">${topic.icon}</span>
      <span class="chapter-card-copy"><span class="chapter-number">বিষয়ভিত্তিক অনুশীলন</span><strong>${topic.title}</strong><small>${bnNumber(topic.questions.length)}টি বাছাই করা প্রশ্ন <span aria-hidden="true">•</span> ব্যাখ্যাসহ ${completed ? "• ✓ শেষ" : ""}</small></span>
      <span class="chapter-arrow" aria-hidden="true">→</span>
    </button>
  `;
}

function renderEnglishOptions() {
  const subject = subjects.english;
  const topicCount = EnglishBook.topics.length;
  const totalQuestions = EnglishBook.topics.reduce((total, topic) => total + topic.questions.length, 0);

  return `
    <section class="bangla-book-page english-book-page ${subject.className}" aria-labelledby="english-book-title">
      <button class="back-button" type="button" data-action="home"><span class="back-arrow" aria-hidden="true">←</span>সব বিষয়</button>
      <div class="book-hub-hero">
        <div>
          <p class="subject-kicker">English for Today <span aria-hidden="true">•</span> Class Two</p>
          <h1 id="english-book-title">English is fun!</h1>
          <p>বইয়ের দরকারি ভাষা, শব্দ ও গল্প থেকে অনুশীলন করো। প্রতিটি উত্তরের সঙ্গে সহজ ব্যাখ্যাও দেখবে।</p>
          <div class="subject-meta-row">
            <span class="pill">✦ ${bnNumber(topicCount)}টি বিষয়</span>
            <span class="pill">◷ ${bnNumber(totalQuestions)}টি essential question</span>
            <span class="pill">💡 ব্যাখ্যাসহ</span>
          </div>
        </div>
        <div class="book-hub-art english-book-art" aria-hidden="true"><span>A B</span><i>✦</i><b>English</b></div>
      </div>

      <div class="book-choice-heading">
        <div><h2>How would you like to practise?</h2><p>Choose a random full-book quiz or a learning topic.</p></div>
        <span class="quiz-count-note">${bnNumber(totalQuestions)}টি বাছাই করা প্রশ্ন</span>
      </div>
      <div class="book-choice-grid">
        <button class="book-choice-card full-book-choice" type="button" data-action="start-english-full-book" aria-label="Start 10 random questions from the full English book">
          <span class="choice-topline"><span class="choice-icon" aria-hidden="true">📚</span><span class="choice-label">Full book</span></span>
          <span class="choice-title">Random Quiz</span>
          <span class="choice-description">সব English topic থেকে এলোমেলো ১০টি প্রশ্ন। Play Again চাপলে নতুন প্রশ্ন পাবে।</span>
          <span class="choice-footer"><span>10 random questions</span><strong>Start <i aria-hidden="true">→</i></strong></span>
        </button>
        <button class="book-choice-card chapter-book-choice" type="button" data-action="open-english-topic-list" aria-label="View English topics">
          <span class="choice-topline"><span class="choice-icon" aria-hidden="true">🧩</span><span class="choice-label">Topic-wise</span></span>
          <span class="choice-title">Choose a Topic</span>
          <span class="choice-description">Greetings, numbers, colours, family, animals, stories এবং আরও দরকারি বিষয় বেছে নাও।</span>
          <span class="choice-footer"><span>${bnNumber(topicCount)}টি বিষয়</span><strong>Choose <i aria-hidden="true">→</i></strong></span>
        </button>
      </div>

      <aside class="book-note"><span aria-hidden="true">🌟</span><p><strong>Small steps, big learning:</strong> ভুল হলে ব্যাখ্যাটি পড়ো, তারপর আবার চেষ্টা করো।</p></aside>
    </section>
  `;
}

function renderEnglishTopicList() {
  const subject = subjects.english;
  const totalQuestions = EnglishBook.topics.reduce((total, topic) => total + topic.questions.length, 0);
  return `
    <section class="chapter-list-page english-topic-list ${subject.className}" aria-labelledby="english-topic-list-title">
      <button class="back-button" type="button" data-action="english-options"><span class="back-arrow" aria-hidden="true">←</span>English book</button>
      <div class="chapter-list-hero">
        <div>
          <p class="subject-kicker">English for Today <span aria-hidden="true">•</span> Topic-wise practice</p>
          <h1 id="english-topic-list-title">Choose a Topic</h1>
          <p>প্রতিটি বিষয়ে বই থেকে বাছাই করা প্রয়োজনীয় প্রশ্ন আছে—greetings থেকে story time পর্যন্ত।</p>
        </div>
        <div class="chapter-stat-stack" aria-label="English quiz information">
          <span><b>${bnNumber(EnglishBook.topics.length)}</b>টি বিষয়</span>
          <span><b>${bnNumber(totalQuestions)}</b>টি প্রশ্ন</span>
          <span><b>💡</b> ব্যাখ্যাসহ</span>
        </div>
      </div>
      ${renderAllSubjectShortcut()}

      <section class="topic-section" aria-label="English learning topics">
        <div class="chapter-group-heading">
          <span class="group-icon" aria-hidden="true">A B</span>
          <div><h2>What will you learn?</h2><p>Choose one topic to start its essential questions.</p></div>
        </div>
        <div class="chapter-card-grid">${EnglishBook.topics.map(renderEnglishTopicCard).join("")}</div>
      </section>
    </section>
  `;
}

function renderEnglishTopicCard(topic) {
  const completed = profile.completed.includes(`english:english-topic-${topic.id}`);
  return `
    <button class="chapter-card" type="button" data-action="start-english-topic-quiz" data-english-topic="${topic.id}" aria-label="Start ${topic.questions.length} questions about ${topic.title}">
      <span class="chapter-card-icon english-topic-icon" aria-hidden="true">${topic.icon}</span>
      <span class="chapter-card-copy"><span class="chapter-number">English for Today</span><strong>${topic.title}</strong><small>${bnNumber(topic.questions.length)}টি essential question <span aria-hidden="true">•</span> explanation ${completed ? "• ✓ শেষ" : ""}</small></span>
      <span class="chapter-arrow" aria-hidden="true">→</span>
    </button>
  `;
}

function renderMathOptions() {
  const subject = subjects.math;
  const topicCount = MathBook.topics.length;
  const totalQuestions = MathBook.topics.reduce((total, topic) => total + topic.questions.length, 0);

  return `
    <section class="bangla-book-page math-book-page ${subject.className}" aria-labelledby="math-book-title">
      <button class="back-button" type="button" data-action="home"><span class="back-arrow" aria-hidden="true">←</span>সব বিষয়</button>
      <div class="book-hub-hero">
        <div>
          <p class="subject-kicker">প্রাথমিক গণিত <span aria-hidden="true">•</span> দ্বিতীয় শ্রেণি</p>
          <h1 id="math-book-title">গণিতের মজা!</h1>
          <p>সংখ্যা, যোগ-বিয়োগ, ভগ্নাংশ, পরিমাপ ও মুদ্রা—বইয়ের দরকারি বিষয়গুলো থেকে অনুশীলন করো।</p>
          <div class="subject-meta-row">
            <span class="pill">✦ ${bnNumber(topicCount)}টি বিষয়</span>
            <span class="pill">◷ ${bnNumber(totalQuestions)}টি দরকারি প্রশ্ন</span>
            <span class="pill">💡 ব্যাখ্যাসহ</span>
          </div>
        </div>
        <div class="book-hub-art math-book-art" aria-hidden="true"><span>+ −</span><i>✦</i><b>গণিত</b></div>
      </div>

      <div class="book-choice-heading">
        <div><h2>কীভাবে অনুশীলন করবে?</h2><p>সব বিষয় থেকে random quiz অথবা একটি নির্দিষ্ট বিষয় বেছে নাও।</p></div>
        <span class="quiz-count-note">${bnNumber(totalQuestions)}টি বাছাই করা প্রশ্ন</span>
      </div>
      <div class="book-choice-grid">
        <button class="book-choice-card full-book-choice" type="button" data-action="start-math-full-book" aria-label="সব গণিত বিষয় থেকে ১০টি র‌্যান্ডম প্রশ্ন শুরু করো">
          <span class="choice-topline"><span class="choice-icon" aria-hidden="true">🔢</span><span class="choice-label">সম্পূর্ণ বই</span></span>
          <span class="choice-title">Random Quiz</span>
          <span class="choice-description">সব গণিত বিষয় থেকে এলোমেলো ১০টি প্রশ্ন। Play Again চাপলে নতুন প্রশ্ন পাবে।</span>
          <span class="choice-footer"><span>১০ প্রশ্নের র‌্যান্ডম কুইজ</span><strong>শুরু করি <i aria-hidden="true">→</i></strong></span>
        </button>
        <button class="book-choice-card chapter-book-choice" type="button" data-action="open-math-topic-list" aria-label="গণিতের বিষয়ভিত্তিক তালিকা দেখো">
          <span class="choice-topline"><span class="choice-icon" aria-hidden="true">📐</span><span class="choice-label">বিষয়ভিত্তিক</span></span>
          <span class="choice-title">বিষয় বেছে নাও</span>
          <span class="choice-description">সংখ্যা, যোগ, বিয়োগ, ভগ্নাংশ, আকৃতি, পরিমাপ, টাকা ও উপাত্ত থেকে পছন্দের বিষয়টি বেছে নাও।</span>
          <span class="choice-footer"><span>${bnNumber(topicCount)}টি বিষয়</span><strong>বিষয় দেখো <i aria-hidden="true">→</i></strong></span>
        </button>
      </div>

      <aside class="book-note"><span aria-hidden="true">🌟</span><p><strong>ছোট্ট টিপ:</strong> হিসাবটি ধীরে করো, দরকার হলে খাতায় লিখে আবার মিলিয়ে দেখো।</p></aside>
    </section>
  `;
}

function renderMathTopicList() {
  const subject = subjects.math;
  return `
    <section class="chapter-list-page math-topic-list ${subject.className}" aria-labelledby="math-topic-list-title">
      <button class="back-button" type="button" data-action="home"><span class="back-arrow" aria-hidden="true">←</span>সব বিষয়</button>
      <div class="simple-topic-heading">
        <h1 id="math-topic-list-title">গণিতের বিষয়সমূহ</h1>
        <p>পছন্দের একটি বিষয়ে চাপ দিয়ে অনুশীলন শুরু করো।</p>
      </div>
      ${renderAllSubjectShortcut()}
      <section class="topic-section" aria-label="গণিতের বিষয়সমূহ">
        <div class="chapter-card-grid">${MathBook.topics.map(renderMathTopicCard).join("")}</div>
      </section>
    </section>
  `;
}

function renderMathTopicCard(topic) {
  const completed = profile.completed.includes(`math:math-topic-${topic.id}`);
  const numberReading = topic.id === "number-reading";
  const countLabel = numberReading ? "১–১০০ • প্রতি রাউন্ডে ১০টি" : `${bnNumber(topic.questions.length)}টি বাছাই করা প্রশ্ন`;
  return `
    <button class="chapter-card" type="button" data-action="start-math-topic-quiz" data-math-topic="${topic.id}" aria-label="${topic.title} বিষয়ে অনুশীলন শুরু করো">
      <span class="chapter-card-icon math-topic-icon" aria-hidden="true">${topic.icon}</span>
      <span class="chapter-card-copy"><span class="chapter-number">গণিত অনুশীলন</span><strong>${topic.title}</strong><small>${countLabel} <span aria-hidden="true">•</span> ব্যাখ্যাসহ ${completed ? "• ✓ শেষ" : ""}</small></span>
      <span class="chapter-arrow" aria-hidden="true">→</span>
    </button>
  `;
}

function renderGkOptions() {
  const subject = subjects.gk;
  const topicCount = GkBook.topics.length;
  const totalQuestions = GkBook.topics.reduce((total, topic) => total + topic.questions.length, 0);

  return `
    <section class="bangla-book-page gk-book-page ${subject.className}" aria-labelledby="gk-book-title">
      <button class="back-button" type="button" data-action="home"><span class="back-arrow" aria-hidden="true">←</span>সব বিষয়</button>
      <div class="book-hub-hero">
        <div>
          <p class="subject-kicker">সাধারণ জ্ঞান <span aria-hidden="true">•</span> দ্বিতীয় শ্রেণি</p>
          <h1 id="gk-book-title">জানার দুনিয়া!</h1>
          <p>বাংলাদেশ, প্রকৃতি, স্বাস্থ্য, নিরাপত্তা ও চারপাশের জরুরি বিষয়গুলো থেকে অনুশীলন করো।</p>
          <div class="subject-meta-row">
            <span class="pill">✦ ${bnNumber(topicCount)}টি বিষয়</span>
            <span class="pill">◷ ${bnNumber(totalQuestions)}টি দরকারি প্রশ্ন</span>
            <span class="pill">💡 ব্যাখ্যাসহ</span>
          </div>
        </div>
        <div class="book-hub-art gk-book-art" aria-hidden="true"><span>🌏</span><i>✦</i><b>জানি</b></div>
      </div>

      <div class="book-choice-heading">
        <div><h2>কীভাবে অনুশীলন করবে?</h2><p>সব বিষয় থেকে random quiz অথবা পছন্দের একটি বিষয় বেছে নাও।</p></div>
        <span class="quiz-count-note">${bnNumber(totalQuestions)}টি বাছাই করা প্রশ্ন</span>
      </div>
      <div class="book-choice-grid">
        <button class="book-choice-card full-book-choice" type="button" data-action="start-gk-full-book" aria-label="সব সাধারণ জ্ঞান বিষয় থেকে ১০টি র‌্যান্ডম প্রশ্ন শুরু করো">
          <span class="choice-topline"><span class="choice-icon" aria-hidden="true">🌟</span><span class="choice-label">সম্পূর্ণ বই</span></span>
          <span class="choice-title">Random Quiz</span>
          <span class="choice-description">সব সাধারণ জ্ঞান বিষয় থেকে এলোমেলো ১০টি প্রশ্ন। Play Again চাপলে নতুন প্রশ্ন পাবে।</span>
          <span class="choice-footer"><span>১০ প্রশ্নের র‌্যান্ডম কুইজ</span><strong>শুরু করি <i aria-hidden="true">→</i></strong></span>
        </button>
        <button class="book-choice-card chapter-book-choice" type="button" data-action="open-gk-topic-list" aria-label="সাধারণ জ্ঞানের বিষয়ভিত্তিক তালিকা দেখো">
          <span class="choice-topline"><span class="choice-icon" aria-hidden="true">🧩</span><span class="choice-label">বিষয়ভিত্তিক</span></span>
          <span class="choice-title">বিষয় বেছে নাও</span>
          <span class="choice-description">বাংলাদেশ, প্রকৃতি, স্বাস্থ্য, নিরাপত্তা, পরিবার, স্কুল ও বিজ্ঞান থেকে পছন্দের বিষয়টি বেছে নাও।</span>
          <span class="choice-footer"><span>${bnNumber(topicCount)}টি বিষয়</span><strong>বিষয় দেখো <i aria-hidden="true">→</i></strong></span>
        </button>
      </div>

      <aside class="book-note"><span aria-hidden="true">🌟</span><p><strong>জানার আনন্দ:</strong> চারপাশ সম্পর্কে জানলে প্রতিদিনের সিদ্ধান্ত নেওয়া আরও সহজ হয়।</p></aside>
    </section>
  `;
}

function renderGkTopicList() {
  const subject = subjects.gk;
  const totalQuestions = GkBook.topics.reduce((total, topic) => total + topic.questions.length, 0);
  return `
    <section class="chapter-list-page gk-topic-list ${subject.className}" aria-labelledby="gk-topic-list-title">
      <button class="back-button" type="button" data-action="gk-options"><span class="back-arrow" aria-hidden="true">←</span>সাধারণ জ্ঞান</button>
      <div class="chapter-list-hero">
        <div>
          <p class="subject-kicker">সাধারণ জ্ঞান <span aria-hidden="true">•</span> বিষয়ভিত্তিক অনুশীলন</p>
          <h1 id="gk-topic-list-title">বিষয় বেছে নাও</h1>
          <p>প্রতিটি বিষয়ে শুধু দরকারি সাধারণ জ্ঞানের প্রশ্ন আছে। ভুল হলে সঙ্গে সঙ্গে ব্যাখ্যাও দেখবে।</p>
        </div>
        <div class="chapter-stat-stack" aria-label="সাধারণ জ্ঞান কুইজের তথ্য">
          <span><b>${bnNumber(GkBook.topics.length)}</b>টি বিষয়</span>
          <span><b>${bnNumber(totalQuestions)}</b>টি প্রশ্ন</span>
          <span><b>💡</b> ব্যাখ্যাসহ</span>
        </div>
      </div>
      ${renderAllSubjectShortcut()}

      <section class="topic-section" aria-label="সাধারণ জ্ঞানের বিষয়সমূহ">
        <div class="chapter-group-heading">
          <span class="group-icon" aria-hidden="true">🌏</span>
          <div><h2>আজ কী জানবে?</h2><p>একটি বিষয়ে চাপ দিলেই তার প্রয়োজনীয় প্রশ্ন শুরু হবে।</p></div>
        </div>
        <div class="chapter-card-grid">${GkBook.topics.map(renderGkTopicCard).join("")}</div>
      </section>
    </section>
  `;
}

function renderGkTopicCard(topic) {
  const completed = profile.completed.includes(`gk:gk-topic-${topic.id}`);
  return `
    <button class="chapter-card" type="button" data-action="start-gk-topic-quiz" data-gk-topic="${topic.id}" aria-label="${topic.title} বিষয়ে ${bnNumber(topic.questions.length)}টি প্রশ্ন শুরু করো">
      <span class="chapter-card-icon gk-topic-icon" aria-hidden="true">${topic.icon}</span>
      <span class="chapter-card-copy"><span class="chapter-number">সাধারণ জ্ঞান</span><strong>${topic.title}</strong><small>${bnNumber(topic.questions.length)}টি বাছাই করা প্রশ্ন <span aria-hidden="true">•</span> ব্যাখ্যাসহ ${completed ? "• ✓ শেষ" : ""}</small></span>
      <span class="chapter-arrow" aria-hidden="true">→</span>
    </button>
  `;
}

function renderQuizCard(subject, quiz, index) {
  const completed = profile.completed.includes(`${subject.id}:${quiz.id}`);
  return `
    <article class="quiz-card ${subject.className}">
      <span class="quiz-card-number">০${index + 1}</span>
      <span class="quiz-card-art" aria-hidden="true">${quiz.art}</span>
      <h3>${quiz.title}</h3>
      <p>${quiz.description}</p>
      <div class="quiz-card-footer">
        <span class="quiz-time">◷ ৪ প্রশ্ন ${completed ? "• ✓ শেষ" : ""}</span>
        <button class="play-button" type="button" data-action="start-quiz" data-subject="${subject.id}" data-quiz="${quiz.id}">${completed ? "আবার খেলি" : "শুরু করি"} <span aria-hidden="true">→</span></button>
      </div>
    </article>
  `;
}

function renderBanglaNumberInput(question, answered) {
  const value = state.inputs[state.questionIndex] || "";
  const correct = answered && state.answers[state.questionIndex] === question.answer;
  const fieldClass = answered ? (correct ? "is-number-correct" : "is-number-wrong") : "";
  const digits = ["১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯", "০"];
  return `
    <div class="number-answer-area">
      <label class="number-input-label" for="bangla-number-input">অঙ্কে উত্তর লেখো</label>
      <input id="bangla-number-input" class="number-input ${fieldClass}" type="text" value="${value}" placeholder="এখানে লিখো" readonly aria-label="বাংলা অঙ্কে উত্তর" />
      ${answered ? "" : `
        <div class="bangla-keypad" role="group" aria-label="বাংলা সংখ্যা কিবোর্ড">
          ${digits.map((digit) => `<button class="keypad-key" type="button" data-action="keypad-key" data-key="${digit}">${digit}</button>`).join("")}
          <button class="keypad-key keypad-backspace" type="button" data-action="keypad-backspace" aria-label="শেষ অঙ্ক মুছো">⌫</button>
          <button class="keypad-key keypad-clear" type="button" data-action="keypad-clear">মুছি</button>
        </div>
        <button class="number-submit-button" type="button" data-action="submit-number-input" ${value ? "" : "disabled"}>উত্তর যাচাই <span aria-hidden="true">✓</span></button>
      `}
    </div>
  `;
}

function renderQuiz() {
  const subject = getSubject();
  const quiz = getQuiz();
  const question = quiz.questions[state.questionIndex];
  const isBanglaNumberInput = question.inputMode === "bangla-number";
  const questionHint = isBanglaNumberInput
    ? "সংখ্যাটি অঙ্কে লেখো"
    : question.sourceSubject ? `${question.sourceSubject} থেকে একটি প্রশ্ন` : "ভালো করে ভেবে উত্তর দাও";
  const answered = isAnswered();
  const selected = state.answers[state.questionIndex];
  const progress = ((state.questionIndex + 1) / quiz.questions.length) * 100;
  const labels = ["ক", "খ", "গ", "ঘ"];

  return `
    <section class="quiz-view ${subject.className}" aria-labelledby="question-title">
      <div class="quiz-status">
        <span class="quiz-status-title" title="${quiz.title}">${subject.name} <i aria-hidden="true">•</i> ${quiz.title}</span>
        <span class="quiz-status-count">${bnNumber(state.questionIndex + 1)}/${bnNumber(quiz.questions.length)} <small>প্রশ্ন</small></span>
      </div>
      <div class="quiz-progress-track" role="progressbar" aria-label="কুইজের অগ্রগতি" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(progress)}"><span style="width: ${progress}%"></span></div>

      <article class="question-card ${subject.className}" data-quiz-scroll-region>
        <p class="quiz-kicker">${questionHint}</p>
        <h1 id="question-title">${question.prompt}</h1>
        ${isBanglaNumberInput ? renderBanglaNumberInput(question, answered) : `
          <div class="answer-grid" role="group" aria-label="উত্তর বেছে নাও">
            ${question.options.map((option, index) => {
              let optionClass = "";
              if (answered) {
                if (index === question.answer) optionClass = "is-correct";
                else if (index === selected) optionClass = "is-wrong";
                else optionClass = "is-muted";
              }
              return `<button class="answer-option ${optionClass}" type="button" data-action="answer" data-answer="${index}" ${answered ? "disabled" : ""}><span class="answer-letter">${labels[index]}</span><span>${option}</span></button>`;
            }).join("")}
          </div>
        `}
        ${answered ? renderFeedback(question, selected, state.questionIndex === quiz.questions.length - 1) : ""}
      </article>
    </section>
  `;
}

function renderFeedback(question, selected, isLast) {
  const correct = selected === question.answer;
  const title = correct ? "সঠিক উত্তর!" : "ভালো চেষ্টা!";
  const correctAnswer = question.inputMode === "bangla-number" ? question.answer : question.options[question.answer];
  const answerNote = correct ? "" : `<small>সঠিক উত্তর: ${correctAnswer}</small>`;
  const explanation = question.explanation || "উত্তরটি আবার একবার দেখে মনে রাখো।";
  return `
    <div class="feedback-row has-explanation" role="status" aria-live="polite" tabindex="-1" style="--feedback-bg: ${correct ? "#ecf9ed" : "#fff4e8"}; --feedback-title: ${correct ? "#397151" : "#a06a37"}">
      <div class="feedback-message">
        <span><b>${title}</b>${answerNote}<small class="answer-explanation"><strong>ব্যাখ্যা:</strong> ${explanation}</small></span>
      </div>
      <button class="next-button" type="button" data-action="next-question">${isLast ? "ফলাফল" : "পরের প্রশ্ন"} <span aria-hidden="true">→</span></button>
    </div>
  `;
}

function renderComplete() {
  const subject = getSubject();
  const quiz = getQuiz();
  const score = quizScore();
  const allCorrect = score === quiz.questions.length;
  const isFullBookQuiz = ["all-subjects", "full-book", "english-full-book", "math-full-book", "gk-full-book"].includes(state.quizOrigin);
  const title = allCorrect ? "অসাধারণ!" : score >= 2 ? "দারুণ চেষ্টা!" : "তুমি পারবে!";
  const description = isFullBookQuiz
    ? allCorrect
      ? "সব ১০টি র‌্যান্ডম প্রশ্নের উত্তরই ঠিক হয়েছে। অসাধারণ কাজ!"
      : "তুমি ১০টি র‌্যান্ডম প্রশ্ন শেষ করেছো। নিচের Play Again চাপলে একদম নতুন ১০টি প্রশ্ন পাবে।"
    : allCorrect
      ? "সবগুলো উত্তরই ঠিক হয়েছে। অসাধারণ কাজ!"
      : "তুমি কুইজটি শেষ করেছো—এটাই খুব ভালো কথা। আবার খেললে আরও ভালো হবে!";
  const replayLabel = isFullBookQuiz ? "Play Again" : "আবার খেলি";

  return `
    <section class="complete-view" aria-labelledby="complete-title">
      <article class="complete-card ${subject.className}">
        <span class="confetti a" aria-hidden="true">✦</span>
        <span class="confetti b" aria-hidden="true">●</span>
        <span class="confetti c" aria-hidden="true">✦</span>
        <span class="confetti d" aria-hidden="true">●</span>
        <div class="trophy-wrap" aria-hidden="true">🏆</div>
        <h1 id="complete-title">${title}</h1>
        <p>${description}</p>
        <div class="score-box" aria-label="কুইজের ফলাফল">
          <div class="score-stat"><strong>${bnNumber(score)}/${bnNumber(quiz.questions.length)}</strong><span>সঠিক উত্তর</span></div>
          <div class="score-stat"><strong>${bnNumber(quiz.questions.length)}</strong><span>মোট প্রশ্ন</span></div>
        </div>
        <div class="complete-actions">
          <button class="return-button" type="button" data-action="replay">${replayLabel} <span aria-hidden="true">↻</span></button>
          <button class="secondary-button" type="button" data-action="return-subject">আরও কুইজ দেখো <span aria-hidden="true">→</span></button>
        </div>
      </article>
    </section>
  `;
}

function render() {
  document.body.classList.toggle("quiz-mode", state.screen === "quiz");
  updateHeader();
  if (state.screen === "home") {
    app.innerHTML = renderHome();
    document.title = "ঝিলমিল কুইজ | দ্বিতীয় শ্রেণি";
  } else if (state.screen === "subject") {
    app.innerHTML = renderSubject();
    document.title = `${getSubject().name} কুইজ | ঝিলমিল কুইজ`;
  } else if (state.screen === "bangla-options") {
    app.innerHTML = renderBanglaOptions();
    document.title = "বাংলা বই | ঝিলমিল কুইজ";
  } else if (state.screen === "english-options") {
    app.innerHTML = renderEnglishOptions();
    document.title = "English for Today | ঝিলমিল কুইজ";
  } else if (state.screen === "english-topic-list") {
    app.innerHTML = renderEnglishTopicList();
    document.title = "English topics | ঝিলমিল কুইজ";
  } else if (state.screen === "math-options") {
    app.innerHTML = renderMathOptions();
    document.title = "প্রাথমিক গণিত | ঝিলমিল কুইজ";
  } else if (state.screen === "math-topic-list") {
    app.innerHTML = renderMathTopicList();
    document.title = "গণিতের বিষয়সমূহ | ঝিলমিল কুইজ";
  } else if (state.screen === "gk-options") {
    app.innerHTML = renderGkOptions();
    document.title = "সাধারণ জ্ঞান | ঝিলমিল কুইজ";
  } else if (state.screen === "gk-topic-list") {
    app.innerHTML = renderGkTopicList();
    document.title = "সাধারণ জ্ঞানের বিষয়সমূহ | ঝিলমিল কুইজ";
  } else if (state.screen === "topic-list") {
    app.innerHTML = renderTopicList();
    document.title = "বাংলা বিষয়ের তালিকা | ঝিলমিল কুইজ";
  } else if (state.screen === "quiz") {
    app.innerHTML = renderQuiz();
    document.title = `${getQuiz().title} | ঝিলমিল কুইজ`;
  } else if (state.screen === "complete") {
    app.innerHTML = renderComplete();
    document.title = "কুইজ শেষ! | ঝিলমিল কুইজ";
  }
}

function goHome() {
  state.screen = "home";
  state.subjectKey = null;
  state.quizId = null;
  state.topicId = null;
  state.englishTopicId = null;
  state.quizOrigin = "standard";
  state.generatedQuiz = null;
  state.answers = [];
  state.inputs = [];
  render();
  moveToTop();
}

function openSubject(subjectKey) {
  if (subjectKey === "bangla") {
    openBanglaOptions();
    return;
  }
  if (subjectKey === "english") {
    openEnglishOptions();
    return;
  }
  if (subjectKey === "math") {
    openMathTopicList();
    return;
  }
  if (subjectKey === "gk") {
    openGkOptions();
    return;
  }
  state.screen = "subject";
  state.subjectKey = subjectKey;
  state.quizId = null;
  state.topicId = null;
  state.englishTopicId = null;
  state.quizOrigin = "standard";
  state.generatedQuiz = null;
  state.answers = [];
  state.inputs = [];
  render();
  moveToTop();
}

function openBanglaOptions() {
  state.screen = "bangla-options";
  state.subjectKey = "bangla";
  state.quizId = null;
  state.topicId = null;
  state.englishTopicId = null;
  state.quizOrigin = "bangla-options";
  state.generatedQuiz = null;
  state.answers = [];
  state.inputs = [];
  render();
  moveToTop();
}

function openEnglishOptions() {
  state.screen = "english-options";
  state.subjectKey = "english";
  state.quizId = null;
  state.topicId = null;
  state.englishTopicId = null;
  state.quizOrigin = "english-options";
  state.generatedQuiz = null;
  state.answers = [];
  state.inputs = [];
  render();
  moveToTop();
}

function openEnglishTopicList() {
  state.screen = "english-topic-list";
  state.subjectKey = "english";
  state.quizId = null;
  state.topicId = null;
  state.englishTopicId = null;
  state.quizOrigin = "english-topic";
  state.generatedQuiz = null;
  state.answers = [];
  state.inputs = [];
  render();
  moveToTop();
}

function openMathOptions() {
  openMathTopicList();
}

function openMathTopicList() {
  state.screen = "math-topic-list";
  state.subjectKey = "math";
  state.quizId = null;
  state.topicId = null;
  state.englishTopicId = null;
  state.mathTopicId = null;
  state.quizOrigin = "math-topic";
  state.generatedQuiz = null;
  state.answers = [];
  state.inputs = [];
  render();
  moveToTop();
}

function openGkOptions() {
  state.screen = "gk-options";
  state.subjectKey = "gk";
  state.quizId = null;
  state.topicId = null;
  state.englishTopicId = null;
  state.mathTopicId = null;
  state.gkTopicId = null;
  state.quizOrigin = "gk-options";
  state.generatedQuiz = null;
  state.answers = [];
  state.inputs = [];
  render();
  moveToTop();
}

function openGkTopicList() {
  state.screen = "gk-topic-list";
  state.subjectKey = "gk";
  state.quizId = null;
  state.topicId = null;
  state.englishTopicId = null;
  state.mathTopicId = null;
  state.gkTopicId = null;
  state.quizOrigin = "gk-topic";
  state.generatedQuiz = null;
  state.answers = [];
  state.inputs = [];
  render();
  moveToTop();
}

function openTopicList() {
  state.screen = "topic-list";
  state.subjectKey = "bangla";
  state.quizId = null;
  state.topicId = null;
  state.englishTopicId = null;
  state.quizOrigin = "topic";
  state.generatedQuiz = null;
  state.answers = [];
  state.inputs = [];
  render();
  moveToTop();
}

function startQuiz(subjectKey, quizId) {
  state.screen = "quiz";
  state.subjectKey = subjectKey;
  state.quizId = quizId;
  state.topicId = null;
  state.englishTopicId = null;
  state.quizOrigin = "standard";
  state.generatedQuiz = null;
  state.questionIndex = 0;
  state.answers = [];
  state.inputs = [];
  render();
  moveToTop();
}

function startTopicQuiz(topicId) {
  const quiz = BanglaBook.makeTopicQuiz(topicId);
  if (!quiz) return;
  state.screen = "quiz";
  state.subjectKey = "bangla";
  state.quizId = quiz.id;
  state.topicId = topicId;
  state.englishTopicId = null;
  state.quizOrigin = "topic";
  state.generatedQuiz = quiz;
  state.questionIndex = 0;
  state.answers = [];
  state.inputs = [];
  render();
  moveToTop();
}

function startEnglishTopicQuiz(topicId) {
  const quiz = EnglishBook.makeTopicQuiz(topicId);
  if (!quiz) return;
  state.screen = "quiz";
  state.subjectKey = "english";
  state.quizId = quiz.id;
  state.topicId = null;
  state.englishTopicId = topicId;
  state.quizOrigin = "english-topic";
  state.generatedQuiz = quiz;
  state.questionIndex = 0;
  state.answers = [];
  state.inputs = [];
  render();
  moveToTop();
}

function startEnglishFullBookQuiz() {
  let quiz = EnglishBook.makeFullBookQuiz(state.usedEnglishFullBookQuestionIds);
  if (quiz.availableQuestionCount < 10) {
    state.usedEnglishFullBookQuestionIds = [];
    quiz = EnglishBook.makeFullBookQuiz();
  }
  state.usedEnglishFullBookQuestionIds = [...state.usedEnglishFullBookQuestionIds, ...quiz.questionIds];
  state.screen = "quiz";
  state.subjectKey = "english";
  state.quizId = quiz.id;
  state.topicId = null;
  state.englishTopicId = null;
  state.quizOrigin = "english-full-book";
  state.generatedQuiz = quiz;
  state.questionIndex = 0;
  state.answers = [];
  state.inputs = [];
  render();
  moveToTop();
}

function startMathTopicQuiz(topicId) {
  let quiz = MathBook.makeTopicQuiz(topicId, topicId === "number-reading" ? state.usedNumberReadingQuestionIds : []);
  if (!quiz) return;
  if (topicId === "number-reading") {
    if (quiz.availableQuestionCount < 10) {
      state.usedNumberReadingQuestionIds = [];
      quiz = MathBook.makeTopicQuiz(topicId);
    }
    state.usedNumberReadingQuestionIds = [...state.usedNumberReadingQuestionIds, ...quiz.questionIds];
  }
  state.screen = "quiz";
  state.subjectKey = "math";
  state.quizId = quiz.id;
  state.topicId = null;
  state.englishTopicId = null;
  state.mathTopicId = topicId;
  state.quizOrigin = "math-topic";
  state.generatedQuiz = quiz;
  state.questionIndex = 0;
  state.answers = [];
  state.inputs = [];
  render();
  moveToTop();
}

function startMathFullBookQuiz() {
  let quiz = MathBook.makeFullBookQuiz(state.usedMathFullBookQuestionIds);
  if (quiz.availableQuestionCount < 10) {
    state.usedMathFullBookQuestionIds = [];
    quiz = MathBook.makeFullBookQuiz();
  }
  state.usedMathFullBookQuestionIds = [...state.usedMathFullBookQuestionIds, ...quiz.questionIds];
  state.screen = "quiz";
  state.subjectKey = "math";
  state.quizId = quiz.id;
  state.topicId = null;
  state.englishTopicId = null;
  state.mathTopicId = null;
  state.quizOrigin = "math-full-book";
  state.generatedQuiz = quiz;
  state.questionIndex = 0;
  state.answers = [];
  state.inputs = [];
  render();
  moveToTop();
}

function startGkTopicQuiz(topicId) {
  const quiz = GkBook.makeTopicQuiz(topicId);
  if (!quiz) return;
  state.screen = "quiz";
  state.subjectKey = "gk";
  state.quizId = quiz.id;
  state.topicId = null;
  state.englishTopicId = null;
  state.mathTopicId = null;
  state.gkTopicId = topicId;
  state.quizOrigin = "gk-topic";
  state.generatedQuiz = quiz;
  state.questionIndex = 0;
  state.answers = [];
  state.inputs = [];
  render();
  moveToTop();
}

function startGkFullBookQuiz() {
  let quiz = GkBook.makeFullBookQuiz(state.usedGkFullBookQuestionIds);
  if (quiz.availableQuestionCount < 10) {
    state.usedGkFullBookQuestionIds = [];
    quiz = GkBook.makeFullBookQuiz();
  }
  state.usedGkFullBookQuestionIds = [...state.usedGkFullBookQuestionIds, ...quiz.questionIds];
  state.screen = "quiz";
  state.subjectKey = "gk";
  state.quizId = quiz.id;
  state.topicId = null;
  state.englishTopicId = null;
  state.mathTopicId = null;
  state.gkTopicId = null;
  state.quizOrigin = "gk-full-book";
  state.generatedQuiz = quiz;
  state.questionIndex = 0;
  state.answers = [];
  state.inputs = [];
  render();
  moveToTop();
}

function startAllSubjectsQuiz() {
  let quiz = makeAllSubjectsRandomQuiz(state.usedAllSubjectsQuestionIds);
  if (quiz.availableQuestionCount < 10 || !quiz.canCoverAllSubjects) {
    state.usedAllSubjectsQuestionIds = [];
    quiz = makeAllSubjectsRandomQuiz();
  }
  state.usedAllSubjectsQuestionIds = [...state.usedAllSubjectsQuestionIds, ...quiz.questionIds];
  state.screen = "quiz";
  state.subjectKey = null;
  state.topicId = null;
  state.englishTopicId = null;
  state.mathTopicId = null;
  state.gkTopicId = null;
  state.quizId = quiz.id;
  state.quizOrigin = "all-subjects";
  state.generatedQuiz = quiz;
  state.questionIndex = 0;
  state.answers = [];
  state.inputs = [];
  render();
  moveToTop();
}

function startFullBookQuiz() {
  let quiz = BanglaBook.makeFullBookQuiz(state.usedFullBookQuestionIds);
  // Once every available question has been used, begin a fresh random cycle.
  if (quiz.availableQuestionCount < 10) {
    state.usedFullBookQuestionIds = [];
    quiz = BanglaBook.makeFullBookQuiz();
  }
  state.usedFullBookQuestionIds = [...state.usedFullBookQuestionIds, ...quiz.questionIds];
  state.screen = "quiz";
  state.subjectKey = "bangla";
  state.quizId = quiz.id;
  state.topicId = null;
  state.englishTopicId = null;
  state.quizOrigin = "full-book";
  state.generatedQuiz = quiz;
  state.questionIndex = 0;
  state.answers = [];
  state.inputs = [];
  render();
  moveToTop();
}

function returnFromQuiz() {
  if (state.quizOrigin === "all-subjects") {
    goHome();
    return;
  }
  if (state.quizOrigin === "topic") {
    openTopicList();
  } else if (state.quizOrigin === "english-topic") {
    openEnglishTopicList();
  } else if (state.quizOrigin === "math-topic") {
    openMathTopicList();
  } else if (state.quizOrigin === "gk-topic") {
    openGkTopicList();
  } else if (state.quizOrigin === "full-book") {
    openBanglaOptions();
  } else if (state.quizOrigin === "english-full-book") {
    openEnglishOptions();
  } else if (state.quizOrigin === "math-full-book") {
    openMathOptions();
  } else if (state.quizOrigin === "gk-full-book") {
    openGkOptions();
  } else {
    openSubject(state.subjectKey);
  }
}

function moveToTop() {
  // Quiz transitions should be immediate so a queued smooth scroll never leaves
  // the next question halfway down the viewport.
  window.scrollTo({ top: 0, behavior: state.screen === "quiz" ? "auto" : "smooth" });
}

function revealQuizFeedback() {
  requestAnimationFrame(() => {
    const feedback = app.querySelector(".feedback-row");
    const scrollRegion = app.querySelector("[data-quiz-scroll-region]");
    if (!feedback || !scrollRegion) return;

    const feedbackBox = feedback.getBoundingClientRect();
    const regionBox = scrollRegion.getBoundingClientRect();
    const feedbackIsClipped = feedbackBox.bottom > regionBox.bottom - 8 || feedbackBox.top < regionBox.top + 8;
    if (feedbackIsClipped) {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      feedback.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
    }

    feedback.querySelector(".next-button")?.focus({ preventScroll: true });
  });
}

function finishQuiz() {
  const quiz = getQuiz();
  const score = quizScore();
  const completedKey = `${state.subjectKey}:${state.quizId}`;
  if (!profile.completed.includes(completedKey)) {
    profile.completed.push(completedKey);
  }
  saveProfile();
  state.screen = "complete";
  render();
  moveToTop();
}

function handleAction(actionTarget) {
  const action = actionTarget.dataset.action;

  if (action === "home") goHome();

  if (action === "scroll-subjects") {
    document.getElementById("subjects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (action === "open-subject") openSubject(actionTarget.dataset.subject);

  if (action === "start-all-subjects-quiz") startAllSubjectsQuiz();

  if (action === "start-quiz") startQuiz(actionTarget.dataset.subject, actionTarget.dataset.quiz);

  if (action === "bangla-options") openBanglaOptions();

  if (action === "english-options") openEnglishOptions();

  if (action === "math-options") openMathOptions();

  if (action === "gk-options") openGkOptions();

  if (action === "open-topic-list") openTopicList();

  if (action === "open-english-topic-list") openEnglishTopicList();

  if (action === "open-math-topic-list") openMathTopicList();

  if (action === "open-gk-topic-list") openGkTopicList();

  if (action === "start-topic-quiz") startTopicQuiz(actionTarget.dataset.topic);

  if (action === "start-english-topic-quiz") startEnglishTopicQuiz(actionTarget.dataset.englishTopic);

  if (action === "start-math-topic-quiz") startMathTopicQuiz(actionTarget.dataset.mathTopic);

  if (action === "start-gk-topic-quiz") startGkTopicQuiz(actionTarget.dataset.gkTopic);

  if (action === "start-full-book") startFullBookQuiz();

  if (action === "start-english-full-book") startEnglishFullBookQuiz();

  if (action === "start-math-full-book") startMathFullBookQuiz();

  if (action === "start-gk-full-book") startGkFullBookQuiz();

  const activeQuestion = state.screen === "quiz" ? getQuiz()?.questions[state.questionIndex] : null;
  if (activeQuestion?.inputMode === "bangla-number" && !isAnswered()) {
    const currentValue = state.inputs[state.questionIndex] || "";
    if (action === "keypad-key" && currentValue.length < 3) {
      state.inputs[state.questionIndex] = `${currentValue}${actionTarget.dataset.key}`;
      render();
    }
    if (action === "keypad-backspace") {
      state.inputs[state.questionIndex] = currentValue.slice(0, -1);
      render();
    }
    if (action === "keypad-clear") {
      state.inputs[state.questionIndex] = "";
      render();
    }
    if (action === "submit-number-input" && currentValue) {
      state.answers[state.questionIndex] = currentValue;
      render();
      revealQuizFeedback();
    }
  }

  if (action === "return-subject" || action === "quit-quiz") returnFromQuiz();

  if (action === "answer" && state.screen === "quiz" && !isAnswered()) {
    state.answers[state.questionIndex] = Number(actionTarget.dataset.answer);
    render();
    revealQuizFeedback();
  }

  if (action === "next-question" && state.screen === "quiz" && isAnswered()) {
    const quiz = getQuiz();
    if (state.questionIndex < quiz.questions.length - 1) {
      state.questionIndex += 1;
      render();
      moveToTop();
    } else {
      finishQuiz();
    }
  }

  if (action === "replay") {
    if (state.quizOrigin === "all-subjects") startAllSubjectsQuiz();
    else if (state.quizOrigin === "topic") startTopicQuiz(state.topicId);
    else if (state.quizOrigin === "english-topic") startEnglishTopicQuiz(state.englishTopicId);
    else if (state.quizOrigin === "math-topic") startMathTopicQuiz(state.mathTopicId);
    else if (state.quizOrigin === "gk-topic") startGkTopicQuiz(state.gkTopicId);
    else if (state.quizOrigin === "full-book") startFullBookQuiz();
    else if (state.quizOrigin === "english-full-book") startEnglishFullBookQuiz();
    else if (state.quizOrigin === "math-full-book") startMathFullBookQuiz();
    else if (state.quizOrigin === "gk-full-book") startGkFullBookQuiz();
    else startQuiz(state.subjectKey, state.quizId);
  }
}

document.addEventListener("click", (event) => {
  const actionTarget = event.target.closest("[data-action]");
  if (actionTarget) handleAction(actionTarget);
});

document.addEventListener("keydown", (event) => {
  if (state.screen !== "quiz" || isAnswered() || event.altKey || event.ctrlKey || event.metaKey) return;
  const activeQuestion = getQuiz()?.questions[state.questionIndex];
  if (activeQuestion?.inputMode === "bangla-number") {
    const digitMap = { "0": "০", "1": "১", "2": "২", "3": "৩", "4": "৪", "5": "৫", "6": "৬", "7": "৭", "8": "৮", "9": "৯", "০": "০", "১": "১", "২": "২", "৩": "৩", "৪": "৪", "৫": "৫", "৬": "৬", "৭": "৭", "৮": "৮", "৯": "৯" };
    const currentValue = state.inputs[state.questionIndex] || "";
    if (digitMap[event.key] && currentValue.length < 3) {
      event.preventDefault();
      state.inputs[state.questionIndex] = `${currentValue}${digitMap[event.key]}`;
      render();
    }
    if (event.key === "Backspace") {
      event.preventDefault();
      state.inputs[state.questionIndex] = currentValue.slice(0, -1);
      render();
    }
    if (event.key === "Enter" && currentValue) {
      event.preventDefault();
      state.answers[state.questionIndex] = currentValue;
      render();
      revealQuizFeedback();
    }
    return;
  }
  const answerIndex = Number(event.key) - 1;
  if (answerIndex >= 0 && answerIndex <= 3) {
    event.preventDefault();
    state.answers[state.questionIndex] = answerIndex;
    render();
    revealQuizFeedback();
  }
});

render();

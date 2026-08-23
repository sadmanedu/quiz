const subjects = {
  bangla: {
    id: "bangla",
    name: "বাংলা",
    className: "subject-bangla",
    icon: "অ",
    iconClass: "bangla",
    homeDescription: "সম্পূর্ণ বই ও পাঠভিত্তিক",
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
            prompt: "‘আম’ শব্দটি কোন বর্ণ দিয়ে শুরু?",
            options: ["ই", "আ", "উ", "এ"],
            answer: 1,
            visual: "আম"
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
            prompt: "কোন শব্দটি ‘ম’ দিয়ে শুরু হয়েছে?",
            options: ["মাছ", "বল", "কলম", "ঘর"],
            answer: 0,
            visual: "ম"
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
            prompt: "‘রবি’ নামটি কোন বর্ণ দিয়ে শুরু?",
            options: ["ব", "র", "স", "ন"],
            answer: 1,
            visual: "র"
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
            prompt: "‘ফুল’ শব্দটি কী দিয়ে শুরু?",
            options: ["ফ", "ল", "ব", "প"],
            answer: 0,
            visual: "ফ"
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
    homeDescription: "Letters, words & fun",
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
    homeDescription: "সংখ্যা, যোগ আর আকার",
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
    homeDescription: "বাংলাদেশ আর চারপাশ",
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

const app = document.getElementById("app");
const topActions = document.getElementById("top-actions");
const STORAGE_KEY = "jhilmil-quiz-progress-v1";

const state = {
  screen: "home",
  subjectKey: null,
  quizId: null,
  chapterId: null,
  quizOrigin: "standard",
  generatedQuiz: null,
  questionIndex: 0,
  answers: [],
  awardedStars: 0
};

let profile = loadProfile();

function loadProfile() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (stored && typeof stored.stars === "number" && Array.isArray(stored.completed)) {
      return stored;
    }
  } catch (error) {
    // A quiz should still work when storage is unavailable.
  }
  return { stars: 0, completed: [] };
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
  return subjects[state.subjectKey];
}

function getQuiz() {
  if (state.generatedQuiz) return state.generatedQuiz;
  const subject = getSubject();
  return subject?.quizzes.find((quiz) => quiz.id === state.quizId);
}

function getBanglaChapter() {
  return state.chapterId ? BanglaBook.getChapter(state.chapterId) : null;
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
      <span class="header-greeting">তুমি দারুণ করছো! ✦</span>
      <button class="exit-quiz" type="button" data-action="quit-quiz">কুইজ ছেড়ে দাও <span aria-hidden="true">×</span></button>
    `;
    return;
  }

  topActions.innerHTML = `
    <span class="header-greeting">হ্যালো, রিমি! <span aria-hidden="true">🌤️</span></span>
    <button class="top-link" type="button" data-action="home">হোম</button>
    <span class="star-counter" aria-label="তোমার সংগ্রহে ${bnNumber(profile.stars)} তারা"><i aria-hidden="true">★</i><span>${bnNumber(profile.stars)} তারা</span></span>
    <span class="avatar" aria-label="রিমির প্রোফাইল">🧒</span>
  `;
}

function renderHome() {
  const goalDone = Math.min(profile.completed.length, 3);
  const goalWidth = `${(goalDone / 3) * 100}%`;

  return `
    <section class="home-hero" aria-labelledby="home-title">
      <div class="hero-copy">
        <p class="eyebrow">দ্বিতীয় শ্রেণি <span aria-hidden="true">•</span> বাংলাদেশ</p>
        <h1 id="home-title">খেলা খেলায়<br />শিখি <span>প্রতিদিন!</span></h1>
        <p>রঙিন প্রশ্নের সঙ্গে আজকের পড়া ঝালিয়ে নাও। উত্তর দাও, তারা জিতো, আর হাসতে হাসতে শিখো।</p>
        <div class="button-row">
          <button class="primary-button" type="button" data-action="daily-challenge">আজকের চ্যালেঞ্জ <span aria-hidden="true">→</span></button>
          <button class="secondary-button" type="button" data-action="scroll-subjects">বিষয়গুলো দেখো <span aria-hidden="true">↓</span></button>
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

    <section class="daily-strip" aria-label="আজকের ছোট লক্ষ্য">
      <div class="daily-icon" aria-hidden="true">⚡</div>
      <p><strong>আজকের ছোট লক্ষ্য:</strong> একটি কুইজ শেষ করো, নতুন কিছু শেখো!</p>
      <button class="text-button" type="button" data-action="daily-challenge">শুরু করি <span aria-hidden="true">→</span></button>
    </section>

    <section id="subjects" aria-labelledby="subjects-title">
      <div class="section-heading">
        <div>
          <h2 id="subjects-title">তোমার বিষয়গুলো</h2>
        </div>
        <p>যে বিষয়টি পড়তে ইচ্ছে করছে, সেটিতে চাপ দাও। প্রতিটিতে আছে ছোট ছোট মজার কুইজ!</p>
      </div>
      <div class="subject-grid">
        ${Object.values(subjects).map(renderSubjectCard).join("")}
      </div>
    </section>

    <section class="home-bottom-grid" aria-label="তোমার শেখার অগ্রগতি">
      <article class="goal-card">
        <div class="goal-badge" aria-hidden="true">★</div>
        <div>
          <h3>আজকের তারার ঝুলি</h3>
          <p>একটি কুইজ শেষ করলে নতুন তারা পাবে। চলো, আজ ৩টি কুইজ চেষ্টা করি!</p>
          <div class="goal-progress">
            <div class="goal-progress-track" aria-label="আজকের লক্ষ্য: ৩টির মধ্যে ${goalDone}টি কুইজ সম্পন্ন"><span style="width: ${goalWidth}"></span></div>
            <em>${bnNumber(goalDone)}/৩ কুইজ</em>
          </div>
        </div>
      </article>
      <article class="parent-card">
        <h3>শিখি নিজের গতিতে</h3>
        <p>ভুল হলে মন খারাপ নয়—আবার চেষ্টা করলেই শেখা আরও সহজ হয়।</p>
      </article>
    </section>

    <footer class="site-footer">ঝিলমিল কুইজ <span aria-hidden="true">•</span> আনন্দে শেখার ছোট্ট জায়গা</footer>
  `;
}

function renderSubjectCard(subject, index) {
  const itemCount = subject.id === "bangla" ? "বই + ৫৩ পাঠ" : "৩টি কুইজ";
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
            <span class="pill">★ প্রতিটি উত্তরে তারা</span>
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
  const chapterCount = BanglaBook.chapters.length;
  const questionCount = chapterCount * 20;

  return `
    <section class="bangla-book-page ${subject.className}" aria-labelledby="bangla-book-title">
      <button class="back-button" type="button" data-action="home"><span class="back-arrow" aria-hidden="true">←</span>সব বিষয়</button>
      <div class="book-hub-hero">
        <div>
          <p class="subject-kicker">বাংলা <span aria-hidden="true">•</span> বইভিত্তিক অনুশীলন</p>
          <h1 id="bangla-book-title">বাংলা বই নিয়ে খেলি!</h1>
          <p>তোমার বইয়ের পাঠগুলো থেকে প্রশ্ন অনুশীলন করো। প্রতিটি উত্তরের পর সহজ বাংলায় ব্যাখ্যাও দেখবে।</p>
          <div class="subject-meta-row">
            <span class="pill">✦ ${bnNumber(chapterCount)}টি পাঠ</span>
            <span class="pill">◷ প্রতি পাঠে ২০টি প্রশ্ন</span>
            <span class="pill">💡 ব্যাখ্যাসহ</span>
          </div>
        </div>
        <div class="book-hub-art" aria-hidden="true"><span>অ</span><i>✦</i><b>বই</b></div>
      </div>

      <div class="book-choice-heading">
        <div><h2>কীভাবে অনুশীলন করবে?</h2><p>তোমার পছন্দের একটি পথ বেছে নাও।</p></div>
        <span class="quiz-count-note">মোট ${bnNumber(questionCount)}+ প্রশ্ন</span>
      </div>
      <div class="book-choice-grid">
        <button class="book-choice-card full-book-choice" type="button" data-action="start-full-book" aria-label="সম্পূর্ণ বই থেকে ২০টি প্রশ্নের অনুশীলন শুরু করো">
          <span class="choice-topline"><span class="choice-icon" aria-hidden="true">📚</span><span class="choice-label">প্রথম অপশন</span></span>
          <span class="choice-title">সম্পূর্ণ বই</span>
          <span class="choice-description">সব পাঠ থেকে বাছাই করা ২০টি প্রশ্নে নিজের প্রস্তুতি যাচাই করো।</span>
          <span class="choice-footer"><span>২০ প্রশ্নের মিক্সড কুইজ</span><strong>শুরু করি <i aria-hidden="true">→</i></strong></span>
        </button>
        <button class="book-choice-card chapter-book-choice" type="button" data-action="open-chapter-list" aria-label="অধ্যায়ভিত্তিক প্রশ্নের তালিকা দেখো">
          <span class="choice-topline"><span class="choice-icon" aria-hidden="true">🧩</span><span class="choice-label">দ্বিতীয় অপশন</span></span>
          <span class="choice-title">অধ্যায়ভিত্তিক</span>
          <span class="choice-description">পাঠের নাম থেকে একটি বেছে নাও। প্রতিটি পাঠে আছে ২০টি প্রশ্ন ও ব্যাখ্যা।</span>
          <span class="choice-footer"><span>${bnNumber(chapterCount)}টি পাঠ দেখো</span><strong>পাঠ বেছে নাও <i aria-hidden="true">→</i></strong></span>
        </button>
      </div>

      <aside class="book-note"><span aria-hidden="true">🌟</span><p><strong>মনে রাখো:</strong> উত্তর ভুল হলেও চিন্তা নেই। ব্যাখ্যাটি পড়ে আবার চেষ্টা করলেই তুমি আরও ভালো শিখবে।</p></aside>
    </section>
  `;
}

function renderChapterList() {
  const subject = subjects.bangla;
  return `
    <section class="chapter-list-page ${subject.className}" aria-labelledby="chapter-list-title">
      <button class="back-button" type="button" data-action="bangla-options"><span class="back-arrow" aria-hidden="true">←</span>বাংলা বই</button>
      <div class="chapter-list-hero">
        <div>
          <p class="subject-kicker">বাংলা বই <span aria-hidden="true">•</span> অধ্যায়ভিত্তিক অনুশীলন</p>
          <h1 id="chapter-list-title">পাঠ বেছে নাও</h1>
          <p>প্রতিটি পাঠে আছে ২০টি সহজ প্রশ্ন, সঠিক উত্তর এবং বুঝতে সুবিধার জন্য ছোট্ট ব্যাখ্যা।</p>
        </div>
        <div class="chapter-stat-stack" aria-label="অধ্যায়ভিত্তিক কুইজের তথ্য">
          <span><b>${bnNumber(BanglaBook.chapters.length)}</b>টি পাঠ</span>
          <span><b>২০</b> প্রশ্ন করে</span>
          <span><b>💡</b> ব্যাখ্যাসহ</span>
        </div>
      </div>

      <div class="chapter-groups">
        ${BanglaBook.groups.map((group) => {
          const groupChapters = BanglaBook.chapters.filter((chapter) => chapter.lesson >= group.from && chapter.lesson <= group.to);
          return `
            <section class="chapter-group" aria-labelledby="group-${group.from}">
              <div class="chapter-group-heading">
                <span class="group-icon" aria-hidden="true">${group.icon}</span>
                <div><h2 id="group-${group.from}">${group.title}</h2><p>${group.description} <span aria-hidden="true">•</span> ${bnNumber(groupChapters.length)}টি পাঠ</p></div>
              </div>
              <div class="chapter-card-grid">${groupChapters.map(renderChapterCard).join("")}</div>
            </section>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderChapterCard(chapter) {
  const completed = profile.completed.includes(`bangla:${chapter.id}`);
  return `
    <button class="chapter-card" type="button" data-action="open-chapter" data-chapter="${chapter.id}" aria-label="পাঠ ${bnNumber(chapter.lesson)}, ${chapter.title} - ২০টি প্রশ্ন দেখো">
      <span class="chapter-card-icon" aria-hidden="true">${chapter.icon}</span>
      <span class="chapter-card-copy"><span class="chapter-number">পাঠ ${bnNumber(chapter.lesson)}</span><strong>${chapter.title}</strong><small>২০টি প্রশ্ন <span aria-hidden="true">•</span> ব্যাখ্যাসহ ${completed ? "• ✓ শেষ" : ""}</small></span>
      <span class="chapter-arrow" aria-hidden="true">→</span>
    </button>
  `;
}

function renderChapterDetail() {
  const subject = subjects.bangla;
  const chapter = getBanglaChapter();
  const completed = profile.completed.includes(`bangla:${chapter.id}`);
  return `
    <section class="chapter-detail-page ${subject.className}" aria-labelledby="chapter-detail-title">
      <button class="back-button" type="button" data-action="open-chapter-list"><span class="back-arrow" aria-hidden="true">←</span>সব পাঠ</button>
      <div class="chapter-detail-hero">
        <div class="chapter-detail-icon" aria-hidden="true">${chapter.icon}</div>
        <div>
          <p class="subject-kicker">পাঠ ${bnNumber(chapter.lesson)} <span aria-hidden="true">•</span> বাংলা বই</p>
          <h1 id="chapter-detail-title">${chapter.title}</h1>
          <p>এই পাঠের জন্য তৈরি ২০টি প্রশ্নে অনুশীলন করো। প্রতিটি প্রশ্নের উত্তর দেওয়ার সঙ্গে সঙ্গে বাংলায় ব্যাখ্যা দেখাবে।</p>
          <div class="subject-meta-row"><span class="pill">◷ ২০টি প্রশ্ন</span><span class="pill">💡 উত্তর ও ব্যাখ্যা</span><span class="pill">★ ১ উত্তর = ১ তারা</span></div>
        </div>
      </div>

      <div class="chapter-start-grid">
        <article class="chapter-ready-card">
          <span class="ready-sparkle" aria-hidden="true">✦</span>
          <p class="chapter-card-kicker">তোমার অনুশীলন</p>
          <h2>পাঠটি কি শুরু করবে?</h2>
          <p>ধীরে ধীরে প্রশ্ন পড়ো। ভুল হলে ব্যাখ্যাটি দেখে আবার শিখে নাও।</p>
          <button class="primary-button" type="button" data-action="start-chapter-quiz" data-chapter="${chapter.id}">${completed ? "আবার অনুশীলন করি" : "২০টি প্রশ্ন শুরু করি"} <span aria-hidden="true">→</span></button>
        </article>
        <article class="chapter-learn-card">
          <h2>এই পাঠে অনুশীলন হবে</h2>
          <ul>
            <li><span aria-hidden="true">✓</span> পাঠের মূল বিষয় ও গুরুত্বপূর্ণ শব্দ বোঝা</li>
            <li><span aria-hidden="true">✓</span> বর্ণ, শব্দ ও বাক্যের ব্যবহার শেখা</li>
            <li><span aria-hidden="true">✓</span> প্রতিটি সঠিক উত্তরের কারণ জানা</li>
          </ul>
          <div class="explanation-chip"><span aria-hidden="true">💡</span> ব্যাখ্যা পড়লে উত্তরটি মনে রাখা সহজ হয়।</div>
        </article>
      </div>
    </section>
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

function renderQuiz() {
  const subject = getSubject();
  const quiz = getQuiz();
  const question = quiz.questions[state.questionIndex];
  const answered = isAnswered();
  const selected = state.answers[state.questionIndex];
  const progress = ((state.questionIndex + 1) / quiz.questions.length) * 100;
  const labels = ["ক", "খ", "গ", "ঘ"];

  return `
    <section class="quiz-view ${subject.className}" aria-labelledby="question-title">
      <nav class="quiz-nav" aria-label="কুইজ নেভিগেশন">
        <div class="quiz-nav-title">
          ${iconMarkup(subject, "mini-subject-icon")}
          <span>${quiz.title}</span>
        </div>
        <button class="quit-button" type="button" data-action="return-subject">কুইজ তালিকা <span aria-hidden="true">×</span></button>
      </nav>

      <div class="quiz-progress-label">
        <span>প্রশ্ন <strong>${bnNumber(state.questionIndex + 1)}/${bnNumber(quiz.questions.length)}</strong></span>
        <span>${bnNumber(Math.round(progress))}% শেষ</span>
      </div>
      <div class="quiz-progress-track" aria-label="কুইজের অগ্রগতি ${Math.round(progress)} শতাংশ"><span style="width: ${progress}%"></span></div>

      <article class="question-card ${subject.className}">
        <div class="question-card-head">
          <span class="question-symbol ${subject.iconClass}" aria-hidden="true">${question.visual || subject.icon}</span>
          <div><p class="quiz-kicker">ভালো করে ভেবে উত্তর দাও</p><span class="pill pill-light">১টি সঠিক উত্তর</span></div>
        </div>
        <h1 id="question-title">${question.prompt}</h1>
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
        ${answered ? renderFeedback(question, selected, state.questionIndex === quiz.questions.length - 1) : ""}
      </article>
      <p class="quiz-helper">ভুল উত্তরও শেখার একটি সুন্দর সুযোগ। তুমি চেষ্টা করছো—এটাই সবচেয়ে গুরুত্বপূর্ণ!</p>
    </section>
  `;
}

function renderFeedback(question, selected, isLast) {
  const correct = selected === question.answer;
  const title = correct ? "দারুণ! একদম ঠিক উত্তর।" : "চেষ্টা সুন্দর হয়েছে!";
  const answerNote = correct
    ? "তোমার ঝুলিতে একটি তারা যোগ হলো।"
    : `সঠিক উত্তর: ${question.options[question.answer]}`;
  const explanation = question.explanation || "উত্তরটি আবার একবার দেখে মনে রাখো।";
  return `
    <div class="feedback-row has-explanation" style="--feedback-bg: ${correct ? "#ecf9ed" : "#fff4e8"}; --feedback-title: ${correct ? "#397151" : "#a06a37"}">
      <div class="feedback-message">
        <span class="feedback-emoji" aria-hidden="true">${correct ? "🎉" : "🌟"}</span>
        <span><b>${title}</b><small>${answerNote}</small><small class="answer-explanation"><strong>ব্যাখ্যা:</strong> ${explanation}</small></span>
      </div>
      <button class="next-button" type="button" data-action="next-question">${isLast ? "ফলাফল দেখো" : "পরের প্রশ্ন"} <span aria-hidden="true">→</span></button>
    </div>
  `;
}

function renderComplete() {
  const subject = getSubject();
  const quiz = getQuiz();
  const score = quizScore();
  const allCorrect = score === quiz.questions.length;
  const title = allCorrect ? "অসাধারণ!" : score >= 2 ? "দারুণ চেষ্টা!" : "তুমি পারবে!";
  const description = allCorrect
    ? "সবগুলো উত্তরই ঠিক হয়েছে। তুমি সত্যিই এই কুইজের তারকা!"
    : "তুমি কুইজটি শেষ করেছো—এটাই খুব ভালো কথা। আবার খেললে আরও বেশি তারা পাবে!";

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
          <div class="score-stat"><strong>★ ${bnNumber(state.awardedStars)}</strong><span>নতুন তারা</span></div>
        </div>
        <div class="complete-actions">
          <button class="return-button" type="button" data-action="replay">আবার খেলি <span aria-hidden="true">↻</span></button>
          <button class="secondary-button" type="button" data-action="return-subject">আরও কুইজ দেখো <span aria-hidden="true">→</span></button>
        </div>
      </article>
    </section>
  `;
}

function render() {
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
  } else if (state.screen === "chapter-list") {
    app.innerHTML = renderChapterList();
    document.title = "বাংলা বইয়ের পাঠসমূহ | ঝিলমিল কুইজ";
  } else if (state.screen === "chapter-detail") {
    app.innerHTML = renderChapterDetail();
    document.title = `${getBanglaChapter().title} | ঝিলমিল কুইজ`;
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
  state.chapterId = null;
  state.quizOrigin = "standard";
  state.generatedQuiz = null;
  state.answers = [];
  render();
  moveToTop();
}

function openSubject(subjectKey) {
  if (subjectKey === "bangla") {
    openBanglaOptions();
    return;
  }
  state.screen = "subject";
  state.subjectKey = subjectKey;
  state.quizId = null;
  state.chapterId = null;
  state.quizOrigin = "standard";
  state.generatedQuiz = null;
  state.answers = [];
  render();
  moveToTop();
}

function openBanglaOptions() {
  state.screen = "bangla-options";
  state.subjectKey = "bangla";
  state.quizId = null;
  state.chapterId = null;
  state.quizOrigin = "bangla-options";
  state.generatedQuiz = null;
  state.answers = [];
  render();
  moveToTop();
}

function openChapterList() {
  state.screen = "chapter-list";
  state.subjectKey = "bangla";
  state.quizId = null;
  state.chapterId = null;
  state.quizOrigin = "chapter";
  state.generatedQuiz = null;
  state.answers = [];
  render();
  moveToTop();
}

function openChapter(chapterId) {
  state.screen = "chapter-detail";
  state.subjectKey = "bangla";
  state.chapterId = chapterId;
  state.quizId = null;
  state.quizOrigin = "chapter";
  state.generatedQuiz = null;
  state.answers = [];
  render();
  moveToTop();
}

function startQuiz(subjectKey, quizId) {
  state.screen = "quiz";
  state.subjectKey = subjectKey;
  state.quizId = quizId;
  state.chapterId = null;
  state.quizOrigin = "standard";
  state.generatedQuiz = null;
  state.questionIndex = 0;
  state.answers = [];
  state.awardedStars = 0;
  render();
  moveToTop();
}

function startChapterQuiz(chapterId) {
  const quiz = BanglaBook.makeChapterQuiz(chapterId);
  if (!quiz) return;
  state.screen = "quiz";
  state.subjectKey = "bangla";
  state.quizId = quiz.id;
  state.chapterId = chapterId;
  state.quizOrigin = "chapter";
  state.generatedQuiz = quiz;
  state.questionIndex = 0;
  state.answers = [];
  state.awardedStars = 0;
  render();
  moveToTop();
}

function startFullBookQuiz() {
  const quiz = BanglaBook.makeFullBookQuiz();
  state.screen = "quiz";
  state.subjectKey = "bangla";
  state.quizId = quiz.id;
  state.chapterId = null;
  state.quizOrigin = "full-book";
  state.generatedQuiz = quiz;
  state.questionIndex = 0;
  state.answers = [];
  state.awardedStars = 0;
  render();
  moveToTop();
}

function returnFromQuiz() {
  if (state.quizOrigin === "chapter") {
    openChapterList();
  } else if (state.quizOrigin === "full-book") {
    openBanglaOptions();
  } else {
    openSubject(state.subjectKey);
  }
}

function moveToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function finishQuiz() {
  const quiz = getQuiz();
  const score = quizScore();
  const completedKey = `${state.subjectKey}:${state.quizId}`;
  state.awardedStars = score;
  profile.stars += score;
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

  if (action === "daily-challenge") startQuiz("gk", "bangladesh");

  if (action === "start-quiz") startQuiz(actionTarget.dataset.subject, actionTarget.dataset.quiz);

  if (action === "bangla-options") openBanglaOptions();

  if (action === "open-chapter-list") openChapterList();

  if (action === "open-chapter") openChapter(actionTarget.dataset.chapter);

  if (action === "start-chapter-quiz") startChapterQuiz(actionTarget.dataset.chapter);

  if (action === "start-full-book") startFullBookQuiz();

  if (action === "return-subject" || action === "quit-quiz") returnFromQuiz();

  if (action === "answer" && state.screen === "quiz" && !isAnswered()) {
    state.answers[state.questionIndex] = Number(actionTarget.dataset.answer);
    render();
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
    if (state.quizOrigin === "chapter") startChapterQuiz(state.chapterId);
    else if (state.quizOrigin === "full-book") startFullBookQuiz();
    else startQuiz(state.subjectKey, state.quizId);
  }
}

document.addEventListener("click", (event) => {
  const actionTarget = event.target.closest("[data-action]");
  if (actionTarget) handleAction(actionTarget);
});

document.addEventListener("keydown", (event) => {
  if (state.screen !== "quiz" || isAnswered() || event.altKey || event.ctrlKey || event.metaKey) return;
  const answerIndex = Number(event.key) - 1;
  if (answerIndex >= 0 && answerIndex <= 3) {
    event.preventDefault();
    state.answers[state.questionIndex] = answerIndex;
    render();
  }
});

render();

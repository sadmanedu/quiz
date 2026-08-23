/* Essential practice based on NCTB English for Today, Class Two. */
window.EnglishBook = (() => {
  const bn = (value) => new Intl.NumberFormat("bn-BD").format(value);

  function hash(text) {
    let value = 0;
    for (let index = 0; index < text.length; index += 1) value = (value * 31 + text.charCodeAt(index)) | 0;
    return Math.abs(value);
  }

  function question(prompt, correct, wrongOptions, explanation, visual = "A") {
    const options = [...new Set(wrongOptions.filter((option) => option !== correct))].slice(0, 3);
    const fillers = ["I don't know", "Another answer", "None of these"];
    fillers.forEach((item) => {
      if (options.length < 3 && item !== correct && !options.includes(item)) options.push(item);
    });
    const answer = hash(prompt) % 4;
    options.splice(answer, 0, correct);
    return { prompt, options, answer, explanation, visual };
  }

  const q = question;

  const topics = [
    {
      id: "greetings",
      title: "Greetings & Introductions",
      description: "Greetings, names, ages and farewells",
      icon: "👋",
      questions: [
        q("When do we say ‘Good morning’?", "In the morning", ["At night", "At lunch", "In the rain"], "সকালে কাউকে অভিবাদন জানাতে বলি ‘Good morning’।", "☀"),
        q("What do we say when we meet someone?", "Hello", ["Goodbye", "Thank you", "Sorry"], "কারও সঙ্গে দেখা হলে ‘Hello’ বলা যায়।", "👋"),
        q("Which question asks for a person's name?", "What's your name?", ["How are you?", "Where do you live?", "How old are you?"], "‘What's your name?’ প্রশ্নটি কারও নাম জানতে করা হয়।", "?"),
        q("What is a good answer to ‘What's your name?’", "My name is Rima.", ["I am fine.", "I live in Dhaka.", "Goodbye."], "নিজের নাম বলতে বলি, ‘My name is ...’।", "R"),
        q("Which question asks about a place to live?", "Where do you live?", ["What do you like?", "How are you?", "What is this?"], "‘Where do you live?’ প্রশ্নটি কারও থাকার জায়গা জানতে করা হয়।", "🏠"),
        q("What is a good answer to ‘Where do you live?’", "I live in Ukilpara.", ["I am eight.", "My name is Ashim.", "Good morning."], "কোথায় থাকি বলতে বলি, ‘I live in ...’।", "🏠"),
        q("Which question asks about someone’s well-being?", "How are you?", ["What's your name?", "Where do you live?", "What day is today?"], "‘How are you?’ দিয়ে কেমন আছো জানতে চাওয়া হয়।", "☺"),
        q("What is a good answer to ‘How are you?’", "I am fine.", ["My name is Rafi.", "I am seven.", "Goodbye."], "‘How are you?’-এর উত্তরে বলা যায় ‘I am fine।’", "☺"),
        q("Which question asks about age?", "How old are you?", ["How are you?", "Where do you live?", "What colour is it?"], "‘How old are you?’ প্রশ্নটি বয়স জানতে করা হয়।", "🎂"),
        q("If someone says ‘I am eight’, what are they talking about?", "Age", ["Name", "Colour", "Food"], "‘I am eight’ দিয়ে বয়স বোঝানো হয়েছে।", "8"),
        q("What do we say when we leave someone?", "Goodbye", ["Hello", "Good morning", "Thank you"], "বিদায় নেওয়ার সময় ‘Goodbye’ বলা হয়।", "👋"),
        q("Which is a farewell phrase?", "See you again.", ["What is your name?", "I am fine.", "Please sit down."], "‘See you again’ আবার দেখা হবে বোঝায়।", "→"),
        q("What does ‘Bye’ mean?", "Goodbye", ["Thank you", "Please help", "Good morning"], "‘Bye’ হলো সংক্ষিপ্তভাবে ‘Goodbye’।", "👋"),
        q("What can you say after ‘Thank you’?", "You are welcome.", ["Good night.", "Sit down.", "I am eight."], "কেউ ‘Thank you’ বললে উত্তরে ‘You are welcome’ বলা যায়।", "♥"),
        q("Which reply matches ‘Good morning’?", "Good morning.", ["Goodbye.", "I am eight.", "Please open."], "‘Good morning’-এর উত্তরে ‘Good morning’ বলা হয়।", "☀"),
        q("If you have a class now, what may you say?", "I have to go now.", ["I am a kite.", "The sun is blue.", "I eat a book."], "ক্লাসে যেতে হলে বলা যায়, ‘I have to go now।’", "🏫"),
        q("Which phrase shows care at goodbye?", "Take care.", ["Open your book.", "Count to five.", "I like mangoes."], "বিদায়ের সময় ‘Take care’ বলে যত্ন নিতে বলা হয়।", "♥"),
        q("Which is the polite way to ask a name?", "What's your name, please?", ["Name now!", "You name?", "Say name!"], "‘Please’ ব্যবহার করলে প্রশ্নটি ভদ্র শোনায়।", "?"),
        q("Which dialogue is correct?", "A: Hello! B: Hello!", ["A: Goodbye! B: Good morning!", "A: Thank you! B: Sit down!", "A: How are you? B: A pencil."], "দেখা হলে ‘Hello’ বলার উত্তরে ‘Hello’ বলা যায়।", "💬"),
        q("What does ‘See you soon’ mean?", "We will meet again soon.", ["We are eating now.", "We are sleeping now.", "We are counting now."], "‘See you soon’ মানে শিগগির আবার দেখা হবে।", "→")
      ]
    },
    {
      id: "alphabet-numbers",
      title: "Alphabet, Words & Numbers",
      description: "Letters, useful words, counting and Little Seed",
      icon: "A B",
      questions: [
        q("Which letter comes after A?", "B", ["C", "D", "Z"], "English alphabet-এ A-এর পরে B আসে।", "A"),
        q("Which letter comes after D?", "E", ["F", "C", "A"], "English alphabet-এ D-এর পরে E আসে।", "D"),
        q("Which one is a vowel?", "A", ["B", "C", "D"], "A একটি vowel বা স্বরধ্বনির বর্ণ।", "A"),
        q("Which one is a vowel?", "E", ["F", "G", "H"], "E একটি vowel বা স্বরধ্বনির বর্ণ।", "E"),
        q("What is an ant?", "An insect", ["A bird", "A fruit", "A vehicle"], "An ant একটি ছোট insect।", "🐜"),
        q("What can float on water?", "A boat", ["A ladder", "A pen", "A star"], "A boat পানির ওপর ভাসতে পারে।", "⛵"),
        q("What is a crow?", "A bird", ["A vegetable", "A number", "A shape"], "A crow একটি bird।", "🐦"),
        q("What is a deer?", "An animal", ["A colour", "A fruit", "A classroom object"], "A deer একটি animal।", "🦌"),
        q("Which body part helps us hear?", "Ear", ["Nose", "Hand", "Foot"], "কান বা ear দিয়ে আমরা শুনি।", "👂"),
        q("What is garlic?", "A vegetable", ["A bird", "A number", "A toy"], "Garlic একটি vegetable।", "🧄"),
        q("What do bees make?", "Honey", ["Jute", "Ladder", "Quilt"], "Bees honey তৈরি করে।", "🍯"),
        q("What is jute?", "A crop", ["A bird", "A shape", "A number"], "Jute বাংলাদেশের একটি গুরুত্বপূর্ণ crop।", "🌿"),
        q("What number word matches 5?", "Five", ["Four", "Six", "Eight"], "5-এর English number word হলো five।", "5"),
        q("What number word matches 10?", "Ten", ["Nine", "Eleven", "Twelve"], "10-এর English number word হলো ten।", "10"),
        q("What number comes after 14?", "15", ["13", "16", "17"], "14-এর পরে 15 আসে।", "15"),
        q("What number comes after 20?", "21", ["19", "22", "30"], "20-এর পরে 21 আসে।", "21"),
        q("What number word matches 30?", "Thirty", ["Twenty", "Thirteen", "Three"], "30-এর English number word হলো thirty।", "30"),
        q("What does a seed need to grow?", "Sun and rain", ["A pencil and book", "A kite and ball", "A chair and desk"], "Little Seed rhyme-এ সূর্য আর বৃষ্টির সাহায্যে গাছ বড় হয়।", "🌱"),
        q("What grows from a little seed?", "A flower", ["A robot", "A telescope", "A road sign"], "Little Seed rhyme-এ বীজ থেকে ফুল জন্মায়।", "🌼"),
        q("Which one is a fruit?", "Orange", ["Nest", "Ladder", "Quilt"], "Orange একটি fruit।", "🍊")
      ]
    },
    {
      id: "commands-requests",
      title: "Commands, Instructions & Requests",
      description: "Useful classroom English",
      icon: "🗣",
      questions: [
        q("Which command asks a learner to stand?", "Stand up.", ["Sit down.", "Close the door.", "Read a book."], "‘Stand up’ মানে দাঁড়াও।", "↑"),
        q("Which command asks a learner to sit?", "Sit down.", ["Stand up.", "Come here.", "Open the window."], "‘Sit down’ মানে বসো।", "↓"),
        q("Which command asks you to open a book?", "Open your book.", ["Close your book.", "Wash your hands.", "Count the birds."], "‘Open your book’ মানে বই খোলো।", "📖"),
        q("Which command asks you to shut a door?", "Close the door.", ["Open the door.", "Draw a flower.", "Eat a mango."], "‘Close the door’ মানে দরজা বন্ধ করো।", "🚪"),
        q("What should you do when a teacher says ‘Listen’?", "Pay attention with your ears.", ["Run outside.", "Close your eyes.", "Throw a ball."], "‘Listen’ মানে মন দিয়ে শোনা।", "👂"),
        q("What should you do when a teacher says ‘Look at the board’?", "Look at the board.", ["Look under the desk.", "Look at the floor only.", "Close the book."], "নির্দেশটি যেমন বলা হয়েছে, তেমনই কাজ করতে হয়।", "👀"),
        q("Which word makes a request polite?", "Please", ["Never", "No", "Stop"], "Request করার সময় ‘please’ ব্যবহার করলে কথা ভদ্র হয়।", "♥"),
        q("Which is a polite request for a pencil?", "Please give me a pencil.", ["Pencil now!", "You give pencil!", "I am a pencil."], "ভদ্রভাবে কিছু চাইতে ‘Please’ ব্যবহার করা যায়।", "✏"),
        q("Which sentence asks permission to enter?", "May I come in?", ["I come in.", "Come in me.", "You are in."], "কক্ষে ঢোকার আগে ‘May I come in?’ বলে অনুমতি চাওয়া হয়।", "🚪"),
        q("Which sentence asks for help politely?", "Please help me.", ["Help me now!", "You help!", "I help book."], "সাহায্য চাইতে ‘Please help me’ বলা ভদ্র।", "🤝"),
        q("What should you do after ‘Write your name’?", "Write your name.", ["Draw a sun.", "Close the door.", "Count to ten."], "‘Write your name’ নির্দেশে নিজের নাম লিখতে হয়।", "✎"),
        q("What should you do after ‘Read aloud’?", "Read in a clear voice.", ["Whisper only.", "Stop reading.", "Hide the book."], "‘Read aloud’ মানে পরিষ্কার জোরে পড়া।", "🔊"),
        q("Which instruction is about cleaning?", "Keep your classroom clean.", ["Fly a kite.", "Eat a book.", "Paint the road."], "পরিষ্কার শ্রেণিকক্ষ রাখা ভালো অভ্যাস।", "✨"),
        q("Which request asks to borrow an eraser?", "May I use your eraser?", ["I erase you.", "Your eraser is blue.", "Erase the door."], "কারও জিনিস ব্যবহার করতে আগে অনুমতি চাওয়া উচিত।", "✏"),
        q("Which command is safe in class?", "Walk slowly.", ["Run on desks.", "Push friends.", "Throw books."], "শ্রেণিকক্ষে ধীরে ও নিরাপদে চলা উচিত।", "🚶"),
        q("What does ‘Come here’ mean?", "Move closer to the speaker.", ["Go far away.", "Sit under a desk.", "Close a window."], "‘Come here’ মানে বক্তার কাছে আসো।", "→"),
        q("What does ‘Go there’ mean?", "Move to that place.", ["Stay here forever.", "Open a book.", "Draw a cat."], "‘Go there’ মানে ওই জায়গায় যাও।", "→"),
        q("Which sentence is an instruction?", "Draw a circle.", ["I like circles.", "The circle is red.", "What is a circle?"], "‘Draw a circle’ একটি instruction।", "○"),
        q("Which sentence is a request?", "Please pass the book.", ["The book is red.", "I have a book.", "Books are useful."], "‘Please pass the book’ ভদ্রভাবে একটি অনুরোধ।", "📘"),
        q("Why do we follow classroom instructions?", "To learn safely and well.", ["To make noise.", "To lose books.", "To stop learning."], "নির্দেশ মানলে নিরাপদে ও সুন্দরভাবে শেখা যায়।", "★")
      ]
    },
    {
      id: "questions-habits",
      title: "Questions, Likes & Habits",
      description: "Asking, answering and everyday habits",
      icon: "💬",
      questions: [
        q("Which question asks about a favourite thing?", "What do you like?", ["Where do you live?", "How old are you?", "What day is today?"], "‘What do you like?’ দিয়ে পছন্দের জিনিস জানতে চাওয়া হয়।", "?"),
        q("What is a good answer to ‘What do you like?’", "I like mangoes.", ["I am seven.", "Goodbye.", "Sit down."], "নিজের পছন্দ বলতে ‘I like ...’ ব্যবহার করা যায়।", "🥭"),
        q("Which is a healthy habit?", "Brush your teeth.", ["Throw rubbish on the road.", "Never wash hands.", "Sleep in class."], "দাঁত ব্রাশ করা ভালো অভ্যাস।", "🪥"),
        q("Which is a good habit before eating?", "Wash your hands.", ["Throw your plate.", "Run on the road.", "Forget to eat."], "খাওয়ার আগে হাত ধোয়া ভালো অভ্যাস।", "✋"),
        q("Which is a bad habit?", "Littering", ["Using a bin", "Saying please", "Helping a friend"], "যত্রতত্র ময়লা ফেলা বা littering খারাপ অভ্যাস।", "🗑"),
        q("Which question asks about a home?", "Where do you live?", ["What do you like?", "How are you?", "What colour is it?"], "‘Where do you live?’ দিয়ে থাকার জায়গা জানতে চাওয়া হয়।", "🏠"),
        q("What is a good answer to ‘Where do you live?’", "I live in Dhaka.", ["I like red.", "I am fine.", "Good night."], "কোথায় থাকি বলতে ‘I live in ...’ ব্যবহার করা হয়।", "🏠"),
        q("Which habit keeps the body clean?", "Taking a bath", ["Throwing food", "Breaking toys", "Shouting at friends"], "নিয়মিত গোসল করলে শরীর পরিষ্কার থাকে।", "🫧"),
        q("What should you say when you need something?", "Please", ["Never", "No", "Stop"], "কিছু চাইলে ‘please’ বললে কথা ভদ্র হয়।", "♥"),
        q("Which is a polite answer to an apology?", "That's okay.", ["Go away.", "Never speak.", "Close the sun."], "কেউ sorry বললে ‘That's okay’ বলা যায়।", "☺"),
        q("Which is safe at home?", "Keep toys in their place.", ["Play with fire.", "Touch electric wires.", "Run with scissors."], "খেলনা গুছিয়ে রাখা নিরাপদ ও ভালো অভ্যাস।", "🧸"),
        q("Which is kind behaviour?", "Sharing with a friend", ["Pushing a friend", "Taking without asking", "Making fun of others"], "বন্ধুর সঙ্গে ভাগাভাগি করা ভালো আচরণ।", "🤝"),
        q("Which phrase asks a question politely?", "Can you help me, please?", ["Help me now!", "You help!", "I help you pencil."], "প্রশ্ন বা অনুরোধে ‘please’ ব্যবহার করলে তা ভদ্র হয়।", "?"),
        q("What can you say when you like a colour?", "I like blue.", ["Blue is a chair.", "I blue like.", "Like I blue no."], "পছন্দের রং বলতে ‘I like ...’ ব্যবহার করা যায়।", "🔵"),
        q("Which habit is good for health?", "Eating vegetables", ["Eating only sweets", "Never sleeping", "Not drinking water"], "সবজি খেলে শরীর পুষ্টি পায়।", "🥕"),
        q("Which is a bad road habit?", "Crossing without looking", ["Using a zebra crossing", "Looking both ways", "Walking with an adult"], "রাস্তা পার হওয়ার আগে ডানে-বামে দেখা দরকার।", "🚸"),
        q("What does ‘I like books’ mean?", "Books are my favourite.", ["I am a book.", "Books are food.", "I live in books."], "‘I like books’ মানে বই আমার পছন্দ।", "📚"),
        q("What does ‘I live near the school’ tell us?", "A living place", ["A favourite food", "An age", "A colour"], "বাক্যটি কোথায় থাকে সে তথ্য দেয়।", "🏫"),
        q("Which question can ask about a habit?", "Do you wash your hands?", ["What is your pencil?", "Where is the sun?", "How many colours?"], "ভালো অভ্যাস সম্পর্কে প্রশ্ন করতে ‘Do you ...?’ ব্যবহার করা যায়।", "✋"),
        q("Why are good habits important?", "They keep us healthy and safe.", ["They make us late.", "They lose our books.", "They stop learning."], "ভালো অভ্যাস আমাদের সুস্থ ও নিরাপদ রাখে।", "★")
      ]
    },
    {
      id: "days-plants",
      title: "Days, Plants & Rhymes",
      description: "Days of the week and how plants grow",
      icon: "🌱",
      questions: [
        q("How many days are there in a week?", "Seven", ["Five", "Six", "Ten"], "এক সপ্তাহে seven বা সাত দিন থাকে।", "7"),
        q("What day comes after Sunday?", "Monday", ["Friday", "Saturday", "Tuesday"], "Sunday-এর পরে Monday আসে।", "📅"),
        q("What day comes after Monday?", "Tuesday", ["Sunday", "Wednesday", "Saturday"], "Monday-এর পরে Tuesday আসে।", "📅"),
        q("What day comes after Thursday?", "Friday", ["Wednesday", "Saturday", "Monday"], "Thursday-এর পরে Friday আসে।", "📅"),
        q("What day comes after Saturday?", "Sunday", ["Monday", "Friday", "Wednesday"], "Saturday-এর পরে Sunday আসে।", "📅"),
        q("Which question asks about today?", "What day is today?", ["What is your name?", "How old are you?", "What do you like?"], "আজ কী বার জানতে ‘What day is today?’ বলা হয়।", "?"),
        q("What is a seed?", "The beginning of a plant", ["A type of bird", "A road sign", "A colour"], "বীজ থেকে নতুন গাছ জন্মায়।", "🌱"),
        q("What does a plant need to grow?", "Sunlight and water", ["A pencil and ruler", "A kite and ball", "A chair and desk"], "গাছ বড় হতে সূর্যের আলো ও পানি দরকার।", "☀"),
        q("What comes from a seed in the rhyme ‘Little Seed’?", "A flower", ["A robot", "A bus", "A road sign"], "Little Seed rhyme-এ বীজ থেকে ফুল জন্মায়।", "🌼"),
        q("What falls from the sky to help a plant?", "Rain drops", ["Books", "Shoes", "Kites"], "বৃষ্টির ফোঁটা গাছের বেড়ে উঠতে সাহায্য করে।", "🌧"),
        q("What should we do after planting a seed?", "Take care of it", ["Throw it away", "Hide it", "Step on it"], "বীজ লাগানোর পরে পানি ও যত্ন দেওয়া দরকার।", "💧"),
        q("Which is a part of a plant?", "Leaf", ["Wheel", "Window", "Pencil"], "পাতা বা leaf গাছের একটি অংশ।", "🍃"),
        q("Which is a bird?", "Sparrow", ["Tiger", "Mango", "Ladder"], "Sparrow একটি ছোট bird।", "🐦"),
        q("What can birds do?", "Fly with wings", ["Swim with wheels", "Write with pens", "Read books"], "পাখি ডানা ব্যবহার করে উড়ে।", "🕊"),
        q("What do birds build for their eggs?", "A nest", ["A boat", "A road", "A chair"], "পাখি ডিম রাখার জন্য nest বা বাসা বানায়।", "🪺"),
        q("Which word means a young plant?", "Seedling", ["Rainbow", "Telescope", "Robot"], "বীজ থেকে বের হওয়া ছোট গাছকে seedling বলা হয়।", "🌱"),
        q("Why should we not pluck every flower?", "Flowers help plants make seeds.", ["Flowers are books.", "Flowers make roads.", "Flowers are toys."], "ফুল থেকে বীজ হতে পারে, তাই অকারণে সব ফুল তোলা ঠিক নয়।", "🌼"),
        q("Which day is in the weekend list?", "Saturday", ["Mango", "Blue", "Circle"], "Saturday সপ্তাহের একটি দিনের নাম।", "📅"),
        q("What does ‘grow, grow, grow’ mean in the rhyme?", "The plant is becoming bigger.", ["The plant is sleeping.", "The plant is flying.", "The plant is reading."], "Rhyme-এ গাছটি ধীরে ধীরে বড় হচ্ছে।", "🌱"),
        q("Why are plants important?", "They give us oxygen and food.", ["They stop rain.", "They make homework.", "They close doors."], "গাছ অক্সিজেন, ফল ও ছায়া দেয়।", "🌳")
      ]
    },
    {
      id: "sounds-rhymes",
      title: "Sounds & Rhymes",
      description: "Listen to sounds and match rhyming words",
      icon: "🔊",
      questions: [
        q("Which two words rhyme?", "cat and hat", ["cat and dog", "sun and pen", "book and tree"], "cat ও hat-এর শেষের sound মিলে যায়।", "🐱"),
        q("Which two words rhyme?", "sun and run", ["sun and moon", "run and book", "pen and tree"], "sun ও run-এর শেষের sound মিলে যায়।", "☀"),
        q("Which two words rhyme?", "hen and pen", ["hen and fish", "pen and moon", "dog and logbook"], "hen ও pen-এর শেষের sound মিলে যায়।", "🐔"),
        q("Which word rhymes with ‘kite’?", "night", ["cat", "pen", "frog"], "kite ও night-এর শেষের sound একই রকম।", "🪁"),
        q("Which word rhymes with ‘star’?", "car", ["sun", "book", "tree"], "star ও car-এর শেষের sound মিলে যায়।", "⭐"),
        q("Which word rhymes with ‘frog’?", "log", ["bird", "pen", "moon"], "frog ও log-এর শেষের sound মিলে যায়।", "🐸"),
        q("Which pair does NOT rhyme?", "cat and sun", ["cat and hat", "pen and hen", "boat and goat"], "cat ও sun-এর শেষের sound আলাদা।", "?"),
        q("What do we use to hear sounds?", "Ears", ["Eyes", "Hands", "Feet"], "কান বা ears দিয়ে আমরা sound শুনি।", "👂"),
        q("What sound does a cat make?", "Meow", ["Moo", "Quack", "Roar"], "Cat ‘meow’ sound করে।", "🐱"),
        q("What sound does a cow make?", "Moo", ["Meow", "Tweet", "Quack"], "Cow ‘moo’ sound করে।", "🐄"),
        q("What sound does a duck make?", "Quack", ["Moo", "Meow", "Roar"], "Duck ‘quack’ sound করে।", "🦆"),
        q("What sound does a bird often make?", "Tweet", ["Moo", "Bark", "Roar"], "অনেক ছোট পাখি ‘tweet’ sound করে।", "🐦"),
        q("Which word has the same end sound as ‘boat’?", "goat", ["bird", "pen", "sun"], "boat ও goat-এর শেষের sound মিলে যায়।", "⛵"),
        q("Which word has the same end sound as ‘tree’?", "bee", ["cat", "dog", "sun"], "tree ও bee-এর শেষের sound মিলে যায়।", "🌳"),
        q("Why do we say rhymes aloud?", "To hear the rhythm and sound.", ["To hide the words.", "To stop listening.", "To make no sound."], "জোরে rhyme বললে তার rhythm ও sound বোঝা যায়।", "♫"),
        q("Which animal makes a ‘roar’ sound?", "Lion", ["Cat", "Duck", "Bee"], "Lion গর্জন করে বা ‘roar’ sound করে।", "🦁"),
        q("Which animal makes a ‘bark’ sound?", "Dog", ["Fish", "Hen", "Cow"], "Dog ‘bark’ sound করে।", "🐶"),
        q("What should you do to hear a sound clearly?", "Listen carefully", ["Cover your ears", "Run away", "Close the book"], "মন দিয়ে শুনলে sound ভালো বোঝা যায়।", "👂"),
        q("Which pair has the same end sound?", "ball and wall", ["ball and pen", "wall and sun", "cat and tree"], "ball ও wall-এর শেষের sound মিলে যায়।", "⚽"),
        q("What is a rhyme?", "Words with matching sounds", ["Only numbers", "Only colours", "Only pictures"], "যেসব শব্দের sound মিলে যায়, সেগুলো rhyme তৈরি করে।", "♫")
      ]
    },
    {
      id: "colours-shapes-signs",
      title: "Colours, Shapes & Signs",
      description: "Colours, rainbow, shapes, sizes and road signs",
      icon: "🌈",
      questions: [
        q("What colour is grass?", "Green", ["Blue", "Red", "Black"], "Grass সাধারণত green হয়।", "🌿"),
        q("What colour is the sun often drawn?", "Yellow", ["Blue", "Black", "Purple"], "সূর্যকে সাধারণত yellow রঙে আঁকা হয়।", "☀"),
        q("What colour is a clear sky?", "Blue", ["Green", "Brown", "Orange"], "পরিষ্কার আকাশ blue দেখায়।", "☁"),
        q("What colour is a ripe mango often?", "Yellow", ["Black", "Blue", "Purple"], "পাকা আম সাধারণত yellow হয়।", "🥭"),
        q("What can we see after rain and sunshine?", "A rainbow", ["A road sign", "A ladder", "A robot"], "বৃষ্টি আর রোদ হলে আকাশে rainbow দেখা যেতে পারে।", "🌈"),
        q("How many colours are in a rainbow?", "Seven", ["Five", "Six", "Ten"], "Rainbow-এ সাধারণত seven colours বলা হয়।", "7"),
        q("Which shape is like a ball?", "Circle", ["Square", "Triangle", "Rectangle"], "বল দেখতে circle-এর মতো।", "○"),
        q("Which shape has three sides?", "Triangle", ["Circle", "Square", "Rectangle"], "Triangle-এর তিনটি side থাকে।", "△"),
        q("Which shape has four equal sides?", "Square", ["Circle", "Triangle", "Oval"], "Square-এর চারটি সমান side থাকে।", "□"),
        q("Which shape is like a door?", "Rectangle", ["Circle", "Triangle", "Star"], "দরজা সাধারণত rectangle-এর মতো।", "▭"),
        q("Which word means not big?", "Small", ["Tall", "Large", "Long"], "Small মানে ছোট।", "S"),
        q("Which word means not short?", "Long", ["Small", "Round", "Red"], "Long মানে লম্বা।", "↔"),
        q("What does a red traffic light mean?", "Stop", ["Go", "Run", "Sleep"], "Red traffic light দেখলে থামতে হয়।", "🔴"),
        q("What does a green traffic light mean?", "Go", ["Stop", "Sleep", "Hide"], "Green traffic light দেখলে যাওয়া যায়, যদি রাস্তা নিরাপদ হয়।", "🟢"),
        q("What does a zebra crossing help people do?", "Cross the road safely", ["Fly a kite", "Climb a tree", "Catch fish"], "Zebra crossing দিয়ে রাস্তা পার হওয়া নিরাপদ।", "🚸"),
        q("Which sign tells us to be careful?", "Warning sign", ["Food sign", "Book sign", "Toy sign"], "Warning sign বিপদ বা সতর্কতার কথা জানায়।", "⚠"),
        q("Which colour is made by mixing red and yellow?", "Orange", ["Blue", "Green", "Purple"], "Red ও yellow মিশলে orange হয়।", "🟠"),
        q("Which object is round?", "Clock", ["Door", "Book", "Ruler"], "ঘড়ির মুখ সাধারণত round বা গোল।", "◷"),
        q("Which object is rectangular?", "Book", ["Ball", "Orange", "Moon"], "বইয়ের আকার সাধারণত rectangular।", "📘"),
        q("Why do we follow road signs?", "To stay safe", ["To make noise", "To lose time", "To stop learning"], "Road signs মানলে রাস্তায় নিরাপদ থাকা যায়।", "🛡")
      ]
    },
    {
      id: "family-friends",
      title: "My Family, Friends & I",
      description: "Myself and family words",
      icon: "👨‍👩‍👧",
      questions: [
        q("Who is your mother's child?", "You", ["A tree", "A bus", "A book"], "তুমি তোমার মায়ের child বা সন্তান।", "☺"),
        q("What do we call our mother's husband?", "Father", ["Brother", "Sister", "Friend"], "মায়ের husband হলেন father বা বাবা।", "👨"),
        q("What do we call our father's wife?", "Mother", ["Brother", "Friend", "Teacher"], "বাবার wife হলেন mother বা মা।", "👩"),
        q("What do we call a male sibling?", "Brother", ["Mother", "Sister", "Grandmother"], "ছেলে ভাইকে brother বলা হয়।", "👦"),
        q("What do we call a female sibling?", "Sister", ["Father", "Brother", "Uncle"], "মেয়ে বোনকে sister বলা হয়।", "👧"),
        q("Which sentence tells your name?", "My name is Rafi.", ["I am blue.", "I eat a chair.", "The sun is a book."], "নিজের নাম বলতে ‘My name is ...’ ব্যবহার করা হয়।", "R"),
        q("Which sentence tells your age?", "I am eight.", ["I live in a pencil.", "I like door.", "Goodbye book."], "‘I am eight’ দিয়ে বয়স বোঝানো হয়েছে।", "8"),
        q("Which word means someone you play and learn with?", "Friend", ["Road", "Colour", "Number"], "একসঙ্গে খেলে ও শেখে এমন মানুষকে friend বলা হয়।", "🤝"),
        q("How should we speak to family members?", "Kindly", ["Rudely", "Loudly all the time", "With anger"], "পরিবারের সঙ্গে ভদ্র ও ভালোভাবে কথা বলা উচিত।", "♥"),
        q("Which is a kind thing to do at home?", "Help your mother", ["Throw toys everywhere", "Break things", "Shout at everyone"], "বাড়িতে সাহায্য করা ভালো আচরণ।", "🤝"),
        q("What can a family do together?", "Eat and talk", ["Never speak", "Throw books", "Break windows"], "পরিবারের মানুষ একসঙ্গে খাওয়া ও কথা বলা করতে পারে।", "🍽"),
        q("Which word is about family?", "Mother", ["Circle", "Blue", "Monday"], "Mother একটি family word।", "👩"),
        q("What does ‘my father’ mean?", "My dad", ["My teacher", "My bird", "My colour"], "Father মানে বাবা বা dad।", "👨"),
        q("What does ‘my brother’ mean?", "My male sibling", ["My mother", "My female sibling", "My teacher"], "Brother মানে ছেলে ভাই।", "👦"),
        q("Which is a friendly greeting?", "Hi, how are you?", ["Go away!", "Break the book!", "Run on the desk!"], "বন্ধুর সঙ্গে ‘Hi, how are you?’ বলা যায়।", "👋"),
        q("What can you say to introduce a friend?", "This is my friend Rima.", ["Friend is blue.", "I am a friend book.", "Rima is a door."], "বন্ধুর পরিচয় দিতে ‘This is my friend ...’ বলা যায়।", "💬"),
        q("Why is sharing good in a family?", "It shows care", ["It breaks toys", "It stops learning", "It makes litter"], "ভাগাভাগি করলে ভালোবাসা ও যত্ন প্রকাশ পায়।", "♥"),
        q("Which is NOT a family member?", "Triangle", ["Mother", "Father", "Brother"], "Triangle একটি shape; এটি family member নয়।", "△"),
        q("What should we do when a family member is sad?", "Show care", ["Laugh at them", "Ignore them", "Push them"], "পরিবারের কেউ দুঃখ পেলে যত্ন নেওয়া উচিত।", "♥"),
        q("A family is important because it gives us...", "Love and care", ["Only homework", "Only colours", "Only numbers"], "পরিবার আমাদের ভালোবাসা ও যত্ন দেয়।", "🏠")
      ]
    },
    {
      id: "animals-birds",
      title: "Animals & Birds",
      description: "Living places, food and domestic animals",
      icon: "🐾",
      questions: [
        q("Where does a fish live?", "In water", ["In a nest", "On a tree", "In a classroom"], "Fish পানিতে বাস করে।", "🐟"),
        q("Where does a bird live?", "In a nest", ["In a pond", "In a classroom", "Under a desk"], "Bird সাধারণত nest বা বাসায় থাকে।", "🪺"),
        q("Where does a cow live?", "In a cowshed", ["In water", "In a nest", "In a tree hole"], "Cow একটি domestic animal; এটি cowshed-এ থাকে।", "🐄"),
        q("What does a cow eat?", "Grass", ["Fish", "Books", "Stones"], "Cow ঘাস খায়।", "🌿"),
        q("What does a cat like to eat?", "Fish", ["Grass only", "Books", "Rocks"], "Cat মাছ খেতে পছন্দ করে।", "🐱"),
        q("What does a goat eat?", "Grass and leaves", ["Pencils", "Shoes", "Paper only"], "Goat ঘাস ও পাতা খায়।", "🐐"),
        q("Which is a domestic animal?", "Cow", ["Tiger", "Deer", "Lion"], "Cow মানুষের কাছে থাকে, তাই এটি domestic animal।", "🐄"),
        q("Which is a wild animal?", "Tiger", ["Cow", "Hen", "Goat"], "Tiger বনে থাকে, তাই এটি wild animal।", "🐯"),
        q("Which is a bird?", "Hen", ["Fish", "Goat", "Frog"], "Hen একটি bird।", "🐔"),
        q("Which animal can swim in water?", "Fish", ["Cow", "Hen", "Goat"], "Fish পানিতে সাঁতার কাটে।", "🐟"),
        q("Which animal has wings?", "Bird", ["Cat", "Cow", "Goat"], "Bird-এর wings বা ডানা থাকে।", "🐦"),
        q("What does a hen give us?", "Eggs", ["Milk", "Honey", "Jute"], "Hen ডিম দেয়।", "🥚"),
        q("What does a cow give us?", "Milk", ["Eggs", "Honey", "Wool"], "Cow দুধ দেয়।", "🥛"),
        q("What does a bee make?", "Honey", ["Milk", "Eggs", "Rice"], "Bee honey তৈরি করে।", "🍯"),
        q("Which animal says ‘meow’?", "Cat", ["Cow", "Dog", "Duck"], "Cat ‘meow’ sound করে।", "🐱"),
        q("Which animal says ‘moo’?", "Cow", ["Cat", "Duck", "Hen"], "Cow ‘moo’ sound করে।", "🐄"),
        q("Why should we be kind to animals?", "They are living beings", ["They are books", "They are toys", "They are signs"], "প্রাণীরা জীবন্ত, তাই তাদের প্রতি দয়া দেখানো উচিত।", "♥"),
        q("What should we give a pet?", "Food and care", ["Stones", "Broken toys", "Litter"], "পোষা প্রাণীকে খাবার ও যত্ন দিতে হয়।", "🐾"),
        q("Which place is safe for a bird's eggs?", "A nest", ["A road", "A river", "A classroom floor"], "পাখির ডিম রাখার নিরাপদ জায়গা হলো nest।", "🪺"),
        q("What can we learn from animals and birds?", "How they live and care for young", ["How to break things", "How to litter", "How to stop learning"], "Animals and birds দেখে তাদের বাসা, খাবার ও জীবন সম্পর্কে শেখা যায়।", "📖")
      ]
    },
    {
      id: "story-time",
      title: "Story Time",
      description: "The Crow and the Jar; The Boys and the Frog",
      icon: "📖",
      questions: [
        q("In ‘The Crow and the Jar’, what was the crow looking for?", "Water", ["A book", "A kite", "A robot"], "গল্পে তৃষ্ণার্ত crow পানি খুঁজছিল।", "🐦"),
        q("Why could the crow not drink at first?", "The water was too low", ["The jar was empty of air", "The crow was asleep", "The jar was broken"], "Jar-এর পানির স্তর নিচে থাকায় crow পানিতে পৌঁছাতে পারেনি।", "🏺"),
        q("What did the crow put into the jar?", "Pebbles", ["Leaves", "Books", "Shoes"], "Crow jar-এর মধ্যে ছোট পাথর বা pebbles ফেলেছিল।", "🪨"),
        q("What happened to the water after the crow dropped pebbles?", "It rose up", ["It disappeared", "It turned red", "It froze"], "Pebbles পড়ার ফলে পানির স্তর উপরে উঠেছিল।", "💧"),
        q("What did the crow do when the water rose?", "It drank the water", ["It flew away thirsty", "It broke the jar", "It hid the jar"], "পানি উপরে উঠলে crow পানি পান করতে পেরেছিল।", "🐦"),
        q("What lesson do we learn from the crow?", "Use your mind to solve problems", ["Give up quickly", "Break things", "Never help"], "Crow বুদ্ধি ব্যবহার করে সমস্যার সমাধান করেছিল।", "💡"),
        q("In ‘The Boys and the Frog’, what did the boys throw?", "Stones", ["Books", "Flowers", "Pencils"], "গল্পে boys-রা frog-এর দিকে পাথর ছুড়ছিল।", "🪨"),
        q("Who was hurt by the stones?", "The frogs", ["The boys only", "The trees", "The jar"], "পাথর লাগায় frogs কষ্ট পেয়েছিল।", "🐸"),
        q("What did the frog tell the boys?", "It is death for us", ["It is a game for us", "Please give us books", "We can fly"], "Frog বলেছিল, boys-এর খেলা frogs-এর জন্য ভয়ংকর।", "🐸"),
        q("Why should the boys stop throwing stones?", "It hurts the frogs", ["It colours the water", "It makes books", "It grows flowers"], "পাথর ছোড়ায় frogs আঘাত পায়।", "♥"),
        q("What lesson do we learn from the frog story?", "Do not hurt animals for fun", ["Throw more stones", "Tease every animal", "Break nests"], "মজার জন্য প্রাণীকে কষ্ট দেওয়া ঠিক নয়।", "🛡"),
        q("Which character was clever in the first story?", "The crow", ["The jar", "The stone", "The water"], "Crow বুদ্ধি করে পানি পান করেছিল।", "🐦"),
        q("Which object held the water in the crow story?", "A jar", ["A nest", "A desk", "A bag"], "পানিটি একটি jar-এর মধ্যে ছিল।", "🏺"),
        q("What is a pebble?", "A small stone", ["A small bird", "A small book", "A small flower"], "Pebble হলো ছোট পাথর।", "🪨"),
        q("What should you do when you see an animal in trouble?", "Tell an adult or help safely", ["Throw stones", "Laugh at it", "Chase it"], "প্রাণী বিপদে থাকলে নিরাপদভাবে সাহায্য করতে হয়।", "🤝"),
        q("What did the crow show in the story?", "Patience and cleverness", ["Anger and laziness", "Fear of books", "Love of litter"], "Crow ধৈর্য ও বুদ্ধি দিয়ে সমাধান করেছিল।", "★"),
        q("Which action is kind to frogs?", "Leave them safely near water", ["Throw stones at them", "Catch them for fun", "Step on them"], "Frog-কে নিরাপদে থাকতে দেওয়া দয়ার কাজ।", "🐸"),
        q("What is a problem in the crow story?", "The crow cannot reach the water", ["The crow has too many books", "The jar can fly", "The stones are singing"], "পানি নিচে থাকায় crow পানিতে পৌঁছাতে পারছিল না।", "?"),
        q("How did the crow solve its problem?", "By dropping pebbles into the jar", ["By breaking the jar", "By calling a bus", "By hiding in a tree"], "Pebbles ফেলায় পানি উপরে উঠেছিল।", "💡"),
        q("Why is it important to think before acting?", "It helps us make kind and smart choices", ["It stops us learning", "It makes problems bigger", "It breaks every toy"], "ভাবনা করে কাজ করলে ভালো ও নিরাপদ সিদ্ধান্ত নেওয়া যায়।", "★")
      ]
    }
  ];

  function getTopic(id) {
    return topics.find((topic) => topic.id === id);
  }

  function makeTopicQuiz(id) {
    const topic = getTopic(id);
    if (!topic) return null;
    return {
      id: `english-topic-${topic.id}`,
      title: topic.title,
      description: `${bn(topic.questions.length)} essential questions • with explanations`,
      topic,
      questions: topic.questions
    };
  }

  function shuffle(items) {
    const shuffled = [...items];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }
    return shuffled;
  }

  function makeFullBookQuiz(excludedQuestionIds = []) {
    const excluded = new Set(excludedQuestionIds);
    const pool = topics.flatMap((topic) =>
      topic.questions.map((item, questionIndex) => ({
        ...item,
        id: `${topic.id}-question-${questionIndex + 1}`,
        sourceTopic: topic.title
      }))
    );
    const availableQuestions = pool.filter((item) => !excluded.has(item.id));
    const selectableQuestions = availableQuestions.length >= 10 ? availableQuestions : pool;
    const questions = shuffle(selectableQuestions).slice(0, 10);
    return {
      id: "english-full-book",
      title: "English for Today: Random Quiz",
      description: "10 random questions from all English topics",
      availableQuestionCount: availableQuestions.length,
      questionIds: questions.map((item) => item.id),
      questions
    };
  }

  return { topics, getTopic, makeTopicQuiz, makeFullBookQuiz };
})();

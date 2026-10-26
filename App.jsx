import React, { useState } from "react";

/* ---------------- NAVBAR ---------------- */
function Navbar() {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold">DEV@Deakin</h1>

        <div className="flex gap-5 text-sm">
          <a href="#about" className="hover:text-cyan-300">About</a>
          <a href="#articles" className="hover:text-cyan-300">Articles</a>
          <a href="#tutorials" className="hover:text-cyan-300">Tutorials</a>
          <a href="#subscribe" className="hover:text-cyan-300">Subscribe</a>
        </div>
      </div>
    </nav>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="bg-cyan-700 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <p className="text-cyan-100 mb-2">Welcome to</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          DEV@Deakin
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-cyan-50">
          A simple place to explore programming articles, tutorials and
          student projects.
        </p>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-10">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-3">About Me</h2>
        <p className="text-gray-600 leading-7">
          Hello, my name is Harsh. I am a university student interested in
          programming, web development and technology. This React version
          keeps the original website simple while adding the P3 content.
        </p>
      </div>
    </section>
  );
}

/* ---------------- ARTICLES ---------------- */
/* Requirement: articles are stored in an array and displayed with map(). */
const articles = [
  {
    id: 1,
    title: "Getting Started with React",
    description: "Learn the basic ideas behind components and JSX.",
    author: "Harsh",
    rating: "5",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
  },
  {
    id: 2,
    title: "Understanding JavaScript",
    description: "A simple introduction to variables, functions and arrays.",
    author: "Alex",
    rating: "5",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
  },
  {
    id: 3,
    title: "Introduction to Web Design",
    description: "Explore useful ideas for creating clean web pages.",
    author: "Sam",
    rating: "4.9",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
  }
];

function FeaturedArticles() {
  return (
    <section id="articles" className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Featured Articles
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <article
            key={article.id}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-44 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-3">{article.description}</p>
              <p className="text-yellow-600 font-semibold">
                ★ {article.rating}{" "}
                <span className="text-gray-700 ml-2">{article.author}</span>
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="bg-gray-800 text-white px-5 py-2 rounded-full hover:bg-gray-700">
          See all articles
        </button>
      </div>
    </section>
  );
}

/* ---------------- TUTORIALS ---------------- */
const tutorials = [
  {
    id: 1,
    title: "React Components",
    description: "Learn how parent and child components work.",
    author: "Harsh",
    rating: "5",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg"
  },
  {
    id: 2,
    title: "React Props",
    description: "Understand how information can move between components.",
    author: "Alex",
    rating: "5",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
  },
  {
    id: 3,
    title: "JavaScript Basics",
    description: "Practise some useful JavaScript programming concepts.",
    author: "Sam",
    rating: "4.9",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
  }
];

function FeaturedTutorials() {
  return (
    <section id="tutorials" className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Featured Tutorials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tutorials.map((tutorial) => (
          <article
            key={tutorial.id}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <img
              src={tutorial.image}
              alt={tutorial.title}
              className="w-full h-44 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">{tutorial.title}</h3>
              <p className="text-gray-600 mb-3">{tutorial.description}</p>
              <p className="text-yellow-600 font-semibold">
                ★ {tutorial.rating}{" "}
                <span className="text-gray-700 ml-2">{tutorial.author}</span>
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="bg-gray-800 text-white px-5 py-2 rounded-full hover:bg-gray-700">
          See all tutorials
        </button>
      </div>
    </section>
  );
}

/* ---------------- SUBSCRIBE ---------------- */
function Subscribe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (email.trim() === "") {
      setMessage("Please enter your email.");
      return;
    }

    setMessage("Thanks for subscribing!");
    setEmail("");
  }

  return (
    <section id="subscribe" className="max-w-6xl mx-auto px-6 py-10">
      <div className="bg-gray-900 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold">SIGN UP FOR OUR DAILY INSIDER</h2>
        <p className="text-gray-300 mt-2">
          Subscribe to receive updates from DEV@Deakin.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col md:flex-row justify-center gap-3"
        >
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            className="px-4 py-3 rounded text-gray-900 w-full md:w-96"
          />

          <button
            type="submit"
            className="bg-cyan-500 px-6 py-3 rounded font-semibold hover:bg-cyan-400"
          >
            Subscribe
          </button>
        </form>

        {message && <p className="mt-4 text-cyan-300">{message}</p>}
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-cyan-700 text-white mt-8">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-3">Explore</h3>
          <p>Home</p>
          <p>Questions</p>
          <p>Articles</p>
          <p>Tutorials</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Support</h3>
          <p>FAQs</p>
          <p>Help</p>
          <p>Contact Us</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Stay Connected</h3>
          <p className="text-cyan-50 mb-4">Follow DEV@Deakin on social media.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              title="Facebook"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-cyan-800 hover:bg-cyan-100 transition"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                <path d="M13.4 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.1H6.8v3.2h2.9V21h3.7Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-cyan-800 hover:bg-cyan-100 transition"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.7" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-cyan-800 hover:bg-cyan-100 transition"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                <path d="M5.2 8.5H2.4V21h2.8V8.5ZM3.8 3a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM21.6 13.8c0-3.8-2-5.6-4.7-5.6-2.2 0-3.2 1.2-3.7 2V8.5h-2.8V21h2.8v-6.2c0-1.6.3-3.2 2.3-3.2s2.1 1.9 2.1 3.3V21h2.8l1.2-7.2Z" />
              </svg>
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              title="X (Twitter)"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-cyan-800 hover:bg-cyan-100 transition"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.7 5.6 22H2.4l7.3-8.4L1.8 2h6.5l4.4 6.7L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center border-t border-cyan-500 py-5">
        <p className="font-bold">DEV@Deakin 2026</p>
        <p className="text-sm mt-2">
          Privacy Policy &nbsp; | &nbsp; Terms &nbsp; | &nbsp; Code of Conduct
        </p>
      </div>
    </footer>
  );
}

/* ---------------- APP / PARENT COMPONENT ---------------- */
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <FeaturedArticles />
      <FeaturedTutorials />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import Post from "./components/Post";

function App() {
  return (
    <div>

      <header className="navbar">
        <div className="logo">
          <h2>My Blog</h2>
        </div>
        <nav className="navigation">
          <a href="login">Login</a>
          <a href="register">Register</a>
        </nav>
      </header>

      <section className="banner">
        <div className="text">
          <h1>Copy Cave</h1>
          <p>Un espacio para compartir noticias e información sobre tecnología</p>
        </div>
        <form className="searchForm">
          <input placeholder="Search a post"></input>
        </form>
      </section>

      <main className="latestPosts">
        <div className="container">
          <h2 className="title">Latest posts</h2>
          <Post/>
          <Post/>
          <Post/>
        </div>
      </main>

    </div>
  );
}

export default App;

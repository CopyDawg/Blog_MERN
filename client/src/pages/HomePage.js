import { Post, Navbar } from "../components";

export const HomePage = () => {
    return(
        <div className="app">

            <Navbar/>

            <section className="banner">
                <div className="text">
                    <h1>Copy Cave</h1>
                    <p>Un espacio para compartir noticias e información sobre tecnología</p>
                </div>
                <form className="searchForm">
                    <input placeholder="Search a post"/>
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
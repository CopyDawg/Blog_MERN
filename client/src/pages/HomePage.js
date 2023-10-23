import { useContext, useEffect } from "react";
import { Post } from "../components";
import { ModalContext } from "../context/ModalContext";

export const HomePage = () => {
    const {setIsModalOpen} = useContext(ModalContext);
    useEffect(() => {
        setIsModalOpen(false);
    }, [])
    
    return(
        <div className="app">
        
            <section className="banner">
                <div className="text">
                    <h1><span>CC</span>Copy Cave</h1>
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
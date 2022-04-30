import "./HomeStyles.css";
import { useEffect, useState } from "react";
import axios from "axios";


export const Home = () => {
    const [booksList, setBooksList] = useState([]);
    // useEffect(() => {
    //     axios.get("https://books.ioasys.com.br/api/v1/books")
    //         .then(res => {
    //             setBooksList(res.data);
    //             console.log(res.data);
    //         })
    // },[])
    return (
        <div className="home-container">
            <div className="header-container">
                <div>
                    <h1 className="home-header-title">ioasys <span className="home-header-subtitle">Books</span></h1>
                </div>
                <div className="logout-icon">
                    <i className="bi bi-box-arrow-right"></i>
                </div>
            </div>

        </div>
    )
}
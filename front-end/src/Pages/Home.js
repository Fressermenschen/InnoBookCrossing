import React, {Component} from 'react';
import Carousel from "../bookViewers/carousel";
import AddBook from "../mainComponents/addBook";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latestBooks: [],
            showAdd: false
        }
    }
    componentDidMount() {
        fetch('http://localhost:8080/book/get/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    latestBooks: data
                });
            });
    }

    render() {
        let styles ={
            hidden:{
                visibility: 'hidden',
            }
        }
        const latestWishes = this.state.latestBooks
        // const latestBooks = [
        //     {id:1, title:"Пиковая дама", author:"Пушкин", img:"https://api.v2.gersun.the-o.co/media/3_%D0%A8%D0%B5%D1%81%D1%82%D0%B8%D0%B3%D1%80%D0%B0%D0%BD%D0%BD%D0%B8%D0%BA%D0%B0_8lt1m4x.jpeg"},
        //     {id:2, title:"Преступление и наказание", author:"Достоевский", img:"https://api.v2.gersun.the-o.co/media/SL_133_DWO_%D1%81_%D0%BA%D1%80%D1%8B%D1%88%D0%BA%D0%B0%D0%BC%D0%B8.jpeg"},
        //     {id:3, title:"Вино из одуванчиков", author:"Бредбери", img:"https://api.v2.gersun.the-o.co/media/3xSL167_%D1%81_%D0%BA%D1%80%D1%8B%D1%88%D0%BA%D0%B0%D0%BC%D0%B8.jpeg"},
        //     {id:4, title:"Цифровая крепость", author:"Браун", img:"https://cdn1.ozone.ru/multimedia/wc1200/1011429201.jpg"},
        //     {id:5, title:"Пиковая дама", author:"Пушкин", img:""},
        //     {id:6, title:"Преступление и наказание", author:"", img:"https://api.v2.gersun.the-o.co/media/SL_133_DWO_%D1%81_%D0%BA%D1%80%D1%8B%D1%88%D0%BA%D0%B0%D0%BC%D0%B8.jpeg"},
        //     {id:7, title:"Вино из одуванчиков", author:"Бредбери", img:"https://api.v2.gersun.the-o.co/media/3xSL167_%D1%81_%D0%BA%D1%80%D1%8B%D1%88%D0%BA%D0%B0%D0%BC%D0%B8.jpeg"},
        //     {id:8, title:"", author:"Браун", img:"https://cdn1.ozone.ru/multimedia/wc1200/1011429201.jpg"}
        // ]
        return (
            <div className="Home">
                <button onClick={() => this.setState({showAdd : !this.state.showAdd})}>
                    { this.state.showAdd ? 'Cancel' : 'Add book' }
                </button>

                { this.state.showAdd ? <AddBook/> : null }

                {/*<Carousel bookSet={this.latestBooks} label={"Latest updates"}/>*/}
                <Carousel bookSet={latestWishes} label={"Latest wishes"}/>
            </div>
        );
    }
}

export default Home;
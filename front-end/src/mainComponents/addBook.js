import React from "react"
// import "./addBook.css"

const styles ={
    block: {
        position: 'absolute',
        zIndex: '100',
        width:'30%',
        height:'450px',
        backgroundColor:'#fff',
        display: 'block',
        left: '50%',
        transform: 'translate(-50%, 0)',
        textAlign: 'left',
        borderRadius: '25px',
        boxShadow: '0 0 200px 100px #b0b3b2',
        padding: '2%',
        lineHeight: '0'

    },
    input: {
        marginBottom:'5px',
        width: '96%',
    },
    button: {
    },

}

export default function AddBook(props){
    let title = null;
    let author = null;
    let description = null;
    let imgURL = null;
    let genre = null

    function postBook(){
        let data = { title: title.value,
            author: author.value,
            description: description.value,
            image: imgURL.value,
            genre: genre.value};

        console.log(data);

        try {
            fetch('http://localhost:8080/book/2/add',{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }})
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log('Успех:', data);
                })
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }
    return(
        <div className="block" style={styles.block}>
            {props.style}
            <p>Enter book title</p><input style={styles.input} ref={ref => title = ref}/>
            <p>Enter book author</p><input style={styles.input} ref={ref => author = ref}/>
            <p>Enter book genre</p><input style={styles.input} ref={ref => genre = ref}/>
            <p>Provide a link to book image</p><input style={styles.input} ref={ref => imgURL = ref}/>
            <p>Enter book description</p><textarea style={styles.input} rows={'4'} ref={ref => description = ref}/>
            <button style={styles.button} onClick={() => postBook()}><p>Submit book</p></button>
        </div>
    )
}
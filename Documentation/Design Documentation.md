## :scroll: Design Documentation

Sequence diagram
![Sequence diagram](https://user-images.githubusercontent.com/66779337/134778315-9a577dc9-544c-465e-9f9f-6d72696b0c66.png)

Use cases
![Use case](https://user-images.githubusercontent.com/66779337/134778380-0efd4238-a096-4360-a2b8-b0ead3dc83f9.jpg)


In the development process the following principles were followed as closely as possible
* SOLID
  * single responsibility 
  * open–closed
  * Liskov substitution
  * interface segregation
  * dependency inversion

   Code Example:
 
```

    public class Book {
    @Id
    @SequenceGenerator(name = "IdSeq", sequenceName = "book_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "IdSeq")
    Integer id;
    @Column(name = "title")
    String title;
    @Column(name = "author")
    String author;
    @Column(name = "genre")
    String genre;
    @Column(name = "owner")
    String owner; // заменить на юзера
    @Column(name = "description")
    String description;
    @Column(name = "image")
    String image;

    @ManyToOne//(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore
    private User user;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
```

* REST
  * Client–server architecture
  * Statelessness
  * Cacheability
  * Layered system
  * Code on demand
  * Uniform interface

   Code Example:

```
export default function BookInfo({book}){
   return(
       <div className="info">
           <div className="imgCover">
               {book.image ? (
                   <img className="bookImg" src={book.image}/>
               ) : (
                   <img className="bookImg" src="no_image.png"/>
               )}
           </div>
           <div className="bookInfo">
               <h1>{book.title}</h1>
               <h2>{book.author}</h2>
               <h3>Genre: {book.genre}</h3>
               <br/>
               <p>Book owner: {book.owner}</p>
               <p>{book.description}</p>
           </div>


       </div>
   )
```

Frameworks:

* Composite pattern 

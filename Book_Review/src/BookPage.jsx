import { useParams, Link } from 'react-router-dom'
import { books } from './books'

function BookPage () {
    const {bookId} = useParams()


    const book = books.find((b) => b.id === bookId)

    if (!book) {
        return <h1>Book not found!</h1>
    }


return (
    <div>
        <Link to='/'> Back to Home</Link>
        <h1>{book.title}</h1>

        <img
            src={book.image}
            alt={book.title}
            className="bookcover"
        />

        <h2>Author: {book.author}</h2>

        <p>{book.description}</p>

        <h2>My Review</h2>

        <p>{book.review}</p>
    </div>
        

)
}

export default BookPage;
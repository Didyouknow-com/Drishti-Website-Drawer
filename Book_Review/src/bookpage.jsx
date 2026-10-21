import { useParams, Link } from 'react-router-dom'
import { books } from './books'

function BookPage () {
    const {bookId} = useParams()

    if (!books) {
        return <h1>Book not found!</h1>
    }


return (
    <div>
        <Link to='/'> Back to Home</Link>
        <h1>{books.title}</h1>

        <img
            src={books.image}
            alt={books.title}
            className="bookcover"
        />

        <h2>Author: {books.author}</h2>

        <p>{book.description}</p>

        <h2>My Review</h2>

        <p>{book.review}</p>
    </div>
        

)
}
import React, { useState, useEffect } from 'react';
import {AiOutlineFullscreen, AiFillHeart} from 'react-icons/ai'
import { addTask,  toggleFavorite } from '@component/redux/reducers/bookslice';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
const AllBooksPage = () => {
    const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const dispatch = useDispatch()
    const router = useRouter()
    const [loading, setLoading] = useState(true);
    const [selectedAuthor, setSelectedAuthor] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const favorites = useSelector((state => state.booklist.favorites))

    useEffect(() => {
        fetch("https://example-data.draftbit.com/books")
        .then((response) => response.json())
        .then((data) => {
            setBooks(data);
            setLoading(false);
        });
    }, []);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleAuthorChange = (event) => {
        setSelectedAuthor(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSortOrderChange = () => {
        if (sortOrder === "") {
        setSortOrder("asc");
        } else if (sortOrder === "asc") {
        setSortOrder("desc");
        } else if (sortOrder === "desc") {
        setSortOrder("");
        }
    };

    const filteredBooks = selectedCategory
        ? books.filter(
            (book) =>
            book.genres &&
            book.genres.includes(selectedCategory) &&
            book.authors &&
            book.authors.includes(selectedAuthor) &&
            (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.description.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        : books.filter(
            (book) =>
            book.authors &&
            book.authors.includes(selectedAuthor) &&
(book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.description.toLowerCase().includes(searchQuery.toLowerCase()))
        );

    if (sortOrder === "asc") {
        filteredBooks.sort((a, b) => (a.title > b.title ? 1 : -1));
    } else if (sortOrder === "desc") {
        filteredBooks.sort((a, b) => (a.title < b.title ? 1 : -1));
    }

    const authors = books
        .flatMap((book) => book.authors)
        .filter((author, index, self) => self.indexOf(author) === index);

        const AddFavs = (book) => {
            dispatch(addTask(book));
            dispatch(toggleFavorite(book.id));
        }
        
        const DetailBook = (book) => {
            router.push(`/book/${book.id}`)
        }   
        
    return (
    <div className='allbooks flex '>
        <div className='allfiltre my-16 py-10 w-[320px] ' >
        <div className="allsearch flex mb-4">
            <input
            type="text"
            placeholder="Search a Book Here"
            value={searchQuery}
            onChange={handleSearchChange}
            className=' rounded-full w-3/4 hover:border-green-400 focus:border-none focus:ring focus:ring-green-300 bg-gray-200 border-white'
            />
        </div>
        <div className='sect-filtre'>
        <div className='categ-sect'>
        <h1 className='text-3xl title'>Category</h1>
            <select value={selectedCategory} onChange={handleCategoryChange} className='rounded-full w-3/4 hover:border-green-400 focus:border-none focus:ring focus:ring-green-300'>
            <option value="">All</option>
            <option value="Fiction">Fiction</option>
            <option value="Psychology">Psychology</option>
            <option value="Mystery">Mystery</option>
            <option value="Fantasy">Fantasy</option>
            </select>
        </div>
                <div className='author-sect'>
                <h1 className='text-3xl title'>Author</h1>
                
                    <select value={selectedAuthor} onChange={handleAuthorChange} className='rounded-full w-3/4 hover:border-green-400 focus:border-none focus:ring focus:ring-green-300'>
                        <option value="">All</option>
                        {authors.map((author) => (
                        <option key={author} value={author}>
                        {author}
                        </option>
                    ))}
                    </select>
                
                </div>
        </div>
        
                
        </div>
        <div className='flex flex-col m-8'>
        <div className="flex justify-end mb-4">
        <button className='btn-tri border border-white rounded-full w-1/6 bg-green-400 text-white' onClick={handleSortOrderChange}>trier par A-Z</button>
        </div>
        <div className='ttlivres grid gap-y-5 grid-cols-4 w-[1250px]' >
            {loading ? <h1 className="text-center">Chargement en cours...</h1> : filteredBooks.map((book) => (
                    <div className='divbook relative'>
                    <div key={book.id} className=' relative border border-green-400 rounded-lg front shadino m-4' style={{ width: 300,  margin: 'auto'}}>
                        <img src={book.image_url} alt=""  className='h-[400px] w-full rounded-lg' style={{objectFit: 'cover'}} />
                        <div className='flex flex-col place-items-center' style={{height: 120}}>
                            <h2 className='text-xl title'>{book.title}</h2>
                            <p>By {book.authors}</p>
                            <div className='card'>
                                {favorites.includes(book.id) ?<button className='bg-green-400 rounded-lg m-1 coeur'style={{width: 120, height: 45}}>dans vos favoris</button> : <button className='bg-green-400 rounded-lg m-1 coeur' onClick={() => AddFavs(book)} style={{width: 120, height: 45}}>add to favoris</button>}   
                            </div>
                        </div>
                    </div>
                    <div className='flex items-end flex-col absolute left-0 top-0 opacity-0 hover:opacity-100  'style={{width: 300,height: 350, margin: 'auto' }}>
                        <button className='bg-green-400 text-center  m-1' onClick={() => DetailBook(book)} style={{width: 30, height: 30, borderRadius: '50%'}}><AiOutlineFullscreen className='mx-auto'/></button>
                        <button className='bg-green-400 text-center  m-1' style={{width: 30, height: 30, borderRadius: '50%'}}>
                        <AiFillHeart className='mx-auto'/>
                        </button>
                    </div>
            </div>
            ))}
        

            </div>
            </div>

        </div>
        

    
    );
};

export default AllBooksPage;
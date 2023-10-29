import './App.css';
import { Header } from './components/Header';

function App() {
  return (
    <body>
      <Header/>
      <header>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <h3>lorem </h3>
        <button type='submit'>Reserve a Table</button>
        <img/>
      </header>
      <main>
        <h2>Specials</h2>
        <button>Online Menu</button>
        <div className='item-cards'>
          <img src=''/>
          <div className='card-informaion'>
            <h3>Title</h3>
            <h3>Price</h3>
            <h3>description</h3>
            <h3>order a delivery</h3>
            <img src=''/>
          </div>
        </div>
      </main>
      <article>
      <h2>Testimonials</h2>
      <div className='testimonial-cards'>
        <h3>Rating</h3>
        <img/>
        <h3>Name</h3>
        <h3>Comment</h3>
      </div>
      </article>
      <aside>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <h3>About the resturant</h3>
        <img/>
        <img/>
      </aside>
      <footer>
        <img scr=''/>
        <ul>
          <a href=''>
            <li>Home</li>
          </a>
          <a href=''>
            <li>About</li>
          </a>
          <a href=''>
            <li>Menu</li>
          </a>
          <a href=''>
            <li>Reservations</li>
          </a>
          <a href=''>
            <li>Order Online</li>
          </a>
          <a href=''>
            <li>Login</li>
          </a>
        </ul>

        <ul>
          <a href=''>
            <li>Adress</li>
          </a>
          <a href=''>
            <li>Phone Number</li>
          </a>
          <a href=''>
            <li>Email</li>
          </a>
        </ul>

        <ul>
          <a href=''>
            <li>Adress</li>
          </a>
          <a href=''>
            <li>Phone Number</li>
          </a>
          <a href=''>
            <li>Email</li>
          </a>
        </ul>
      </footer>
    </body>
    );
}

export default App;

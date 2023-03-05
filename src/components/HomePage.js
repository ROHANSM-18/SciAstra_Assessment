import React from "react"
import './assets/css/style.css'

const HomePage = () => {
    return(
      <header class="header" data-header>
      <div class="container">
  
        <div class="overlay" data-overlay></div>
  
        <p style="color:white; font-size:30px">SciAstra</p>
  
        <div class="header-actions">
  
          <button class="search-btn">
            <ion-icon name="search-outline"></ion-icon>
          </button>
  
          <div class="lang-wrapper">
            <label for="language">
              <ion-icon name="globe-outline"></ion-icon>
            </label>
  
            <select name="language" id="language">
              <option value="en">EN</option>
              <option value="au">AU</option>
              <option value="ar">AR</option>
              <option value="tu">TU</option>
            </select>
          </div>
  
          <button class="btn btn-primary">Sign in</button>
  
        </div>
  
        <button class="menu-open-btn" data-menu-open-btn>
          <ion-icon name="reorder-two"></ion-icon>
        </button>
  
        <nav class="navbar" data-navbar>
  
          <div class="navbar-top">
  
            <a href="./index.html" class="logo">
              <img src="./assets/images/logo.svg" alt="Filmlane logo">
            </a>
  
            <button class="menu-close-btn" data-menu-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>
  
          </div>
  
          <ul class="navbar-list">
  
            <li>
              <a href="./index.html" class="navbar-link">Home</a>
            </li>
  
            <li>
              <a href="#" class="navbar-link">Gravity</a>
            </li>
  
            <li>
              <a href="#" class="navbar-link">Space</a>
            </li>
  
            <li>
              <a href="#" class="navbar-link">Relativity</a>
            </li>
  
            <li>
              <a href="#" class="navbar-link">Physics</a>
            </li>
  
          </ul>
  
          <ul class="navbar-social-list">
  
            <li>
              <a href="#" class="navbar-social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
  
            <li>
              <a href="#" class="navbar-social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
  
            <li>
              <a href="#" class="navbar-social-link">
                <ion-icon name="logo-pinterest"></ion-icon>
              </a>
            </li>
  
            <li>
              <a href="#" class="navbar-social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
  
            <li>
              <a href="#" class="navbar-social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>
  
          </ul>
  
        </nav>
  
      </div>
    </header>
  
  
  
  
  
    <main>
      <article>
  
        <!-- 
          - #HERO
        -->
  
        <section class="hero">
          <div class="container">
  
            <div class="hero-content">
  
              <p class="hero-subtitle">Filmlane</p>
  
              <h1 class="h1 hero-title">
                Unlimited <strong>Science</strong>, Shows, & More.
              </h1>
  
              <div class="meta-wrapper">
  
                <div class="badge-wrapper">
                  <div class="badge badge-fill">Science</div>
  
                  <div class="badge badge-outline">HD</div>
                </div>
  
                <div class="ganre-wrapper">
                  <a href="#">Cosmos,</a>
  
                  <a href="#">E=mc²</a>
                </div>
  
                <div class="date-time">
  
                  <div>
                    <ion-icon name="calendar-outline"></ion-icon>
  
                    <time datetime="2022">2022</time>
                  </div>
  
                  <div>
                    <ion-icon name="time-outline"></ion-icon>
  
                    <time datetime="PT128M">128 min</time>
                  </div>
  
                </div>
  
              </div>
  
              <button class="btn btn-primary">
                <ion-icon name="play"></ion-icon>
  
                <span>Watch now</span>
              </button>
  
            </div>
  
          </div>
        </section>
  
  
  
  
  
        <!-- 
          - #UPCOMING
        -->
  
        <section class="upcoming">
          <div class="container">
  
            <div class="flex-wrapper">
  
              <div class="title-wrapper">
                <p class="section-subtitle">Online Streaming</p>
  
                <h2 class="h2 section-title">Upcoming Movies</h2>
              </div>
  
              <ul class="filter-list">
  
                <li>
                  <button class="filter-btn">Movies</button>
                </li>
  
                <li>
                  <button class="filter-btn">TV Shows</button>
                </li>
  
                <li>
                  <button class="filter-btn">Anime</button>
                </li>
  
              </ul>
  
            </div>
  
            <ul class="movies-list  has-scrollbar">
  
              <li>
                <div class="movie-card">
  
                  <a href="./movie-details.html">
                    <figure class="card-banner">
                      <img src="./assets/images/upcoming-1.png" alt="The Northman movie poster">
                    </figure>
                  </a>
  
                  <div class="title-wrapper">
                    <a href="./movie-details.html">
                      <h3 class="card-title">The Northman</h3>
                    </a>
  
                    <time datetime="2022">2022</time>
                  </div>
  
                  <div class="card-meta">
                    <div class="badge badge-outline">HD</div>
  
                    <div class="duration">
                      <ion-icon name="time-outline"></ion-icon>
  
                      <time datetime="PT137M">137 min</time>
                    </div>
  
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
  
                      <data>8.5</data>
                    </div>
                  </div>
  
                </div>
              </li>
  
              <li>
                <div class="movie-card">
  
                  <a href="./movie-details.html">
                    <figure class="card-banner">
                      <img src="./assets/images/upcoming-2.png"
                        alt="Doctor Strange in the Multiverse of Madness movie poster">
                    </figure>
                  </a>
  
                  <div class="title-wrapper">
                    <a href="./movie-details.html">
                      <h3 class="card-title">Doctor Strange in the Multiverse of Madness</h3>
                    </a>
  
                    <time datetime="2022">2022</time>
                  </div>
  
                  <div class="card-meta">
                    <div class="badge badge-outline">4K</div>
  
                    <div class="duration">
                      <ion-icon name="time-outline"></ion-icon>
  
                      <time datetime="PT126M">126 min</time>
                    </div>
  
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
  
                      <data>NR</data>
                    </div>
                  </div>
  
                </div>
              </li>
  
              <li>
                <div class="movie-card">
  
                  <a href="./movie-details.html">
                    <figure class="card-banner">
                      <img src="./assets/images/upcoming-3.png" alt="Memory movie poster">
                    </figure>
                  </a>
  
                  <div class="title-wrapper">
                    <a href="./movie-details.html">
                      <h3 class="card-title">Memory</h3>
                    </a>
  
                    <time datetime="2022">2022</time>
                  </div>
  
                  <div class="card-meta">
                    <div class="badge badge-outline">2K</div>
  
                    <div class="duration">
                      <ion-icon name="time-outline"></ion-icon>
  
                      <time datetime="">N/A</time>
                    </div>
  
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
  
                      <data>NR</data>
                    </div>
                  </div>
  
                </div>
              </li>
  
              <li>
                <div class="movie-card">
  
                  <a href="./movie-details.html">
                    <figure class="card-banner">
                      <img src="./assets/images/upcoming-4.png"
                        alt="The Unbearable Weight of Massive Talent movie poster">
                    </figure>
                  </a>
  
                  <div class="title-wrapper">
                    <a href="./movie-details.html">
                      <h3 class="card-title">The Unbearable Weight of Massive Talent</h3>
                    </a>
  
                    <time datetime="2022">2022</time>
                  </div>
  
                  <div class="card-meta">
                    <div class="badge badge-outline">HD</div>
  
                    <div class="duration">
                      <ion-icon name="time-outline"></ion-icon>
  
                      <time datetime="PT107M">107 min</time>
                    </div>
  
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
  
                      <data>NR</data>
                    </div>
                  </div>
  
                </div>
              </li>
  
            </ul>
  
          </div>
        </section>
  
  
  
  
  
        <!-- 
          - #SERVICE
        -->
  
        <!-- 
          - #TOP RATED
        -->
  
  
        <!-- 
          - #TV SERIES
        -->
  
  
  
  
      </article>
    </main>
  
  
  
  
  
  
  
  
  
  
    <!-- 
      - #GO TO TOP
    -->
  
    <a href="#top" class="go-top" data-go-top>
      <ion-icon name="chevron-up"></ion-icon>
    </a>
  
  
  
  
  
    <!-- 
      - custom js link
    -->
    <script src="./assets/js/script.js"></script>
  
    <!-- 
      - ionicon link
    -->
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  
    )
}

export default HomePage
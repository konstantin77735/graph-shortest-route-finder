<!DOCTYPE html>
<html class="no-webp" lang="ru">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="assets/css/firstStyles.min.css" media="none" onload="media='all'">
    <link rel="stylesheet" href="assets/css/libs/normalize.min.css" media="none" onload="media='all'">
    <link rel="shortcut icon" href="assets/img/favicon.svg" type="image/x-icon">
    <title>Basic Start Template</title>
    <style>
      body {margin:0}.preloader {position:fixed;left:0;top:0;right:0;bottom:0;background:#111;z-index:1001;}.preloader__row{position:relative;top:50%;left:50%;width:70px;height:70px;margin-top:-35px;margin-left:-35px;text-align:center;animation:preloader-rotate 1s infinite linear;}.preloader__item{position:absolute;display:inline-block;top:0;background-color:#00c2d0;border-radius:100%;width:35px;height:35px;animation:preloader-bounce 1s infinite ease-in-out}.preloader__item:last-child{top:auto;bottom:0;animation-delay:-1s}@keyframes preloader-rotate{100%{transform:rotate(360deg);}} @keyframes preloader-bounce{0%,100%{transform:scale(0);}50%{transform:scale(1)}} .loaded_hiding .preloader{transition:0.3s opacity;opacity:0}.loaded .preloader{display:none}
      
      
    </style>
    <script src="assets/js/firstScripts.js" type="module"></script>
  </head>
  <script async="">
    window.onload = function() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function() {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
    }, 500);
    }
      
    
  </script>
  <body>       
    <div class="preloader">
      <div class="preloader__row">
        <div class="preloader__item"></div>
        <div class="preloader__item"></div>
        <div class="preloader__item"></div>
        <div class="preloader__item"></div>
      </div>
    </div>
    <div class="burger"><span class="burger__line line1"></span><span class="burger__line line2"></span><span class="burger__line line3"></span></div>
    <div class="mobile-menu"></div>
    <div class="notification"> <span class="notification__text">New mockup kit available for preorder!</span></div>
    <div class="wrapper_nav wrapper">
      <div class="nav"> <img class="logo" src="assets/img/2nav/veronica.svg">
        <div class="menu">
          <div class="menu__item menu__item_home">Home</div>
          <div class="menu__item menu__item_projects">Projects </div>
          <div class="menu__item menu__item_blog">Blog</div>
          <div class="menu__item menu__item_shop">Shop</div>
          <div class="menu__item menu__item_about">About</div>
          <div class="menu__item menu__item_contact">Contact</div>
        </div>
        <button class="btn popup-trigger">Cart</button>
      </div>
    </div>
    <div class="makeyoursite"> 
      <div class="wrapper">
        <h2 class="title makeyoursite__title">
           make your awesome website. You <br> have a vision. We have a way to <br> get you there.</h2>
        <div class="makeyoursite__content">
          <p class="makeyoursite__description">
             Iste natus error sit voluptatem <br> accusantium doloremque laudantium, <br> totam rem aperiam eaque ipsa quae illo <br> inventore veritatis quasi.<img class="makeyoursite__arrow" src="assets/img/3makeyoursite/arrow.png"></p><img class="makeyoursite__woman-img" src="assets/img/3makeyoursite/webp/woman.webp" data-ext="jpg">
        </div>
      </div>
    </div>
    <div class="selectedProjects"> 
      <div class="wrapper"> 
        <h2 class="title selectedProjects__title">selected projects</h2>
        <div class="selectedProjects__content">
          <p class="selectedProjects__description">
             Sed ut dolor sit amet, consectetur adipiscing elit. Phasellus ac ipsum a <br> lectus vulputate porta vitae non enim. Donec et ante leo.</p>
          <button class="btn selectedProjects__btn popup-trigger">View all projects</button>
        </div><img class="selectedProjects__img" src="placeholder.jpg" data-src="assets/img/4selectedprojects/webp/selectedprojects.webp" data-ext="jpg">
      </div>
    </div>
    <div class="expert"> 
      <div class="wrapper">
        <h2 class="title expert__title">
           I’m veronica, Your go-to No-code <br> web designer and branding expert</h2>
        <div class="expert__content"> 
          <div class="expert-img-wrapper"><img class="expert__img" src="placeholder.jpg" data-src="assets/img/5expert/webp/expert.webp" data-ext="jpg"><img class="expert__arrow" src="assets/img/5expert/arrow.png"></div>
        </div>
        <div class="expert__description"> 
          <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod <br> tempor 
            incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim <br> veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea <br> commodo consequat. <br> <br>
            Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore <br> eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, <br> 
            sunt in culpa qui officia deserunt mollit anim id est laborum. <br> <br> <br>
          </p>
          <button class="btn expert__btn popup-trigger">Learn more about me</button>
        </div>
      </div>
    </div>
    <div class="reviews"> 
      <div class="wrapper reviews__wrapper"> 
            <div class="review"> 
              <div class="review__text-wrapper">
                <p class="i review__text">Fantastic work. such an efficient streamlined way to obtain <br/> a design. Super happy thanks!</p>
              </div>
              <div class="review__user-wrapper"> <img class="review__user-img" src="placeholder.jpg" data-src="assets/img/6reviews/webp/user1.webp"><span class="username">Kelly Williams</span><span class="proffesion">Head of Design, Layers</span>
                <div class="stars-wrapper"> <img class="review__stars" src="placeholder.jpg" data-src="assets/img/6reviews/stars.png"></div>
              </div>
            </div>
            <div class="review"> 
              <div class="review__text-wrapper">
                <p class="i review__text">Highly professional brand development, design and implementation... <br/> very strategic and engaged.</p>
              </div>
              <div class="review__user-wrapper"> <img class="review__user-img" src="placeholder.jpg" data-src="assets/img/6reviews/webp/user2.webp"><span class="username">Ryan Bickle</span><span class="proffesion">Inside Sales Rep., Ganjaflex</span>
                <div class="stars-wrapper"> <img class="review__stars" src="placeholder.jpg" data-src="assets/img/6reviews/stars.png"></div>
              </div>
            </div>
            <div class="review"> 
              <div class="review__text-wrapper">
                <p class="i review__text">Veronica was amazing! We gave her a brief about what we were after - She <br/> quickly understood the issue and was also able to apply a solution in no time.</p>
              </div>
              <div class="review__user-wrapper"> <img class="review__user-img" src="placeholder.jpg" data-src="assets/img/6reviews/webp/user3.webp"><span class="username">Brittany Ramsay</span><span class="proffesion">Marketing Manager, Sonron</span>
                <div class="stars-wrapper"> <img class="review__stars" src="placeholder.jpg" data-src="assets/img/6reviews/stars.png"></div>
              </div>
            </div>
            <div class="review"> 
              <div class="review__text-wrapper">
                <p class="i review__text">We are a design house, and I can say speaking from a place of experience that <br/> veronica completed her tasks in a very timely manner.</p>
              </div>
              <div class="review__user-wrapper"> <img class="review__user-img" src="placeholder.jpg" data-src="assets/img/6reviews/webp/user4.webp"><span class="username">Sandra Endru</span><span class="proffesion">CEO, Condax</span>
                <div class="stars-wrapper"> <img class="review__stars" src="placeholder.jpg" data-src="assets/img/6reviews/stars.png"></div>
              </div>
            </div>
      </div>
    </div>
    <div class="latestBlocks">
      <div class="wrapper">
        <h2 class="title latestBlocks__title">latest blocks</h2>
        <div class="latestBlocks__content"><span class="latestBlocks__description">
            Dignissimos ducimus qui blanditiis praesentium 
            voluptatum deleniti <br> atque corrupti quos dolores et quas molestias.</span>
          <button class="btn popup-trigger">View all posts</button>
        </div>
        <div class="row latestBlocks__row">
              <div class="blog blog1"><img class="blog__img" src="placeholder.jpg" data-src="assets/img/7latestblogs/webp/blog_1.webp">
                <div class="profession"><span class="profession__text">Design system</span></div>
                <h3 class="subtitle blog__subtitle">How many participants for a ux interview</h3>
                <p class="i">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed <br/> quia consequuntur magni dolores eos.</p>
                <button class="btn btn__readMore popup-trigger">Read more</button>
              </div>
              <div class="blog blog2"><img class="blog__img" src="placeholder.jpg" data-src="assets/img/7latestblogs/webp/blog_2.webp">
                <div class="profession"><span class="profession__text">Development</span></div>
                <h3 class="subtitle blog__subtitle">How many participants for a ux interview</h3>
                <p class="i">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed <br/> quia consequuntur magni dolores eos.</p>
                <button class="btn btn__readMore popup-trigger">Read more</button>
              </div>
        </div>
      </div>
    </div>
    <div class="letsworktogether">
      <div class="wrapper"> 
        <h2 class="title letsworktogether__title">Need a no-code Website? <br><span class="title title__special">Let's work together.</span></h2>
      </div>
    </div>
    <div class="nav_footer">
      <div class="wrapper">
        <div class="nav"> <img class="logo" src="placeholder.js" data-src="assets/img/2nav/veronica.svg">
          <div class="menu">
            <div class="menu__item menu__item_home">Home</div>
            <div class="menu__item menu__item_projects">Projects </div>
            <div class="menu__item menu__item_blog">Blog</div>
            <div class="menu__item menu__item_shop">Shop</div>
            <div class="menu__item menu__item_about">About</div>
            <div class="menu__item menu__item_contact">Contact</div>
          </div>
        </div>
        <div class="slickslider_wrapper" style="width: 500px;">
                    <div class="slider"><img class="slider__img" src="assets/img/9navfooter/webp/1.webp" alt=""><img class="slider__img" src="assets/img/9navfooter/webp/3.webp" alt=""></div>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <form class="form" action="assets/php/script.php" method="POST">
        <div class="input-wrapper">
          <input class="form__input form__input_name" type="text" name="name" maxlength="30" placeholder="Введите Ваше Имя:">
        </div>
        <div class="input-wrapper">
          <input class="form__input form__input_phone" type="tel" placeholder="+7(___)___-__-__" name="tel" inputmode="text">
        </div>
        <div class="input-wrapper">
          <textarea class="form__input form__input_textarea" name="description" placeholder="Введите Ваше сообщение:"></textarea>
        </div>
        <div class="title-wrapper">
          <button class="btn"><span>LET'S GO! </span></button>
        </div>
      </form>
    </div>
    <div class="wrapper nav_wrapper nav_wrapper_mobile">
      <div class="nav"><img class="logo" src="assets/img/2nav/veronica.svg">
        <div class="burger"><span class="burger__line line1"></span><span class="burger__line line2"></span><span class="burger__line line3"></span></div>
        <div class="mobile-menu"></div>
      </div>
    </div>
    <script src="assets/js/libs/jquery/jquery.min.js"></script>
    <script src="https://unpkg.com/imask@6.4.2/dist/imask.js"></script>
    <script src="assets/js/libs/slickslider/slick.min.js"></script>
    <script src="assets/js/map.js" type="module"></script>
    <script src="assets/js/secondScripts.js" type="module"></script>
    <script async>
      function appendToHead(a,c){
          if("css"==a)
          {var b=document.createElement("link");
          b.rel="stylesheet",
          b.href=c,document.head.appendChild(b)
          }
          if("js"==a||"javascript"==a){
              var d=document.createElement("script");
              d.src=c,document.head.appendChild(d)}
          }
      
      appendToHead('css', 'assets/css/secondStyles.min.css');
    </script>
    <script></script>
  </body>
</html>
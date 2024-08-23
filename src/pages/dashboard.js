// ! This is where that return a HTML code !!!
const Dashboard = () => {
  return ` <header class="header">
      <a href="#" class="logo">
        <img src="images/logo.png" alt="" />
      </a>
      <nav class="navbar">
        <div id="close" class="fas fa-times"></div>
        <a href="/" class="nav_item" data-link="">Home</a>
        <a href="about" class="nav_item" data-link="">About</a>
        <a href="menu" class="nav_item" data-link="">Menu</a>
        <a href="contact" class="nav_item" data-link="">Contact</a>
      </nav>

      <div id="menu" class="fas fa-bars"></div>
    </header>

    <section class="home">
      <div class="content">
        <h1 class="title">
          fresh <span>coffee</span> in the <span>morning</span>
        </h1>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum cum
          mollitia
        </p>
        <a href="#" class="btn start-btn">get started</a>
      </div>

      <div class="image">
        <img src="./images/home.png" data-speed="-3" class="move" alt="">
      </div>
    </section>`;
};
export default Dashboard;

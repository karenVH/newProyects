<style lang="scss">
  .header {
    background-image: url('/img/banner.png');
    background-position: top center;
    background-size: 100%;
    background-repeat: no-repeat;
    height: 55rem;

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 1rem;

      .logo {
        img {
          height: 3rem;
        }

        @media (max-width: 638px) {
          display: none;
        }
      }

      ul {
        display: flex;
        li {
          margin: 0 1rem;
          color: $light;
          font-weight: $medium;
          font-size: $subtitle;
        }
      }
    }

    .headline {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-top: 5rem;
      img {
        height: 30rem;
      }

      .title {
        color: $light;
        text-align: center;
        h1 {
          font-size: $header;
        }
        span {
          font-size: $subtitle;
        }

        @media (max-width: 1024px) {
          color: black;
        }
      }
    }
  }
</style>

<header class="header">
  <div class="container">
    <nav class="nav">
      <figure class="logo">
        <img src="/svg/logo.svg" alt="Real Vision Enterprise" />
      </figure>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/">Servicios</a></li>
        <li><a href="/">Planes</a></li>
        <li><a href="/">Portafolio</a></li>
        <li><a href="/">Contacto</a></li>
      </ul>
    </nav>
  </div>
  <div class="headline">
    <figure>
      <img src="/svg/monitor.svg" alt="desktop" />
    </figure>
    <div class="title">
      <h1>La Mejor Experiencia Digital</h1>
      <span>Nos encargamos de llevar tu idea al siguiente nivel</span>
    </div>
  </div>
</header>

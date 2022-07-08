<script>
  import BtnPrimary from '../utils/BtnPrimary.svelte';

  const btnText = 'LEER MAS';
</script>

<style lang="scss">
  .services {
    margin-top: 10rem;
    h2 {
      margin: 4rem 0;
      font-size: $title;
    }

    span {
      display: flex;
      justify-content: center;
      margin: 5rem 0;
      p {
        font-size: $subtitle;
        font-weight: $medium;
      }
    }

    .cards {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      
      @media (max-width: 425px) {
        flex-wrap: wrap;
        justify-content: center;
      }

      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: $second;
        width: 25rem;
        padding: 4rem;

        @media (max-width: 1024px) {
          width: 20rem;
        }

        @media (max-width: 768px) {
          margin: 0 1rem;
        }

        @media (max-width: 425px) {
          margin-bottom: 3rem;
          width: 30rem;
        }

        img {
          height: 15rem;
        }

        h3 {
          margin-top: 3rem;
          font-size: $subtitle;
        }

        p {
          font-size: $text-card;
          text-align: justify;
          margin-top: 2rem;
          margin-bottom: 5rem;
        }
      }
    }
  }
</style>

<div class="services">
  <h2>Servicios</h2>
  <div class="cards">
    <div class="card">
      <img src="/svg/web-dev.svg" alt="desarrollo web" />
      <h3>Desarrollo Web</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
        eaque reiciendis ea minus possimus? Iste non saepe voluptatem quo unde.
      </p>
      <BtnPrimary text={btnText} />
    </div>
    <div class="card">
      <img src="/svg/design.svg" alt="diseño grafico" />
      <h3>Diseño Grafico</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
        eaque reiciendis ea minus possimus? Iste non saepe voluptatem quo unde.
      </p>
      <BtnPrimary text={btnText} />
    </div>
    <div class="card">
      <img src="/svg/marketing.svg" alt="marketing" />
      <h3>Marketing</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
        eaque reiciendis ea minus possimus? Iste non saepe voluptatem quo unde.
      </p>
      <BtnPrimary text={btnText} />
    </div>
  </div>
  <span>
    <p>Ofrecemos las soluciones perfectas para la revolución digital</p>
  </span>
</div>

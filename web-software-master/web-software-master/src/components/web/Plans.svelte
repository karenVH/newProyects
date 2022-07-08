<script>
  import BtnPrimary from '../utils/BtnPrimary.svelte';

  const btnText = 'COMPRAR';
</script>

<style lang="scss">
  .plans {
    h2 {
      font-size: $title;
    }

    .caption {
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
      margin-top: 5rem;

      @media (max-width: 425px) {
        flex-wrap: wrap;
      }

      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: $second;
        width: 25rem;
        padding: 3rem 0;
        border-radius: 14px;

        @media (max-width: 1024px) {
          margin: 0 1rem;
        }

        @media (max-width: 425px) {
          width: 20rem;
          margin: 0;
          margin-bottom: 3rem;
        }

        h3 {
          font-size: $subtitle;
        }

        .price {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: $primary;
          width: 100%;
          margin-bottom: 2rem;
          p {
            color: $light;
            font-size: 2.5rem;
            font-weight: $bold;
            margin-bottom: 0;
          }

          span {
            margin-bottom: 1.2rem;
            color: $light;
            font-size: $text-card;
            font-weight: $medium;
          }
        }

        ul {
          margin-bottom: 3rem;
          li {
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
</style>

<div class="plans">
  <h2>Planes</h2>
  <div class="cards">
    <div class="card">
      <h3>TEXTO</h3>
      <span>info.</span>
      <div class="price">
        <p>$999.999</p>
        <span>Pago unico anual</span>
      </div>
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
      <BtnPrimary text={btnText} />
    </div>
    <div class="card">
      <h3>TEXTO</h3>
      <span>info.</span>
      <div class="price">
        <p>$999.999</p>
        <span>Pago unico anual</span>
      </div>
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
      <BtnPrimary text={btnText} />
    </div>
    <div class="card">
      <h3>TEXTO</h3>
      <span>info.</span>
      <div class="price">
        <p>$999.999</p>
        <span>Pago unico anual</span>
      </div>
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
      <BtnPrimary text={btnText} />
    </div>
    <div class="card">
      <h3>TEXTO</h3>
      <span>info.</span>
      <div class="price">
        <p>$999.999</p>
        <span>Pago unico anual</span>
      </div>
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
      <BtnPrimary text={btnText} />
    </div>
  </div>
  <span class="caption">
    <p>Somos tu mejor opción para adoptar la transformación digital</p>
  </span>
</div>

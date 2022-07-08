<style lang="scss">
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $second;

    .info-title {
      display: flex;
      justify-content: center;
      h4 {
        font-size: $text;
        padding-top: 3rem;
        padding-bottom: 1rem;
      }
    }

    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;

      li {
        margin: 0 4rem;
        padding: 1rem 0 4rem 0;
        font-size: $text-card;

        span {
          font-weight: bold;
        }

        @media (max-width: 425px) {
          margin: 0 2rem;
        }
      }
    }
  }
</style>

<footer class="footer">
  <div class="container">
    <span class="info-title">
      <h4>INFORMACIÓN DE CONTACTO</h4>
    </span>
    <ul>
      <li>
        <span>Dirección</span><br />
        Calle 96 #12-65 Oficina 408
      </li>
      <li>
        <span>Correo electronico</span><br />
        ventas@shssas.com.co
      </li>
      <li>+57 3204427248 <br /> +57 3197680077</li>
    </ul>
  </div>
</footer>

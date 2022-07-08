<style lang="scss">
  .info {
    display: flex;
    .info-container {
      display: flex;
      flex-direction: column;

      .content-1 {
        display: flex;
        align-items: center;

        @media (max-width: 425px) {
          margin-bottom: 3rem;
        }

        .image {
          width: 50%;
          figure {
            background-color: $second;
            display: flex;
            border-radius: 10px;
            flex-direction: row-reverse;
            img {
              height: 20rem;
              margin: 1rem;
            }
          }
          @media (max-width: 425px) {
            width: 60%;
          }
        }

        .text {
          width: 48%;
          padding-left: 2rem;
          h2 {
            font-size: $title;
          }
          p {
            font-size: $text;
            text-align: justify;
            padding-right: 10rem;
          }
          @media (max-width: 425px) {
            width: 80%;

            p {
              padding-right: 0;
            }
          }
        }
      }

      .content-2 {
        display: flex;
        align-items: center;

        @media (max-width: 425px) {
          margin-bottom: 3rem;
        }

        .image {
          width: 50%;
          figure {
            background-color: $second;
            display: flex;
            border-radius: 10px;
            img {
              height: 20rem;
              margin: 1rem;
            }
          }

          @media (max-width: 425px) {
            width: 60%;
          }
        }

        .text {
          width: 48%;
          padding-right: 2rem;

          h2 {
            text-align: end;
            font-size: $title;
          }
          p {
            text-align: justify;
            display: inline-block;
            padding-left: 10rem;
            font-size: $text;
          }
          @media (max-width: 425px) {
            width: 80%;
            p {
              padding-left: 0;
            }
          }
        }
      }
    }
  }
</style>

<section class="info container-fluid">
  <div class="info-container">
    <div class="content-1">
      <div class="image">
        <figure>
          <img src="/img/developer.jpg" alt="" />
        </figure>
      </div>
      <div class="text">
        <h2>ALGUN TEXTO</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia
          tempore, iure ipsum reprehenderit consectetur
        </p>
      </div>
    </div>
    <div class="content-2">
      <div class="text">
        <h2>ALGUN TEXTO</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          velit iusto molestias quas, quae ad a, Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Mollitia, minima.
        </p>
      </div>
      <div class="image">
        <figure>
          <img src="/img/designer.jpg" alt="" />
        </figure>
      </div>
    </div>
    <div class="content-1">
      <div class="image">
        <figure>
          <img src="/img/marketer.jpg" alt="" />
        </figure>
      </div>
      <div class="text">
        <h2>ALGUN TEXTO</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          omnis repudiandae, rerum eaque nam ipsa quas neque perspiciatis
        </p>
      </div>
    </div>
  </div>
</section>

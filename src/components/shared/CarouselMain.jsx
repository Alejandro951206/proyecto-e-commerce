import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './styles/CarouselStyle.css';


function CarouselMain() {
  return (
    <div>
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          class="ArticleMain1"
          src="../../../src/assets/img/DulceKitKatJapones.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Dulce KitKat Japones</h3>
          <p>Unidad o en paquete con distintos sabores.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          class="ArticleMain2"
          src="../../../src/assets/img/JuicyDropAmerica.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Juicy Drop America</h3>
          <p>Unidad o paquete con diferentes sabores a elección.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          class="ArticleMain3"
          src="../../../src/assets/img/PaletasDulceslargasAmerica.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Paletas Dulces largas America</h3>
          <p>
            Paquete completo con distintos sabores.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
}

export default CarouselMain;
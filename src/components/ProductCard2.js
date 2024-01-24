import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  Button,
  Card,
  CardBody,
  CardLink,
  CardText,
  CardTitle,
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../store/actions/productActions";

const generateImages = () => [
  {
    src: `https://picsum.photos/id/${Math.round(Math.random() * 1000)}/500/400`,
    altText: "Image 1",
    caption: "Image 1",
    key: 1,
  },
  {
    src: `https://picsum.photos/id/${Math.round(Math.random() * 1000)}/500/400`,
    altText: "Image 2",
    caption: "Image 2",
    key: 2,
  },
  {
    src: `https://picsum.photos/id/${Math.round(Math.random() * 1000)}/500/400`,
    altText: "Image 3",
    caption: "Image 3",
    key: 3,
  },
];

const ProductCard2 = ({ product }) => {
  const history = useHistory();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();

  const goProductDetail = () => {
    // todo: ürün detay sayfasına git
    history.push(`/products/detail/${product.id}`);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const deleteProduct = (pId) => {
    dispatch(deleteProductAction(pId));
  };

  const slides = images.map((item) => {
    return (
      <CarouselItem key={item.src} slide={false}>
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={product.name}
        />
      </CarouselItem>
    );
  });

  useEffect(() => {
    setImages(generateImages());
  }, []);

  return (
    <Card className="shadow-sm">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        pause={"hover"}
        ride="false"
        interval={false}
      >
        <CarouselIndicators
          items={images}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <CardBody>
        <CardTitle tag="h5">{product.name}</CardTitle>
        <CardText>{product.description}</CardText>
        <CardText>Renk: {product.color}</CardText>
        <CardText>Fiyat: {product.price} TL</CardText>
      </CardBody>
      <CardBody className="d-flex flex-column gap-1 flex-grow-0">
        <Button size="sm" color="primary" onClick={goProductDetail}>
          <i className="fa-solid fa-magnifying-glass me-2"></i>
          İncele
        </Button>
        <Link
          className="btn btn-primary btn-sm"
          to={`/products/edit/${product.id}`}
        >
          <i className="fa-solid fa-pen me-2"></i>
          Düzenle
        </Link>
        <button
          onClick={() => deleteProduct(product.id)}
          className="btn btn-danger  btn-sm"
        >
          <i className="fa-solid fa-trash me-2"></i>
          Sil
        </button>
      </CardBody>
    </Card>
  );
};

export default ProductCard2;

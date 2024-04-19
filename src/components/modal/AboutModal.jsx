import "./Modal.css"

import sliderImage1 from "../../assets/slider/thumbnail_sl4.jpg";
import sliderImage2 from "../../assets/slider/thumbnail_sl3.jpg";
import sliderImage3 from "../../assets/slider/thumbnail_sl2.jpg";
import sliderImage4 from "../../assets/slider/thumbnail_sl1.jpg";

import { useEffect, useState } from "react";

const AboutModal = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        sliderImage1,
        sliderImage2,
        sliderImage3,
        sliderImage4,
      ];

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 4000);
      
        return () => clearInterval(interval);
      }, [currentSlide, images.length]);

    return (
        <div className="modal-window">
            <div className="modal-content">
                <img
                    src="https://cdn-icons-png.flaticon.com/128/130/130882.png"
                    alt="back-icon"
                    className="back-icon"
                    onClick={() => window.location.reload()}
                />

                <div className="about-title">
                    <h1>O szkołach</h1>
                </div>

                <div className="about-slider">
                    {images.map((image, index) => (
                        <img
                        key={index}
                        src={image}
                        alt={`slide-${index}`}
                        className={index === currentSlide ? 'slide active' : 'slide'}
                        />
                    ))}
                </div>
                
                <div className="about-text">
                    <p>Szkoła mieści się przy ulicy Kołobrzeskiej 9. Położona jest w parku, z dala od ruchliwych ulic. Szczelne ogrodzenie oraz system monitoringu składający się z 80 kamer gwarantuje bezpieczeństwo młodzieży. Baza sportowa to kilka dużych boisk ze sztuczną nawierzchnią, boisko trawiaste, 3 sale gimnastyczne oraz piękne korty tenisowe – wszystko otoczone zielenią. Lokalizacja szkoły to centrum miasta – dojazd zatem jest łatwy</p>
                    <p>W ciągu kilku ostatnich lat zaszły ogromne zmiany zarówno w wyglądzie, jak i wyposażeniu szkoły. Jest ona obecnie obiektem najnowocześniejszym, bardzo dobrze wyposażonym w najnowsze pomoce dydaktyczne. Wszechobecne komputery, projektory, 86 calowe ekrany dotykowe, sieć internetowa, serwery i dziennik elektroniczny z powodzeniem wspomagają pracę i naukę.</p>
                    <p>W eleganckiej stołówce szkolnej codziennie spożywa posiłki ponad 550 uczniów. W szkole działa Szkolny Ośrodek Kariery, w którym doradca zawodowy pomaga podjąć decyzję dotyczącą dalszego kształcenia. Szkolne Centrum Psychologiczno-Pedagogiczne, klub sportowy, szkoła nauki jazdy uzupełniają ofertę szkoły, zaspokajają pozalekcyjne potrzeby naszych uczniów.</p>
                    <p>Powodem do dumy są nowoczesne pracownie i sale lekcyjne. Oddany do dyspozycji sprzęt należy do najnowocześniejszego na rynku komputerowym, cieszy nauczycieli i uczniów.</p>
                    <p>We współczesnym świecie dobrze wykształcony młody człowiek musi znać języki obce. Szkoła gwarantuje profesjonalne kształcenie kompetencji językowych. Wszyscy uczą się j. angielskiego i drugiego języka obcego do wyboru (niemiecki, hiszpański, francuski). Wymiany uczniów, zagraniczne obozy językowe, udział w Erasmus+ otwierają naszym uczniom drogę na świat.</p>
                    <p className="last-text">Jesteśmy po to, by wprowadzić naszych uczniów w świat wiedzy i dobrze przygotować ich do życia, aby mogli odnieść swój pierwszy życiowy SUKCES!</p>
                </div>
            </div>
        </div>
    );
}

export default AboutModal;
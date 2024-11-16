import Image from "next/image";
import Slider from "react-slick";
import client1 from "../images/clientsLogos/client1.png";
import client2 from "../images/clientsLogos/client2.png";
import client3 from "../images/clientsLogos/client3.png";
import client4 from "../images/clientsLogos/client4.png";
import client5 from "../images/clientsLogos/client5.png";
import client6 from "../images/clientsLogos/client6.png";
import client7 from "../images/clientsLogos/client7.png";
import client8 from "../images/clientsLogos/client8.png";
import client9 from "../images/clientsLogos/client9.png";
import client10 from "../images/clientsLogos/client10.png";
import client11 from "../images/clientsLogos/client11.png";





const ClientsSlider = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        arrows: false,
        swipe: false,
        slidesToShow: 8,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
    };
    return (
        
            <section className="py-20">
                <div>
                    <h2 className="text-5xl uppercase font-extrabold text-center mb-10">Our <span className="bg-blue-950 px-2 text-white">Clients</span></h2>
                </div>
                <Slider className="pt-10" {...settings}>
                    <div>
                        <Image src={client1} alt="" />
                    </div>
                    <div>
                        <Image src={client2} alt="" />
                    </div>
                    <div>
                        <Image src={client3} alt="" />
                    </div>
                    <div>
                        <Image src={client4} alt="" />
                    </div>
                    <div>
                        <Image src={client5} alt="" />
                    </div>
                    <div>
                        <Image src={client6} alt="" />
                    </div>
                    <div>
                        <Image src={client7} alt="" />
                    </div>
                    <div>
                        <Image src={client8} alt="" />
                    </div>
                    <div>
                        <Image src={client9} alt="" />
                    </div>
                    <div>
                        <Image src={client10} alt="" />
                    </div>
                    <div>
                        <Image src={client11} alt="" />
                    </div>
                </Slider>
            </section>
    
    )
}

export default ClientsSlider

import Image from "next/image";
import Link from "next/link";
import designElement from "../images/designElement.png";

const CTA = () => {
  return (
    
      <section className="py-20 relative">
        <div className="container-custom">
          <span>
            <Image
              className="absolute  w-1/4 -left-60 opacity-20  opacityAnim"
              src={designElement}
              alt="desingElement"
            />
          </span>
          <div className="text-center">
            <h2 className="text-5xl uppercase font-extrabold text-center py-5">
              How can we help you?
            </h2>
            <p>
              Are you ready to push boundaries and explore new frontiers of
              innovation?
            </p>
            <Link
              className="table mt-10 mx-auto border-2 p-3 border-blue-950 rounded-full hover:bg-blue-950 transition-all hover:text-white "
              href=""
            >
              Connect with us
            </Link>
          </div>
          <Image
            className="absolute  w-3/11 -right-32 opacity-20 top-10 opacityAnim"
            src={designElement}
            alt="desingElement"
          />
        </div>
        
      </section>
    
  );
};

export default CTA;

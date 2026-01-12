import logo from "../../public/ayyoub.png";
import Image from "next/image"

const HeroImage = ()  => {
    return(
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary shadow-2xl ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-300 hover:scale-105">
            <Image
              src={logo}
              alt="Profile picture"
              loading="eager"
              priority
              fill
              className="object-cover"
            />
          </div>
        </div>
    )
}
export default HeroImage
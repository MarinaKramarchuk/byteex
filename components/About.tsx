import Image from "next/image";
import Button from "./ui/Button";

export default function About() {
  return (
    <section className="w-full bg-[#F0EEEF] pt-10 pb-10 md:pt-20 md:pb-14">
      <div className="max-w-7xl mx-auto w-full min-h-150 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 lg:gap-0 items-center px-5 md:px-10 pt-4 md:pt-8 lg:pl-24 lg:pr-8">
        <div className="mr-0 md:mr-15">
          <div className="flex-1 max-w-6xl mx-auto px-5 md:hidden">
            <h2 className="w-50% mb-4  text-center font-normal text-[26px] leading-8  tracking-[0.04em] text-[#01005B]">
              Be your best self.
            </h2>
          </div>
          <div className="relative max-w-105 mx-auto pt-6 pb-6 md:pt-14 md:pb-14 md:pr-5 md:pl-5">
            <Image
              src="/girl1.webp"
              alt="Girl Photo"
              width={101}
              height={107}
              className="absolute z-10 -left-1.5 top-0 md:-left-3 w-25 h-30 md:w-40 md:h-42 object-cover border-4 border-[#F0EEEF]"
            />
            <Image
              src="/girl2.webp"
              alt="Girl Photo"
              width={238}
              height={310}
              className="w-60 h-78 md:w-95 md:h-142 object-cover mx-auto shadow-[0px_3px_10px_1px_#00000014]"
            />
            <Image
              src="/girl4.webp"
              alt="Girl Photo"
              width={110}
              height={111}
              className="absolute z-10 right-0 bottom-0 w-27 h-28 md:w-32 md:h-47 object-cover border-4 border-[#F0EEEF]"
            />
          </div>
        </div>
        <div>
          <div className="flex-1 max-w-6xl mx-auto px-10 hidden md:block">
            <h2 className="w-50% mb-6  text-left font-normal text-[32px] leading-11.25 tracking-[0.04em] text-[#01005B]">
              Be your best self.
            </h2>
          </div>
          <p className="text-[#6C6C6C] text-left font-normal text-[15px] leading-6 tracking-[0.03em] mb-6">
            Hi! My name’s [Insert Name], and I founded [Insert] in ____.
          </p>
          <p className="text-[#6C6C6C] text-left font-normal text-[15px] leading-6 tracking-[0.03em] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis finibus consequat.
          </p>
          <p className="text-[#6C6C6C] text-left font-normal text-[15px] leading-6 tracking-[0.03em] mb-6">
            Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec
            placerat volutpat ligula, ac consectetur felis varius non. Aliquam a
            nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu
            congue, faucibus libero nec, placerat ligula.{" "}
          </p>
          <p className="text-[#6C6C6C] text-left font-normal text-[15px] leading-6 tracking-[0.03em] mb-6">
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.{" "}
          </p>
          <p className="text-[#6C6C6C] text-left font-normal text-[15px] leading-6 tracking-[0.03em] mb-6">
            Fusce non ante velit. Sed auctor odio eu semper molestie. Nam
            mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus,
            ac convallis urna massa at nibh.{" "}
          </p>
          <p className="text-[#6C6C6C] text-left font-normal text-[15px] leading-6 tracking-[0.03em] mb-6">
            Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod
            leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in
            sapien.{" "}
          </p>
          <p className="text-[#6C6C6C] text-left font-normal text-[15px] leading-6 tracking-[0.03em] mb-6">
            Cras mattis varius mollis.{" "}
          </p>{" "}
          <p className="text-[#6C6C6C] text-left font-normal text-[15px] leading-6 tracking-[0.03em] mb-6"></p>
          <Button className="hidden md:block px-12 py-3 mb-2">
            Customize Your Outfit
          </Button>
        </div>
      </div>
    </section>
  );
}

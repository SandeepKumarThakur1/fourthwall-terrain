import Image from "next/image";

export default function TimelineCard({ item, index }) {
  const top = index % 2 === 0;

  return (
    <div
      className={`relative w-[360px] shrink-0 ${
        top ? "mt-0" : "mt-[260px]"
      }`}
    >
      {/* Image */}
      <div className="overflow-hidden rounded-xl">
        <Image
          src={item.image}
          alt={item.title}
          width={360}
          height={450}
          className="h-[430px] w-full object-cover"
        />
      </div>

      {/* Number */}
      <div
        className={`absolute ${
          top ? "bottom-[-90px]" : "top-[-90px]"
        } left-1/2 -translate-x-1/2`}
      >
        <div className="flex flex-col items-center">
          <div className="h-5 w-5 rounded-full bg-lime-400"></div>

          <div className="my-2 h-14 w-[2px] bg-lime-400"></div>

          <span className="text-[#6A4A2A] text-xl font-medium">
            {item.id}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-6 text-center text-4xl font-subheading text-[#6A4A2A]">
        {item.title}
      </h3>
    </div>
  );
}
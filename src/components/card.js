import Image from "next/image";
function StrengthCard({ title, description, image }) {
  return (
    <div className="flex w-80 flex-col rounded-xl bg-white text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
          fill
        />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block text-xl font-semibold text-blue-gray-900">
          {title}
        </h5>
        <p className="block text-base font-light leading-relaxed text-inherit">
          {description}
        </p>
      </div>
    </div>
  );
}

export default StrengthCard;

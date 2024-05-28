import Image from "next/image";

export const Input = ({
  label,
  placeholder
}: {
  label: string;
  placeholder: string;
}) => {
  return (
    <div className="flex flex-col justify-between mb-3">
      <label className="text-xs mb-1 text-lf-25 font-thin">{label}</label>
      <div className="relative">
        <div className="absolute left-3 top-3 text-gray-400 w-4 h-4">
          <Image
            src={"/inputIcon.png"}
            alt={"user"}
            width={0}
            height={0}
            sizes="100vw"
            className="rounded w-full h-full object-cover"
          />
        </div>
        <input
          className="h-10 pl-8 rounded-md p-2 border border-lf-200 bg-lf-300 text-sm w-full"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

import Image from "next/image";

export const SearchInput = ({
  label,
  placeholder,
  endIcon
}: {
  label: string;
  placeholder: string;
  endIcon?: boolean;
}) => {
  return (
    <div className="flex flex-col justify-between mb-3">
      <label className="text-xs mb-1 text-white font-thin">{label}</label>
      <div className="relative">
        <div className="absolute left-3 top-4 text-gray-400 w-4 h-4">
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
          className="h-12 pl-8 rounded-md p-2 border border-lf-300  bg-[#223544] text-sm w-full"
          placeholder={placeholder}
        />
        {endIcon && (
          <div className="absolute right-3 top-5 text-gray-400 w-3 h-1">
            <Image
              src={"/input-end.png"}
              alt={"user"}
              width={0}
              height={0}
              sizes="100vw"
              className="rounded w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

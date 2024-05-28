export const Button = ({
  label,
  width,
  bgColor
}: {
  label: string;
  width?: string;
  bgColor?: string;
}) => {
  const customWidth = width ? width : "w-36";
  const backGroundColor = bgColor ? bgColor : "bg-red-100";
  return (
    <button
      className={`${backGroundColor}  py-2 rounded-lg ${customWidth} text-lf-500 font-medium`}
    >
      {label}
    </button>
  );
};

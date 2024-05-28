export const Button = ({
  label,
  width,
  height,
  bgColor,
  color
}: {
  label: string;
  width?: string;
  height?: string;
  bgColor?: string;
  color?: string;
}) => {
  const customWidth = width ? width : "w-36";
  const customHeight = height ? height : "";
  const backGroundColor = bgColor ? bgColor : "bg-red-100";
  const textColor = color ? color : "text-lf-500";
  return (
    <button
      className={`${backGroundColor}  py-2 rounded-lg ${customWidth} ${customHeight} ${textColor}  font-medium`}
    >
      {label}
    </button>
  );
};

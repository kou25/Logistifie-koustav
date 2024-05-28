export const Analytics = () => {
  const analiticsData = [
    { id: 1, name: "Successful Bookings", value: "8000+" },
    { id: 2, name: "Luxury Cars", value: "5000+" },
    { id: 3, name: "Trained Chauffeurs", value: "200+" },
    { id: 4, name: "Business Partners", value: "150+" }
  ];
  return (
    <section className="bg-lf-400 h-40 py-4 px-28 flex justify-between items-center text-lf-25">
      {analiticsData.map((data) => (
        <div
          key={data.id}
          className={`flex flex-col w-2/12 ${
            data.id !== analiticsData.length
              ? "border-r-[0.5px] border-lf-300 pr-10"
              : ""
          }`}
        >
          <p className="text-xl font-bold leading-4">{data.value}</p>
          <p className="text-sm font-thin">{data.name}</p>
        </div>
      ))}
    </section>
  );
};

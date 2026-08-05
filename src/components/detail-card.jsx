import React from "react";

const DetailCard = ({ icon, title, value }) => {
  return (
    <div
      className="
    group
    rounded-2xl
    bg-white/10
    border
    border-white/20

    p-4
    h-36 lg:h-40

    transition-all
    duration-300

    hover:bg-white/20
hover:border-white/40
hover:shadow-2xl
hover:-translate-y-1
  "
    >
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <div
          className="
    transition-transform
    duration-300
    group-hover:scale-110
  "
        >
          {icon}
        </div>
        <p className="text-sm text-white/70 font-medium tracking-wide">
          {title}
        </p>
        <p className="text-2xl lg:text-3xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default DetailCard;

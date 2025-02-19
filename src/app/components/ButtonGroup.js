import React from "react";

const ButtonGroup = ({ buttons }) => {
  return (
    <section className="mt-10 flex flex-col md:flex-row md:gap-4">
      {buttons.map(({ href, label }, index) => (
        <a
          key={index}
          href={href}
          className="mt-6 px-6 py-3 text-lg font-semibold text-gray-900 bg-green-400 rounded-lg hover:bg-green-500 transition"
        >
          {label}
        </a>
      ))}
    </section>
  );
};

export default ButtonGroup;

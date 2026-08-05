import { LoaderIcon } from "lucide-react";
import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ city, setCity, searchCity, loading }) => {
  return (
    <div className="w-full max-w-2xl px-4 mt-4">
      <div
        className="
          flex
          flex-col
          sm:flex-row
          items-center
          gap-3
          bg-white/20
          backdrop-blur-xl
          rounded-3xl
          shadow-xl
          py-4
          px-5
          border
          border-white/20
          transition-all
          duration-300
          focus-within:ring-2
          focus-within:ring-white/40
        "
      >
        {/* Input + Search Icon */}
        <div className="group flex items-center w-full flex-1">
          <FaSearch
            className="
              w-5
              h-5
              text-white
              transition-transform
              duration-300
              group-focus-within:scale-110
            "
          />

          <input
            type="text"
            placeholder="Search any city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && searchCity()}
            className="
              w-full
              bg-transparent
              px-3
              py-2
              outline-none
              text-white
              caret-white
              placeholder:text-white/70
            "
          />
        </div>

        {/* Button */}
        <button
          onClick={searchCity}
          disabled={loading}
          className="
            w-full
            sm:w-auto
            px-6
            py-2
            rounded-full
            bg-white
            text-blue-600
            font-semibold
            cursor-pointer

            transition-all
            duration-300

            hover:bg-gray-100
            hover:scale-105
            hover:shadow-lg

            active:scale-95

            disabled:opacity-50
            disabled:cursor-not-allowed
            disabled:hover:scale-100
            disabled:hover:shadow-none
          "
        >
          {loading ? (
            <LoaderIcon className="w-5 h-5 animate-spin" />
          ) : (
            "Search"
          )}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
import React from "react";

function Card({ username, btnText = "visit me" }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://images.pexels.com/photos/28244516/pexels-photo-28244516/free-photo-of-mesmerizing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Image description"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <h2 className="text-white">{username}</h2>
        </div>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {btnText || "visit me"}->
        </button>
        <p className="text-gray-700 text-base"></p>
      </div>
      <div className="px-6 pt-4 pb-2 mb-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2">
          #tag2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #tag3
        </span>
      </div>
    </div>
  );
}

export default Card;

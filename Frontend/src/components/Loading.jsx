import React from "react";

function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-800">
      <div className="flex flex-col gap-4 w-full max-w-md p-4">
        {/* Simulating incoming chat bubbles */}
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-gray-500 rounded-full animate-pulse"></div>
          <div className="flex flex-col gap-2">
            <div className="h-4 w-36 bg-gray-400 rounded-lg animate-pulse"></div>
            <div className="h-4 w-24 bg-gray-400 rounded-lg animate-pulse"></div>
          </div>
        </div>
        {/* Simulating outgoing chat bubbles */}
        <div className="flex justify-end gap-2">
          <div className="flex flex-col gap-2 items-end">
            <div className="h-4 w-28 bg-gray-400 rounded-lg animate-pulse"></div>
            <div className="h-4 w-20 bg-gray-400 rounded-lg animate-pulse"></div>
          </div>
          <div className="h-10 w-10 bg-gray-500 rounded-full animate-pulse"></div>
        </div>
        {/* Simulating another incoming chat */}
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-gray-500 rounded-full animate-pulse"></div>
          <div className="flex flex-col gap-2">
            <div className="h-4 w-32 bg-gray-400 rounded-lg animate-pulse"></div>
            <div className="h-4 w-16 bg-gray-400 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading  ;

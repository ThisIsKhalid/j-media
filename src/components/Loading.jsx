import React from 'react';

const Loading = () => {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-red-500 flex items-center gap-1">
          <h1 className="text-4xl">L</h1>
          <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-red-600"></div>
          <h1 className="text-4xl">ADING....</h1>
        </div>
      </div>
    );
};

export default Loading;
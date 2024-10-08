import React from 'react';

const Repo = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Parent div that holds two columns */}
      <div className="flex flex-col md:flex-row">
        {/* Column 1: col-3 on larger screens, full width on mobile */}
        <div className="md:w-3/12 w-full bg-gray-200 p-4">
          <p>Column 1 (col-3 on larger screens, full width on mobile)</p>
        </div>

        {/* Column 2: col-9 on larger screens, full width on mobile */}
        <div className="md:w-9/12 w-full bg-gray-100 p-4">
          <p>Column 2 (col-9 on larger screens, full width on mobile)</p>

          {/* Inner Column: Full width inside Column 2 */}
          <div className="w-full bg-gray-300 p-4 mt-4">
            <p>Inner Column (col-12 inside col-9)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repo;

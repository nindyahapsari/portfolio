import React from "react";

function BioFeed() {
  return (
    <>
      <div className="bg-white rounded-lg max-w-md mx-auto">
        <div className="p-4 border-b">
          <h2 className="text-2xl font-semibold">Employment History</h2>
        </div>
        <div className="p-4">
          <div className="flex items-center space-x-4">
            <img
              className="h-10 w-10 rounded-full"
              src="/images/avatar/small/jenny.jpg"
              alt="Jenny"
            />
            <div>
              <div className="text-sm text-gray-500">1 day ago</div>
              <div>
                You added{" "}
                <a href="#" className="text-blue-500">
                  Jenny Hess
                </a>{" "}
                to your{" "}
                <a href="#" className="text-blue-500">
                  coworker
                </a>{" "}
                group.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BioFeed;

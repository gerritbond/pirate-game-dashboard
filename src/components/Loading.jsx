import { PropagateLoader } from "react-spinners";

export const Loading = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <div className="flex-1">
        <div className="flex justify-center items-center h-full">
          <div className="flex-0">
            <PropagateLoader
              color="rgb(234 179 8 / var(--tw-bg-opacity))"
              size={10}
              speedMultiplier={0.6}
            />
          </div>
        </div>
      </div>
    );
  }

  return children;
};

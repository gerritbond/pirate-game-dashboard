import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

export const PageableCardsGrid = ({
  entities,
  itemLinkPath,
  centerButton = {},
  optionalFunc = undefined,
  optionalFuncIcon = <></>,
  pageSize = 8,
  itemDisplayProperty = "name",
}) => {
  const [chunks, filler] = useMemo(() => {
    let chunks = [];
    for (let i = 0; i < entities.length; i += pageSize) {
      chunks.push(entities.slice(i, i + 8));
    }

    let filler = [];
    if (chunks.length > 0) {
      for (let i = 0; i < pageSize - chunks[chunks.length - 1].length; i++) {
        filler.push(i);
      }
    }

    return [chunks, filler];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="grid grid-rows-8">
      <div className="relative grid grid-cols-4 row-span-7 mx-3">
        {chunks[currentPage].map((entity) => (
          <div
            className="relative overflow-hidden grid grid-rows-8 mx-2 my-2 border-yellow-500 border-2"
            key={entity.id}
          >
            <div className="grid row-span-7 relative overflow-hidden border-yellow-500 border-b-2">
              <img
                className="absolute object-contain h-fit w-fit"
                src={entity.imageUrl}
                alt={entity[itemDisplayProperty] + " image"}
              />
            </div>
            <div className="grid row-span-1 grid-cols-5 bg-yellow-500 justify-center items-center font-bold">
              <div className="grid pl-2">{entity.secondaryText}</div>
              <Link
                className="grid col-span-3 text-center"
                to={`${itemLinkPath}/${entity.id}`}
              >
                {entity[itemDisplayProperty]}
              </Link>
              {optionalFunc !== undefined ? (
                <button
                  className="w-full items-right"
                  onClick={() => optionalFunc(entity.id)}
                >
                  {optionalFuncIcon}
                </button>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        ))}
        {chunks[currentPage].length >= pageSize ? (
          <></>
        ) : (
          filler.map((f) => (
            <div
              className="relative overflow-hidden grid grid-rows-8 mx-2 my-2 border-yellow-500 border-2 opacity-30"
              key={"sil-" + f}
            >
              <div className="grid row-span-7 relative overflow-hidden border-yellow-500 border-b-2">
                <img
                  className="absolute object-contain h-fit w-fit"
                  src="\assets\scifi-silhouette.jpg"
                  alt={"Non-existant Character"}
                />
              </div>
              <div className="grid row-span-1 grid-cols-5 bg-yellow-500 justify-center items-center font-bold">
                <div className="grid pl-2"></div>
                <div className="grid col-span-3 text-center">Nameless</div>
                <div className="w-full "></div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="grid grid-cols-4 row-span-1 items-center">
        <button
          className="border-2 border-yellow-500 text-yellow-500 hover:text-gray-950 hover:bg-yellow-500 font-bold bg-gray-950 ml-5 mb-5 p-4"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage <= 0}
        >
          Previous
        </button>
        {centerButton?.name ? (
          <Link
            to={centerButton.path}
            className="col-span-2 border-2 text-center p-4 border-yellow-500 text-yellow-500 hover:text-gray-950 hover:bg-yellow-500 font-bold bg-gray-950 mx-3.5 mb-5 "
          >
            {centerButton.name}
          </Link>
        ) : (
          <div className="col-span-2 p-4 mx-3.5 mb-5"></div>
        )}
        <button
          className="border-2 border-yellow-500 text-yellow-500 hover:text-gray-950 hover:bg-yellow-500 font-bold bg-gray-950 mr-5 mb-5 p-4"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage >= chunks.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

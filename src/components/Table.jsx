import React from "react";

export const Table = ({
  headers,
  data,
  sideLabel,
  caption,
  emptyComponent,
}) => {
  if (data.length === 0) {
    return emptyComponent;
  }

  return (
    <div className="grid grid-cols-9">
      <div className="grid text-yellow-500 font-extrabold col-span-1 items-center text-center">
        <span className="text-2xl -rotate-90">{sideLabel}</span>
      </div>
      <table
        className={
          "table col-span-8 text-sm text-left m-2 border-l-2 border-yellow-500"
        }
      >
        <thead className="table-header-group text-xs uppercase bg-yellow-800 bg-opacity-75 text-yellow-500 border-t-1 border-yellow-500 ">
          <tr className="table-row">
            {headers.map((header) => (
              <th scope="col" className="px-6 py-3 " key={header.key}>
                {header.display}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table-row-group text-yellow-500">
          {data.map((row) => (
            <tr
              key={row.id}
              className="odd:bg-gray-800 even:bg-gray-900 bg-opacity-25 table-row w-full"
            >
              {headers.map((header) => (
                <td key={header.key} className="px-6 py-3 table-cell">
                  {row[header.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <caption className="text-md font-mono font-bold text-yellow-500 caption-bottom">
          {caption}
        </caption>
      </table>
    </div>
  );
};

export const TableWithAction = ({
  headers,
  data,
  sideLabel,
  caption,
  emptyComponent,
  actionName,
  actionComponent,
}) => {
  if (data.length === 0) {
    return emptyComponent;
  }

  return (
    <div className="grid grid-cols-9">
      <div className="grid text-yellow-500 font-extrabold col-span-1 items-center text-center">
        <span className="text-2xl -rotate-90">{sideLabel}</span>
      </div>
      <table
        className={
          "table col-span-8 text-sm text-left m-2 border-l-2 border-yellow-500"
        }
      >
        <thead className="table-header-group text-xs uppercase bg-yellow-800 bg-opacity-75 text-yellow-500 border-t-1 border-yellow-500 ">
          <tr className="table-row">
            {headers.map((header) => (
              <th scope="col" className="px-6 py-3 " key={header.key}>
                {header.display}
              </th>
            ))}
            <th scope="col" className="px-6 py-3 text-center" key="actions">
              {actionName}
            </th>
          </tr>
        </thead>
        <tbody className="table-row-group text-yellow-500">
          {data.map((row) => (
            <tr
              key={row.id}
              className="odd:bg-gray-800 even:bg-gray-900 bg-opacity-25 table-row w-full"
            >
              {headers.map((header) => (
                <td key={header.key} className="px-6 py-3 table-cell">
                  {row[header.key]}
                </td>
              ))}
              <td className="px-6 py-5 table-cell text-center">
                {actionComponent(row)}
              </td>
            </tr>
          ))}
        </tbody>
        <caption className="text-md font-mono font-bold text-yellow-500 caption-bottom">
          {caption}
        </caption>
      </table>
    </div>
  );
};

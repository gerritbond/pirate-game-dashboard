import { useState } from "react";
import { crew as crewDetails } from "../../fixtures/sample_crew";
import { hirable as recruits } from "../../fixtures/sample_hirable";
import { formatCurrency } from "@utils/util";

export const QuartermasterSummary = ({ shipDetails }) => {
  return (
    <div className="grid grid-cols-3">
      <div className="bg-gray-900 dark:text-gray-400 p-4 m-1">
        <p className={"p-2 text-center text-2xl"}>{shipDetails.captain}</p>
        <p className="text-l font-bold text-center">Captain</p>
      </div>
      <div className="bg-gray-900 dark:text-gray-400 p-4 m-1">
        <p className="p-2 text-center text-2xl ">
          {shipDetails.crew?.current} / {shipDetails.crew?.maximum}
        </p>
        <p className="text-l font-bold text-center">Crew Compliment</p>
      </div>
      <div className="bg-gray-900 dark:text-gray-400 p-4 m-1">
        <p className="p-2 text-center text-2xl text-red-700">
          {formatCurrency(shipDetails.bounty)}
        </p>
        <p className="text-l font-bold text-center">Bounty on Ship</p>
      </div>
    </div>
  );
};

const QuarterMasterPanelModes = {
  Roster: "roster",
  Recruitment: "recruitment",
};

const QMPanelSwitch = ({ mode }) => {
  const [quartermasterPanelMode, setQuarterMasterPanelMode] = mode;

  return (
    <div className="text-right">
      <button
        className={
          "px-2 py-1" +
          (quartermasterPanelMode === QuarterMasterPanelModes.Recruitment
            ? " bg-green-600 text-white"
            : " bg-gray-800")
        }
        onClick={() =>
          setQuarterMasterPanelMode(QuarterMasterPanelModes.Recruitment)
        }
      >
        Recruitment
      </button>
      <button
        className={
          "px-2 py-1" +
          (quartermasterPanelMode === QuarterMasterPanelModes.Roster
            ? " bg-green-600 text-white"
            : " bg-gray-800")
        }
        onClick={() =>
          setQuarterMasterPanelMode(QuarterMasterPanelModes.Roster)
        }
      >
        Roster
      </button>
    </div>
  );
};

export const QuartermasterPanel = ({ shipDetails }) => {
  // Add a call to get the crew here
  const crew = crewDetails;

  const [, setDisplayTransferModal] = useState(false);

  const [quartermasterPanelMode, setQuarterMasterPanelMode] = useState(
    QuarterMasterPanelModes.Roster
  );

  const hireRecruit = (recruitId) => {
    console.log(`Hiring recruit ${recruitId}`);
  };

  return (
    <div>
      <QuartermasterSummary shipDetails={shipDetails} />

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-3">
        {quartermasterPanelMode === QuarterMasterPanelModes.Roster ? (
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Payrate
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Skills
            </th>
            <th scope="col" className="px-6 py-3">
              <QMPanelSwitch
                mode={[quartermasterPanelMode, setQuarterMasterPanelMode]}
              />
            </th>
          </thead>
        ) : (
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Experience
            </th>
            <th scope="col" className="px-6 py-3">
              Payrate
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Skills
            </th>
            <th scope="col" className="px-6 py-3">
              <QMPanelSwitch
                mode={[quartermasterPanelMode, setQuarterMasterPanelMode]}
              />
            </th>
          </thead>
        )}
        {quartermasterPanelMode === QuarterMasterPanelModes.Roster ? (
          <tbody>
            {crew
              .sort((crewA, crewB) =>
                crewA.name.last.localeCompare(crewB.name.last)
              )
              .map((mate) => (
                <tr
                  key={mate.id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th scope="row" className="px-6 py-3">
                    {mate.role.title}
                  </th>
                  <td className="px-6 py-3">{formatCurrency(mate.payrate)}</td>

                  <td className="px-6 py-3">{`${mate.name.first} ${
                    mate.name.nickname ? `"${mate.name.nickname}" ` : ""
                  }${mate.name.last}`}</td>
                  <td className="px-6 py-3">{mate.skills.join(", ")}</td>
                  <td className="px-6 py-3 text-right">
                    <button
                      className="text-white font-semibold font-mono bg-green-600 p-1 px-2 hover:bg-green-800"
                      onClick={() => setDisplayTransferModal(true)}
                    >
                      Transfer
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        ) : recruits.length === 0 ? (
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <td colSpan="5" className="text-center px-6 py-3 font-mono">
                Sorry, no one here wants to join your ship
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {recruits
              .sort((recruitA, recruitB) =>
                recruitA.name.last.localeCompare(recruitB.name.last)
              )
              .map((recruit) => (
                <tr
                  key={recruit.id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th scope="row" className="px-6 py-3">
                    {recruit.role.title}
                  </th>
                  <td className="px-6 py-3">{recruit.role.experience}</td>
                  <td className="px-6 py-3">
                    {formatCurrency(recruit.payrate)}
                  </td>

                  <td className="px-6 py-3">{`${recruit.name.last}, ${recruit.name.first} `}</td>
                  <td className="px-6 py-3">{recruit.skills.join(", ")}</td>
                  <td className="px-6 py-3 text-right">
                    <button
                      className="text-white font-semibold font-mono bg-green-600 p-1 px-2 hover:bg-green-800"
                      onClick={() => hireRecruit(recruit.id)}
                    >
                      Recruit
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default QuartermasterPanel;

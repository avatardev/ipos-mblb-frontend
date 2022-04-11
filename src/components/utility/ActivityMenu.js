import { useState } from "react";

import { BiSearchAlt2 } from "react-icons/bi";

const ActivityMenu = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const [firstDate, setFirstDate] = useState(startDate);
  const [secondDate, setSecondDate] = useState(endDate);

  const handleSearchingDate = () => {
    setStartDate(firstDate);
    setEndDate(secondDate);
  };

  return (
    <div className="flex flex-wrap gap-3 justify-end px-3 items-center ">
      <div className="flex gap-5 flex-wrap">
        <label htmlFor="startdate">Tanggal Mulai</label>
        <input
          value={firstDate}
          onChange={(e) => setFirstDate(e.target.value)}
          className="border py-1 px-2 rounded border-gray focus:border-primary"
          type="date"
        />
        <label htmlFor="startdate">Tanggal Selesai</label>
        <input
          value={secondDate}
          onChange={(e) => setSecondDate(e.target.value)}
          className="border py-1 px-2 rounded border-gray focus:border-primary"
          type="date"
        />
        <button
          className="bg-button text-white px-3 text-md rounded font-semibold"
          onClick={handleSearchingDate}
        >
          <BiSearchAlt2 />
        </button>
      </div>
    </div>
  );
};
 
export default ActivityMenu;
import { useState } from "react";

import {AiOutlineFileText} from "react-icons/ai"
import { BiSearchAlt2 } from "react-icons/bi";

const ReportMenu = ({
  handleDownloadFile,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  keyword,
  setKeyword
}) => {
  const [firstDate, setFirstDate] = useState(startDate);
  const [secondDate, setSecondDate] = useState(endDate);

  const handleSearchingDate = () => {
    setStartDate(firstDate);
    setEndDate(secondDate);
  };

  return (
    <div className="flex flex-wrap gap-3 justify-between px-3 items-center ">
      <div>
        <button
          className="bg-success text-white py-2 px-2 rounded font-semibold flex items-center gap-2"
          onClick={handleDownloadFile}
        >
          Export to CSV <AiOutlineFileText />
        </button>
      </div>
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
        <label htmlFor="startdate">Search</label>
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border py-1 px-2 rounded border-gray focus:border-primary"
          type="text"
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
 
export default ReportMenu;
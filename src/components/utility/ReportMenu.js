import { useState } from "react";

import {AiOutlineFileText} from "react-icons/ai"

const ReportMenu = ({handleDownloadFile, startDate, setStartDate, endDate, setEndDate}) => {

    const [firstDate, setFirstDate] = useState(startDate);
    const [secondDate, setSecondDate] = useState(endDate);

    const handleSearchingDate = () => {
        setStartDate(firstDate);
        setEndDate(secondDate);
    }

    return ( 
        <div className="flex justify-between px-3 items-center h-12">
            <div>
                <button className="bg-active py-2 px-2 rounded font-semibold flex items-center gap-2" onClick={handleDownloadFile}>Export to CSV <AiOutlineFileText /></button>
            </div>
            <div className="flex gap-5">
                <label htmlFor="startdate">Tanggal Mulai</label>
                <input value={startDate} onChange={(e) => setFirstDate(e.target.value)} className="border" type="date" />
                <label htmlFor="startdate">Tanggal Selesai</label>
                <input value={endDate} onChange={(e) => setSecondDate(e.target.value)} className="border" type="date" />
                <button className="bg-button py-1 px-2 rounded font-semibold" onClick={handleSearchingDate}>Cari</button>
            </div>
        </div>
     );
}
 
export default ReportMenu;
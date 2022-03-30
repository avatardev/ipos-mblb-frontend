const ReportMenu = ({handleDownloadFile, startDate, setStartDate, endDate, setEndDate}) => {
    return ( 
        <div className="flex justify-between px-3 items-center h-12">
            <div>
                <button className="bg-active py-2 px-2 rounded font-semibold" onClick={handleDownloadFile}>Export to CSV</button>
            </div>
            <div className="flex gap-5">
                <label htmlFor="startdate">Tanggal Mulai</label>
                <input className="border" type="date" />
                <label htmlFor="startdate">Tanggal Selesai</label>
                <input className="border" type="date" />
                <button>Cari</button>
            </div>
        </div>
     );
}
 
export default ReportMenu;
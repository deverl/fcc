import React from "react";

const HamTable = ({ data }) => {
    const columns = [
        "Call Sign",
        "First Name",
        "Last Name",
        "Street Address",
        "City",
        "State",
        "ZIP",
        "Operator Class",
        "License Status",
        "FRN",
        "Region Code",
        "DMR ID",
    ];

    return (
        <div className="max-h-[500px] overflow-auto border rounded shadow">
            {/* Grid Header */}
            <div className="grid grid-cols-12 bg-gray-100 sticky top-0 z-10 border-b border-gray-300 text-sm font-semibold text-gray-700">
                {columns.map((col, idx) => (
                    <div key={idx} className="p-2 border-r last:border-r-0">
                        {col}
                    </div>
                ))}
            </div>

            {/* Grid Rows */}
            {data.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className="grid grid-cols-12 border-b border-gray-200 text-sm even:bg-gray-50"
                >
                    <div className="p-2 border-r">{row.call_sign}</div>
                    <div className="p-2 border-r">{row.first_name}</div>
                    <div className="p-2 border-r">{row.last_name}</div>
                    <div className="p-2 border-r">{row.street_address}</div>
                    <div className="p-2 border-r">{row.city}</div>
                    <div className="p-2 border-r">{row.state}</div>
                    <div className="p-2 border-r">{row.zip}</div>
                    <div className="p-2 border-r">{row.operator_class}</div>
                    <div className="p-2 border-r">{row.license_status}</div>
                    <div className="p-2 border-r">{row.frn}</div>
                    <div className="p-2 border-r">{row.region_code}</div>
                    <div className="p-2">{row.dmr_id || "-"}</div>
                </div>
            ))}
        </div>
    );
};

export default HamTable;

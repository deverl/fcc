import React from "react";

const HamTable = ({ data }) => {
    return (
        <div className="overflow-auto max-h-[500px] border rounded shadow">
            <table className="min-w-full table-auto border-collapse">
                <thead className="sticky top-0 bg-gray-100 text-sm font-semibold text-gray-700 border-b border-gray-300 z-10">
                    <tr>
                        <th className="p-2 border-r">Call Sign</th>
                        <th className="p-2 border-r">First Name</th>
                        <th className="p-2 border-r">Last Name</th>
                        <th className="p-2 border-r">Street Address</th>
                        <th className="p-2 border-r">City</th>
                        <th className="p-2 border-r">State</th>
                        <th className="p-2 border-r">ZIP</th>
                        <th className="p-2 border-r">Operator Class</th>
                        <th className="p-2 border-r">License Status</th>
                        <th className="p-2 border-r">FRN</th>
                        <th className="p-2 border-r">Region Code</th>
                        <th className="p-2">DMR ID</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {data.map((row, index) => (
                        <tr
                            key={index}
                            className="even:bg-gray-50 border-b border-gray-200"
                        >
                            <td className="p-2 border-r">{row.call_sign}</td>
                            <td className="p-2 border-r">{row.first_name}</td>
                            <td className="p-2 border-r">{row.last_name}</td>
                            <td className="p-2 border-r">
                                {row.street_address}
                            </td>
                            <td className="p-2 border-r">{row.city}</td>
                            <td className="p-2 border-r">{row.state}</td>
                            <td className="p-2 border-r">{row.zip}</td>
                            <td className="p-2 border-r">
                                {row.operator_class}
                            </td>
                            <td className="p-2 border-r">
                                {row.license_status}
                            </td>
                            <td className="p-2 border-r">{row.frn}</td>
                            <td className="p-2 border-r">{row.region_code}</td>
                            <td className="p-2">{row.dmr_id || "-"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HamTable;

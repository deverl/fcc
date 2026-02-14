import React from "react";

const HamTable = ({ data }) => {
    return (
        <div className="overflow-auto max-h-[500px] border border-gray-200 dark:border-gray-600 rounded shadow">
            <table className="min-w-full table-auto border-collapse">
                <thead className="sticky top-0 bg-gray-100 dark:bg-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-200 border-b border-gray-300 dark:border-gray-600 z-10">
                    <tr>
                        <th className="p-2 border-r border-gray-300 dark:border-gray-600">Call Sign</th>
                        <th className="p-2 border-r border-gray-300 dark:border-gray-600">First Name</th>
                        <th className="p-2 border-r border-gray-300 dark:border-gray-600">Last Name</th>
                        <th className="p-2 border-r border-gray-300 dark:border-gray-600">Street Address</th>
                        <th className="p-2 border-r border-gray-300 dark:border-gray-600">City</th>
                        <th className="p-2 border-r border-gray-300 dark:border-gray-600">State</th>
                        <th className="p-2 border-r border-gray-300 dark:border-gray-600">ZIP</th>
                        <th className="p-2 border-r border-gray-300 dark:border-gray-600">Operator Class</th>
                        <th className="p-2 border-r border-gray-300 dark:border-gray-600">License Status</th>
                        <th className="p-2 border-r border-gray-300 dark:border-gray-600">FRN</th>
                        <th className="p-2 border-r border-gray-300 dark:border-gray-600">Region Code</th>
                        <th className="p-2">DMR ID</th>
                    </tr>
                </thead>
                <tbody className="text-sm text-gray-900 dark:text-gray-100">
                    {data.map((row, index) => (
                        <tr
                            key={index}
                            className="even:bg-gray-50 dark:even:bg-gray-800/50 border-b border-gray-200 dark:border-gray-600"
                        >
                            <td className="p-2 border-r border-gray-200 dark:border-gray-600">{row.call_sign}</td>
                            <td className="p-2 border-r border-gray-200 dark:border-gray-600">{row.first_name}</td>
                            <td className="p-2 border-r border-gray-200 dark:border-gray-600">{row.last_name}</td>
                            <td className="p-2 border-r border-gray-200 dark:border-gray-600">
                                {row.street_address}
                            </td>
                            <td className="p-2 border-r border-gray-200 dark:border-gray-600">{row.city}</td>
                            <td className="p-2 border-r border-gray-200 dark:border-gray-600">{row.state}</td>
                            <td className="p-2 border-r border-gray-200 dark:border-gray-600">{row.zip}</td>
                            <td className="p-2 border-r border-gray-200 dark:border-gray-600">
                                {row.operator_class}
                            </td>
                            <td className="p-2 border-r border-gray-200 dark:border-gray-600">
                                {row.license_status}
                            </td>
                            <td className="p-2 border-r border-gray-200 dark:border-gray-600">{row.frn}</td>
                            <td className="p-2 border-r border-gray-200 dark:border-gray-600">{row.region_code}</td>
                            <td className="p-2">{row.dmr_id || "-"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HamTable;

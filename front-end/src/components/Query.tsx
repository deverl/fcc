import React, { useState } from "react";

interface QueryProps {
    onSearch: (params: {
        callSign: string;
        firstName: string;
        lastName: string;
        city: string;
        state: string;
        licenseStatus: string[];
        operatorClass: string[];
        applyTitleCase: boolean;
    }) => void;
}

const licenseStatusOptions = ["A", "C", "E", "L", "P", "T", "X"];
const operatorClassOptions = ["A", "E", "G", "N", "P", "T"];

export const Query: React.FC<QueryProps> = ({ onSearch }) => {
    const [callSign, setCallSign] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [licenseStatus, setLicenseStatus] = useState(["A"]);
    const [operatorClass, setOperatorClass] = useState([
        "A",
        "E",
        "G",
        "N",
        "P",
        "T",
    ]);
    const [applyTitleCase, setApplyTitleCase] = useState(true);

    const toggleValue = (
        value: string,
        list: string[],
        setter: (v: string[]) => void
    ) => {
        setter(
            list.includes(value)
                ? list.filter((v) => v !== value)
                : [...list, value]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch({
            callSign,
            firstName,
            lastName,
            city,
            state,
            licenseStatus,
            operatorClass,
            applyTitleCase,
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-600 rounded shadow space-y-4"
        >
            {(
                [
                    ["Call Sign", callSign, setCallSign],
                    ["First Name", firstName, setFirstName],
                    ["Last Name", lastName, setLastName],
                    ["City", city, setCity],
                    ["State", state, setState],
                ] as [
                    string,
                    string,
                    React.Dispatch<React.SetStateAction<string>>
                ][]
            ).map(([label, value, setter], i) => (
                <div
                    key={i}
                    className="grid grid-cols-[150px_1fr] items-center gap-2"
                >
                    <label className="text-right font-bold">{label}:</label>
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setter(e.target.value)}
                        className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                </div>
            ))}

            <div className="grid grid-cols-[150px_1fr] items-start gap-2">
                <label className="text-right font-bold pt-1">
                    License Status:
                </label>
                <div className="flex flex-wrap gap-3">
                    {licenseStatusOptions.map((status) => (
                        <label
                            key={status}
                            className="flex items-center space-x-1"
                        >
                            <input
                                type="checkbox"
                                checked={licenseStatus.includes(status)}
                                onChange={() =>
                                    toggleValue(
                                        status,
                                        licenseStatus,
                                        setLicenseStatus
                                    )
                                }
                            />
                            <span>{status}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-[150px_1fr] items-start gap-2">
                <label className="text-right font-bold pt-1">
                    Operator Class:
                </label>
                <div className="flex flex-wrap gap-3">
                    {operatorClassOptions.map((op) => (
                        <label key={op} className="flex items-center space-x-1">
                            <input
                                type="checkbox"
                                checked={operatorClass.includes(op)}
                                onChange={() =>
                                    toggleValue(
                                        op,
                                        operatorClass,
                                        setOperatorClass
                                    )
                                }
                            />
                            <span>{op}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-[150px_1fr] items-center gap-2">
                <label className="text-right font-bold">Formatting:</label>
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={applyTitleCase}
                        onChange={(e) => setApplyTitleCase(e.target.checked)}
                    />
                    <span>Apply Title Case</span>
                </label>
            </div>

            <div className="text-center pt-4">
                <button
                    type="submit"
                    className="px-6 py-2 rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 font-semibold shadow-md transition"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Query } from "./components/Query";
import { Title } from "./components/Title";
import HamTable from "./components/HamTable";
import { mapKeysWithCustomMapping } from "./utils";
import axios from "axios";
import "./App.css";

const keyMapping = {
    callSign: "call_sign",
    firstName: "first_name",
    lastName: "last_name",
    city: "city",
    state: "state",
    licenseStatus: "license_status",
    operatorClass: "operator_class",
    applyTitleCase: "title_case",
};

let queryCount = 0;

function filterResults(data, query) {
    const q = query.trim().toLowerCase();
    if (!q) return data;
    return data.filter((row) => {
        const values = Object.values(row).map((v) =>
            v == null ? "" : String(v).toLowerCase()
        );
        return values.some((v) => v.includes(q));
    });
}

function App() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState("");

    const handleSearch = (formData) => {
        setLoading(true);
        setFilter("");
        queryCount++;
        const params = mapKeysWithCustomMapping(formData, keyMapping);
        axios
            .post("/api", params, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                alert("Error fetching data! ", JSON.stringify(err));
                setData([]);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleTitleClick = () => {
        window.location.href = "/";
    };

    const filteredData = filterResults(data, filter);

    return (
        <>
            <Title title="Ham Radio Lookup" onClick={handleTitleClick} />

            <Query onSearch={handleSearch} />

            {loading && <div className="loading"></div>}

            {!loading && data.length > 0 && (
                <div className="max-w-6xl mx-auto p-4 space-y-3">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                        <label
                            htmlFor="results-filter"
                            className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap"
                        >
                            Filter results:
                        </label>
                        <input
                            id="results-filter"
                            type="text"
                            placeholder="Type to filter by any field..."
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <HamTable data={filteredData} />
                </div>
            )}

            {!loading && data.length === 0 && queryCount > 0 && (
                <div className="text-left max-w-6xl mx-auto p-4 text-center text-gray-500 dark:text-gray-400">
                    No results found.
                </div>
            )}

            {!loading && data.length >= 1 && (
                <div className="text-left max-w-6xl mx-auto p-4 text-center text-gray-500 dark:text-gray-400">
                    <h2>
                        {filter.trim()
                            ? `Showing ${filteredData.length} of ${data.length} record${data.length === 1 ? "" : "s"}`
                            : data.length === 1
                              ? "Found 1 matching record"
                              : `Found ${data.length} matching records`}
                    </h2>
                </div>
            )}

        </>
    );
}

export default App;

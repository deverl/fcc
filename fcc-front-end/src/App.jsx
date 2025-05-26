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

function App() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const handleSearch = (formData) => {
        setLoading(true);
        const params = mapKeysWithCustomMapping(formData, keyMapping);
        axios
            .post("/api", params, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
            .then((res) => {
                console.log("data: ", JSON.stringify(res.data, null, 4));
                setData(res.data);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                setData([]);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleTitleClick = () => {
        window.location.href = "/";
    };

    return (
        <>
            <Title title="Ham Radio Lookup" onClick={handleTitleClick} />

            <Query onSearch={handleSearch} />

            {loading && <div className="loading"></div>}

            {!loading && data.length > 0 && (
                <div className="max-w-6xl mx-auto p-4">
                    <HamTable data={data} />
                </div>
            )}

            {!loading && data.length === 0 && (
                <div className="max-w-6xl mx-auto p-4 text-center text-gray-500">
                    No results found.
                </div>
            )}
        </>
    );
}

export default App;

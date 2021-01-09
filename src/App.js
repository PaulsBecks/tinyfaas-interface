import { useEffect, useState } from "react";
import IpForm from "./components/IpForm";
import UploadForm from "./components/UploadForm";
import useLocalStorage from "./hooks/useLocalStorage";
import tinyFaasFunctions from './tinyFaasFunctions.json'

function App() {
  const [tinyFaasIP, setTinyFaasIP] = useLocalStorage()
  const [uploadWaiting, setUploadWaiting] = useState(false)
  const [functions, setFunctions] = useState([])

  const fetchFunctions = async () => {
    try {
      const response = await fetch(tinyFaasIP + ":8080/list")
      const functions = await response.json()
      setFunctions(functions)
    }
    catch (e) {
      console.log(e)
    }
  }

  const upload = async (data) => {
    try {
      setUploadWaiting(true);
      await fetch(tinyFaasIP + ":8080/uploadFromUrl", {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        body: JSON.stringify(data)
      });
      fetchFunctions()
    }
    catch (e) {
      console.log(e)
    }
    setUploadWaiting(false)
  }

  const deleteFunction = async (functionName) => {
    try {
      await fetch(tinyFaasIP + ":8080/delete", {
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        body: functionName
      });
      fetchFunctions()
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (!tinyFaasIP) {
      return []
    }
    fetchFunctions()
  }, [tinyFaasIP])

  if (!tinyFaasIP) {
    return <IpForm setTinyFaasIp={setTinyFaasIP} />
  }

  return (
    <div className="tfi-page-wrapper">
      <nav className="tfi-navigation">
        <h1>TinyFaas Interface</h1>
      </nav>
      <div>
        <p>Connected to tinyFaas at <span className="tfi-host-label">{tinyFaasIP}</span></p>
        <button onClick={() => setTinyFaasIP()}>disconnect</button>
      </div>
      <div>
        <h2>Functions Running</h2>
        {functions.length === 0 ? <p>No functions are running currently.</p> : ""}
        <div className="tfi-functions-card-wrapper">
          {functions.map(f => <div className="tfi-function-card">
            <p><b>Name:</b> {f.name}</p>
            <p><b>Threads:</b> {f.threads}</p>
            <p><b>Resource:</b> {f.resource}</p>
            <button onClick={() => deleteFunction(f.name)}>delete</button>
          </div>)}
        </div>
      </div>
      <div>
        <UploadForm upload={upload} uploadWaiting={uploadWaiting} />
      </div>
      <div>
        <h2>Public functions</h2>
        <div className="tfi-functions-card-wrapper">
          {tinyFaasFunctions.map(f => <div className="tfi-function-card">
            <p><b>Name:</b> {f.name}</p>
            <p><b>URL:</b> {f.url}</p>
            <p><b>Threads:</b> {f.threads}</p>
            <p><b>Env:</b> {JSON.stringify(f.environment)}</p>
            <p><b>subfolder_path:</b> {f.subfolder_path}</p>
            <p><b>Base64 encoded:</b> {f.base64_encoded ? "True" : "False"}</p>
            {uploadWaiting ? <div class="loader"></div> : <button onClick={() => upload(f)}>deploy</button>}
          </div>)}
        </div>
      </div>
    </div>
  );
}

export default App;

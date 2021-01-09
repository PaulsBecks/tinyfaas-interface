import { useState } from "react"

export default function UploadForm({ upload, uploadWaiting }) {
    const [uploadData, setUploadData] = useState({
        "name": "",
        "threads": 2,
        "environment": {},
        "subfolder_path": "",
        "base64_encoded": false
    })

    const update = (event, key) => setUploadData({ ...uploadData, [key]: event.target.value })

    return (
        <div className="tfi-form">
            <h2>Deploy new function</h2>
            <div>
                <div>
                    <label htmlFor="url">URL</label>
                    <input name="url" value={uploadData.url} onChange={(event) => update(event, "url")} />
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input value={uploadData.name} onChange={(event) => update(event, "name")} />
                </div>
                <div>
                    <label htmlFor="subfolder_path">Subfolder path</label>
                    <input value={uploadData.subfolder_path} onChange={(event) => update(event, "subfolder_path")} />
                </div>
                {uploadWaiting ? <div class="loader"></div> : <button onClick={() => upload(uploadData)}>Upload</button>}
            </div>
        </div>
    )
}
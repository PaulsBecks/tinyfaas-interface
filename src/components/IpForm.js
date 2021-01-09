import { useState } from "react"

export default function IpForm({ setTinyFaasIp }) {
    const [ip, setIp] = useState("")

    return <div className="tfi-form">
        <h2>Set Ip</h2>
        <div>
            <label htmlFor="ip">Host</label>
            <input name="ip" value={ip} onChange={(event) => setIp(event.target.value)} />
        </div>
        <button onClick={() => setTinyFaasIp(ip)}>Save</button>
    </div>
}
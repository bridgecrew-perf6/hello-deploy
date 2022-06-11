import {useWebSocket} from "./useWebSocket";

export default function DeployListPage() {
    const {connectStatus, disconnect} = useWebSocket()

    return (
        <div>
            <div>{connectStatus}</div>
            {connectStatus === 'Connected' && <button onClick={disconnect}>DISCONNECT</button>}
        </div>
    )
}

import {useEffect, useState} from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

type ConnectStatus = 'Not Connected' | 'Connected'


export const useWebSocket = () => {
    const [connectStatus, setConnectStatus] = useState<ConnectStatus>('Not Connected')
    const [receivedMessage, setReceivedMessage] = useState('')
    let stompClient: Stomp.Client

    const connect = () => {
        const socket = new SockJS("http://localhost:8080/gs-guide-websocket")
        stompClient = Stomp.over(socket)
        stompClient.connect({}, (frame) => {
            console.log('Connected: ' + frame);
            setConnectStatus('Connected')
        })
    }

    const disconnect = () => {
        if (stompClient !== undefined) {
            stompClient.disconnect(() => {
                setConnectStatus('Not Connected')
            })
        }
    }

    useEffect(() => {
        connect()
    }, [])

    return {
        connectStatus, receivedMessage, disconnect,
    }
}

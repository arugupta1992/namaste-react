import { useState, useEffect } from 'react';

const useGetOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    
    /* To detect if the network is online or offline we can listen to the global event listeners
        provided on the window object. Since these event listeners need to be attcahed to the browser
        only once in the lifecycle of the component, we can use useEffect hook to attach these 
        event listeners when the component mounts and remove them when the component unmounts.
    */
    useEffect(()=>{
        window.addEventListener("offline", ()=> {
            setOnlineStatus(false);
        });
        window.addEventListener("online", ()=> {
            setOnlineStatus(true);
        });
    }, []);

    //if online return true else false
    return onlineStatus;
}
export default useGetOnlineStatus;
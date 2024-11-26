//to use jotai
//jotai is used for state management across different components by allowing components to share and manage state efficiently through atoms. 
import {atom, useAtom} from 'jotai';

// an atom to hold the stat.
export const notificationAtom = atom ({
    message:'',
    type:'info',
    imageUrl:''
});

// this is the custom Hook that is being set up for the different functions.
export const useNotification = () => {
    const [notification, setNotification] = useAtom(notificationAtom);

    //this is to show the message
    const showNotification = (message, type = 'info', imageUrl)=>{
        setNotification({message,type,imageUrl});
    };

    //this is to reset the message to blank.
    const clearNotification = () =>{
        setNotification({message:'', type:'info', imageUrl:''});
    };

    // this is to return the message from the atom/.
    const getNotification = () =>
    {
        return notification;
    };

    //the hook return 3 different function, to be used when useNotifvation is valled. 
    return{
        showNotification,
        clearNotification,
        getNotification
    };

    
}
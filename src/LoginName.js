import {atom,useAtom} from 'jotai';

const nameAtom = atom("");

export function LoginName(){
    const [username, setUsername] = useAtom(nameAtom);

    const setName = (item)=>
    {
        setUsername(item);
    }

    const getName = ()=>{
        return username;
    }

    return {setName,getName};

}
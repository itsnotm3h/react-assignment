import{atom,useAtom} from 'jotai';

const jwtAtom = atom(null);


export function useJwt(){

    const [jwt,setJwtAtom] = useAtom(jwtAtom);

    //set the JWT in localStorage..Not very safe need to think about, how do we get set not in local storage. ( HttpOnly Cookies: set this up for industry project 2)
    const setJwt = (newJwt)=>{
        localStorage.setItem('jwt',newJwt);
        setJwtAtom(newJwt);
    }

    const getJwt = ()=>
    {
        const storedJwt = localStorage.getItem('jwt');
        if(storedJwt && !jwt)
        {

            setJwtAtom(storedJwt);
        }
        return jwt || storedJwt;
    };

    const clearJwt = ()=>{
        localStorage.removeItem('jwt');
        setJwtAtom(null);
    }


    return {jwt,setJwt,getJwt,clearJwt};

}
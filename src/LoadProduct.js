import {atom, useAtom} from 'jotai';

const productTagAtom = atom("/");

export function Product(){
    const [currentTag,settingTag] = useAtom(productTagAtom);

    const setTag = (item)=>
    {
         settingTag(item);
    }
    const getTag = ()=>{
        return currentTag;
    }
    
    return {setTag,getTag};


}

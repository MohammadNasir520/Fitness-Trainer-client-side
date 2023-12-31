import { useEffect } from "react"

const useTittle=tittle=>{
    useEffect(()=>{
    document.title=`${tittle}-Fitness Trainer`

    },[tittle])
}
export default useTittle;
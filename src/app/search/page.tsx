import Search from "@/components/Search"
import { Suspense } from "react"

const page=()=>{
    return(
        <Suspense fallback={<div>Loading...</div>}>

                <Search/>
        </Suspense>
    )
}

export default page
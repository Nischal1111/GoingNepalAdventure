import SingleWellness from "@/components/Wellness/SingleWellness"


const page=({params}:{params:{id:string}})=>{
    return(
        <SingleWellness id={params.id}/>
    )
}

export default page
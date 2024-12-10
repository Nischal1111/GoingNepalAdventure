import SingleAct from "@/components/Activities/SingleAct"

const page=({params}:{params:{id:string}})=>{
    return(
        <SingleAct id={params.id}/>
    )
}
export default page
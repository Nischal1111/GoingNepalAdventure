import SingleBlog from "@/components/Blogs/SingleBlog"

const page = ({params}:{params:{id:string}}) => {
    return(
        <SingleBlog id={params.id}/>
    )
}

export default page
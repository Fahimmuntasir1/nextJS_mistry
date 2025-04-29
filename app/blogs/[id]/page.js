import getPost from "@/lib/getpost"


export default async function Post({params}) {
    const {id} = await params
    const post = await getPost(id)
  return (
    <div>
      <h1>This is Blog {post.id}</h1>
      <h1>Title: {post.title}</h1>
      <p>
        {post.body}
      </p>
    </div>
  )
}

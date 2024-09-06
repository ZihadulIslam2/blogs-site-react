const Bloglist = (x) => {
  const blogs = x.blogs
  console.log(x)
  return (
    <div className="bloglist">
      {blogs.map((x) => (
        <div className="blog_preview mb-5 flex flex-col bg-black" key={x.id}>
          <h2 className="text-4xl text-white">{x.title}</h2>
          <p>{x.body}</p>
          <p>{x.snippet}</p>
        </div>
      ))}
    </div>
  )
}
export default Bloglist

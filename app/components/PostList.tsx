import React from "react"

type Post = {
  id: string
  title: string
  description: string
}

async function fetchPosts() {
  const res = await fetch('http://localhost:3000/api/posts', { cache: 'default' })
  return (await res.json()).data as Post[]
}

const PostList = (async () => {
  const posts = await fetchPosts()

  return (
    <ul>
      {posts.map(post => (<li key={post.id}>{post.title}</li>))}
    </ul>
  )
}) as unknown as React.FC

export default PostList
import PostCard from './post-card'
import { type Post } from '@/app/types/posts'
// TODO ESTO NO FUNCIONA ES USER EN LUGAR DE USERS
export function PostLists ({ posts }: { posts: Post[] | null }) {
  return (
    <>
{
    posts?.map(post => {
      const {
        id,
        users,
        content
      } = post

      const {
        user_name: UserName,
        name: userFullName,
        avatar_url: avatarUrl
      } = users

      return (
        <PostCard
        key={id}
        content={content}
        userName={UserName}
        userFullName={userFullName}
        avatarUrl={avatarUrl}/>
      )
    })
   }
   </>
  )
}

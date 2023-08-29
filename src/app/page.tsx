import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButtonServer } from './components/auth-button-server'
import { redirect } from 'next/navigation'
import PostCard from './components/post-card'

export default async function Home () {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  const { data: posts } = await supabase
    .from('posts')
    .select('*, users(name, avatar_url, user_name)')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     Holaaa Sonsooo, ui vale mamá D:
     <AuthButtonServer />
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
    </main>
  )
}

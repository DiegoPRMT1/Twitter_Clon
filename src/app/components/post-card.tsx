'use client'
import { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from '@nextui-org/react'

export default function PostCard ({
  userFullName,
  userName,
  avatarUrl,
  content
}: {
  userFullName: string
  userName: string
  avatarUrl: string
  content: string
}) {
  const [isFollowed, setIsFollowed] = useState(false)

  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={avatarUrl} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{userFullName}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{userName}</h5>
          </div>
        </div>
        <Button
          className={isFollowed ? 'bg-transparent text-foreground border-default-200' : ''}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? 'bordered' : 'solid'}
          onPress={() => { setIsFollowed(!isFollowed) }}
        >
          {isFollowed ? 'Unfollow' : 'Follow'}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-white">
        <p>
          {content}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
      </CardFooter>
    </Card>
  )
}

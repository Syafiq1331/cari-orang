import React from 'react';
import { useRouter } from 'next/router'

export default function Username() {

  const router = useRouter()
  const { username } = router.query

  return (
    <div>
      <h1>Detail halaman untuk user : {username}</h1>
    </div>
  )
}

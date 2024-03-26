import AuthenticatedScreen from '@/components/AuthenticatedScreen'
import UnaunthenticatedScreen from '@/components/UnauthenticatedScreen'
import { useSession } from 'next-auth/react'
import React from 'react'

function Home() {
  const { data: session } = useSession()

  if (session && session.user) {
    return <AuthenticatedScreen />
  }
  return <UnaunthenticatedScreen />
}

export default Home

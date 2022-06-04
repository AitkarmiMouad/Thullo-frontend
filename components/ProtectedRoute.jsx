import React, { useEffect } from "react"
import { useRouter } from 'next/router'

const ProtectedRoute = ({ component }) => {
  const isAuthenticated = true;
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
        router.push('/auth/login')
    }
  }, [isAuthenticated, router])

  return (
    <>
      {isAuthenticated ? component : <p>Redirecting...</p>}
    </>
  );
}

export default ProtectedRoute;
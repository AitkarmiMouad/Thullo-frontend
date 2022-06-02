import React, { useEffect } from "react"
import { useRouter } from 'next/router'

const ProtectedRoute = ({ component }) => {
  const isAuthenticated = true;
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated, router])

  return (
    <>
      {isAuthenticated ? component : <p>Redirecting</p>}
    </>
  );
}

export default ProtectedRoute;
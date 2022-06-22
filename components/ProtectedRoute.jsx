import React, { useEffect } from "react"
import { useRouter } from 'next/router'

const ProtectedRoute = ({ component, path }) => {
  const isAuthenticated = false;
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login')
    }
    if (isAuthenticated && path !== undefined) {
      router.push(path, undefined, { shallow: true })
    }
  }, [isAuthenticated, router, path])

  return (
    <>
      {isAuthenticated ? component : <p>Redirecting...</p>}
    </>
  );
}

export default ProtectedRoute;
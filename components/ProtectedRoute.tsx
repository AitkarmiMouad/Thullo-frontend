import React, { useEffect, ReactNode } from "react"
import { useRouter } from 'next/router'

interface ProtectedRouteProps {
  component: ReactNode
}

const ProtectedRoute: any = ({ component }: ProtectedRouteProps) => {
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
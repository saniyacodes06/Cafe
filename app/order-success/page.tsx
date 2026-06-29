'use client'

import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, Package, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

function OrderSuccessInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [verifying, setVerifying] = useState(true)
  const [orderRef, setOrderRef] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!sessionId) {
      setError('No session ID found')
      setVerifying(false)
      return
    }

    fetch(`/api/stripe/verify-session?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) throw new Error(data.error)
        setOrderRef(data.orderRef)
        setVerifying(false)
      })
      .catch((err) => {
        setError(err.message)
        setVerifying(false)
      })
  }, [sessionId])

  if (!sessionId) {
    return (
      <div className="mx-auto max-w-[600px] px-4 py-16 text-center">
        <Package size={48} className="text-muted-foreground mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Invalid Payment</h1>
        <p className="text-muted-foreground mb-6">No payment session was provided.</p>
        <Button asChild><Link href="/menu">Browse Menu</Link></Button>
      </div>
    )
  }

  if (verifying) {
    return (
      <div className="mx-auto max-w-[600px] px-4 py-16 text-center">
        <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-muted-foreground">Verifying your payment...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="mx-auto max-w-[600px] px-4 py-16 text-center">
        <Package size={48} className="text-destructive mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Verification Failed</h1>
        <p className="text-muted-foreground mb-6">{error}</p>
        <Button asChild><Link href="/orders">View My Orders</Link></Button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-[600px] px-4 py-16 text-center">
      <div className="flex justify-center mb-6">
        <div className="h-20 w-20 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
          <CheckCircle size={40} className="text-green-600" />
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
      <p className="text-muted-foreground mb-2">Your order has been placed successfully.</p>
      {orderRef && (
        <p className="text-sm text-muted-foreground mb-8">
          Order Reference: <span className="font-semibold text-foreground">{orderRef}</span>
        </p>
      )}

      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3 text-left">
              <CheckCircle size={18} className="text-green-600 shrink-0" />
              <span>Payment confirmed via Stripe</span>
            </div>
            <div className="flex items-center gap-3 text-left">
              <CheckCircle size={18} className="text-green-600 shrink-0" />
              <span>Order received by restaurant</span>
            </div>
            <div className="flex items-center gap-3 text-left">
              <CheckCircle size={18} className="text-green-600 shrink-0" />
              <span>Estimated delivery in 30-45 minutes</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button asChild>
          <Link href={orderRef ? `/orders/${orderRef}/track` : '/orders'}>
            Track Order <ArrowRight size={16} />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/menu">Order More</Link>
        </Button>
      </div>
    </div>
  )
}

export default function OrderSuccessPage() {
  return (
    <Suspense>
      <OrderSuccessInner />
    </Suspense>
  )
}

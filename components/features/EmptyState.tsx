import type { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description: string
  actionLabel?: string
  actionHref?: string
  onClick?: () => void
}

export default function EmptyState({ icon: Icon, title, description, actionLabel, actionHref, onClick }: EmptyStateProps) {
  const btn = actionLabel ? (
    onClick ? (
      <Button onClick={onClick}>{actionLabel}</Button>
    ) : actionHref ? (
      <Link href={actionHref}><Button>{actionLabel}</Button></Link>
    ) : null
  ) : null

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <Icon size={40} className="text-muted-foreground" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-sm mb-6">{description}</p>
      {btn}
    </div>
  )
}

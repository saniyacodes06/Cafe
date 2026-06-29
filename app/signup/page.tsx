import { SignUp } from '@clerk/nextjs'

export default function SignupPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <SignUp />
    </div>
  )
}

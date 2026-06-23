import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_NAME } from '@/lib/constants'

export default function ContactPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
        <div className="mx-auto max-w-[1200px] px-4 md:px-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-md mx-auto">We would love to hear from you. Reach out with questions, feedback, or catering inquiries.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: 'Visit Us', value: 'Shop 5, FlavorHub Plaza, Old Panvel, Navi Mumbai - 410206' },
                  { icon: Phone, label: 'Call Us', value: '+91 98765 43210' },
                  { icon: Mail, label: 'Email Us', value: 'hello@flavorhub.com' },
                  { icon: Clock, label: 'Hours', value: 'Mon-Sat: 10:00 AM - 10:00 PM\nSunday: 10:00 AM - 8:00 PM' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{item.label}</h4>
                        <p className="text-sm text-muted-foreground whitespace-pre-line">{item.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-lg">Send a Message</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <input className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <input className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea className="flex min-h-[120px] w-full rounded-xl border border-input bg-background px-3 py-2 text-sm" placeholder="Tell us more..." />
                </div>
                <button className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Send Message</button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

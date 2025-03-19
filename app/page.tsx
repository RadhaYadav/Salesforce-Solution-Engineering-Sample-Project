import Link from "next/link"
import { ArrowRight, Cloud, Users, BarChart3, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F3F3F3]">
      <header className="bg-[#0176D3] text-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold">
            <Cloud className="h-6 w-6" />
            <span>Salesforce Solutions</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:underline">
              Products
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Industries
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Learning
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Support
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm" className="bg-transparent text-white border-white hover:bg-white/10">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-white text-[#0176D3] hover:bg-white/90">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0176D3] text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm">Solution Engineering</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Customer Success Platform
                </h1>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our Salesforce solution engineering projects that demonstrate personalized experiences and
                  customer journey optimization.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-h-[300px]">
                <div className="rounded-lg border bg-white text-[#032D60] shadow-sm p-6">
                  <div className="flex flex-col space-y-1.5 pb-4">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">Personalized Onboarding</h3>
                    <p className="text-sm text-[#444444]">
                      Tailored onboarding experiences based on user roles and industries
                    </p>
                  </div>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-[#0176D3]"></div>
                        <span>Role-based Lightning components</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-[#0176D3]"></div>
                        <span>Industry-specific Trailhead modules</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-[#0176D3]"></div>
                        <span>Marketing Cloud integration</span>
                      </li>
                    </ul>
                    <Link href="/onboarding-demo">
                      <Button className="w-full bg-[#0176D3] hover:bg-[#0176D3]/90">
                        View Demo <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="rounded-lg border bg-white text-[#032D60] shadow-sm p-6">
                  <div className="flex flex-col space-y-1.5 pb-4">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">Customer Journey Mapping</h3>
                    <p className="text-sm text-[#444444]">Detailed journey maps across different lines of business</p>
                  </div>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-[#0176D3]"></div>
                        <span>Multi-cloud touchpoint visualization</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-[#0176D3]"></div>
                        <span>Einstein-powered insights</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-[#0176D3]"></div>
                        <span>Journey Builder integration</span>
                      </li>
                    </ul>
                    <Link href="/journey-mapping-demo">
                      <Button className="w-full bg-[#0176D3] hover:bg-[#0176D3]/90">
                        View Demo <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#B4C8E1] px-3 py-1 text-sm text-[#032D60]">
                  Salesforce Solutions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-[#032D60] sm:text-5xl">Become a Trailblazer</h2>
                <p className="max-w-[900px] text-[#444444] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how our solution engineering projects can help you drive success across your organization.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-[#B4C8E1] bg-white p-6 text-center shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#B4C8E1]">
                  <Zap className="h-8 w-8 text-[#0176D3]" />
                </div>
                <h3 className="text-xl font-bold text-[#032D60]">Lightning Fast</h3>
                <p className="text-sm text-[#444444]">
                  Accelerate your business with our Lightning components and pre-built solutions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-[#B4C8E1] bg-white p-6 text-center shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#B4C8E1]">
                  <Users className="h-8 w-8 text-[#0176D3]" />
                </div>
                <h3 className="text-xl font-bold text-[#032D60]">Customer-Centric</h3>
                <p className="text-sm text-[#444444]">
                  Put your customers at the center of everything you do with our 360-degree view.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-[#B4C8E1] bg-white p-6 text-center shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#B4C8E1]">
                  <BarChart3 className="h-8 w-8 text-[#0176D3]" />
                </div>
                <h3 className="text-xl font-bold text-[#032D60]">Einstein Analytics</h3>
                <p className="text-sm text-[#444444]">
                  Leverage AI-powered insights to make smarter decisions and drive growth.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-[#B4C8E1] bg-white py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-[#444444] md:text-left">
            © 2025 Salesforce, Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium text-[#0176D3] hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium text-[#0176D3] hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium text-[#0176D3] hover:underline">
              Trailhead
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}


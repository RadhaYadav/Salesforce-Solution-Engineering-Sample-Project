import Link from "next/link"
import { Cloud } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center bg-[#F3F3F3]">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="mx-auto mb-4">
            <Cloud className="h-12 w-12 text-[#0176D3]" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-[#032D60]">Login to Salesforce</h1>
          <p className="text-sm text-[#444444]">Enter your email and password to continue</p>
        </div>
        <div className="grid gap-6">
          <form>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-[#032D60]">
                  Email
                </Label>
                <Input id="email" type="email" placeholder="name@example.com" required className="border-[#B4C8E1]" />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-[#032D60]">
                    Password
                  </Label>
                  <Link href="#" className="text-sm text-[#0176D3] hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input id="password" type="password" required className="border-[#B4C8E1]" />
              </div>
              <Button type="submit" className="bg-[#0176D3] hover:bg-[#0176D3]/90">
                Login
              </Button>
            </div>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-[#B4C8E1]"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#F3F3F3] px-2 text-[#444444]">Or continue with</span>
            </div>
          </div>
          <div className="grid gap-2">
            <Button variant="outline" type="button" className="border-[#B4C8E1] text-[#444444] hover:bg-[#B4C8E1]/10">
              Google
            </Button>
            <Button variant="outline" type="button" className="border-[#B4C8E1] text-[#444444] hover:bg-[#B4C8E1]/10">
              Microsoft
            </Button>
          </div>
        </div>
        <p className="px-8 text-center text-sm text-[#444444]">
          Don't have an account?{" "}
          <Link href="/signup" className="text-[#0176D3] underline underline-offset-4 hover:text-[#0176D3]/90">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}


"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Cloud } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SignupPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    company: "",
    role: "",
    industry: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      // In a real app, we would send this data to Salesforce Marketing Cloud and HubSpot
      console.log("Form submitted:", formData)
      router.push("/onboarding-demo")
    }
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center bg-[#F3F3F3]">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="mx-auto mb-4">
            <Cloud className="h-12 w-12 text-[#0176D3]" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-[#032D60]">Join the Trailblazers</h1>
          <p className="text-sm text-[#444444]">Enter your information below to create your Salesforce account</p>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 1 ? "bg-[#0176D3] text-white" : "border border-[#B4C8E1] text-[#444444]"}`}
          >
            1
          </div>
          <div className={`h-px w-12 ${step >= 2 ? "bg-[#0176D3]" : "bg-[#B4C8E1]"}`} />
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 2 ? "bg-[#0176D3] text-white" : "border border-[#B4C8E1] text-[#444444]"}`}
          >
            2
          </div>
        </div>

        <Card className="border-[#B4C8E1] bg-white">
          <form onSubmit={handleSubmit}>
            {step === 1 ? (
              <>
                <CardHeader>
                  <CardTitle className="text-[#032D60]">Account Information</CardTitle>
                  <CardDescription className="text-[#444444]">Create your Salesforce login credentials</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#032D60]">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border-[#B4C8E1]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-[#032D60]">
                      Password
                    </Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="border-[#B4C8E1]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#032D60]">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="border-[#B4C8E1]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-[#032D60]">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="border-[#B4C8E1]"
                    />
                  </div>
                </CardContent>
              </>
            ) : (
              <>
                <CardHeader>
                  <CardTitle className="text-[#032D60]">Personalization Information</CardTitle>
                  <CardDescription className="text-[#444444]">
                    Help us tailor your Salesforce experience
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-[#032D60]">
                      Your Role
                    </Label>
                    <RadioGroup
                      defaultValue={formData.role}
                      onValueChange={(value) => handleSelectChange("role", value)}
                      className="grid grid-cols-2 gap-4"
                    >
                      <div className="flex items-center space-x-2 rounded-md border border-[#B4C8E1] p-3">
                        <RadioGroupItem value="cmo" id="cmo" className="text-[#0176D3]" />
                        <Label htmlFor="cmo" className="flex-1 text-[#444444]">
                          CMO / Marketing
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 rounded-md border border-[#B4C8E1] p-3">
                        <RadioGroupItem value="sales" id="sales" className="text-[#0176D3]" />
                        <Label htmlFor="sales" className="flex-1 text-[#444444]">
                          Sales Executive
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 rounded-md border border-[#B4C8E1] p-3">
                        <RadioGroupItem value="engineer" id="engineer" className="text-[#0176D3]" />
                        <Label htmlFor="engineer" className="flex-1 text-[#444444]">
                          Developer / Admin
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 rounded-md border border-[#B4C8E1] p-3">
                        <RadioGroupItem value="service" id="service" className="text-[#0176D3]" />
                        <Label htmlFor="service" className="flex-1 text-[#444444]">
                          Service Manager
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-[#032D60]">
                      Industry
                    </Label>
                    <Select onValueChange={(value) => handleSelectChange("industry", value)}>
                      <SelectTrigger className="border-[#B4C8E1]">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="finance">Financial Services</SelectItem>
                        <SelectItem value="healthcare">Healthcare & Life Sciences</SelectItem>
                        <SelectItem value="retail">Retail & Consumer Goods</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="education">Education & Nonprofit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </>
            )}
            <CardFooter>
              {step === 1 ? (
                <Button type="submit" className="w-full bg-[#0176D3] hover:bg-[#0176D3]/90">
                  Continue
                </Button>
              ) : (
                <Button type="submit" className="w-full bg-[#0176D3] hover:bg-[#0176D3]/90">
                  Start Your Free Trial
                </Button>
              )}
            </CardFooter>
          </form>
        </Card>
        <p className="px-8 text-center text-sm text-[#444444]">
          By clicking continue, you agree to our{" "}
          <Link href="#" className="text-[#0176D3] underline underline-offset-4 hover:text-[#0176D3]/90">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-[#0176D3] underline underline-offset-4 hover:text-[#0176D3]/90">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  )
}


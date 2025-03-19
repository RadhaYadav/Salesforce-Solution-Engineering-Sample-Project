"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Users,
  MessageSquare,
  FileText,
  Settings,
  Database,
  Code,
  PieChart,
  Megaphone,
  Zap,
  Lightbulb,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Mock data that would come from Salesforce Marketing Cloud in a real implementation
const mockUserData = {
  cmo: {
    name: "Sarah Johnson",
    role: "CMO",
    industry: "Retail",
    recommendedFeatures: ["Marketing Cloud Analytics", "Customer Data Platform", "Journey Builder"],
    progress: 15,
    welcomeMessage:
      "Welcome to your Marketing Cloud command center! We've highlighted the features most relevant to CMOs in retail.",
  },
  sales: {
    name: "Michael Rodriguez",
    role: "Sales Executive",
    industry: "Technology",
    recommendedFeatures: ["Sales Cloud Pipeline", "Einstein Lead Scoring", "Revenue Intelligence"],
    progress: 15,
    welcomeMessage:
      "Welcome to your Sales Cloud dashboard! We've highlighted the features most relevant to sales executives in technology.",
  },
  engineer: {
    name: "Alex Chen",
    role: "Developer",
    industry: "Technology",
    recommendedFeatures: ["Lightning Web Components", "Apex Development", "Heroku Connect"],
    progress: 15,
    welcomeMessage:
      "Welcome to your Platform Developer workspace! We've highlighted the features most relevant to developers in technology.",
  },
  service: {
    name: "Jamie Taylor",
    role: "Service Manager",
    industry: "Healthcare",
    recommendedFeatures: ["Service Cloud Console", "Knowledge Base", "Einstein Case Routing"],
    progress: 15,
    welcomeMessage:
      "Welcome to your Service Cloud hub! We've highlighted the features most relevant to service managers in healthcare.",
  },
}

// Industry-specific templates that would be pulled from Salesforce in a real implementation
const industryTemplates = {
  technology: ["SaaS Onboarding Flow", "Product Release Campaign", "Technical Documentation"],
  finance: ["Financial Services Cloud", "Wealth Management App", "Compliance Dashboard"],
  healthcare: ["Patient Engagement Journey", "Provider Portal", "Care Management App"],
  retail: ["Commerce Cloud Storefront", "Loyalty Program", "Personalized Marketing"],
  manufacturing: ["Field Service Lightning", "Supply Chain Visibility", "Quality Management"],
  education: ["Education Cloud", "Student Success Hub", "Advancement Connect"],
}

export default function OnboardingDemo() {
  const searchParams = useSearchParams()
  const [userData, setUserData] = useState(mockUserData.cmo)
  const [progress, setProgress] = useState(15)
  const [currentStep, setCurrentStep] = useState(1)

  // In a real implementation, we would fetch this data from Salesforce Marketing Cloud
  // based on the user's sign-up information
  useEffect(() => {
    // Simulate loading user data
    const role = searchParams.get("role") || "cmo"
    if (mockUserData[role as keyof typeof mockUserData]) {
      setUserData(mockUserData[role as keyof typeof mockUserData])
    }

    // Simulate progress increase over time
    const timer = setTimeout(() => {
      setProgress(30)
    }, 2000)

    return () => clearTimeout(timer)
  }, [searchParams])

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
      setProgress((prev) => prev + 30)
    }
  }

  const getTemplates = () => {
    const industry = userData.industry.toLowerCase()
    return industryTemplates[industry as keyof typeof industryTemplates] || industryTemplates.technology
  }

  const getFeatureIcon = (feature: string) => {
    const icons: Record<string, React.ReactNode> = {
      "Marketing Cloud Analytics": <BarChart3 className="h-5 w-5 text-[#0176D3]" />,
      "Customer Data Platform": <Users className="h-5 w-5 text-[#0176D3]" />,
      "Journey Builder": <Megaphone className="h-5 w-5 text-[#0176D3]" />,
      "Sales Cloud Pipeline": <PieChart className="h-5 w-5 text-[#0176D3]" />,
      "Einstein Lead Scoring": <Lightbulb className="h-5 w-5 text-[#0176D3]" />,
      "Revenue Intelligence": <BarChart3 className="h-5 w-5 text-[#0176D3]" />,
      "Lightning Web Components": <Zap className="h-5 w-5 text-[#0176D3]" />,
      "Apex Development": <Code className="h-5 w-5 text-[#0176D3]" />,
      "Heroku Connect": <Database className="h-5 w-5 text-[#0176D3]" />,
      "Service Cloud Console": <MessageSquare className="h-5 w-5 text-[#0176D3]" />,
      "Knowledge Base": <FileText className="h-5 w-5 text-[#0176D3]" />,
      "Einstein Case Routing": <Lightbulb className="h-5 w-5 text-[#0176D3]" />,
    }

    return icons[feature] || <Settings className="h-5 w-5 text-[#0176D3]" />
  }

  return (
    <div className="container mx-auto py-6 bg-[#F3F3F3]">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#032D60]">Welcome, {userData.name}!</h1>
          <p className="text-[#444444]">{userData.welcomeMessage}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-medium text-[#032D60]">Trailhead Progress</p>
            <p className="text-xs text-[#444444]">{progress}% complete</p>
          </div>
          <Progress value={progress} className="w-[100px] bg-[#B4C8E1]" indicatorClassName="bg-[#0176D3]" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {userData.recommendedFeatures.map((feature, index) => (
          <Card key={index} className="relative overflow-hidden border-[#B4C8E1] bg-white">
            <div className="absolute right-2 top-2 rounded-full bg-[#04844B]/10 p-1 text-[#04844B]">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <CardHeader>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B4C8E1]">
                {getFeatureIcon(feature)}
              </div>
              <CardTitle className="mt-4 text-[#032D60]">{feature}</CardTitle>
              <CardDescription className="text-[#444444]">
                Recommended for {userData.role}s in {userData.industry}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[#444444]">
                This Salesforce feature helps you optimize your workflow and improve results based on your specific role
                and industry.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-[#0176D3] text-[#0176D3] hover:bg-[#0176D3]/10">
                Explore Feature
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-[#032D60]">Industry-Specific Solutions</h2>
        <p className="mb-6 text-[#444444]">
          We've curated these AppExchange solutions specifically for the {userData.industry} industry
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {getTemplates().map((template, index) => (
            <Card key={index} className="border-[#B4C8E1] bg-white">
              <CardHeader>
                <CardTitle className="text-[#032D60]">{template}</CardTitle>
                <CardDescription className="text-[#444444]">Optimized for {userData.industry}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#444444]">
                  This solution includes industry-specific best practices and has been proven effective in your sector.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-[#0176D3] text-[#0176D3] hover:bg-[#0176D3]/10">
                  Install from AppExchange
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-[#032D60]">Complete Your Trailhead</h2>

        <Card className="border-[#B4C8E1] bg-white">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-[#032D60]">Onboarding Steps</CardTitle>
              <div className="text-sm text-[#444444]">{currentStep} of 3</div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${currentStep >= 1 ? "bg-[#0176D3] text-white" : "border border-[#B4C8E1] text-[#444444]"}`}
                >
                  1
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-[#032D60]">Complete your Salesforce profile</p>
                  <p className="text-sm text-[#444444]">Add your company details and profile information</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${currentStep >= 2 ? "bg-[#0176D3] text-white" : "border border-[#B4C8E1] text-[#444444]"}`}
                >
                  2
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-[#032D60]">Connect your data sources</p>
                  <p className="text-sm text-[#444444]">Link your existing tools and import your data to Salesforce</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${currentStep >= 3 ? "bg-[#0176D3] text-white" : "border border-[#B4C8E1] text-[#444444]"}`}
                >
                  3
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-[#032D60]">Set up your first Lightning app</p>
                  <p className="text-sm text-[#444444]">Create your first project using our Lightning templates</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleNextStep}
              disabled={currentStep === 3}
              className="w-full bg-[#0176D3] hover:bg-[#0176D3]/90"
            >
              {currentStep === 3 ? "Trailhead Complete" : "Continue Trailhead"}
              {currentStep < 3 && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-10 text-center">
        <p className="text-[#444444]">Want to see how we map customer journeys across different Salesforce clouds?</p>
        <Link href="/journey-mapping-demo">
          <Button variant="outline" className="mt-2 border-[#0176D3] text-[#0176D3] hover:bg-[#0176D3]/10">
            View Customer Journey Mapping Demo
          </Button>
        </Link>
      </div>
    </div>
  )
}


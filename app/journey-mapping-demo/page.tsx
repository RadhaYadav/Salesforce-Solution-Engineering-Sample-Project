"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Download,
  Info,
  Smile,
  Frown,
  Meh,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  Lightbulb,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data that would come from Salesforce Journey Builder in a real implementation
const journeyData = {
  sales: {
    stages: [
      {
        name: "Awareness",
        touchpoints: ["Website Visit", "Social Studio", "Event Check-in"],
        emotions: "neutral",
        challenges: ["Low brand recognition", "Competitive market"],
        opportunities: ["Pardot marketing", "Targeted ads"],
      },
      {
        name: "Consideration",
        touchpoints: ["Sales Cloud Demo", "Case Studies", "Sales Call"],
        emotions: "positive",
        challenges: ["Technical questions", "Price concerns"],
        opportunities: ["ROI calculator", "Competitor comparison"],
      },
      {
        name: "Decision",
        touchpoints: ["CPQ Proposal", "Contract Negotiation", "Stakeholder Meeting"],
        emotions: "neutral",
        challenges: ["Multiple decision makers", "Budget approval"],
        opportunities: ["Executive presentation", "Flexible pricing"],
      },
      {
        name: "Onboarding",
        touchpoints: ["Success Cloud", "Trailhead Training", "Setup Support"],
        emotions: "positive",
        challenges: ["Learning curve", "Resource allocation"],
        opportunities: ["Personalized training", "Success templates"],
      },
      {
        name: "Retention",
        touchpoints: ["Success Reviews", "Support Portal", "Renewal Discussion"],
        emotions: "positive",
        challenges: ["Proving ongoing value", "Competitive offers"],
        opportunities: ["Usage analytics", "Loyalty program"],
      },
    ],
  },
  marketing: {
    stages: [
      {
        name: "Discovery",
        touchpoints: ["Content Studio", "Social Studio", "Pardot Landing Page"],
        emotions: "neutral",
        challenges: ["Low engagement", "Attribution tracking"],
        opportunities: ["SEO optimization", "Content strategy"],
      },
      {
        name: "Engagement",
        touchpoints: ["Marketing Cloud", "Webinar", "Content Download"],
        emotions: "positive",
        challenges: ["Form abandonment", "Content relevance"],
        opportunities: ["Progressive profiling", "Personalized content"],
      },
      {
        name: "Nurturing",
        touchpoints: ["Journey Builder", "Advertising Studio", "Content Recommendations"],
        emotions: "positive",
        challenges: ["Email fatigue", "Content gaps"],
        opportunities: ["Behavioral triggers", "Multi-channel approach"],
      },
      {
        name: "Conversion",
        touchpoints: ["Demo Request", "Sales Cloud Handoff", "Trial Signup"],
        emotions: "neutral",
        challenges: ["Lead quality", "Sales alignment"],
        opportunities: ["Einstein Lead Scoring", "Sales enablement"],
      },
      {
        name: "Advocacy",
        touchpoints: ["Community Cloud", "Case Study Feature", "Trailblazer Community"],
        emotions: "positive",
        challenges: ["Identifying advocates", "Measuring impact"],
        opportunities: ["Advocacy program", "Social proof collection"],
      },
    ],
  },
  service: {
    stages: [
      {
        name: "Onboarding",
        touchpoints: ["Welcome Journey", "Setup Guide", "First Login"],
        emotions: "neutral",
        challenges: ["Information overload", "Technical setup"],
        opportunities: ["Interactive tutorials", "Concierge service"],
      },
      {
        name: "First Use",
        touchpoints: ["Service Cloud", "Knowledge Articles", "Chat Bot"],
        emotions: "neutral",
        challenges: ["Feature discovery", "Learning curve"],
        opportunities: ["Guided workflows", "Contextual help"],
      },
      {
        name: "Issue Resolution",
        touchpoints: ["Case Management", "Knowledge Base", "Phone Support"],
        emotions: "negative",
        challenges: ["Response time", "Resolution quality"],
        opportunities: ["Self-service tools", "Proactive monitoring"],
      },
      {
        name: "Expansion",
        touchpoints: ["Feature Adoption", "Success Plans", "Training Webinar"],
        emotions: "positive",
        challenges: ["Demonstrating value", "User adoption"],
        opportunities: ["Usage insights", "Success planning"],
      },
      {
        name: "Renewal",
        touchpoints: ["Renewal Notice", "Business Review", "Feedback Survey"],
        emotions: "neutral",
        challenges: ["Value justification", "Competitive comparison"],
        opportunities: ["ROI reporting", "Loyalty incentives"],
      },
    ],
  },
}

// Analytics data that would come from Salesforce Einstein Analytics in a real implementation
const analyticsData = {
  sales: {
    conversion: 68,
    satisfaction: 87,
    touchpointEngagement: {
      "Website Visit": 2500,
      "Social Studio": 1800,
      "Event Check-in": 350,
      "Sales Cloud Demo": 780,
      "Case Studies": 950,
      "Sales Call": 620,
      "CPQ Proposal": 410,
      "Contract Negotiation": 320,
      "Stakeholder Meeting": 280,
      "Success Cloud": 260,
      "Trailhead Training": 240,
      "Setup Support": 220,
      "Success Reviews": 190,
      "Support Portal": 310,
      "Renewal Discussion": 180,
    },
  },
  marketing: {
    conversion: 72,
    satisfaction: 84,
    touchpointEngagement: {
      "Content Studio": 4200,
      "Social Studio": 8500,
      "Pardot Landing Page": 12000,
      "Marketing Cloud": 2100,
      Webinar: 950,
      "Content Download": 1800,
      "Journey Builder": 9500,
      "Advertising Studio": 7200,
      "Content Recommendations": 3800,
      "Demo Request": 720,
      "Sales Cloud Handoff": 580,
      "Trial Signup": 1200,
      "Community Cloud": 420,
      "Case Study Feature": 380,
      "Trailblazer Community": 1500,
    },
  },
  service: {
    conversion: 75,
    satisfaction: 91,
    touchpointEngagement: {
      "Welcome Journey": 3800,
      "Setup Guide": 2900,
      "First Login": 3200,
      "Service Cloud": 2800,
      "Knowledge Articles": 1900,
      "Chat Bot": 1200,
      "Case Management": 980,
      "Knowledge Base": 2400,
      "Phone Support": 650,
      "Feature Adoption": 1800,
      "Success Plans": 720,
      "Training Webinar": 850,
      "Renewal Notice": 2900,
      "Business Review": 580,
      "Feedback Survey": 1200,
    },
  },
}

const getEmotionIcon = (emotion: string) => {
  switch (emotion) {
    case "positive":
      return <Smile className="h-5 w-5 text-[#04844B]" />
    case "negative":
      return <Frown className="h-5 w-5 text-[#F28B00]" />
    default:
      return <Meh className="h-5 w-5 text-[#F28B00]" />
  }
}

export default function JourneyMappingDemo() {
  const [selectedLOB, setSelectedLOB] = useState("sales")
  const [selectedView, setSelectedView] = useState("journey")

  const handleLOBChange = (value: string) => {
    setSelectedLOB(value)
  }

  const currentJourney = journeyData[selectedLOB as keyof typeof journeyData]
  const currentAnalytics = analyticsData[selectedLOB as keyof typeof analyticsData]

  return (
    <div className="container mx-auto py-6 bg-[#F3F3F3]">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#032D60]">Customer Journey Mapping</h1>
          <p className="text-[#444444]">
            Visualize customer touchpoints, emotions, challenges, and opportunities across different Salesforce clouds
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/onboarding-demo">
            <Button variant="outline" size="sm" className="border-[#0176D3] text-[#0176D3] hover:bg-[#0176D3]/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Onboarding Demo
            </Button>
          </Link>
          <Button size="sm" className="bg-[#0176D3] hover:bg-[#0176D3]/90">
            <Download className="mr-2 h-4 w-4" />
            Export Journey Map
          </Button>
        </div>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="w-[180px]">
            <Select value={selectedLOB} onValueChange={handleLOBChange}>
              <SelectTrigger className="border-[#B4C8E1]">
                <SelectValue placeholder="Select Cloud" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sales">Sales Cloud</SelectItem>
                <SelectItem value="marketing">Marketing Cloud</SelectItem>
                <SelectItem value="service">Service Cloud</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#0176D3]">
                  <Info className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-[250px] text-sm">
                  This journey map shows the customer experience across different stages for the{" "}
                  {selectedLOB === "sales"
                    ? "Sales Cloud"
                    : selectedLOB === "marketing"
                      ? "Marketing Cloud"
                      : "Service Cloud"}
                  .
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Tabs value={selectedView} onValueChange={setSelectedView} className="w-full">
          <div className="flex flex-col gap-4">
            <TabsList className="grid w-full grid-cols-2 sm:w-[300px] bg-[#B4C8E1] self-end">
              <TabsTrigger value="journey" className="data-[state=active]:bg-[#0176D3] data-[state=active]:text-white">
                Journey Map
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="data-[state=active]:bg-[#0176D3] data-[state=active]:text-white"
              >
                Einstein Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="journey" className="mt-0">
              <div className="overflow-x-auto">
                <div className="min-w-[900px]">
                  <div className="grid grid-cols-5 gap-4">
                    {currentJourney.stages.map((stage, index) => (
                      <Card
                        key={index}
                        className="border-t-4 border-[#B4C8E1] bg-white"
                        style={{ borderTopColor: getStageColor(index) }}
                      >
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-[#032D60]">{stage.name}</CardTitle>
                          <div className="flex items-center gap-1">
                            <span className="text-sm text-[#444444]">Customer Emotion:</span>
                            {getEmotionIcon(stage.emotions)}
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="mb-2 text-sm font-medium text-[#032D60]">Touchpoints</h4>
                            <ul className="space-y-1">
                              {stage.touchpoints.map((touchpoint, idx) => (
                                <li key={idx} className="flex items-center text-sm text-[#444444]">
                                  <div className="mr-2 h-2 w-2 rounded-full bg-[#0176D3]"></div>
                                  {touchpoint}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="mb-2 flex items-center gap-1 text-sm font-medium text-[#032D60]">
                              <AlertTriangle className="h-4 w-4 text-[#F28B00]" />
                              Challenges
                            </h4>
                            <ul className="space-y-1">
                              {stage.challenges.map((challenge, idx) => (
                                <li key={idx} className="text-sm text-[#444444]">
                                  • {challenge}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="mb-2 flex items-center gap-1 text-sm font-medium text-[#032D60]">
                              <Lightbulb className="h-4 w-4 text-[#F28B00]" />
                              Opportunities
                            </h4>
                            <ul className="space-y-1">
                              {stage.opportunities.map((opportunity, idx) => (
                                <li key={idx} className="text-sm text-[#444444]">
                                  • {opportunity}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-[#04844B]"></div>
                      <span className="text-sm text-[#444444]">Positive Emotion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-[#F28B00]"></div>
                      <span className="text-sm text-[#444444]">Neutral Emotion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-[#BA0517]"></div>
                      <span className="text-sm text-[#444444]">Negative Emotion</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-[#B4C8E1] bg-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-[#032D60]">Conversion Rate</CardTitle>
                    <CardDescription className="text-[#444444]">Overall journey completion</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center py-8">
                      <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-[#B4C8E1]/30">
                        <svg className="h-40 w-40" viewBox="0 0 100 100">
                          <circle
                            className="stroke-[#0176D3] stroke-[8] fill-none"
                            cx="50"
                            cy="50"
                            r="40"
                            strokeDasharray={`${currentAnalytics.conversion * 2.51} 251`}
                            strokeLinecap="round"
                            transform="rotate(-90 50 50)"
                          />
                        </svg>
                        <div className="absolute text-center">
                          <div className="text-3xl font-bold text-[#032D60]">{currentAnalytics.conversion}%</div>
                          <div className="text-sm text-[#444444]">Conversion</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center text-sm text-[#444444]">
                      Based on {Object.values(currentAnalytics.touchpointEngagement).reduce((a, b) => a + b, 0)}{" "}
                      customer interactions
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#B4C8E1] bg-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-[#032D60]">Customer Satisfaction</CardTitle>
                    <CardDescription className="text-[#444444]">Average across all touchpoints</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center py-8">
                      <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-[#B4C8E1]/30">
                        <svg className="h-40 w-40" viewBox="0 0 100 100">
                          <circle
                            className="stroke-[#0176D3] stroke-[8] fill-none"
                            cx="50"
                            cy="50"
                            r="40"
                            strokeDasharray={`${currentAnalytics.satisfaction * 2.51} 251`}
                            strokeLinecap="round"
                            transform="rotate(-90 50 50)"
                          />
                        </svg>
                        <div className="absolute text-center">
                          <div className="text-3xl font-bold text-[#032D60]">{currentAnalytics.satisfaction}%</div>
                          <div className="text-sm text-[#444444]">Satisfaction</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center text-sm text-[#444444]">
                      Based on customer feedback across all journey stages
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2 lg:col-span-1 border-[#B4C8E1] bg-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-[#032D60]">Einstein Insights</CardTitle>
                    <CardDescription className="text-[#444444]">AI-powered recommendations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 text-[#04844B]" />
                        <div>
                          <p className="font-medium text-[#032D60]">Strong Touchpoints</p>
                          <p className="text-sm text-[#444444]">
                            {getTopTouchpoints(currentAnalytics.touchpointEngagement, 1)[0]} is your most effective
                            touchpoint with{" "}
                            {formatNumber(getTopTouchpoints(currentAnalytics.touchpointEngagement, 1, true)[0])}{" "}
                            engagements
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <AlertTriangle className="mt-0.5 h-5 w-5 text-[#F28B00]" />
                        <div>
                          <p className="font-medium text-[#032D60]">Improvement Areas</p>
                          <p className="text-sm text-[#444444]">
                            Focus on improving the {getEmotionStages(currentJourney.stages, "negative").join(" and ")}{" "}
                            stages
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Lightbulb className="mt-0.5 h-5 w-5 text-[#0176D3]" />
                        <div>
                          <p className="font-medium text-[#032D60]">Einstein Recommendations</p>
                          <p className="text-sm text-[#444444]">
                            Implement {getRandomOpportunities(currentJourney.stages, 2).join(" and ")} to improve
                            conversion
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                <Card className="border-[#B4C8E1] bg-white">
                  <CardHeader>
                    <CardTitle className="text-[#032D60]">Touchpoint Engagement</CardTitle>
                    <CardDescription className="text-[#444444]">
                      Number of customer interactions per touchpoint
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full">
                      {/* In a real implementation, this would be a chart using Einstein Analytics */}
                      <div className="flex h-full flex-col justify-end space-y-2">
                        <div className="grid grid-cols-5 gap-2">
                          {Object.entries(currentAnalytics.touchpointEngagement)
                            .sort((a, b) => b[1] - a[1])
                            .slice(0, 5)
                            .map(([touchpoint, count], index) => (
                              <div key={index} className="flex flex-col items-center">
                                <div className="mb-2 text-center text-xs font-medium text-[#444444]">{touchpoint}</div>
                                <div
                                  className="w-full rounded-t-sm bg-[#0176D3]"
                                  style={{
                                    height: `${(count / Math.max(...Object.values(currentAnalytics.touchpointEngagement))) * 200}px`,
                                  }}
                                ></div>
                                <div className="mt-1 text-xs text-[#444444]">{formatNumber(count)}</div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-center text-sm text-[#444444]">
                      Top 5 touchpoints shown. View full Einstein Analytics dashboard for complete insights.
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      <div className="mt-10 text-center">
        <p className="text-[#444444]">
          This demo shows how we map customer journeys across different Salesforce clouds. In a real implementation,
          this would be connected to your Journey Builder and Einstein Analytics.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <Button variant="outline" className="border-[#0176D3] text-[#0176D3] hover:bg-[#0176D3]/10">
            <BarChart3 className="mr-2 h-4 w-4" />
            View Einstein Dashboard
          </Button>
          <Button className="bg-[#0176D3] hover:bg-[#0176D3]/90">Request Demo</Button>
        </div>
      </div>
    </div>
  )
}

// Helper functions
function getStageColor(index: number) {
  const colors = ["#0176D3", "#1589EE", "#0B5CAB", "#04844B", "#F28B00"]
  return colors[index % colors.length]
}

function getTopTouchpoints(touchpoints: Record<string, number>, count: number, valuesOnly = false) {
  const sorted = Object.entries(touchpoints)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
  return valuesOnly ? sorted.map((item) => item[1]) : sorted.map((item) => item[0])
}

function getEmotionStages(stages: any[], emotion: string) {
  return stages.filter((stage) => stage.emotions === emotion).map((stage) => stage.name)
}

function getRandomOpportunities(stages: any[], count: number) {
  const allOpportunities = stages.flatMap((stage) => stage.opportunities)
  const shuffled = [...allOpportunities].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

function formatNumber(num: number) {
  return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num
}


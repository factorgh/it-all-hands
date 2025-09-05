"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Heart, Users, GraduationCap, Award, DollarSign, CreditCard } from "lucide-react"

const donationAmounts = [
  { value: "25", label: "$25", description: "Provides study materials for 1 student" },
  { value: "50", label: "$50", description: "Covers lab access for 1 week" },
  { value: "100", label: "$100", description: "Sponsors 1 student's certification exam" },
  { value: "250", label: "$250", description: "Funds equipment for hands-on training" },
  { value: "500", label: "$500", description: "Provides full scholarship assistance" },
  { value: "custom", label: "Custom", description: "Enter your own amount" },
]

const impactStats = [
  {
    icon: Users,
    number: "500+",
    label: "Students Supported",
    description: "Through scholarship programs",
  },
  {
    icon: GraduationCap,
    number: "95%",
    label: "Success Rate",
    description: "Of scholarship recipients",
  },
  {
    icon: Award,
    number: "1,200+",
    label: "Certifications",
    description: "Earned by supported students",
  },
]

export function DonateSection() {
  const [selectedAmount, setSelectedAmount] = useState("100")
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState("one-time")

  const handleDonate = () => {
    const amount = selectedAmount === "custom" ? customAmount : selectedAmount
    console.log("Donation:", { amount, type: donationType })
  }

  return (
    <section id="donate" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Heart className="w-4 h-4 mr-2" />
            Support Education
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Help Us Transform
            <span className="text-primary block">More Lives</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Your donation helps provide scholarships, equipment, and resources to students who need financial assistance
            to pursue their IT career dreams. Every contribution makes a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Impact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Your Impact</h3>
              <div className="space-y-6">
                {impactStats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                        <h4 className="font-semibold text-foreground mb-1">{stat.label}</h4>
                        <p className="text-muted-foreground text-sm">{stat.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Success Story */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Success Story</CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="text-muted-foreground italic mb-4">
                  "Thanks to the scholarship program, I was able to complete the Cyber Security course and land my dream
                  job at a Fortune 500 company. The support I received changed my life completely."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">MJ</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Maria Johnson</div>
                    <div className="text-muted-foreground text-xs">Cybersecurity Analyst</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tax Information */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Tax Deductible</h4>
                    <p className="text-sm text-muted-foreground">
                      IT ALL HANDS is a registered 501(c)(3) nonprofit organization. Your donation is tax-deductible to
                      the full extent allowed by law.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Donation Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl">Make a Donation</CardTitle>
              <CardDescription>
                Choose an amount that works for you. Every dollar helps a student achieve their goals.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Donation Type */}
              <div className="space-y-3">
                <Label>Donation Type</Label>
                <RadioGroup value={donationType} onValueChange={setDonationType} className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="one-time" id="one-time" />
                    <Label htmlFor="one-time">One-time</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly">Monthly</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Amount Selection */}
              <div className="space-y-3">
                <Label>Select Amount</Label>
                <RadioGroup value={selectedAmount} onValueChange={setSelectedAmount} className="grid grid-cols-2 gap-3">
                  {donationAmounts.map((amount) => (
                    <div key={amount.value} className="relative">
                      <RadioGroupItem value={amount.value} id={amount.value} className="peer sr-only" />
                      <Label
                        htmlFor={amount.value}
                        className="flex flex-col items-center justify-center p-4 border-2 border-border rounded-lg cursor-pointer hover:bg-muted/50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all"
                      >
                        <span className="font-semibold text-foreground">{amount.label}</span>
                        <span className="text-xs text-muted-foreground text-center mt-1">{amount.description}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Custom Amount Input */}
              {selectedAmount === "custom" && (
                <div className="space-y-2">
                  <Label htmlFor="custom-amount">Custom Amount</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="custom-amount"
                      type="number"
                      placeholder="Enter amount"
                      className="pl-10"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* Donate Button */}
              <Button onClick={handleDonate} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <CreditCard className="w-4 h-4 mr-2" />
                Donate {selectedAmount === "custom" ? `$${customAmount}` : `$${selectedAmount}`}
                {donationType === "monthly" ? "/month" : ""}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Secure payment processing powered by Stripe. Your information is protected with bank-level security.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

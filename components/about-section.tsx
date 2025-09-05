"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Target, Zap, CheckCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry professionals with 10+ years of real-world experience in top tech companies.",
  },
  {
    icon: Award,
    title: "Industry Certifications",
    description: "Prepare for and earn valuable certifications that employers actively seek in the job market.",
  },
  {
    icon: Target,
    title: "Job-Ready Skills",
    description: "Focus on practical, hands-on training that directly applies to real workplace scenarios.",
  },
  {
    icon: Zap,
    title: "Accelerated Learning",
    description: "Intensive bootcamp format designed to get you job-ready in months, not years.",
  },
]

const achievements = [
  "Over 5,000 successful graduates",
  "95% job placement rate within 6 months",
  "Average salary increase of 150%",
  "Partnerships with 200+ tech companies",
  "24/7 career support and mentorship",
  "Flexible learning schedules available",
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Target className="w-4 h-4 mr-2" />
            About IT ALL HANDS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Empowering the Next Generation of
            <span className="text-primary block">IT Professionals</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Founded in 2018, IT ALL HANDS has been at the forefront of IT education, transforming careers and lives
            through comprehensive, industry-aligned training programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Mission & Story */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                We believe that everyone deserves access to high-quality IT education that leads to meaningful career
                opportunities. Our mission is to bridge the skills gap in the technology industry by providing
                comprehensive, hands-on training that prepares students for real-world challenges.
              </p>
              <p className="text-muted-foreground">
                Through our intensive bootcamp programs, we've helped thousands of individuals transition into rewarding
                IT careers, regardless of their background or previous experience.
              </p>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">What Sets Us Apart</h4>
              <motion.div
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {achievements.map((achievement, index) => (
                  <motion.div key={index} className="flex items-center gap-3" variants={itemVariants}>
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="flex gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  View Success Stories
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="bg-transparent">
                  Download Brochure
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Card className="bg-card border-border hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <motion.div
                        className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent className="w-6 h-6 text-primary" />
                      </motion.div>
                      <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="bg-primary/5 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Proven Track Record</h3>
            <p className="text-muted-foreground">
              Our numbers speak for themselves. Join thousands of successful graduates who have transformed their
              careers.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {[
              { number: "5,000+", label: "Graduates" },
              { number: "95%", label: "Job Placement" },
              { number: "150%", label: "Avg Salary Increase" },
              { number: "200+", label: "Partner Companies" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

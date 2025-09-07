"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Users,
  Award,
  CheckCircle,
  Network,
  Briefcase,
  Shield,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const courses = [
  {
    id: 1,
    title: "CISCO Certified Networking Course",
    description:
      "Master enterprise networking with comprehensive CISCO certification training. Learn routing, switching, and network security fundamentals.",
    icon: Network,
    duration: "12 weeks",
    students: "2,500+",
    level: "Intermediate",
    price: "$0.00",
    features: [
      "CCNA Certification Prep",
      "Hands-on Lab Access",
      "Real Network Equipment",
      "Industry Expert Instructors",
      "Job Placement Assistance",
      "Lifetime Course Updates",
    ],
  },
  {
    id: 2,
    title: "IT Career Interview Course",
    description:
      "Ace your IT interviews with confidence. Learn technical interview skills, behavioral questions, and salary negotiation strategies.",
    icon: Briefcase,
    duration: "6 weeks",
    students: "1,800+",
    level: "All Levels",
    price: "$0.00",
    features: [
      "Mock Interview Sessions",
      "Technical Question Bank",
      "Resume Optimization",
      "Salary Negotiation Tips",
      "Industry Insights",
      "Personal Branding",
    ],
  },
  {
    id: 3,
    title: "IT Auditing",
    description:
      "Become an IT audit professional. Learn compliance frameworks, risk assessment, and audit methodologies for modern IT environments.",
    icon: Search,
    duration: "10 weeks",
    students: "1,200+",
    level: "Advanced",
    price: "$0.00",
    features: [
      "CISA Certification Prep",
      "Compliance Frameworks",
      "Risk Assessment Tools",
      "Audit Documentation",
      "Regulatory Standards",
      "Case Study Analysis",
    ],
  },
  {
    id: 4,
    title: "Cyber Security",
    description:
      "Protect organizations from cyber threats. Learn ethical hacking, incident response, and security architecture design.",
    icon: Shield,
    duration: "16 weeks",
    students: "3,200+",
    level: "Intermediate",
    price: "$0.00",
    features: [
      "Ethical Hacking Techniques",
      "Security Operations Center",
      "Incident Response Planning",
      "Penetration Testing",
      "Security Architecture",
      "Industry Certifications",
    ],
  },
  {
    id: 5,
    title: "Free Training For It/Agile Product Owner Course",
    description:
      "Gain practical skills to manage product lifecycles, lead agile teams, and deliver business value effectively.",
    icon: Shield,
    duration: "16 weeks",
    students: "3,200+",
    level: "Intermediate",
    price: "$0.00",
    features: [
      "Agile Methodologies & Frameworks",
      "Backlog Prioritization",
      "Sprint Planning & Review",
      "Stakeholder Communication",
      "Value Delivery Strategies",
      "Industry-Recognized Certification",
    ],
  },
];

export function CoursesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="courses" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Professional Training Programs
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Choose Your Path to
            <span className="text-primary block">IT Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Our comprehensive bootcamp programs are designed by industry experts
            to give you the practical skills and certifications needed to excel
            in today's competitive IT landscape.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <motion.div
                key={course.id}
                variants={containerVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-lg bg-card">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-foreground">
                          {course.price}
                        </div>
                        {/* <div className="text-sm text-muted-foreground">
                          One-time payment
                        </div> */}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {course.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pb-4">
                    {/* Course Stats */}
                    <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {course.students}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {course.level}
                      </Badge>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground text-sm">
                        What you'll learn:
                      </h4>
                      <ul className="space-y-2">
                        {course.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            animate={
                              isInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -10 }
                            }
                            transition={{
                              delay: index * 0.1 + 0.5,
                              duration: 0.3,
                            }}
                          >
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-4">
                    <div className="flex gap-3 w-full">
                      <motion.div
                        className="flex-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          Enroll Now
                        </Button>
                      </motion.div>
                      <motion.div
                        className="flex-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant="outline"
                          className="w-full bg-transparent"
                        >
                          Learn More
                        </Button>
                      </motion.div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="bg-card rounded-2xl p-8 max-w-2xl mx-auto border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Not sure which course is right for you?
            </h3>
            <p className="text-muted-foreground mb-6">
              Schedule a free consultation with our career advisors to find the
              perfect program for your goals.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="px-8 bg-transparent"
              >
                Schedule Free Consultation
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

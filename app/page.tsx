"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { MapPin, Phone, Mail, Briefcase, Linkedin, Globe, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  // Company colors
  const companyBlue = "#1E4D8C"

  // State to track which profile image is available
  const [profileImage, setProfileImage] = useState<string | null>(null)

  // Check for available profile images on component mount
  useEffect(() => {
    const checkImageExists = async (path: string): Promise<boolean> => {
      try {
        const response = await fetch(path, { method: "HEAD" })
        return response.ok
      } catch (error) {
        return false
      }
    }

    const checkImages = async () => {
      // Check for common image formats in order of preference
      const formats = ["jpg", "jpeg", "png", "webp"]

      for (const format of formats) {
        const path = `/photo.${format}`
        const exists = await checkImageExists(path)
        if (exists) {
          setProfileImage(path)
          break
        }
      }
    }

    checkImages()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-xl mx-auto">
        <Card className="border-none shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Left Column - Profile Photo and Basic Info */}
            <div className="md:w-1/3 bg-gradient-to-b from-[#1E4D8C]/10 to-[#1E4D8C]/5 p-6 flex flex-col items-center text-center">
              <Avatar className="h-32 w-32 border-4 border-white shadow-md mb-4">
                {profileImage ? (
                  <AvatarImage src={profileImage} alt="Jyotinarayan Kar" />
                ) : (
                  <AvatarFallback className="text-3xl bg-[#1E4D8C] text-white">JK</AvatarFallback>
                )}
              </Avatar>

              <h2 className="text-xl font-bold">Jyotinarayan Kar</h2>
              <p className="text-[#1E4D8C] font-medium text-sm mb-4">Assistant Manager</p>

              <Button
                className="w-full bg-[#1E4D8C] hover:bg-[#1E4D8C]/90 text-white"
                onClick={() => {
                  // Create vCard data
                  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Jyotinarayan Kar
N:Kar;Jyotinarayan;;;
ORG:Jindal Shadeed Iron & Steel LLC
TITLE:Assistant Manager
TEL;TYPE=WORK,VOICE:+96892441638
TEL;TYPE=WORK,VOICE:1266
EMAIL;TYPE=WORK,INTERNET:jyotinarayan.kar@jindalshadeed.com
URL:https://jindalshadeed.com
URL:https://om.linkedin.com/in/jyotinarayankar
ADR;TYPE=WORK:;;Jindal Shadeed Iron & Steel LLC;Sohar;Al Batinah;0000;Oman
END:VCARD`

                  // Create a data URI
                  const dataUri = "data:text/vcard;charset=utf-8," + encodeURIComponent(vcard)

                  // Open the URI which will prompt to add contact on mobile devices
                  window.open(dataUri)
                }}
              >
                Add Contact
              </Button>

              <div className="mt-6 w-full">
                <h3 className="text-sm font-semibold mb-3 text-left">Find me on</h3>
                <div className="grid grid-cols-3 gap-2">
                  <Link
                    href="https://om.linkedin.com/in/jyotinarayankar"
                    target="_blank"
                    className="flex flex-col items-center justify-center p-2 bg-white rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-[#0077B5] mb-1" />
                    <span className="text-xs">LinkedIn</span>
                  </Link>

                  <Link
                    href="https://wa.me/+96892441638"
                    target="_blank"
                    className="flex flex-col items-center justify-center p-2 bg-white rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <MessageSquare className="h-5 w-5 text-[#25D366] mb-1" />
                    <span className="text-xs">WhatsApp</span>
                  </Link>

                  <Link
                    href="https://jindalshadeed.com"
                    target="_blank"
                    className="flex flex-col items-center justify-center p-2 bg-white rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <Globe className="h-5 w-5 text-[#1E4D8C] mb-1" />
                    <span className="text-xs">Website</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Details and About */}
            <div className="md:w-2/3 p-6">
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-[#1E4D8C]/10 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-[#1E4D8C]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Work</p>
                    <Link href="tel:+96892441638" className="text-sm font-medium hover:text-[#1E4D8C]">
                      +968 92441638
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#1E4D8C]/10 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-[#1E4D8C]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">CUG</p>
                    <Link href="tel:1266" className="text-sm font-medium hover:text-[#1E4D8C]">
                      1266
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#1E4D8C]/10 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-[#1E4D8C]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Work</p>
                    <Link
                      href="mailto:jyotinarayan.kar@jindalshadeed.com"
                      className="text-sm font-medium hover:text-[#1E4D8C] break-all"
                    >
                      jyotinarayan.kar@jindalshadeed.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#1E4D8C]/10 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-[#1E4D8C]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Oman</span>
                      <Link
                        href="https://maps.google.com/?q=Oman"
                        target="_blank"
                        className="text-xs text-[#1E4D8C] hover:underline"
                      >
                        Show on Map
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#1E4D8C]/10 p-2 rounded-full">
                    <Briefcase className="h-5 w-5 text-[#1E4D8C]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Company</p>
                    <p className="text-sm font-medium">Jindal Shadeed Iron & Steel LLC</p>
                  </div>
                </div>
              </div>

              <Separator className="my-4" />

              <div>
                <h3 className="text-sm font-semibold mb-2">About Me</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jyotinarayan Kar is a skilled professional specializing in AI, machine learning, and digital
                  transformation. With a B.Tech in Metallurgical & Materials Engineering from NIT Rourkela, Jyotinarayan
                  focuses on implementing AI-powered solutions for process efficiency and automation at Jindal Shadeed
                  Iron and Steel (Oman).
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  His experience includes data analysis, predictive modelling, and business intelligence, helping
                  organizations harness AI and digital tools to streamline operations. His technical acumen,
                  problem-solving skills, and passion for leveraging AI and automation for business transformation make
                  him a valuable asset in the evolving landscape of digital technology.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Jyotinarayan Kar. All rights reserved.
        </div>
      </div>
    </div>
  )
}


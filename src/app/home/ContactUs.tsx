"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div id="contactus" className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Contact us
          </CardTitle>
          <p className="text-center text-gray-600">We&apos;re happy to help!</p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input placeholder="Email" type="email" />
              <Input placeholder="Phone" type="tel" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select one..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="Type your message..." className="h-32" />
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                Submit
              </Button>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="flex items-center text-lg font-semibold mb-2">
                  <Mail className="mr-2" /> Email
                </h3>
                <p className="text-sm">Main Office</p>
                <Link
                  href="mailto:info@cfulmer.com"
                  className="text-blue-600 hover:underline"
                >
                  info@cfulmer.com
                </Link>
              </div>
              <div>
                <h3 className="flex items-center text-lg font-semibold mb-2">
                  <Phone className="mr-2" /> Phone
                </h3>
                <p className="text-sm">Main Office</p>
                <Link
                  href="tel:1-800-CFULMER"
                  className="text-blue-600 hover:underline"
                >
                  1(800)-CFULMER
                </Link>
              </div>
              <div>
                <h3 className="flex items-center text-lg font-semibold mb-2">
                  <MapPin className="mr-2" /> Office
                </h3>
                <p className="text-sm">Groveland, Florida</p>
                <Link href="#" className="text-blue-600 hover:underline">
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

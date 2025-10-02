"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Search, Users } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
// Decorative background (radial + grid) like the Faq component

export function HeroQuotation() {
  const [destination, setDestination] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden mt-8">
      {/* Decorative background (radial + grid) similar to Faq */}
      <div className="absolute top-0 -right-1/3 -z-10 ml-auto w-4/5 h-32 lg:h-48 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(212,175,55,0.6)_0%,rgba(5,5,5,0)_80%)]" />

      <div className="absolute bottom-0 lg:bottom-0 inset-x-0 mx-auto bg-primary/40 lg:bg-primary/60 rounded-full w-1/3 h-1/16 blur-[4rem]"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Search Card */}
          <Card className="bg-black/95 backdrop-blur-sm p-6 md:p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Destination Input */}
              <div className="md:col-span-2 space-y-2">
                <label
                  htmlFor="destination"
                  className="text-sm font-medium text-foreground flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  Where to?
                </label>
                <Input
                  id="destination"
                  type="text"
                  placeholder="Search destinations..."
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="h-12 text-base"
                />
              </div>

              {/* Date Picker */}
              <div className="space-y-2">
                <label
                  htmlFor="dates"
                  className="text-sm font-medium text-foreground flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-primary" />
                  When?
                </label>
                <Input id="dates" type="date" className="h-12 text-base" />
              </div>

              {/* Guests Selector */}
              <div className="space-y-2">
                <label
                  htmlFor="guests"
                  className="text-sm font-medium text-foreground flex items-center gap-2"
                >
                  <Users className="w-4 h-4 text-primary" />
                  Guests
                </label>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger id="guests" className="h-12 text-base">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                    <SelectItem value="5">5+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Search Button */}
            <Button size="lg">
              <Search className="w-5 h-5 mr-2" />
              Solicitar cotação
            </Button>
          </Card>

          {/* Quick Stats */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}

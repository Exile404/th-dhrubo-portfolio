"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { SectionTitle } from "@/components/shared/section-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PROFILE } from "@/lib/data/profile";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const INPUT_CLASSES =
  "h-12 rounded-xl border-border/50 bg-foreground/[0.025] focus-visible:border-cyan-400 focus-visible:ring-cyan-400/20";

const CARD_CLASSES =
  "flex items-center gap-3 rounded-xl border border-border/30 bg-foreground/[0.02] px-5 py-4 font-dm text-sm text-foreground/55 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/15 hover:bg-cyan-400/5";

export function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name} (${form.email})`
    );
    window.open(
      `mailto:${PROFILE.contact.email}?subject=${subject}&body=${body}`,
      "_blank"
    );
    toast.success("Opening your mail client...");
  };

  const cards = [
    { Icon: MapPin, label: PROFILE.contact.location, href: null },
    { Icon: Phone, label: PROFILE.contact.phone, href: `tel:${PROFILE.contact.phone}` },
    { Icon: Mail, label: "Email Me", href: `mailto:${PROFILE.contact.email}` },
  ];

  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 pb-32 pt-24">
      <SectionTitle>Get in Touch</SectionTitle>

      <div
        ref={ref}
        className={cn(
          "transition-all duration-700 ease-out",
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}
      >
        <p className="mb-9 font-dm text-base leading-relaxed text-foreground/50">
          Have an opportunity, collaboration idea, or just want to say hello? Drop a message or reach me at{" "}
          <a
            href={`mailto:${PROFILE.contact.email}`}
            className="font-semibold text-cyan-400 hover:underline"
          >
            {PROFILE.contact.email}
          </a>
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={INPUT_CLASSES}
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={INPUT_CLASSES}
            />
          </div>
          <Textarea
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="min-h-[120px] resize-y rounded-xl border-border/50 bg-foreground/[0.025] py-3 focus-visible:border-cyan-400 focus-visible:ring-cyan-400/20"
          />
          <Button
            type="submit"
            size="lg"
            className="bg-gradient-to-br from-indigo-500 to-violet-500 font-syne text-base font-bold shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/40"
          >
            Send Message →
          </Button>
        </form>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {cards.map(({ Icon, label, href }, i) => {
            const inner = (
              <>
                <Icon className="h-[18px] w-[18px] flex-shrink-0 text-cyan-400/70" />
                <span>{label}</span>
              </>
            );
            return href ? (
              <a key={i} href={href} className={CARD_CLASSES}>
                {inner}
              </a>
            ) : (
              <div key={i} className={CARD_CLASSES}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
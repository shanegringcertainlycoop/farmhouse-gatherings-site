import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const InquirySection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Inquiry sent!",
      description: "We'll be in touch soon.",
    });
  };

  return (
    <section id="inquire" className="py-24 sm:py-32 px-6 border-t border-border/50">
      <div className="max-w-lg mx-auto">
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground text-center mb-3">
          Get in Touch
        </h2>
        <p className="font-body text-foreground/40 text-center mb-12 text-base sm:text-lg">
          Tell us a little about your group.
        </p>

        {submitted ? (
          <div className="text-center py-12">
            <p className="font-display text-2xl text-foreground font-semibold mb-2">Thanks!</p>
            <p className="font-body text-foreground/50">
              We got your note. We'll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="font-body text-xs uppercase tracking-[0.15em] text-foreground/40">Name</Label>
              <Input id="name" name="name" required placeholder="Your name" className="mt-2 bg-transparent border-border/50 text-foreground placeholder:text-foreground/30" />
            </div>
            <div>
              <Label htmlFor="dates" className="font-body text-xs uppercase tracking-[0.15em] text-foreground/40">Dates</Label>
              <Input id="dates" name="dates" placeholder="When are you thinking?" className="mt-2 bg-transparent border-border/50 text-foreground placeholder:text-foreground/30" />
            </div>
            <div>
              <Label htmlFor="group" className="font-body text-xs uppercase tracking-[0.15em] text-foreground/40">Group Size</Label>
              <Input id="group" name="group" placeholder="How many in your crew?" className="mt-2 bg-transparent border-border/50 text-foreground placeholder:text-foreground/30" />
            </div>
            <div>
              <Label htmlFor="message" className="font-body text-xs uppercase tracking-[0.15em] text-foreground/40">Message</Label>
              <Textarea id="message" name="message" placeholder="Anything else we should know?" className="mt-2 bg-transparent border-border/50 text-foreground placeholder:text-foreground/30" rows={4} />
            </div>
            <button
              type="submit"
              className="w-full bg-secondary text-secondary-foreground font-body font-semibold text-sm tracking-wide uppercase py-3 rounded-sm hover:bg-secondary/90 transition-colors"
            >
              Send Inquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default InquirySection;

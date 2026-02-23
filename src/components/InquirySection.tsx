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
    <section id="inquire" className="py-20 sm:py-28 px-4 bg-muted/50 linen-texture">
      <div className="max-w-lg mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary text-center mb-3">
          Get in Touch
        </h2>
        <p className="font-body text-foreground/60 text-center mb-10 text-base sm:text-lg">
          Tell us a little about your group.
        </p>

        {submitted ? (
          <div className="bg-card border border-border rounded-sm p-8 text-center">
            <p className="font-display text-xl text-primary font-semibold mb-2">Thanks!</p>
            <p className="font-body text-foreground/70">
              We got your note. We'll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-sm p-6 sm:p-8 space-y-5">
            <div>
              <Label htmlFor="name" className="font-body text-sm text-foreground/70">Name</Label>
              <Input id="name" name="name" required placeholder="Your name" className="mt-1 bg-background" />
            </div>
            <div>
              <Label htmlFor="dates" className="font-body text-sm text-foreground/70">Dates</Label>
              <Input id="dates" name="dates" placeholder="When are you thinking?" className="mt-1 bg-background" />
            </div>
            <div>
              <Label htmlFor="group" className="font-body text-sm text-foreground/70">Group Size</Label>
              <Input id="group" name="group" placeholder="How many in your crew?" className="mt-1 bg-background" />
            </div>
            <div>
              <Label htmlFor="message" className="font-body text-sm text-foreground/70">Message</Label>
              <Textarea id="message" name="message" placeholder="Anything else we should know?" className="mt-1 bg-background" rows={4} />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wide uppercase py-3 rounded-md hover:bg-primary/90 transition-colors"
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

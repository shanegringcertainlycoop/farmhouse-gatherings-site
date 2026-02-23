import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  dates: z.string().max(200, "Too long").optional().default(""),
  group: z.string().max(100, "Too long").optional().default(""),
  message: z.string().max(2000, "Message is too long").optional().default(""),
});

const InquirySection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string || "",
      dates: formData.get("dates") as string || "",
      group: formData.get("group") as string || "",
      message: formData.get("message") as string || "",
    };

    const result = inquirySchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSending(true);
    try {
      const { error } = await supabase.functions.invoke("send-inquiry", {
        body: result.data,
      });

      if (error) throw error;

      setSubmitted(true);
      toast({ title: "Inquiry sent!", description: "We'll be in touch soon." });
    } catch {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
    } finally {
      setSending(false);
    }
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
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="dates" className="font-body text-xs uppercase tracking-[0.15em] text-foreground/40">Dates</Label>
              <Input id="dates" name="dates" placeholder="When are you thinking?" className="mt-2 bg-transparent border-border/50 text-foreground placeholder:text-foreground/30" />
              {errors.dates && <p className="text-destructive text-xs mt-1">{errors.dates}</p>}
            </div>
            <div>
              <Label htmlFor="group" className="font-body text-xs uppercase tracking-[0.15em] text-foreground/40">Group Size</Label>
              <Input id="group" name="group" placeholder="How many in your crew?" className="mt-2 bg-transparent border-border/50 text-foreground placeholder:text-foreground/30" />
              {errors.group && <p className="text-destructive text-xs mt-1">{errors.group}</p>}
            </div>
            <div>
              <Label htmlFor="message" className="font-body text-xs uppercase tracking-[0.15em] text-foreground/40">Message</Label>
              <Textarea id="message" name="message" placeholder="Anything else we should know?" className="mt-2 bg-transparent border-border/50 text-foreground placeholder:text-foreground/30" rows={4} />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-secondary text-secondary-foreground font-body font-semibold text-sm tracking-wide uppercase py-3 rounded-sm hover:bg-secondary/90 transition-colors disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default InquirySection;

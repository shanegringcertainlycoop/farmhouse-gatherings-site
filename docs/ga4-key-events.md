# GA4 Key Events Setup — Big Long Farmhouse

The inquiry form now pushes three events into the GTM `dataLayer`. This checklist
turns them into tracked conversions in GA4. You only need to do this once.

**Property:** GA4 behind GTM container `GTM-P4S84NGV`
**Events the site now sends:** `form_start`, `form_submit`, `generate_lead`, `form_error`

Each event also carries these parameters: `form_id` (`inquiry`), `form_name`
(`Booking Inquiry`), `form_destination` (`supabase:send-inquiry`), and — on
`generate_lead` — `currency` (`USD`) and `value` (`0`).

---

## Part A — Google Tag Manager (forward the events to GA4)

Do this first. GTM has to pass the `dataLayer` events through to GA4.

1. Open **tagmanager.google.com** → container `GTM-P4S84NGV`.
2. Confirm there's a **GA4 Configuration tag** firing on **All Pages**. If GA4 is
   already collecting `page_view`, this exists — note its **Measurement ID**
   (`G-XXXXXXX`).
3. Create the trigger:
   - **Triggers → New → Custom Event**.
   - Event name: `form_submit|generate_lead|form_start|form_error`
   - Check **Use regex matching**.
   - Name it `CE - Form Events`. Save.
4. Create the forwarding tag:
   - **Tags → New → Google Analytics: GA4 Event**.
   - Select your GA4 config tag / Measurement ID.
   - **Event Name:** `{{Event}}` (the built-in variable — enable it under
     Variables if it isn't already). This forwards each event under its own name.
   - **Event Parameters** (Add Row for each):
     `form_id` → `{{DLV - form_id}}`, `form_name` → `{{DLV - form_name}}`,
     `form_destination` → `{{DLV - form_destination}}`, `value` → `{{DLV - value}}`,
     `currency` → `{{DLV - currency}}`.
     Create each `DLV - *` as a **Data Layer Variable** with the matching name.
   - **Trigger:** `CE - Form Events`. Save.
5. **Preview** the container (GTM Preview / Tag Assistant), load the site, submit a
   test inquiry, and confirm `form_start` fires on first field focus and both
   `form_submit` and `generate_lead` fire on a successful send.
6. **Submit / Publish** the container version.

---

## Part B — GA4 (mark them as Key Events)

Do this after GTM is publishing the events (GA4 needs to have seen an event at
least once before it appears in the list — submit a test inquiry first).

1. Open **analytics.google.com** → correct property → **Admin** (bottom left).
2. **Admin → Data display → Events.** Confirm `form_submit` and `generate_lead`
   appear in the list (may take a few minutes to hours after the first hit; use
   **Reports → Realtime** to confirm they're arriving live).
3. **Admin → Data display → Key events → Mark as key event** (or toggle the
   **Mark as key event** switch next to the event in the Events list):
   - [ ] `generate_lead`  ← primary booking-enquiry conversion
   - [ ] `form_submit`    ← secondary / backup conversion
   - (leave `form_start` and `form_error` as standard events — useful for a
     funnel and error rate, but not conversions)
4. (Optional) **Admin → Product links → Google Ads** — if you ever run Ads, import
   `generate_lead` as a conversion there too.

---

## Part C — Confirm it's working (a day later)

- **Reports → Engagement → Events:** `form_submit` / `generate_lead` show counts.
- **Reports → Realtime:** submit a test inquiry and watch the event land within
  ~30 seconds with the right parameters.
- **Admin → Key events:** both show a ✓ and a non-zero count once real inquiries
  come in.

That closes the report's #1 issue — every booking enquiry is now counted, so the
next traffic spike won't "pass by uncounted."

---

### Notes

- `value: 0` is a placeholder. If you ever want to weight a lead (e.g. estimate an
  average booking value), change it in `src/components/InquirySection.tsx` where
  `generate_lead` is pushed, and set the same value in the GTM tag.
- No code changes are needed for any of the steps above — the events are already
  live in the site. This is pure GTM + GA4 configuration.

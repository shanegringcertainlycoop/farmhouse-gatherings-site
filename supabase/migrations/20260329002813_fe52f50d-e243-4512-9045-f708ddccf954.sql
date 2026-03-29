CREATE TABLE public.inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  dates text DEFAULT '',
  group_size text DEFAULT '',
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can insert inquiries"
  ON public.inquiries FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can read inquiries"
  ON public.inquiries FOR SELECT
  TO service_role
  USING (true);
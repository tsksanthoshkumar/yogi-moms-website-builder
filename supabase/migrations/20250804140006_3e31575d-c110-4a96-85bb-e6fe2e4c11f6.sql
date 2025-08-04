-- Create form_fill table for user registration and payment tracking
CREATE TABLE public.form_fill (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  phone TEXT,
  is_paid BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.form_fill ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own registration" 
ON public.form_fill 
FOR SELECT 
USING (email = auth.jwt() ->> 'email');

CREATE POLICY "Anyone can register" 
ON public.form_fill 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can update their own payment status" 
ON public.form_fill 
FOR UPDATE 
USING (email = auth.jwt() ->> 'email');

CREATE POLICY "Admin can view all registrations" 
ON public.form_fill 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = now();
RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_form_fill_updated_at
BEFORE UPDATE ON public.form_fill
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for faster email lookups
CREATE INDEX idx_form_fill_email ON public.form_fill(email);
CREATE INDEX idx_form_fill_is_paid ON public.form_fill(is_paid);
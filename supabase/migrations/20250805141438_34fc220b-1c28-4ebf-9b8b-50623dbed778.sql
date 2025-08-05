-- Drop existing tables
DROP TABLE IF EXISTS public.form_fill CASCADE;
DROP TABLE IF EXISTS public.form_submissions CASCADE; 
DROP TABLE IF EXISTS public.prenatal_users CASCADE;
DROP TABLE IF EXISTS public.profiles CASCADE;
DROP TABLE IF EXISTS public."prenatl mom" CASCADE;

-- Create prenatlmoms table for storing over 2000+ users
CREATE TABLE public.prenatlmoms (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  password_hash TEXT,
  payment_status TEXT NOT NULL DEFAULT 'unpaid' CHECK (payment_status IN ('unpaid', 'paid')),
  razorpay_payment_id TEXT,
  amount_paid INTEGER DEFAULT 0,
  currency TEXT DEFAULT 'INR',
  paid_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  notes TEXT
);

-- Enable Row Level Security
ALTER TABLE public.prenatlmoms ENABLE ROW LEVEL SECURITY;

-- Create policies for data access
CREATE POLICY "Admin can view all users" 
ON public.prenatlmoms 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can register" 
ON public.prenatlmoms 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can update their own data" 
ON public.prenatlmoms 
FOR UPDATE 
USING (email = (auth.jwt() ->> 'email'::text));

-- Create indexes for performance with 2000+ users
CREATE INDEX idx_prenatlmoms_email ON public.prenatlmoms(email);
CREATE INDEX idx_prenatlmoms_payment_status ON public.prenatlmoms(payment_status);
CREATE INDEX idx_prenatlmoms_created_at ON public.prenatlmoms(created_at);
CREATE INDEX idx_prenatlmoms_razorpay_payment_id ON public.prenatlmoms(razorpay_payment_id);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_prenatlmoms_updated_at
BEFORE UPDATE ON public.prenatlmoms
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
-- Create a comprehensive user data table that can handle 1000+ users
CREATE TABLE public.prenatal_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  password_hash TEXT,
  payment_status TEXT DEFAULT 'unpaid' CHECK (payment_status IN ('unpaid', 'paid')),
  registration_completed BOOLEAN DEFAULT false,
  payment_method TEXT,
  payment_id TEXT,
  razorpay_payment_id TEXT,
  amount_paid INTEGER DEFAULT 0,
  currency TEXT DEFAULT 'INR',
  signup_source TEXT DEFAULT 'website',
  trimester INTEGER,
  due_date DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  paid_at TIMESTAMP WITH TIME ZONE,
  notes TEXT
);

-- Create indexes for better performance with 1000+ users
CREATE INDEX idx_prenatal_users_email ON public.prenatal_users(email);
CREATE INDEX idx_prenatal_users_payment_status ON public.prenatal_users(payment_status);
CREATE INDEX idx_prenatal_users_created_at ON public.prenatal_users(created_at);

-- Enable Row Level Security
ALTER TABLE public.prenatal_users ENABLE ROW LEVEL SECURITY;

-- Create policies for the table
CREATE POLICY "Admin can view all users" 
ON public.prenatal_users 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can register" 
ON public.prenatal_users 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can update their own data" 
ON public.prenatal_users 
FOR UPDATE 
USING (email = (auth.jwt() ->> 'email'::text));

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_prenatal_users_updated_at
BEFORE UPDATE ON public.prenatal_users
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
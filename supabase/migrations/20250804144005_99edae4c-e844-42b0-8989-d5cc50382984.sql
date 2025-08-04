-- Create prenatl mom table to store all user signup data
CREATE TABLE public."prenatl mom" (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  is_paid BOOLEAN NOT NULL DEFAULT false,
  payment_status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public."prenatl mom" ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access
CREATE POLICY "Admin can view all prenatal mom data" 
ON public."prenatl mom" 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can insert prenatal mom data" 
ON public."prenatl mom" 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admin can update prenatal mom data" 
ON public."prenatl mom" 
FOR UPDATE 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_prenatl_mom_updated_at
BEFORE UPDATE ON public."prenatl mom"
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
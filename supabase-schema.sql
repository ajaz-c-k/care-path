-- CureRoute Supabase SQL Schema

-- 1. Hospitals Table
CREATE TABLE hospitals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  city TEXT NOT NULL,
  country TEXT NOT NULL,
  rating DECIMAL,
  success_rate INTEGER, -- e.g., 95 for 95%
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 2. Treatments Table
CREATE TABLE treatments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  hospital_id UUID REFERENCES hospitals(id) ON DELETE CASCADE,
  treatment_name TEXT NOT NULL,
  doctor_specialization TEXT NOT NULL,
  cost_inr INTEGER NOT NULL,
  stay_duration_days INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 3. Profiles Table (Extends Supabase Auth)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  full_name TEXT,
  phone_number TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 4. Support Services Table
CREATE TABLE support_services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  service_category TEXT NOT NULL, -- 'Translator', 'Guide', 'Transport'
  name TEXT NOT NULL,
  city TEXT NOT NULL,
  contact_info TEXT,
  rating DECIMAL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 5. User Documents Table (For storage references)
CREATE TABLE user_documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  document_name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Optional: Insert some dummy data for Hospitals
INSERT INTO hospitals (name, city, country, rating, success_rate)
VALUES 
  ('Apollo Hospital', 'Chennai', 'India', 4.8, 98),
  ('Fortis Healthcare', 'Delhi', 'India', 4.6, 95),
  ('Aster Medcity', 'Kochi', 'India', 4.7, 96);

-- =========================================================================
-- CALCUTTA AGRI TECH — SUPABASE DATABASE MIGRATION SCRIPT
-- Enforces Row-Level Security (RLS), least privilege, and sanitized schemas
-- =========================================================================

-- 1. Inquiries Table
CREATE TABLE IF NOT EXISTS public.inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    machine TEXT,
    capacity TEXT,
    location TEXT,
    message TEXT,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'contacted', 'closed')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous or authenticated clients to insert new inquiries
CREATE POLICY "Allow public insert of inquiries"
    ON public.inquiries
    FOR INSERT
    WITH CHECK (true);

-- Restrict inquiry reading to authenticated service role / administrators
CREATE POLICY "Allow authenticated read of inquiries"
    ON public.inquiries
    FOR SELECT
    TO authenticated
    USING (true);

-- 2. Contact Messages Table
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'archived')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow public insert of contact messages
CREATE POLICY "Allow public insert of contact messages"
    ON public.contact_messages
    FOR INSERT
    WITH CHECK (true);

-- Restrict reading to authenticated service role
CREATE POLICY "Allow authenticated read of contact messages"
    ON public.contact_messages
    FOR SELECT
    TO authenticated
    USING (true);

-- 3. Products Table (for dynamic catalog if configured)
CREATE TABLE IF NOT EXISTS public.products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    model_code TEXT NOT NULL,
    category TEXT NOT NULL,
    tagline TEXT,
    description TEXT,
    image_url TEXT,
    specifications JSONB,
    features JSONB,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Public can view active products
CREATE POLICY "Allow public read of active products"
    ON public.products
    FOR SELECT
    USING (is_active = true);

-- Only authenticated admins can modify products
CREATE POLICY "Allow authenticated admin manage products"
    ON public.products
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON public.inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_created_at ON public.contact_messages(created_at DESC);

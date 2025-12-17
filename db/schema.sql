CREATE TABLE users{
    id UUID PRIMARY KEY REFERENCES auth.users(id),
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    image TEXT,
    created_at TIMESTAMP DEFAULT now()
}

CREATE TABLE events {
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    about TEXT NOT NULL ,
    event_image TEXT,
    created_at TIMESTAMP DEFAULT now()
}
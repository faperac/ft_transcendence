-- create user fab with password 'pass';
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'fab') THEN
        CREATE USER fab WITH PASSWORD 'pass';
    END IF;
END
$$;

-- create database ft_transcendence;
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'ft_transcendence') THEN
        CREATE DATABASE ft_transcendence;
    END IF;
END
$$;

\c ft_transcendence

-- create table users
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'users') THEN
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            display_name VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            avatar VARCHAR(255) DEFAULT 'default_avatar.png',
            is_online BOOLEAN DEFAULT FALSE,
            wins INT DEFAULT 0,
            losses INT DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    END IF;
END
$$;

-- create table friends
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'friends') THEN
        CREATE TABLE friends (
            user_id INT REFERENCES users(id) ON DELETE CASCADE,
            friend_id INT REFERENCES users(id) ON DELETE CASCADE,
            status VARCHAR(20) CHECK (status IN ('pending', 'accepted', 'declined')),
            PRIMARY KEY (user_id, friend_id)
        );
    END IF;
END
$$;

-- create table match_history
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'match_history') THEN
        CREATE TABLE match_history (
            id SERIAL PRIMARY KEY,
            user_id INT REFERENCES users(id) ON DELETE CASCADE,
            opponent_id INT REFERENCES users(id),
            result VARCHAR(20) CHECK (result IN ('win', 'loss')),
            match_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            details TEXT
        );
    END IF;
END
$$;

-- add user test
INSERT INTO users (username, password, display_name, email, avatar, is_online, wins, losses, created_at, updated_at) VALUES ('new_user', crypt('new_password', gen_salt('bf')), 'New User', 'new_user@example.com', 'default_avatar.png', FALSE, 0, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)ON CONFLICT (username) DO NOTHING;

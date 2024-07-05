-- init.sql

-- Créer un utilisateur seulement s'il n'existe pas
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'fab') THEN
        CREATE USER fab WITH PASSWORD 'pass';
    END IF;
END
$$;

-- Créer la base de données seulement si elle n'existe pas
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'ft_transcendence') THEN
        CREATE DATABASE ft_transcendence;
    END IF;
END
$$;

-- Se connecter à la base de données ft_transcendence
\c ft_transcendence

-- Créer la table users seulement si elle n'existe pas
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'users') THEN
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            registered_intra42 BOOLEAN NOT NULL,
            profile_picture VARCHAR(255) -- Ajout de la colonne profile_picture
        );
    END IF;
END
$$;

-- Ajouter un utilisateur de test avec un mot de passe haché
INSERT INTO users (username, password, registered_intra42, profile_picture) 
VALUES ('test_user', crypt('password_hash', gen_salt('bf')), true, 'profile_picture_path')
ON CONFLICT (username) DO NOTHING;

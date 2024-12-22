-- Créer la base de données si elle n'existe pas
CREATE DATABASE IF NOT EXISTS match_scores;

-- Utiliser la base de données
USE match_scores;

-- Créer une table pour les matchs
CREATE TABLE IF NOT EXISTS matches (
    id INT AUTO_INCREMENT PRIMARY KEY,
    home_team VARCHAR(100) NOT NULL,
    away_team VARCHAR(100) NOT NULL,
    home_score INT DEFAULT 0,
    away_score INT DEFAULT 0,
    match_date DATE NOT NULL
);

-- Insérer des données initiales
INSERT INTO matches (home_team, away_team, home_score, away_score, match_date)
VALUES 
    ('Barcelone', 'Real madrid', 3, 2, '2024-12-15'),
    ('Athletic Bilbao', 'Gerone', 1, 1, '2024-12-16'),
    ('PSG', 'Monaco', 0, 4, '2024-12-17');

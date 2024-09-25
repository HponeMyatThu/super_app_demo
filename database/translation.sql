CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE
  translation (
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    translation_id VARCHAR(255),
    english VARCHAR(255),
    french VARCHAR(255),
    german VARCHAR(255),
    spanish VARCHAR(255),
    russian VARCHAR(255),
    PRIMARY KEY (id)
  );

INSERT INTO translation (translation_id, english, french, german, spanish, russian)
    VALUES 
        ('T001', 'Hello', 'Bonjour', 'Hallo', 'Hola', 'Здравствуйте'),
        ('T002', 'Goodbye', 'Au revoir', 'Auf Wiedersehen', 'Adiós', 'До свидания'),
        ('T003', 'Thank you', 'Merci', 'Danke', 'Gracias', 'Спасибо'),
        ('T004', 'Yes', 'Oui', 'Ja', 'Sí', 'Да'),
        ('T005', 'No', 'Non', 'Nein', 'No', 'Нет'),
        ('T006', 'Please', 'Sil vous plaît', 'Bitte', 'Por favor', 'Пожалуйста'),
        ('T007', 'Sorry', 'Désolé', 'Es tut mir leid', 'Lo siento', 'Извините'),
        ('T008', 'Excuse me', 'Excusez-moi', 'Entschuldigung', 'Perdón', 'Простите'),
        ('T009', 'How are you?', 'Comment ça va?', 'Wie geht es Ihnen?', '¿Cómo estás?', 'Как дела?'),
        ('T010', 'Good morning', 'Bonjour', 'Guten Morgen', 'Buenos días', 'Доброе утро'),
        ('T011', 'Good night', 'Bonne nuit', 'Gute Nacht', 'Buenas noches', 'Спокойной ночи'),
        ('T012', 'Congratulations', 'Félicitations', 'Herzlichen Glückwunsch', 'Felicitaciones', 'Поздравляю'),
        ('T013', 'Welcome', 'Bienvenue', 'Willkommen', 'Bienvenido', 'Добро пожаловать'),
        ('T014', 'I love you', 'Je taime', 'Ich liebe dich', 'Te quiero', 'Я тебя люблю'),
        ('T015', 'Help', 'Aidez-moi', 'Hilfe', 'Ayuda', 'Помогите'),
        ('T016', 'Where is the bathroom?', 'Où sont les toilettes?', 'Wo ist die Toilette?', '¿Dónde está el baño?', 'Где туалет?'),
        ('T017', 'I don’t understand', 'Je ne comprends pas', 'Ich verstehe nicht', 'No entiendo', 'Я не понимаю'),
        ('T018', 'What time is it?', 'Quelle heure est-il?', 'Wie spät ist es?', '¿Qué hora es?', 'Который час?'),
        ('T019', 'I am hungry', 'Jai faim', 'Ich habe Hunger', 'Tengo hambre', 'Я голоден'),
        ('T020', 'I am thirsty', 'Jai soif', 'Ich habe Durst', 'Tengo sed', 'Я хочу пить');


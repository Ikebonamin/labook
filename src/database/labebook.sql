-- Active: 1676323340880@@127.0.0.1@3306
CREATE table users  (
  id TEXT NOT NULL UNIQUE PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  role TEXT,
created_at TEXT DEFAULT (DATETIME()) NOT NULL

);

INSERT INTO users (id, name, email, password) 
VALUES

("u002", "Norberto Bonamin ","raft@gmail.com","677agbguyaaa" ),
("u003", "Claudio Bonamin","claudio@gmail.com","345agbguyaaa" ),
("u004", "Juliana Treis","jutreis@gmail.com","a43gbguyaaa" ),
("u005", "Rafael mendes","RafamD@gmail.com","aertgbguyaaa" ),
("u006", "Bruno Costa","BCB@gmail.com","tretagbguyaaa" ),
("u007", "Vanessa","Vanessa@gmail.com","qwewqagbguyaaa" );




CREATE table posts (
  id TEXT NOT NULL UNIQUE PRIMARY KEY,
  creator_id TEXT NOT NULL,
  content TEXT,
  likes, INTEGER DEFAULT (0)NOT NULL,
  dislikes INTEGER DEFAULT (0) NOT NULL,
  created_at TEXT DEFAULT (DATETIME()), 
  updated_at TEXT DEFAULT (DATETIME()), 
  Foreign Key (creator_id) REFERENCES user(id)
  ON DELETE CASCADE
  ON UPDATE CASCADE
);
DROP TABLE posts;


INSERT INTO posts (id, creator_id, content) VALUES
("p001", "u003", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"),
("p002", "u003", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"),
("p003", "u003", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"),
("p004", "u003", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stay unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"),
("p005", "u003", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remai with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum");


CREATE Table likes_dislikes(
user_id TEXT NOT NULL,
post_id TEXT NOT NULL,
like INTEGER DEFAULT (0),
Foreign Key (user_id) REFERENCES users(id),
  ON DELETE CASCADE
  ON UPDATE CASCADE
Foreign Key (post_id) REFERENCES posts(id)
  ON DELETE CASCADE
  ON UPDATE CASCADE
);

INSERT INTO likes_dislikes (user_id, post_id, like)
VALUES 
("u004", "p002",1),
("u002", "p002",1),
("u003", "p002",1),
("u004", "p003",1),
("u003", "p004",0),
("u001", "p005",0);

UPDATE posts
set likes = 1
WHERE id = "p003";

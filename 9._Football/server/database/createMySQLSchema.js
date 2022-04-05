import db from "./createMySQLConnection";

db.query(`
    CREATE TABLE IF NOT EXSIST players (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(70)
    );
`);

db.end();
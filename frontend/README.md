# Documentation

# stack USed : MERN

frontend : React, vanilla css
backend : Express & Node
DataBase : Prisma ORM with PostgreSQL

# frontend

basic packages are used, for icons, routing and dom manipulation
"dom": "^0.0.3",
"react": "^19.2.0",
"react-dom": "^19.2.0",
"react-icons": "^5.5.0",
"react-router-dom": "^7.9.5",
"router": "^2.2.0"

working of frontend :
login page : Page is designed, when user enter its email and password after validation of email and password field, request is made to backend to check weather user is authorized or not, after authorized user is landed to home page, which is currently directing you to Price List page where all products are listed, which is related to that user.
Language Contain is fetched from DB and whenever full contain is fetched it render to the webpage, till then you will see loader. After full fetch you can switch language from header between languages, that have website Contain in DB.
Home Page : When user visits home page, a verify request is made to prevent it from direct user.
Price list is fetched from DB through backend, and all field are editable here and make request to update DB whenever that particular field is leaved.

# backend

packages used like :
"@prisma/client": "^6.13.0",
"bcrypt": "^5.1.1",
"cookie-parser": "^1.4.7",
"cors": "^2.8.5",
"crypto": "^1.0.1",
"date-fns": "^4.1.0",
"date-fns-tz": "^3.2.0",
"dotenv": "^16.4.7",
"effect": "3.14.14",
"http": "^0.0.1-security",
"js-cookie": "^3.0.5",
"jsonwebtoken": "^9.0.2",
"path": "^0.12.7",
"prisma": "^6.13.0",

where prisma ORM is used to manipulate data from postgreSQL DB
Jason web token is used for authorization.
crypto to decrypt password while matching user password with DB password.
all other packages are basic packages.

Working of backend :
Controllers used in backend : Request, response it sended with proper status code and message

1. Auth.js : this check user is valid or not, if valid then sending it to the home page with access token and that access token is stored in user session storage, and used in header when ever any request is made from frontend after that every request is protected with middleware which is jwtVerifier, if user is valid then it will allow to move forward or if not then send it back to login page.
2. getContain.js : this fetch the data from DB and send it to the user at frontend, initially it is set to the frontend contain variable and also in user local storage so that whenever user refreshes page multiple time it would not lead to multiple req
3. Service.js : this fetch the product of that particular user from DB and send it to the user.
4. Verify.js : Prevent from Direct User.

DB models used here:
model Users {
id Int @id @unique(map: "user_id_UNIQUE") @default(autoincrement())
first_name String @db.VarChar(128)
middle_name String? @db.VarChar(128)
last_name String @db.VarChar(128)
gender String @db.VarChar(45)
mobile_no String @unique(map: "mobile_no_UNIQUE") @db.VarChar(20)
email String @unique(map: "email_UNIQUE") @db.VarChar(128)
password String @db.VarChar(512)
reference_token String @unique(map: "reference_token_UNIQUE") @db.VarChar(512)
}

model Service {
id Int @id @unique(map: "service_id_UNIQUE") @default(autoincrement())
email String @db.VarChar(128)
service String @db.VarChar(256)
inPrice Int
price Int
unit String @db.VarChar(128)
inStock Int
description String @db.VarChar(512)
}

model Contain {
id Int @id @unique(map: "contain_id_UNIQUE") @default(autoincrement())
languages String @db.Text
page String @db.Text
target String @db.Text
value String @db.Text
}

# Important links
1. Github : https://github.com/harishnigam21/SOW
2. Deployed Link : https://sow-front8472.vercel.app/
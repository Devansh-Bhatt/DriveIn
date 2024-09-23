# iCloud - Personal Cloud Storage Application

A passwordless sign-in application built with Next.js, TypeScript, tRPC, Drizzle ORM, and TailwindCSS. The app features a responsive dashboard with sections for user profiles, photos, document storage, and notes. 

## NOTE : 
The Passkey Sign-In only works for iOS devices and that too sometimes glitches. It is recommended to sign in through Github.

## Features
Responsive Dashboard with the following sections:

    1. Passwordless Authentication with Github (Recommended) and Passkey (Not recommended).

    2. User profile

    3. Photos/images upload & display

    4. Drive (document storage with upload)

    5. Notes management

    6. File Storage: Images and documents with metadata stored in the database.

    7. Notes Feature: Create, edit, view notes, with timestamps and titles.

    8. API: Was not able to generate Open-API specification file hence the endpoints are not exposed through Open-API.

    9. Fully type-safe backend/frontend integration using tRPC.

## 🛠 Stack
- Next.js (App Directory)
- TypeScript
- tRPC for API routes
- Drizzle ORM for database interactions
- SQLite (in development)
- TailwindCSS for UI
- UploadThing for file storage
- Turborepo for monorepo management

## Setup
To build all apps and packages, run the following command:
```
git clone https://github.com/Devansh-Bhatt/Huddle_iCloud 
cd apps/icloud
npm i 
```
  1. Setup Environment Variables
    - Setup your Database locally or through any provider. I chose Supabase as the my Database provider and get their respective URL's, and secret keys accordingly. 
    - If you are using supabase, get the the DATABASE_URL,SUPABASE_URL and ANON_KEY. Setup a Github OAuth Application and the corresponding ID,Secret and AUTH_SECRET (can be anything).
    - Setup a Uploadthing bucket/App and get the corresponding SECRET,APP_ID and TOKEN for the upload functionanlity. 
    - Also get the PASSKEY_ID and PASSKEY_SECRET if want sign in through PASSKEY, although it doesn't work as expected.

  ```
  DATABASE_URL = ''
  NEXT_PUBLIC_SUPABASE_URL = ''
  NEXT_PUBLIC_SUPABASE_ANON_KEY = ''
  AUTH_GITHUB_ID = ''
  AUTH_GITHUB_SECRET = ''
  AUTH_SECRET = ''
  UPLOADTHING_SECRET = ''
  UPLOADTHING_APP_ID = ''
  UPLOADTHING_TOKEN = ''
  PASSKEY_ID = ''
  PASSKEY_SECRET = ''
  ```
  2. Upload Schema to Database
  Delete the migrations folder inside the supabase directory.   If you wish to change the location of your migrations, you change it under the drizzle.config.ts file at the root the application. 

  Now run : 
  ```
  npx drizzle-kit generate
  npx drizzle-kit migrate
  ```
  3. Change Provider link
   In the ``` createClient``` function under ``` app/trpc/provdier.tsx``` change the ```url``` of ``` httpBatchlink``` field to ``` http://localhost:3000```

Now application should now be ready to run. Move back to the root of the project and run : 
```
npx turbo run dev --filter icloud
```   


##  Database Schema


1. **User Table**


| 	id	| 	name	| 	email	| 	emailVerified	| 	image	|
| 	:-----:	| 	:-----:	| 	:-----:	| 	:-----:	| 	:-----:	|
| 	text (PK) | 	text	| 	text	| 	timestamp	| 	text	|



2. **Accounts Table**


| 	userId	| 	type	| 	provider	| 	providerAccountId	| 	refresh_token	| 	access_token	| 	expires_at	| 	token_type	| 	scope	| 	id_token	| 	session_state	|
| 	:-----:	| 	:-----:	| 	:-----:	| 	:-----:	| 	:-----:	| 	:-----:	| 	:-----:	| 	:-----:	| 	:-----:	| 	:-----:	| 	:-----:	|
| 	text (FK -> User.id)	| 	text (Composite PK)	| 	text (Composite PK)	| 	text	| 	text	| 	text	| 	text	| 	text	| 	text	| 	text	| 	text	|

3. **Session Table**


| 	sessionToken	| 	userId	| 	expires	|
| 	:-----:	| 	:-----:	| 	:-----:	|
| 	text (PK)	| 	text (FK)	| 	timestamp	|


4. **Verification Token Table**


| 	identifier	| 	token	| 	expires	|
| 	:-----:	| 	:-----:	| 	:-----:	|
| 	text (Composite PK)	| 	text (Composite PK)	| 	timestamp	|



5. **Authenticators Table** 


| 	credentialID	| 	userId	| 	providerAccountId	| 	credentialPublicKey	| 	counter	| 	credentialDeviceType	| 	credentialBackedUp	| 	transports	|
| 	:-----:	| 	:-----:	| 	:-----:	| 	:-----:	| 	:-----:	| 	:-----:	| 	:-----:	| 	:-----:	|
| 	text (Composite PK)	| 	text (Composite PK)	| 	text	| 	text	| 	integer	| 	text	| 	boolean	| 	text	|



6. **Photos Table**


| 	id	| 	userId	| 	link	|
| 	:-----:	| 	:-----:	| 	:-----:	|
| 	text (PK)	| 	text (FK)	| 	text	|



7. **Documents Table**



| 	id	| 	userId	| 	link	| 	name	|
| 	:-----:	| 	:-----:	| 	:-----:	| 	:-----:	|
| 	text (PK)	| 	text (FK)	| 	text	| 	text	|



8. **Notes Table**


| 	id	| 	userId	| 	content	| 	title	| 	lastUpdated	|
| 	:-----:	| 	:-----:	| 	:-----:	| 	:-----:	| 	:-----:	|
| 	text (PK)	| 	text (FK)	| 	text	| 	text	| 	timestamp	|

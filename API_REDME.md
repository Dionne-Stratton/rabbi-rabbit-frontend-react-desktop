# Rabbi-Rabbit - Backend

To learn more about the over all project please visit the repos listed below.

## Quicklinks

- [Related Repos](#related-repos)
- [Tech Stack](#tech-stack)
- [Data Structures](#data-structures)
  - [User](#user)
  - [User Pins](#user-pins)
  - [Vocabulary Set](#vocabulary-set)
  - [Vocabulary](#vocabulary)
- [End Points](#end-points)
  - [Authentication Routes](#authentication-routes)
  - [Profile Routes](#profile-routes)
  - [Vocabulary Routes](#vocabulary-routes)
  - [Email Routes](#email-routes)
- [Instalation and Starting](#instalation-and-starting)

## Related Repos

[Desktop Web App](https://github.com/Rabbi-Rabbit/frontend-react-desktop)

[Native Mobile App](https://github.com/Rabbi-Rabbit/react-native-mobile-app)

## Tech Stack

- MongoDB / Mongoose

- Node / Express / REST api

- Json webtokens

- Tests with Mocha (coming soon)

## Data Structures

### User

| data             | type        | required  |
| ---------------- | ----------- | --------- |
| \_id             | number      | generated |
| email            | string      | yes       |
| password         | string      | yes       |
| user_lessons     | [String]    | no        |
| available_lesson | number      | no        |
| user_vocab       | [Vocab Set] | no        |

### User Pins

| data     | type   | required  |
| -------- | ------ | --------- |
| email    | string | yes       |
| pin      | string | yes       |
| expireAt | date   | generated |

### Vocabulary Set

| data          | type     | required |
| ------------- | -------- | -------- |
| vocab_id      | ObjectId | yes      |
| next_review   | date     | no       |
| lesson_number | number   | no       |
| rank          | number   | no       |

### Vocabulary

| data               | type   | required  |
| ------------------ | ------ | --------- |
| \_id               | number | generated |
| hebrew             | string | no        |
| hebrew_with_nikkud | string | no        |
| reading            | string | no        |
| meaning            | string | no        |
| lesson             | number | no        |
| gender             | string | no        |

## End Points

### Authentication Routes

| Method | Endpoint               | Token | Description                                       |
| ------ | ---------------------- | ----- | ------------------------------------------------- |
| POST   | `/auth/signup`         | no    | Registers new user and returns token              |
| POST   | `/auth/signin`         | no    | Signs in registered user and returns token        |
| PUT    | `/auth/password-reset` | no    | Verifies email and pin then updates user password |

### Vocabulary Routes

| Method | Endpoint          | API Key | Description                     |
| ------ | ----------------- | ------- | ------------------------------- |
| POST   | `/vocab         ` | yes     | Creates new vocab word          |
| GET    | `/vocab`          | no      | Returns all vocabulary          |
| GET    | `/vocab/:id`      | no      | Returns single vocab word by id |
| PUT    | `/vocab/:id`      | yes     | Updates vocab word by id        |
| DELETE | `/vocab/:id`      | yes     | Deletes vocab word by id        |

**Note:** API key must be sent in the `x-api-key` header for protected routes.

### Profile Routes

| Method | Endpoint   | Token | Description                              |
| ------ | ---------- | ----- | ---------------------------------------- |
| GET    | `/profile` | yes   | Returns the current user's profile       |
| PUT    | `/profile` | yes   | Returns the user's newly updated profile |
| DELETE | `/profile` | yes   | Deletes the user's profile               |

### Email Routes

| Method | Endpoint | Token | Description                                                |
| ------ | -------- | ----- | ---------------------------------------------------------- |
| POST   | `/email` | no    | Creates random pin, saves to userPins, sends email to user |

## Instalation and Starting

• Npm i - install dependencies

• Npm start - run app with node

• Npm run server - rup app with nodemon

• Npm run test - runs tests with mocha

• You'll need to create your own .env file with:

MONGODB_URL={your_key_here}<br>
JWT_SECRET={your_secret_here}
EMAIL={your_email_here}
PASSWORD={your_password_here}
API_KEY={your_api_key_here}

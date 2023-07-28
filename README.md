# gigih_midterm

## Table of Contents

- [Introduction](#introduction)
- [Database Structure](#database-structure)
- [API Structure](#api-structure)
- [List of API Endpoints](#list-of-api-endpoints)
- [How to Run Locally](#how-to-run-locally)

## Introduction

This repository contains the backend implementation of the Tokopedia Play Clone, a video streaming platform. The backend is built using Node.js, Express.js, and MongoDB.

## Database Structure

## API Structure

## List API request and response

### GET /api/videos

---

Returns all users in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```json
[
  {
    "_id": "64c3c7713176cca275313bcd",
    "VideoID": "sdasda",
    "Title": "Baju Oversize",
    "UrlImageThumb": "asdada",
    "UrlVideo": "sdlaksd"
  }
]
```

- **Error Response:**
  - **Code:** 500  
    **Content:** `{ error : "Error fetching video thumbnails" }`

### POST /api/videos

---

Create new videos

- **URL Params**  
  None
- **Data Params**
  ```json
  {
    "titleVideo" : string,
    "urlImageThumbnail" : string,
    "urlVideo" : string
  }
  ```
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```json
{
  "VideoID": "8c997394-0b4b-4364-9e42-cc7fba77caed",
  "TitleVideo": "Kaos",
  "UrlImageThumbnail": "http.com",
  "UrlVideo": "link",
  "_id": "64c3f38b7df654dc65407a06",
  "__v": 0
}
```

- **Error Response:**
  - **Code:** 500  
    **Content:** `{ error : "error creating video" }`

### GET /api/videos/:videoId/products

---

Returns all Product associated with the specified video.

- **URL Params**  
  Required: videoId=[string]
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```json
[
  {
    "_id": "64c3d3ce3176cca275313bd4",
    "VideoID": "2",
    "ProductID": "4",
    "LinkProduct": "link.com",
    "Title": "Product 4",
    "Price": 1000
  }
]
```

- **Error Response:**
  - **Code:** 500  
    **Content:** `{ error : "Error fetching products" }`

### GET /api/videos/:videoId/comments

---

Returns all Comments associated with the specified video.

- **URL Params**  
  Required: videoId=[string]
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```json
[
  {
    "_id": "64c3f23a7df654dc65407a04",
    "VideoID": "2",
    "Username": "adit",
    "Comment": "barangnya lengkap banget",
    "Timestamp": "2023-07-28T16:52:10.583Z",
    "__v": 0
  }
]
```

- **Error Response:**
  - **Code:** 500  
    **Content:** `{ error : "error fetching comment" }`

### POST /api/videos/:videoId/comments

---

Create Comment in the specified video.

- **URL Params**  
  None
- **Data Params**
  ```json
  {
    "username": string,
    "comment": string
  }
  ```
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```json
{
  "VideoID": "2",
  "Username": "adit",
  "Comment": "barangnya lengkap banget",
  "_id": "64c3f23a7df654dc65407a04",
  "Timestamp": "2023-07-28T16:52:10.583Z",
  "__v": 0
}
```

- **Error Response:**
  - **Code:** 500  
    **Content:** `{ error : "error creating comment" }`

## How to run

To run the backend API locally on your machine, follow these steps:

1. Clone this repository to your local machine.
2. Install Node.js and npm if you haven't already.
3. Install the required dependencies by running `npm install` in the project root directory.
4. Set up a MongoDB database locally with name `tokopedia-play-clone`.
5. Start the server by running `npm run start`. The server will start running at `http://localhost:3000`.

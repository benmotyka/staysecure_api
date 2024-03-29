<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/benmotyka/staysecure_api">
    <img src="readme/banner.svg" alt="Banner">
  </a>
  <h1 align="center">staysecure.pl</h1>
  <h3 align="center">Cybersecurity courses</h3>
  <h5 align="center">Back-end App</h5>
  <p align="center">
    <a href="https://github.com/benmotyka/staysecure_api/issues">Report Bug</a>
    ·
    <a href="https://github.com/benmotyka/staysecure_api/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Server app for [https://staysecure.pl](https://staysecure.pl) website. 

Please refer to [https://github.com/benmotyka/staysecure_front](https://github.com/benmotyka/staysecure_front) to get more information about the project.

### Built With

* [Node.js](https://nodejs.org/)
* [Express JS](https://expressjs.com/)
* [GraphQL](https://graphql.org/)
* [Mongoose](https://mongoosejs.com/)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB database](https://cloud.mongodb.com/)
- [Sendgrid account](https://sendgrid.com/)
- [reCAPTCHA](https://www.google.com/recaptcha/about/)

### Installation

1. Clone this repo and enter project
   ```sh
   git clone https://github.com/benmotyka/staysecure_api.git
   cd staysecure_api/
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create `.env` file and enter:
   ```
   PORT=<backend_app_port> // eg: 8081
   WEBSITE_URL=<frontend_app_url> // eg: http://localhost:3000

   MONGO_USER=<mongodb_username>
   MONGO_PASSWORD=<mongodb_password>
   MONGO_DB_NAME=<mongodb_database_name>

   JWT_SECRET=<secret_key>
   
   SMTP_HOST=<host>
   SMTP_PORT=<port>
   SMTP_USER=<user>
   SMTP_PASSWORD=<password>
   SMTP_EMAIL=<email>

   CAPTCHA_SECRET=<captcha_secret>
   ```
4. Run app
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
 -->

## Contact

Ben Motyka - [LinkedIn](https://www.linkedin.com/in/ben-motyka-97a729240/) - benmotykax@gmail.com

Project Link: [https://github.com/benmotyka/staysecure_api](https://github.com/benmotyka/staysecure_api)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

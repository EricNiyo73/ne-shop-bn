## E-COMMERCE-NE Shop-BN

This repository houses the backend application of an e-commerce website developed by NE Shop

# Description

This is an e-commerce web application that have been built using relevant cutting edge technologies and frameworks. The main features of this project include, user authentication, product management, shooping cart, account management, ...

## Documentation

List of endpoints exposed by the service

### Seting up

### Dependencies

Before you begin, ensure you have met the following requirements:

- You have installed node V12+ in your local environment.
- You have a package manager (npm or yarn) installed.
- You have installed postgres Database
- You have installed docker
- You have a `Windows/Linux/Mac` machine.
- You have read `<guide/link/documentation_related_to_project>`.

### Getting Started

To install this project, follow these steps:

1. Clone or download this repository onto your local machine.
2. Open a terminal/command prompt in the directory where you downloaded the project.
3. Run `npm install` to install all dependencies listed in the package.json file.
4. Create a `.env` file at the root level of the project folder. Add the necessary environment variables for connecting to your database.
5. Run `npx sequelize-cli db:migrate` for running migrations

### Run The Service

To run this project, follow these steps:

1. Make sure Docker is running
2. Make sure that you have started the PostgreSQL server
3. Run `docker compose build -t e-commerce-NE Shop-bn` to build the service
4. Run `docker compose up` or `docker compose up -d`(runs in the background)
5. Run `docker login` to login with your docker credentials

### Microservices

List out the microservices if any that this repo uses

## Testing

Step-by-step instructions on how to run the tests so that the developer can be sure they've set up the code correctly

## Contribute

To contribute to this project, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <Project_Name>/<location>`
5. Create the pull request.

Alternatively, see the GitHub documentation on creating a pull request.

## Deployment

Step-by-step instructions so that the developer can understand how code gets updated

## Acknowledgement

## License

This project uses the following license: MIT Licence.

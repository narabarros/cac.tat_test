# Playwright Test Web Page

This is a web application designed for testing with Cypress and Playwright. It uses Docker for easy setup and deployment.

## Prerequisites

- Docker
- Docker Compose

## Setup

1Navigate to the project directory.
```bash
cd docker_app_tests
```

## Running the Application

To run the application, use Docker Compose:

```bash
docker-compose up -d
```

This command will start the application in a Docker container and map it to port 80 on your local machine.

## Running Tests

The tests are written using Playwright. To run the tests, first install the dependencies:

```bash
npm install
```

Then, you can run the tests with:

```bash
npx cucumber-js
```

## Contact

If you have any questions or issues, please open an issue on GitHub.
```

This `README.md` provides a brief description of the project, lists the prerequisites, and provides instructions on how to set up, run, and test the application. You can customize it to better fit your project's needs.
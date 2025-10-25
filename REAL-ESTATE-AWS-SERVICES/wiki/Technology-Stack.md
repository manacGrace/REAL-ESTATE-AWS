# Technology Stack

## Overview

This document provides a comprehensive overview of all technologies, libraries, and tools used in the ProjetImmo real estate application. The project is built as a full-stack application with containerized deployment.

## Frontend Technologies

### Core Framework
- **React** 19.0.0 - JavaScript library for building user interfaces
- **Vite** 6.2.0 - Build tool and development server
- **React Router DOM** 7.3.0 - Client-side routing

### HTTP Client & API
- **Axios** 1.8.4 - HTTP client for API requests

### UI Components & Styling
- **Bootstrap** 5.3.3 - CSS framework for responsive design
- **React Bootstrap** 2.10.9 - Bootstrap components for React
- **Bootstrap Icons** 1.11.3 - Icon library

### Maps & Visualization
- **Mapbox GL** 3.10.0 - Interactive maps and geospatial data

### Notifications & UX
- **React Toastify** 11.0.5 - Toast notifications

### Production Server
- **Nginx** 1.25.1 - Web server for static file serving

### Frontend Installation
```bash
# Core dependencies
npm install react react-dom react-router-dom
npm install vite @vitejs/plugin-react

# UI and styling
npm install bootstrap react-bootstrap bootstrap-icons

# HTTP client
npm install axios

# Maps
npm install mapbox-gl

# Notifications
npm install react-toastify

# Development
npm install -D eslint eslint-plugin-react
```

## Backend Technologies

### Core Framework
- **Spring Boot** 3.x - Main application framework
- **Java** 17+ - Programming language
- **Maven** - Build tool and dependency management

### Security
- **Spring Security** - Authentication and authorization
- **BCrypt** - Password hashing

### Backend Dependencies
```xml
<!-- Core Spring Boot -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>

<!-- Database -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<!-- Security -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>

<!-- MariaDB Driver -->
<dependency>
    <groupId>org.mariadb.jdbc</groupId>
    <artifactId>mariadb-java-client</artifactId>
</dependency>

<!-- Lombok -->
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
</dependency>
```

## Database Technologies

### Database Engine
- **MariaDB** 10.11 - Relational database management system
- **MySQL** compatible - Fork of MySQL with enhanced features

### ORM & Data Access
- **Spring Data JPA** - Data access abstraction layer
- **Hibernate** - Object-Relational Mapping (ORM)

## Containerization & DevOps

### Containerization
- **Docker** 20.x+ - Container platform
- **Docker Compose** 2.x - Multi-container orchestration

### Reverse Proxy & Load Balancer
- **Traefik** 3.x - Modern reverse proxy and load balancer
- **Let's Encrypt** - Automatic SSL certificate management

### Base Images
- **node:23.3.0** - Node.js runtime for frontend build
- **openjdk:17-jdk-slim** - Java runtime for backend
- **nginx:1.25.1-alpine** - Lightweight Nginx for production
- **mariadb:10.11** - MariaDB database

### Deployment Setup
```bash
# Install Docker
curl -fsSL https://get.docker.com | sh

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Deploy application
docker-compose up -d
```

## Development Tools

### Code Quality
- **ESLint** - JavaScript/React code linting
- **Maven** - Java build tool and dependency management

### Database Management
- **HeidiSQL** - Database management tool (development)
- **Docker CLI** - Container management

### Version Control
- **Git** - Source code version control
- **GitHub** - Code repository hosting

## Infrastructure & Hosting

### Cloud Platform
- **AWS EC2** - Virtual server hosting
- **DuckDNS** - Dynamic DNS service
- **Let's Encrypt** - Free SSL certificates

### Networking
- **Traefik** - Reverse proxy and SSL termination
- **Docker Networks** - Container communication
- **Security Groups** - AWS firewall rules

## Technology Architecture

### Frontend Stack
```
React + Vite + Bootstrap + Axios + Mapbox GL
```

### Backend Stack
```
Spring Boot + Java + Hibernate + MariaDB + Spring Security
```

### Infrastructure Stack
```
Docker + Traefik + Nginx + DuckDNS
```

## Version Compatibility

### Node.js Environment
- **Node.js** 18+ required
- **npm** 8+ for package management

### Java Environment
- **Java** 17+ required
- **Maven** 3.6+ for build management

### Docker Environment
- **Docker** 20.x+ required
- **Docker Compose** 2.x for orchestration

## Security Technologies

### Authentication
- **Spring Security** - Authentication framework
- **BCrypt** - Password hashing algorithm
- **Session Management** - Client-side session storage

### Network Security
- **HTTPS/SSL** - Encrypted communication
- **CORS** - Cross-origin resource sharing
- **Security Headers** - Nginx security configuration

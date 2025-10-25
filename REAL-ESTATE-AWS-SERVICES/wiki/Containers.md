# Containers

## How It Works

The application is fully containerized using **Docker** and orchestrated with **Docker Compose**. This approach ensures consistent deployment across different environments and simplifies the management of the full-stack application.

### Container Architecture

The application runs as four interconnected containers:

**Frontend Container** (React + Nginx):
- Serves the React application as static files
- Handles client-side routing with Nginx configuration
- Optimized for performance with caching and compression

**Backend Container** (Spring Boot):
- Runs the Java API server on port 8888
- Connects to the database for data operations
- Handles all business logic and API requests

**Database Container** (MariaDB):
- Stores all application data persistently
- Automatically initializes with sample data
- Runs on internal network for security

**Proxy Container** (Traefik):
- Acts as reverse proxy and load balancer
- Handles SSL certificates automatically
- Routes traffic to appropriate services

### How Services Communicate

**External Traffic Flow**:
1. User visits `projetImmo.manac.duckdns.org`
2. Traefik receives the request on port 443 (HTTPS)
3. Traefik routes to frontend container based on domain
4. Frontend serves the React application

**API Requests**:
1. Frontend makes API calls to `projetImmo-backend.manac.duckdns.org`
2. Traefik routes these to the backend container
3. Backend processes requests and queries the database
4. Database returns data to backend, which responds to frontend

**Internal Communication**:
- Backend connects to database using service name `mariadb`
- All containers communicate through Docker's internal network
- No direct external access to database or backend

### Deployment Process

**Single Command Deployment**:
```bash
docker-compose up -d
```

This command:
1. Builds all container images
2. Creates the internal network
3. Starts all services in the correct order
4. Sets up SSL certificates automatically
5. Makes the application available online

### Data Persistence

**Database Data**: Stored in Docker volumes that survive container restarts
**SSL Certificates**: Persisted in volume for automatic renewal

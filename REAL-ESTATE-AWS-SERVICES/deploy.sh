#!/bin/bash

# Deploy script for Real Estate Application
# Run this after configuring your .env file with real values

echo "=========================================="
echo "REAL ESTATE APPLICATION DEPLOYMENT"
echo "=========================================="

# Load environment variables from .env file
echo "Loading environment variables..."
if [ ! -f .env ]; then
    echo "Error: .env file not found!"
    echo "Please create .env file from env.example first:"
    echo "cp .env.example .env"
    echo "Then edit .env with your real values"
    exit 1
fi

# Export variables from .env file
while IFS= read -r line; do
    # Skip comments and empty lines
    if [[ ! "$line" =~ ^[[:space:]]*# ]] && [[ -n "$line" ]]; then
        # Export the variable
        export "$line"
    fi
done < .env
echo "Environment variables loaded successfully"

# Validate required environment variables
echo "Validating environment variables..."
required_vars=("DUCKDNS_TOKEN" "ACME_EMAIL" "MY_DOMAIN")
missing_vars=()

for var in "${required_vars[@]}"; do
    if [[ -z "${!var}" || "${!var}" == "domain.duckdns.org" || "${!var}" == "duckdnsToken" || "${!var}" == "mail@mail.com" ]]; then
        missing_vars+=("$var")
    fi
done

if [ ${#missing_vars[@]} -ne 0 ]; then
    echo "Error: The following environment variables need real values:"
    for var in "${missing_vars[@]}"; do
        echo "   - $var"
    done
    echo ""
    echo "Please edit your .env file with real values:"
    echo "nano .env"
    exit 1
fi

echo "All required environment variables are set"

# Get EC2 public IP
echo "Getting EC2 public IP..."
TOKEN=$(curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600")
MY_PUBLIC_IP=$(curl -H "X-aws-ec2-metadata-token: $TOKEN" http://169.254.169.254/latest/meta-data/public-ipv4)
echo "EC2 Public IP: $MY_PUBLIC_IP"

# Update DuckDNS domain
echo "Updating DuckDNS domain: $MY_DOMAIN"
echo url="https://www.duckdns.org/update?domains=$MY_DOMAIN&token=$DUCKDNS_TOKEN&ip=$MY_PUBLIC_IP" | curl -k -K -
if [ $? -eq 0 ]; then
    echo "DuckDNS updated successfully"
else
    echo "Warning: DuckDNS update failed. Check your token and domain."
fi
sleep 3

# Clean up any existing containers
echo "Cleaning up existing containers..."
sudo docker compose down || true
sleep 5
sudo docker system prune -a --volumes -f || true
sleep 15

# Start all Docker services
echo "Starting Docker services..."
sudo docker compose --env-file .env up -d

# Wait for services to start
echo "Waiting for services to start..."
sleep 30

# Check service status
echo "Checking service status..."
sudo docker compose ps

# Show service logs
echo "=========================================="
echo "SERVICE LOGS"
echo "=========================================="
echo "Traefik logs:"
sudo docker logs traefik --tail 20 || echo "Traefik not running yet"

echo ""
echo "Backend logs:"
sudo docker logs ${BACKEND_CONTAINER} --tail 10 || echo "Backend not running yet"

echo ""
echo "Frontend logs:"
sudo docker logs ${FRONTEND_CONTAINER} --tail 10 || echo "Frontend not running yet"

# Show final status
echo "=========================================="
echo "DEPLOYMENT COMPLETE"
echo "=========================================="
echo "All services started"
echo "DuckDNS domain updated"
echo "SSL certificates will be generated automatically"
echo ""
echo "Your application should be available at:"
echo "Frontend: https://${VITE_FRONTEND_SUBDOMAIN}.${MY_DOMAIN}"
echo "Backend:  https://${VITE_BACKEND_SUBDOMAIN}.${MY_DOMAIN}"
echo "Traefik:  https://${MY_DOMAIN}"
echo ""
echo "Note: SSL certificates may take a few minutes to generate"
echo "=========================================="

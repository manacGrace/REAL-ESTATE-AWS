#!/bin/bash

# Install Docker From Docker's Online Documentation
# Add Docker's official GPG key:
echo "Installing Docker..."
sudo apt-get update
sudo apt-get -y install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
sleep 5

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin 
sleep 5

# Enable and start Docker service
sudo systemctl enable docker
sudo systemctl start docker
sleep 3

# DuckDNS Domain Ip Update:
# https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-ip-addresses.html
TOKEN=$(curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600")
MY_PUBLIC_IP=$(curl -H "X-aws-ec2-metadata-token: $TOKEN" http://169.254.169.254/latest/meta-data/public-ipv4)

# Clone the main project repo
echo "Cloning Repo..."
git clone https://github.com/ManasseTegGbegnohou/REAL-ESTATE-AWS.git
cd REAL-ESTATE-AWS/REAL-ESTATE-AWS-SERVICES

# Copy env.example to .env file
echo "Creating .env file from env.example..."
cp env.example .env

# Create necessary directories
echo "Creating necessary directories..."
mkdir -p data/traefik/letsencrypt

# Load environment variables from .env file safely
echo "Loading environment variables..."
if [ -f .env ]; then
    # Export variables from .env file
    while IFS= read -r line; do
        # Skip comments and empty lines
        if [[ ! "$line" =~ ^[[:space:]]*# ]] && [[ -n "$line" ]]; then
            # Export the variable
            export "$line"
        fi
    done < .env
    echo "Environment variables loaded successfully"
else
    echo "Warning: .env file not found"
fi

# Domain Ip Update using environment variables
echo "Updating DuckDNS domain: $MY_DOMAIN"
echo url="https://www.duckdns.org/update?domains=$MY_DOMAIN&token=$DUCKDNS_TOKEN&ip=$MY_PUBLIC_IP" | curl -k -K -
sleep 3

# Start all Docker Images with environment variables
echo "Starting Dockers with environment variables..."
sudo docker compose down || true
sleep 5
sudo docker system prune -a --volumes -f || true
sleep 15

# Start services
echo "Starting services..."
sudo docker compose --env-file .env up -d

# Wait for services to start
echo "Waiting for services to start..."
sleep 30

# Check service status
echo "Checking service status..."
sudo docker compose ps

# Log Traefik status for debugging
echo "Traefik logs:"
sudo docker logs traefik --tail 20 || echo "Traefik not running yet"

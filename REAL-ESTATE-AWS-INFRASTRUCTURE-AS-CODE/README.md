# REAL-ESTATE-AWS-IaC

## This repo contains the `Terraform` AWS Infrastructure and instructions to deploy a full-stack web app on AWS EC2

- Visit the [wiki](https://github.com/ManasseTegGbegnohou/420-414-Epreuve-Finale-IaC/wiki) for more information about the infrastructure.
- This repository [Web App Repository](https://github.com/ManasseTegGbegnohou/projetImmo-AWS-services.git) contains the network and containers configuration of the app.

---

## Requirements
- Install the AWS CLI
- Install Terraform
- Clone this repository

---

## Deployment Instructions

### Prerequisites
- Install the AWS CLI
- Install Terraform
- Set up your AWS CLI credentials:
  - On **Windows**: `C:/Users/yourUser/.aws/credentials`
  - On **Linux**: `~/.aws/credentials`

### Configuration
1. **Configure your environment variables** in the `.env` file in the services repository:
   ```bash
   # Edit the .env file with your own values
   MY_DOMAIN=yourdomain.duckdns.org
   DUCKDNS_TOKEN=your-duckdns-token
   API_BASE_URL=https://projetImmo-backend.yourdomain.duckdns.org
   ```

2. **Deploy the infrastructure**:
   ```bash
   cd REAL-ESTATE-AWS-INFRASTRUCTURE-AS-CODE/terraform-config/
   terraform init
   terraform apply
   ```

3. **Wait for deployment** (3-5 minutes):
   - The EC2 instance will automatically clone the repository
   - Load environment variables from the `.env` file
   - Update your DuckDNS domain with the public IP
   - Start all Docker services

4. **Access your application**:
   - **Frontend**: `https://projetImmo.yourdomain.duckdns.org`
   - **Backend API**: `https://projetImmo-backend.yourdomain.duckdns.org`
   - **Traefik Dashboard**: `https://yourdomain.duckdns.org`

---

> ⚠️ This repository is a work in progress. AWS deployment is currently in the testing phase.

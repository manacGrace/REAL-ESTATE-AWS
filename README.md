# REAL-ESTATE-AWS

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

clone this repo on your desktop
git clone https://github.com/ManasseTegGbegnohou/REAL-ESTATE-AWS.git

#setup aws instance
##launch aws ec2 instance 
cd REAL-ESTATE-AWS-INFRASTRUCTURE-AS-CODE
cd terraform-config 
terraform init
terraform plan
terraform apply

## ssh into aws instance
## note that you might have to restrict r/w/x permisons of this key to only your user
in windows :
icacls "C:\Users\yourUser\Desktop\REAL-ESTATE-AWS\REAL-ESTATE-AWS-INFRASTRUCTURE-AS-CODE\terraform-config\PROJET-IMMO-keypair.pem" /inheritance:r
icacls "C:\Users\yourUser\Desktop\REAL-ESTATE-AWS\REAL-ESTATE-AWS-INFRASTRUCTURE-AS-CODE\terraform-config\PROJET-IMMO-keypair.pem" /remove "Administrators" "SYSTEM" "Users" "Authenticated Users" "Everyone"
icacls "C:\Users\yourUser\Desktop\REAL-ESTATE-AWS\REAL-ESTATE-AWS-INFRASTRUCTURE-AS-CODE\terraform-config\PROJET-IMMO-keypair.pem" /grant:r "yourUser:R"

ssh -i "keyname-keypair.pem" ubuntu@yourEC2ip

# setup web app deployement
## when inside ec2
ls

## if directory REAL-ESTATE-AWS doesnt exist run :
git clone https://github.com/manacGrace/REAL-ESTATE-AWS.git

## setup the environemnt variables
cd REAL-ESTATE-AWS/REAL-ESTATE-AWS-SERVICES
cp .env.example .env
nano .env

## modify these values with real ones
MY_DOMAIN=domain.duckdns.org
DUCKDNS_TOKEN=duckdnsToken
DB_PASSWORD=PSW
DB_DATABASE=DBNAME
ACME_EMAIL=mail@mail.com

## give the script execution perm 
chmod +x REAL-ESTATE-AWS-SERVICES/deploy.sh

## deploy app
./REAL-ESTATE-AWS-SERVICES/deploy.sh

## wait ~5mns for the app to fully deploy
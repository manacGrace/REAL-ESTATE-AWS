resource "aws_internet_gateway" "projet_immo_internet_gw" {
  vpc_id = aws_vpc.projet_immo_vpc.id

  tags = {
    Name = "PROJET-IMMO-INTERNET-GW"
  }
}

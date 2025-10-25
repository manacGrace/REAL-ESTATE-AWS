resource "aws_route_table" "projet_immo_public_rt" {
  vpc_id = aws_vpc.projet_immo_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.projet_immo_internet_gw.id
  }
  route {
    cidr_block = "10.0.0.0/16"
    gateway_id = "local"
  }

  tags = {
    Name = "PROJET-IMMO-PUBLIC-RT"
  }
}

resource "aws_route_table" "projet_immo_private_rt" {
  vpc_id = aws_vpc.projet_immo_vpc.id

  route {
    cidr_block = "10.0.0.0/16"
    gateway_id = "local"
  }

  tags = {
    Name = "PROJET-IMMO-PRIVATE-RT"
  }
}

resource "aws_route_table_association" "tp_3_final_2271627_public_subnet_association" {
  subnet_id      = aws_subnet.projet_immo_public_subnet.id
  route_table_id = aws_route_table.projet_immo_public_rt.id
}

resource "aws_route_table_association" "tp_3_final_2271627_private_subnet_association" {
  subnet_id      = aws_subnet.projet_immo_private_subnets.id
  route_table_id = aws_route_table.projet_immo_private_rt.id
}

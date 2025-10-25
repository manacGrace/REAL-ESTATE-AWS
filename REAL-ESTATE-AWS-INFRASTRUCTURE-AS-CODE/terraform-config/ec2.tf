variable "ami_id" {
  type        = string
  description = "Amazon Machine Image Id of EC2 Instance"
  default     = "ami-020cba7c55df1f615"
}

variable "instance_type" {
  type        = string
  description = "EC2 instance Type"
  default     = "m7i-flex.large"
}

resource "aws_instance" "projet_immo_ec2" {
  ami                         = var.ami_id
  instance_type               = var.instance_type
  subnet_id                   = aws_subnet.projet_immo_public_subnet.id
  associate_public_ip_address = true
  vpc_security_group_ids      = [aws_security_group.projet_immo_sg.id]
  key_name                    = aws_key_pair.projet_immo_key.key_name

  root_block_device {
    volume_size = 64
    volume_type = "gp3"
  }

  tags = {
    Name        = "PROJET-IMMO-SERVICE"
    volume_size = 64
  }

  user_data = file("${path.module}/user-data.sh")
}

output "projet_immo_ec2_public_ip" {
  description = "Public IP of PROJET-IMMO EC2 Instance"
  value       = try(aws_instance.projet_immo_ec2.public_ip, "")
}

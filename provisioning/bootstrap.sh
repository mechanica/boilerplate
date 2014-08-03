#!/usr/bin/env bash

# update the vm
sudo apt-get -y update
# sudo env DEBIAN_FRONTEND=noninteractive apt-get -y -o Dpkg::Options::="--force-confdef" -o Dpkg::Options::="--force-confold" upgrade

sudo apt-get -y install ansible

# provision locally using ansible
echo "Running Ansible..."
env PYTHONUNBUFFERED=1 ansible-playbook /vagrant/provisioning/playbook.yaml -i 'localhost,' --connection=local

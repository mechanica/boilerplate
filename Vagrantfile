# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.hostname = "boilerplate"
  config.vm.box = "hashicorp/precise32"

  config.vm.network "forwarded_port", guest: 80, host: 8080
  config.vm.network "private_network", ip: "192.168.20.20"

  config.vm.provider :virtualbox do |vbox|
    # solves the problem with box default dns address
    vbox.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
    # allows virtualbo to create symlinks on windows host
    vbox.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1"]
  end

  config.vm.provision :shell, :path => "provisioning/bootstrap.sh"
end

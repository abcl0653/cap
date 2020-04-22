# Hadoop Note

## Tools Setup

ssh using ccloud should require a public key, which is ~/.ssh/id_rsa
The passphrase is sap classic

- Change root password via chpwd doesnt work.
- Use useradd to create an user i039497, and add the user to sudo group
- Login the system via

```bash
ssh i039497@10.47.228.185
# The password is my classic
```

- Install zsh
- Install oh-my-zsh
- Config vim

## Hadoop Installation

### Directories

Software download: ~/download
Software installation: ~/app

### Installations

- Install JDK
  
```bash
sudo apt install openjdk-8-jdk
# Ubuntu may have openjdk-8-jre installed, but still jdk is better
```

- Setup JAVA_HOME

```bash
sudo vim /etc/profile

# Add the followings:

  #JAVA_HOME
  export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64
  export PATH=$PATH:$JAVA_HOME/bin

  #HADOOP_HOME
  export HADOOP_HOME=/home/i039497/app/hadoop-3.2.1
  export PATH=$PATH:$HADOOP_HOME/bin:$HADOOP_HOME/sbin
source /etc/profile
```

If you are using zsh instead of bash, add the above lines to /etc/zsh/zprofile, and source it

## Hadoop Configuration

core-site.xml

```xml
<configuration>
  <property>
    <name>fs.defaultFS</name>
    <value>hdfs://0.0.0.0:9000</value>
  </property>

  <property>
    <name>hadoop.tmp.dir</name>
    <value>/home/i039497/app/hadoop-3.2.1/data/tmp</value>
  </property>
</configuration>
```

hdfs-site.xml

```xml
<configuration>
    <property>
        <name>dfs.replication</name>
        <value>1</value>
    </property>
</configuration>
```

Namenode:
<http://10.47.228.185:9870>

## Yarn Configuration

Yarn is a resource manager and node manager, dont stop HDFS.
Node Manager
<http://10.47.228.185:8088>

## Host configuration

In the hadoop machine, originally the /etc/hosts was configured as
```
127.0.1.1 hdsandbox.openstack.eu-de-1.cloud.sap hdsandbox
```
At this point, when we try to access this server remotely, accessing namenode is okay (for example, ls command), but accessing datanode will raise error(for example, put, get command).

```
# Should change to the following instead 127.0.1.1
<actual IP> hdsandbox.xxxx.xxxxx.sap.cloud hdsandbox
127.0.0.1 hdsandbox.openstack.eu-de-1.cloud.sap hdsandbox
```
<https://askubuntu.com/questions/754213/what-is-difference-between-localhost-address-127-0-0-1-and-127-0-1-1>

## Trouble shooting

Check if the port is occupied:

```bash
lsof -i
# if the port is in used by other user
sudo lsof -i
```

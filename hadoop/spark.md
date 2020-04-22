# Spark Setup

## Installation

### Directories

Software download: ~/download

```bash
tar -zxvf xxx
```

Software installation: ~/app

conf/spark-env.sh

set YARN_CONF_DIR in conf/spark-env.sh


### Hello World Test 
```bash
bin/spark-submit \
 --class org.apache.spark.examples.SparkPi \
 --executor-memory 1G \
 --total-executor-cores 2 \
./examples/jars/spark-examples_2.11-2.4.5.jar \
100

bin/spark-submit \
 --class org.apache.spark.examples.SparkPi \
 --master yarn \
 --deploy-mode client \
./examples/jars/spark-examples_2.11-2.4.5.jar \
100
```
Check yarn job list via <http://10.47.228.185:8088/cluster>

### Spark shell

```bash
export TERM=xterm-color

bin/spark-shell
```
Check spark job via <http://10.47.228.185:4040/jobs/>

```scala
sc.textFile("wcinput").flatMap(_.split(" ")).map((_,1)).reduceByKey(_+_).collect
```

# Starters

First of all, use mobile phone network, otherwise you will not be able to connect to docker.io

Start the minikube via

```bash
minikube start
# using registry -- i didnt make it work
--registry-mirror=https://registry.docker-cn.com
```

## Build a hello-node pod

1. Hyperkit crash: hyperkit must be upgraded into a newer version. In MacOS, hyperkit is a component of Docker Desktop, so upgrade Docker is a easier way to upgrade hyperkit. Check the hyperkit version via ```hyperkit -v```

2. Another workaround might be using VirtualBox as the --vm-driver instead.

3. In MacOS, you can not use --vm-driver=None option since it is only supported in linux

4. Build the docker image via

   ```bash
   docker build -t hello-node:0.1 .
   ```

   but in this case, the docker image will be save in local docker env, in order to make the image visible for minikube, the followings should be executed.

   ```bash
   eval $(minikube docker-env)
   docker build -t hello-node:0.1 .

   # Then you can use this image to create a pod/deployment

   kubectl run hello-node --image=hello-node:0.1 --image-pull-policy=Never

   # Check the pod
   kubectl get pods

   # Create service
   kubectl expose deployment hello-node --type=LoadBalancer --port=8080

   # Check you service
   kubectl get services

   # Launch browser
   minikube service hello-node
   ```

## Cleanup

```bash
kubectl delete service hello-node
kubectl delete deployment hello-node
minikube stop
```

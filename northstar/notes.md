# Northstar Architecture

T&I strategy 

PDF
<https://broadcast.co.sap.com/files/collaterals/2020/dkom/20146.pdf>

broadcast:
<https://broadcast.co.sap.com/event/dkom/2020#!video%2F20146>
by Jan Schaffner

## Notes
1.  5年计划： cloud revenue 在2023 比2008 年 3倍； 各个单元都有自己每年的目标
每年都调整，和northstar overall 契合

For example: K8S, 现在还比较灵活，随着
2.  各个lob都有一些common的需求
3.  每个产品都有自己的northstar architure paper，但尚未和T&I overall 整合



### Infrastrure:
1. 4 + 1  (AWS, GCS, Azure, AliCloud) + SAP(VMware)

### Containerlization and K8S
1. 5年之后 全面实现容器化
2. Kubernetes 将会是容器编排的选择，事实上，很多社区称kubernetes为云时代的操作系统
3. SAP Gardener; 提供一个统一的管理K8S集群的软件。比如说AWS-EKS；google anthos；Azure Container Service； cluster API is different；  HANA cloud - use Gardener

### Application Runtime
Fully Managed Build-on; Open Build-on(Integrate with)


### Data Management
HANA Cloud
One Domain Model - SAP Graph (<https://beta.graph.sap/>)
 - Easy to replicate master data from A to B (SAP Systems)
 - Easy for Event subsribe extension (Aligned Event Model)
 - SAC Pre-configured model

 SAP to define de factor enterprise data model.
 

 ### Kernal Services
 <https://pages.github.tools.sap/KernelServices/>


 ### Basic Services - Technical
 Business Services - SAP differentiation 

  Very early stage.  the envision is to use service mesh (like istio sidecar to "manage" those services, and also provide metering, logging, service discovery catalog)


### User Client
Fiori as design language v.s. Fiori Implementation
-   SAP UI5 Fiori Implementation
-   Fundamental Library Styles for Angular/React/Vue  (UI的三架马车)
    HTML5 CSS; font, colors, sap-icon, Layouts, Patterns (Dropdown list; Combobox, Date Picker, etc)

- Future
micro frontend (similar to iframe)
rating service


### Misc

ONEMasterdata
<https://github.wdf.sap.corp/pages/re-wunder/ONEmasterdata>
<https://video.sap.com/media/t/1_zoiegi92>


### 5 papers : 2020 Strategy
1.  SAP Cloud Platform
- SAP Cloud Platform on Kubenetes

•	Cloud Foundry (as we know it today) and dedicated Cloud Foundry (in future on top of Kubernetes)
•	ABAP (Steampunk, on top of Kubernetes)
•	Kubernetes (with Gardener)
•	Kyma (on top of Kubernetes and Knative))
•	Functions (on top of Kubernetes)


- Cloudfoundry on Kubenetes (Project Eirini <https://www.cloudfoundry.org/project-eirini/>)
    自从Kubenetes成了云端应用部署的事实标准之后，cf也致力于将cf基于k8s构建，sap ibm， suse --> pivotal, VMware
    保留cf的大部分API和cf CLI，仍然使用 cf push 和buildpack的概念，但是后台再staging的时候会把应用打包成docker image，再部署到kubenetes的pod。从我个人的角度就是更portable，开发的app不再局限于部署在cf，也可以下载打包的docker image，部署到其他的k8s集群，或支持docker container的集群。

- CAP
 domain focus - CDS Modeling
 easy service development and exposing
 Conceptual Query Language
 Example:
SELECT ID, addresses.country.name from Employees

Instead of:
SELECT Employees.ID, Countries.name FROM Employees 
LEFT JOIN Addresses ON Addresses.emp_ID=Employees.ID 
LEFT JOIN Countries AS Countries ON Addresses.country_ID = Countries.ID 

飞行模式： 本地sqlite，内存数据库，不需要有hana就可以开发
          mock identity， roles，不需要IDP的环境也可以开始开发
          mock external API(for instance, S/4 HANA APIs)

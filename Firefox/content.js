var timeoutMilliseconds = seconds(2);

setTimeout(translate, timeoutMilliseconds);

function translate() {
  var elements = listTextElements();
  var translations = loadTranslations();
  for (let index = 0; index < elements.length; index++) {
    const p = elements[index];
    var text = p.textContent;
    var oldtext = text;

    for (let index = 0; index < translations.length; index += 2) {
      const word = translations[index];
      const translatedWord = translations[index + 1];

      // console.log("Translation step: " + word + " to " + translatedWord);

      text = text.replace(word, translatedWord);
    }

    //console.log(oldtext + " translated to: " + text);
    p.textContent = text;
  }

  console.log("translations done!");
}

function listTextElements() {
  var body = document.body;
  var elements = [];

  var knownTextElements = [
    "DIV",
    "SPAN",
    "H1",
    "H2",
    "H3",
    "H4",
    "H5",
    "A",
    "LI"
  ];

  knownTextElements.forEach(knownTag => {
    var found = body.getElementsByTagName(knownTag);
    for (let index = 0; index < found.length; index++) {
      const element = found[index];
      if (element.children.length != 0) continue;
      elements.push(element);
    }
  });

  return elements;
}

function loadTranslations() {
  return [
    "EC2",
    "Amazon Virtual Servers",
    "IAM",
    "Users, Keys, Certs",
    "S3",
    "Amazon Unlimited FTP Server",
    "VPC",
    "Amazon Virtual Colocated Rack",
    "Lambda",
    "AWS App Scripts",
    "API GateWay",
    "API Proxy",
    "RDS",
    "Amazon SQL",
    "Route 53",
    "Amazon DNS and Domains",
    "SES",
    "Amazon Transactional Email",
    "CloudFront",
    "Amazon CDN",
    "CloudSearch",
    "Amazon Fulltext Search",
    "DynamoDB",
    "Amazon NoSQL",
    "Elasticache",
    "Amazon Memcached",
    "Elastic Transcoder",
    "Amazon Beginning Cut Pro",
    "SQS",
    "Amazon Queue",
    "WAF",
    "AWS Firewall",
    "Cognito",
    "Amazon Oauth as a Service",
    "Device Farm",
    "Amazon Drawer of Old Android Devices",
    "SNS",
    "Amazon Messenger",
    "CodeCommit",
    "Amazon Github",
    "CodePipeline",
    "Amazon Continuous Integration",
    "EC2 Container Service",
    "Amazon Docker as a Service",
    "Elastic Beanstalk",
    "Amazon Platform as a Service",
    "AppStream",
    "Amazon Citrix",
    "WorkDocs",
    "Amazon Unstructured Files",
    "WorkMail",
    "Amazon Company Mail",
    "Workspaces",
    "Amazon Remote Computer",
    "Service Catalog",
    "Amazon Setup Already",
    "Storage Gateway",
    "S3 faked onto you corporate network",
    "Data Pipeline",
    "Amazon ETL",
    "Elastic Map Reduce",
    "Amazon Hadooper",
    "Glacier",
    "Really slow Amazon S3",
    "Kinesis",
    "Amazon High Throughput",
    "RedShift",
    "Amazone Data Warehouse",
    "Machine Learning",
    "Skynet",
    "SWF",
    "Amazon EC2 Queue",
    "Snowball",
    "AWS Big Old Portable Storage",
    "CloudFormation",
    "Amazon Services Setup",
    "CloudTrail",
    "Amazon Logging",
    "Config",
    "Amazon Configuration Management",
    "OpsWorks",
    "Amazon Chef",
    "Trusted Advisor",
    "Amazon Pennypincher",
    "Inspector",
    "Amazon Auditor"
  ];
}

function seconds(seconds) {
  return seconds * 1000;
}

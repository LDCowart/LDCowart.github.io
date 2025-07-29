const features = [
  "Runs on localized Java and Scala for ultra-fast performance",
  "25x faster than traditional SQL-based systems",
  "Only 4MB of storage per 10GB of data",
  "User data is fully decentralized",
  "No network transfer of user data — maximum security",
  "All files are encrypted for complete protection"
];

const featureList = document.getElementById("feature-list");

features.forEach(feature => {
  const li = document.createElement("li");
  li.textContent = feature;
  featureList.appendChild(li);
});

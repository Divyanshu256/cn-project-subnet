// Function to calculate classful subnetting
function calculateClassfulSubnet(ipAddress) {
    // Your classful subnetting logic here
    // Calculate network address, subnet mask, subnet size, usable hosts, broadcast address, and IP range
    // Store the results in variables
    
    // Example:
    const networkAddress = "192.168.0.0";
    const subnetMask = "255.255.255.0";
    const subnetSize = 24;
    const usableHosts = 254;
    const broadcastAddress = "192.168.0.255";
    const ipRange = "192.168.0.1 - 192.168.0.254";
  
    return {
      networkAddress,
      subnetMask,
      subnetSize,
      usableHosts,
      broadcastAddress,
      subnetMaskClass: getSubnetMaskClass(subnetMask),
      ipRange
      
    };
  }
  
  // Function to calculate classless subnetting
  function calculateClasslessSubnet(ipAddress, subnetMask) {
    // Your classless subnetting logic here
    // Calculate network address, subnet mask (binary), subnet size, usable hosts, broadcast address, and IP range
    // Store the results in variables
    
    // Example:
    const networkAddress = "192.168.0.0";
    const subnetMaskBinary = "11111111.11111111.11111111.0";
    const subnetSize = 24;
    const usableHosts = 254;
    const broadcastAddress = "192.168.0.255";
    const ipRange = "192.168.0.1 - 192.168.0.254";
  
    return {
      networkAddress,
      subnetMaskBinary,
      subnetSize,
      usableHosts,
      broadcastAddress,
      ipRange
    };
  }
  
  // Function to display the results
  function displayResults(classfulResults, classlessResults) {
    const resultsElement = document.getElementById("results");
    resultsElement.classList.remove("hidden");
  
    const classfulResultsElement = document.getElementById("classful-results");
    const classlessResultsElement = document.getElementById("classless-results");
  
    if (classfulResults) {
      classfulResultsElement.classList.remove("hidden");
      document.getElementById("classful-network-address").textContent = `Network Address: ${classfulResults.networkAddress}`;
      document.getElementById("classful-subnet-mask").textContent = `Subnet Mask: ${classfulResults.subnetMask}`;
      document.getElementById("classful-subnet-size").textContent = `Subnet Size: /${classfulResults.subnetSize}`;
      document.getElementById("classful-usable-hosts").textContent = `Usable Hosts: ${classfulResults.usableHosts}`;
      document.getElementById("classful-broadcast-address").textContent = `Broadcast Address: ${classfulResults.broadcastAddress}`;
      document.getElementById("classful-ip-range").textContent = `IP Range: ${classfulResults.ipRange}`;
      document.getElementById("classful-subnet-mask").textContent = `Subnet Mask: ${classfulResults.subnetMask}`;
      document.getElementById("classful-subnet-mask-class").textContent = `Subnet Mask Class: ${classfulResults.subnetMaskClass}`; // Display subnet mask class
    } else {
      classfulResultsElement.classList.add("hidden");
    }
  
    if (classlessResults) {
      classlessResultsElement.classList.remove("hidden");
      document.getElementById("classless-network-address").textContent = `Network Address: ${classlessResults.networkAddress}`;
      document.getElementById("classless-subnet-mask-binary").textContent = `Subnet Mask (Binary): ${classlessResults.subnetMaskBinary}`;
      document.getElementById("classless-subnet-size").textContent = `Subnet Size: /${classlessResults.subnetSize}`;
      document.getElementById("classless-usable-hosts").textContent = `Usable Hosts: ${classlessResults.usableHosts}`;
      document.getElementById("classless-broadcast-address").textContent = `Broadcast Address: ${classlessResults.broadcastAddress}`;
      document.getElementById("classless-ip-range").textContent = `IP Range: ${classlessResults.ipRange}`;
    } else {
      classlessResultsElement.classList.add("hidden");
    }
  }
  
  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
  
    const ipAddress = document.getElementById("ip-address").value;
    const subnetMask = document.getElementById("subnet-mask").value;
    const classfulCheckbox = document.getElementById("classful-checkbox");
    const classlessCheckbox = document.getElementById("classless-checkbox");
  
    let classfulResults = null;
    let classlessResults = null;
  
    if (classfulCheckbox.checked) {
      classfulResults = calculateClassfulSubnet(ipAddress);
    }
  
    if (classlessCheckbox.checked) {
      classlessResults = calculateClasslessSubnet(ipAddress, subnetMask);
    }
  
    displayResults(classfulResults, classlessResults);
  }
  // Function to determine class of subnet mask in classful subnetting
  function getSubnetMaskClass(subnetMask) {
    const firstOctet = subnetMask.split(".")[0];
  
    if (firstOctet >= 0 && firstOctet <= 127) {
      return "Class A";
    } else if (firstOctet >= 128 && firstOctet <= 191) {
      return "Class B";
    } else if (firstOctet >= 192 && firstOctet <= 223) {
      return "Class C";
    } else if (firstOctet >= 224 && firstOctet <= 239) {
      return "Class D (Multicast)";
    } else if (firstOctet >= 240 && firstOctet <= 255) {
      return "Class E (Reserved)";
    } else {
      return "Invalid subnet mask";
    }
  }
  
  // Event listener for form submission
  document.getElementById("subnet-form").addEventListener("submit", handleSubmit);
  
javascript
document.getElementById('getIP').addEventListener('click', function() {
 fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('ipDisplay').innerHTML = 'Your IP Address is: ' + data.ip;
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('ipDisplay').innerHTML = 'Error fetching IP address';
    });
});
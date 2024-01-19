
import './App.css'

function App() {

  
    document.addEventListener('DOMContentLoaded', function () {
      const header = document.querySelectorAll('.navbar');

      // Show the header when scrolling
      window.addEventListener('scroll', function () {
        if (window.scrollY > 100) { // Adjust the scroll threshold as needed
          header.style.display = 'block';
        } else {
          header.style.display = 'none';
        }
      });

      // Simulate scrolling down
      function scrollDown() {
        window.scrollBy(0, 100); // Adjust the scroll distance as needed
      }

      // Call scrollDown function after a delay (simulating mouse scroll)
      setTimeout(scrollDown, 1000); // Adjust the delay as needed
    });
  

  return (
    <div>

      this is APP 
    </div>
  )
}

export default App

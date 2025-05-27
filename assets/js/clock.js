// Digital Clock functionality
function updateClock() {
    const now = new Date();
    
    // Format time
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('digitalClock').textContent = `${hours}:${minutes}:${seconds}`;
    
    // Format date
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const dayName = days[now.getDay()];
    const date = now.getDate();
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();
    document.getElementById('dateDisplay').textContent = `${dayName}, ${date} ${monthName} ${year}`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call

// 
// document.addEventListener('keydown', function(event) {
//     if (event.ctrlKey && event.shiftKey && event.key === 'Y') {
//         window.location.href = 'bekup.html';
//     }
// });

document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.shiftKey) 
  {
    if (e.key === 'Y') 
    {
      window.location.href = 'bekup.html';
    }
    console.log('Jumpscare triggered!');
    
    // const randomDude = 'assets/img/staff/0021.007.png';
    const randomDude = 'assets/img/KING.png';
    
    // Create the jumpscare overlay
    const jumpscare = document.createElement('div');
    jumpscare.style.position = 'fixed';
    jumpscare.style.top = '0';
    jumpscare.style.left = '0';
    jumpscare.style.width = '100%';
    jumpscare.style.height = '100%';
    jumpscare.style.backgroundColor = 'black';
    jumpscare.style.zIndex = '9999';
    jumpscare.style.display = 'flex';
    jumpscare.style.justifyContent = 'center';
    jumpscare.style.alignItems = 'center';
    jumpscare.style.transition = 'opacity 0.25s ease-out'; // Fade-out effect
    
    // Add the scary image
    const img = document.createElement('img');
    img.src = randomDude;
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    jumpscare.appendChild(img);

    // Semak semok mok mok
    // const vineBoom = new Audio('https://www.myinstants.com/media/sounds/vine-boom.mp3');
    const vineBoom = new Audio('assets/nasikulit.mp3');
    vineBoom.volume = 1; // Adjust volume (0.1 to 1)
    vineBoom.play().catch(e => console.log("Sound failed (user didn't interact first?)"));
    
    // Add to the page
    document.body.appendChild(jumpscare);
    
    // Fade out after 1 second
    setTimeout(() => {
      jumpscare.style.opacity = '0'; // Trigger fade-out
      
      // Remove element after fade completes
      setTimeout(() => {
        jumpscare.remove();
      }, 250); // Matches the 0.5s transition
    }, 100); // Jumpscare stays for 1s before fading
  }
});
// Function to open the detailed view of the embroidery/print
function openModal(imgSrc, title, description) {
    const modal = document.getElementById('detailModal');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');

    // Inject the specific product data into the modal template
    modalImg.src = imgSrc;
    modalTitle.innerText = title;
    modalDesc.innerText = description;
    
    // Show the modal overlay using flexbox layout
    modal.style.display = "flex";
}

// Function to hide the detailed view
function closeModal() {
    document.getElementById('detailModal').style.display = "none";
}
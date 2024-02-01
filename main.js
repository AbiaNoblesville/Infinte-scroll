const content = document.getElementById('content');
const loading = document.getElementById('loading');

let isLoading = false;

function loadMoreItems() {
  if (isLoading) return;

  isLoading = true;
  loading.style.display = 'block';

  // Simulate an asynchronous API call to fetch more items
  setTimeout(() => {
    for (let i = 1; i <= 3; i++) {
      const newItem = document.createElement('div');
      newItem.className = 'item';
      newItem.textContent = `New Item ${i}`;
      content.appendChild(newItem);
    }

    isLoading = false;
    loading.style.display = 'none';
  }, 1000);
}

// Initial load
loadMoreItems();

// Infinite scroll event listener
window.addEventListener('scroll', () => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

  // Load more items when the user is near the bottom
  if (scrollTop + clientHeight >= scrollHeight - 100) {
    loadMoreItems();
  }
});

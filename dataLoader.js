// Load category data and return it as a promise
async function getCategoryData() {
  try {
    const response = await fetch('./categories.json?v=' + Date.now());
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
}

// Navigate to a specified page URL
function navigateToPage(pageUrl) {
  window.location.href = pageUrl;
}

// Load category data and store selected category in localStorage
async function loadCategoryData(categoryId) {
  try {
    const categories = await getCategoryData();
    const category = categories.find(c => c.categoryId == parseInt(categoryId, 10));

    if (category) {
      // Remove existing selectedCategory item if it exists
      localStorage.removeItem('selectedCategory');
      // Set new selectedCategory item
      localStorage.setItem('selectedCategory', JSON.stringify(category));
      navigateToPage('./category-page.html');
    } else {
      console.error(`Category not found for ID: ${categoryId}`);
    }
  } catch (error) {
    console.error('Error loading category data:', error);
  }
}

// DOMContentLoaded event handler for category div click event
document.addEventListener('DOMContentLoaded', async () => {
  const categoryDivs = document.querySelectorAll('.category.pulse');

  categoryDivs.forEach(div => {
    div.addEventListener('click', event => {
      const categoryId = div.getAttribute('data-categoryid');
      if (categoryId) {
        loadCategoryData(categoryId);
      } else {
        console.error('No category ID found on div:', div);
      }
    });
  });

  // Fetch categories and create menu dropdown
  const categories = await getCategoryData();
  createMenuDropdown(categories);
});

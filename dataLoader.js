function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
  }


// Load category data based on the category ID
async function loadCategoryData(categoryId) {
    try {
    const response = await fetch('./categories.json?v=' + Date.now());
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const categories = await response.json();
      const category = categories.find(c => c.categoryId === parseInt(categoryId, 10));
  
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
      console.error('Fetch error:', error);
    }
  }
  
  // DOMContentLoaded event handler
  document.addEventListener('DOMContentLoaded', () => {
    // Select category divs, which contain data-categoryid
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
  });
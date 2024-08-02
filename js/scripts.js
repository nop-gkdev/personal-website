document.addEventListener('DOMContentLoaded', function() {
    const filters = document.querySelectorAll('#tab_filters a');
    const images = document.querySelectorAll('.image-list-box img');

    filters.forEach(filter => {
        filter.addEventListener('click', function(e) {
            e.preventDefault();
            filters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            const filterValue = this.getAttribute('data-filter');
            images.forEach(image => {
                const categories = image.getAttribute('data-category').split(' ');
                if (filterValue === 'All' || categories.includes(filterValue)) {
                    image.style.display = 'block'; 
                } else {
                    image.style.display = 'none'; 
                }
            });
        });
    });
});

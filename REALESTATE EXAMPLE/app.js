document.getElementById('search-icon').addEventListener('click', function () {
            var searchDiv = document.getElementById('search');
            if (searchDiv.classList.contains('hidden')) {
                        searchDiv.classList.remove('hidden');
            } else {
                        searchDiv.classList.add('hidden');
            }
});
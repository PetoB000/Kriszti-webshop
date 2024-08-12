fetch('https://krisztiepoxymuhelye.com/pageBuilder.js', { cache: 'reload' })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error loading resource:', error));

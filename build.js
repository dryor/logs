const fs = require('fs');
const path = require('path');

// Read logs data
const logsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'src', 'logs.json'), 'utf8'));

// Read template
const template = fs.readFileSync(path.join(__dirname, 'src', 'template.html'), 'utf8');

// Format date to match terminal style (YYYY-MM-DD)
function formatDate(dateString) {
    return dateString;
}

// Generate HTML for logs
function generateLogsHTML(logs) {
    return logs.map(log => {
        const date = formatDate(log.date);
        const category = `[${log.category}]`;
        const title = log.title;
        const url = log.url || '#';

        return `
                <div class="log-entry">
                    <span class="log-date">${date}</span>
                    <span class="log-category">${category}</span>
                    <span class="log-title"><a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a></span>
                    <span class="log-arrow">→</span>
                </div>`;
    }).join('\n');
}

// Generate logs HTML
const logsHTML = generateLogsHTML(logsData);

// Inject logs into template
const output = template.replace('<!-- LOGS_PLACEHOLDER -->', logsHTML);

// Create dist directory
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

// Write index.html to dist
fs.writeFileSync(path.join(distDir, 'index.html'), output, 'utf8');

// Copy style.css to dist
fs.copyFileSync(
    path.join(__dirname, 'style.css'),
    path.join(distDir, 'style.css')
);

// Copy app.js to dist
fs.copyFileSync(
    path.join(__dirname, 'app.js'),
    path.join(distDir, 'app.js')
);

console.log('✓ Build completed successfully!');
console.log(`✓ Generated dist/index.html with ${logsData.length} log entries`);
console.log('✓ Copied style.css and app.js to dist/');
console.log('\nReady to deploy: dist/ folder contains all necessary files');

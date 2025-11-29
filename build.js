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

// Write output file
fs.writeFileSync(path.join(__dirname, 'index.html'), output, 'utf8');

console.log('✓ Build completed successfully!');
console.log(`✓ Generated index.html with ${logsData.length} log entries`);

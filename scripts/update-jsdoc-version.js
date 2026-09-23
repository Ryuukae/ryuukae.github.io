import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newVersion = process.argv[2];

if (!newVersion) {
  console.error('Error: No version provided to the update script.');
  process.exit(1);
}

// Strip leading 'v' if present (e.g., 'v2.0.0' becomes '2.0.0')
const cleanVersion = newVersion.replace(/^v/, '');

function updateFilesInDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (['node_modules', 'dist', '.git', '.history'].includes(entry.name)) {
        continue;
      }
      updateFilesInDirectory(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');

      const versionRegex = /(\*\s*@version\s+)[0-9]+\.[0-9]+\.[0-9]+(-[\w.]+)?/g;

      if (versionRegex.test(content)) {
        versionRegex.lastIndex = 0;
        content = content.replace(versionRegex, `$1${cleanVersion}`);
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated JSDoc version in: ${fullPath} to ${cleanVersion}`);
      }
    }
  }
}

const targetDir = path.join(__dirname, '../src');
if (fs.existsSync(targetDir)) {
  updateFilesInDirectory(targetDir);
  console.log('JSDoc version update completed successfully.');
} else {
  console.error('Error: Target src directory not found.');
  process.exit(1);
}

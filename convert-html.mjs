import fs from 'fs';

const files = [
  { file: 'home.html', dest: 'src/app/page.tsx', name: 'Home' },
  { file: 'about.html', dest: 'src/app/about/page.tsx', name: 'About' },
  { file: 'services.html', dest: 'src/app/services/page.tsx', name: 'Services' },
  { file: 'contact.html', dest: 'src/app/contact/page.tsx', name: 'Contact' },
  { file: 'blog.html', dest: 'src/app/blog/page.tsx', name: 'Blog' }
];

function convertHtmlToJsx(html) {
  let jsx = html;
  // Replace class= with className=
  jsx = jsx.replace(/class=/g, 'className=');
  
  // Replace for= with htmlFor=
  jsx = jsx.replace(/for="/g, 'htmlFor="');

  // Replace checked with defaultChecked
  jsx = jsx.replace(/ checked /g, ' defaultChecked ');
  jsx = jsx.replace(/ checked>/g, ' defaultChecked>');
  jsx = jsx.replace(/ checked\/>/g, ' defaultChecked/>');
  
  // Replace style="..." with React style objects
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styleString) => {
    if (styleString.includes('font-variation-settings')) {
      return `style={{ fontVariationSettings: "'FILL' 1" }}`;
    }
    return `style={{}}`; 
  });

  // Replace HTML comments <!-- ... --> with JSX comments {/* ... */}
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

  // Self close tags if any
  jsx = jsx.replace(/<input([^>]*[^/])>/g, '<input$1 />');
  jsx = jsx.replace(/<br([^>]*[^/])?>/g, '<br$1 />');
  jsx = jsx.replace(/<hr([^>]*[^/])?>/g, '<hr$1 />');
  
  // Replace <img ... > without closing slash with <img ... />
  jsx = jsx.replace(/<img([^>]*)>/g, (match, p1) => {
    if (p1.trim().endsWith('/')) {
      return `<img${p1}>`;
    }
    return `<img${p1} />`;
  });

  return jsx;
}

for (const { file, dest, name } of files) {
  if (!fs.existsSync(file)) {
    console.log(`File ${file} does not exist. Skipping.`);
    continue;
  }
  
  const content = fs.readFileSync(file, 'utf-8');
  
  // Find the content between </header> and <!-- Footer -->
  let mainContent = '';
  const headerEnd = content.indexOf('</header>');
  const footerStart = content.indexOf('<!-- Footer -->');
  const trustBarStart = content.indexOf('<!-- Trust Bar -->');
  
  const endIdx = trustBarStart !== -1 ? trustBarStart : footerStart;
  
  if (headerEnd !== -1 && endIdx !== -1) {
    mainContent = content.substring(headerEnd + '</header>'.length, endIdx);
  } else {
    // If we can't find header/footer, just take body
    const bodyStart = content.indexOf('<body');
    const bodyEnd = content.indexOf('</body>');
    if (bodyStart !== -1 && bodyEnd !== -1) {
      const bodyInnerStart = content.indexOf('>', bodyStart) + 1;
      mainContent = content.substring(bodyInnerStart, bodyEnd);
    }
  }

  let jsxContent = convertHtmlToJsx(mainContent);

  // Fix unmatched <main> tags
  const mainMatches = jsxContent.match(/<main/g);
  const endMainMatches = jsxContent.match(/<\/main>/g);
  if ((mainMatches && mainMatches.length > 0) && (!endMainMatches || endMainMatches.length < mainMatches.length)) {
    jsxContent += '\n</main>';
  }

  // Fix unmatched <div> tags as well if cut off
  const divMatches = jsxContent.match(/<div/g);
  const endDivMatches = jsxContent.match(/<\/div>/g);
  if (divMatches && endDivMatches && divMatches.length > endDivMatches.length) {
      const diff = divMatches.length - endDivMatches.length;
      for (let i = 0; i < diff; i++) {
          jsxContent += '\n</div>';
      }
  }

  const finalCode = `import Image from "next/image";
import Link from "next/link";

export default function ${name}() {
  return (
    <>
      ${jsxContent}
    </>
  );
}
`;

  // Create dir if not exists
  const dir = dest.substring(0, dest.lastIndexOf('/'));
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(dest, finalCode, 'utf-8');
  console.log(`Successfully converted ${file} to ${dest}`);
}

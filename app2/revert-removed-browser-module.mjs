import fs  from 'fs';
import path from 'path';
import { glob } from 'glob'
import { promisify } from 'util';

const globAsync = promisify(glob);

// Função para adicionar a importação do BrowserModule
function addBrowserModule(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Verificar se a importação do BrowserModule já existe
  if (!content.includes("@angular/platform-browser")) {
    // Adicionar a linha de importação do BrowserModule
    content = content.replace(/(import\s*\{[^}]*\}\s*from\s*'@angular\/core';?\n?)/,
                              `$1import { BrowserModule } from '@angular/platform-browser';\n`);
  }

  // Adicionar o BrowserModule à lista de imports
  if (!content.includes("BrowserModule")) {
    content = content.replace(/(imports\s*:\s*\[)/, `$1 BrowserModule,`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`BrowserModule readicionado em ${filePath}`);
}

// Caminho do diretório do projeto
const projectDir = path.resolve('./'); // Substitua 'app2' pelo caminho correto do seu projeto

// Função principal
async function main() {
  try {
    const files = await globAsync(`${projectDir}/**/*.module.ts`);

    files.forEach(file => {
      // Verificar se o arquivo não é o AppModule
      if (!file.includes('app.module.ts')) {
        addBrowserModule(file);
      }
    });

    console.log('Processo concluído!');
  } catch (err) {
    console.error('Erro ao encontrar arquivos de módulo:', err);
  }
}

// Executar a função principal
main();

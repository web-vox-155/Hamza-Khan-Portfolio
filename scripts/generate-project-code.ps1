$files = @(
  'AGENTS.md',
  'CLAUDE.md',
  'README.md',
  'package.json',
  'next.config.ts',
  'eslint.config.mjs',
  'postcss.config.mjs',
  'tsconfig.json',
  'app/layout.tsx',
  'app/page.tsx',
  'app/loading.tsx',
  'app/not-found.tsx',
  'app/globals.css',
  'components/Background.tsx',
  'components/CursorGlow.tsx',
  'components/Fadein.tsx',
  'components/Footer.tsx',
  'components/MagneticButton.tsx',
  'components/Navbar.tsx',
  'components/NoiseOverlay.tsx',
  'components/ScrollButtons.tsx',
  'components/ScrollProgress.tsx',
  'components/Section.tsx',
  'components/Services.tsx',
  'components/TextReveal.tsx',
  'components/TypewriterText.tsx',
  'components/useTypewriter.ts',
  'public/file.svg',
  'public/globe.svg',
  'public/next.svg',
  'public/vercel.svg',
  'public/window.svg'
)

$extMap = @{
  '.md' = 'markdown'
  '.json' = 'json'
  '.ts' = 'ts'
  '.tsx' = 'tsx'
  '.mjs' = 'js'
  '.css' = 'css'
  '.svg' = 'xml'
}

$sb = [System.Text.StringBuilder]::new()
[void]$sb.AppendLine('# Project Code Documentation')
[void]$sb.AppendLine()
[void]$sb.AppendLine('Generated for `my-next-website`. This document includes the project source, configuration, markdown files, and text-based public assets. Generated/vendor files such as `.next/`, `node_modules/`, `package-lock.json`, and binary assets such as `app/favicon.ico` are intentionally omitted.')
[void]$sb.AppendLine()
[void]$sb.AppendLine('## Project Overview')
[void]$sb.AppendLine()
[void]$sb.AppendLine('- Framework: Next.js 16.2.10')
[void]$sb.AppendLine('- React: 19.2.4')
[void]$sb.AppendLine('- Styling: Tailwind CSS 4 via `@tailwindcss/postcss`')
[void]$sb.AppendLine('- Animation: Framer Motion')
[void]$sb.AppendLine('- Main app route: `app/page.tsx`')
[void]$sb.AppendLine()
[void]$sb.AppendLine('## File Tree')
[void]$sb.AppendLine()
[void]$sb.AppendLine('```text')
foreach ($file in $files) {
  [void]$sb.AppendLine($file.Replace('\', '/'))
}
[void]$sb.AppendLine('```')
[void]$sb.AppendLine()
[void]$sb.AppendLine('## Source Files')

foreach ($file in $files) {
  [void]$sb.AppendLine()
  [void]$sb.AppendLine('### `' + $file.Replace('\', '/') + '`')
  [void]$sb.AppendLine()

  $ext = [System.IO.Path]::GetExtension($file)
  $lang = if ($extMap.ContainsKey($ext)) { $extMap[$ext] } else { 'text' }

  [void]$sb.AppendLine(('`' * 6) + $lang)
  $content = Get-Content -Raw -LiteralPath $file
  [void]$sb.Append($content.TrimEnd())
  [void]$sb.AppendLine()
  [void]$sb.AppendLine(('`' * 6))
}

Set-Content -LiteralPath 'PROJECT_CODE.md' -Value $sb.ToString() -Encoding UTF8

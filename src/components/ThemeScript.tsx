/**
 * Hidrasyon öncesi çalışan satır içi script — FOUC (tema titremesi) engellenir.
 * localStorage'daki tercih varsa data-theme'i ayarlar; yoksa CSS'teki
 * prefers-color-scheme medya sorgusu devreye girer.
 */
export function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

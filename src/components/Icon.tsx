import type { SVGProps } from 'react';

type IconName =
  | 'robot'
  | 'stone'
  | 'prostate'
  | 'andrology'
  | 'oncology'
  | 'female'
  | 'whatsapp'
  | 'check'
  | 'arrow'
  | 'shield'
  | 'clock'
  | 'alert'
  | 'swap'
  | 'phone'
  | 'mail'
  | 'pin'
  | 'video'
  | 'globe'
  | 'urethra'
  | 'kidney'
  | 'repair'
  | 'graft'
  | 'document'
  | 'youtube'
  | 'instagram'
  | 'linkedin'
  | 'star'
  | 'play';

const paths: Record<IconName, React.ReactNode> = {
  robot: (
    <>
      <rect x="5" y="8" width="14" height="10" rx="2" />
      <path d="M12 5v3M9 13h.01M15 13h.01M8 18v2M16 18v2M3 12v3M21 12v3" />
    </>
  ),
  stone: (
    <>
      <path d="M12 3c4 1 7 3.5 6.5 8-.5 4-4 8-6.5 8s-6-4-6.5-8C5 6.5 8 4 12 3Z" />
      <path d="M9.5 10.5c1-1 3.5-1 4.5.5" />
    </>
  ),
  prostate: (
    <>
      <path d="M12 4c3.5 0 6 2.5 6 6 0 4-3 7-6 9-3-2-6-5-6-9 0-3.5 2.5-6 6-6Z" />
      <circle cx="12" cy="10.5" r="2" />
    </>
  ),
  andrology: (
    <>
      <circle cx="10" cy="14" r="6" />
      <path d="M14.5 9.5 20 4M20 4h-4M20 4v4" />
    </>
  ),
  oncology: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 5V3M12 21v-2M5 12H3M21 12h-2M6.5 6.5 5 5M17.5 6.5 19 5M6.5 17.5 5 19M17.5 17.5 19 19" />
    </>
  ),
  female: (
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="M12 13v8M9 18h6" />
    </>
  ),
  whatsapp: (
    <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3Zm4.3 12.1c-.2.5-1 1-1.5 1-.4 0-.9.2-3-.9-2.5-1.2-4-3.7-4.2-3.9-.1-.2-1-1.3-1-2.4s.6-1.7.8-1.9c.2-.2.4-.3.6-.3h.5c.2 0 .4 0 .6.5l.7 1.7c.1.2.1.4 0 .5l-.4.5c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.7.9.8 1.6 1 1.9 1.2.2.1.4 0 .5-.1l.7-.8c.2-.2.3-.2.6-.1l1.6.8c.3.1.4.2.5.3.1.2.1.7-.1 1.2Z" />
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  alert: (
    <>
      <path d="M12 3 2 20h20L12 3Z" />
      <path d="M12 10v4M12 17h.01" />
    </>
  ),
  swap: <path d="M4 8h13l-3-3M20 16H7l3 3" />,
  phone: (
    <path d="M6 3h3l2 5-2 1c1 2 2 3 4 4l1-2 5 2v3c0 1-1 2-2 2A16 16 0 0 1 4 5c0-1 1-2 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  video: (
    <>
      <rect x="3" y="6" width="12" height="12" rx="2" />
      <path d="m15 10 6-3v10l-6-3" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </>
  ),
  // Üretra darlığı — ortadan daralan dikey kanal
  urethra: (
    <>
      <path d="M9 3c0 4-1.5 5-1.5 9S9 17 9 21M15 3c0 4 1.5 5 1.5 9S15 17 15 21" />
      <path d="M7.5 12h9" strokeDasharray="1.5 1.6" />
    </>
  ),
  // Böbrek (piyeloplasti/üreter)
  kidney: (
    <>
      <path d="M15 4c2.6 0 4 2.6 4 6.2 0 5.2-3 9.8-6.9 9.8-2.3 0-3.6-1.6-3.6-3.7 0-2.7 2.6-3.1 2.6-5.6 0-1.9-1.6-2.6-1.6-4.4C13.1 5 13.6 4 15 4Z" />
      <path d="M13.4 9.5c1 .2 1.7 1 1.7 2.1" />
    </>
  ),
  // Onarım (fistül) — dikişli yama
  repair: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M12 8.5v7M8.5 12h7" strokeDasharray="1.6 1.6" />
    </>
  ),
  // Greft/interpozisyon — dikişli şerit
  graft: (
    <>
      <path d="M4 9l16-4v6L4 15Z" />
      <path d="M9 7.5v6M13 6.5v6" strokeDasharray="1.4 1.4" />
    </>
  ),
  // Dosya/değerlendirme
  document: (
    <>
      <path d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v5h4M9 13h6M9 17h4" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.4 9.3v5.4l4.8-2.7Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M8 16.5v-6M8 7.9v.01M12 16.5v-6M12 13a2 2 0 0 1 4 0v3.5" />
    </>
  ),
  star: (
    <path d="M12 3.5l2.6 5.3 5.8.85-4.2 4.1 1 5.75-5.2-2.72-5.2 2.72 1-5.75-4.2-4.1 5.8-.85Z" />
  ),
  // Dolu üçgen (play). fill=currentColor ile svg'nin fill=none'ını geçersiz kılar.
  play: <path d="M8 5v14l11-7z" fill="currentColor" stroke="none" />
};

export function Icon({
  name,
  size = 24,
  ...props
}: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };

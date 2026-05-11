import type { SVGProps } from 'react';
import { useId } from 'react';

type Svg = SVGProps<SVGSVGElement> & { className?: string };

function useStableSvgId(): string {
  return useId().replace(/:/g, '');
}

function Base({ children, className, viewBox = '0 0 200 140', ...p }: Svg & { children: React.ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill="none"
      aria-hidden
      className={className}
      {...p}
    >
      {children}
    </svg>
  );
}

/** ステップ① サイト入力 */
export function IllustFlowSiteInput(props: Svg) {
  return (
    <Base viewBox="0 0 200 136" {...props}>
      <rect x="44" y="24" width="112" height="88" rx="10" fill="#eff6ff" stroke="#bae6fd" strokeWidth="1.5" />
      <path d="M58 42h84M58 56h56M58 70h72" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      <rect x="66" y="84" width="44" height="14" rx="3" fill="#0ea5e9" opacity="0.35" />
      <circle cx="158" cy="46" r="18" fill="#f97316" opacity="0.2" />
      <path d="M152 46l4 4 8-10" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </Base>
  );
}

/** ステップ② DM */
export function IllustFlowDm(props: Svg) {
  return (
    <Base viewBox="0 0 200 136" {...props}>
      <rect x="28" y="36" width="96" height="72" rx="12" fill="#fff" stroke="#bae6fd" strokeWidth="1.5" />
      <path d="M40 56h72M40 72h52M40 88h64" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M124 78l40 24c4 2.4 4 8.2 0 10.6l-40 24c-3.6 2.2-8.2.4-8.2-4.2V82.2c0-4.6 4.6-6.4 8.2-4.2z"
        fill="#f0f9ff"
        stroke="#0ea5e9"
        strokeWidth="1.5"
      />
      <circle cx="142" cy="96" r="5" fill="#f97316" opacity="0.65" />
    </Base>
  );
}

/** ステップ③ 契約・決済 */
export function IllustFlowContract(props: Svg) {
  return (
    <Base viewBox="0 0 200 136" {...props}>
      <rect x="52" y="28" width="96" height="80" rx="8" fill="#fff" stroke="#bae6fd" strokeWidth="1.5" />
      <path d="M66 48h68M66 64h48M66 80h60" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
      <rect x="78" y="94" width="44" height="18" rx="4" fill="#0ea5e9" opacity="0.25" />
      <path d="M92 102h16" stroke="#0369a1" strokeWidth="2" strokeLinecap="round" />
      <path d="M158 88c8 0 14 6 14 14s-6 14-14 14-14-6-14-14 6-14 14-14z" fill="#fff7ed" stroke="#fb923c" strokeWidth="1.5" />
      <path d="M152 98l4 4 10-12" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Base>
  );
}

/** ステップ④ 公開 */
export function IllustFlowLaunch(props: Svg) {
  return (
    <Base viewBox="0 0 200 136" {...props}>
      <rect x="48" y="34" width="104" height="72" rx="10" fill="#f8fafc" stroke="#bae6fd" strokeWidth="1.5" />
      <rect x="58" y="44" width="84" height="44" rx="4" fill="#eff6ff" />
      <path d="M70 60h60M70 72h40" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      <circle cx="100" cy="92" r="10" fill="#22c55e" opacity="0.25" />
      <path d="M96 92l3 3 7-8" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M156 40l-6 16h12l-6-16z" fill="#f97316" opacity="0.35" />
    </Base>
  );
}

/** 課題：フォロワー依存（SNS起点の不安定さ） */
export function IllustProblemFollower(props: Svg) {
  const u = useStableSvgId();
  return (
    <Base viewBox="0 0 240 132" {...props}>
      <defs>
        <linearGradient id={`${u}-ph`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0f9ff" />
          <stop offset="100%" stopColor="#e0f2fe" />
        </linearGradient>
        <linearGradient id={`${u}-ig`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fecd78" />
          <stop offset="45%" stopColor="#f0527e" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect x="12" y="14" width="216" height="104" rx="18" fill={`url(#${u}-ph)`} stroke="#bae6fd" strokeWidth="1.25" />
      <rect x="88" y="22" width="72" height="102" rx="18" transform="rotate(-7 124 73)" fill="#fff" stroke="#64748b" strokeWidth="1.35" />
      <rect x="96" y="32" width="56" height="72" rx="10" fill="#f8fafc" />
      <rect x="100" y="40" width="48" height="40" rx="12" fill={`url(#${u}-ig)`} opacity="0.92" />
      <circle cx="124" cy="60" r="12" fill="#fff" opacity="0.32" />
      <path
        d="M28 94c26-22 54-38 74-42s54 10 108-6"
        stroke="#f97316"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.82"
      />
      <path
        d="M32 106c42-38 94-54 174-76"
        stroke="#0ea5e9"
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.32"
      />
      <path
        fill="#fb7185"
        fillOpacity={0.9}
        d="M186 36c5.5 0 9 4.2 9 9.5-.1 12-19 28-24 33-5-5-24-21-24-33 0-5.8 4-9.5 9-9.5s7 3.2 9 7.5c2-4.4 5.5-7.5 11-7.5z"
      />
      <circle cx="34" cy="38" r="4" fill="#f97316" opacity="0.4" />
      <circle cx="26" cy="52" r="3" fill="#0ea5e9" opacity="0.35" />
    </Base>
  );
}

/** 課題：リーチのブレ（指標が乱高下） */
export function IllustProblemReach(props: Svg) {
  const u = useStableSvgId();
  return (
    <Base viewBox="0 0 240 132" {...props}>
      <defs>
        <linearGradient id={`${u}-card`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f0f9ff" />
        </linearGradient>
      </defs>
      <rect x="16" y="22" width="208" height="96" rx="16" fill={`url(#${u}-card)`} stroke="#bae6fd" strokeWidth="1.25" />
      <circle cx="40" cy="42" r="6" fill="#cbd5e1" />
      <path d="M38 41h4M41 42v6" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
      <rect x="54" y="36" width="56" height="8" rx="3" fill="#e2e8f0" />
      <path d="M36 102h168" stroke="#e2e8f0" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M36 78h168" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 5" />
      <path d="M36 58h168" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 5" />
      <path
        d="M44 92l22-28 20 18 24-34 18 12 22-22 20 14 24-30 18 20"
        stroke="#0ea5e9"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.55"
      />
      <path
        d="M44 94l26-42 26 38 26-54 26 48 26-36 26 22"
        stroke="#f97316"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <rect x="52" y="68" width="10" height="26" rx="3" fill="#0ea5e9" opacity="0.35" />
      <rect x="72" y="56" width="10" height="38" rx="3" fill="#0ea5e9" opacity="0.2" />
      <rect x="92" y="74" width="10" height="20" rx="3" fill="#f97316" opacity="0.45" />
      <rect x="112" y="48" width="10" height="46" rx="3" fill="#0ea5e9" opacity="0.25" />
      <rect x="132" y="62" width="10" height="32" rx="3" fill="#f97316" opacity="0.3" />
      <circle cx="200" cy="38" r="14" fill="#fff7ed" stroke="#fdba74" strokeWidth="1.2" />
      <path d="M196 38l4 4 8-10" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Base>
  );
}

/** 課題：情報の分散（導線がバラける） */
export function IllustProblemScatter(props: Svg) {
  const u = useStableSvgId();
  return (
    <Base viewBox="0 0 240 132" {...props}>
      <defs>
        <linearGradient id={`${u}-hub`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fcd34d" />
          <stop offset="55%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <circle cx="120" cy="66" r="34" fill="#fff" stroke="#e0f2fe" strokeWidth="2" />
      <rect x="96" y="46" width="48" height="48" rx="14" fill={`url(#${u}-hub)`} opacity="0.92" />
      <path d="M108 118L44 104" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="5 4" opacity="0.85" />
      <path d="M132 118L196 100" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="5 4" opacity="0.85" />
      <path d="M120 94v22" stroke="#f97316" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
      <path d="M94 104L76 74" stroke="#cbd5e1" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="4 4" opacity="0.75" />
      <path d="M146 102L174 74" stroke="#cbd5e1" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="4 4" opacity="0.75" />
      <rect x="28" y="22" width="44" height="30" rx="6" fill="#fff" stroke="#bae6fd" strokeWidth="1.2" />
      <path d="M38 36h24M38 44h16" stroke="#94a3b8" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="168" y="18" width="44" height="30" rx="6" fill="#eff6ff" stroke="#7dd3fc" strokeWidth="1.2" />
      <path d="M178 32h24M178 40h18" stroke="#94a3b8" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="18" y="84" width="44" height="30" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />
      <rect x="178" y="84" width="44" height="30" rx="6" fill="#fff" stroke="#bae6fd" strokeWidth="1.2" />
      <circle cx="50" cy="98" r="5" fill="#0ea5e9" opacity="0.4" />
      <circle cx="200" cy="98" r="5" fill="#f97316" opacity="0.45" />
      <circle cx="194" cy="34" r="5" fill="#64748b" opacity="0.35" />
      <circle cx="50" cy="36" r="5" fill="#64748b" opacity="0.35" />
    </Base>
  );
}

/** 課題：入口の偏り（接点がSNSに寄る） */
export function IllustProblemEntry(props: Svg) {
  const u = useStableSvgId();
  return (
    <Base viewBox="0 0 240 132" {...props}>
      <defs>
        <linearGradient id={`${u}-lp`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f0fdf4" />
        </linearGradient>
      </defs>
      <ellipse cx="86" cy="66" rx="52" ry="42" fill="#fef3c7" stroke="#fcd34d" strokeWidth="1.25" opacity="0.55" />
      <circle cx="58" cy="58" r="18" fill="#fff" stroke="#f97316" strokeWidth="1.5" />
      <circle cx="100" cy="52" r="16" fill="#fff" stroke="#ea580c" strokeWidth="1.5" />
      <circle cx="74" cy="82" r="14" fill="#fff" stroke="#fb923c" strokeWidth="1.5" />
      <circle cx="58" cy="58" r="6" fill="#fbcfe8" />
      <circle cx="58" cy="58" r="9" stroke="#f472b6" strokeWidth="1.4" />
      <rect x="150" y="34" width="72" height="64" rx="10" fill={`url(#${u}-lp)`} stroke="#86efac" strokeWidth="1.35" />
      <path d="M162 52h44M162 62h52M162 74h38" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="170" y="84" width="48" height="12" rx="4" fill="#22c55e" opacity="0.35" />
      <path d="M186 94h16" stroke="#15803d" strokeWidth="1.75" strokeLinecap="round" />
      <path
        d="M124 64c10-12 34-26 62-34"
        stroke="#f97316"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path d="M128 74h36" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 5" />
      <circle cx="130" cy="62" r="5" fill="#f97316" opacity="0.35" />
    </Base>
  );
}

/** Locamoとは：地域密着の店づくり支援 */
export function IllustFeatureLocal(props: Svg) {
  const u = useStableSvgId();
  return (
    <Base viewBox="0 0 220 120" {...props}>
      <defs>
        <linearGradient id={`${u}-roof`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      <path d="M28 112h164" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
      <path d="M48 112V72l54-42 54 42v40" fill="#fefce8" stroke="#fde047" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M72 112V92h76v20" fill="#fff" stroke="#bae6fd" strokeWidth="1.2" />
      <path d="M58 74l44-32 44 32" fill={`url(#${u}-roof)`} opacity="0.35" />
      <rect x="96" y="96" width="28" height="16" rx="2" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1.2" />
      <ellipse cx="110" cy="112" rx="26" ry="4" fill="#e2e8f0" opacity="0.5" />
      <path
        fill="#fef2f2"
        stroke="#f87171"
        strokeWidth="1.35"
        d="M174 54c16 0 24 17 24 32 0 18-34 42-42 52-8-10-42-34-42-52 0-15 12-32 28-32s14 14 21 26c5-13 18-26 37-26z"
      />
      <circle cx="174" cy="56" r="10" fill="#fff" stroke="#ef4444" strokeWidth="1.5" />
      <circle cx="174" cy="56" r="3" fill="#dc2626" />
    </Base>
  );
}

/** Locamoとは：買い切り型（月額の制作費なし） */
export function IllustFeatureBuyout(props: Svg) {
  const u = useStableSvgId();
  return (
    <Base viewBox="0 0 220 120" {...props}>
      <defs>
        <linearGradient id={`${u}-coin`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
      </defs>
      <rect x="36" y="28" width="148" height="68" rx="12" fill="#fff" stroke="#bae6fd" strokeWidth="1.35" />
      <path d="M54 52h112M54 66h92M54 78h104" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
      <rect x="66" y="86" width="88" height="14" rx="5" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.1" />
      <path d="M80 93l10 12 34-42" stroke="#16a34a" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="68" cy="102" rx="26" ry="10" fill={`url(#${u}-coin)`} stroke="#d97706" strokeWidth="1.1" />
      <ellipse cx="108" cy="102" rx="26" ry="10" fill={`url(#${u}-coin)`} stroke="#d97706" strokeWidth="1.1" opacity="0.85" />
      <ellipse cx="148" cy="102" rx="26" ry="10" fill={`url(#${u}-coin)`} stroke="#d97706" strokeWidth="1.1" opacity="0.7" />
      <path
        d="M152 22c12 0 22 10 22 22s-10 22-22 22-22-10-22-22 10-22 22-22z"
        fill="#ecfdf5"
        stroke="#22c55e"
        strokeWidth="1.5"
      />
      <path d="M148 36l6 6 12-14" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Base>
  );
}

/** Locamoとは：LPで注文までの導線設計 */
export function IllustFeatureCta(props: Svg) {
  const u = useStableSvgId();
  return (
    <Base viewBox="0 0 220 120" {...props}>
      <defs>
        <linearGradient id={`${u}-btn`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fdba74" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
      <rect x="50" y="18" width="120" height="92" rx="18" fill="#fff" stroke="#94a3b8" strokeWidth="1.5" />
      <rect x="62" y="32" width="96" height="48" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.1" />
      <path d="M74 46h72M74 56h54M74 66h62" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
      <rect x="70" y="86" width="80" height="18" rx="9" fill={`url(#${u}-btn)`} />
      <path d="M106 93h20M132 93l7 8-7 8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="84" cy="95" r="4" fill="#fff" opacity="0.9" />
      <path
        d="M38 82c10-34 118-52 154-74"
        stroke="#0ea5e9"
        strokeWidth="1.85"
        strokeLinecap="round"
        markerEnd="none"
        opacity="0.45"
      />
      <path d="M190 76l16-26" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
    </Base>
  );
}

/** ご案内：ご返信の目安 */
export function IllustGuideReply(props: Svg) {
  const u = useStableSvgId();
  return (
    <Base viewBox="0 0 200 100" {...props}>
      <defs>
        <linearGradient id={`${u}-c`} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="86" rx="72" ry="10" fill="#e2e8f0" opacity="0.45" />
      <circle cx="100" cy="46" r="34" fill={`url(#${u}-c)`} stroke="#7dd3fc" strokeWidth="1.5" />
      <circle cx="100" cy="46" r="28" stroke="#0ea5e9" strokeWidth="2.5" strokeDasharray="6 5" opacity="0.45" />
      <path d="M100 30v10M100 52v10" stroke="#0369a1" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M100 36l6 8h-12l6-8z" fill="#f97316" opacity="0.85" />
      <rect x="124" y="38" width="56" height="44" rx="10" fill="#fff" stroke="#bae6fd" strokeWidth="1.25" />
      <path d="M136 52h32M136 62h24" stroke="#cbd5e1" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="140" cy="52" r="3" fill="#22c55e" opacity="0.6" />
    </Base>
  );
}

/** ご案内：制作に含まれる範囲 */
export function IllustGuideIncluded(props: Svg) {
  const u = useStableSvgId();
  return (
    <Base viewBox="0 0 120 120" {...props}>
      <rect x="14" y="18" width="92" height="84" rx="12" fill="#fff" stroke="#86efac" strokeWidth="1.4" />
      <path d="M30 44h60M30 58h48M30 72h54" stroke="#e2e8f0" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="32" cy="44" r="6" fill="#ecfdf5" stroke="#22c55e" strokeWidth="1.2" />
      <path d="M30 44l2.5 2.5 5-6" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="58" r="6" fill="#ecfdf5" stroke="#22c55e" strokeWidth="1.2" />
      <path d="M30 58l2.5 2.5 5-6" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="72" r="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />
    </Base>
  );
}

/** ご案内：含まれない／別途になる範囲 */
export function IllustGuideExcluded(props: Svg) {
  return (
    <Base viewBox="0 0 120 120" {...props}>
      <rect x="18" y="22" width="84" height="76" rx="12" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.35" />
      <path d="M36 52h52M36 68h42" stroke="#e2e8f0" strokeWidth="1.85" strokeLinecap="round" />
      <rect x="40" y="34" width="40" height="10" rx="3" fill="#f1f5f9" />
      <circle cx="88" cy="58" r="22" stroke="#fca5a5" strokeWidth="2" strokeDasharray="5 5" fill="none" opacity="0.85" />
      <path d="M76 46l26 26M102 46l-26 26" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
    </Base>
  );
}

/** 課題セクション見出し下の連結リズム（4カードとの対応を示す装飾） */
export function IllustWorkflowProblemStrip(props: Svg) {
  return (
    <Base viewBox="0 0 320 44" {...props}>
      <path
        d="M24 22h276"
        stroke="#bae6fd"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.65"
      />
      {[
        { cx: 48, stroke: '#0ea5e9', fill: '#e0f2fe' },
        { cx: 118, stroke: '#f97316', fill: '#ffedd5' },
        { cx: 188, stroke: '#6366f1', fill: '#e0e7ff' },
        { cx: 258, stroke: '#22c55e', fill: '#dcfce7' },
      ].map(({ cx, stroke, fill }, i) => (
        <g key={i}>
          <circle cx={cx} cy="22" r="13" fill={fill} stroke={stroke} strokeWidth="1.5" opacity="0.95" />
          <circle cx={cx} cy="22" r="4.5" fill={stroke} opacity="0.35" />
        </g>
      ))}
    </Base>
  );
}

/** プラン：LP 1枚 */
export function IllustPlanLp(props: Svg) {
  return (
    <Base viewBox="0 0 160 120" {...props}>
      <rect x="28" y="20" width="104" height="80" rx="10" fill="#fff" stroke="#7dd3fc" strokeWidth="1.5" />
      <rect x="40" y="34" width="80" height="10" rx="2" fill="#e0f2fe" />
      <rect x="40" y="52" width="56" height="6" rx="2" fill="#f1f5f9" />
      <rect x="40" y="64" width="72" height="6" rx="2" fill="#f1f5f9" />
      <rect x="40" y="82" width="48" height="10" rx="3" fill="#0ea5e9" opacity="0.35" />
    </Base>
  );
}

/** プラン：HP 複数 */
export function IllustPlanHp(props: Svg) {
  return (
    <Base viewBox="0 0 160 120" {...props}>
      <rect x="48" y="28" width="68" height="72" rx="8" fill="#fff" stroke="#bae6fd" strokeWidth="1.5" />
      <rect x="40" y="36" width="68" height="72" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
      <rect x="52" y="48" width="44" height="6" rx="2" fill="#e0f2fe" />
      <rect x="52" y="60" width="52" height="5" rx="2" fill="#f1f5f9" />
      <rect x="52" y="70" width="36" height="5" rx="2" fill="#f1f5f9" />
      <rect x="52" y="84" width="40" height="8" rx="2" fill="#0ea5e9" opacity="0.28" />
    </Base>
  );
}

/** お問い合わせ：入力→DM（ワイド図とは別コンセプト） */
export function IllustContactHearingDm(props: Svg) {
  return (
    <Base viewBox="0 0 200 100" {...props}>
      <rect x="26" y="24" width="52" height="56" rx="8" fill="#fff" stroke="#bae6fd" strokeWidth="1.5" />
      <path d="M38 40h28M38 52h28M38 64h18" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
      <path d="M95 52h34" stroke="#f97316" strokeWidth="2" strokeDasharray="3 3" opacity="0.8" />
      <path d="M140 38h34v52h-34l-14-14V38h14z" fill="#fdf2f8" stroke="#f472b6" strokeWidth="1.2" opacity="0.6" />
      <circle cx="154" cy="56" r="8" fill="#0ea5e9" opacity="0.3" />
    </Base>
  );
}

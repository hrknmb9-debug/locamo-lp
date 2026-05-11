import type { SVGProps } from 'react';

type Svg = SVGProps<SVGSVGElement> & { className?: string };

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

/** 課題：フォロワー依存 */
export function IllustProblemFollower(props: Svg) {
  return (
    <Base viewBox="0 0 200 120" {...props}>
      <circle cx="100" cy="58" r="36" fill="#f0f9ff" stroke="#7dd3fc" strokeWidth="1.5" />
      <circle cx="88" cy="54" r="8" fill="#0ea5e9" opacity="0.5" />
      <path d="M76 78c6-10 16-14 24-14s18 4 24 14" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
      <path d="M122 38c10 2 18 10 20 20" stroke="#f97316" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <path d="M132 28c2 0 4 2 6 6s2 8 2 12" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </Base>
  );
}

/** 課題：リーチのブレ（波浪） */
export function IllustProblemReach(props: Svg) {
  return (
    <Base viewBox="0 0 200 120" {...props}>
      <path
        d="M24 68c16-12 32 12 48 0s32-12 48 0 32 12 48 0 32-12 48 0"
        stroke="#0ea5e9"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M32 86c14-10 28 10 42 0s28-10 42 0 28 10 42 0 28-10 42 0"
        stroke="#94a3b8"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="100" cy="44" r="6" fill="#f97316" opacity="0.55" />
    </Base>
  );
}

/** 課題：情報の分散 */
export function IllustProblemScatter(props: Svg) {
  return (
    <Base viewBox="0 0 200 120" {...props}>
      <rect x="36" y="28" width="36" height="28" rx="4" fill="#eff6ff" stroke="#bae6fd" />
      <rect x="92" y="42" width="36" height="28" rx="4" fill="#fff" stroke="#cbd5e1" />
      <rect x="136" y="64" width="36" height="28" rx="4" fill="#f0f9ff" stroke="#7dd3fc" />
      <path d="M54 56l34 12M110 56l14 18M156 78l-40-16" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
    </Base>
  );
}

/** 課題：入口の偏り */
export function IllustProblemEntry(props: Svg) {
  return (
    <Base viewBox="0 0 200 120" {...props}>
      <path d="M40 88h120" stroke="#e2e8f0" strokeWidth="2" />
      <circle cx="64" cy="88" r="10" fill="#0ea5e9" opacity="0.35" />
      <circle cx="120" cy="88" r="10" fill="#94a3b8" opacity="0.35" />
      <circle cx="168" cy="88" r="10" fill="#94a3b8" opacity="0.35" />
      <path d="M120 34v38M120 72l-10-10M120 72l10-10" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
    </Base>
  );
}

/** Locamoとは：地域 */
export function IllustFeatureLocal(props: Svg) {
  return (
    <Base viewBox="0 0 200 110" {...props}>
      <path d="M100 22l32 18v36l-32 18-32-18V40l32-18z" fill="#eff6ff" stroke="#0ea5e9" strokeWidth="1.5" />
      <circle cx="100" cy="52" r="10" fill="#f97316" opacity="0.28" />
      <path d="M100 46v12M94 52h12" stroke="#0369a1" strokeWidth="1.5" strokeLinecap="round" />
    </Base>
  );
}

/** Locamoとは：買い切り */
export function IllustFeatureBuyout(props: Svg) {
  return (
    <Base viewBox="0 0 200 110" {...props}>
      <rect x="52" y="28" width="96" height="56" rx="8" fill="#fff" stroke="#bae6fd" strokeWidth="1.5" />
      <path d="M70 48h60M70 62h40" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
      <rect x="82" y="72" width="36" height="12" rx="3" fill="#22c55e" opacity="0.25" />
      <path d="M92 78h16" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
    </Base>
  );
}

/** Locamoとは：導線設計 */
export function IllustFeatureCta(props: Svg) {
  return (
    <Base viewBox="0 0 200 110" {...props}>
      <rect x="40" y="36" width="120" height="44" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
      <path d="M52 52h40M52 64h28" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      <path d="M132 52h24a6 6 0 016 6v8a6 6 0 01-6 6h-24" fill="#0ea5e9" opacity="0.35" />
      <path d="M152 58l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

import { Button } from '@/components/ui/button';
import { LP_IMAGES } from '@/lp-images';
import { Instagram, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

import { DM_URL, IG_HANDLE, IG_URL } from '@/constants/locamo';

export default function Contact() {
  const faqs = [
    {
      q: 'どのくらいで完成しますか？',
      a: 'LP制作は2週間、ホームページ制作は3〜4週間が目安です。',
    },
    {
      q: '修正はできますか？',
      a: '制作完了後の簡易的な修正は無料で対応いたします。',
    },
    {
      q: '既存のInstagramを活かせますか？',
      a: 'もちろんです。既存のInstagramアカウントをそのまま活用できます。',
    },
    {
      q: 'どんな店舗でも対応できますか？',
      a: '飲食店・小売店・専門店など、大阪の個人店であればほぼ対応可能です。',
    },
  ];

  return (
    <div className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <p className="text-xs font-semibold tracking-widest text-accent uppercase text-center mb-3">
          Contact
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">
          お問合せ
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm leading-relaxed text-pretty">
          サイト内フォームのみで送信完了します。送信後、そのまま画面を閉じていただいて構いません。
        </p>

        {/* Main CTA */}
        <section className="mb-12 animate-fade-in-up">
          <div className="lp-soft-band flex flex-col items-stretch rounded-[1.5rem] border border-sky-100 px-5 py-10 text-center shadow-sm shadow-sky-950/5 sm:px-8 md:p-12">
            <div className="mx-auto mb-7 max-w-2xl overflow-hidden rounded-xl border border-sky-100/80">
              <img
                src={LP_IMAGES.servicesBanner}
                alt=""
                loading="lazy"
                className="aspect-[21/9] max-h-[8.5rem] w-full object-cover"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">ヒアリングでLPご依頼を始める（推奨）</h3>
            <p className="mb-8 max-w-md self-center text-sm leading-relaxed text-muted-foreground">
              DMを挟まなくて大丈夫です。4ステップの質問にお答えのうえ「送信」を押していただくと運営に届きます。
            </p>
            <div className="flex w-full justify-center px-2">
              <Button
                size="lg"
                className="btn-primary inline-flex max-w-[min(100%,22rem)] w-full justify-center px-6 py-6 text-sm font-semibold text-primary-foreground"
                asChild
              >
                <Link href="/hearing">
                  LPヒアリングへ進む
                  <ArrowRight size={16} className="shrink-0" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="mt-6 flex flex-col items-center gap-3 text-center text-sm">
              <a
                href={DM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-muted-foreground underline-offset-4 hover:text-accent hover:underline"
              >
                <MessageCircle size={16} aria-hidden /> Instagram DMは任意です
              </a>
              <Link href="/services/lp" className="font-medium text-accent underline-offset-4 hover:underline">
                LPプラン詳細のみ見る
              </Link>
              <Link href="/privacy" className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
                プライバシーポリシー
              </Link>
            </div>
          </div>
        </section>

        {/* Free Diagnosis Flow */}
        <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h3 className="text-xl font-bold mb-6 text-center">ご依頼〜制作までのイメージ</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                step: '1',
                title: 'ヒアリング送信',
                desc: 'サイトの4ステップに沿って入力し「送信」を押してください。離脱していただいてもデータは運営に届きます。',
              },
              {
                step: '2',
                title: '構成・ご提案',
                desc: '必要に応じてInstagram DMなどで短文のご質問のみ差し込むことがあります。',
              },
              {
                step: '3',
                title: 'お見積り〜ご確認',
                desc: 'LPの方向性・納期感・サーバー込みランニングを整理してお伝えします。',
              },
              {
                step: '4',
                title: '制作〜公開',
                desc: 'ご納得いただければ制作〜公開チェックまで伴走します。',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="animate-fade-in-up flex gap-4 rounded-[1.25rem] border border-sky-100 bg-card p-5 transition-all hover:border-sky-200 hover:shadow-md"
                style={{ animationDelay: `${0.08 * idx}s` }}
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground shadow-sm shadow-sky-300/50">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            ※別途 サーバー・ドメイン費用 月3,000円〜（込み）
          </p>
        </section>

        {/* Highlight Banner */}
        <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="rounded-[1.5rem] bg-accent p-7 text-center text-white shadow-lg shadow-sky-400/35 md:p-10">
            <h3 className="text-xl font-bold mb-2">
              無料診断は完全無料。
            </h3>
            <p className="text-white/80 text-sm">
              ご契約まで費用は発生しません。まずはお気軽にお問合せください。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-xl font-bold mb-6 text-center">よくある質問</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-[1.25rem] border border-sky-100 bg-card p-5 transition-all hover:border-sky-200 hover:shadow-sm"
              >
                <h4 className="font-semibold text-sm mb-2">{faq.q}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="rounded-[1.5rem] border border-sky-100 bg-secondary p-8 md:p-12">
            <h3 className="text-xl font-bold mb-2">まず一枚のLPから始めませんか</h3>
            <p className="text-muted-foreground text-sm mb-7 text-pretty">
              サイト内ヒアリングのみで運営に届きます。プランだけ先に知りたい場合も大丈夫です。
            </p>
            <Button size="lg" className="btn-primary px-8 py-6 text-sm font-semibold text-primary-foreground" asChild>
              <Link href="/hearing">
                LPのヒアリングを送信
                <ArrowRight className="ml-2 inline" size={16} aria-hidden />
              </Link>
            </Button>
          </div>
        </section>

        {/* Contact Info */}
        <section className="mt-12 text-center">
          <p className="text-muted-foreground text-xs mb-1">NANBA企画 · 大阪府</p>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline transition-colors"
          >
            <Instagram size={15} />
            {IG_HANDLE}
          </a>
        </section>
      </div>
    </div>
  );
}

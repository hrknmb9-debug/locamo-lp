import { Button } from '@/components/ui/button';
import { Instagram, MessageCircle, ArrowRight } from 'lucide-react';
import { LP_IMAGES } from '@/lp-images';

const DM_URL = 'https://ig.me/m/locamo.ink';
const IG_URL = 'https://www.instagram.com/locamo.ink/';

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
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm">
          ご質問・ご相談は、Instagram DMからお気軽にご連絡ください
        </p>

        {/* Main CTA */}
        <section className="mb-12 animate-fade-in-up">
          <div className="lp-soft-band rounded-[1.5rem] border border-sky-100 p-8 text-center shadow-sm shadow-sky-950/5 md:p-12">
            <div className="mx-auto mb-7 max-w-2xl overflow-hidden rounded-xl border border-sky-100/80">
              <img
                src={LP_IMAGES.servicesBanner}
                alt=""
                loading="lazy"
                className="aspect-[21/9] max-h-[8.5rem] w-full object-cover"
              />
            </div>
            <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl border border-sky-100 bg-white shadow-sm">
              <Instagram className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Instagram DMでお問合せ
            </h3>
            <p className="text-muted-foreground text-sm mb-7 max-w-md mx-auto leading-relaxed">
              フォームは使用していません。Locamoの公式Instagramアカウントに
              ダイレクトメッセージをお送りください。
            </p>
            <a href={DM_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button
                size="lg"
                className="btn-primary px-8 py-6 text-sm font-semibold text-primary-foreground"
              >
                <MessageCircle size={18} className="mr-2" />
                Instagram DMで連絡する
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </a>
          </div>
        </section>

        {/* Free Diagnosis Flow */}
        <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h3 className="text-xl font-bold mb-6 text-center">無料診断の流れ</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                step: '1',
                title: 'Instagram DMでお問合せ',
                desc: '「無料診断を希望します」とお送りください。',
              },
              {
                step: '2',
                title: '現状のお悩みをお聞かせ',
                desc: 'Instagramの運用状況や、集客の課題などをお教えください。',
              },
              {
                step: '3',
                title: '診断結果をご報告',
                desc: 'あなたの店舗に最適なプランと料金をご提案いたします。',
              },
              {
                step: '4',
                title: 'ご契約・制作開始',
                desc: 'ご納得いただければ、制作を開始いたします。',
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
            <h3 className="text-xl font-bold mb-2">
              フォロワーを来店客に、3万円〜で。
            </h3>
            <p className="text-muted-foreground text-sm mb-7">
              Locamoで、あなたの店舗の集客を次のレベルへ。
            </p>
            <a href={DM_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button
                size="lg"
                className="btn-primary px-8 py-6 text-sm font-semibold text-primary-foreground"
              >
                今すぐ無料診断を受ける
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </a>
          </div>
        </section>

        {/* Contact Info */}
        <section className="mt-12 text-center">
          <p className="text-muted-foreground text-xs mb-1">NANBA企画（個人事業主）· 大阪府</p>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline transition-colors"
          >
            <Instagram size={15} />
            @locamo.ink
          </a>
        </section>
      </div>
    </div>
  );
}

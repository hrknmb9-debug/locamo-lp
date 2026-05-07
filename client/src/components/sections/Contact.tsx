import { Button } from '@/components/ui/button';
import { Instagram, MessageCircle, ArrowRight } from 'lucide-react';

/**
 * Contact Section
 * Design: Neo-Tokyo Minimal
 * - Instagram DM CTA (primary)
 * - Free diagnosis flow
 * - FAQ recap
 */

export default function Contact() {
  const faqs = [
    {
      q: 'どのくらいで完成しますか？',
      a: 'LP制作は2週間、ホームページ制作は3～4週間が目安です。',
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
    <div className="space-y-16 md:space-y-24 py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          お問合せ
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          ご質問・ご相談は、Instagram DMからお気軽にご連絡ください
        </p>

        {/* Main CTA */}
        <section className="mb-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-accent/10 to-blue-500/10 border border-accent/30 rounded-lg p-8 md:p-12 text-center">
            <div className="mb-6">
              <Instagram className="w-16 h-16 mx-auto text-accent mb-4" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Instagram DMでお問合せ
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              フォームは使用していません。Locamoの公式Instagramアカウントに
              <br />
              ダイレクトメッセージをお送りください。
            </p>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 flex items-center gap-2"
              >
                <MessageCircle size={24} />
                Instagram DMで連絡する
                <ArrowRight size={20} />
              </Button>
            </a>
          </div>
        </section>

        {/* Free Diagnosis Flow */}
        <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-bold mb-8 text-center">
            無料診断の流れ
          </h3>

          <div className="space-y-4">
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
                className="bg-card border border-border rounded-lg p-6 flex gap-6 hover:shadow-lg hover:shadow-accent/20 transition-all animate-fade-in-up"
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Highlight */}
        <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-card border-2 border-accent rounded-lg p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-accent">無料診断は完全無料。</span>
              <br />
              ご契約まで費用は発生しません。
            </h3>
            <p className="text-muted-foreground">
              まずはお気軽にお問合せください。
              <br />
              あなたの店舗に最適なプランをご提案いたします。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold mb-8 text-center">
            よくある質問
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:shadow-accent/20 transition-all animate-fade-in-up"
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <h4 className="font-semibold mb-3 text-accent">{faq.q}</h4>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-secondary rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-4">
              Instagramだけでは、もったいない。
            </h3>
            <p className="text-muted-foreground mb-8">
              Locamoで、あなたの店舗の集客を次のレベルへ。
            </p>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6"
              >
                今すぐ無料診断を受ける
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
          </div>
        </section>

        {/* Contact Info */}
        <section className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <h4 className="font-semibold mb-4">運営</h4>
          <p className="text-muted-foreground mb-2">NANBA企画（個人事業主）</p>
          <p className="text-muted-foreground mb-4">大阪府</p>

          <div className="flex justify-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
            >
              <Instagram size={20} />
              <span>@locamo</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

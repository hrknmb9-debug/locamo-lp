import { Button } from '@/components/ui/button';
import { Instagram, MessageCircle, ArrowRight } from 'lucide-react';

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
          まずは無料診断から
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm">
          Instagram DMに「無料診断希望」と送るだけ。費用・契約は一切不要です。
        </p>

        {/* Main CTA */}
        <section className="mb-12 animate-fade-in-up">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-8 md:p-12 text-center">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-5 border border-border">
              <Instagram className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              今すぐInstagram DMで無料診断
            </h3>
            <p className="text-muted-foreground text-sm mb-2 max-w-md mx-auto leading-relaxed">
              「無料診断を希望します」と送るだけでOK。
              あなたのお店に最適なプランをご提案します。
            </p>
            <p className="text-xs text-muted-foreground mb-7">
              ※LP制作費：3万円〜　別途サーバー・ドメイン費用：月額3,000円〜（実費）
            </p>
            <a
              href="https://ig.me/m/locamo.ink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="btn-primary bg-accent text-accent-foreground font-semibold px-7 py-5 text-sm rounded-lg"
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
                className="bg-card border border-border rounded-xl p-5 flex gap-4 hover:shadow-md hover:border-blue-200 transition-all animate-fade-in-up"
                style={{ animationDelay: `${0.08 * idx}s` }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xs">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Highlight Banner */}
        <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-accent rounded-2xl p-7 md:p-10 text-center text-white">
            <h3 className="text-xl font-bold mb-2">
              診断〜お見積もりまで完全無料。
            </h3>
            <p className="text-white/80 text-sm">
              ご契約まで費用は一切かかりません。断っても大丈夫です。
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
                className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-blue-200 transition-all"
              >
                <h4 className="font-semibold text-sm mb-2">{faq.q}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-secondary rounded-2xl p-8 md:p-12 border border-border">
            <h3 className="text-xl font-bold mb-2">
              3万円〜で、Googleからも選ばれるお店へ。
            </h3>
            <p className="text-muted-foreground text-sm mb-7">
              InstagramもGoogleも、両方から集客できる仕組みをLocamoで。
            </p>
            <a
              href="https://ig.me/m/locamo.ink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="btn-primary bg-accent text-accent-foreground font-semibold px-7 py-5 text-sm rounded-lg"
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
            href="https://ig.me/m/locamo.ink"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline transition-colors"
          >
            <Instagram size={15} />
            @locamo
          </a>
        </section>
      </div>
    </div>
  );
}

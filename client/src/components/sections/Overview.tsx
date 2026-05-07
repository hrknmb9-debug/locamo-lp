import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, DollarSign, Share2, Search } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useCountUp } from '@/hooks/useCountUp';

function StatsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 });
  const count = useCountUp(50, 2000, isVisible);

  return (
    <div ref={ref} className="grid grid-cols-3 gap-4 md:gap-8 text-center animate-fade-in-up">
      <div>
        <div className="text-3xl md:text-4xl font-bold text-accent">{count}+</div>
        <p className="text-xs md:text-sm text-muted-foreground mt-1">制作実績</p>
      </div>
      <div>
        <div className="text-3xl md:text-4xl font-bold text-accent">0円</div>
        <p className="text-xs md:text-sm text-muted-foreground mt-1">月額費用</p>
      </div>
      <div>
        <div className="text-3xl md:text-4xl font-bold text-accent">2週間</div>
        <p className="text-xs md:text-sm text-muted-foreground mt-1">納期目安</p>
      </div>
    </div>
  );
}

export default function Overview() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center px-4 py-20 relative overflow-hidden">
        {/* Subtle background gradients */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center px-2">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-blue-50 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-blue-100 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
            大阪の個人店専門 · Web制作サービス
          </div>

          {/* Main Catchphrase */}
          <h1
            className="text-4xl md:text-6xl font-bold mb-5 leading-tight tracking-tight animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Instagramだけでは、<br className="hidden sm:block" />
            もったいない。
          </h1>

          {/* Subheading */}
          <p
            className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.35s' }}
          >
            大阪の個人店向けLP・ホームページ制作。
            Instagramとの連携を前提に設計された、買い切り型のWeb制作サービス。
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 justify-center mb-12 animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            <Button
              size="lg"
              className="btn-primary bg-accent text-accent-foreground font-semibold px-7 py-5 text-sm rounded-lg"
            >
              無料診断を受ける
              <ArrowRight className="ml-1.5" size={17} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary font-semibold px-7 py-5 text-sm rounded-lg"
            >
              サービスを見る
            </Button>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-border mx-auto mb-12"></div>

          {/* Stats */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <StatsSection />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase text-center mb-3">
            Problem
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">
            Instagramのみ運用の課題
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm">
            個人店がInstagramだけに頼ると、こんな問題が生じます
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <Zap className="w-5 h-5" />,
                title: 'フォロワー依存',
                desc: 'フォロワー数に左右される不安定な集客',
              },
              {
                icon: <DollarSign className="w-5 h-5" />,
                title: '広告費の増加',
                desc: 'アルゴリズム変更で広告費が増加する可能性',
              },
              {
                icon: <Share2 className="w-5 h-5" />,
                title: '情報の分散',
                desc: 'メニュー・アクセス・営業時間が散在',
              },
              {
                icon: <Search className="w-5 h-5" />,
                title: 'SEO対策なし',
                desc: 'Google検索からの流入が期待できない',
              },
            ].map((item, idx) => (
              <ProblemCard key={idx} item={item} delay={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* About Locamo Section */}
      <section className="py-16 md:py-24 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase text-center mb-3">
            About
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">
            Locamoとは
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm">
            Instagramと組み合わせることで、集客力を最大化するLP・ホームページ制作サービス
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: '地域密着',
                desc: '大阪の個人店を専門に対応。地元の事情を理解した提案が可能。',
              },
              {
                title: '買い切り型',
                desc: '制作費は一括買い切り。月額費用なし。ランニングコストゼロ。',
              },
              {
                title: 'Instagram連携設計',
                desc: 'Instagramからの流入導線を最初から組み込んだ設計。',
              },
            ].map((feature, idx) => (
              <FeatureCard key={idx} feature={feature} delay={idx} />
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="btn-primary bg-accent text-accent-foreground font-semibold px-7 py-5 text-sm rounded-lg"
            >
              まずは無料診断
              <ArrowRight className="ml-1.5" size={17} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProblemCard({ item, delay }: { item: any; delay: number }) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-blue-200 transition-all ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${0.08 * delay}s` }}
    >
      <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center text-accent mb-3">
        {item.icon}
      </div>
      <h3 className="text-base font-semibold mb-1">{item.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
    </div>
  );
}

function FeatureCard({ feature, delay }: { feature: any; delay: number }) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`bg-card border border-border rounded-xl p-6 text-center hover:shadow-md hover:border-blue-200 transition-all ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${0.1 * delay}s` }}
    >
      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
        <span className="text-base font-bold text-accent">{delay + 1}</span>
      </div>
      <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
    </div>
  );
}
